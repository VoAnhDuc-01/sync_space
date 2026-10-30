/**
 * Ngân hàng câu hỏi trắc nghiệm BỔ SUNG Chương 4: ĐẠI SỐ BOOL VÀ HÀM BOOL
 * Bổ sung 84 câu hỏi chất lượng cao để tổng số câu Chương 4 đạt >= 100 câu.
 */

const QUIZ_DATA_CH4_EXTRA = [
  // =========================================================================
  // §1 ĐẠI SỐ BOOL & ĐỊNH LÝ STONE (18 câu: c4_l1_q3 -> c4_l1_q20)
  // =========================================================================
  {
    id: "c4_l1_q3",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Nhận biết",
    question: "Trong đại số Bool $(\\mathcal{B}, \\lor, \\land, \\bar{\\phantom{x}}, 0, 1)$, phần tử $0$ và $1$ được gọi là:",
    options: [
      "Phần tử trung hòa đối với phép toán $\\lor$ và $\\land$ tương ứng",
      "Phần tử hấp thụ đối với cả hai phép toán",
      "Phần tử đối ngẫu của mọi phần tử",
      "Phần tử bù của nhau và không đóng vai trò gì khác"
    ],
    correctAnswer: 0,
    explanation: "Theo tiên đề đại số Bool, $0$ là phần tử trung hòa của phép $\\lor$ ($x \\lor 0 = x$) và $1$ là phần tử trung hòa của phép $\\land$ ($x \\land 1 = x$)."
  },
  {
    id: "c4_l1_q4",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Nhận biết",
    question: "Số lượng phần tử của một đại số Bool hữu hạn KHÔNG THỂ bằng giá trị nào sau đây?",
    options: [
      "$4$",
      "$8$",
      "$12$",
      "$16$"
    ],
    correctAnswer: 2,
    explanation: "Theo Định lý Stone, số phần tử của đại số Bool hữu hạn luôn là $2^k$ với $k \\in \\mathbb{N}$. Số 12 không phải là lũy thừa của 2 nên không thể là số phần tử của một đại số Bool hữu hạn."
  },
  {
    id: "c4_l1_q5",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Thông hiểu",
    question: "Cho đại số Bool hữu hạn $\\mathcal{B}$ có 16 phần tử. Số lượng nguyên tử (atom) của $\\mathcal{B}$ là:",
    options: [
      "$2$",
      "$4$",
      "$8$",
      "$15$"
    ],
    correctAnswer: 1,
    explanation: "Đại số Bool có $16 = 2^4$ phần tử đẳng cấu với $\\mathcal{P}(E)$ của tập $E$ có $4$ phần tử. Các nguyên tử là các tập con 1 phần tử của $E$, nên có đúng $4$ nguyên tử."
  },
  {
    id: "c4_l1_q6",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Thông hiểu",
    question: "Nguyên tử (atom) trong một đại số Bool hữu hạn $\\mathcal{B}$ được định nghĩa là:",
    options: [
      "Phần tử lớn nhất của $\\mathcal{B}$",
      "Phần tử trội trực tiếp của phần tử bé nhất $0$",
      "Phần tử bằng phần bù của chính nó",
      "Phần tử không so sánh được với bất kỳ phần tử nào khác"
    ],
    correctAnswer: 1,
    explanation: "Định nghĩa: Phần tử $a \\in \\mathcal{B}$ được gọi là nguyên tử nếu $a > 0$ và không tồn tại phần tử $x$ nào thỏa mãn $0 < x < a$ (tức $a$ là trội trực tiếp của $0$)."
  },
  {
    id: "c4_l1_q7",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Thông hiểu",
    question: "Trong đại số Bool, quan hệ thứ tự $\\le$ được xác định bởi điều kiện nào sau đây?",
    options: [
      "$x \\le y \\iff x \\land y = x$",
      "$x \\le y \\iff x \\lor y = x$",
      "$x \\le y \\iff x \\land \\bar{y} = 1$",
      "$x \\le y \\iff \\bar{x} \\lor y = 0$"
    ],
    correctAnswer: 0,
    explanation: "Trong đại số Bool, $x \\le y \\iff x \\land y = x \\iff x \\lor y = y \\iff x \\land \\bar{y} = 0 \\iff \\bar{x} \\lor y = 1$."
  },
  {
    id: "c4_l1_q8",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Thông hiểu",
    question: "Đẳng thức đối ngẫu của đẳng thức $x \\lor (x \\land y) = x$ (luật hấp thụ) trong đại số Bool là:",
    options: [
      "$x \\land (x \\lor y) = x$",
      "$x \\lor (x \\lor y) = x$",
      "$\\bar{x} \\land (\\bar{x} \\lor \\bar{y}) = \\bar{x}$",
      "$x \\land (\\bar{x} \\lor y) = y$"
    ],
    correctAnswer: 0,
    explanation: "Theo nguyên lý đối ngẫu, hoán đổi $\\lor \\leftrightarrow \\land$ và $0 \\leftrightarrow 1$. Đẳng thức đối ngẫu của $x \\lor (x \\land y) = x$ là $x \\land (x \\lor y) = x$."
  },
  {
    id: "c4_l1_q9",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Vận dụng",
    question: "Xét dàn ước số $U_n$. Dàn nào sau đây là một đại số Bool?",
    options: [
      "$U_{18}$",
      "$U_{20}$",
      "$U_{42}$",
      "$U_{45}$"
    ],
    correctAnswer: 2,
    explanation: "Dàn ước số $U_n$ là đại số Bool khi và chỉ khi $n$ square-free (không chứa thừa số chính phương). Phân tích: $18 = 2 \\cdot 3^2$, $20 = 2^2 \\cdot 5$, $45 = 3^2 \\cdot 5$ đều có thừa số bình phương. Riêng $42 = 2 \\cdot 3 \\cdot 7$ có các số mũ đều bằng 1, do đó $U_{42}$ là đại số Bool với $2^3 = 8$ phần tử."
  },
  {
    id: "c4_l1_q10",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Vận dụng",
    question: "Trong đại số Bool $U_{42}$, phần bù của phần tử $6$ là:",
    options: [
      "$7$",
      "$14$",
      "$21$",
      "$36$"
    ],
    correctAnswer: 0,
    explanation: "Trong dàn $U_n$ là đại số Bool, phần bù của $a$ là $\\bar{a} = n / a$. Do đó phần bù của $6$ trong $U_{42}$ là $42 / 6 = 7$."
  },
  {
    id: "c4_l1_q11",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Thông hiểu",
    question: "Trong đại số Bool $U_{70} = U_{2 \\cdot 5 \\cdot 7}$, tập hợp tất cả các nguyên tử là:",
    options: [
      "$\\{1, 2, 5\\}$",
      "$\\{2, 5, 7\\}$",
      "$\\{10, 14, 35\\}$",
      "$\\{70\\}$"
    ],
    correctAnswer: 1,
    explanation: "Trong $U_n$, phần tử bé nhất là $1$. Các trội trực tiếp của $1$ chính là các ước số nguyên tố của $n$. Với $n = 70 = 2 \\cdot 5 \\cdot 7$, các nguyên tử là $\\{2, 5, 7\\}$."
  },
  {
    id: "c4_l1_q12",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Nhận biết",
    question: "Theo định lý Stone, hai đại số Bool hữu hạn bất kỳ có cùng số phần tử thì:",
    options: [
      "Đẳng cấu với nhau",
      "Bằng nhau từng phần tử",
      "Có cùng phần tử bù",
      "Đều có số phần tử là số lẻ"
    ],
    correctAnswer: 0,
    explanation: "Hệ quả định lý Stone: Mọi đại số Bool $2^k$ phần tử đều đẳng cấu với $\\mathcal{P}(E)$ với $|E| = k$. Do đó hai đại số Bool hữu hạn cùng lực lượng thì đẳng cấu với nhau."
  },
  {
    id: "c4_l1_q13",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Thông hiểu",
    question: "Trong đại số Bool, tính chất nào sau đây khẳng định tính duy nhất của phần tử bù?",
    options: [
      "Nếu $x \\lor y = 1$ và $x \\land y = 0$ thì $y = \\bar{x}$",
      "$x \\lor \\bar{x} = 1$",
      "$\\bar{\\bar{x}} = x$",
      "$\\overline{x \\lor y} = \\bar{x} \\land \\bar{y}$"
    ],
    correctAnswer: 0,
    explanation: "Trong đại số Bool (dàn bù phân bố), phần tử bù của mỗi phần tử là duy nhất: nếu $y$ thỏa mãn $x \\lor y = 1$ và $x \\land y = 0$ thì $y = \\bar{x}$."
  },
  {
    id: "c4_l1_q14",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Thông hiểu",
    question: "Rút gọn biểu thức $x \\lor (\\bar{x} \\land y)$ trong đại số Bool, ta được:",
    options: [
      "$x \\lor y$",
      "$x \\land y$",
      "$\\bar{x} \\lor y$",
      "$x$"
    ],
    correctAnswer: 0,
    explanation: "Áp dụng luật phân bố: $x \\lor (\\bar{x} \\land y) = (x \\lor \\bar{x}) \\land (x \\lor y) = 1 \\land (x \\lor y) = x \\lor y$."
  },
  {
    id: "c4_l1_q15",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Vận dụng",
    question: "Biểu thức đối ngẫu của $x \\land (\\bar{x} \\lor y) = x \\land y$ là:",
    options: [
      "$x \\lor (\\bar{x} \\land y) = x \\lor y$",
      "$\\bar{x} \\lor (x \\land \\bar{y}) = \\bar{x} \\lor \\bar{y}$",
      "$x \\land (x \\lor y) = x$",
      "$x \\lor (\\bar{x} \\lor y) = x \\lor y$"
    ],
    correctAnswer: 0,
    explanation: "Thay $\\land \\leftrightarrow \\lor$: biểu thức ban đầu $x \\land (\\bar{x} \\lor y) = x \\land y$ trở thành $x \\lor (\\bar{x} \\land y) = x \\lor y$."
  },
  {
    id: "c4_l1_q16",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Vận dụng",
    question: "Cho đại số Bool $\\mathcal{B}$ có 8 phần tử với các nguyên tử là $a, b, c$. Biểu diễn phần tử $1$ dưới dạng tổng (sup) của các nguyên tử là:",
    options: [
      "$a \\land b \\land c$",
      "$a \\lor b \\lor c$",
      "$\\bar{a} \\lor \\bar{b} \\lor \\bar{c}$",
      "$a \\lor b$"
    ],
    correctAnswer: 1,
    explanation: "Trong đại số Bool hữu hạn, phần tử lớn nhất $1$ bằng sup của tất cả các nguyên tử: $1 = a \\lor b \\lor c$."
  },
  {
    id: "c4_l1_q17",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Thông hiểu",
    question: "Trong đại số Bool $\\mathcal{B}$, nếu $a$ là một nguyên tử và $x \\in \\mathcal{B}$ là phần tử bất kỳ thì $a \\land x$ chỉ có thể nhận giá trị:",
    options: [
      "$a$ hoặc $0$",
      "$x$ hoặc $0$",
      "$a$ hoặc $1$",
      "$x$ hoặc $1$"
    ],
    correctAnswer: 0,
    explanation: "Vì $a$ là nguyên tử nên các phần tử $\\le a$ chỉ có thể là $0$ hoặc $a$. Do $a \\land x \\le a$, nên $a \\land x$ chỉ có thể bằng $0$ (khi $a \\not\\le x$) hoặc $a$ (khi $a \\le x$)."
  },
  {
    id: "c4_l1_q18",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Vận dụng",
    question: "Số lượng quan hệ thứ tự bộ phận (Poset) mà đồng thời là đại số Bool trên tập hợp có 4 phần tử là:",
    options: [
      "$1$",
      "$2$",
      "$4$",
      "$6$"
    ],
    correctAnswer: 0,
    explanation: "Mọi đại số Bool 4 phần tử đều đẳng cấu với $(\\mathcal{P}(\\{a, b\\}), \\subseteq)$. Cấu trúc Hasse của nó có 1 phần tử nhỏ nhất (0), 2 nguyên tử, và 1 phần tử lớn nhất (1). Sai khác đẳng cấu thì chỉ có duy nhất 1 cấu trúc đại số Bool."
  },
  {
    id: "c4_l1_q19",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Vận dụng",
    question: "Rút gọn biểu thức Bool $(x \\lor y) \\land (x \\lor \\bar{y})$ ta được:",
    options: [
      "$x$",
      "$y$",
      "$x \\lor y$",
      "$0$"
    ],
    correctAnswer: 0,
    explanation: "Áp dụng luật phân bố ngược: $(x \\lor y) \\land (x \\lor \\bar{y}) = x \\lor (y \\land \\bar{y}) = x \\lor 0 = x$."
  },
  {
    id: "c4_l1_q20",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Vận dụng",
    question: "Rút gọn biểu thức Bool $(x \\land y) \\lor (x \\land \\bar{y})$ ta được:",
    options: [
      "$x$",
      "$y$",
      "$\\bar{x}$",
      "$1$"
    ],
    correctAnswer: 0,
    explanation: "Áp dụng luật phân bố: $(x \\land y) \\lor (x \\land \\bar{y}) = x \\land (y \\lor \\bar{y}) = x \\land 1 = x$."
  },

  // =========================================================================
  // §2 HÀM BOOL & DẠNG CHÍNH TẮC (16 câu: c4_l2_q5 -> c4_l2_q20)
  // =========================================================================
  {
    id: "c4_l2_q5",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Nhận biết",
    question: "Số lượng hàm Bool 2 biến khác nhau là:",
    options: [
      "$4$",
      "$8$",
      "$16$",
      "$256$"
    ],
    correctAnswer: 2,
    explanation: "Số lượng hàm Bool $n$ biến là $2^{2^n}$. Với $n = 2$, có $2^{2^2} = 2^4 = 16$ hàm."
  },
  {
    id: "c4_l2_q6",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Nhận biết",
    question: "Số lượng từ đơn (literal) của một hàm Bool gồm $n$ biến là:",
    options: [
      "$n$",
      "$2n$",
      "$2^n$",
      "$n^2$"
    ],
    correctAnswer: 1,
    explanation: "Với mỗi biến $x_i$, có 2 từ đơn tương ứng là $x_i$ và $\\bar{x}_i$. Do đó với $n$ biến có tất cả $2n$ từ đơn."
  },
  {
    id: "c4_l2_q7",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Thông hiểu",
    question: "Từ tối đại (maxterm) $M$ của hàm Bool 3 biến $x, y, z$ nhận giá trị $0$ tại bộ $(x=0, y=1, z=0)$ có biểu thức là:",
    options: [
      "$\\bar{x} \\lor y \\lor \\bar{z}$",
      "$x \\lor \\bar{y} \\lor z$",
      "$\\bar{x} y \\bar{z}$",
      "$x \\bar{y} z$"
    ],
    correctAnswer: 1,
    explanation: "Quy tắc lập maxterm: Biến có giá trị $0$ giữ nguyên, biến có giá trị $1$ lấy phủ định, rồi nối bằng phép $\\lor$. Tại $(0, 1, 0)$, maxterm là $x \\lor \\bar{y} \\lor z$ (biểu thức này bằng $0$ khi $x=0, y=1, z=0$)."
  },
  {
    id: "c4_l2_q8",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Thông hiểu",
    question: "Mối liên hệ giữa minterm $m_i$ và maxterm $M_i$ cùng chỉ số $i$ là:",
    options: [
      "$M_i = m_i$",
      "$M_i = \\overline{m_i}$",
      "$M_i \\land m_i = 1$",
      "$M_i \\lor m_i = 0$"
    ],
    correctAnswer: 1,
    explanation: "Theo định luật De Morgan, phủ định của một minterm chính là maxterm cùng chỉ số: $\\overline{m_i} = M_i$."
  },
  {
    id: "c4_l2_q9",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Thông hiểu",
    question: "Dạng nối liền chính tắc (CNF / POS) của hàm Bool là:",
    options: [
      "Tổng (OR) của các từ tối tiểu",
      "Tích (AND) của các từ tối đại tại các điểm hàm nhận giá trị 0",
      "Tích (AND) của các từ tối đại tại các điểm hàm nhận giá trị 1",
      "Tổng (OR) của các từ tối đại"
    ],
    correctAnswer: 1,
    explanation: "Dạng nối liền chính tắc (Conjunctive Normal Form - CNF) là tích (AND) của các từ tối đại (maxterm) ứng với các dòng mà hàm nhận giá trị $0$ trong bảng chân trị."
  },
  {
    id: "c4_l2_q10",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Vận dụng",
    question: "Cho hàm Bool 3 biến có dạng DNF: $f = \\sum m(1, 3, 5, 7)$. Biểu thức rút gọn tối tiểu của $f$ là:",
    options: [
      "$x$",
      "$y$",
      "$z$",
      "$\\bar{z}$"
    ],
    correctAnswer: 2,
    explanation: "Các minterm 1, 3, 5, 7 có biểu diễn nhị phân $(x, y, z)$ là $001, 011, 101, 111$. Ta thấy biến $z$ luôn bằng $1$ trong cả 4 minterm, trong khi $x, y$ nhận đủ mọi tổ hợp $(00, 01, 10, 11)$. Do đó $x, y$ bị triệt tiêu hoàn toàn và $f = z$."
  },
  {
    id: "c4_l2_q11",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Vận dụng",
    question: "Cho hàm $f(x, y, z) = \\sum m(0, 2, 4, 6)$. Dạng nối liền chính tắc (CNF) của $f$ là:",
    options: [
      "$\\prod M(1, 3, 5, 7)$",
      "$\\prod M(0, 2, 4, 6)$",
      "$\\sum m(1, 3, 5, 7)$",
      "$\\prod M(0, 1, 2, 3)$"
    ],
    correctAnswer: 0,
    explanation: "Hàm nhận giá trị $1$ tại $\\{0, 2, 4, 6\\}$ nên nhận giá trị $0$ tại tập chỉ số bù $\\{1, 3, 5, 7\\}$. Dạng CNF là tích các maxterm tương ứng: $f = \\prod M(1, 3, 5, 7)$."
  },
  {
    id: "c4_l2_q12",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Thông hiểu",
    question: "Một hàm Bool $f(x_1, \\dots, x_n)$ được gọi là đồng nhất $0$ ($f \\equiv 0$) khi và chỉ khi dạng DNF của nó:",
    options: [
      "Chứa tất cả $2^n$ minterm",
      "Không chứa minterm nào",
      "Chứa đúng 1 minterm",
      "Chứa đúng $n$ minterm"
    ],
    correctAnswer: 1,
    explanation: "Dạng DNF biểu diễn tổng các minterm tại đó hàm nhận giá trị 1. Nếu hàm đồng nhất $0$ thì không có minterm nào thỏa mãn, tổng rỗng bằng $0$."
  },
  {
    id: "c4_l2_q13",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Thông hiểu",
    question: "Một hàm Bool $f(x_1, \\dots, x_n)$ được gọi là đồng nhất $1$ ($f \\equiv 1$) khi và chỉ khi dạng DNF của nó:",
    options: [
      "Chứa đúng $n$ minterm",
      "Chứa tất cả $2^n$ minterm",
      "Không chứa minterm nào",
      "Chứa $2^{n-1}$ minterm"
    ],
    correctAnswer: 1,
    explanation: "Hàm đồng nhất $1$ nhận giá trị $1$ tại mọi bộ đầu vào, do đó dạng DNF chứa đầy đủ toàn bộ $2^n$ minterm."
  },
  {
    id: "c4_l2_q14",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Vận dụng",
    question: "Số lượng minterm trong dạng DNF chính tắc của hàm $f(x, y, z) = x \\lor y$ là:",
    options: [
      "$2$",
      "$4$",
      "$6$",
      "$8$"
    ],
    correctAnswer: 2,
    explanation: "Hàm $f = x \\lor y$ chỉ bằng $0$ khi $x = 0$ và $y = 0$, tức tại 2 bộ: $(0, 0, 0)$ và $(0, 0, 1)$ (ứng với $m_0, m_1$). Vậy hàm bằng $1$ tại $8 - 2 = 6$ bộ còn lại, tức dạng DNF có đúng 6 minterm."
  },
  {
    id: "c4_l2_q15",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Vận dụng",
    question: "Dạng DNF chính tắc của hàm $f(x, y) = x \\bar{y} \\lor y$ là:",
    options: [
      "$xy \\lor x\\bar{y} \\lor \\bar{x}y$",
      "$x\\bar{y} \\lor xy$",
      "$\\bar{x}\\bar{y} \\lor xy$",
      "$x \\lor y$"
    ],
    correctAnswer: 0,
    explanation: "Ta có $x\\bar{y} \\lor y = x \\lor y$. Hàm này nhận giá trị 1 tại $(1,1), (1,0), (0,1)$. Các minterm tương ứng là $xy, x\\bar{y}, \\bar{x}y$. Tổng của chúng là dạng DNF chính tắc."
  },
  {
    id: "c4_l2_q16",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Thông hiểu",
    question: "Hàm bù $\\bar{f}$ của hàm $f = \\sum m(0, 1, 4)$ (với hàm 3 biến) có dạng DNF là:",
    options: [
      "$\\sum m(2, 3, 5, 6, 7)$",
      "$\\prod M(0, 1, 4)$",
      "$\\sum m(0, 1, 4)$",
      "$\\prod M(2, 3, 5, 6, 7)$"
    ],
    correctAnswer: 0,
    explanation: "Hàm bù $\\bar{f}$ nhận giá trị 1 tại chính những điểm mà $f$ nhận giá trị 0. Với không gian 3 biến gồm 8 minterm $\\{0, 1, \\dots, 7\\}$, các chỉ số mà $f=0$ là $\\{2, 3, 5, 6, 7\\}$, vậy dạng DNF của $\\bar{f}$ là $\\sum m(2, 3, 5, 6, 7)$."
  },
  {
    id: "c4_l2_q17",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Vận dụng",
    question: "Hàm đối ngẫu $f^*$ của hàm $f(x, y, z) = xy \\lor \\bar{z}$ là:",
    options: [
      "$(x \\lor y) \\land \\bar{z}$",
      "$(x \\lor y) \\lor \\bar{z}$",
      "$\\bar{x}\\bar{y} \\lor z$",
      "$x \\lor y \\lor z$"
    ],
    correctAnswer: 0,
    explanation: "Nguyên lý đối ngẫu: thay phép $\\lor \\leftrightarrow \\land$ và hằng số $0 \\leftrightarrow 1$, giữ nguyên biến và phủ định của biến. Do đó $(xy) \\lor \\bar{z}$ có hàm đối ngẫu là $(x \\lor y) \\land \\bar{z}$."
  },
  {
    id: "c4_l2_q18",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Thông hiểu",
    question: "Hàm Bool $f$ được gọi là tự đối ngẫu (self-dual) nếu $f^* = f$. Trong số 16 hàm Bool 2 biến, có bao nhiêu hàm tự đối ngẫu?",
    options: [
      "$2$",
      "$4$",
      "$8$",
      "$16$"
    ],
    correctAnswer: 1,
    explanation: "Số hàm tự đối ngẫu của $n$ biến là $2^{2^{n-1}}$. Với $n = 2$, có $2^{2^1} = 2^2 = 4$ hàm tự đối ngẫu."
  },
  {
    id: "c4_l2_q19",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Vận dụng",
    question: "Cho hàm Bool $f(x, y) = x \\leftrightarrow y$ (tương đương logic). Dạng DNF chính tắc của $f$ là:",
    options: [
      "$xy \\lor \\bar{x}\\bar{y}$",
      "$x\\bar{y} \\lor \\bar{x}y$",
      "$xy$",
      "$\\bar{x}\\bar{y}$"
    ],
    correctAnswer: 0,
    explanation: "Phép tương đương nhận giá trị 1 khi $x$ và $y$ cùng bằng 1 hoặc cùng bằng 0. Minterm ứng với $(1, 1)$ là $xy$, ứng với $(0, 0)$ là $\\bar{x}\\bar{y}$. Dạng DNF là $xy \\lor \\bar{x}\\bar{y}$."
  },
  {
    id: "c4_l2_q20",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Vận dụng",
    question: "Khai triển hàm $f(x, y, z) = x$ thành dạng DNF chính tắc gồm bao nhiêu minterm?",
    options: [
      "$1$",
      "$2$",
      "$4$",
      "$8$"
    ],
    correctAnswer: 2,
    explanation: "Biến $x=1$ độc lập với $y, z$. Hai biến $y, z$ có $2^2 = 4$ tổ hợp giá trị, do đó $x$ sinh ra đúng 4 minterm: $m(4, 5, 6, 7)$ (các minterm có bit đầu tiên là 1)."
  },

  // =========================================================================
  // §3 MẠNG CÁC CỔNG LOGIC & TỐI ƯU HÓA (17 câu: c4_l3_q4 -> c4_l3_q20)
  // =========================================================================
  {
    id: "c4_l3_q4",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Nhận biết",
    question: "Cổng logic NOR có bảng chân trị nhận giá trị $1$ khi và chỉ khi:",
    options: [
      "Tất cả các đầu vào đều bằng 0",
      "Tất cả các đầu vào đều bằng 1",
      "Có ít nhất một đầu vào bằng 1",
      "Số lượng đầu vào bằng 1 là số lẻ"
    ],
    correctAnswer: 0,
    explanation: "Cổng NOR là NOT-OR: $\\overline{x \\lor y}$. Nó chỉ nhận giá trị 1 khi $x \\lor y = 0$, tức tất cả các đầu vào đều bằng 0."
  },
  {
    id: "c4_l3_q5",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Thông hiểu",
    question: "Để xây dựng một cổng NOT từ một cổng NOR 2 đầu vào, ta thực hiện:",
    options: [
      "Nối chung cả hai đầu vào của cổng NOR với biến $x$",
      "Nối một đầu vào với biến $x$, đầu vào kia nối với mức 1",
      "Nối một đầu vào với 1 và một đầu vào với 0",
      "Không thể tạo cổng NOT từ cổng NOR"
    ],
    correctAnswer: 0,
    explanation: "Khi nối chung 2 đầu vào, ta có $\\overline{x \\lor x} = \\bar{x}$. Do đó cổng NOR biến thành cổng NOT."
  },
  {
    id: "c4_l3_q6",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Thông hiểu",
    question: "Để thực hiện phép toán $x \\lor y$ chỉ dùng cổng NOR, ta cần ít nhất bao nhiêu cổng NOR 2 đầu vào?",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    correctAnswer: 1,
    explanation: "Ta có $x \\lor y = \\overline{\\overline{x \\lor y}} = \\text{NOT}(\\text{NOR}(x, y))$. Cần 1 cổng NOR để tính $\\text{NOR}(x, y)$ và 1 cổng NOR (làm NOT) để phủ định lại, tổng cộng cần 2 cổng."
  },
  {
    id: "c4_l3_q7",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Thông hiểu",
    question: "Để thực hiện phép toán $x \\land y$ chỉ dùng cổng NAND, ta cần ít nhất bao nhiêu cổng NAND 2 đầu vào?",
    options: [
      "$1$",
      "$2$",
      "$3$",
      "$4$"
    ],
    correctAnswer: 1,
    explanation: "Ta có $x \\land y = \\overline{\\overline{x \\land y}} = \\text{NOT}(\\text{NAND}(x, y))$. Cần 1 cổng NAND tính $\\text{NAND}(x, y)$ và 1 cổng NAND làm NOT để đảo lại, tổng là 2 cổng."
  },
  {
    id: "c4_l3_q8",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Vận dụng",
    question: "Để thực hiện phép toán $x \\land y$ chỉ dùng cổng NOR, số lượng cổng NOR 2 đầu vào tối thiểu cần dùng là:",
    options: [
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    correctAnswer: 1,
    explanation: "Theo De Morgan: $x \\land y = \\overline{\\bar{x} \\lor \\bar{y}} = \\text{NOR}(\\bar{x}, \\bar{y})$. Cần 2 cổng NOR để tạo $\\bar{x}$ và $\\bar{y}$, rồi 1 cổng NOR tính $\\text{NOR}(\\bar{x}, \\bar{y})$. Tổng cộng cần 3 cổng."
  },
  {
    id: "c4_l3_q9",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Vận dụng",
    question: "Để thực hiện phép toán $x \\lor y$ chỉ dùng cổng NAND, số lượng cổng NAND 2 đầu vào tối thiểu cần dùng là:",
    options: [
      "$2$",
      "$3$",
      "$4$",
      "$5$"
    ],
    correctAnswer: 1,
    explanation: "Theo De Morgan: $x \\lor y = \\overline{\\bar{x} \\land \\bar{y}} = \\text{NAND}(\\bar{x}, \\bar{y})$. Cần 2 cổng NAND để tạo $\\bar{x}$ và $\\bar{y}$, cộng 1 cổng NAND kết hợp chúng. Tổng cộng 3 cổng."
  },
  {
    id: "c4_l3_q10",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Thông hiểu",
    question: "Trong thiết kế vi mạch, một mạch logic hai tầng (two-level logic) dạng AND-OR có thể được chuyển đổi trực tiếp thành mạch hai tầng gồm toàn cổng gì?",
    options: [
      "Toàn cổng NAND (mạng NAND-NAND)",
      "Toàn cổng NOR (mạng NOR-NOR)",
      "Toàn cổng NOT",
      "Không thể chuyển đổi trực tiếp"
    ],
    correctAnswer: 0,
    explanation: "Theo định luật De Morgan, biểu thức dạng tổng các tích (SOP) được thực hiện bởi mạng AND-OR có thể thay thế tương đương hoàn toàn bằng mạng 2 tầng NAND-NAND mà không cần thay đổi cấu trúc liên kết."
  },
  {
    id: "c4_l3_q11",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Thông hiểu",
    question: "Một mạch logic hai tầng dạng OR-AND (thực hiện dạng POS) tương đương trực tiếp với mạng 2 tầng gồm toàn cổng gì?",
    options: [
      "Toàn cổng NAND (mạng NAND-NAND)",
      "Toàn cổng NOR (mạng NOR-NOR)",
      "Cổng AND ở tầng 1, cổng OR ở tầng 2",
      "Cổng NOT ở cả hai tầng"
    ],
    correctAnswer: 1,
    explanation: "Dạng tích các tổng (POS) thực hiện bởi mạng OR-AND có thể thay thế tương đương trực tiếp bằng mạng 2 tầng NOR-NOR."
  },
  {
    id: "c4_l3_q12",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Nhận biết",
    question: "Hệ tập hợp các cổng logic nào sau đây KHÔNG PHẢI là một hệ chức năng đầy đủ (functional complete)?",
    options: [
      "$\\{\\text{AND}, \\text{NOT}\\}$",
      "$\\{\\text{OR}, \\text{NOT}\\}$",
      "$\\{\\text{NAND}\\}$",
      "$\\{\\text{AND}, \\text{OR}\\}$"
    ],
    correctAnswer: 3,
    explanation: "Hệ $\\{\\text{AND}, \\text{OR}\\}$ không thể biểu diễn được phép phủ định NOT (hàm đơn điệu không thể sinh ra hàm không đơn điệu), do đó không phải là hệ đầy đủ."
  },
  {
    id: "c4_l3_q13",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Thông hiểu",
    question: "Số lượng đầu vào của một cổng logic trong thực tế chế tạo vi mạch được gọi là:",
    options: [
      "Fan-in",
      "Fan-out",
      "Propagation delay",
      "Clock rate"
    ],
    correctAnswer: 0,
    explanation: "Fan-in là số lượng đầu vào tối đa mà một cổng logic có thể nhận. Fan-out là số lượng đầu vào của các cổng khác mà một đầu ra có thể kéo tải an toàn."
  },
  {
    id: "c4_l3_q14",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Thông hiểu",
    question: "Mục tiêu chính của việc tối thiểu hóa hàm Bool thành dạng đa thức tối tiểu (minimal SOP) trong thiết kế mạch là:",
    options: [
      "Giảm số lượng cổng và số lượng đầu vào (fan-in) của các cổng",
      "Tăng số tầng của mạch để tín hiệu ổn định hơn",
      "Biến đổi tất cả các cổng thành cổng NOT",
      "Tăng điện áp hoạt động của vi mạch"
    ],
    correctAnswer: 0,
    explanation: "Dạng đa thức tối tiểu có số số hạng ít nhất (tương ứng số cổng tầng 1 ít nhất) và số từ đơn trong mỗi số hạng ít nhất (tương ứng số đầu vào fan-in của mỗi cổng ít nhất), giúp tiết kiệm diện tích silic và giảm giá thành vi mạch."
  },
  {
    id: "c4_l3_q15",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Vận dụng",
    question: "Cho hàm Bool $f(x, y, z) = xy \\lor xz$. Mạch 2 tầng AND-OR thực hiện hàm này cần bao nhiêu cổng AND và bao nhiêu cổng OR?",
    options: [
      "2 cổng AND và 1 cổng OR",
      "1 cổng AND và 2 cổng OR",
      "3 cổng AND và 1 cổng OR",
      "2 cổng AND và 2 cổng OR"
    ],
    correctAnswer: 0,
    explanation: "Biểu thức $xy \\lor xz$ gồm 2 tích $xy$ và $xz$ (cần 2 cổng AND 2 đầu vào) và 1 phép tổng liên kết chúng (cần 1 cổng OR 2 đầu vào). Tổng cộng: 2 AND và 1 OR."
  },
  {
    id: "c4_l3_q16",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Vận dụng",
    question: "Rút gọn hàm $f = xy \\lor xz$ thành $x(y \\lor z)$. Mạch thực hiện $x(y \\lor z)$ theo dạng phân cấp cần bao nhiêu cổng?",
    options: [
      "1 cổng OR và 1 cổng AND",
      "2 cổng AND và 1 cổng OR",
      "2 cổng OR và 1 cổng AND",
      "3 cổng AND"
    ],
    correctAnswer: 0,
    explanation: "Biểu thức $x(y \\lor z)$ chỉ cần 1 cổng OR để tính $y \\lor z$ và 1 cổng AND để nhân kết quả đó với $x$. Tổng cộng chỉ cần 2 cổng (thay vì 3 cổng như dạng ban đầu)."
  },
  {
    id: "c4_l3_q17",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Vận dụng",
    question: "Cho mạch gồm cổng AND 2 đầu vào nhận tín hiệu $x$ và $y$, đầu ra nối vào 1 đầu vào của cổng NOR 2 đầu vào, đầu vào kia của cổng NOR nhận $z$. Biểu thức logic tại đầu ra là:",
    options: [
      "$\\overline{xy \\lor z}$",
      "$\\overline{xy} \\lor z$",
      "$\\overline{xy \\land z}$",
      "$(x \\lor y) \\land \\bar{z}$"
    ],
    correctAnswer: 0,
    explanation: "Đầu ra của cổng AND là $xy$. Cổng NOR nhận $xy$ và $z$, cho đầu ra là $\\overline{xy \\lor z}$."
  },
  {
    id: "c4_l3_q18",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Thông hiểu",
    question: "Thời gian trễ truyền lan (Propagation delay) của một mạch tổ hợp phụ thuộc chủ yếu vào:",
    options: [
      "Số tầng cổng logic lớn nhất trên đường truyền từ đầu vào đến đầu ra (độ sâu mạch)",
      "Số lượng biến đầu vào của hàm",
      "Màu sắc của vi mạch",
      "Thứ tự đặt tên các biến"
    ],
    correctAnswer: 0,
    explanation: "Thời gian trễ tỷ lệ thuận với số tầng cổng logic trên đường đi dài nhất (critical path / circuit depth). Mạch 2 tầng có ưu điểm thời gian trễ rất nhỏ và đồng đều."
  },
  {
    id: "c4_l3_q19",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Vận dụng",
    question: "Biểu thức $\\overline{\\bar{x} \\lor \\bar{y}}$ được rút gọn bằng luật De Morgan thành:",
    options: [
      "$xy$",
      "$x \\lor y$",
      "$\\bar{x}\\bar{y}$",
      "$x \\lor \\bar{y}$"
    ],
    correctAnswer: 0,
    explanation: "Theo luật De Morgan: $\\overline{\\bar{x} \\lor \\bar{y}} = \\bar{\\bar{x}} \\land \\bar{\\bar{y}} = xy$."
  },
  {
    id: "c4_l3_q20",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Nhận biết",
    question: "Ký hiệu chuẩn IEEE/ANSI của cổng AND có hình dạng đặc trưng nào?",
    options: [
      "Một cạnh thẳng ở phía đầu vào và một đường cong tròn ở phía đầu ra (hình chữ D)",
      "Hình tam giác có vòng tròn nhỏ ở đỉnh",
      "Hình mặt cung nhọn ở cả hai đầu",
      "Hình chữ nhật có dấu $\\ge 1$"
    ],
    correctAnswer: 0,
    explanation: "Cổng AND theo chuẩn truyền thống Mỹ/IEEE có cạnh thẳng phía ngõ vào và mặt vòm tròn phía ngõ ra (giống chữ D). Cổng OR có cạnh cong lõm phía ngõ vào và đầu nhọn phía ngõ ra."
  },

  // =========================================================================
  // §4 PHƯƠNG PHÁP BIỂU ĐỒ KARNAUGH (16 câu: c4_l4_q5 -> c4_l4_q20)
  // =========================================================================
  {
    id: "c4_l4_q5",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Nhận biết",
    question: "Trong bản đồ Karnaugh 4 biến, tổng số ô là bao nhiêu?",
    options: [
      "$8$",
      "$16$",
      "$32$",
      "$64$"
    ],
    correctAnswer: 1,
    explanation: "Bản đồ Karnaugh $n$ biến có $2^n$ ô. Với $n = 4$, số ô là $2^4 = 16$ ô, bố trí thành lưới $4 \\times 4$."
  },
  {
    id: "c4_l4_q6",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Nhận biết",
    question: "Một tế bào trong bản đồ Karnaugh có thể chứa số lượng ô bằng giá trị nào sau đây?",
    options: [
      "$3$",
      "$6$",
      "$8$",
      "$12$"
    ],
    correctAnswer: 2,
    explanation: "Kích thước của một tế bào trong K-Map bắt buộc phải là lũy thừa của 2: $1, 2, 4, 8, 16, \\dots$ Các số 3, 6, 12 không phải lũy thừa của 2 nên không thể tạo thành một tế bào hợp lệ."
  },
  {
    id: "c4_l4_q7",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Thông hiểu",
    question: "Khái niệm 'tế bào lớn' (Prime Implicant) trong bản đồ Karnaugh được hiểu là:",
    options: [
      "Tế bào có kích thước bằng toàn bộ bản đồ",
      "Tế bào không bị chứa hoàn toàn trong một tế bào nào lớn hơn",
      "Tế bào chỉ chứa đúng 1 ô",
      "Tế bào chứa nhiều ô số 0 nhất"
    ],
    correctAnswer: 1,
    explanation: "Tế bào lớn (Prime Implicant) là một tế bào của các ô 1 mà không thể mở rộng thêm theo bất kỳ hướng nào để tạo thành tế bào kích thước gấp đôi (tức không bị chứa hoàn toàn trong tế bào lớn hơn)."
  },
  {
    id: "c4_l4_q8",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Thông hiểu",
    question: "Tế bào lớn cốt yếu (Essential Prime Implicant) là tế bào lớn có đặc điểm:",
    options: [
      "Chứa ít nhất một ô số 1 không thuộc bất kỳ tế bào lớn nào khác",
      "Có kích thước lớn nhất trong tất cả các tế bào",
      "Chứa ô ở góc trên cùng bên trái",
      "Phủ được tất cả các ô số 1 của bản đồ"
    ],
    correctAnswer: 0,
    explanation: "Tế bào lớn cốt yếu là tế bào lớn chứa ít nhất một ô 1 đơn độc (chỉ được phủ bởi đúng tế bào lớn đó). Do đó, tế bào lớn cốt yếu bắt buộc phải xuất hiện trong mọi công thức đa thức tối tiểu."
  },
  {
    id: "c4_l4_q9",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Vận dụng",
    question: "Trong K-Map 3 biến $x, y, z$ (hàng là $x$, cột là $yz$), một nhóm gồm 4 ô $m(0, 1, 4, 5)$ sẽ rút gọn thành đơn thức:",
    options: [
      "$\\bar{y}$",
      "$\\bar{z}$",
      "$\\bar{x}$",
      "$y$"
    ],
    correctAnswer: 0,
    explanation: "Xét tọa độ các ô: $m_0=(0,0,0), m_1=(0,0,1), m_4=(1,0,0), m_5=(1,0,1)$. Ta thấy biến $x$ nhận cả 0 và 1; biến $z$ nhận cả 0 và 1; riêng biến $y$ luôn giữ giá trị 0 (tức $\\bar{y}$). Vậy kết quả rút gọn là $\\bar{y}$."
  },
  {
    id: "c4_l4_q10",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Vận dụng",
    question: "Trong K-Map 4 biến $x, y, z, t$, một nhóm gồm 8 ô $m(0, 1, 2, 3, 4, 5, 6, 7)$ biểu diễn đơn thức nào?",
    options: [
      "$\\bar{x}$",
      "$x$",
      "$\\bar{y}$",
      "$\\bar{z}$"
    ],
    correctAnswer: 0,
    explanation: "Các ô từ 0 đến 7 tương ứng với toàn bộ nửa trên của K-Map (hàng $xy = 00$ và $xy = 01$). Tại đây $x$ luôn bằng 0 (tức $\\bar{x}$), còn $y, z, t$ biến thiên nhận đủ mọi giá trị nên bị triệt tiêu. Nhóm 8 ô rút gọn còn 1 biến: $\\bar{x}$."
  },
  {
    id: "c4_l4_q11",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Vận dụng",
    question: "Trong K-Map 4 biến, hai ô đối diện ở hai biên trái và phải cùng hàng $xy = 00$ là $m_0 (0000)$ và $m_2 (0010)$ có kề nhau không? Đơn thức tạo thành là gì?",
    options: [
      "Có kề nhau (tính chất xuyến); tạo thành đơn thức $\\bar{x}\\bar{y}\\bar{t}$",
      "Không kề nhau vì nằm ở hai đầu bảng",
      "Có kề nhau; tạo thành đơn thức $\\bar{x}\\bar{y}\\bar{z}$",
      "Có kề nhau; tạo thành đơn thức $\\bar{z}\\bar{t}$"
    ],
    correctAnswer: 0,
    explanation: "Cột đầu tiên là $zt = 00$ và cột cuối cùng là $zt = 10$. Hai cột này kề nhau theo mã Gray (chỉ khác biến $z$). Hàng là $xy = 00$. Gom 2 ô này lại: $z$ bị triệt tiêu, còn lại $\\bar{x}\\bar{y}\\bar{t}$."
  },
  {
    id: "c4_l4_q12",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Vận dụng",
    question: "Rút gọn hàm 3 biến $f = \\sum m(1, 3, 6, 7)$ bằng biểu đồ Karnaugh, ta được:",
    options: [
      "$\\bar{x}z \\lor xy$",
      "$\\bar{x}y \\lor xz$",
      "$yz \\lor x\\bar{y}$",
      "$z \\lor xy$"
    ],
    correctAnswer: 0,
    explanation: "Nhóm $\\{m_1, m_3\\}$: $x=0$, $y$ đổi từ 0 sang 1, $z=1 \\implies \\bar{x}z$. Nhóm $\\{m_6, m_7\\}$: $x=1, y=1$, $z$ đổi từ 0 sang 1 $\\implies xy$. Không có ô nào thừa, kết quả tối tiểu là $\\bar{x}z \\lor xy$."
  },
  {
    id: "c4_l4_q13",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Thông hiểu",
    question: "Trong phương pháp Karnaugh, các ô 'tùy định' (Don't care, ký hiệu $d$ hoặc $X$) được xử lý như thế nào?",
    options: [
      "Có thể coi là 1 hoặc 0 tùy ý sao cho gom được các tế bào lớn nhất có thể",
      "Bắt buộc phải coi là 1 trong mọi trường hợp",
      "Bắt buộc phải coi là 0 và bỏ qua hoàn toàn",
      "Làm hỏng bảng Karnaugh và không giải được"
    ],
    correctAnswer: 0,
    explanation: "Điều kiện tùy định (don't care) tương ứng với các trạng thái đầu vào không bao giờ xảy ra. Ta tự do gán giá trị 1 cho ô $d$ nếu nó giúp mở rộng tế bào lớn hơn, hoặc gán 0 nếu không cần phủ nó."
  },
  {
    id: "c4_l4_q14",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Vận dụng",
    question: "Cho hàm $f(x, y, z) = \\sum m(0, 1, 2)$ với điều kiện tùy định $d(3)$. Công thức tối tiểu của $f$ là:",
    options: [
      "$\\bar{x}$",
      "$\\bar{x}\\bar{y} \\lor \\bar{x}\\bar{z}$",
      "$\\bar{y} \\lor \\bar{z}$",
      "$1$"
    ],
    correctAnswer: 0,
    explanation: "Nếu coi ô $d(3) = 1$, ta có thể gom cả 4 ô $\\{0, 1, 2, 3\\}$ thành một tế bào 4 ô duy nhất ứng với $x=0$. Kết quả rút gọn tối tiểu đạt được là $\\bar{x}$."
  },
  {
    id: "c4_l4_q15",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Vận dụng",
    question: "Trong K-Map 4 biến, nếu toàn bộ 16 ô đều nhận giá trị 1 thì kết quả rút gọn là:",
    options: [
      "$1$",
      "$0$",
      "$xyzt$",
      "$\\bar{x}\\bar{y}\\bar{z}\\bar{t}$"
    ],
    correctAnswer: 0,
    explanation: "Một tế bào phủ hết $2^4 = 16$ ô thì toàn bộ 4 biến đều bị triệt tiêu, hàm đồng nhất $1$."
  },
  {
    id: "c4_l4_q16",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Thông hiểu",
    question: "Số lượng tế bào lớn cốt yếu của một hàm Bool có thể bằng 0 không?",
    options: [
      "Có thể, khi mọi ô 1 đều được phủ bởi từ 2 tế bào lớn trở lên",
      "Không bao giờ, luôn luôn có ít nhất 1 tế bào lớn cốt yếu",
      "Chỉ bằng 0 khi hàm đồng nhất 1",
      "Chỉ bằng 0 khi số biến là số chẵn"
    ],
    correctAnswer: 0,
    explanation: "Có những hàm (ví dụ hàm cyclic phủ) mà mỗi ô 1 đều thuộc ít nhất 2 tế bào lớn, khi đó không có tế bào lớn cốt yếu nào và phải dùng phương pháp chọn phủ (như Petrick)."
  },
  {
    id: "c4_l4_q17",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Vận dụng",
    question: "Cho hàm 4 biến $f = \\sum m(5, 7, 13, 15)$. Biểu thức tối tiểu rút gọn được là:",
    options: [
      "$yt$",
      "$xt$",
      "$yz$",
      "$xz$"
    ],
    correctAnswer: 0,
    explanation: "Các minterm có dạng: $m_5=(0,1,0,1), m_7=(0,1,1,1), m_{13}=(1,1,0,1), m_{15}=(1,1,1,1)$. Nhận thấy $y=1$ và $t=1$ trong cả 4 ô, trong khi $x$ và $z$ nhận đủ mọi giá trị $(0, 1)$. Nhóm 4 ô này rút gọn thành $yt$."
  },
  {
    id: "c4_l4_q18",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Vận dụng",
    question: "Trong K-Map 4 biến, nhóm gồm 4 ô liền nhau trên cùng một hàng $xy = 11$ (ứng với $m_{12}, m_{13}, m_{15}, m_{14}$) biểu diễn đơn thức nào?",
    options: [
      "$xy$",
      "$zt$",
      "$\\bar{x}\\bar{y}$",
      "$x\\bar{y}$"
    ],
    correctAnswer: 0,
    explanation: "Trên hàng $xy = 11$, hai biến $x$ và $y$ đều nhận giá trị 1. Bốn cột quét qua đủ mọi tổ hợp của $z, t$ nên $z, t$ bị triệt tiêu hoàn toàn. Kết quả là đơn thức $xy$."
  },
  {
    id: "c4_l4_q19",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Vận dụng",
    question: "Trong K-Map 4 biến, nhóm gồm 4 ô liền nhau trên cùng một cột $zt = 01$ biểu diễn đơn thức nào?",
    options: [
      "$\\bar{z}t$",
      "$z\\bar{t}$",
      "$xy$",
      "$\\bar{x}y$"
    ],
    correctAnswer: 0,
    explanation: "Trên cột $zt = 01$, biến $z=0$ (tức $\\bar{z}$) và biến $t=1$. Bốn hàng quét qua đủ tổ hợp của $x, y$ nên $x, y$ bị triệt tiêu. Kết quả là đơn thức $\\bar{z}t$."
  },
  {
    id: "c4_l4_q20",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Thông hiểu",
    question: "Sau khi đã chọn tất cả các tế bào lớn cốt yếu trong bước 2 của thuật toán Karnaugh, nếu vẫn còn ô 1 chưa được phủ thì ta phải:",
    options: [
      "Chọn thêm số lượng ít nhất các tế bào lớn còn lại sao cho phủ hết các ô 1 chưa được phủ",
      "Bỏ qua các ô 1 đó vì chúng không quan trọng",
      "Xóa các tế bào lớn cốt yếu đã chọn đi và làm lại",
      "Khai triển lại toàn bộ hàm thành dạng minterm"
    ],
    correctAnswer: 0,
    explanation: "Quy tắc bước 3: Phủ các ô 1 còn lại bằng cách chọn số lượng tế bào lớn ít nhất có thể (ưu tiên các tế bào có kích thước lớn hơn)."
  },

  // =========================================================================
  // §5 PHƯƠNG PHÁP THỎA THUẬN (CONSENSUS METHOD) (17 câu: c4_l5_q4 -> c4_l5_q20)
  // =========================================================================
  {
    id: "c4_l5_q4",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Nhận biết",
    question: "Định lý thỏa thuận khẳng định rằng: Nếu $c$ là thỏa thuận của hai đơn thức $m_1$ và $m_2$ thì:",
    options: [
      "$m_1 \\lor m_2 \\lor c = m_1 \\lor m_2$",
      "$m_1 \\land m_2 = c$",
      "$m_1 \\lor m_2 = c$",
      "$c = 0$"
    ],
    correctAnswer: 0,
    explanation: "Vì thỏa thuận $c$ là hệ quả logic của $m_1 \\lor m_2$ (tức $c \\le m_1 \\lor m_2$), nên theo luật hấp thụ: $m_1 \\lor m_2 \\lor c = m_1 \\lor m_2$. Số hạng $c$ là số hạng thừa có thể thêm vào hoặc bớt đi."
  },
  {
    id: "c4_l5_q5",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Thông hiểu",
    question: "Thỏa thuận theo biến $x$ của hai đơn thức $x\\bar{y}$ và $\\bar{x}z$ là đơn thức nào?",
    options: [
      "$\\bar{y}z$",
      "$yz$",
      "$\\bar{y}\\bar{z}$",
      "$0$"
    ],
    correctAnswer: 0,
    explanation: "Triệt tiêu biến đối ngẫu $x$ và $\\bar{x}$, tích các từ đơn còn lại là $\\bar{y}z$."
  },
  {
    id: "c4_l5_q6",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Thông hiểu",
    question: "Hai đơn thức $xyz$ và $\\bar{x}y\\bar{z}$ có thỏa thuận bằng bao nhiêu?",
    options: [
      "$0$",
      "$y$",
      "$xy$",
      "$yz$"
    ],
    correctAnswer: 0,
    explanation: "Hai đơn thức này có 2 cặp biến đối ngẫu: $(x, \\bar{x})$ và $(z, \\bar{z})$. Khi có từ 2 cặp đối ngẫu trở lên, tích của chúng chứa cả $x\\bar{x}=0$ và $z\\bar{z}=0$, do đó không có thỏa thuận (thỏa thuận bằng 0)."
  },
  {
    id: "c4_l5_q7",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Vận dụng",
    question: "Áp dụng định lý thỏa thuận để rút gọn biểu thức $f = xy \\lor \\bar{x}z \\lor yz$, ta được:",
    options: [
      "$xy \\lor \\bar{x}z$",
      "$yz$",
      "$xy \\lor yz$",
      "$\\bar{x}z \\lor yz$"
    ],
    correctAnswer: 0,
    explanation: "Đơn thức $yz$ chính là thỏa thuận của $xy$ và $\\bar{x}z$. Theo định lý thỏa thuận, $yz$ là số hạng dư thừa bị triệt tiêu, biểu thức rút gọn thành $xy \\lor \\bar{x}z$."
  },
  {
    id: "c4_l5_q8",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Vận dụng",
    question: "Tìm thỏa thuận của hai đơn thức $\\bar{x}y$ và $x$:",
    options: [
      "$y$",
      "$\\bar{y}$",
      "$xy$",
      "$0$"
    ],
    correctAnswer: 0,
    explanation: "Biến đối ngẫu là $\\bar{x}$ và $x$. Phần còn lại của đơn thức thứ nhất là $y$, phần còn lại của đơn thức thứ hai là $1$ (rỗng). Thỏa thuận là $y \\cdot 1 = y$."
  },
  {
    id: "c4_l5_q9",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Thông hiểu",
    question: "Trong thuật toán tìm tiền đề nguyên tố bằng phương pháp thỏa thuận, nếu tập hợp hiện tại chứa cả đơn thức $A$ và đơn thức $AB$ thì:",
    options: [
      "Loại bỏ $AB$ vì $A \\lor AB = A$ (luật hấp thụ)",
      "Loại bỏ $A$ và giữ lại $AB$",
      "Giữ nguyên cả hai đơn thức",
      "Thay thế cả hai bằng $B$"
    ],
    correctAnswer: 0,
    explanation: "Theo luật hấp thụ, $A \\lor AB = A$, nên đơn thức dài hơn $AB$ bị trội hoàn toàn bởi $A$ và phải được loại bỏ để chỉ giữ lại các tiền đề nguyên tố (ngắn nhất)."
  },
  {
    id: "c4_l5_q10",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Thông hiểu",
    question: "Thuật toán phương pháp thỏa thuận dừng lại khi nào?",
    options: [
      "Khi không thể sinh thêm bất kỳ thỏa thuận mới nào không bị triệt tiêu",
      "Sau đúng $n$ bước với $n$ là số biến",
      "Khi số đơn thức bằng 0",
      "Khi hàm trở thành 1"
    ],
    correctAnswer: 0,
    explanation: "Thuật toán sinh tất cả các thỏa thuận có thể và loại bỏ các đơn thức bị hấp thụ. Thuật toán dừng khi mọi thỏa thuận sinh ra đều đã có mặt hoặc bị hấp thụ bởi các đơn thức sẵn có."
  },
  {
    id: "c4_l5_q11",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Nhận biết",
    question: "Phương pháp Petrick được sử dụng ở giai đoạn nào trong quy trình tối thiểu hóa hàm Bool?",
    options: [
      "Sau khi đã tìm được tất cả các tiền đề nguyên tố, dùng để tìm phủ tối tiểu",
      "Trước khi lập bảng chân trị",
      "Dùng để vẽ biểu đồ Hasse",
      "Dùng để chuyển hàm về dạng chuẩn tắc CNF"
    ],
    correctAnswer: 0,
    explanation: "Phương pháp Petrick là kỹ thuật đại số để tìm phủ tối tiểu từ bảng tiền đề nguyên tố, đặc biệt hữu ích khi bảng không có tế bào lớn cốt yếu hoặc bài toán cyclic."
  },
  {
    id: "c4_l5_q12",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Thông hiểu",
    question: "Trong phương pháp Petrick, nếu minterm $m_1$ được phủ bởi tiền đề nguyên tố $P_1$ hoặc $P_2$, ta viết phương trình điều kiện là:",
    options: [
      "$P_1 \\lor P_2 = 1$",
      "$P_1 \\land P_2 = 1$",
      "$P_1 \\lor P_2 = 0$",
      "$P_1 = P_2$"
    ],
    correctAnswer: 0,
    explanation: "Để phủ được $m_1$, ta bắt buộc phải chọn ít nhất một trong hai tiền đề $P_1$ hoặc $P_2$, biểu diễn bằng mệnh đề $(P_1 \\lor P_2) = 1$."
  },
  {
    id: "c4_l5_q13",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Vận dụng",
    question: "Trong phương pháp Petrick, sau khi nhân các biểu thức điều kiện ta được $P = P_1 P_2 \\lor P_1 P_3 P_4$. Nghiệm tối tiểu tương ứng là:",
    options: [
      "Chọn tập tiền đề $\\{P_1, P_2\\}$ gồm 2 tiền đề",
      "Chọn tập tiền đề $\\{P_1, P_3, P_4\\}$ gồm 3 tiền đề",
      "Chọn cả 4 tiền đề $\\{P_1, P_2, P_3, P_4\\}$",
      "Không có nghiệm"
    ],
    correctAnswer: 0,
    explanation: "Tích $P_1 P_2$ chỉ cần chọn 2 tiền đề là $P_1$ và $P_2$, ít hơn tích $P_1 P_3 P_4$ (cần 3 tiền đề). Do đó $\\{P_1, P_2\\}$ là phương án phủ tối tiểu."
  },
  {
    id: "c4_l5_q14",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Vận dụng",
    question: "Thỏa thuận của hai đơn thức $x\\bar{y}z$ và $yt$ là:",
    options: [
      "$xzt$",
      "$\\bar{x}zt$",
      "$xyzt$",
      "$0$"
    ],
    correctAnswer: 0,
    explanation: "Cặp đối ngẫu duy nhất là $\\bar{y}$ và $y$. Ghép các từ đơn còn lại: $x, z$ từ đơn thức 1 và $t$ từ đơn thức 2, ta được thỏa thuận là $xzt$."
  },
  {
    id: "c4_l5_q15",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Thông hiểu",
    question: "Ưu điểm lớn nhất của phương pháp Quine-McCluskey và phương pháp thỏa thuận so với biểu đồ Karnaugh là:",
    options: [
      "Dễ dàng lập trình và cài đặt trên máy tính, áp dụng được cho hàm nhiều biến ($n > 6$)",
      "Dễ vẽ và trực quan hơn bằng mắt",
      "Không cần dùng đến phép toán logic",
      "Luôn cho ra ít hơn 1 cổng so với Karnaugh"
    ],
    correctAnswer: 0,
    explanation: "Biểu đồ Karnaugh chỉ trực quan và hiệu quả cho tối đa 4-6 biến. Phương pháp Quine-McCluskey / Thỏa thuận là thuật toán hình thức thuần túy đại số, rất dễ lập trình tự động hóa cho các hàm có số lượng biến lớn."
  },
  {
    id: "c4_l5_q16",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Vận dụng",
    question: "Cho biểu thức $f = \\bar{x}\\bar{y} \\lor xz \\lor \\bar{y}z$. Đơn thức nào là dư thừa theo định lý thỏa thuận?",
    options: [
      "$\\bar{y}z$",
      "$\\bar{x}\\bar{y}$",
      "$xz$",
      "Không có đơn thức dư thừa"
    ],
    correctAnswer: 0,
    explanation: "Thỏa thuận của $\\bar{x}\\bar{y}$ và $xz$ theo biến $x$ chính là $\\bar{y}z$. Vì vậy $\\bar{y}z$ là đơn thức dư thừa và có thể bỏ đi, $f = \\bar{x}\\bar{y} \\lor xz$."
  },
  {
    id: "c4_l5_q17",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Vận dụng",
    question: "Cho hai đơn thức $m_1 = a\\bar{b}c$ và $m_2 = b\\bar{d}$. Thỏa thuận của chúng là:",
    options: [
      "$ac\\bar{d}$",
      "$a\\bar{c}\\bar{d}$",
      "$ab\\bar{d}$",
      "$0$"
    ],
    correctAnswer: 0,
    explanation: "Cặp đối ngẫu duy nhất là $\\bar{b}$ và $b$. Triệt tiêu biến $b$, các biến còn lại là $ac$ và $\\bar{d}$. Thỏa thuận là $ac\\bar{d}$."
  },
  {
    id: "c4_l5_q18",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Thông hiểu",
    question: "Hai đơn thức $x$ và $\\bar{x}$ có thỏa thuận theo định nghĩa là:",
    options: [
      "$1$",
      "$0$",
      "$x$",
      "$\\bar{x}$"
    ],
    correctAnswer: 0,
    explanation: "Đơn thức $x = x \\cdot 1$ và $\\bar{x} = \\bar{x} \\cdot 1$. Triệt tiêu biến đối ngẫu $x, \\bar{x}$, phần còn lại của cả hai là $1$. Tích của chúng là $1 \\cdot 1 = 1$."
  },
  {
    id: "c4_l5_q19",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Vận dụng",
    question: "Áp dụng định lý thỏa thuận dạng kép: Biểu thức $(x \\lor y) \\land (\\bar{x} \\lor z) \\land (y \\lor z)$ được rút gọn thành:",
    options: [
      "$(x \\lor y) \\land (\\bar{x} \\lor z)$",
      "$(y \\lor z)$",
      "$(x \\lor y) \\land (y \\lor z)$",
      "$(\\bar{x} \\lor z) \\land (y \\lor z)$"
    ],
    correctAnswer: 0,
    explanation: "Theo nguyên lý đối ngẫu của định lý thỏa thuận: $(x \\lor y) \\land (\\bar{x} \\lor z) \\land (y \\lor z) = (x \\lor y) \\land (\\bar{x} \\lor z)$. Thừa số $(y \\lor z)$ là thỏa thuận kép dư thừa."
  },
  {
    id: "c4_l5_q20",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Vận dụng",
    question: "Trong phương pháp Quine-McCluskey, hai minterm có thể kết hợp với nhau nếu và chỉ nếu biểu diễn nhị phân của chúng:",
    options: [
      "Chỉ khác nhau ở đúng 1 vị trí bit duy nhất",
      "Có cùng số lượng bit 1",
      "Khác nhau ở tất cả các bit",
      "Có ít nhất 2 bit giống nhau"
    ],
    correctAnswer: 0,
    explanation: "Hai số hạng chỉ có thể kết hợp (ghép tế bào theo tính chất $m \\lor m' = \\text{rút gọn}$) khi chúng chỉ khác nhau ở đúng 1 bit duy nhất (tương ứng với $x_i$ và $\\bar{x}_i$), vị trí bit đó sẽ được thay bằng dấu gạch ngang '-'."
  }
];
