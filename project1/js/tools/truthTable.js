/**
 * Trình phân tích cú pháp biểu thức logic & Tạo bảng chân trị tự động
 * Hỗ trợ ký hiệu Toán học Unicode (¬, ∧, ∨, →, ↔) và cú pháp nhập nhanh (~, !, &, |, ->, <->)
 * Xuất biểu thức chuẩn LaTeX KaTeX cùng các cột mệnh đề trung gian
 */

class LogicParser {
  constructor() {
    this.tokens = [];
    this.pos = 0;
  }

  tokenize(expr) {
    const tokens = [];
    let i = 0;
    // Normalize common LaTeX commands if pasted by user
    const str = expr
      .replace(/\\neg\b/g, '¬')
      .replace(/\\land\b|\\wedge\b/g, '∧')
      .replace(/\\lor\b|\\vee\b/g, '∨')
      .replace(/\\leftrightarrow\b|\\iff\b|\\Leftrightarrow\b/g, '↔')
      .replace(/\\rightarrow\b|\\to\b|\\implies\b|\\Rightarrow\b/g, '→')
      .trim();

    while (i < str.length) {
      const c = str[i];
      if (/\s/.test(c)) {
        i++;
        continue;
      }

      if (c === '(' || c === ')' || c === '[' || c === ']') {
        tokens.push({ type: 'PAREN', value: (c === '[' ? '(' : c === ']' ? ')' : c) });
        i++;
      } else if (c === '~' || c === '!' || c === '¬') {
        tokens.push({ type: 'NOT', value: '¬' });
        i++;
      } else if (str.slice(i, i + 3) === '<->' || str.slice(i, i + 3) === '<=>' || c === '↔' || c === '⟷' || c === '⇔') {
        tokens.push({ type: 'IFF', value: '↔' });
        i += (c === '↔' || c === '⟷' || c === '⇔') ? 1 : 3;
      } else if (str.slice(i, i + 2) === '->' || str.slice(i, i + 2) === '=>' || c === '→' || c === '⟶' || c === '⇒') {
        tokens.push({ type: 'IMPLIES', value: '→' });
        i += (c === '→' || c === '⟶' || c === '⇒') ? 1 : 2;
      } else if (str.slice(i, i + 3) === '(+)' || (str.slice(i, i + 3).toLowerCase() === 'xor' && !/[a-zA-Z]/.test(str[i + 3] || '')) || c === '⊕') {
        tokens.push({ type: 'XOR', value: '⊕' });
        i += (c === '⊕') ? 1 : 3;
      } else if (
        c === '&' ||
        c === '∧' ||
        c === '·' ||
        c === '^' ||
        (str.slice(i, i + 3).toLowerCase() === 'and' && !/[a-zA-Z]/.test(str[i + 3] || ''))
      ) {
        tokens.push({ type: 'AND', value: '∧' });
        i += (str.slice(i, i + 3).toLowerCase() === 'and' && !/[a-zA-Z]/.test(str[i + 3] || '')) ? 3 : 1;
      } else if (
        c === '|' ||
        c === '∨' ||
        (c.toLowerCase() === 'v' && (i === 0 || /[\s)\]]/.test(str[i - 1])) && /[\s(\[~!¬a-zA-Z01]/.test(str[i + 1] || '')) ||
        (str.slice(i, i + 2).toLowerCase() === 'or' && !/[a-zA-Z]/.test(str[i + 2] || ''))
      ) {
        tokens.push({ type: 'OR', value: '∨' });
        i += (str.slice(i, i + 2).toLowerCase() === 'or' && !/[a-zA-Z]/.test(str[i + 2] || '')) ? 2 : 1;
      } else if (c === '0' || c === '1') {
        tokens.push({ type: 'CONST', value: parseInt(c, 10) });
        i++;
      } else if (/[a-zA-Z]/.test(c)) {
        tokens.push({ type: 'VAR', value: c.toLowerCase() });
        i++;
      } else {
        throw new Error(`Ký tự không hợp lệ: "${c}" tại vị trí ${i + 1}`);
      }
    }
    return tokens;
  }

  parse(expr) {
    this.tokens = this.tokenize(expr);
    this.pos = 0;
    if (this.tokens.length === 0) {
      throw new Error("Biểu thức rỗng!");
    }
    const ast = this.parseIff();
    if (this.pos < this.tokens.length) {
      throw new Error(`Cú pháp không hợp lệ gần: "${this.tokens[this.pos].value}"`);
    }
    return ast;
  }

