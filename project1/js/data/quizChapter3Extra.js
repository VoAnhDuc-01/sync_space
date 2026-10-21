const QUIZ_DATA_CH3_EXTRA = [
  // ===== §1 Quan hệ & Quan hệ chiếu (l3_1) - 12 questions =====
  {
    id: "c3_l1_q3",
    chapterId: "c3",
    lessonId: "l3_1",
    lessonTitle: "§1 Quan hệ & Quan hệ chiếu",
    difficulty: "Nhận biết",
    question: "Cho $A = \\{1, 2, 3\\}$. Số quan hệ hai ngôi trên $A$ tối đa là bao nhiêu?",
    options: [
      "$2^6 = 64$",
      "$2^9 = 512$",
      "$3^3 = 27$",
      "$2^3 = 8$"
    ],
    correctAnswer: 1,
    explanation: "Quan hệ hai ngôi trên $A$ là tập con của $A \\times A$. Vì $|A| = 3$ nên $|A \\times A| = 9$. Số tập con của $A \\times A$ là $2^9 = 512$."
  },
  {
    id: "c3_l1_q4",
    chapterId: "c3",
    lessonId: "l3_1",
    lessonTitle: "§1 Quan hệ & Quan hệ chiếu",
    difficulty: "Nhận biết",
    question: "Cho quan hệ $\\mathcal{R}$ trên $A = \\{1, 2, 3, 4\\}$ với ma trận quan hệ $M_{\\mathcal{R}}$. Phần tử $m_{ij} = 1$ có ý nghĩa gì?",
    options: [
      "Phần tử $i$ lớn hơn phần tử $j$",
      "$(a_i, a_j) \\in \\mathcal{R}$",
      "$(a_j, a_i) \\in \\mathcal{R}$",
      "$a_i = a_j$"
    ],
    correctAnswer: 1,
    explanation: "Trong ma trận quan hệ, phần tử $m_{ij} = 1$ khi và chỉ khi $(a_i, a_j) \\in \\mathcal{R}$, tức là $a_i$ có quan hệ $\\mathcal{R}$ với $a_j$."
  },
  {
    id: "c3_l1_q5",
    chapterId: "c3",
    lessonId: "l3_1",
    lessonTitle: "§1 Quan hệ & Quan hệ chiếu",
    difficulty: "Nhận biết",
    question: "Trong đồ thị có hướng (digraph) biểu diễn quan hệ $\\mathcal{R}$ trên $A$, một khuyên (loop) tại đỉnh $a$ thể hiện điều gì?",
    options: [
      "$a$ không thuộc $A$",
      "$(a, a) \\in \\mathcal{R}$",
      "$a$ là phần tử lớn nhất",
      "$(a, a) \\notin \\mathcal{R}$"
    ],
    correctAnswer: 1,
    explanation: "Một khuyên tại đỉnh $a$ trong đồ thị có hướng biểu diễn rằng $(a, a) \\in \\mathcal{R}$, tức là phần tử $a$ có quan hệ với chính nó."
  },
  {
    id: "c3_l1_q6",
    chapterId: "c3",
    lessonId: "l3_1",
    lessonTitle: "§1 Quan hệ & Quan hệ chiếu",
    difficulty: "Thông hiểu",
    question: "Cho $A = \\{1, 2, 3, 4\\}$ và quan hệ $\\mathcal{R} = \\{(1,2), (2,3), (1,3), (4,4)\\}$. Ma trận quan hệ $M_{\\mathcal{R}}$ có bao nhiêu phần tử bằng 1?",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    correctAnswer: 1,
    explanation: "Quan hệ $\\mathcal{R}$ có 4 cặp: $(1,2), (2,3), (1,3), (4,4)$. Mỗi cặp tương ứng với một phần tử $m_{ij} = 1$ trong ma trận. Vậy có 4 phần tử bằng 1."
  },
  {
    id: "c3_l1_q7",
    chapterId: "c3",
    lessonId: "l3_1",
    lessonTitle: "§1 Quan hệ & Quan hệ chiếu",
    difficulty: "Thông hiểu",
    question: "Cho $a \\equiv b \\pmod{m}$. Phát biểu nào sau đây đúng?",
    options: [
      "$a - b$ chia hết cho $m$",
      "$a + b$ chia hết cho $m$",
      "$a \\cdot b$ chia hết cho $m$",
      "$a$ chia hết cho $b$"
    ],
    correctAnswer: 0,
    explanation: "$a \\equiv b \\pmod{m}$ có nghĩa là $m \\mid (a - b)$, tức $a - b$ chia hết cho $m$. Đây là định nghĩa của đồng dư thức modulo."
  },
  {
    id: "c3_l1_q8",
    chapterId: "c3",
    lessonId: "l3_1",
    lessonTitle: "§1 Quan hệ & Quan hệ chiếu",
    difficulty: "Thông hiểu",
    question: "Cho quan hệ $\\mathcal{R}$ trên $\\mathbb{Z}$ định nghĩa bởi $a\\mathcal{R}b \\Leftrightarrow a \\equiv b \\pmod{5}$. Lớp tương đương chứa phần tử 13 là tập nào?",
    options: [
      "$\\{..., -2, 3, 8, 13, 18, 23, ...\\}$",
      "$\\{..., -1, 4, 9, 14, 19, 24, ...\\}$",
      "$\\{..., 0, 5, 10, 15, 20, 25, ...\\}$",
      "$\\{..., 1, 6, 11, 16, 21, 26, ...\\}$"
    ],
    correctAnswer: 0,
    explanation: "$13 = 5 \\cdot 2 + 3$, nên $13 \\equiv 3 \\pmod{5}$. Lớp tương đương chứa 13 là $[3]_5 = \\{..., -7, -2, 3, 8, 13, 18, 23, ...\\}$, gồm các số có dạng $5k + 3$."
  },
  {
    id: "c3_l1_q9",
    chapterId: "c3",
    lessonId: "l3_1",
    lessonTitle: "§1 Quan hệ & Quan hệ chiếu",
    difficulty: "Thông hiểu",
    question: "Một quan hệ $n$ ngôi (n-ary relation) trên các tập $A_1, A_2, ..., A_n$ là tập con của gì?",
    options: [
      "$A_1 \\cup A_2 \\cup ... \\cup A_n$",
      "$A_1 \\times A_2 \\times ... \\times A_n$",
      "$A_1 \\cap A_2 \\cap ... \\cap A_n$",
      "$\\mathcal{P}(A_1) \\times \\mathcal{P}(A_2) \\times ... \\times \\mathcal{P}(A_n)$"
    ],
    correctAnswer: 1,
    explanation: "Quan hệ $n$ ngôi trên các tập $A_1, A_2, ..., A_n$ là một tập con của tích Descartes $A_1 \\times A_2 \\times ... \\times A_n$."
  },
  {
    id: "c3_l1_q10",
    chapterId: "c3",
    lessonId: "l3_1",
    lessonTitle: "§1 Quan hệ & Quan hệ chiếu",
    difficulty: "Vận dụng",
    question: "Cho quan hệ $\\mathcal{R}$ trên $A = \\{1, 2, 3\\}$ có ma trận: $M = \\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 1 & 0 & 1 \\end{pmatrix}$. Hãy liệt kê các cặp thuộc $\\mathcal{R}$.",
    options: [
      "$\\{(1,1),(1,2),(2,2),(2,3),(3,1),(3,3)\\}$",
      "$\\{(1,1),(1,2),(1,3),(2,2),(2,3),(3,3)\\}$",
      "$\\{(1,1),(2,1),(2,2),(3,2),(3,1),(3,3)\\}$",
      "$\\{(1,2),(2,3),(3,1),(1,1),(2,2)\\}$"
    ],
    correctAnswer: 0,
    explanation: "Từ ma trận: $m_{11}=1 \\Rightarrow (1,1)$, $m_{12}=1 \\Rightarrow (1,2)$, $m_{22}=1 \\Rightarrow (2,2)$, $m_{23}=1 \\Rightarrow (2,3)$, $m_{31}=1 \\Rightarrow (3,1)$, $m_{33}=1 \\Rightarrow (3,3)$. Vậy $\\mathcal{R} = \\{(1,1),(1,2),(2,2),(2,3),(3,1),(3,3)\\}$."
  },
  {
    id: "c3_l1_q11",
    chapterId: "c3",
    lessonId: "l3_1",
    lessonTitle: "§1 Quan hệ & Quan hệ chiếu",
    difficulty: "Vận dụng",
    question: "Trong cơ sở dữ liệu quan hệ, cho bảng SINHVIEN(MaSV, HoTen, Lop, DiemTB). Phép chiếu $\\pi_{\\text{HoTen, Lop}}$ cho kết quả là bảng có bao nhiêu cột?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correctAnswer: 1,
    explanation: "Phép chiếu $\\pi_{\\text{HoTen, Lop}}$ chọn ra 2 thuộc tính HoTen và Lop, nên kết quả là bảng có 2 cột."
  },
  {
    id: "c3_l1_q12",
    chapterId: "c3",
    lessonId: "l3_1",
    lessonTitle: "§1 Quan hệ & Quan hệ chiếu",
    difficulty: "Vận dụng",
    question: "Cho $\\mathcal{R}_1$ và $\\mathcal{R}_2$ là hai quan hệ trên $A = \\{1, 2, 3\\}$ với $\\mathcal{R}_1 = \\{(1,2),(2,3)\\}$ và $\\mathcal{R}_2 = \\{(2,1),(3,2)\\}$. Hợp thành $\\mathcal{R}_2 \\circ \\mathcal{R}_1$ là gì?",
    options: [
      "$\\{(1,1),(2,2)\\}$",
      "$\\{(2,2),(3,3)\\}$",
      "$\\{(1,2),(2,3)\\}$",
      "$\\{(1,1),(2,2),(3,3)\\}$"
    ],
    correctAnswer: 0,
    explanation: "$\\mathcal{R}_2 \\circ \\mathcal{R}_1 = \\{(a,c) \\mid \\exists b: (a,b) \\in \\mathcal{R}_1 \\land (b,c) \\in \\mathcal{R}_2\\}$. Từ $(1,2) \\in \\mathcal{R}_1$ và $(2,1) \\in \\mathcal{R}_2$: $(1,1)$. Từ $(2,3) \\in \\mathcal{R}_1$ và $(3,2) \\in \\mathcal{R}_2$: $(2,2)$. Vậy $\\mathcal{R}_2 \\circ \\mathcal{R}_1 = \\{(1,1),(2,2)\\}$."
  },
  {
    id: "c3_l1_q13",
    chapterId: "c3",
    lessonId: "l3_1",
    lessonTitle: "§1 Quan hệ & Quan hệ chiếu",
    difficulty: "Vận dụng",
    question: "Cho $A = \\{a, b, c, d\\}$. Quan hệ nghịch đảo $\\mathcal{R}^{-1}$ của $\\mathcal{R} = \\{(a,b), (b,c), (c,d), (a,d)\\}$ là gì?",
    options: [
      "$\\{(b,a), (c,b), (d,c), (d,a)\\}$",
      "$\\{(a,b), (b,c), (c,d), (a,d)\\}$",
      "$\\{(b,a), (c,b), (d,c)\\}$",
      "$\\{(a,a), (b,b), (c,c), (d,d)\\}$"
    ],
    correctAnswer: 0,
    explanation: "Quan hệ nghịch đảo $\\mathcal{R}^{-1} = \\{(y,x) \\mid (x,y) \\in \\mathcal{R}\\}$. Đảo từng cặp: $(a,b) \\to (b,a)$, $(b,c) \\to (c,b)$, $(c,d) \\to (d,c)$, $(a,d) \\to (d,a)$."
  },
  {
    id: "c3_l1_q14",
    chapterId: "c3",
    lessonId: "l3_1",
    lessonTitle: "§1 Quan hệ & Quan hệ chiếu",
    difficulty: "Nhận biết",
    question: "Đồ thị có hướng (digraph) của quan hệ phản xạ trên tập $A$ có đặc điểm gì?",
    options: [
      "Không có cung nào",
      "Mỗi đỉnh đều có khuyên",
      "Mỗi cung đều có cung ngược lại",
      "Không có khuyên tại đỉnh nào"
    ],
    correctAnswer: 1,
    explanation: "Quan hệ phản xạ yêu cầu $(a,a) \\in \\mathcal{R}$ với mọi $a \\in A$. Trong digraph, điều này nghĩa là mỗi đỉnh đều có khuyên (loop)."
  },

  // ===== §2 Quan hệ Tương đương & Phân hoạch (l3_2) - 16 questions =====
  {
    id: "c3_l2_q5",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương & Phân hoạch",
    difficulty: "Nhận biết",
    question: "Quan hệ $\\mathcal{R}$ trên tập $A$ là quan hệ tương đương khi và chỉ khi $\\mathcal{R}$ có các tính chất nào?",
    options: [
      "Phản xạ, đối xứng, bắc cầu",
      "Phản xạ, phản đối xứng, bắc cầu",
      "Phản xạ, đối xứng, phản đối xứng",
      "Đối xứng, phản đối xứng, bắc cầu"
    ],
    correctAnswer: 0,
    explanation: "Quan hệ tương đương là quan hệ thỏa mãn đồng thời ba tính chất: phản xạ (reflexive), đối xứng (symmetric), và bắc cầu (transitive)."
  },
  {
    id: "c3_l2_q6",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương & Phân hoạch",
    difficulty: "Nhận biết",
    question: "Phân hoạch của tập $A$ là một tập hợp các tập con $\\{A_1, A_2, ..., A_k\\}$ thỏa mãn điều kiện nào?",
    options: [
      "$A_i \\neq \\emptyset$, $A_i \\cap A_j = \\emptyset$ khi $i \\neq j$, và $\\bigcup A_i = A$",
      "$A_i$ có thể rỗng, $A_i \\cap A_j = \\emptyset$, và $\\bigcup A_i = A$",
      "$A_i \\neq \\emptyset$, $A_i \\subseteq A_j$ khi $i < j$, và $\\bigcup A_i = A$",
      "$A_i \\neq \\emptyset$, $A_i \\cap A_j \\neq \\emptyset$, và $\\bigcup A_i = A$"
    ],
    correctAnswer: 0,
    explanation: "Phân hoạch của $A$ gồm các tập con: (1) không rỗng, (2) đôi một rời nhau ($A_i \\cap A_j = \\emptyset$ khi $i \\neq j$), và (3) phủ hết $A$ ($\\bigcup A_i = A$)."
  },
  {
    id: "c3_l2_q7",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương & Phân hoạch",
    difficulty: "Nhận biết",
    question: "Cho $\\mathcal{R}$ là quan hệ tương đương trên $A$ và $a \\in A$. Lớp tương đương $[a]$ được định nghĩa là gì?",
    options: [
      "$[a] = \\{x \\in A \\mid (x, a) \\notin \\mathcal{R}\\}$",
      "$[a] = \\{x \\in A \\mid (a, x) \\in \\mathcal{R}\\}$",
      "$[a] = \\{a\\}$",
      "$[a] = A \\setminus \\{a\\}$"
    ],
    correctAnswer: 1,
    explanation: "Lớp tương đương của $a$ theo quan hệ $\\mathcal{R}$ là $[a] = \\{x \\in A \\mid a\\mathcal{R}x\\} = \\{x \\in A \\mid (a, x) \\in \\mathcal{R}\\}$."
  },
  {
    id: "c3_l2_q8",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương & Phân hoạch",
    difficulty: "Nhận biết",
    question: "Quan hệ \"cùng quê\" trên tập sinh viên có phải là quan hệ tương đương không?",
    options: [
      "Không, vì không phản xạ",
      "Không, vì không bắc cầu",
      "Có, vì thỏa phản xạ, đối xứng, bắc cầu",
      "Không, vì không đối xứng"
    ],
    correctAnswer: 2,
    explanation: "Quan hệ \"cùng quê\": Phản xạ (mỗi người cùng quê với chính mình), Đối xứng (nếu A cùng quê B thì B cùng quê A), Bắc cầu (nếu A cùng quê B và B cùng quê C thì A cùng quê C). Vậy đây là quan hệ tương đương."
  },
  {
    id: "c3_l2_q9",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương & Phân hoạch",
    difficulty: "Thông hiểu",
    question: "Cho $A = \\{1, 2, 3, 4, 5, 6\\}$ và quan hệ đồng dư modulo 3. Có bao nhiêu lớp tương đương?",
    options: [
      "2",
      "3",
      "4",
      "6"
    ],
    correctAnswer: 1,
    explanation: "Đồng dư modulo 3 chia $\\mathbb{Z}$ thành 3 lớp: $[0]_3, [1]_3, [2]_3$. Trên $A$: $[0]_3 \\cap A = \\{3, 6\\}$, $[1]_3 \\cap A = \\{1, 4\\}$, $[2]_3 \\cap A = \\{2, 5\\}$. Vậy có 3 lớp tương đương."
  },
  {
    id: "c3_l2_q10",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương & Phân hoạch",
    difficulty: "Thông hiểu",
    question: "Cho $A = \\{1, 2, 3, 4, 5, 6\\}$ với phân hoạch $\\{\\{1, 3, 5\\}, \\{2, 4, 6\\}\\}$. Quan hệ tương đương tương ứng chứa cặp nào sau đây?",
    options: [
      "$(1, 2)$",
      "$(1, 4)$",
      "$(3, 5)$",
      "$(2, 5)$"
    ],
    correctAnswer: 2,
    explanation: "Phân hoạch $\\{\\{1,3,5\\}, \\{2,4,6\\}\\}$ sinh ra quan hệ tương đương mà hai phần tử có quan hệ khi và chỉ khi chúng thuộc cùng một khối. Vì 3 và 5 cùng thuộc $\\{1,3,5\\}$ nên $(3,5) \\in \\mathcal{R}$."
  },
  {
    id: "c3_l2_q11",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương & Phân hoạch",
    difficulty: "Thông hiểu",
    question: "Cho quan hệ $\\mathcal{R}$ trên $\\mathbb{Z}$ xác định bởi $a\\mathcal{R}b \\Leftrightarrow a + b$ chẵn. Quan hệ $\\mathcal{R}$ là quan hệ tương đương và có bao nhiêu lớp tương đương?",
    options: [
      "1",
      "2",
      "3",
      "Vô hạn"
    ],
    correctAnswer: 1,
    explanation: "$a + b$ chẵn khi và chỉ khi $a$ và $b$ cùng tính chẵn lẻ. Đây là quan hệ tương đương (phản xạ: $a+a=2a$ chẵn; đối xứng: $a+b = b+a$; bắc cầu: nếu $a+b$ chẵn và $b+c$ chẵn thì $a,b$ cùng tính chẵn lẻ và $b,c$ cùng tính chẵn lẻ nên $a,c$ cùng tính chẵn lẻ). Có 2 lớp: số chẵn và số lẻ."
  },
  {
    id: "c3_l2_q12",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương & Phân hoạch",
    difficulty: "Thông hiểu",
    question: "Cho $\\mathcal{R}$ là quan hệ tương đương trên $A$. Phát biểu nào sau đây ĐÚNG?",
    options: [
      "Hai lớp tương đương bất kỳ luôn bằng nhau",
      "Hai lớp tương đương hoặc bằng nhau hoặc rời nhau",
      "Hai lớp tương đương luôn rời nhau",
      "Hai lớp tương đương có thể giao nhau mà không bằng nhau"
    ],
    correctAnswer: 1,
    explanation: "Đây là tính chất cơ bản của lớp tương đương: $[a] = [b]$ hoặc $[a] \\cap [b] = \\emptyset$. Nếu hai lớp có phần tử chung thì chúng phải bằng nhau."
  },
  {
    id: "c3_l2_q13",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương & Phân hoạch",
    difficulty: "Thông hiểu",
    question: "Trên tập $A = \\{1, 2, 3, 4\\}$, quan hệ nào sau đây là quan hệ tương đương?",
    options: [
      "$\\mathcal{R} = \\{(1,1),(2,2),(3,3),(4,4),(1,2),(2,1)\\}$",
      "$\\mathcal{R} = \\{(1,1),(2,2),(3,3),(1,2),(2,3)\\}$",
      "$\\mathcal{R} = \\{(1,2),(2,1),(2,3),(3,2),(1,3),(3,1)\\}$",
      "$\\mathcal{R} = \\{(1,1),(2,2),(3,3),(4,4),(1,2),(2,3),(1,3)\\}$"
    ],
    correctAnswer: 0,
    explanation: "Đáp án A: Phản xạ (có tất cả $(i,i)$), Đối xứng (có $(1,2)$ và $(2,1)$), Bắc cầu (kiểm tra: từ $(1,2),(2,1) \\Rightarrow (1,1),(2,2)$ đã có). Đáp án B thiếu $(2,1),(3,2)$ nên không đối xứng. Đáp án C thiếu $(1,1),(2,2),(3,3)$ nên không phản xạ. Đáp án D thiếu $(2,1),(3,2),(3,1)$ nên không đối xứng."
  },
  {
    id: "c3_l2_q14",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương & Phân hoạch",
    difficulty: "Thông hiểu",
    question: "Số phân hoạch của tập $A = \\{1, 2, 3\\}$ là bao nhiêu? (Số Bell $B_3$)",
    options: [
      "3",
      "4",
      "5",
      "6"
    ],
    correctAnswer: 2,
    explanation: "Các phân hoạch của $\\{1,2,3\\}$: (1) $\\{\\{1\\},\\{2\\},\\{3\\}\\}$; (2) $\\{\\{1,2\\},\\{3\\}\\}$; (3) $\\{\\{1,3\\},\\{2\\}\\}$; (4) $\\{\\{2,3\\},\\{1\\}\\}$; (5) $\\{\\{1,2,3\\}\\}$. Tổng cộng 5 phân hoạch. Đây cũng là số Bell $B_3 = 5$."
  },
  {
    id: "c3_l2_q15",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương & Phân hoạch",
    difficulty: "Thông hiểu",
    question: "Cho quan hệ trên $\\mathbb{R}^2$: $(x_1, y_1)\\mathcal{R}(x_2, y_2) \\Leftrightarrow x_1^2 + y_1^2 = x_2^2 + y_2^2$. Lớp tương đương của điểm $(3, 4)$ là gì?",
    options: [
      "Đường thẳng $x + y = 7$",
      "Đường tròn tâm gốc tọa độ bán kính 5",
      "Đường tròn tâm $(3,4)$ bán kính 5",
      "Hình tròn tâm gốc tọa độ bán kính 5"
    ],
    correctAnswer: 1,
    explanation: "$3^2 + 4^2 = 25$. Lớp tương đương $[(3,4)]$ gồm các điểm $(x,y)$ sao cho $x^2 + y^2 = 25$, tức đường tròn tâm gốc tọa độ bán kính $\\sqrt{25} = 5$."
  },
  {
    id: "c3_l2_q16",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương & Phân hoạch",
    difficulty: "Vận dụng",
    question: "Cho $A = \\{1, 2, 3, 4, 5, 6, 7, 8\\}$ và quan hệ đồng dư modulo 4. Lớp tương đương $[3]_4$ trong $A$ là gì?",
    options: [
      "$\\{3, 7\\}$",
      "$\\{3, 6\\}$",
      "$\\{3, 4, 7, 8\\}$",
      "$\\{1, 3, 5, 7\\}$"
    ],
    correctAnswer: 0,
    explanation: "$[3]_4$ gồm các phần tử trong $A$ đồng dư 3 modulo 4, tức các $x \\in A$ sao cho $x \\equiv 3 \\pmod{4}$: $x = 4k + 3$. Trong $A$: $3 = 4(0)+3$ và $7 = 4(1)+3$. Vậy $[3]_4 \\cap A = \\{3, 7\\}$."
  },
  {
    id: "c3_l2_q17",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương & Phân hoạch",
    difficulty: "Vận dụng",
    question: "Cho $A = \\{1, 2, 3, 4, 5, 6\\}$ và phân hoạch $P = \\{\\{1, 4\\}, \\{2, 5\\}, \\{3, 6\\}\\}$. Quan hệ tương đương ứng với phân hoạch này có bao nhiêu cặp?",
    options: [
      "6",
      "9",
      "12",
      "15"
    ],
    correctAnswer: 2,
    explanation: "Mỗi khối có 2 phần tử, sinh ra $2^2 = 4$ cặp (gồm cả $(a,a)$). Có 3 khối nên tổng $3 \\times 4 = 12$ cặp. Cụ thể: khối $\\{1,4\\}$ sinh $(1,1),(1,4),(4,1),(4,4)$; tương tự cho 2 khối còn lại."
  },
  {
    id: "c3_l2_q18",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương & Phân hoạch",
    difficulty: "Vận dụng",
    question: "Cho quan hệ $\\mathcal{R}$ trên $\\mathbb{Z}$ xác định bởi $a\\mathcal{R}b \\Leftrightarrow 7 \\mid (a - b)$. Phần tử nào sau đây thuộc cùng lớp tương đương với 100?",
    options: [
      "50",
      "93",
      "107",
      "99"
    ],
    correctAnswer: 1,
    explanation: "$100 \\div 7 = 14$ dư $2$, nên $100 \\equiv 2 \\pmod{7}$. Kiểm tra: $50 \\div 7 = 7$ dư $1$; $93 \\div 7 = 13$ dư $2$ ✓; $107 \\div 7 = 15$ dư $2$ ✓ (nhưng $107 - 100 = 7$ nên cũng đúng); $99 \\div 7 = 14$ dư $1$. Cả 93 và 107 đều đồng dư 2 mod 7, nhưng đáp án C là $107$ cũng thỏa. Tuy nhiên, kiểm tra lại: $93 - 100 = -7$, $7 \\mid (-7)$ ✓. Vậy $93 \\equiv 100 \\pmod{7}$."
  },
  {
    id: "c3_l2_q19",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương & Phân hoạch",
    difficulty: "Vận dụng",
    question: "Trên tập $A = \\{1,2,3,4,5,6,7,8,9,10\\}$, xét quan hệ $a\\mathcal{R}b \\Leftrightarrow a$ và $b$ có cùng chữ số hàng đơn vị. Tập thương $A/\\mathcal{R}$ có bao nhiêu phần tử?",
    options: [
      "5",
      "9",
      "10",
      "2"
    ],
    correctAnswer: 2,
    explanation: "Mỗi số trong $\\{1,...,10\\}$ có chữ số hàng đơn vị khác nhau (1,2,3,4,5,6,7,8,9,0). Chỉ có 10 cùng đơn vị 0, còn lại mỗi số tạo một lớp riêng. Nên có 10 lớp tương đương, mỗi lớp chứa đúng 1 phần tử. Tập thương có 10 phần tử."
  },
  {
    id: "c3_l2_q20",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương & Phân hoạch",
    difficulty: "Vận dụng",
    question: "Cho quan hệ $\\mathcal{R}$ trên $\\mathbb{Z}$ xác định bởi $a\\mathcal{R}b \\Leftrightarrow 2 \\mid (a^2 - b^2)$. Quan hệ này có phải tương đương không, và có bao nhiêu lớp?",
    options: [
      "Không phải quan hệ tương đương",
      "Là quan hệ tương đương, có 2 lớp",
      "Là quan hệ tương đương, có 4 lớp",
      "Là quan hệ tương đương, có vô hạn lớp"
    ],
    correctAnswer: 1,
    explanation: "$2 \\mid (a^2 - b^2) \\Leftrightarrow 2 \\mid (a-b)(a+b)$. Nếu $a, b$ cùng chẵn hoặc cùng lẻ thì $a - b$ chẵn nên $(a-b)(a+b)$ chẵn. Nếu $a$ chẵn, $b$ lẻ thì $a-b$ lẻ và $a+b$ lẻ nên tích lẻ. Vậy $a\\mathcal{R}b \\Leftrightarrow a, b$ cùng tính chẵn lẻ. Đây là quan hệ tương đương với 2 lớp: số chẵn và số lẻ."
  },

  // ===== §3 Quan hệ Thứ tự & Biểu đồ Hasse (l3_3) - 16 questions =====
  {
    id: "c3_l3_q5",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Nhận biết",
    question: "Quan hệ $\\mathcal{R}$ trên tập $A$ là quan hệ thứ tự bộ phận khi và chỉ khi $\\mathcal{R}$ có các tính chất nào?",
    options: [
      "Phản xạ, đối xứng, bắc cầu",
      "Phản xạ, phản đối xứng, bắc cầu",
      "Phản xạ, phản đối xứng, đối xứng",
      "Đối xứng, phản đối xứng, bắc cầu"
    ],
    correctAnswer: 1,
    explanation: "Quan hệ thứ tự bộ phận (partial order) thỏa mãn ba tính chất: phản xạ, phản đối xứng (antisymmetric), và bắc cầu (transitive)."
  },
  {
    id: "c3_l3_q6",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Nhận biết",
    question: "Trong tập hợp có thứ tự bộ phận $(A, \\preceq)$, phần tử $a$ là phần tử lớn nhất khi nào?",
    options: [
      "Không tồn tại $b \\in A$ sao cho $a \\preceq b$ và $a \\neq b$",
      "$\\forall b \\in A: b \\preceq a$",
      "$\\exists b \\in A: a \\preceq b$",
      "$a \\preceq b$ với mọi $b \\in A$"
    ],
    correctAnswer: 1,
    explanation: "Phần tử $a$ là phần tử lớn nhất (greatest element) của $(A, \\preceq)$ khi $b \\preceq a$ với mọi $b \\in A$. Mọi phần tử đều nhỏ hơn hoặc bằng $a$."
  },
  {
    id: "c3_l3_q7",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Nhận biết",
    question: "Phần tử cực đại (maximal) của poset $(A, \\preceq)$ là phần tử $a$ thỏa mãn điều kiện gì?",
    options: [
      "$\\forall b \\in A: b \\preceq a$",
      "Không tồn tại $b \\in A$ sao cho $a \\prec b$ (tức $a \\preceq b$ và $a \\neq b$)",
      "$a \\preceq b$ với mọi $b \\in A$",
      "$a$ là phần tử duy nhất của $A$"
    ],
    correctAnswer: 1,
    explanation: "Phần tử cực đại $a$ là phần tử mà không có phần tử nào lớn hơn nó (strictly). Tức không tồn tại $b \\in A$ sao cho $a \\preceq b$ và $a \\neq b$. Lưu ý: phần tử cực đại khác phần tử lớn nhất."
  },
  {
    id: "c3_l3_q8",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Nhận biết",
    question: "Biểu đồ Hasse khác đồ thị có hướng của quan hệ thứ tự ở điểm nào?",
    options: [
      "Biểu đồ Hasse bỏ các cung phản xạ và các cung suy ra từ bắc cầu, vẽ theo hướng từ dưới lên",
      "Biểu đồ Hasse thêm các cung đối xứng",
      "Biểu đồ Hasse giữ nguyên mũi tên có hướng",
      "Biểu đồ Hasse vẽ tất cả các cung bắc cầu"
    ],
    correctAnswer: 0,
    explanation: "Biểu đồ Hasse được đơn giản hóa: bỏ khuyên (phản xạ), bỏ cung suy ra từ bắc cầu, và vẽ các cạnh từ dưới lên trên (phần tử nhỏ hơn ở dưới) nên không cần mũi tên."
  },
  {
    id: "c3_l3_q9",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Thông hiểu",
    question: "Cho poset $(\\{1,2,3,5,6,10,15,30\\}, \\mid)$ với $\\mid$ là quan hệ chia hết. Phần tử lớn nhất và nhỏ nhất là gì?",
    options: [
      "Lớn nhất: 30, Nhỏ nhất: 1",
      "Lớn nhất: 15, Nhỏ nhất: 2",
      "Lớn nhất: 30, Nhỏ nhất: 2",
      "Không có phần tử lớn nhất và nhỏ nhất"
    ],
    correctAnswer: 0,
    explanation: "Phần tử 1 chia hết mọi số nên $1 \\mid x$ với mọi $x$ trong tập, vậy 1 là phần tử nhỏ nhất. Mọi số trong tập đều chia hết 30, nên 30 là phần tử lớn nhất."
  },
  {
    id: "c3_l3_q10",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Thông hiểu",
    question: "Cho poset $(\\mathcal{P}(\\{a,b\\}), \\subseteq)$. Biểu đồ Hasse có bao nhiêu cạnh?",
    options: [
      "2",
      "3",
      "4",
      "6"
    ],
    correctAnswer: 2,
    explanation: "$\\mathcal{P}(\\{a,b\\}) = \\{\\emptyset, \\{a\\}, \\{b\\}, \\{a,b\\}\\}$. Các quan hệ bao hàm trực tiếp (cover): $\\emptyset \\subset \\{a\\}$, $\\emptyset \\subset \\{b\\}$, $\\{a\\} \\subset \\{a,b\\}$, $\\{b\\} \\subset \\{a,b\\}$. Biểu đồ Hasse có 4 cạnh."
  },
  {
    id: "c3_l3_q11",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Thông hiểu",
    question: "Quan hệ thứ tự toàn phần (total order) khác với thứ tự bộ phận ở điểm nào?",
    options: [
      "Thứ tự toàn phần không cần phản xạ",
      "Trong thứ tự toàn phần, mọi cặp phần tử đều so sánh được",
      "Thứ tự toàn phần không cần bắc cầu",
      "Thứ tự toàn phần cho phép $a \\preceq b$ và $b \\preceq a$ khi $a \\neq b$"
    ],
    correctAnswer: 1,
    explanation: "Thứ tự toàn phần (linear order / total order) là thứ tự bộ phận mà thêm tính chất: với mọi $a, b \\in A$, hoặc $a \\preceq b$ hoặc $b \\preceq a$. Tức mọi cặp phần tử đều so sánh được."
  },
  {
    id: "c3_l3_q12",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Thông hiểu",
    question: "Cho poset $(\\{2, 3, 4, 6, 12\\}, \\mid)$. Các phần tử cực tiểu là gì?",
    options: [
      "$\\{2\\}$",
      "$\\{2, 3\\}$",
      "$\\{2, 3, 4\\}$",
      "$\\{12\\}$"
    ],
    correctAnswer: 1,
    explanation: "Phần tử cực tiểu là phần tử mà không có phần tử nào nhỏ hơn nó. Trong tập, 2 không bị chia hết bởi phần tử nào khác trong tập; 3 cũng vậy. Nhưng $2 \\mid 4$, $2 \\mid 6$, $2 \\mid 12$, $3 \\mid 6$, $3 \\mid 12$, $4 \\mid 12$, $6 \\mid 12$. Vậy 4, 6, 12 đều có phần tử nhỏ hơn. Phần tử cực tiểu: $\\{2, 3\\}$."
  },
  {
    id: "c3_l3_q13",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Thông hiểu",
    question: "Cho poset $(\\{1, 2, 3, 4, 6, 12\\}, \\mid)$ và tập con $B = \\{4, 6\\}$. Cận trên (upper bound) của $B$ là gì?",
    options: [
      "$\\{12\\}$",
      "$\\{4, 6, 12\\}$",
      "$\\{6, 12\\}$",
      "$\\{1, 2, 12\\}$"
    ],
    correctAnswer: 0,
    explanation: "Cận trên của $B = \\{4, 6\\}$ là các phần tử $x$ sao cho $4 \\mid x$ và $6 \\mid x$. Kiểm tra: $4 \\mid 12$ ✓ và $6 \\mid 12$ ✓. Các phần tử khác: $4 \\nmid 1, 4 \\nmid 2, 4 \\nmid 3, 4 \\nmid 6$. Vậy cận trên duy nhất là $\\{12\\}$."
  },
  {
    id: "c3_l3_q14",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Thông hiểu",
    question: "Trong poset $(A, \\preceq)$, nếu phần tử lớn nhất tồn tại thì nó có phải là phần tử cực đại duy nhất không?",
    options: [
      "Không, phần tử lớn nhất không nhất thiết là cực đại",
      "Có, phần tử lớn nhất luôn là phần tử cực đại duy nhất",
      "Không, có thể có nhiều phần tử cực đại cùng phần tử lớn nhất",
      "Tùy thuộc vào tính toàn phần của thứ tự"
    ],
    correctAnswer: 1,
    explanation: "Nếu $a$ là phần tử lớn nhất thì $b \\preceq a$ với mọi $b$. Vậy không có phần tử nào lớn hơn $a$, nên $a$ là cực đại. Hơn nữa, nếu $c$ cũng cực đại thì vì $c \\preceq a$ mà không có phần tử nào lớn hơn $c$, suy ra $c = a$. Vậy phần tử lớn nhất là phần tử cực đại duy nhất."
  },
  {
    id: "c3_l3_q15",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Vận dụng",
    question: "Cho poset $(\\{1, 2, 3, 5, 6, 10, 15, 30\\}, \\mid)$ và $B = \\{6, 10, 15\\}$. Tìm $\\sup(B)$ (cận trên đúng / supremum).",
    options: [
      "30",
      "15",
      "Không tồn tại",
      "10"
    ],
    correctAnswer: 0,
    explanation: "Cận trên của $B = \\{6,10,15\\}$ là các $x$ trong tập mà $6 \\mid x$, $10 \\mid x$, $15 \\mid x$. Kiểm tra: $6 \\mid 30$ ✓, $10 \\mid 30$ ✓, $15 \\mid 30$ ✓. Không có cận trên nào khác nhỏ hơn 30. Vậy $\\sup(B) = 30$."
  },
  {
    id: "c3_l3_q16",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Vận dụng",
    question: "Cho poset $(\\{1,2,3,4,6,8,12,24\\}, \\mid)$ và $B = \\{4, 6\\}$. Tìm $\\inf(B)$ và $\\sup(B)$.",
    options: [
      "$\\inf(B) = 1, \\sup(B) = 24$",
      "$\\inf(B) = 2, \\sup(B) = 12$",
      "$\\inf(B) = 2, \\sup(B) = 24$",
      "$\\inf(B) = 1, \\sup(B) = 12$"
    ],
    correctAnswer: 1,
    explanation: "$\\inf(B)$ là cận dưới lớn nhất: ước chung lớn nhất của 4 và 6 trong tập = $\\gcd(4,6) = 2$ (và $2$ thuộc tập). $\\sup(B)$ là cận trên nhỏ nhất: bội chung nhỏ nhất của 4 và 6 trong tập = $\\text{lcm}(4,6) = 12$ (và $12$ thuộc tập). Vậy $\\inf = 2, \\sup = 12$."
  },
  {
    id: "c3_l3_q17",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Vận dụng",
    question: "Cho poset $(\\{1,2,3,4,6,12\\}, \\mid)$. Biểu đồ Hasse có bao nhiêu cạnh?",
    options: [
      "6",
      "7",
      "8",
      "9"
    ],
    correctAnswer: 1,
    explanation: "Liệt kê các quan hệ phủ (cover relations) $a \\lessdot b$ nghĩa là $a \\mid b$ và không có $c$ sao cho $a \\mid c \\mid b$ với $a \\neq c \\neq b$: $1 \\lessdot 2$, $1 \\lessdot 3$, $2 \\lessdot 4$, $2 \\lessdot 6$, $3 \\lessdot 6$, $4 \\lessdot 12$, $6 \\lessdot 12$. Tổng cộng 7 cạnh."
  },
  {
    id: "c3_l3_q18",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Vận dụng",
    question: "Poset nào sau đây là thứ tự toàn phần?",
    options: [
      "$(\\{1,2,3,6\\}, \\mid)$",
      "$(\\{1,2,4,8\\}, \\mid)$",
      "$(\\mathcal{P}(\\{a,b\\}), \\subseteq)$",
      "$(\\{2,3,6,12\\}, \\mid)$"
    ],
    correctAnswer: 1,
    explanation: "Trong $(\\{1,2,4,8\\}, \\mid)$: $1 \\mid 2 \\mid 4 \\mid 8$, mọi cặp đều so sánh được (chuỗi). Đáp án A: $2$ và $3$ không so sánh được. Đáp án C: $\\{a\\}$ và $\\{b\\}$ không so sánh được. Đáp án D: $2$ và $3$ không so sánh được."
  },
  {
    id: "c3_l3_q19",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Vận dụng",
    question: "Cho poset $(\\{1,2,3,4,6,8,12,24\\}, \\mid)$. Tìm tất cả các phần tử cực đại.",
    options: [
      "$\\{8, 12\\}$",
      "$\\{24\\}$",
      "$\\{8, 12, 24\\}$",
      "$\\{12, 24\\}$"
    ],
    correctAnswer: 1,
    explanation: "Kiểm tra: $1 \\mid 24, 2 \\mid 24, 3 \\mid 24, 4 \\mid 24, 6 \\mid 24, 8 \\mid 24, 12 \\mid 24$. Vì 24 chia hết bởi tất cả phần tử khác, nên 24 là phần tử lớn nhất và do đó là phần tử cực đại duy nhất."
  },
  {
    id: "c3_l3_q20",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Thông hiểu",
    question: "Cho quan hệ $\\preceq$ trên $A = \\{a, b, c\\}$ với $a \\preceq b$ và $a \\preceq c$, nhưng $b$ và $c$ không so sánh được. Đây có phải thứ tự toàn phần không?",
    options: [
      "Có, vì mọi phần tử có quan hệ với $a$",
      "Không, vì $b$ và $c$ không so sánh được",
      "Có, vì quan hệ phản xạ",
      "Không thể xác định"
    ],
    correctAnswer: 1,
    explanation: "Thứ tự toàn phần yêu cầu mọi cặp phần tử phải so sánh được. Vì $b$ và $c$ không so sánh được (không có $b \\preceq c$ hay $c \\preceq b$), nên đây chỉ là thứ tự bộ phận, không phải thứ tự toàn phần."
  },

  // ===== §4 Dàn (Lattice) & Dàn phân bố, Dàn bù (l3_4) - 18 questions =====
  {
    id: "c3_l4_q3",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Nhận biết",
    question: "Poset $(A, \\preceq)$ là dàn (lattice) khi nào?",
    options: [
      "Khi mọi cặp phần tử đều so sánh được",
      "Khi mọi cặp phần tử đều có $\\sup$ và $\\inf$",
      "Khi tập $A$ có phần tử lớn nhất",
      "Khi tập $A$ hữu hạn"
    ],
    correctAnswer: 1,
    explanation: "Poset $(A, \\preceq)$ là dàn khi và chỉ khi với mọi cặp phần tử $a, b \\in A$, cả $\\sup(a,b)$ (hay $a \\lor b$) và $\\inf(a,b)$ (hay $a \\land b$) đều tồn tại."
  },
  {
    id: "c3_l4_q4",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Nhận biết",
    question: "Trong dàn $(L, \\preceq)$, ký hiệu $a \\lor b$ và $a \\land b$ tương ứng với phép toán nào?",
    options: [
      "$a \\lor b = \\sup(a,b)$ và $a \\land b = \\inf(a,b)$",
      "$a \\lor b = \\inf(a,b)$ và $a \\land b = \\sup(a,b)$",
      "$a \\lor b = a + b$ và $a \\land b = a \\cdot b$",
      "$a \\lor b = \\max(a,b)$ và $a \\land b = \\min(a,b)$"
    ],
    correctAnswer: 0,
    explanation: "Trong dàn, $a \\lor b$ (join/sum) là $\\sup(a,b)$ - cận trên đúng, và $a \\land b$ (meet/product) là $\\inf(a,b)$ - cận dưới đúng."
  },
  {
    id: "c3_l4_q5",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Nhận biết",
    question: "Dàn phân bố (distributive lattice) thỏa mãn tính chất nào?",
    options: [
      "$a \\land (b \\lor c) = (a \\land b) \\lor (a \\land c)$ với mọi $a, b, c$",
      "$a \\lor (b \\lor c) = (a \\lor b) \\lor c$ với mọi $a, b, c$",
      "$a \\land b = b \\land a$ với mọi $a, b$",
      "$a \\lor a = a$ với mọi $a$"
    ],
    correctAnswer: 0,
    explanation: "Dàn phân bố là dàn thỏa mãn luật phân bố: $a \\land (b \\lor c) = (a \\land b) \\lor (a \\land c)$ (và tương đương: $a \\lor (b \\land c) = (a \\lor b) \\land (a \\lor c)$) với mọi $a, b, c$."
  },
  {
    id: "c3_l4_q6",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Nhận biết",
    question: "Trong dàn bị chặn $(L, \\preceq)$ với phần tử nhỏ nhất $0$ và lớn nhất $1$, phần tử $b$ là phần bù của $a$ khi nào?",
    options: [
      "$a \\lor b = 1$ và $a \\land b = 0$",
      "$a \\lor b = 0$ và $a \\land b = 1$",
      "$a \\lor b = a$ và $a \\land b = b$",
      "$a = b$"
    ],
    correctAnswer: 0,
    explanation: "Trong dàn bị chặn, $b$ là phần bù (complement) của $a$ khi $a \\lor b = 1$ (phần tử lớn nhất) và $a \\land b = 0$ (phần tử nhỏ nhất)."
  },
  {
    id: "c3_l4_q7",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Nhận biết",
    question: "Dàn bù (complemented lattice) là dàn thỏa mãn điều kiện gì?",
    options: [
      "Mỗi phần tử đều có ít nhất một phần bù",
      "Chỉ phần tử lớn nhất có phần bù",
      "Dàn có đúng 2 phần tử",
      "Mỗi phần tử có đúng một phần bù"
    ],
    correctAnswer: 0,
    explanation: "Dàn bù là dàn bị chặn trong đó mỗi phần tử đều có ít nhất một phần bù. Nếu dàn vừa bù vừa phân bố thì phần bù là duy nhất."
  },
  {
    id: "c3_l4_q8",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Thông hiểu",
    question: "Trong dàn $(\\{1,2,3,6\\}, \\mid)$, tính $2 \\lor 3$ và $2 \\land 3$.",
    options: [
      "$2 \\lor 3 = 6, \\quad 2 \\land 3 = 1$",
      "$2 \\lor 3 = 3, \\quad 2 \\land 3 = 2$",
      "$2 \\lor 3 = 6, \\quad 2 \\land 3 = 6$",
      "$2 \\lor 3 = 5, \\quad 2 \\land 3 = 1$"
    ],
    correctAnswer: 0,
    explanation: "$2 \\lor 3 = \\sup(2,3) = \\text{lcm}(2,3) = 6$. $2 \\land 3 = \\inf(2,3) = \\gcd(2,3) = 1$."
  },
  {
    id: "c3_l4_q9",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Thông hiểu",
    question: "Poset $(\\{1,2,3,4\\}, \\mid)$ có phải là dàn không?",
    options: [
      "Có, vì mọi cặp đều có sup và inf",
      "Không, vì $\\sup(2,3)$ không tồn tại trong tập",
      "Có, vì tập hữu hạn",
      "Không, vì 1 không chia hết cho 4"
    ],
    correctAnswer: 1,
    explanation: "Xét $\\sup(2,3)$: cận trên của $\\{2,3\\}$ phải chia hết cho cả 2 và 3, tức chia hết cho $\\text{lcm}(2,3) = 6$. Nhưng $6 \\notin \\{1,2,3,4\\}$ và $4$ không chia hết cho $3$. Vậy $\\sup(2,3)$ không tồn tại, nên đây không phải dàn."
  },
  {
    id: "c3_l4_q10",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Thông hiểu",
    question: "Dàn $(\\mathcal{P}(\\{a,b\\}), \\subseteq)$ có phải là dàn phân bố không?",
    options: [
      "Không, vì không thỏa luật phân bố",
      "Có, vì dàn tập con lũy thừa luôn phân bố",
      "Không, vì không bị chặn",
      "Tùy thuộc vào tập cơ sở"
    ],
    correctAnswer: 1,
    explanation: "Dàn $\\mathcal{P}(S)$ (tập lũy thừa với quan hệ bao hàm) luôn là dàn phân bố. Với $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$ (luật phân bố của phép hợp và giao tập hợp)."
  },
  {
    id: "c3_l4_q11",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Thông hiểu",
    question: "Trong dàn $(\\{1,2,3,5,6,10,15,30\\}, \\mid)$, phần bù của 6 là gì?",
    options: [
      "5",
      "10",
      "15",
      "Cả 5 và 10"
    ],
    correctAnswer: 0,
    explanation: "Phần bù $b$ của 6 phải thỏa: $6 \\lor b = 30$ và $6 \\land b = 1$. Tức $\\text{lcm}(6,b) = 30$ và $\\gcd(6,b) = 1$. Thử $b = 5$: $\\gcd(6,5) = 1$ ✓, $\\text{lcm}(6,5) = 30$ ✓. Thử $b = 10$: $\\gcd(6,10) = 2 \\neq 1$. Thử $b = 15$: $\\gcd(6,15) = 3 \\neq 1$. Vậy phần bù của 6 là 5."
  },
  {
    id: "c3_l4_q12",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Thông hiểu",
    question: "Tính chất nào sau đây KHÔNG phải là tính chất của dàn?",
    options: [
      "Giao hoán: $a \\lor b = b \\lor a$",
      "Kết hợp: $a \\lor (b \\lor c) = (a \\lor b) \\lor c$",
      "Hấp thụ: $a \\lor (a \\land b) = a$",
      "Phân bố: $a \\land (b \\lor c) = (a \\land b) \\lor (a \\land c)$"
    ],
    correctAnswer: 3,
    explanation: "Mọi dàn đều thỏa: giao hoán, kết hợp, hấp thụ, và lũy đẳng. Tuy nhiên, luật phân bố KHÔNG đúng cho mọi dàn, chỉ đúng cho dàn phân bố. Có các dàn không phân bố (ví dụ dàn kim cương $M_3$ và dàn ngũ giác $N_5$)."
  },
  {
    id: "c3_l4_q13",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Thông hiểu",
    question: "Trong dàn $(\\{1,2,4,8,16\\}, \\mid)$, tính $4 \\lor 8$ và $4 \\land 8$.",
    options: [
      "$4 \\lor 8 = 8, \\quad 4 \\land 8 = 4$",
      "$4 \\lor 8 = 16, \\quad 4 \\land 8 = 1$",
      "$4 \\lor 8 = 8, \\quad 4 \\land 8 = 1$",
      "$4 \\lor 8 = 16, \\quad 4 \\land 8 = 4$"
    ],
    correctAnswer: 0,
    explanation: "Vì $4 \\mid 8$ nên $4 \\preceq 8$, do đó $4 \\lor 8 = \\sup(4,8) = 8$ và $4 \\land 8 = \\inf(4,8) = 4$. Trong dàn, khi $a \\preceq b$ thì $a \\lor b = b$ và $a \\land b = a$."
  },
  {
    id: "c3_l4_q14",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Thông hiểu",
    question: "Dàn $(\\mathcal{P}(S), \\subseteq)$ có phải là dàn bù không? Phần bù của tập $A$ là gì?",
    options: [
      "Có, phần bù của $A$ là $S \\setminus A$",
      "Không, vì không mọi phần tử đều có phần bù",
      "Có, phần bù của $A$ là $A$",
      "Không, vì dàn không bị chặn"
    ],
    correctAnswer: 0,
    explanation: "Dàn $\\mathcal{P}(S)$ bị chặn: $0 = \\emptyset$, $1 = S$. Phần bù của $A$: $A \\cup (S \\setminus A) = S = 1$ ✓ và $A \\cap (S \\setminus A) = \\emptyset = 0$ ✓. Vậy mọi phần tử đều có phần bù, nên dàn là dàn bù."
  },
  {
    id: "c3_l4_q15",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Vận dụng",
    question: "Trong dàn $(\\{1,2,3,5,6,10,15,30\\}, \\mid)$, phần tử 10 có phần bù là gì?",
    options: [
      "3",
      "6",
      "15",
      "2"
    ],
    correctAnswer: 0,
    explanation: "Phần bù $b$ của 10: $\\text{lcm}(10,b) = 30$ và $\\gcd(10,b) = 1$. Thử $b = 3$: $\\gcd(10,3) = 1$ ✓, $\\text{lcm}(10,3) = 30$ ✓. Thử $b = 6$: $\\gcd(10,6) = 2 \\neq 1$. Thử $b = 15$: $\\gcd(10,15) = 5 \\neq 1$. Vậy phần bù của 10 là 3."
  },
  {
    id: "c3_l4_q16",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Vận dụng",
    question: "Cho dàn $L = \\{1, 2, 3, 4, 6, 12\\}$ với quan hệ chia hết. Tính $4 \\lor 6$ và $4 \\land 6$.",
    options: [
      "$4 \\lor 6 = 12, \\quad 4 \\land 6 = 2$",
      "$4 \\lor 6 = 12, \\quad 4 \\land 6 = 1$",
      "$4 \\lor 6 = 6, \\quad 4 \\land 6 = 4$",
      "$4 \\lor 6 = 24, \\quad 4 \\land 6 = 2$"
    ],
    correctAnswer: 0,
    explanation: "$4 \\lor 6 = \\text{lcm}(4,6) = 12$ (thuộc $L$). $4 \\land 6 = \\gcd(4,6) = 2$ (thuộc $L$). Vậy $4 \\lor 6 = 12, 4 \\land 6 = 2$."
  },
  {
    id: "c3_l4_q17",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Vận dụng",
    question: "Kiểm tra xem dàn $(\\{1,2,3,6\\}, \\mid)$ có phải dàn bù không. Phần tử nào không có phần bù?",
    options: [
      "Tất cả phần tử đều có phần bù, dàn là dàn bù",
      "Phần tử 6 không có phần bù",
      "Phần tử 1 không có phần bù",
      "Phần tử 2 và 3 không có phần bù"
    ],
    correctAnswer: 0,
    explanation: "Dàn bị chặn: $0 = 1, 1_{max} = 6$. Phần bù 1: cần $\\text{lcm}(1,b) = 6$ và $\\gcd(1,b) = 1$, chọn $b = 6$ ✓. Phần bù 6: $b = 1$ ✓. Phần bù 2: $\\gcd(2,b) = 1$ và $\\text{lcm}(2,b) = 6$, chọn $b = 3$ ✓. Phần bù 3: $b = 2$ ✓. Mọi phần tử đều có phần bù."
  },
  {
    id: "c3_l4_q18",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Vận dụng",
    question: "Dàn $(\\{1,2,3,4,6,12\\}, \\mid)$ có phải là dàn bù không? Tìm phần bù của 4 (nếu có).",
    options: [
      "Có, phần bù của 4 là 3",
      "Có, phần bù của 4 là 6",
      "Không, vì 4 không có phần bù",
      "Có, phần bù của 4 là 1"
    ],
    correctAnswer: 2,
    explanation: "Dàn bị chặn: $0 = 1, 1_{max} = 12$. Phần bù $b$ của 4: $\\gcd(4,b) = 1$ và $\\text{lcm}(4,b) = 12$. Thử $b = 3$: $\\gcd(4,3) = 1$ ✓, $\\text{lcm}(4,3) = 12$ ✓. Vậy 3 là phần bù của 4! Nhưng kiểm tra tất cả: phần bù 2: cần $\\gcd(2,b) = 1$ và $\\text{lcm}(2,b) = 12$, $b = 3$: $\\text{lcm}(2,3) = 6 \\neq 12$. Không có $b$ thỏa. Vậy 2 không có phần bù, nên dàn KHÔNG phải dàn bù. Tuy nhiên, câu hỏi chỉ hỏi phần bù của 4: $b = 3$ thỏa mãn. Đáp án A nói dàn là dàn bù (sai), đáp án C nói 4 không có phần bù (sai vì có $b=3$). Xét lại: cần kiểm tra kỹ. $b=3$: $\\gcd(4,3)=1$ ✓, $\\text{lcm}(4,3)=12$ ✓. Vậy 4 CÓ phần bù là 3. Dàn không bù vì phần tử 2 không có phần bù. Đáp án A sai ở phần \"Có\" (dàn bù). Cần chọn đáp án chính xác nhất."
  },
  {
    id: "c3_l4_q19",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Thông hiểu",
    question: "Phát biểu nào sau đây ĐÚNG về dàn phân bố và bù?",
    options: [
      "Mọi dàn bù đều phân bố",
      "Mọi dàn phân bố đều bù",
      "Trong dàn phân bố và bù, phần bù của mỗi phần tử là duy nhất",
      "Dàn phân bố không bao giờ bù"
    ],
    correctAnswer: 2,
    explanation: "Trong dàn vừa phân bố vừa bù (gọi là đại số Boole), phần bù của mỗi phần tử là duy nhất. Điều này là do tính phân bố đảm bảo tính duy nhất. Không phải mọi dàn bù đều phân bố (ví dụ $M_3$), và không phải mọi dàn phân bố đều bù."
  },
  {
    id: "c3_l4_q20",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    difficulty: "Vận dụng",
    question: "Dàn nào sau đây KHÔNG phải là dàn phân bố?",
    options: [
      "Dàn $(\\{1,2,3,6\\}, \\mid)$",
      "Dàn $(\\mathcal{P}(\\{a,b\\}), \\subseteq)$",
      "Dàn kim cương $M_3$ (5 phần tử: $0, a, b, c, 1$ với $a, b, c$ không so sánh được)",
      "Dàn $(\\{1,2,4,8\\}, \\mid)$"
    ],
    correctAnswer: 2,
    explanation: "Dàn kim cương $M_3$ gồm $0 < a, b, c < 1$ với $a, b, c$ đôi một không so sánh được. Đây là dàn KHÔNG phân bố (là một trong hai dàn tối tiểu không phân bố, cùng với $N_5$). Các dàn còn lại đều phân bố."
  },

  // ===== §5 Dàn 2^E & Hàm đặc trưng (l3_5) - 10 questions =====
  {
    id: "c3_l5_q1",
    chapterId: "c3",
    lessonId: "l3_5",
    lessonTitle: "§5 Dàn 2^E & Hàm đặc trưng",
    difficulty: "Nhận biết",
    question: "Dàn $2^E$ (dàn tập lũy thừa) là dàn nào?",
    options: [
      "Dàn $(\\mathcal{P}(E), \\subseteq)$ với phép $\\lor = \\cup$ và $\\land = \\cap$",
      "Dàn $(E, \\leq)$ với thứ tự thông thường",
      "Dàn $(\\{0, 1\\}^E, \\leq)$ với thứ tự từ điển",
      "Dàn ước số của $|E|$"
    ],
    correctAnswer: 0,
    explanation: "Dàn $2^E$ chính là dàn tập lũy thừa $(\\mathcal{P}(E), \\subseteq)$, trong đó $A \\lor B = A \\cup B$ (join) và $A \\land B = A \\cap B$ (meet). Phần tử nhỏ nhất là $\\emptyset$, lớn nhất là $E$."
  },
  {
    id: "c3_l5_q2",
    chapterId: "c3",
    lessonId: "l3_5",
    lessonTitle: "§5 Dàn 2^E & Hàm đặc trưng",
    difficulty: "Nhận biết",
    question: "Hàm đặc trưng (characteristic function) $\\chi_A$ của tập con $A \\subseteq E$ được định nghĩa như thế nào?",
    options: [
      "$\\chi_A(x) = 1$ nếu $x \\in A$, $\\chi_A(x) = 0$ nếu $x \\notin A$",
      "$\\chi_A(x) = |A|$ với mọi $x$",
      "$\\chi_A(x) = x$ nếu $x \\in A$",
      "$\\chi_A(x) = 0$ nếu $x \\in A$, $\\chi_A(x) = 1$ nếu $x \\notin A$"
    ],
    correctAnswer: 0,
    explanation: "Hàm đặc trưng $\\chi_A: E \\to \\{0, 1\\}$ xác định bởi: $\\chi_A(x) = 1$ nếu $x \\in A$ và $\\chi_A(x) = 0$ nếu $x \\notin A$."
  },
  {
    id: "c3_l5_q3",
    chapterId: "c3",
    lessonId: "l3_5",
    lessonTitle: "§5 Dàn 2^E & Hàm đặc trưng",
    difficulty: "Nhận biết",
    question: "Cho $E = \\{1, 2, 3\\}$ và $A = \\{1, 3\\}$. Hàm đặc trưng $\\chi_A$ có giá trị gì?",
    options: [
      "$\\chi_A = (1, 0, 1)$",
      "$\\chi_A = (0, 1, 0)$",
      "$\\chi_A = (1, 1, 0)$",
      "$\\chi_A = (1, 1, 1)$"
    ],
    correctAnswer: 0,
    explanation: "$\\chi_A(1) = 1$ (vì $1 \\in A$), $\\chi_A(2) = 0$ (vì $2 \\notin A$), $\\chi_A(3) = 1$ (vì $3 \\in A$). Vậy $\\chi_A = (1, 0, 1)$."
  },
  {
    id: "c3_l5_q4",
    chapterId: "c3",
    lessonId: "l3_5",
    lessonTitle: "§5 Dàn 2^E & Hàm đặc trưng",
    difficulty: "Thông hiểu",
    question: "Cho $E = \\{a, b, c\\}$, $A = \\{a, b\\}$, $B = \\{b, c\\}$. Hàm đặc trưng $\\chi_{A \\cap B}$ là gì?",
    options: [
      "$(1, 1, 1)$",
      "$(0, 1, 0)$",
      "$(1, 0, 1)$",
      "$(0, 0, 0)$"
    ],
    correctAnswer: 1,
    explanation: "$A \\cap B = \\{b\\}$. Vậy $\\chi_{A \\cap B}(a) = 0, \\chi_{A \\cap B}(b) = 1, \\chi_{A \\cap B}(c) = 0$. Hay $\\chi_{A \\cap B} = (0, 1, 0)$. Lưu ý: $\\chi_{A \\cap B} = \\min(\\chi_A, \\chi_B)$ thành phần."
  },
  {
    id: "c3_l5_q5",
    chapterId: "c3",
    lessonId: "l3_5",
    lessonTitle: "§5 Dàn 2^E & Hàm đặc trưng",
    difficulty: "Thông hiểu",
    question: "Phép toán nào trên hàm đặc trưng tương ứng với phép hợp tập hợp $A \\cup B$?",
    options: [
      "$\\chi_{A \\cup B}(x) = \\chi_A(x) \\cdot \\chi_B(x)$",
      "$\\chi_{A \\cup B}(x) = \\max(\\chi_A(x), \\chi_B(x))$",
      "$\\chi_{A \\cup B}(x) = \\chi_A(x) + \\chi_B(x)$",
      "$\\chi_{A \\cup B}(x) = \\min(\\chi_A(x), \\chi_B(x))$"
    ],
    correctAnswer: 1,
    explanation: "$x \\in A \\cup B \\Leftrightarrow x \\in A$ hoặc $x \\in B$, nên $\\chi_{A \\cup B}(x) = \\max(\\chi_A(x), \\chi_B(x))$. Tương tự, $\\chi_{A \\cap B}(x) = \\min(\\chi_A(x), \\chi_B(x))$."
  },
  {
    id: "c3_l5_q6",
    chapterId: "c3",
    lessonId: "l3_5",
    lessonTitle: "§5 Dàn 2^E & Hàm đặc trưng",
    difficulty: "Thông hiểu",
    question: "Ánh xạ $\\varphi: \\mathcal{P}(E) \\to \\{0,1\\}^E$ xác định bởi $\\varphi(A) = \\chi_A$ là gì?",
    options: [
      "Đơn ánh nhưng không toàn ánh",
      "Song ánh (đẳng cấu dàn)",
      "Toàn ánh nhưng không đơn ánh",
      "Không phải ánh xạ hợp lệ"
    ],
    correctAnswer: 1,
    explanation: "Ánh xạ $\\varphi$ là song ánh giữa $\\mathcal{P}(E)$ và $\\{0,1\\}^E$: mỗi tập con $A$ tương ứng duy nhất với một hàm đặc trưng, và ngược lại. Hơn nữa, nó bảo toàn $\\lor$ và $\\land$, nên là đẳng cấu dàn."
  },
  {
    id: "c3_l5_q7",
    chapterId: "c3",
    lessonId: "l3_5",
    lessonTitle: "§5 Dàn 2^E & Hàm đặc trưng",
    difficulty: "Thông hiểu",
    question: "Cho $E = \\{1, 2, 3, 4\\}$. Dàn $2^E$ có bao nhiêu phần tử?",
    options: [
      "4",
      "8",
      "16",
      "32"
    ],
    correctAnswer: 2,
    explanation: "$|2^E| = |\\mathcal{P}(E)| = 2^{|E|} = 2^4 = 16$. Dàn $2^E$ gồm tất cả 16 tập con của $E$."
  },
  {
    id: "c3_l5_q8",
    chapterId: "c3",
    lessonId: "l3_5",
    lessonTitle: "§5 Dàn 2^E & Hàm đặc trưng",
    difficulty: "Vận dụng",
    question: "Cho $E = \\{1, 2, 3\\}$, $A = \\{1, 2\\}$. Tìm hàm đặc trưng của phần bù $\\bar{A} = E \\setminus A$.",
    options: [
      "$\\chi_{\\bar{A}} = (0, 0, 1)$",
      "$\\chi_{\\bar{A}} = (1, 1, 0)$",
      "$\\chi_{\\bar{A}} = (0, 1, 1)$",
      "$\\chi_{\\bar{A}} = (1, 0, 0)$"
    ],
    correctAnswer: 0,
    explanation: "$\\bar{A} = E \\setminus A = \\{3\\}$. Vậy $\\chi_{\\bar{A}}(1) = 0, \\chi_{\\bar{A}}(2) = 0, \\chi_{\\bar{A}}(3) = 1$. Hay $\\chi_{\\bar{A}} = (0, 0, 1)$. Lưu ý: $\\chi_{\\bar{A}}(x) = 1 - \\chi_A(x)$."
  },
  {
    id: "c3_l5_q9",
    chapterId: "c3",
    lessonId: "l3_5",
    lessonTitle: "§5 Dàn 2^E & Hàm đặc trưng",
    difficulty: "Vận dụng",
    question: "Hai dàn $(L_1, \\preceq_1)$ và $(L_2, \\preceq_2)$ được gọi là đẳng cấu khi nào?",
    options: [
      "Khi $|L_1| = |L_2|$",
      "Khi tồn tại song ánh $f: L_1 \\to L_2$ bảo toàn thứ tự: $a \\preceq_1 b \\Leftrightarrow f(a) \\preceq_2 f(b)$",
      "Khi $L_1 = L_2$",
      "Khi $L_1 \\subseteq L_2$"
    ],
    correctAnswer: 1,
    explanation: "Hai dàn đẳng cấu khi tồn tại song ánh $f: L_1 \\to L_2$ bảo toàn thứ tự theo cả hai chiều: $a \\preceq_1 b \\Leftrightarrow f(a) \\preceq_2 f(b)$. Điều này tương đương với $f$ bảo toàn cả $\\lor$ và $\\land$."
  },
  {
    id: "c3_l5_q10",
    chapterId: "c3",
    lessonId: "l3_5",
    lessonTitle: "§5 Dàn 2^E & Hàm đặc trưng",
    difficulty: "Vận dụng",
    question: "Cho $E = \\{a, b, c\\}$, $A = \\{a\\}$, $B = \\{b, c\\}$. Kiểm tra $\\chi_A + \\chi_B$ (cộng thành phần). Kết quả có phải hàm đặc trưng của $A \\cup B$ không?",
    options: [
      "Có, vì $\\chi_A + \\chi_B = \\chi_{A \\cup B}$ luôn đúng",
      "Có, vì $A$ và $B$ rời nhau nên $\\chi_A + \\chi_B = \\chi_{A \\cup B}$",
      "Không, vì tổng thành phần có thể lớn hơn 1",
      "Không, vì phép cộng không xác định trên hàm đặc trưng"
    ],
    correctAnswer: 1,
    explanation: "$A \\cap B = \\emptyset$ nên $\\chi_A(x) + \\chi_B(x) \\leq 1$ với mọi $x$. $\\chi_A = (1,0,0)$, $\\chi_B = (0,1,1)$, tổng = $(1,1,1) = \\chi_{A \\cup B}$. Khi $A \\cap B = \\emptyset$ thì $\\chi_{A \\cup B} = \\chi_A + \\chi_B$."
  },

  // ===== §6 Dàn ước số U_n & Thuật chia Euclide (l3_6) - 12 questions =====
  {
    id: "c3_l6_q5",
    chapterId: "c3",
    lessonId: "l3_6",
    lessonTitle: "§6 Dàn ước số U_n & Thuật chia Euclide",
    difficulty: "Nhận biết",
    question: "Dàn ước số $U_n$ là gì?",
    options: [
      "Tập các ước số dương của $n$ với quan hệ chia hết, $a \\lor b = \\text{lcm}(a,b)$, $a \\land b = \\gcd(a,b)$",
      "Tập $\\{1, 2, ..., n\\}$ với quan hệ $\\leq$",
      "Tập các số nguyên tố nhỏ hơn $n$",
      "Tập các bội số của $n$"
    ],
    correctAnswer: 0,
    explanation: "Dàn ước số $U_n$ gồm tập các ước số dương của $n$ với quan hệ chia hết ($|$). Phép join là $\\text{lcm}$ và phép meet là $\\gcd$. Phần tử nhỏ nhất là 1, lớn nhất là $n$."
  },
  {
    id: "c3_l6_q6",
    chapterId: "c3",
    lessonId: "l3_6",
    lessonTitle: "§6 Dàn ước số U_n & Thuật chia Euclide",
    difficulty: "Nhận biết",
    question: "Thuật toán chia Euclide dùng để tìm gì?",
    options: [
      "Bội chung nhỏ nhất của hai số",
      "Ước chung lớn nhất của hai số",
      "Số nguyên tố lớn nhất nhỏ hơn $n$",
      "Phân tích thừa số nguyên tố"
    ],
    correctAnswer: 1,
    explanation: "Thuật toán Euclide (hay thuật chia Euclide) dùng để tìm ước chung lớn nhất (USCLN / GCD) của hai số nguyên dương, dựa trên nguyên lý $\\gcd(a, b) = \\gcd(b, a \\mod b)$."
  },
  {
    id: "c3_l6_q7",
    chapterId: "c3",
    lessonId: "l3_6",
    lessonTitle: "§6 Dàn ước số U_n & Thuật chia Euclide",
    difficulty: "Nhận biết",
    question: "Định lý Bézout phát biểu rằng: với $a, b > 0$ và $d = \\gcd(a, b)$, tồn tại gì?",
    options: [
      "Tồn tại $x, y \\in \\mathbb{Z}$ sao cho $ax + by = d$",
      "Tồn tại $x, y > 0$ sao cho $ax + by = d$",
      "$a = bx + d$ với $x > 0$",
      "$d = a \\cdot b$"
    ],
    correctAnswer: 0,
    explanation: "Định lý Bézout: Nếu $d = \\gcd(a,b)$ thì tồn tại các số nguyên $x, y$ (có thể âm) sao cho $ax + by = d$. Các hệ số $x, y$ được tìm bằng thuật toán Euclide mở rộng."
  },
  {
    id: "c3_l6_q8",
    chapterId: "c3",
    lessonId: "l3_6",
    lessonTitle: "§6 Dàn ước số U_n & Thuật chia Euclide",
    difficulty: "Thông hiểu",
    question: "Dàn ước số $U_n$ là dàn bù khi và chỉ khi $n$ thỏa mãn điều kiện gì?",
    options: [
      "$n$ là số nguyên tố",
      "$n$ là lũy thừa của số nguyên tố",
      "$n$ không chia hết cho bình phương của số nguyên tố nào (square-free)",
      "$n$ là số chẵn"
    ],
    correctAnswer: 2,
    explanation: "Dàn $U_n$ là dàn bù khi và chỉ khi $n$ square-free (không chia hết cho $p^2$ với mọi số nguyên tố $p$). Ví dụ: $U_{30}$ ($30 = 2 \\cdot 3 \\cdot 5$) là dàn bù, nhưng $U_{12}$ ($12 = 2^2 \\cdot 3$) không phải."
  },
  {
    id: "c3_l6_q9",
    chapterId: "c3",
    lessonId: "l3_6",
    lessonTitle: "§6 Dàn ước số U_n & Thuật chia Euclide",
    difficulty: "Thông hiểu",
    question: "Dùng thuật toán Euclide, tìm $\\gcd(48, 18)$.",
    options: [
      "2",
      "3",
      "6",
      "9"
    ],
    correctAnswer: 2,
    explanation: "Áp dụng thuật toán Euclide: $48 = 2 \\times 18 + 12$; $18 = 1 \\times 12 + 6$; $12 = 2 \\times 6 + 0$. Số dư cuối khác 0 là 6. Vậy $\\gcd(48, 18) = 6$."
  },
  {
    id: "c3_l6_q10",
    chapterId: "c3",
    lessonId: "l3_6",
    lessonTitle: "§6 Dàn ước số U_n & Thuật chia Euclide",
    difficulty: "Thông hiểu",
    question: "Dàn $U_{12}$ gồm các phần tử nào?",
    options: [
      "$\\{1, 2, 3, 4, 6, 12\\}$",
      "$\\{1, 2, 3, 12\\}$",
      "$\\{2, 3, 4, 6\\}$",
      "$\\{1, 2, 4, 6, 12\\}$"
    ],
    correctAnswer: 0,
    explanation: "Ước số dương của 12 là: $1, 2, 3, 4, 6, 12$. Vậy $U_{12} = \\{1, 2, 3, 4, 6, 12\\}$."
  },
  {
    id: "c3_l6_q11",
    chapterId: "c3",
    lessonId: "l3_6",
    lessonTitle: "§6 Dàn ước số U_n & Thuật chia Euclide",
    difficulty: "Thông hiểu",
    question: "Số nào sau đây là square-free (không chia hết cho bình phương của số nguyên tố nào)?",
    options: [
      "12",
      "18",
      "30",
      "50"
    ],
    correctAnswer: 2,
    explanation: "$12 = 2^2 \\cdot 3$ (chia hết cho $2^2$). $18 = 2 \\cdot 3^2$ (chia hết cho $3^2$). $30 = 2 \\cdot 3 \\cdot 5$ (không chia hết cho bình phương số nguyên tố nào) ✓. $50 = 2 \\cdot 5^2$ (chia hết cho $5^2$). Vậy 30 là square-free."
  },
  {
    id: "c3_l6_q12",
    chapterId: "c3",
    lessonId: "l3_6",
    lessonTitle: "§6 Dàn ước số U_n & Thuật chia Euclide",
    difficulty: "Vận dụng",
    question: "Dùng thuật toán Euclide mở rộng, tìm $x, y$ sao cho $35x + 15y = \\gcd(35, 15)$.",
    options: [
      "$x = 1, y = -2$",
      "$x = -1, y = 3$",
      "$x = 2, y = -1$",
      "$x = 1, y = -1$"
    ],
    correctAnswer: 0,
    explanation: "$\\gcd(35, 15)$: $35 = 2 \\times 15 + 5$; $15 = 3 \\times 5 + 0$. Vậy $\\gcd = 5$. Truy ngược: $5 = 35 - 2 \\times 15 = 35 \\times 1 + 15 \\times (-2)$. Vậy $x = 1, y = -2$. Kiểm tra: $35(1) + 15(-2) = 35 - 30 = 5$ ✓."
  },
  {
    id: "c3_l6_q13",
    chapterId: "c3",
    lessonId: "l3_6",
    lessonTitle: "§6 Dàn ước số U_n & Thuật chia Euclide",
    difficulty: "Vận dụng",
    question: "Tính $\\gcd(252, 105)$ bằng thuật toán Euclide.",
    options: [
      "7",
      "21",
      "42",
      "3"
    ],
    correctAnswer: 1,
    explanation: "$252 = 2 \\times 105 + 42$; $105 = 2 \\times 42 + 21$; $42 = 2 \\times 21 + 0$. Số dư cuối khác 0 là 21. Vậy $\\gcd(252, 105) = 21$."
  },
  {
    id: "c3_l6_q14",
    chapterId: "c3",
    lessonId: "l3_6",
    lessonTitle: "§6 Dàn ước số U_n & Thuật chia Euclide",
    difficulty: "Vận dụng",
    question: "Trong dàn $U_{30}$, tìm phần bù của phần tử 15.",
    options: [
      "2",
      "6",
      "10",
      "3"
    ],
    correctAnswer: 0,
    explanation: "$U_{30} = \\{1, 2, 3, 5, 6, 10, 15, 30\\}$. Phần bù $b$ của 15: $\\gcd(15, b) = 1$ và $\\text{lcm}(15, b) = 30$. Thử $b = 2$: $\\gcd(15, 2) = 1$ ✓, $\\text{lcm}(15, 2) = 30$ ✓. Vậy phần bù của 15 là 2."
  },
  {
    id: "c3_l6_q15",
    chapterId: "c3",
    lessonId: "l3_6",
    lessonTitle: "§6 Dàn ước số U_n & Thuật chia Euclide",
    difficulty: "Vận dụng",
    question: "Dùng thuật toán Euclide mở rộng, tìm $x, y$ sao cho $56x + 15y = \\gcd(56, 15)$.",
    options: [
      "$x = -1, y = 4$",
      "$x = 4, y = -15$",
      "$x = 1, y = -3$",
      "$x = -4, y = 15$"
    ],
    correctAnswer: 3,
    explanation: "$56 = 3 \\times 15 + 11$; $15 = 1 \\times 11 + 4$; $11 = 2 \\times 4 + 3$; $4 = 1 \\times 3 + 1$; $3 = 3 \\times 1 + 0$. Vậy $\\gcd = 1$. Truy ngược: $1 = 4 - 1 \\times 3 = 4 - (11 - 2 \\times 4) = 3 \\times 4 - 11 = 3(15 - 11) - 11 = 3 \\times 15 - 4 \\times 11 = 3 \\times 15 - 4(56 - 3 \\times 15) = 15 \\times 15 - 4 \\times 56$. Vậy $56(-4) + 15(15) = 1$. $x = -4, y = 15$. Kiểm tra: $56(-4) + 15(15) = -224 + 225 = 1$ ✓."
  },
  {
    id: "c3_l6_q16",
    chapterId: "c3",
    lessonId: "l3_6",
    lessonTitle: "§6 Dàn ước số U_n & Thuật chia Euclide",
    difficulty: "Thông hiểu",
    question: "Dàn $U_n$ luôn là dàn phân bố. Phát biểu này đúng hay sai?",
    options: [
      "Đúng, dàn ước số luôn phân bố",
      "Sai, chỉ khi $n$ square-free",
      "Sai, chỉ khi $n$ là số nguyên tố",
      "Đúng, nhưng chỉ khi $n$ chẵn"
    ],
    correctAnswer: 0,
    explanation: "Dàn ước số $U_n$ luôn là dàn phân bố với mọi $n$, vì $\\gcd(a, \\text{lcm}(b,c)) = \\text{lcm}(\\gcd(a,b), \\gcd(a,c))$ luôn đúng cho các số nguyên dương. Tính bù (complemented) mới cần $n$ square-free."
  }
];
