/**
 * Trình phân tích cú pháp biểu thức logic & Tạo bảng chân trị tự động
 * Hỗ trợ các toán tử: ~, !, &, |, v, ->, <->, (+), xor
 */

class LogicParser {
  constructor() {
    this.tokens = [];
    this.pos = 0;
  }

  tokenize(expr) {
    const tokens = [];
    let i = 0;
    const str = expr.trim();

    while (i < str.length) {
      const c = str[i];
      if (/\\s/.test(c)) {
        i++;
        continue;
      }

      if (c === '(' || c === ')') {
        tokens.push({ type: 'PAREN', value: c });
        i++;
      } else if (c === '~' || c === '!' || c === '¬') {
        tokens.push({ type: 'NOT', value: '~' });
        i++;
      } else if (str.slice(i, i + 3) === '<->' || str.slice(i, i + 3) === '<=>' || c === '↔' || c === '⟷') {
        tokens.push({ type: 'IFF', value: '<->' });
        i += (c === '↔' || c === '⟷') ? 1 : 3;
      } else if (str.slice(i, i + 2) === '->' || str.slice(i, i + 2) === '=>' || c === '→' || c === '⟶') {
        tokens.push({ type: 'IMPLIES', value: '->' });
        i += (c === '→' || c === '⟶') ? 1 : 2;
      } else if (str.slice(i, i + 3) === '(+)' || str.slice(i, i + 3).toLowerCase() === 'xor' || c === '⊕') {
        tokens.push({ type: 'XOR', value: '⊕' });
        i += (c === '⊕') ? 1 : 3;
      } else if (c === '&' || c === '∧' || (c === '^' && str[i + 1] !== ' ') || (str.slice(i, i + 3).toLowerCase() === 'and')) {
        tokens.push({ type: 'AND', value: '∧' });
        i += (str.slice(i, i + 3).toLowerCase() === 'and') ? 3 : 1;
      } else if (c === '|' || c === '∨' || c.toLowerCase() === 'v' || (str.slice(i, i + 2).toLowerCase() === 'or')) {
        tokens.push({ type: 'OR', value: '∨' });
        i += (str.slice(i, i + 2).toLowerCase() === 'or') ? 2 : 1;
      } else if (c === '0' || c === '1') {
        tokens.push({ type: 'CONST', value: parseInt(c, 10) });
        i++;
      } else if (/[a-zA-Z]/.test(c)) {
        tokens.push({ type: 'VAR', value: c.toLowerCase() });
        i++;
      } else {
        throw new Error(`Ký tự không hợp lệ: "${c}" tại vị trí ${i}`);
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
      throw new Error(`Kỳ vọng token "${expectedType}" nhưng nhận được "${token.value}"`);
    }
    this.pos++;
    return token;
  }

  // Precedence: NOT > AND > XOR > OR > IMPLIES > IFF
  parseIff() {
    let left = this.parseImplies();
    while (this.peek() && this.peek().type === 'IFF') {
      const op = this.consume('IFF').value;
      const right = this.parseImplies();
      left = { type: 'BINARY', op, left, right, text: `(${left.text} ↔ ${right.text})` };
    }
    return left;
  }

  parseImplies() {
    let left = this.parseOr();
    if (this.peek() && this.peek().type === 'IMPLIES') {
      const op = this.consume('IMPLIES').value;
      const right = this.parseImplies(); // right-associative
      left = { type: 'BINARY', op, left, right, text: `(${left.text} → ${right.text})` };
    }
    return left;
  }

  parseOr() {
    let left = this.parseXor();
    while (this.peek() && this.peek().type === 'OR') {
      const op = this.consume('OR').value;
      const right = this.parseXor();
      left = { type: 'BINARY', op, left, right, text: `(${left.text} ∨ ${right.text})` };
    }
    return left;
  }

  parseXor() {
    let left = this.parseAnd();
    while (this.peek() && this.peek().type === 'XOR') {
      const op = this.consume('XOR').value;
      const right = this.parseAnd();
      left = { type: 'BINARY', op, left, right, text: `(${left.text} ⊕ ${right.text})` };
    }
    return left;
  }

  parseAnd() {
    let left = this.parseNot();
    while (this.peek() && this.peek().type === 'AND') {
      const op = this.consume('AND').value;
      const right = this.parseNot();
      left = { type: 'BINARY', op, left, right, text: `(${left.text} ∧ ${right.text})` };
    }
    return left;
  }

  parseNot() {
    if (this.peek() && this.peek().type === 'NOT') {
      this.consume('NOT');
      const operand = this.parseNot();
      return { type: 'UNARY', op: '¬', operand, text: `¬${operand.text}` };
    }
    return this.parsePrimary();
  }

  parsePrimary() {
    const token = this.peek();
    if (!token) throw new Error("Thiếu toán hạng!");

    if (token.type === 'CONST') {
      this.consume('CONST');
      return { type: 'CONST', value: token.value, text: String(token.value) };
    }

    if (token.type === 'VAR') {
      this.consume('VAR');
      return { type: 'VAR', name: token.value, text: token.value };
    }

    if (token.type === 'PAREN' && token.value === '(') {
      this.consume('PAREN');
      const inner = this.parseIff();
      this.consume('PAREN');
      return inner;
    }

    throw new Error(`Toán hạng không hợp lệ: "${token.value}"`);
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
        case '->': return (l === 1 && r === 0) ? 0 : 1;
        case '<->': return (l === r) ? 1 : 0;
        default: return 0;
      }
    }
    return 0;
  }
}

/**
 * Trình tạo bảng chân trị
 */
window.TruthTableTool = {
  parser: new LogicParser(),

  generate(expression) {
    try {
      const ast = this.parser.parse(expression);
      const varSet = this.parser.extractVariables(ast);
      const variables = Array.from(varSet).sort();

      if (variables.length === 0) {
        const val = this.parser.evaluate(ast, {});
        return {
          variables: [],
          rows: [{ env: {}, result: val }],
          isTautology: val === 1,
          isContradiction: val === 0,
          isContingent: false,
          totalRows: 1
        };
      }

      if (variables.length > 6) {
        throw new Error("Chỉ hỗ trợ tối đa 6 biến để đảm bảo hiệu năng trình duyệt!");
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
        const result = this.parser.evaluate(ast, env);
        if (result === 1) onesCount++;
        rows.push({ env, result });
      }

      return {
        variables,
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