  peek() {
    return this.tokens[this.pos] || null;
  }

  consume(expectedType) {
    const token = this.peek();
    if (!token) throw new Error("Kết thúc biểu thức bất ngờ!");
    if (expectedType && token.type !== expectedType) {
      throw new Error(`Kỳ vọng "${expectedType}" nhưng nhận được "${token.value}"`);
    }
    this.pos++;
    return token;
  }

  // Precedence: NOT (5) > AND (4) > XOR (3) > OR (2) > IMPLIES (1) > IFF (0)
  parseIff() {
    let left = this.parseImplies();
    while (this.peek() && this.peek().type === 'IFF') {
      this.consume('IFF');
      const right = this.parseImplies();
      left = {
        type: 'BINARY',
        op: '↔',
        prec: 0,
        left,
        right,
        text: `(${left.text} ↔ ${right.text})`,
        latex: `${this.wrapChildLatex(left, 0)} \\leftrightarrow ${this.wrapChildLatex(right, 0, true)}`
      };
    }
    return left;
  }

  parseImplies() {
    let left = this.parseOr();
    if (this.peek() && this.peek().type === 'IMPLIES') {
      this.consume('IMPLIES');
      const right = this.parseImplies();
      left = {
        type: 'BINARY',
        op: '→',
        prec: 1,
        left,
        right,
        text: `(${left.text} → ${right.text})`,
        latex: `${this.wrapChildLatex(left, 1, true)} \\to ${this.wrapChildLatex(right, 1, false)}`
      };
    }
    return left;
  }

  parseOr() {
    let left = this.parseXor();
    while (this.peek() && this.peek().type === 'OR') {
      this.consume('OR');
      const right = this.parseXor();
      left = {
        type: 'BINARY',
        op: '∨',
        prec: 2,
        left,
        right,
        text: `(${left.text} ∨ ${right.text})`,
        latex: `${this.wrapChildLatex(left, 2)} \\lor ${this.wrapChildLatex(right, 2)}`
      };
    }
    return left;
  }

  parseXor() {
    let left = this.parseAnd();
    while (this.peek() && this.peek().type === 'XOR') {
      this.consume('XOR');
      const right = this.parseAnd();
      left = {
        type: 'BINARY',
        op: '⊕',
        prec: 3,
        left,
        right,
        text: `(${left.text} ⊕ ${right.text})`,
        latex: `${this.wrapChildLatex(left, 3)} \\oplus ${this.wrapChildLatex(right, 3)}`
      };
    }
    return left;
  }

  parseAnd() {
    let left = this.parseNot();
    while (this.peek() && this.peek().type === 'AND') {
      this.consume('AND');
      const right = this.parseNot();
      left = {
        type: 'BINARY',
        op: '∧',
        prec: 4,
        left,
        right,
        text: `(${left.text} ∧ ${right.text})`,
        latex: `${this.wrapChildLatex(left, 4)} \\land ${this.wrapChildLatex(right, 4)}`
      };
    }
    return left;
  }

  parseNot() {
    if (this.peek() && this.peek().type === 'NOT') {
      this.consume('NOT');
      const operand = this.parseNot();
      const innerLatex = operand.type === 'BINARY' ? `(${operand.latex})` : operand.latex;
      return {
        type: 'UNARY',
        op: '¬',
        prec: 5,
        operand,
        text: `¬${operand.text}`,
        latex: `\\neg ${innerLatex}`
      };
    }
    return this.parsePrimary();
  }

  parsePrimary() {
    const token = this.peek();
    if (!token) throw new Error("Thiếu toán hạng!");

    if (token.type === 'CONST') {
      this.consume('CONST');
      return { type: 'CONST', prec: 6, value: token.value, text: String(token.value), latex: String(token.value) };
    }

    if (token.type === 'VAR') {
      this.consume('VAR');
      return { type: 'VAR', prec: 6, name: token.value, text: token.value, latex: token.value };
    }

    if (token.type === 'PAREN' && token.value === '(') {
      this.consume('PAREN');
      const inner = this.parseIff();
      this.consume('PAREN');
      return inner;
    }

    throw new Error(`Toán hạng không hợp lệ: "${token.value}"`);
  }

