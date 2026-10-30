const QUIZ_DATA_CH2_EXTRA = [
  // ===========================================================================================
  // LESSON l2_1: §1 Tập hợp & Đại số tập hợp (17 questions: q4 - q20)
  // ===========================================================================================

  // ---- Nhận biết (5) ----
  {
    id: "c2_l1_q4",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Nhận biết",
    question: "Cho tập $A = \\{1, 2, 3, 4\\}$. Khẳng định nào sau đây là đúng?",
    options: [
      "$\\{1, 2\\} \\in A$",
      "$\\{2\\} \\subset A$",
      "$2 \\subset A$",
      "$\\{1, 2, 3, 4, 5\\} \\subset A$"
    ],
    correctAnswer: 1,
    explanation: "$\\{2\\} \\subset A$ đúng vì mọi phần tử của $\\{2\\}$ (chỉ có 2) đều thuộc $A$. Phương án A sai vì $\\{1,2\\}$ là tập hợp, không phải phần tử của $A$. Phương án C sai vì $2$ là phần tử ($2 \\in A$), không dùng ký hiệu $\\subset$. Phương án D sai vì $5 \\notin A$."
  },
  {
    id: "c2_l1_q5",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Nhận biết",
    question: "Cho $A = \\{a, b, c\\}$ và $B = \\{b, c, d, e\\}$. Tập $A \\cup B$ bằng:",
    options: [
      "$\\{b, c\\}$",
      "$\\{a, b, c, d, e\\}$",
      "$\\{a, d, e\\}$",
      "$\\{a, b, c\\}$"
    ],
    correctAnswer: 1,
    explanation: "$A \\cup B$ là tập hợp tất cả các phần tử thuộc $A$ hoặc $B$ (hoặc cả hai). Vậy $A \\cup B = \\{a, b, c, d, e\\}$."
  },
  {
    id: "c2_l1_q6",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Nhận biết",
    question: "Cho $A = \\{1, 3, 5, 7, 9\\}$ và $B = \\{2, 3, 5, 7\\}$. Tập $A \\cap B$ bằng:",
    options: [
      "$\\{1, 2, 3, 5, 7, 9\\}$",
      "$\\{3, 5, 7\\}$",
      "$\\{1, 9\\}$",
      "$\\{2\\}$"
    ],
    correctAnswer: 1,
    explanation: "$A \\cap B$ là tập hợp các phần tử thuộc cả $A$ và $B$. Các phần tử chung là $3, 5, 7$. Vậy $A \\cap B = \\{3, 5, 7\\}$."
  },
  {
    id: "c2_l1_q7",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Nhận biết",
    question: "Cho $A = \\{1, 2, 3, 4, 5\\}$ và $B = \\{3, 4, 5, 6, 7\\}$. Tập hiệu $A \\setminus B$ bằng:",
    options: [
      "$\\{6, 7\\}$",
      "$\\{1, 2\\}$",
      "$\\{3, 4, 5\\}$",
      "$\\{1, 2, 6, 7\\}$"
    ],
    correctAnswer: 1,
    explanation: "$A \\setminus B$ gồm các phần tử thuộc $A$ mà không thuộc $B$. Ta có $3, 4, 5 \\in B$ nên bị loại, còn lại $1, 2$. Vậy $A \\setminus B = \\{1, 2\\}$."
  },
  {
    id: "c2_l1_q8",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Nhận biết",
    question: "Khẳng định nào sau đây là đúng về tập rỗng $\\varnothing$?",
    options: [
      "$\\varnothing$ không phải là tập con của bất kỳ tập nào",
      "$\\varnothing$ là tập con của mọi tập hợp",
      "$\\varnothing = \\{0\\}$",
      "$\\varnothing = \\{\\varnothing\\}$"
    ],
    correctAnswer: 1,
    explanation: "Tập rỗng $\\varnothing$ là tập con của mọi tập hợp (đúng theo tiên đề). $\\varnothing \\neq \\{0\\}$ vì $\\{0\\}$ chứa phần tử $0$. $\\varnothing \\neq \\{\\varnothing\\}$ vì $\\{\\varnothing\\}$ chứa một phần tử là $\\varnothing$."
  },

  // ---- Thông hiểu (7) ----
  {
    id: "c2_l1_q9",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Thông hiểu",
    question: "Cho $|A| = 15$, $|B| = 20$, $|A \\cap B| = 8$. Tính $|A \\cup B|$.",
    options: [
      "$35$",
      "$27$",
      "$43$",
      "$23$"
    ],
    correctAnswer: 1,
    explanation: "Áp dụng công thức bao hàm - loại trừ cho hai tập hợp: $|A \\cup B| = |A| + |B| - |A \\cap B| = 15 + 20 - 8 = 27$."
  },
  {
    id: "c2_l1_q10",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Thông hiểu",
    question: "Cho $A = \\{x \\in \\mathbb{N} \\mid x \\leq 6\\}$ và $B = \\{x \\in \\mathbb{N} \\mid x$ chẵn, $x \\leq 8\\}$. Tập $A \\setminus B$ bằng:",
    options: [
      "$\\{1, 3, 5\\}$",
      "$\\{1, 2, 3, 5\\}$",
      "$\\{0, 1, 3, 5\\}$",
      "$\\{7, 8\\}$"
    ],
    correctAnswer: 0,
    explanation: "$A = \\{0, 1, 2, 3, 4, 5, 6\\}$ và $B = \\{0, 2, 4, 6, 8\\}$. $A \\setminus B$ gồm các phần tử thuộc $A$ nhưng không thuộc $B$: loại bỏ $0, 2, 4, 6$ khỏi $A$, còn $\\{1, 3, 5\\}$."
  },
  {
    id: "c2_l1_q11",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Thông hiểu",
    question: "Theo luật De Morgan cho tập hợp, $\\overline{A \\cup B}$ bằng:",
    options: [
      "$\\overline{A} \\cup \\overline{B}$",
      "$\\overline{A} \\cap \\overline{B}$",
      "$A \\cap \\overline{B}$",
      "$\\overline{A} \\cup B$"
    ],
    correctAnswer: 1,
    explanation: "Luật De Morgan cho tập hợp: $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$ và $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$. Phần bù của hợp bằng giao các phần bù."
  },
  {
    id: "c2_l1_q12",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Thông hiểu",
    question: "Cho tập $A$ có $6$ phần tử. Số phần tử của tập lũy thừa $\\mathcal{P}(A)$ là:",
    options: [
      "$36$",
      "$12$",
      "$64$",
      "$6$"
    ],
    correctAnswer: 2,
    explanation: "Tập lũy thừa $\\mathcal{P}(A)$ gồm tất cả các tập con của $A$. Nếu $|A| = n$ thì $|\\mathcal{P}(A)| = 2^n$. Với $n = 6$: $|\\mathcal{P}(A)| = 2^6 = 64$."
  },
  {
    id: "c2_l1_q13",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Thông hiểu",
    question: "Cho $A = \\{1, 2\\}$ và $B = \\{a, b, c\\}$. Số phần tử của tích Descartes $A \\times B$ là:",
    options: [
      "$5$",
      "$6$",
      "$8$",
      "$9$"
    ],
    correctAnswer: 1,
    explanation: "$A \\times B = \\{(x, y) \\mid x \\in A, y \\in B\\}$. Số phần tử $|A \\times B| = |A| \\cdot |B| = 2 \\times 3 = 6$. Cụ thể: $A \\times B = \\{(1,a),(1,b),(1,c),(2,a),(2,b),(2,c)\\}$."
  },
  {
    id: "c2_l1_q14",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Thông hiểu",
    question: "Cho $A = \\{1, 2, 3, 4, 5\\}$ và $B = \\{3, 4, 5, 6, 7\\}$. Hiệu đối xứng $A \\triangle B$ bằng:",
    options: [
      "$\\{3, 4, 5\\}$",
      "$\\{1, 2, 6, 7\\}$",
      "$\\{1, 2, 3, 4, 5, 6, 7\\}$",
      "$\\{1, 2\\}$"
    ],
    correctAnswer: 1,
    explanation: "Hiệu đối xứng $A \\triangle B = (A \\setminus B) \\cup (B \\setminus A)$. Ta có $A \\setminus B = \\{1, 2\\}$ và $B \\setminus A = \\{6, 7\\}$. Vậy $A \\triangle B = \\{1, 2, 6, 7\\}$."
  },
  {
    id: "c2_l1_q15",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Thông hiểu",
    question: "Tập $A = \\{a, b, c, d\\}$ có bao nhiêu tập con thực sự (proper subset)?",
    options: [
      "$16$",
      "$15$",
      "$14$",
      "$4$"
    ],
    correctAnswer: 1,
    explanation: "Tập $A$ có $|A| = 4$ nên có $2^4 = 16$ tập con. Tập con thực sự là tập con khác $A$, nên số tập con thực sự là $2^4 - 1 = 15$."
  },

  // ---- Vận dụng (5) ----
  {
    id: "c2_l1_q16",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Vận dụng",
    question: "Cho $|A| = 30$, $|B| = 25$, $|C| = 20$, $|A \\cap B| = 10$, $|A \\cap C| = 8$, $|B \\cap C| = 5$, $|A \\cap B \\cap C| = 3$. Tính $|A \\cup B \\cup C|$.",
    options: [
      "$75$",
      "$55$",
      "$52$",
      "$58$"
    ],
    correctAnswer: 1,
    explanation: "Áp dụng công thức bao hàm - loại trừ cho ba tập: $|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C| = 30 + 25 + 20 - 10 - 8 - 5 + 3 = 55$."
  },
  {
    id: "c2_l1_q17",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Vận dụng",
    question: "Tính $|\\mathcal{P}(\\mathcal{P}(\\mathcal{P}(\\varnothing)))|$ (số phần tử của tập lũy thừa lặp ba lần của tập rỗng).",
    options: [
      "$2$",
      "$4$",
      "$8$",
      "$16$"
    ],
    correctAnswer: 1,
    explanation: "Bắt đầu: $|\\varnothing| = 0$. Lần 1: $|\\mathcal{P}(\\varnothing)| = 2^0 = 1$ (tập $\\{\\varnothing\\}$). Lần 2: $|\\mathcal{P}(\\mathcal{P}(\\varnothing))| = 2^1 = 2$ (tập $\\{\\varnothing, \\{\\varnothing\\}\\}$). Lần 3: $|\\mathcal{P}(\\mathcal{P}(\\mathcal{P}(\\varnothing)))| = 2^2 = 4$."
  },
  {
    id: "c2_l1_q18",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Vận dụng",
    question: "Cho tập vũ trụ $U = \\{1, 2, ..., 10\\}$, $A = \\{1, 2, 3, 4, 5\\}$, $B = \\{4, 5, 6, 7, 8\\}$. Tính $|\\overline{A} \\cap \\overline{B}|$.",
    options: [
      "$3$",
      "$2$",
      "$5$",
      "$4$"
    ],
    correctAnswer: 1,
    explanation: "Theo De Morgan: $\\overline{A} \\cap \\overline{B} = \\overline{A \\cup B}$. Ta có $A \\cup B = \\{1,2,3,4,5,6,7,8\\}$. Vậy $\\overline{A \\cup B} = \\{9, 10\\}$, nên $|\\overline{A} \\cap \\overline{B}| = 2$."
  },
  {
    id: "c2_l1_q19",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Vận dụng",
    question: "Trong một lớp 50 sinh viên: 30 người học Toán, 25 người học Lý, 10 người học cả Toán và Lý. Hỏi bao nhiêu sinh viên không học môn nào trong hai môn trên?",
    options: [
      "$5$",
      "$15$",
      "$10$",
      "$45$"
    ],
    correctAnswer: 0,
    explanation: "Gọi $T$ = tập học Toán, $L$ = tập học Lý. $|T \\cup L| = |T| + |L| - |T \\cap L| = 30 + 25 - 10 = 45$. Số sinh viên không học môn nào $= 50 - 45 = 5$."
  },
  {
    id: "c2_l1_q20",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Vận dụng",
    question: "Cho $A$, $B$, $C$ là các tập hợp. Đẳng thức nào sau đây luôn đúng?",
    options: [
      "$A \\cup (B \\cap C) = (A \\cup B) \\cap C$",
      "$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$",
      "$A \\cap (B \\cup C) = (A \\cap B) \\cup C$",
      "$A \\setminus (B \\cup C) = (A \\setminus B) \\cup (A \\setminus C)$"
    ],
    correctAnswer: 1,
    explanation: "Đây là luật phân phối (distributive law) của phép hợp đối với phép giao: $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$. Phương án A thiếu $A$ trong vế phải. Phương án C thiếu $A$ trong vế phải. Phương án D sai vì $A \\setminus (B \\cup C) = (A \\setminus B) \\cap (A \\setminus C)$ (phải là giao, không phải hợp)."
  },

  // ===========================================================================================
  // LESSON l2_2: §2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh (17 questions: q4 - q20)
  // ===========================================================================================

  // ---- Nhận biết (5) ----
  {
    id: "c2_l2_q4",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Nhận biết",
    question: "Ánh xạ $f: A \\to B$ được gọi là đơn ánh (injective) khi nào?",
    options: [
      "Mỗi phần tử của $B$ đều có tạo ảnh",
      "Nếu $f(a_1) = f(a_2)$ thì $a_1 = a_2$ với mọi $a_1, a_2 \\in A$",
      "$f$ vừa đơn ánh vừa toàn ánh",
      "Tồn tại $b \\in B$ sao cho $f(a) = b$ với mọi $a \\in A$"
    ],
    correctAnswer: 1,
    explanation: "Ánh xạ $f: A \\to B$ là đơn ánh nếu với mọi $a_1, a_2 \\in A$: $f(a_1) = f(a_2) \\Rightarrow a_1 = a_2$. Nói cách khác, hai phần tử khác nhau trong $A$ luôn có ảnh khác nhau trong $B$."
  },
  {
    id: "c2_l2_q5",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Nhận biết",
    question: "Ánh xạ $f: A \\to B$ được gọi là toàn ánh (surjective) khi nào?",
    options: [
      "Mỗi phần tử của $A$ chỉ có đúng một ảnh",
      "Tồn tại ánh xạ ngược $f^{-1}$",
      "Với mọi $b \\in B$, tồn tại $a \\in A$ sao cho $f(a) = b$",
      "$|A| = |B|$"
    ],
    correctAnswer: 2,
    explanation: "Ánh xạ $f: A \\to B$ là toàn ánh nếu $\\forall b \\in B, \\exists a \\in A: f(a) = b$. Nghĩa là mỗi phần tử trong tập đích $B$ đều là ảnh của ít nhất một phần tử trong $A$."
  },
  {
    id: "c2_l2_q6",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Nhận biết",
    question: "Ánh xạ song ánh (bijective) là ánh xạ:",
    options: [
      "Chỉ cần là đơn ánh",
      "Chỉ cần là toàn ánh",
      "Vừa là đơn ánh vừa là toàn ánh",
      "Không đơn ánh cũng không toàn ánh"
    ],
    correctAnswer: 2,
    explanation: "Ánh xạ song ánh là ánh xạ vừa đơn ánh (1-1) vừa toàn ánh (onto). Khi đó mỗi phần tử trong $B$ là ảnh của đúng một phần tử trong $A$."
  },
  {
    id: "c2_l2_q7",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Nhận biết",
    question: "Ánh xạ $f: A \\to B$ có ánh xạ ngược $f^{-1}$ tồn tại khi và chỉ khi:",
    options: [
      "$f$ là đơn ánh",
      "$f$ là toàn ánh",
      "$f$ là song ánh",
      "$|A| > |B|$"
    ],
    correctAnswer: 2,
    explanation: "Ánh xạ $f$ có ánh xạ ngược $f^{-1}: B \\to A$ khi và chỉ khi $f$ là song ánh. Đơn ánh đảm bảo $f^{-1}$ xác định duy nhất, toàn ánh đảm bảo $f^{-1}$ xác định trên toàn bộ $B$."
  },
  {
    id: "c2_l2_q8",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Nhận biết",
    question: "Cho $|A| = 3$ và $|B| = 4$. Tổng số ánh xạ (hàm) từ $A$ sang $B$ là:",
    options: [
      "$12$",
      "$24$",
      "$64$",
      "$81$"
    ],
    correctAnswer: 2,
    explanation: "Mỗi phần tử trong $A$ có $|B| = 4$ lựa chọn ảnh trong $B$. Vì $|A| = 3$, tổng số ánh xạ từ $A$ sang $B$ là $|B|^{|A|} = 4^3 = 64$."
  },

  // ---- Thông hiểu (7) ----
  {
    id: "c2_l2_q9",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Thông hiểu",
    question: "Xét ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}$, $f(x) = 2x + 1$. Khẳng định nào đúng?",
    options: [
      "$f$ là đơn ánh nhưng không toàn ánh",
      "$f$ là toàn ánh nhưng không đơn ánh",
      "$f$ là song ánh",
      "$f$ không đơn ánh cũng không toàn ánh"
    ],
    correctAnswer: 2,
    explanation: "Đơn ánh: $f(a_1) = f(a_2) \\Rightarrow 2a_1+1 = 2a_2+1 \\Rightarrow a_1 = a_2$. ✓. Toàn ánh: $\\forall y \\in \\mathbb{R}$, ta tìm được $x = \\frac{y-1}{2} \\in \\mathbb{R}$ sao cho $f(x) = y$. ✓. Vậy $f$ là song ánh."
  },
  {
    id: "c2_l2_q10",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Thông hiểu",
    question: "Số đơn ánh từ tập $A$ có 3 phần tử vào tập $B$ có 5 phần tử là:",
    options: [
      "$125$",
      "$60$",
      "$15$",
      "$10$"
    ],
    correctAnswer: 1,
    explanation: "Số đơn ánh từ $A$ (3 phần tử) vào $B$ (5 phần tử) là chỉnh hợp $A_5^3 = \\frac{5!}{(5-3)!} = 5 \\times 4 \\times 3 = 60$. Phần tử thứ nhất có 5 lựa chọn, phần tử thứ hai có 4, phần tử thứ ba có 3."
  },
  {
    id: "c2_l2_q11",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Thông hiểu",
    question: "Cho $f(x) = x + 1$ và $g(x) = 3x$. Tính $(f \\circ g)(2)$.",
    options: [
      "$7$",
      "$9$",
      "$6$",
      "$8$"
    ],
    correctAnswer: 0,
    explanation: "$(f \\circ g)(2) = f(g(2)) = f(3 \\times 2) = f(6) = 6 + 1 = 7$. Lưu ý: $f \\circ g$ nghĩa là áp dụng $g$ trước rồi $f$ sau."
  },
  {
    id: "c2_l2_q12",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Thông hiểu",
    question: "Xét ánh xạ $f: \\mathbb{R} \\to \\mathbb{R}$, $f(x) = x^2$. Khẳng định nào đúng?",
    options: [
      "$f$ là đơn ánh",
      "$f$ là toàn ánh",
      "$f$ là song ánh",
      "$f$ không đơn ánh và không toàn ánh"
    ],
    correctAnswer: 3,
    explanation: "Không đơn ánh: $f(-1) = f(1) = 1$ nhưng $-1 \\neq 1$. Không toàn ánh: không tồn tại $x \\in \\mathbb{R}$ sao cho $f(x) = -1$ vì $x^2 \\geq 0$ với mọi $x$. Vậy $f$ không đơn ánh và không toàn ánh."
  },
  {
    id: "c2_l2_q13",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Thông hiểu",
    question: "Cho $A$ và $B$ là hai tập hữu hạn với $|A| = |B| = n$. Khẳng định nào sau đây đúng?",
    options: [
      "Mọi ánh xạ $f: A \\to B$ đều là song ánh",
      "$f: A \\to B$ đơn ánh $\\Leftrightarrow$ $f$ toàn ánh $\\Leftrightarrow$ $f$ song ánh",
      "$f: A \\to B$ đơn ánh nhưng có thể không toàn ánh",
      "Không tồn tại song ánh từ $A$ sang $B$"
    ],
    correctAnswer: 1,
    explanation: "Khi $|A| = |B| = n$ (tập hữu hạn), một ánh xạ $f: A \\to B$ là đơn ánh khi và chỉ khi nó là toàn ánh, khi và chỉ khi nó là song ánh. Điều này là do đơn ánh yêu cầu $|f(A)| = |A| = n = |B|$, tức $f(A) = B$."
  },
  {
    id: "c2_l2_q14",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Thông hiểu",
    question: "Cho $f: A \\to B$ và $g: B \\to C$. Nếu $g \\circ f$ là đơn ánh, thì nhất thiết:",
    options: [
      "$g$ là đơn ánh",
      "$f$ là đơn ánh",
      "$f$ là toàn ánh",
      "$g$ là toàn ánh"
    ],
    correctAnswer: 1,
    explanation: "Giả sử $f(a_1) = f(a_2)$. Khi đó $g(f(a_1)) = g(f(a_2))$, tức $(g \\circ f)(a_1) = (g \\circ f)(a_2)$. Vì $g \\circ f$ đơn ánh nên $a_1 = a_2$. Vậy $f$ là đơn ánh. Tuy nhiên $g$ chưa chắc đơn ánh."
  },
  {
    id: "c2_l2_q15",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Thông hiểu",
    question: "Cho $f: A \\to B$. Tập ảnh (range) $\\text{Im}(f)$ được định nghĩa là:",
    options: [
      "Tập $A$",
      "Tập $B$",
      "$\\{f(a) \\mid a \\in A\\} \\subseteq B$",
      "$\\{a \\in A \\mid f(a) \\in B\\}$"
    ],
    correctAnswer: 2,
    explanation: "Tập ảnh $\\text{Im}(f) = \\{f(a) \\mid a \\in A\\}$ là tập tất cả các giá trị mà $f$ nhận được, là tập con của tập đích $B$. $f$ là toàn ánh khi và chỉ khi $\\text{Im}(f) = B$."
  },

  // ---- Vận dụng (5) ----
  {
    id: "c2_l2_q16",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Vận dụng",
    question: "Cho $f: \\mathbb{R} \\to \\mathbb{R}$, $f(x) = 3x - 5$. Tìm $f^{-1}(x)$.",
    options: [
      "$f^{-1}(x) = \\frac{x - 5}{3}$",
      "$f^{-1}(x) = \\frac{x + 5}{3}$",
      "$f^{-1}(x) = 3x + 5$",
      "$f^{-1}(x) = \\frac{3}{x + 5}$"
    ],
    correctAnswer: 1,
    explanation: "Đặt $y = 3x - 5$. Giải $x$ theo $y$: $x = \\frac{y + 5}{3}$. Vậy $f^{-1}(x) = \\frac{x + 5}{3}$. Kiểm tra: $f(f^{-1}(x)) = 3 \\cdot \\frac{x+5}{3} - 5 = x + 5 - 5 = x$. ✓"
  },
  {
    id: "c2_l2_q17",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Vận dụng",
    question: "Số song ánh từ tập $A = \\{1, 2, 3, 4, 5\\}$ vào chính nó là:",
    options: [
      "$25$",
      "$120$",
      "$3125$",
      "$32$"
    ],
    correctAnswer: 1,
    explanation: "Song ánh từ tập $n$ phần tử vào chính nó chính là hoán vị, có $n!$ cách. Với $n = 5$: $5! = 120$."
  },
  {
    id: "c2_l2_q18",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Vận dụng",
    question: "Cho $f(x) = x^2 + 1$ và $g(x) = 2x - 3$. Tính $(f \\circ g)(3) + (g \\circ f)(3)$.",
    options: [
      "$27$",
      "$24$",
      "$30$",
      "$27$"
    ],
    correctAnswer: 0,
    explanation: "$(f \\circ g)(3) = f(g(3)) = f(2 \\cdot 3 - 3) = f(3) = 3^2 + 1 = 10$. $(g \\circ f)(3) = g(f(3)) = g(3^2 + 1) = g(10) = 2 \\cdot 10 - 3 = 17$. Tổng $= 10 + 17 = 27$."
  },
  {
    id: "c2_l2_q19",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Vận dụng",
    question: "Số toàn ánh từ tập $A = \\{1, 2, 3, 4\\}$ lên tập $B = \\{a, b, c\\}$ là:",
    options: [
      "$24$",
      "$36$",
      "$81$",
      "$12$"
    ],
    correctAnswer: 1,
    explanation: "Dùng công thức bao hàm - loại trừ cho toàn ánh: $\\sum_{i=0}^{3} (-1)^i \\binom{3}{i}(3-i)^4 = \\binom{3}{0} \\cdot 3^4 - \\binom{3}{1} \\cdot 2^4 + \\binom{3}{2} \\cdot 1^4 - \\binom{3}{3} \\cdot 0^4 = 81 - 48 + 3 - 0 = 36$."
  },
  {
    id: "c2_l2_q20",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Vận dụng",
    question: "Cho $f: A \\to B$ và $g: B \\to C$. Nếu $g \\circ f$ là toàn ánh, thì nhất thiết:",
    options: [
      "$f$ là toàn ánh",
      "$g$ là đơn ánh",
      "$g$ là toàn ánh",
      "$f$ là song ánh"
    ],
    correctAnswer: 2,
    explanation: "Với mọi $c \\in C$, vì $g \\circ f$ toàn ánh nên $\\exists a \\in A: (g \\circ f)(a) = c$, tức $g(f(a)) = c$. Đặt $b = f(a) \\in B$, ta có $g(b) = c$. Vậy $\\forall c \\in C, \\exists b \\in B: g(b) = c$, nên $g$ là toàn ánh. Tuy nhiên $f$ chưa chắc toàn ánh."
  },

  // ===========================================================================================
  // LESSON l2_3: §3 Phép đếm & Các nguyên lý đếm (16 questions: q5 - q20)
  // ===========================================================================================

  // ---- Nhận biết (5) ----
  {
    id: "c2_l3_q5",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Nhận biết",
    question: "Nguyên lý cộng phát biểu rằng: Nếu công việc $A$ có $m$ cách thực hiện và công việc $B$ có $n$ cách thực hiện, $A$ và $B$ không thể đồng thời xảy ra, thì số cách thực hiện $A$ hoặc $B$ là:",
    options: [
      "$m \\times n$",
      "$m + n$",
      "$m^n$",
      "$m - n$"
    ],
    correctAnswer: 1,
    explanation: "Nguyên lý cộng: Nếu hai công việc không đồng thời xảy ra (hai tập rời nhau), thì tổng số cách thực hiện một trong hai công việc là $m + n$."
  },
  {
    id: "c2_l3_q6",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Nhận biết",
    question: "Nguyên lý nhân phát biểu rằng: Nếu công việc gồm hai giai đoạn liên tiếp, giai đoạn 1 có $m$ cách, giai đoạn 2 có $n$ cách (với mỗi cách ở giai đoạn 1), thì tổng số cách hoàn thành công việc là:",
    options: [
      "$m + n$",
      "$m \\times n$",
      "$m^n$",
      "$\\frac{m!}{(m-n)!}$"
    ],
    correctAnswer: 1,
    explanation: "Nguyên lý nhân: Nếu một công việc được thực hiện qua nhiều giai đoạn liên tiếp, thì tổng số cách hoàn thành bằng tích số cách của các giai đoạn: $m \\times n$."
  },
  {
    id: "c2_l3_q7",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Nhận biết",
    question: "Một cửa hàng bán 5 loại áo và 4 loại quần. Số cách chọn một bộ gồm 1 áo và 1 quần là:",
    options: [
      "$9$",
      "$20$",
      "$1$",
      "$45$"
    ],
    correctAnswer: 1,
    explanation: "Chọn 1 áo (5 cách) VÀ chọn 1 quần (4 cách). Đây là hai giai đoạn liên tiếp, áp dụng nguyên lý nhân: $5 \\times 4 = 20$ cách."
  },
  {
    id: "c2_l3_q8",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Nhận biết",
    question: "Một người muốn đi du lịch. Có 3 tour miền Bắc và 5 tour miền Nam. Nếu chỉ chọn một tour, thì có bao nhiêu cách chọn?",
    options: [
      "$15$",
      "$8$",
      "$2$",
      "$35$"
    ],
    correctAnswer: 1,
    explanation: "Chọn tour miền Bắc HOẶC miền Nam (không thể đi đồng thời cả hai). Áp dụng nguyên lý cộng: $3 + 5 = 8$ cách."
  },
  {
    id: "c2_l3_q9",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Nhận biết",
    question: "Bài toán nào sau đây áp dụng nguyên lý nhân?",
    options: [
      "Chọn 1 cuốn sách từ kệ Toán (10 cuốn) hoặc kệ Lý (8 cuốn)",
      "Chọn 1 áo VÀ 1 quần từ 6 áo và 4 quần",
      "Đếm số phần tử của $A \\cup B$ với $A \\cap B = \\varnothing$",
      "Đếm số học sinh giỏi Toán hoặc giỏi Văn"
    ],
    correctAnswer: 1,
    explanation: "Chọn 1 áo VÀ 1 quần gồm 2 giai đoạn liên tiếp nên áp dụng nguyên lý nhân ($6 \\times 4 = 24$). Các phương án còn lại đều là lựa chọn HOẶC, áp dụng nguyên lý cộng."
  },

  // ---- Thông hiểu (6) ----
  {
    id: "c2_l3_q10",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Thông hiểu",
    question: "Biển số xe gồm 2 chữ cái (từ A-Z, 26 chữ) tiếp theo là 4 chữ số (0-9). Các ký tự có thể lặp lại. Có bao nhiêu biển số khác nhau?",
    options: [
      "$6{,}760{,}000$",
      "$3{,}276{,}000$",
      "$260{,}000$",
      "$4{,}569{,}760$"
    ],
    correctAnswer: 0,
    explanation: "2 vị trí chữ cái: $26^2 = 676$ cách. 4 vị trí chữ số: $10^4 = 10000$ cách. Áp dụng nguyên lý nhân: $676 \\times 10000 = 6{,}760{,}000$."
  },
  {
    id: "c2_l3_q11",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Thông hiểu",
    question: "Có bao nhiêu số tự nhiên có 3 chữ số và là số chẵn?",
    options: [
      "$500$",
      "$450$",
      "$400$",
      "$900$"
    ],
    correctAnswer: 1,
    explanation: "Số có 3 chữ số: $\\overline{abc}$ với $a \\in \\{1,...,9\\}$, $b \\in \\{0,...,9\\}$, $c \\in \\{0,2,4,6,8\\}$. Hàng trăm: 9 cách. Hàng chục: 10 cách. Hàng đơn vị (chẵn): 5 cách. Tổng: $9 \\times 10 \\times 5 = 450$."
  },
  {
    id: "c2_l3_q12",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Thông hiểu",
    question: "Từ 1 đến 100, có bao nhiêu số chia hết cho 3 hoặc 5?",
    options: [
      "$53$",
      "$47$",
      "$39$",
      "$33$"
    ],
    correctAnswer: 1,
    explanation: "Gọi $A$ = tập chia hết cho 3, $B$ = tập chia hết cho 5. $|A| = \\lfloor 100/3 \\rfloor = 33$. $|B| = \\lfloor 100/5 \\rfloor = 20$. $|A \\cap B| = \\lfloor 100/15 \\rfloor = 6$ (chia hết cho 15). $|A \\cup B| = 33 + 20 - 6 = 47$."
  },
  {
    id: "c2_l3_q13",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Thông hiểu",
    question: "Đi từ thành phố $A$ đến thành phố $C$ qua thành phố $B$: có 3 đường từ $A$ đến $B$ và 4 đường từ $B$ đến $C$. Ngoài ra có 2 đường đi thẳng từ $A$ đến $C$ (không qua $B$). Tổng số cách đi từ $A$ đến $C$ là:",
    options: [
      "$24$",
      "$14$",
      "$9$",
      "$12$"
    ],
    correctAnswer: 1,
    explanation: "Đi qua $B$: nguyên lý nhân → $3 \\times 4 = 12$ cách. Đi thẳng: 2 cách. Hai cách đi này loại trừ nhau nên áp dụng nguyên lý cộng: $12 + 2 = 14$ cách."
  },
  {
    id: "c2_l3_q14",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Thông hiểu",
    question: "Mật khẩu gồm đúng 4 ký tự: ký tự đầu là chữ cái in hoa (A-Z), ba ký tự sau là chữ số (0-9). Có bao nhiêu mật khẩu khác nhau?",
    options: [
      "$26000$",
      "$36000$",
      "$6760$",
      "$2600$"
    ],
    correctAnswer: 0,
    explanation: "Ký tự đầu: 26 cách (A-Z). Ba ký tự sau, mỗi ký tự: 10 cách (0-9). Áp dụng nguyên lý nhân: $26 \\times 10 \\times 10 \\times 10 = 26 \\times 1000 = 26000$."
  },
  {
    id: "c2_l3_q15",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Thông hiểu",
    question: "Có bao nhiêu số điện thoại gồm 4 chữ số (0-9) mà chữ số đầu khác 0 và không có chữ số nào lặp lại?",
    options: [
      "$5040$",
      "$4536$",
      "$3024$",
      "$9000$"
    ],
    correctAnswer: 1,
    explanation: "Chữ số thứ nhất: $\\{1,...,9\\}$ → 9 cách. Chữ số thứ hai: $\\{0,...,9\\}$ trừ chữ số đã chọn → 9 cách. Chữ số thứ ba: 8 cách. Chữ số thứ tư: 7 cách. Tổng: $9 \\times 9 \\times 8 \\times 7 = 4536$."
  },

  // ---- Vận dụng (5) ----
  {
    id: "c2_l3_q16",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Vận dụng",
    question: "Trong 100 sinh viên: 50 thích Toán, 45 thích Lý, 40 thích Hóa, 20 thích Toán và Lý, 15 thích Toán và Hóa, 12 thích Lý và Hóa, 5 thích cả ba. Bao nhiêu sinh viên không thích môn nào?",
    options: [
      "$5$",
      "$7$",
      "$12$",
      "$93$"
    ],
    correctAnswer: 1,
    explanation: "$|T \\cup L \\cup H| = 50 + 45 + 40 - 20 - 15 - 12 + 5 = 93$. Số sinh viên không thích môn nào $= 100 - 93 = 7$."
  },
  {
    id: "c2_l3_q17",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Vận dụng",
    question: "Có bao nhiêu xâu nhị phân (gồm các bit 0 và 1) có độ dài 8 và chứa ít nhất một bit 1?",
    options: [
      "$128$",
      "$255$",
      "$256$",
      "$247$"
    ],
    correctAnswer: 1,
    explanation: "Phương pháp phần bù. Tổng xâu nhị phân độ dài 8: $2^8 = 256$. Xâu không có bit 1 nào (toàn bit 0): 1 xâu. Xâu có ít nhất một bit 1: $256 - 1 = 255$."
  },
  {
    id: "c2_l3_q18",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Vận dụng",
    question: "Có bao nhiêu số tự nhiên từ 1 đến 1000 không chia hết cho 2, 3 hoặc 5?",
    options: [
      "$266$",
      "$234$",
      "$300$",
      "$734$"
    ],
    correctAnswer: 0,
    explanation: "Gọi $A_2, A_3, A_5$ là tập chia hết cho 2, 3, 5. $|A_2|=500$, $|A_3|=333$, $|A_5|=200$. $|A_2 \\cap A_3|=166$, $|A_2 \\cap A_5|=100$, $|A_3 \\cap A_5|=66$. $|A_2 \\cap A_3 \\cap A_5|=33$. $|A_2 \\cup A_3 \\cup A_5| = 500+333+200-166-100-66+33 = 734$. Không chia hết cho bất kỳ: $1000 - 734 = 266$."
  },
  {
    id: "c2_l3_q19",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Vận dụng",
    question: "Có bao nhiêu số có 4 chữ số (từ 1000 đến 9999) là số lẻ và các chữ số đều khác nhau?",
    options: [
      "$2240$",
      "$2520$",
      "$1680$",
      "$2016$"
    ],
    correctAnswer: 0,
    explanation: "Chọn chữ số hàng đơn vị (lẻ): $\\{1,3,5,7,9\\}$ → 5 cách. Chữ số hàng nghìn: $\\{1,...,9\\}$ trừ chữ số đã chọn → 8 cách. Chữ số hàng trăm: $\\{0,...,9\\}$ trừ 2 chữ số đã chọn → 8 cách. Chữ số hàng chục: trừ 3 chữ số đã chọn → 7 cách. Tổng: $5 \\times 8 \\times 8 \\times 7 = 2240$."
  },
  {
    id: "c2_l3_q20",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Vận dụng",
    question: "Gieo 3 xúc xắc phân biệt. Có bao nhiêu kết quả sao cho tổng số chấm lớn hơn hoặc bằng 5?",
    options: [
      "$210$",
      "$212$",
      "$200$",
      "$216$"
    ],
    correctAnswer: 1,
    explanation: "Phương pháp phần bù. Tổng kết quả: $6^3 = 216$. Đếm tổng < 5 (tức tổng = 3 hoặc 4): Tổng = 3: $(1,1,1)$ → 1 cách. Tổng = 4: $(1,1,2)$ và hoán vị → $\\frac{3!}{2!} = 3$ cách. Tổng < 5: $1 + 3 = 4$. Tổng $\\geq 5$: $216 - 4 = 212$."
  },

  // ===========================================================================================
  // LESSON l2_4: §4 Giải tích tổ hợp & Nhị thức Newton (20 questions: q6 - q25)
  // ===========================================================================================

  // ---- Nhận biết (6) ----
  {
    id: "c2_l4_q6",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Nhận biết",
    question: "Số hoán vị (permutation) của tập có $n$ phần tử được tính bởi:",
    options: [
      "$2^n$",
      "$n!$",
      "$n^2$",
      "$\\frac{n!}{2}$"
    ],
    correctAnswer: 1,
    explanation: "Hoán vị của $n$ phần tử là cách sắp xếp tất cả $n$ phần tử theo thứ tự. Số hoán vị là $P_n = n! = n \\times (n-1) \\times \\ldots \\times 2 \\times 1$."
  },
  {
    id: "c2_l4_q7",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Nhận biết",
    question: "Chỉnh hợp chập $k$ của $n$ phần tử $A_n^k$ được tính bởi công thức:",
    options: [
      "$\\frac{n!}{k!}$",
      "$\\frac{n!}{(n-k)!}$",
      "$\\frac{n!}{k!(n-k)!}$",
      "$n^k$"
    ],
    correctAnswer: 1,
    explanation: "Chỉnh hợp chập $k$ của $n$ là cách chọn $k$ phần tử từ $n$ và sắp xếp có thứ tự: $A_n^k = \\frac{n!}{(n-k)!} = n(n-1)\\cdots(n-k+1)$."
  },
  {
    id: "c2_l4_q8",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Nhận biết",
    question: "Tổ hợp chập $k$ của $n$ phần tử $C_n^k$ (hay $\\binom{n}{k}$) được tính bởi:",
    options: [
      "$\\frac{n!}{(n-k)!}$",
      "$\\frac{n!}{k! \\cdot (n-k)!}$",
      "$\\frac{n!}{k!}$",
      "$n^k$"
    ],
    correctAnswer: 1,
    explanation: "Tổ hợp chập $k$ của $n$ là cách chọn $k$ phần tử từ $n$ không phân biệt thứ tự: $C_n^k = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}$."
  },
  {
    id: "c2_l4_q9",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Nhận biết",
    question: "Chọn 3 học sinh từ 10 học sinh để phân công làm lớp trưởng, lớp phó và thư ký. Đây là bài toán:",
    options: [
      "Tổ hợp chập 3 của 10",
      "Chỉnh hợp chập 3 của 10",
      "Hoán vị 10 phần tử",
      "Tổ hợp lặp chập 3 của 10"
    ],
    correctAnswer: 1,
    explanation: "Vì ba chức vụ khác nhau nên thứ tự chọn quan trọng. Đây là chỉnh hợp chập 3 của 10: $A_{10}^3 = 10 \\times 9 \\times 8 = 720$ cách."
  },
  {
    id: "c2_l4_q10",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Nhận biết",
    question: "Giá trị của $\\binom{n}{0}$ và $\\binom{n}{n}$ lần lượt là:",
    options: [
      "$0$ và $n$",
      "$1$ và $1$",
      "$n$ và $1$",
      "$0$ và $0$"
    ],
    correctAnswer: 1,
    explanation: "$\\binom{n}{0} = \\frac{n!}{0! \\cdot n!} = 1$ (chọn 0 phần tử, chỉ có 1 cách: không chọn gì). $\\binom{n}{n} = \\frac{n!}{n! \\cdot 0!} = 1$ (chọn tất cả, chỉ có 1 cách)."
  },
  {
    id: "c2_l4_q11",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Nhận biết",
    question: "Số cách chọn $k$ phần tử từ $n$ loại phần tử khác nhau, cho phép lặp (tổ hợp lặp), bằng:",
    options: [
      "$\\binom{n}{k}$",
      "$\\binom{n+k-1}{k}$",
      "$n^k$",
      "$\\frac{(n+k)!}{n! \\cdot k!}$"
    ],
    correctAnswer: 1,
    explanation: "Tổ hợp lặp chập $k$ của $n$ (chọn $k$ từ $n$ loại, cho phép lặp, không phân biệt thứ tự) bằng $\\overline{C}_n^k = \\binom{n+k-1}{k}$."
  },

  // ---- Thông hiểu (8) ----
  {
    id: "c2_l4_q12",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Thông hiểu",
    question: "Tính $\\binom{10}{3}$.",
    options: [
      "$720$",
      "$120$",
      "$210$",
      "$30$"
    ],
    correctAnswer: 1,
    explanation: "$\\binom{10}{3} = \\frac{10!}{3! \\cdot 7!} = \\frac{10 \\times 9 \\times 8}{3 \\times 2 \\times 1} = \\frac{720}{6} = 120$."
  },
  {
    id: "c2_l4_q13",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Thông hiểu",
    question: "Tính $A_8^3$ (chỉnh hợp chập 3 của 8).",
    options: [
      "$56$",
      "$336$",
      "$512$",
      "$40320$"
    ],
    correctAnswer: 1,
    explanation: "$A_8^3 = \\frac{8!}{(8-3)!} = \\frac{8!}{5!} = 8 \\times 7 \\times 6 = 336$."
  },
  {
    id: "c2_l4_q14",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Thông hiểu",
    question: "Từ 12 học sinh, chọn 4 em đi tham quan (không phân biệt thứ tự). Số cách chọn là:",
    options: [
      "$11880$",
      "$495$",
      "$48$",
      "$20736$"
    ],
    correctAnswer: 1,
    explanation: "Chọn 4 từ 12, không phân biệt thứ tự → tổ hợp: $\\binom{12}{4} = \\frac{12!}{4! \\cdot 8!} = \\frac{12 \\times 11 \\times 10 \\times 9}{4 \\times 3 \\times 2 \\times 1} = \\frac{11880}{24} = 495$."
  },
  {
    id: "c2_l4_q15",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Thông hiểu",
    question: "Trong khai triển $(1+x)^7$, hệ số của $x^3$ là:",
    options: [
      "$21$",
      "$35$",
      "$42$",
      "$7$"
    ],
    correctAnswer: 1,
    explanation: "Theo nhị thức Newton: $(1+x)^7 = \\sum_{k=0}^{7} \\binom{7}{k} x^k$. Hệ số của $x^3$ là $\\binom{7}{3} = \\frac{7!}{3! \\cdot 4!} = \\frac{7 \\times 6 \\times 5}{6} = 35$."
  },
  {
    id: "c2_l4_q16",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Thông hiểu",
    question: "Tính tổng $\\sum_{k=0}^{6} \\binom{6}{k}$.",
    options: [
      "$36$",
      "$64$",
      "$128$",
      "$720$"
    ],
    correctAnswer: 1,
    explanation: "Từ nhị thức Newton với $x = 1$: $(1+1)^n = \\sum_{k=0}^{n} \\binom{n}{k}$. Với $n = 6$: $\\sum_{k=0}^{6} \\binom{6}{k} = 2^6 = 64$."
  },
  {
    id: "c2_l4_q17",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Thông hiểu",
    question: "Tính $\\binom{20}{17}$.",
    options: [
      "$1140$",
      "$6840$",
      "$20$",
      "$680$"
    ],
    correctAnswer: 0,
    explanation: "Sử dụng tính chất đối xứng $\\binom{n}{k} = \\binom{n}{n-k}$: $\\binom{20}{17} = \\binom{20}{3} = \\frac{20 \\times 19 \\times 18}{3!} = \\frac{6840}{6} = 1140$."
  },
  {
    id: "c2_l4_q18",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Thông hiểu",
    question: "Có bao nhiêu cách sắp xếp các chữ cái của từ \"BANANA\"?",
    options: [
      "$720$",
      "$60$",
      "$120$",
      "$360$"
    ],
    correctAnswer: 1,
    explanation: "Từ \"BANANA\" có 6 chữ cái: B(1 lần), A(3 lần), N(2 lần). Số hoán vị có lặp: $\\frac{6!}{1! \\cdot 3! \\cdot 2!} = \\frac{720}{1 \\times 6 \\times 2} = \\frac{720}{12} = 60$."
  },
  {
    id: "c2_l4_q19",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Thông hiểu",
    question: "Có bao nhiêu cách xếp 8 người ngồi quanh một bàn tròn (hai cách xếp coi là giống nhau nếu chỉ khác nhau bởi phép quay)?",
    options: [
      "$40320$",
      "$5040$",
      "$720$",
      "$362880$"
    ],
    correctAnswer: 1,
    explanation: "Hoán vị vòng tròn của $n$ phần tử là $(n-1)!$. Với 8 người: $(8-1)! = 7! = 5040$."
  },

  // ---- Vận dụng (6) ----
  {
    id: "c2_l4_q20",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Vận dụng",
    question: "Chia 10 viên kẹo giống nhau cho 3 trẻ em sao cho mỗi trẻ nhận ít nhất 1 viên. Có bao nhiêu cách chia?",
    options: [
      "$36$",
      "$66$",
      "$84$",
      "$28$"
    ],
    correctAnswer: 0,
    explanation: "Đặt $x_1 + x_2 + x_3 = 10$ với $x_i \\geq 1$. Đổi biến $y_i = x_i - 1$ ($y_i \\geq 0$): $y_1 + y_2 + y_3 = 7$. Số nghiệm không âm: $\\binom{7+3-1}{3-1} = \\binom{9}{2} = \\frac{9 \\times 8}{2} = 36$."
  },
  {
    id: "c2_l4_q21",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Vận dụng",
    question: "Từ một nhóm 7 nam và 6 nữ, chọn 5 người sao cho có ít nhất 2 nữ. Có bao nhiêu cách chọn?",
    options: [
      "$1056$",
      "$1287$",
      "$756$",
      "$966$"
    ],
    correctAnswer: 0,
    explanation: "Phương pháp phần bù. Tổng: $\\binom{13}{5} = 1287$. Trường hợp 0 nữ: $\\binom{7}{5} = 21$. Trường hợp 1 nữ: $\\binom{6}{1} \\cdot \\binom{7}{4} = 6 \\times 35 = 210$. Ít nhất 2 nữ: $1287 - 21 - 210 = 1056$."
  },
  {
    id: "c2_l4_q22",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Vận dụng",
    question: "Trong khai triển $(2x - y)^7$, hệ số của số hạng chứa $x^4 y^3$ là:",
    options: [
      "$-560$",
      "$560$",
      "$-280$",
      "$280$"
    ],
    correctAnswer: 0,
    explanation: "Số hạng tổng quát: $\\binom{7}{k}(2x)^{7-k}(-y)^k$. Với $x^4 y^3$: $7-k=4 \\Rightarrow k=3$. Hệ số: $\\binom{7}{3} \\cdot 2^4 \\cdot (-1)^3 = 35 \\times 16 \\times (-1) = -560$."
  },
  {
    id: "c2_l4_q23",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Vận dụng",
    question: "Có bao nhiêu chuỗi nhị phân (gồm 0 và 1) có độ dài 10 và chứa đúng 4 bit 1?",
    options: [
      "$120$",
      "$210$",
      "$252$",
      "$5040$"
    ],
    correctAnswer: 1,
    explanation: "Cần chọn 4 vị trí trong 10 vị trí để đặt bit 1 (các vị trí còn lại là bit 0). Số cách: $\\binom{10}{4} = \\frac{10!}{4! \\cdot 6!} = \\frac{10 \\times 9 \\times 8 \\times 7}{24} = \\frac{5040}{24} = 210$."
  },
  {
    id: "c2_l4_q24",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Vận dụng",
    question: "Tìm số nghiệm nguyên không âm của phương trình $x_1 + x_2 + x_3 + x_4 = 12$.",
    options: [
      "$220$",
      "$455$",
      "$364$",
      "$495$"
    ],
    correctAnswer: 1,
    explanation: "Số nghiệm nguyên không âm của $x_1 + x_2 + \\ldots + x_k = n$ là $\\binom{n+k-1}{k-1}$. Với $n=12, k=4$: $\\binom{12+4-1}{4-1} = \\binom{15}{3} = \\frac{15 \\times 14 \\times 13}{6} = \\frac{2730}{6} = 455$."
  },
  {
    id: "c2_l4_q25",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Vận dụng",
    question: "Từ một nhóm 6 nam và 4 nữ, chọn một ủy ban gồm 3 người có cả nam và nữ. Số cách chọn là:",
    options: [
      "$96$",
      "$120$",
      "$100$",
      "$80$"
    ],
    correctAnswer: 0,
    explanation: "Phương pháp phần bù. Tổng số cách chọn 3 người: $\\binom{10}{3} = 120$. Chọn toàn nam: $\\binom{6}{3} = 20$. Chọn toàn nữ: $\\binom{4}{3} = 4$. Có cả nam và nữ: $120 - 20 - 4 = 96$."
  },

  // ===========================================================================================
  // LESSON l2_5: §5 Nguyên lý Chuồng bồ câu (12 questions: q4 - q15)
  // ===========================================================================================

  // ---- Nhận biết (4) ----
  {
    id: "c2_l5_q4",
    chapterId: "c2",
    lessonId: "l2_5",
    lessonTitle: "§5 Nguyên lý Chuồng bồ câu",
    difficulty: "Nhận biết",
    question: "Nguyên lý chuồng bồ câu (dạng cơ bản) phát biểu rằng: Nếu $n+1$ đối tượng được xếp vào $n$ ngăn thì:",
    options: [
      "Mỗi ngăn chứa đúng 1 đối tượng",
      "Tồn tại ít nhất một ngăn chứa ít nhất 2 đối tượng",
      "Tồn tại một ngăn rỗng",
      "Mỗi ngăn chứa nhiều nhất 1 đối tượng"
    ],
    correctAnswer: 1,
    explanation: "Nguyên lý chuồng bồ câu (Pigeonhole Principle): Nếu $n+1$ con chim bồ câu bay vào $n$ chuồng, thì có ít nhất một chuồng chứa ít nhất 2 con chim."
  },
  {
    id: "c2_l5_q5",
    chapterId: "c2",
    lessonId: "l2_5",
    lessonTitle: "§5 Nguyên lý Chuồng bồ câu",
    difficulty: "Nhận biết",
    question: "Trong 13 người bất kỳ, có nhất thiết phải có ít nhất 2 người sinh cùng tháng không?",
    options: [
      "Không, vì 13 < 24",
      "Có, vì $13 > 12$ (12 tháng)",
      "Không, vì mỗi người có thể sinh tháng khác nhau",
      "Tùy thuộc vào năm sinh"
    ],
    correctAnswer: 1,
    explanation: "Có 12 tháng (12 'ngăn') và 13 người (13 'đối tượng'). Vì $13 > 12$, theo nguyên lý chuồng bồ câu, tồn tại ít nhất 2 người sinh cùng tháng."
  },
  {
    id: "c2_l5_q6",
    chapterId: "c2",
    lessonId: "l2_5",
    lessonTitle: "§5 Nguyên lý Chuồng bồ câu",
    difficulty: "Nhận biết",
    question: "Nguyên lý chuồng bồ câu dạng tổng quát: Nếu $n$ đối tượng xếp vào $k$ ngăn, thì tồn tại ít nhất một ngăn chứa ít nhất:",
    options: [
      "$\\frac{n}{k}$ đối tượng",
      "$\\lceil \\frac{n}{k} \\rceil$ đối tượng",
      "$n - k$ đối tượng",
      "$k$ đối tượng"
    ],
    correctAnswer: 1,
    explanation: "Nguyên lý tổng quát: Nếu $n$ đối tượng xếp vào $k$ ngăn thì tồn tại ít nhất một ngăn chứa ít nhất $\\lceil n/k \\rceil$ đối tượng (hàm trần)."
  },
  {
    id: "c2_l5_q7",
    chapterId: "c2",
    lessonId: "l2_5",
    lessonTitle: "§5 Nguyên lý Chuồng bồ câu",
    difficulty: "Nhận biết",
    question: "Bài toán nào sau đây cần dùng nguyên lý chuồng bồ câu để giải?",
    options: [
      "Đếm số cách chọn 3 quả bóng từ 10 quả",
      "Chứng minh trong 27 từ tiếng Anh luôn có 2 từ bắt đầu bằng cùng chữ cái",
      "Tính số hoán vị của 5 phần tử",
      "Khai triển $(a+b)^{10}$"
    ],
    correctAnswer: 1,
    explanation: "Bài toán chứng minh sự tồn tại '2 từ bắt đầu cùng chữ cái' dùng nguyên lý chuồng bồ câu: 26 chữ cái (ngăn), 27 từ (đối tượng), $27 > 26$ nên tồn tại 2 từ cùng chữ cái đầu."
  },

  // ---- Thông hiểu (5) ----
  {
    id: "c2_l5_q8",
    chapterId: "c2",
    lessonId: "l2_5",
    lessonTitle: "§5 Nguyên lý Chuồng bồ câu",
    difficulty: "Thông hiểu",
    question: "Cần chọn ít nhất bao nhiêu số từ tập $\\{1, 2, ..., 20\\}$ để chắc chắn có 2 số liên tiếp (hiệu bằng 1)?",
    options: [
      "$10$",
      "$11$",
      "$12$",
      "$3$"
    ],
    correctAnswer: 1,
    explanation: "Chia thành 10 cặp (ngăn): $\\{1,2\\}, \\{3,4\\}, \\{5,6\\}, ..., \\{19,20\\}$. Mỗi cặp chứa 2 số liên tiếp. Chọn tối đa 1 số từ mỗi cặp → 10 số không liên tiếp. Chọn 11 số → theo nguyên lý chuồng bồ câu, phải có 2 số cùng cặp, tức liên tiếp."
  },
  {
    id: "c2_l5_q9",
    chapterId: "c2",
    lessonId: "l2_5",
    lessonTitle: "§5 Nguyên lý Chuồng bồ câu",
    difficulty: "Thông hiểu",
    question: "Cần ít nhất bao nhiêu người để chắc chắn có ít nhất 3 người sinh cùng ngày trong tuần (thứ Hai đến Chủ nhật)?",
    options: [
      "$14$",
      "$15$",
      "$8$",
      "$21$"
    ],
    correctAnswer: 1,
    explanation: "Có 7 ngày (ngăn). Muốn chắc chắn có 3 người cùng ngày, tối đa mỗi ngày có 2 người → $7 \\times 2 = 14$ người mà chưa có 3 cùng ngày. Người thứ 15 sẽ rơi vào một ngày đã có 2 người → $\\lceil 15/7 \\rceil = 3$."
  },
  {
    id: "c2_l5_q10",
    chapterId: "c2",
    lessonId: "l2_5",
    lessonTitle: "§5 Nguyên lý Chuồng bồ câu",
    difficulty: "Thông hiểu",
    question: "Cần chọn ít nhất bao nhiêu số nguyên bất kỳ để chắc chắn có 2 số cùng số dư khi chia cho 6?",
    options: [
      "$6$",
      "$7$",
      "$12$",
      "$13$"
    ],
    correctAnswer: 1,
    explanation: "Khi chia cho 6, có 6 số dư có thể: $0, 1, 2, 3, 4, 5$ (6 ngăn). Chọn 7 số (7 đối tượng), theo nguyên lý chuồng bồ câu ($7 > 6$), tồn tại 2 số có cùng số dư."
  },
  {
    id: "c2_l5_q11",
    chapterId: "c2",
    lessonId: "l2_5",
    lessonTitle: "§5 Nguyên lý Chuồng bồ câu",
    difficulty: "Thông hiểu",
    question: "Đặt 5 điểm bất kỳ bên trong hình vuông có cạnh bằng 2. Ít nhất 2 điểm có khoảng cách không vượt quá bao nhiêu?",
    options: [
      "$1$",
      "$\\sqrt{2}$",
      "$2$",
      "$\\sqrt{3}$"
    ],
    correctAnswer: 1,
    explanation: "Chia hình vuông cạnh 2 thành 4 ô vuông cạnh 1 (4 ngăn). Đặt 5 điểm (5 > 4), theo nguyên lý chuồng bồ câu, tồn tại 2 điểm cùng 1 ô vuông. Đường chéo ô vuông cạnh 1 là $\\sqrt{1^2 + 1^2} = \\sqrt{2}$, nên khoảng cách 2 điểm đó $\\leq \\sqrt{2}$."
  },
  {
    id: "c2_l5_q12",
    chapterId: "c2",
    lessonId: "l2_5",
    lessonTitle: "§5 Nguyên lý Chuồng bồ câu",
    difficulty: "Thông hiểu",
    question: "Một hộp chứa bi gồm 5 màu: đỏ, xanh, vàng, trắng, đen (số lượng mỗi màu rất lớn). Cần lấy ít nhất bao nhiêu viên bi để chắc chắn có 4 viên cùng màu?",
    options: [
      "$15$",
      "$16$",
      "$20$",
      "$21$"
    ],
    correctAnswer: 1,
    explanation: "Có 5 màu (ngăn). Muốn chắc chắn có 4 viên cùng màu: trường hợp xấu nhất mỗi màu có 3 viên → $5 \\times 3 = 15$ viên mà chưa có 4 cùng màu. Viên thứ 16 chắc chắn tạo nhóm 4 cùng màu. Áp dụng nguyên lý tổng quát: $\\lceil 16/5 \\rceil = 4$."
  },

  // ---- Vận dụng (3) ----
  {
    id: "c2_l5_q13",
    chapterId: "c2",
    lessonId: "l2_5",
    lessonTitle: "§5 Nguyên lý Chuồng bồ câu",
    difficulty: "Vận dụng",
    question: "Cần chọn ít nhất bao nhiêu số từ tập $\\{1, 2, ..., 18\\}$ để chắc chắn tồn tại 2 số có tổng bằng 19?",
    options: [
      "$9$",
      "$10$",
      "$18$",
      "$11$"
    ],
    correctAnswer: 1,
    explanation: "Xét 9 cặp có tổng 19: $\\{1,18\\}, \\{2,17\\}, \\{3,16\\}, ..., \\{9,10\\}$. Mỗi cặp là một 'ngăn'. Chọn tối đa 1 số từ mỗi cặp → 9 số mà không có 2 số tổng bằng 19. Chọn số thứ 10 → rơi vào cặp đã có, tổng bằng 19."
  },
  {
    id: "c2_l5_q14",
    chapterId: "c2",
    lessonId: "l2_5",
    lessonTitle: "§5 Nguyên lý Chuồng bồ câu",
    difficulty: "Vận dụng",
    question: "Cần ít nhất bao nhiêu từ tiếng Anh (mỗi từ bắt đầu bằng một chữ cái A-Z) để chắc chắn có 3 từ bắt đầu bằng cùng một chữ cái?",
    options: [
      "$27$",
      "$53$",
      "$79$",
      "$52$"
    ],
    correctAnswer: 1,
    explanation: "Có 26 chữ cái (ngăn). Muốn có 3 từ cùng chữ cái đầu: trường hợp xấu nhất mỗi chữ cái có 2 từ → $26 \\times 2 = 52$ từ mà chưa có 3 cùng chữ cái đầu. Từ thứ 53 chắc chắn là từ thứ 3 của một chữ cái nào đó."
  },
  {
    id: "c2_l5_q15",
    chapterId: "c2",
    lessonId: "l2_5",
    lessonTitle: "§5 Nguyên lý Chuồng bồ câu",
    difficulty: "Vận dụng",
    question: "Có 100 sinh viên đăng ký vào 3 câu lạc bộ, mỗi sinh viên đăng ký đúng 1 câu lạc bộ. Theo nguyên lý chuồng bồ câu, ít nhất một câu lạc bộ có số thành viên tối thiểu là:",
    options: [
      "$33$",
      "$34$",
      "$50$",
      "$100$"
    ],
    correctAnswer: 1,
    explanation: "Áp dụng nguyên lý chuồng bồ câu tổng quát: 100 sinh viên (đối tượng) xếp vào 3 CLB (ngăn). Ít nhất một CLB có $\\lceil 100/3 \\rceil = \\lceil 33.33... \\rceil = 34$ thành viên."
  }
];
