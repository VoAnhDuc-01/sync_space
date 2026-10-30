/**
 * Bộ công cụ kiểm tra Tính chất Quan hệ hai ngôi, Phân hoạch & Poset
 */

window.RelationTool = {
  parseElements(str) {
    return Array.from(new Set(
      str.split(/[,;\s]+/)
         .map(s => s.trim())
         .filter(s => s.length > 0)
    ));
  },

  parsePairs(str) {
    const pairs = [];
    // Match patterns like (a,b), (a, b), [a,b], a-b, a,b
    const regex = /\(?\s*([^(),;\s]+)\s*[,;\s-]\s*([^(),;\s]+)\s*\)?/g;
    let match;
    while ((match = regex.exec(str)) !== null) {
      if (match[1] && match[2]) {
        pairs.push([match[1].trim(), match[2].trim()]);
      }
    }
    return pairs;
  },

  analyze(setStr, pairsStr) {
    const elements = this.parseElements(setStr);
    if (elements.length === 0) {
      return { error: "Tập hợp A không được rỗng!" };
    }
    if (elements.length > 12) {
      return { error: "Vui lòng nhập tập A có tối đa 12 phần tử để hiển thị tốt nhất!" };
    }

    const rawPairs = this.parsePairs(pairsStr);
    const n = elements.length;
    const elemIndex = {};
    elements.forEach((e, idx) => { elemIndex[e] = idx; });

    // Validate pairs belong to A
    const validPairs = [];
    const pairSet = new Set();
    const matrix = Array.from({ length: n }, () => new Array(n).fill(0));

    for (const [u, v] of rawPairs) {
      if (elemIndex[u] !== undefined && elemIndex[v] !== undefined) {
        const key = `${u},${v}`;
        if (!pairSet.has(key)) {
          pairSet.add(key);
          validPairs.push([u, v]);
          matrix[elemIndex[u]][elemIndex[v]] = 1;
        }
      }
    }

    // 1. Reflexive: for all x in A, (x, x) in R
    let isReflexive = true;
    const reflexiveViolations = [];
    for (const e of elements) {
      if (!pairSet.has(`${e},${e}`)) {
        isReflexive = false;
        reflexiveViolations.push(e);
      }
    }

    // 2. Symmetric: for all x, y: (x, y) in R => (y, x) in R
    let isSymmetric = true;
    const symmetricViolations = [];
    for (const [u, v] of validPairs) {
      if (!pairSet.has(`${v},${u}`)) {
        isSymmetric = false;
        if (symmetricViolations.length < 5) {
          symmetricViolations.push(`(${u}, ${v}) có trong R nhưng (${v}, ${u}) không có`);
        }
      }
    }

    // 3. Antisymmetric: for all x != y, (x, y) in R => (y, x) not in R
    let isAntisymmetric = true;
    const antisymmetricViolations = [];
    for (const [u, v] of validPairs) {
      if (u !== v && pairSet.has(`${v},${u}`)) {
        isAntisymmetric = false;
        if (antisymmetricViolations.length < 5) {
          antisymmetricViolations.push(`cả (${u}, ${v}) và (${v}, ${u}) đều có trong R với ${u} ≠ ${v}`);
        }
      }
    }

    // 4. Transitive: for all x, y, z: (x, y) in R and (y, z) in R => (x, z) in R
    let isTransitive = true;
    const transitiveViolations = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === 1) {
          for (let k = 0; k < n; k++) {
            if (matrix[j][k] === 1 && matrix[i][k] === 0) {
              isTransitive = false;
              if (transitiveViolations.length < 5) {
                transitiveViolations.push(`(${elements[i]}, ${elements[j]}) và (${elements[j]}, ${elements[k]}) ∈ R nhưng (${elements[i]}, ${elements[k]}) ∉ R`);
              }
            }
          }
        }
      }
    }

    // Equivalence: Reflexive + Symmetric + Transitive
    const isEquivalence = isReflexive && isSymmetric && isTransitive;
    let equivalenceClasses = null;

    if (isEquivalence) {
      equivalenceClasses = [];
      const visited = new Set();
      for (const e of elements) {
        if (!visited.has(e)) {
          const cls = [];
          for (const other of elements) {
            if (pairSet.has(`${e},${other}`)) {
              cls.push(other);
              visited.add(other);
            }
          }
          equivalenceClasses.push(cls);
        }
      }
    }

    // Partial Order (Poset): Reflexive + Antisymmetric + Transitive
    const isPartialOrder = isReflexive && isAntisymmetric && isTransitive;
    let posetDetails = null;

    if (isPartialOrder) {
      // Find maximal, minimal, greatest, least
      const maximal = [];
      const minimal = [];

      for (let i = 0; i < n; i++) {
        // e is maximal if no other element dominates it
        let hasDominator = false;
        for (let j = 0; j < n; j++) {
          if (i !== j && matrix[i][j] === 1) {
            hasDominator = true;
            break;
          }
        }
        if (!hasDominator) maximal.push(elements[i]);

        // e is minimal if no other element precedes it
        let hasPredecessor = false;
        for (let j = 0; j < n; j++) {
          if (i !== j && matrix[j][i] === 1) {
            hasPredecessor = true;
            break;
          }
        }
        if (!hasPredecessor) minimal.push(elements[i]);
      }

      // Greatest: dominates all
      let greatest = null;
      for (let i = 0; i < n; i++) {
        let dominatesAll = true;
        for (let j = 0; j < n; j++) {
          if (matrix[j][i] === 0) { dominatesAll = false; break; }
        }
        if (dominatesAll) { greatest = elements[i]; break; }
      }

      // Least: precedes all
      let least = null;
      for (let i = 0; i < n; i++) {
        let precedesAll = true;
        for (let j = 0; j < n; j++) {
          if (matrix[i][j] === 0) { precedesAll = false; break; }
        }
        if (precedesAll) { least = elements[i]; break; }
      }

      // Check total order
      let isTotalOrder = true;
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (matrix[i][j] === 0 && matrix[j][i] === 0) {
            isTotalOrder = false;
            break;
          }
        }
        if (!isTotalOrder) break;
      }

      posetDetails = {
        maximal,
        minimal,
        greatest,
        least,
        isTotalOrder
      };
    }

    return {
      elements,
      validPairs,
      matrix,
      isReflexive,
      reflexiveViolations,
      isSymmetric,
      symmetricViolations,
      isAntisymmetric,
      antisymmetricViolations,
      isTransitive,
      transitiveViolations,
      isEquivalence,
      equivalenceClasses,
      isPartialOrder,
      posetDetails
    };
  }
};
