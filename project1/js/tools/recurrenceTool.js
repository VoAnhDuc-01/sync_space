/**
 * Bộ giải Hệ thức Đệ quy Tuyến tính (Bậc 1 & Bậc 2) kèm lời giải từng bước chuẩn LaTeX
 * Phục vụ Chương 5 & Ôn thi Kết thúc học phần Toán Rời Rạc (ĐHSP TP.HCM)
 */

window.RecurrenceTool = {
  gcd(a, b) {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));
    while (b !== 0) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a || 1;
  },

  formatFractionLatex(num, den) {
    if (den < 0) { num = -num; den = -den; }
    if (num === 0) return '0';
    const g = this.gcd(num, den);
    const p = num / g;
    const q = den / g;
    if (q === 1) return `${p}`;
    return p < 0 ? `-\\frac{${Math.abs(p)}}{${q}}` : `\\frac{${p}}{${q}}`;
  },

  formatBasePower(r, expStr = 'n') {
    if (r === 1) return '1';
    if (r < 0) return `(${r})^{${expStr}}`;
    return `${r}^{${expStr}}`;
  },

  solveSecondOrder(c1, c2, a0, a1) {
    // Recurrence: a_n = c1 * a_{n-1} + c2 * a_{n-2}
    if ([c1, c2, a0, a1].some(v => typeof v !== 'number' || Number.isNaN(v))) {
      return { error: 'Vui lòng nhập đầy đủ các hệ số thực hợp lệ!' };
    }

    // Compute first 10 terms directly from recurrence
    const sequence = [a0, a1];
    for (let n = 2; n <= 10; n++) {
      sequence.push(c1 * sequence[n - 1] + c2 * sequence[n - 2]);
    }

    // Build recurrence display
    const rhsParts = [];
    if (c1 !== 0) {
      if (c1 === 1) rhsParts.push('a_{n-1}');
      else if (c1 === -1) rhsParts.push('-a_{n-1}');
      else rhsParts.push(`${c1}a_{n-1}`);
    }
    if (c2 !== 0) {
      const sign = c2 > 0 && rhsParts.length > 0 ? '+ ' : (c2 < 0 ? '- ' : '');
      const absC2 = Math.abs(c2);
      rhsParts.push(`${sign}${absC2 === 1 ? '' : absC2}a_{n-2}`);
    }
    const recurrenceLatex = `a_n = ${rhsParts.join(' ') || '0'}, \\quad a_0 = ${a0}, \\; a_1 = ${a1}`;

    // Case 0: First-order linear homogeneous (c2 === 0)
    if (c2 === 0) {
      const formulaLatex = c1 === 0
        ? `a_n = 0 \\quad (\\forall n \\ge 1), \\; a_0 = ${a0}`
        : `a_n = ${a0 === 0 ? '0' : (a0 === 1 ? this.formatBasePower(c1, 'n') : `${a0} \\cdot ${this.formatBasePower(c1, 'n')}`)}`;
      return {
        caseType: 'Bậc 1 thuần nhất (Cấp số nhân)',
        recurrenceLatex,
        charEqLatex: `r - (${c1}) = 0 \\iff r = ${c1}`,
        rootsLatex: `r = ${c1}`,
        generalFormLatex: `a_n = \\alpha \\cdot ${this.formatBasePower(c1, 'n')}`,
        constantsLatex: `\\alpha = a_0 = ${a0}`,
        closedFormLatex: formulaLatex,
        sequence
      };
    }

    // Characteristic equation: r^2 - c1*r - c2 = 0
    const bTerm = -c1 === 0 ? '' : (-c1 > 0 ? `+ ${-c1 === 1 ? '' : -c1}r` : `- ${Math.abs(-c1) === 1 ? '' : Math.abs(-c1)}r`);
    const cTerm = -c2 > 0 ? `+ ${-c2}` : `- ${Math.abs(-c2)}`;
    const charEqLatex = `r^2 ${bTerm} ${cTerm} = 0`;

    const delta = c1 * c1 + 4 * c2;
    const isIntInput = [c1, c2, a0, a1].every(Number.isInteger);

    // Case 1: Double root (delta === 0)
    if (Math.abs(delta) < 1e-12) {
      const r0 = c1 / 2;
      // a_n = (alpha + beta * n) * r0^n
      // n=0: alpha = a0
      // n=1: (alpha + beta)*r0 = a1 => beta = a1/r0 - a0
      const alpha = a0;
      const beta = r0 !== 0 ? (a1 - a0 * r0) / r0 : 0;

      let closedFormLatex = '';
      if (isIntInput && Number.isInteger(r0) && r0 !== 0) {
        const alphaLatex = `${a0}`;
        const betaNum = a1 - a0 * r0;
        const betaDen = r0;
        const betaLatex = this.formatFractionLatex(betaNum, betaDen);
        const factorParts = [];
        if (a0 !== 0) factorParts.push(alphaLatex);
        if (betaNum !== 0) {
          const bAbs = this.formatFractionLatex(Math.abs(betaNum), Math.abs(betaDen));
          const bCoeff = bAbs === '1' ? 'n' : `${bAbs}n`;
          if (factorParts.length === 0) {
            factorParts.push(betaNum / betaDen < 0 ? `-${bCoeff}` : bCoeff);
          } else {
            factorParts.push(betaNum / betaDen < 0 ? `- ${bCoeff}` : `+ ${bCoeff}`);
          }
        }
        const polyStr = factorParts.length === 0 ? '0' : (factorParts.length === 1 ? factorParts[0] : `\\left(${factorParts.join(' ')}\\right)`);
        closedFormLatex = polyStr === '0' ? 'a_n = 0' : `a_n = ${polyStr} \\cdot ${this.formatBasePower(r0, 'n')}`;

        return {
          caseType: 'Nghiệm thực kép (Δ = 0)',
          recurrenceLatex,
          charEqLatex: `${charEqLatex} \\quad (\\Delta = (${c1})^2 - 4 \\cdot (${-c2}) = 0)`,
          rootsLatex: `r_1 = r_2 = r_0 = ${r0}`,
          generalFormLatex: `a_n = (\\alpha + \\beta n) \\cdot ${this.formatBasePower(r0, 'n')}`,
          constantsLatex: `\\begin{cases} a_0 = \\alpha = ${a0} \\\\ a_1 = (\\alpha + \\beta)\\cdot ${r0} = ${a1} \\end{cases} \\implies \\alpha = ${alphaLatex}, \\; \\beta = ${betaLatex}`,
          closedFormLatex,
          sequence
        };
      }

      closedFormLatex = `a_n = (${Number(alpha.toFixed(4))} + ${Number(beta.toFixed(4))}n) \\cdot ${this.formatBasePower(Number(r0.toFixed(4)), 'n')}`;
      return {
        caseType: 'Nghiệm thực kép (Δ = 0)',
        recurrenceLatex,
        charEqLatex: `${charEqLatex} \\quad (\\Delta = 0)`,
        rootsLatex: `r_1 = r_2 = ${Number(r0.toFixed(4))}`,
        generalFormLatex: `a_n = (\\alpha + \\beta n) r_0^n`,
        constantsLatex: `\\alpha = ${Number(alpha.toFixed(4))}, \\; \\beta = ${Number(beta.toFixed(4))}`,
        closedFormLatex,
        sequence
      };
    }

    // Case 2: Distinct real roots (delta > 0)
    if (delta > 0) {
      const sqrtDelta = Math.sqrt(delta);
      const isPerfectSquare = isIntInput && Math.abs(sqrtDelta - Math.round(sqrtDelta)) < 1e-12;

      if (isPerfectSquare) {
        const s = Math.round(sqrtDelta);
        // Check if (c1 + s) and (c1 - s) are even -> integer roots!
        if ((c1 + s) % 2 === 0) {
          const r1 = (c1 + s) / 2;
          const r2 = (c1 - s) / 2;
          // alpha + beta = a0
          // alpha*r1 + beta*r2 = a1
          // alpha = (a1 - a0*r2) / (r1 - r2), beta = (a0*r1 - a1) / (r1 - r2)
          const den = r1 - r2;
          const alphaNum = a1 - a0 * r2;
          const betaNum = a0 * r1 - a1;

          const alphaLatex = this.formatFractionLatex(alphaNum, den);
          const betaLatex = this.formatFractionLatex(betaNum, den);

          const buildTerm = (num, d, root, isFirst) => {
            if (num === 0) return '';
            const signNeg = (num * d) < 0;
            const absFrac = this.formatFractionLatex(Math.abs(num), Math.abs(d));
            const powPart = this.formatBasePower(root, 'n');
            let body = '';
            if (powPart === '1') body = absFrac;
            else if (absFrac === '1') body = powPart;
            else body = `${absFrac} \\cdot ${powPart}`;

            if (isFirst) return signNeg ? `-${body}` : body;
            return signNeg ? ` - ${body}` : ` + ${body}`;
          };

          const t1 = buildTerm(alphaNum, den, r1, true);
          const t2 = buildTerm(betaNum, den, r2, t1 === '');
          const closedFormLatex = `a_n = ${(t1 + t2) || '0'}`;

          return {
            caseType: 'Hai nghiệm thực phân biệt (Δ > 0)',
            recurrenceLatex,
            charEqLatex: `${charEqLatex} \\quad (\\Delta = (${c1})^2 - 4 \\cdot (${-c2}) = ${delta})`,
            rootsLatex: `r_1 = ${r1}, \\quad r_2 = ${r2}`,
            generalFormLatex: `a_n = \\alpha \\cdot ${this.formatBasePower(r1, 'n')} + \\beta \\cdot ${this.formatBasePower(r2, 'n')}`,
            constantsLatex: `\\begin{cases} \\alpha + \\beta = ${a0} \\\\ ${r1}\\alpha + (${r2})\\beta = ${a1} \\end{cases} \\implies \\alpha = ${alphaLatex}, \\; \\beta = ${betaLatex}`,
            closedFormLatex,
            sequence
          };
        }
      }

      // Irrational real roots (e.g. Fibonacci: delta = 5)
      const r1 = (c1 + sqrtDelta) / 2;
      const r2 = (c1 - sqrtDelta) / 2;
      const alpha = (a1 - a0 * r2) / (r1 - r2);
      const beta = (a0 * r1 - a1) / (r1 - r2);

      const r1Str = isIntInput ? `\\frac{${c1} + \\sqrt{${delta}}}{2}` : Number(r1.toFixed(4));
      const r2Str = isIntInput ? `\\frac{${c1} - \\sqrt{${delta}}}{2}` : Number(r2.toFixed(4));

      return {
        caseType: 'Hai nghiệm thực vô tỉ phân biệt (Δ > 0)',
        recurrenceLatex,
        charEqLatex: `${charEqLatex} \\quad (\\Delta = ${Number(delta.toFixed(4))} > 0)`,
        rootsLatex: `r_1 = ${r1Str}, \\quad r_2 = ${r2Str}`,
        generalFormLatex: `a_n = \\alpha r_1^n + \\beta r_2^n`,
        constantsLatex: `\\alpha \\approx ${Number(alpha.toFixed(4))}, \\; \\beta \\approx ${Number(beta.toFixed(4))}`,
        closedFormLatex: `a_n = ${Number(alpha.toFixed(4))} \\left(${r1Str}\\right)^n ${beta >= 0 ? '+' : '-'} ${Number(Math.abs(beta).toFixed(4))} \\left(${r2Str}\\right)^n`,
        sequence
      };
    }

    // Case 3: Complex conjugate roots (delta < 0)
    const re = c1 / 2;
    const im = Math.sqrt(-delta) / 2;
    const rho = Math.sqrt(re * re + im * im);
    const theta = Math.atan2(im, re);
    const k1 = a0;
    const k2 = Math.sin(theta) !== 0 ? (a1 / rho - a0 * Math.cos(theta)) / Math.sin(theta) : 0;

    return {
      caseType: 'Hai nghiệm phức liên hợp (Δ < 0)',
      recurrenceLatex,
      charEqLatex: `${charEqLatex} \\quad (\\Delta = ${Number(delta.toFixed(4))} < 0)`,
      rootsLatex: `r_{1,2} = ${Number(re.toFixed(4))} \\pm ${Number(im.toFixed(4))}i = ${Number(rho.toFixed(4))}(\\cos\\theta \\pm i\\sin\\theta)`,
      generalFormLatex: `a_n = \\rho^n (k_1 \\cos(n\\theta) + k_2 \\sin(n\\theta))`,
      constantsLatex: `\\rho = \\sqrt{-c_2} \\approx ${Number(rho.toFixed(4))}, \\; \\theta \\approx ${Number(theta.toFixed(4))}\\text{ rad}, \\; k_1 = ${Number(k1.toFixed(4))}, \\; k_2 \\approx ${Number(k2.toFixed(4))}`,
      closedFormLatex: `a_n = (${Number(rho.toFixed(4))})^n \\left[${Number(k1.toFixed(4))}\\cos(n\\theta) ${k2 >= 0 ? '+' : '-'} ${Number(Math.abs(k2).toFixed(4))}\\sin(n\\theta)\\right]`,
      sequence: sequence.map(v => Number(v.toFixed(4)))
    };
  }
};
