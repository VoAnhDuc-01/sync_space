/**
 * Bộ công cụ tính toán Giải tích Tổ hợp, Thuật toán Euclide & Đồng dư Modulo
 */

window.CombinatoricsTool = {
  // Factorial with BigInt
  factorial(n) {
    if (n < 0) return 0n;
    if (n === 0 || n === 1) return 1n;
    let res = 1n;
    for (let i = 2n; i <= BigInt(n); i++) {
      res *= i;
    }
    return res;
  },

  // Permutation P(n) = n!
  permutation(n) {
    if (n < 0) return 0n;
    return this.factorial(n);
  },

  // Arrangement A(n, k) = n! / (n - k)!
  arrangement(n, k) {
    if (k < 0 || k > n) return 0n;
    let res = 1n;
    for (let i = 0n; i < BigInt(k); i++) {
      res *= (BigInt(n) - i);
    }
    return res;
  },

  // Combination C(n, k) = n! / (k! * (n - k)!)
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

  // Combination with repetition C_bar(n, k) = C(n + k - 1, k)
  combinationWithRep(n, k) {
    if (n <= 0 || k < 0) return 0n;
    return this.combination(n + k - 1, k);
  },

  // Extended Euclidean Algorithm
  // Returns { gcd, m, n, steps } such that gcd = m*a + n*b
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
        equation: `${r0} = ${r1} × ${q} + ${r2}`
      });

      r0 = r1;
      r1 = r2;
      x0 = x1;
      x1 = x2;
      y0 = y1;
      y1 = y2;
    }

    // Adjust signs
    const m = (a < 0) ? -x0 : x0;
    const n = (b < 0) ? -y0 : y0;
    const gcd = r0;
    const lcm = (gcd === 0n) ? 0n : (BigInt(Math.abs(a)) * BigInt(Math.abs(b))) / gcd;

    return {
      gcd: gcd.toString(),
      lcm: lcm.toString(),
      m: m.toString(),
      n: n.toString(),
      steps,
      bezoutEquation: `${gcd} = (${m}) × ${a} + (${n}) × ${b}`
    };
  },

  // Solve linear congruence: ax ≡ b (mod m)
  solveLinearCongruence(a, b, m) {
    a = BigInt(a);
    b = BigInt(b);
    m = BigInt(m);

    if (m <= 0n) return { error: "Modulo m phải là số nguyên dương > 0!" };

    const euclid = this.extendedEuclid(Number(a), Number(m));
    const g = BigInt(euclid.gcd);

    if (b % g !== 0n) {
      return {
        hasSolution: false,
        message: `Phương trình vô nghiệm vì USCLN(${a}, ${m}) = ${g} không là ước của ${b}.`
      };
    }

    // Particular solution
    const a0 = a / g;
    const b0 = b / g;
    const m0 = m / g;
    const invA0 = BigInt(euclid.m); // inverse of a0 mod m0
    let x0 = (invA0 * b0) % m0;
    if (x0 < 0n) x0 = (x0 + m0) % m0;

    const solutions = [];
    for (let i = 0n; i < g; i++) {
      const sol = (x0 + i * m0) % m;
      solutions.push(sol.toString());
    }

    return {
      hasSolution: true,
      gcd: g.toString(),
      solutionsCount: g.toString(),
      baseSolution: x0.toString(),
      allSolutions: solutions,
      generalForm: `x ≡ ${x0} + k × ${m0} (mod ${m}), với k = 0, 1, ..., ${g - 1n}`
    };
  }
};
