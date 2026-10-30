/**
 * Interactive Karnaugh Map Solver (2, 3, 4 biến)
 * Xuất công thức chuẩn LaTeX với gạch ngang trên đầu (\overline{x}) theo đúng Giáo trình GS. Nguyễn Hữu Anh & Đề thi ĐHSP
 */

window.KMapTool = {
  numVars: 4,
  grid: [],
  varNames: {
    2: ['x', 'y'],
    3: ['x', 'y', 'z'],
    4: ['x', 'y', 'z', 't']
  },

  gray1: [0, 1],
  gray2: [0, 1, 3, 2], // 00, 01, 11, 10

  init(numVars = 4) {
    this.numVars = numVars;
    const size = Math.pow(2, numVars);
    this.grid = new Array(size).fill(0);
  },

  setVal(index, val) {
    if (index >= 0 && index < this.grid.length) {
      this.grid[index] = val ? 1 : 0;
    }
  },

  toggle(index) {
    if (index >= 0 && index < this.grid.length) {
      this.grid[index] = this.grid[index] === 1 ? 0 : 1;
    }
  },

  setAll(val) {
    this.grid.fill(val ? 1 : 0);
  },

  getDimensions() {
    if (this.numVars === 2) return { rows: 2, cols: 2, rowVars: ['x'], colVars: ['y'] };
    if (this.numVars === 3) return { rows: 2, cols: 4, rowVars: ['x'], colVars: ['y', 'z'] };
    return { rows: 4, cols: 4, rowVars: ['x', 'y'], colVars: ['z', 't'] };
  },

  cellToMinterm(r, c) {
    if (this.numVars === 2) {
      const x = this.gray1[r];
      const y = this.gray1[c];
      return (x << 1) | y;
    } else if (this.numVars === 3) {
      const x = this.gray1[r];
      const yz = this.gray2[c];
      return (x << 2) | yz;
    } else {
      const xy = this.gray2[r];
      const zt = this.gray2[c];
      return (xy << 2) | zt;
    }
  },

  getGridValue(r, c) {
    const m = this.cellToMinterm(r, c);
    return this.grid[m] || 0;
  },

  solve() {
    const vars = this.varNames[this.numVars];
    const n = this.numVars;
    const ones = [];

    for (let i = 0; i < this.grid.length; i++) {
      if (this.grid[i] === 1) ones.push(i);
    }

    if (ones.length === 0) {
      return {
        minterms: [],
        canonicalDNF: "0",
        canonicalDNFLatex: "0",
        minimalSOP: "0",
        minimalSOPLatex: "0",
        primeImplicants: [],
        essentialPI: [],
        chosenPIs: [],
        andGates: 0,
        orGates: 0,
        notGates: 0
      };
    }

    if (ones.length === Math.pow(2, n)) {
      const allPI = { mask: (1 << n) - 1, val: 0, term: "1", termLatex: "1", literalCount: 0, literals: [], coverArray: ones };
      return {
        minterms: ones,
        canonicalDNF: "1",
        canonicalDNFLatex: "1",
        minimalSOP: "1",
        minimalSOPLatex: "1",
        primeImplicants: [allPI],
        essentialPI: [allPI],
        chosenPIs: [allPI],
        andGates: 0,
        orGates: 0,
        notGates: 0
      };
    }

    const mintermToLatex = (m) => {
      const parts = [];
      for (let i = 0; i < n; i++) {
        const bit = (m >> (n - 1 - i)) & 1;
        parts.push(bit === 1 ? vars[i] : `\\overline{${vars[i]}}`);
      }
      return parts.join('');
    };

    const canonicalTermsLatex = ones.map(mintermToLatex);
    const canonicalDNFLatex = canonicalTermsLatex.join(' \\lor ');

    let groups = {};
    for (const m of ones) {
      const count = this.countBits(m);
      if (!groups[count]) groups[count] = [];
      groups[count].push({ val: m, mask: 0, covers: new Set([m]), used: false });
    }

    const primeImplicants = [];
    let currentGroups = groups;

    while (Object.keys(currentGroups).length > 0) {
      const nextGroups = {};
      const combined = new Set();
      const groupKeys = Object.keys(currentGroups).map(Number).sort((a, b) => a - b);

      for (let idx = 0; idx < groupKeys.length; idx++) {
        const k1 = groupKeys[idx];
        const k2 = k1 + 1;
        const g1 = currentGroups[k1] || [];
        const g2 = currentGroups[k2] || [];

        for (const item1 of g1) {
          for (const item2 of g2) {
            if (item1.mask === item2.mask) {
              const diff = item1.val ^ item2.val;
              if (diff > 0 && (diff & (diff - 1)) === 0) {
                item1.used = true;
                item2.used = true;
                const newMask = item1.mask | diff;
                const newVal = item1.val & ~diff;
                const key = `${newVal}_${newMask}`;
                if (!combined.has(key)) {
                  combined.add(key);
                  const newCovers = new Set([...item1.covers, ...item2.covers]);
                  const count = this.countBits(newVal);
                  if (!nextGroups[count]) nextGroups[count] = [];
                  nextGroups[count].push({ val: newVal, mask: newMask, covers: newCovers, used: false });
                }
              }
            }
          }
        }
      }

      for (const k of groupKeys) {
        for (const item of currentGroups[k]) {
          if (!item.used) {
            const exists = primeImplicants.some(pi => pi.val === item.val && pi.mask === item.mask);
            if (!exists) primeImplicants.push(item);
          }
        }
      }

      currentGroups = nextGroups;
    }

    primeImplicants.forEach(pi => {
      const literals = [];
      const latexParts = [];
      const plainParts = [];
      for (let i = 0; i < n; i++) {
        const bitPos = n - 1 - i;
        if ((pi.mask & (1 << bitPos)) === 0) {
          const bitVal = (pi.val >> bitPos) & 1;
          literals.push({ varName: vars[i], negated: bitVal === 0 });
          latexParts.push(bitVal === 1 ? vars[i] : `\\overline{${vars[i]}}`);
          plainParts.push(bitVal === 1 ? vars[i] : `¬${vars[i]}`);
        }
      }
      pi.literals = literals;
      pi.literalCount = literals.length;
      pi.term = plainParts.join('') || '1';
      pi.termLatex = latexParts.join('') || '1';
      pi.coverArray = Array.from(pi.covers).sort((a, b) => a - b);
    });

    const essentialPI = [];
    const coveredMinterms = new Set();

    for (const m of ones) {
      const covering = primeImplicants.filter(pi => pi.covers.has(m));
      if (covering.length === 1) {
        const epi = covering[0];
        if (!essentialPI.includes(epi)) {
          essentialPI.push(epi);
          epi.covers.forEach(c => coveredMinterms.add(c));
        }
      }
    }

    const remainingMinterms = ones.filter(m => !coveredMinterms.has(m));
    let chosenPIs = [...essentialPI];

    if (remainingMinterms.length > 0) {
      const candidatePIs = primeImplicants.filter(pi => !essentialPI.includes(pi));
      const needed = new Set(remainingMinterms);

      while (needed.size > 0 && candidatePIs.length > 0) {
        let bestPI = null;
        let maxCover = -1;
        let minLiterals = 999;

        for (const pi of candidatePIs) {
          let count = 0;
          for (const m of pi.covers) {
            if (needed.has(m)) count++;
          }
          if (count > maxCover || (count === maxCover && pi.literalCount < minLiterals)) {
            maxCover = count;
            minLiterals = pi.literalCount;
            bestPI = pi;
          }
        }

        if (bestPI && maxCover > 0) {
          chosenPIs.push(bestPI);
          for (const m of bestPI.covers) needed.delete(m);
          const idx = candidatePIs.indexOf(bestPI);
          if (idx !== -1) candidatePIs.splice(idx, 1);
        } else {
          break;
        }
      }
    }

    chosenPIs.sort((a, b) => a.literalCount - b.literalCount || a.term.localeCompare(b.term));

    const minimalSOP = chosenPIs.map(pi => pi.term).join(' ∨ ') || '0';
    const minimalSOPLatex = chosenPIs.map(pi => pi.termLatex).join(' \\lor ') || '0';

    const negatedVarsSet = new Set();
    chosenPIs.forEach(pi => {
      pi.literals.forEach(lit => {
        if (lit.negated) negatedVarsSet.add(lit.varName);
      });
    });

    const andGates = chosenPIs.filter(pi => pi.literalCount >= 2).length;
    const orGates = chosenPIs.length > 1 ? 1 : 0;
    const notGates = negatedVarsSet.size;

    return {
      minterms: ones,
      canonicalDNF: canonicalDNFLatex,
      canonicalDNFLatex,
      minimalSOP,
      minimalSOPLatex,
      primeImplicants,
      essentialPI,
      chosenPIs,
      andGates,
      orGates,
      notGates
    };
  },

  countBits(n) {
    let count = 0;
    while (n > 0) {
      count += n & 1;
      n >>= 1;
    }
    return count;
  }
};
