/**
 * Bộ công cụ tính toán Giải tích Tổ hợp, Thuật toán Euclide & Đồng dư Modulo
 * Hỗ trợ xuất công thức LaTeX chuẩn đại học Việt Nam
 */

window.CombinatoricsTool = {
  factorial(n) {
    if (n < 0) return 0n;
    if (n === 0 || n === 1) return 1n;
    let res = 1n;
    for (let i = 2n; i <= BigInt(n); i++) {
      res *= i;
    }
    return res;
  },

  // Hoán vị P_n = n!
  permutation(n) {
    if (n < 0) return 0n;
    return this.factorial(n);
  },

  // Chỉnh hợp A_n^k = n! / (n - k)!
  arrangement(n, k) {
    if (k < 0 || k > n) return 0n;
    let res = 1n;
    for (let i = 0n; i < BigInt(k); i++) {
      res *= (BigInt(n) - i);
    }
    return res;
  },

  // Chỉnh hợp lặp \overline{A}_n^k = n^k
  arrangementWithRep(n, k) {
    if (n < 0 || k < 0) return 0n;
    if (k === 0) return 1n;
    return BigInt(n) ** BigInt(k);
  },

  // Tổ hợp C_n^k = n! / (k! * (n - k)!)
  combination(n, k) {
    if (k < 0 || k > n) return 0n;
    if (k === 0 || k === n) return 1n;
    if (k > n - k) k = n - k;
    let num = 1n;
    let den = 1n;
    for (let i = 1n; i <= BigInt(k); i++) {
      num *= (BigInt(n) - i + 1n);
      den *= i;
    }
    return num / den;
  },

  // Tổ hợp lặp \overline{C}_n^k = C_{n + k - 1}^k
  combinationWithRep(n, k) {
    if (n <= 0 || k < 0) return 0n;
    return this.combination(n + k - 1, k);
  },

  // Thuật toán Euclide mở rộng
  extendedEuclid(a, b) {
    let x0 = 1n, x1 = 0n;
    let y0 = 0n, y1 = 1n;
    let r0 = BigInt(Math.abs(a));
    let r1 = BigInt(Math.abs(b));
    const steps = [];

    while (r1 !== 0n) {
      const q = r0 / r1;
      const r2 = r0 % r1;
      const x2 = x0 - q * x1;
      const y2 = y0 - q * y1;

      steps.push({
        dividend: r0.toString(),
        divisor: r1.toString(),
        quotient: q.toString(),
        remainder: r2.toString(),
        equation: `${r0} = ${r1} × ${q} + ${r2}`,
        equationLatex: `${r0} = ${r1} \\cdot ${q} + ${r2}`
      });

      r0 = r1;
      r1 = r2;
      x0 = x1;
      x1 = x2;
      y0 = y1;
      y1 = y2;
    }

    const m = (a < 0) ? -x0 : x0;
    const n = (b < 0) ? -y0 : y0;
    const gcd = r0;
    const lcm = (gcd === 0n) ? 0n : (BigInt(Math.abs(a)) * BigInt(Math.abs(b))) / gcd;

    const fmtSigned = (v) => (v < 0n ? `(${v})` : `${v}`);

    return {
      gcd: gcd.toString(),
      lcm: lcm.toString(),
      m: m.toString(),
      n: n.toString(),
      steps,
      bezoutEquation: `${gcd} = (${m}) × ${a} + (${n}) × ${b}`,
      bezoutLatex: `\\gcd(${a}, ${b}) = ${gcd} = ${fmtSigned(m)} \\cdot ${fmtSigned(BigInt(a))} + ${fmtSigned(n)} \\cdot ${fmtSigned(BigInt(b))}`
    };
  },

  // Giải phương trình đồng dư tuyến tính: ax ≡ b (mod m)
  solveLinearCongruence(a, b, m) {
    const bigA = BigInt(a);
    const bigB = BigInt(b);
    const bigM = BigInt(m);

    if (bigM <= 0n) return { error: "Modulo $m$ phải là số nguyên dương lớn hơn $0$!" };

    const normA = ((bigA % bigM) + bigM) % bigM;
    const euclid = this.extendedEuclid(Number(normA), Number(bigM));
    const g = BigInt(euclid.gcd);

    if (bigB % g !== 0n) {
      return {
        hasSolution: false,
        gcd: g.toString(),
        messageLatex: `Phương trình vô nghiệm vì $\\gcd(${a}, ${m}) = ${g} \\nmid ${b}$.`
      };
    }

    const b0 = bigB / g;
    const m0 = bigM / g;
    const invA0 = BigInt(euclid.m);
    let x0 = ((invA0 * b0) % m0 + m0) % m0;

    const solutions = [];
    const limit = g > 20n ? 20n : g;
    for (let i = 0n; i < limit; i++) {
      const sol = (x0 + i * m0) % bigM;
      solutions.push(sol.toString());
    }

    return {
      hasSolution: true,
      gcd: g.toString(),
      solutionsCount: g.toString(),
      baseSolution: x0.toString(),
      stepMod: m0.toString(),
      allSolutions: solutions,
      generalFormLatex: g === 1n
        ? `x \\equiv ${x0} \\pmod{${bigM}}`
        : `x \\equiv ${x0} + k \\cdot ${m0} \\pmod{${bigM}} \\quad (k = 0, 1, \\dots, ${g - 1n})`
    };
  }
};
