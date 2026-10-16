/**
 * Interactive Karnaugh Map Solver (2, 3, 4 biến)
 * Hỗ trợ giao diện ô lưới Gray code tương tác, tìm tế bào lớn, tế bào cốt yếu và công thức tối tiểu DNF
 */

window.KMapTool = {
  numVars: 4,
  grid: [], // array of 0/1 of size 2^numVars
  varNames: {
    2: ['x', 'y'],
    3: ['x', 'y', 'z'],
    4: ['x', 'y', 'z', 't']
  },

  // Gray code sequences
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

  // Convert (row, col) to minterm decimal index
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

  // Solve and find minimal SOP using Quine-McCluskey / Petrick approach
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
        minimalSOP: "0",
        primeImplicants: [],
        essentialPI: [],
        andGates: 0,
        orGates: 0
      };
    }

    if (ones.length === Math.pow(2, n)) {
      return {
        minterms: ones,
        canonicalDNF: "1",
        minimalSOP: "1",
        primeImplicants: [{ mask: 0, val: 0, term: "1", covers: ones }],
        essentialPI: [{ mask: 0, val: 0, term: "1", covers: ones }],
        andGates: 0,
        orGates: 0
      };
    }

    // Format minterm to literal term
    const mintermToTerm = (m) => {
      let res = "";
      for (let i = 0; i < n; i++) {
        const bit = (m >> (n - 1 - i)) & 1;
        res += bit === 1 ? vars[i] : `~${vars[i]}`;
      }
      return res;
    };

    const canonicalTerms = ones.map(mintermToTerm);
    const canonicalDNF = canonicalTerms.join(" ∨ ");

    // Quine-McCluskey representation:
    // an implicant is an object: { val, mask, covers: Set }
    // mask has bit 1 where variable is eliminated.
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
              // Check if diff is power of 2
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

      // Collect unused as prime implicants
      for (const k of groupKeys) {
        for (const item of currentGroups[k]) {
          if (!item.used) {
            // Check duplicates in PI
            const exists = primeImplicants.some(pi => pi.val === item.val && pi.mask === item.mask);
            if (!exists) primeImplicants.push(item);
          }
        }
      }

      currentGroups = nextGroups;
    }

    // Format PI term
    const formatPI = (pi) => {
      let res = "";
      for (let i = 0; i < n; i++) {
        const bitPos = n - 1 - i;
        if ((pi.mask & (1 << bitPos)) === 0) {
          const bitVal = (pi.val >> bitPos) & 1;
          res += bitVal === 1 ? vars[i] : `~${vars[i]}`;
        }
      }
      return res || "1";
    };

    primeImplicants.forEach(pi => {
      pi.term = formatPI(pi);
      pi.coverArray = Array.from(pi.covers);
    });

    // Step 2 & 3: Find Essential Prime Implicants and minimal cover
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

    // Uncovered minterms
    const remainingMinterms = ones.filter(m => !coveredMinterms.has(m));
    let chosenPIs = [...essentialPI];

    if (remainingMinterms.length > 0) {
      // Greedy cover for remaining
      const candidatePIs = primeImplicants.filter(pi => !essentialPI.includes(pi));
      const needed = new Set(remainingMinterms);

      while (needed.size > 0 && candidatePIs.length > 0) {
        // Choose PI that covers most uncovered
        let bestPI = null;
        let maxCover = -1;

        for (const pi of candidatePIs) {
          let count = 0;
          for (const m of pi.covers) {
            if (needed.has(m)) count++;
          }
          if (count > maxCover) {
            maxCover = count;
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

    // Sort terms for neatness
    const terms = chosenPIs.map(pi => pi.term).sort();
    const minimalSOP = terms.join(" ∨ ") || "0";

    // Count gates
    const andGates = chosenPIs.filter(pi => pi.term.length > 2 || (pi.term.length === 2 && !pi.term.startsWith('~'))).length;
    const orGates = chosenPIs.length > 1 ? 1 : 0;

    return {
      minterms: ones,
      canonicalDNF,
      minimalSOP,
      primeImplicants,
      essentialPI,
      chosenPIs,
      andGates,
      orGates
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