  wrapChildLatex(node, parentPrec, strictEqual = false) {
    if (!node || node.type !== 'BINARY') return node.latex;
    if (node.prec < parentPrec || (strictEqual && node.prec === parentPrec)) {
      return `(${node.latex})`;
    }
    // Also wrap if mixing AND and OR at adjacent levels for clarity
    if ((parentPrec === 2 && node.prec === 4) || (parentPrec === 4 && node.prec === 2)) {
      return `(${node.latex})`;
    }
    return node.latex;
  }

  extractVariables(ast, vars = new Set()) {
    if (!ast) return vars;
    if (ast.type === 'VAR') {
      vars.add(ast.name);
    } else if (ast.type === 'UNARY') {
      this.extractVariables(ast.operand, vars);
    } else if (ast.type === 'BINARY') {
      this.extractVariables(ast.left, vars);
      this.extractVariables(ast.right, vars);
    }
    return vars;
  }

  collectSubExpressions(ast, list = [], seen = new Set()) {
    if (!ast) return list;
    if (ast.type === 'UNARY') {
      this.collectSubExpressions(ast.operand, list, seen);
    } else if (ast.type === 'BINARY') {
      this.collectSubExpressions(ast.left, list, seen);
      this.collectSubExpressions(ast.right, list, seen);
    }
    if ((ast.type === 'UNARY' || ast.type === 'BINARY') && !seen.has(ast.text)) {
      seen.add(ast.text);
      list.push(ast);
    }
    return list;
  }

  evaluate(ast, env) {
    if (ast.type === 'CONST') return ast.value;
    if (ast.type === 'VAR') return env[ast.name] ? 1 : 0;
    if (ast.type === 'UNARY' && ast.op === '¬') {
      return this.evaluate(ast.operand, env) === 1 ? 0 : 1;
    }
    if (ast.type === 'BINARY') {
      const l = this.evaluate(ast.left, env);
      const r = this.evaluate(ast.right, env);
      switch (ast.op) {
        case '∧': return (l === 1 && r === 1) ? 1 : 0;
        case '∨': return (l === 1 || r === 1) ? 1 : 0;
        case '⊕': return (l !== r) ? 1 : 0;
        case '→': return (l === 1 && r === 0) ? 0 : 1;
        case '↔': return (l === r) ? 1 : 0;
        default: return 0;
      }
    }
    return 0;
  }
}

window.TruthTableTool = {
  parser: new LogicParser(),

  generate(expression) {
    try {
      const ast = this.parser.parse(expression);
      const varSet = this.parser.extractVariables(ast);
      const variables = Array.from(varSet).sort();
      const allSubs = this.parser.collectSubExpressions(ast);
      // Intermediate columns (excluding root ast itself), capped at 5 for clean table width
      const subAsts = allSubs.filter(n => n.text !== ast.text).slice(0, 5);

      if (variables.length === 0) {
        const val = this.parser.evaluate(ast, {});
        return {
          variables: [],
          subExpressions: [],
          mainLatex: ast.latex,
          rows: [{ env: {}, subVals: [], result: val }],
          isTautology: val === 1,
          isContradiction: val === 0,
          isContingent: false,
          onesCount: val === 1 ? 1 : 0,
          zerosCount: val === 0 ? 1 : 0,
          totalRows: 1
        };
      }

      if (variables.length > 6) {
        throw new Error("Chỉ hỗ trợ tối đa 6 biến độc lập để đảm bảo hiệu năng trình duyệt!");
      }

      const totalRows = Math.pow(2, variables.length);
      const rows = [];
      let onesCount = 0;

      for (let i = 0; i < totalRows; i++) {
        const env = {};
        for (let j = 0; j < variables.length; j++) {
          const bit = (i >> (variables.length - 1 - j)) & 1;
          env[variables[j]] = bit;
        }
        const subVals = subAsts.map(sub => this.parser.evaluate(sub, env));
        const result = this.parser.evaluate(ast, env);
        if (result === 1) onesCount++;
        rows.push({ env, subVals, result });
      }

      return {
        variables,
        subExpressions: subAsts.map(s => ({ text: s.text, latex: s.latex })),
        mainLatex: ast.latex,
        rows,
        totalRows,
        onesCount,
        zerosCount: totalRows - onesCount,
        isTautology: onesCount === totalRows,
        isContradiction: onesCount === 0,
        isContingent: onesCount > 0 && onesCount < totalRows
      };
    } catch (err) {
      return { error: err.message };
    }
  }
};
