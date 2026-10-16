/**
 * Ngân hàng câu hỏi trắc nghiệm Toán Rời Rạc
 * CHƯƠNG 1 ĐÃ ĐƯỢC CHUẨN HÓA VÀ NÂNG CẤP TOÀN DIỆN:
 * 1. LOẠI BỎ HOÀN TOÀN CÁC CÂU LIÊN QUAN ĐẾN PHÉP TUYỂN LOẠI TRỪ (XOR).
 * 2. TÁCH VÀ BỔ SUNG CÁC TOPIC CHUYÊN SÂU:
 *    - §1 Pháp tính mệnh đề
 *    - §2 Phép kéo theo & Luật phản đảo (bổ sung đầy đủ luật kéo theo, đảo, nghịch đảo, phản đảo, xuất nhập)
 *    - §3 10 Quy luật Logic cơ bản (De Morgan, phân bố, hấp thụ, thống trị, bù trừ, đồng thuận)
 *    - §4 Các Quy tắc Suy diễn hợp lý (Modus Ponens, Modus Tollens, Tam đoạn luận, Phép giải, Ngụy biện)
 *    - §5 Vị từ và Lượng từ
 *    - §6 Nguyên lý Quy nạp Toán học
 * Kèm đầy đủ các câu hỏi thực hành của Chương 2, Chương 3 và Chương 4.
 */

const QUIZ_DATA = [
  // =========================================================================
  // CHƯƠNG 1: CƠ SỞ LOGIC (CHUẨN HÓA THEO YÊU CẦU - HOÀN TOÀN KHÔNG CÓ XOR)
  // =========================================================================

  // -------------------------------------------------------------------------
  // §1: PHÁP TÍNH MỆNH ĐỀ & BIỂU THỨC LOGIC CƠ BẢN
  // -------------------------------------------------------------------------
  {
    id: "c1_l1_q1",
    chapterId: "c1",
    lessonId: "l1_1",
    lessonTitle: "§1 Pháp tính mệnh đề",
    difficulty: "Nhận biết",
    question: "Câu nào dưới đây là một mệnh đề trong logic toán học?",
    options: [
      "Hôm nay trời đẹp làm sao!",
      "Học môn Toán rời rạc có khó không?",
      "Số 17 là một số nguyên tố.",
      "x + 2 = 5"
    ],
    correctAnswer: 2,
    explanation: "Mệnh đề là một khẳng định có giá trị chân lý xác định: hoặc đúng (1) hoặc sai (0). 'Số 17 là một số nguyên tố' là mệnh đề đúng. Câu cảm thán, câu hỏi và câu chứa biến tự do chưa gán giá trị không phải là mệnh đề."
  },
  {
    id: "c1_l1_q2",
    chapterId: "c1",
    lessonId: "l1_1",
    lessonTitle: "§1 Pháp tính mệnh đề",
    difficulty: "Nhận biết",
    question: "Phép nối liền (phép hội $p \\land q$) nhận giá trị Đúng (1) khi nào?",
    options: [
      "Khi ít nhất một trong hai mệnh đề p, q đúng",
      "Khi cả hai mệnh đề p và q đều đúng",
      "Khi p đúng và q sai",
      "Khi p sai và q đúng"
    ],
    correctAnswer: 1,
    explanation: "Định nghĩa phép hội: p ∧ q chỉ nhận giá trị 1 khi và chỉ khi cả p và q đều nhận giá trị 1."
  },
  {
    id: "c1_l1_q3",
    chapterId: "c1",
    lessonId: "l1_1",
    lessonTitle: "§1 Pháp tính mệnh đề",
    difficulty: "Nhận biết",
    question: "Phép nối rời (phép tuyển $p \\lor q$) nhận giá trị Sai (0) khi nào?",
    options: [
      "Khi cả hai mệnh đề p và q đều sai",
      "Khi một mệnh đề đúng và một mệnh đề sai",
      "Khi cả hai mệnh đề đều đúng",
      "Khi p đúng và q sai"
    ],
    correctAnswer: 0,
    explanation: "Phép tuyển p ∨ q mang nghĩa bao gồm: nó chỉ nhận giá trị sai (0) khi cả hai thành phần p và q đều sai (0)."
  },
  {
    id: "c1_l1_q4",
    chapterId: "c1",
    lessonId: "l1_1",
    lessonTitle: "§1 Pháp tính mệnh đề",
    difficulty: "Thông hiểu",
    question: "Mệnh đề tương đương (kéo theo hai chiều $p \\leftrightarrow q$) nhận giá trị Đúng (1) khi nào?",
    options: [
      "Khi p = 1 và q = 0",
      "Khi p = 0 và q = 1",
      "Khi p và q có cùng chân trị (cùng đúng hoặc cùng sai)",
      "Chỉ khi cả p và q cùng bằng 1"
    ],
    correctAnswer: 2,
    explanation: "Phép kéo theo hai chiều p ↔ q nhận giá trị 1 khi và chỉ khi p và q có cùng giá trị chân lý: (1 ↔ 1 = 1) và (0 ↔ 0 = 1)."
  },
  {
    id: "c1_l1_q5",
    chapterId: "c1",
    lessonId: "l1_1",
    lessonTitle: "§1 Pháp tính mệnh đề",
    difficulty: "Thông hiểu",
    question: "Cho hai mệnh đề P: 'Minh giỏi Toán' và Q: 'Minh chăm học'. Mệnh đề 'Minh giỏi Toán nhưng không chăm học' được biểu diễn là:",
    options: [
      "P ∨ ¬Q",
      "P ∧ ¬Q",
      "P → ¬Q",
      "¬P ∧ Q"
    ],
    correctAnswer: 1,
    explanation: "Liên từ 'nhưng' trong logic mang ý nghĩa là phép hội (∧). 'Không chăm học' là phủ định ¬Q. Do đó biểu diễn là P ∧ ¬Q."
  },
  {
    id: "c1_l1_q6",
    chapterId: "c1",
    lessonId: "l1_1",
    lessonTitle: "§1 Pháp tính mệnh đề",
    difficulty: "Nhận biết",
    question: "Cho toán tử Sheffer Stroke (phép NAND, ký hiệu |) định nghĩa bởi $p \\mid q \\equiv \\neg (p \\land q)$. Mệnh đề $\\neg p$ tương đương với:",
    options: [
      "p | p",
      "p | 1",
      "Cả A và B đều đúng.",
      "Không biểu diễn được qua NAND."
    ],
    correctAnswer: 2,
    explanation: "Ta có: p | p = ¬(p ∧ p) = ¬p. Đồng thời p | 1 = ¬(p ∧ 1) = ¬p. Vì vậy cả hai cách biểu diễn đều đúng."
  },
  {
    id: "c1_l1_q7",
    chapterId: "c1",
    lessonId: "l1_1",
    lessonTitle: "§1 Pháp tính mệnh đề",
    difficulty: "Vận dụng",
    question: "Cho toán tử Peirce (phép NOR, ký hiệu ↓) định nghĩa bởi $p \\downarrow q \\equiv \\neg (p \\lor q)$. Biểu diễn của $p \\land q$ chỉ dùng toán tử ↓ là:",
    options: [
      "(p ↓ p) ↓ (q ↓ q)",
      "(p ↓ q) ↓ (p ↓ q)",
      "p ↓ (q ↓ p)",
      "¬(p ↓ q)"
    ],
    correctAnswer: 0,
    explanation: "Ta có p ↓ p = ¬p và q ↓ q = ¬q. Khi đó (p ↓ p) ↓ (q ↓ q) = ¬p ↓ ¬q = ¬(¬p ∨ ¬q) = p ∧ q (theo luật De Morgan)."
  },
  {
    id: "c1_l1_q8",
    chapterId: "c1",
    lessonId: "l1_1",
    lessonTitle: "§1 Pháp tính mệnh đề",
    difficulty: "Thông hiểu",
    question: "Giả sử phép toán mới ⊙ được định nghĩa bằng bảng chân lý: T ⊙ T = F, T ⊙ F = T, F ⊙ T = F, F ⊙ F = T. Khi đó p ⊙ q tương đương logic với:",
    options: [
      "¬p",
      "¬q",
      "p → q",
      "q → p"
    ],
    correctAnswer: 1,
    explanation: "Khi q = T thì kết quả là F; khi q = F thì kết quả là T (không phụ thuộc vào giá trị của p). Bảng chân trị này trùng khớp hoàn toàn với ¬q."
  },
  {
    id: "c1_l1_q9",
    chapterId: "c1",
    lessonId: "l1_1",
    lessonTitle: "§1 Pháp tính mệnh đề",
    difficulty: "Nhận biết",
    question: "Cho bảng chân trị có $n$ biến logic $p_1, p_2, \\dots, p_n$. Có bao nhiêu hàm chân lý (hàm Boole) khác nhau có thể được tạo thành từ $n$ biến này?",
    options: [
      "2^n",
      "2^(2^n)",
      "n^2",
      "2^(n-1)"
    ],
    correctAnswer: 1,
    explanation: "Một bảng chân trị n biến có 2^n dòng. Mỗi dòng có 2 khả năng gán chân trị (0 hoặc 1). Theo nguyên lý nhân, số hàm Boole khác nhau là 2^(2^n)."
  },
  {
    id: "c1_l1_q10",
    chapterId: "c1",
    lessonId: "l1_1",
    lessonTitle: "§1 Pháp tính mệnh đề",
    difficulty: "Thông hiểu",
    question: "Cho $P = 1, Q = 0, R = 1$. Chân trị của biểu thức logic: $(P \\lor Q) \\leftrightarrow (R \\land P)$ là:",
    options: [
      "1 (Đúng)",
      "0 (Sai)",
      "Không xác định",
      "Phụ thuộc vào Q"
    ],
    correctAnswer: 0,
    explanation: "Ta tính: P ∨ Q = 1 ∨ 0 = 1. Tiếp theo: R ∧ P = 1 ∧ 1 = 1. Do đó: 1 ↔ 1 = 1 (Đúng)."
  },
  {
    id: "c1_l1_q11",
    chapterId: "c1",
    lessonId: "l1_1",
    lessonTitle: "§1 Pháp tính mệnh đề",
    difficulty: "Vận dụng",
    question: "Một mệnh đề có 5 biến logic độc lập. Bảng chân trị của mệnh đề này có bao nhiêu dòng?",
    options: [
      "10 dòng",
      "16 dòng",
      "32 dòng",
      "64 dòng"
    ],
    correctAnswer: 2,
    explanation: "Số dòng của bảng chân trị n biến là 2^n. Với n = 5 biến, số dòng là 2^5 = 32 dòng."
  },
  {
    id: "c1_l1_q12",
    chapterId: "c1",
    lessonId: "l1_1",
    lessonTitle: "§1 Pháp tính mệnh đề",
    difficulty: "Thông hiểu",
    question: "Phủ định của mệnh đề: 'Hôm nay trời mưa và tôi không mang áo mưa' là:",
    options: [
      "Hôm nay trời không mưa và tôi mang áo mưa",
      "Hôm nay trời không mưa hoặc tôi mang áo mưa",
      "Nếu hôm nay trời mưa thì tôi mang áo mưa",
      "Hôm nay trời mưa hoặc tôi mang áo mưa"
    ],
    correctAnswer: 1,
    explanation: "Mệnh đề có dạng p ∧ ¬q. Phủ định là ¬(p ∧ ¬q) ≡ ¬p ∨ q: 'Hôm nay trời không mưa hoặc tôi mang áo mưa'."
  },
  {
    id: "c1_l1_q13",
    chapterId: "c1",
    lessonId: "l1_1",
    lessonTitle: "§1 Pháp tính mệnh đề",
    difficulty: "Nhận biết",
    question: "Trong logic mệnh đề, thứ tự ưu tiên thực hiện các phép nối khi không có dấu ngoặc là:",
    options: [
      "¬ trước, rồi đến ∧, tiếp đến ∨, sau đó là → và cuối cùng là ↔",
      "→ trước, rồi đến ↔, ∧, ∨, ¬",
      "∧ và ∨ trước, rồi đến ¬, →, ↔",
      "Tất cả các phép nối có mức ưu tiên ngang nhau"
    ],
    correctAnswer: 0,
    explanation: "Thứ tự ưu tiên chuẩn mực quốc tế: Phủ định (¬) có mức ưu tiên cao nhất, sau đó đến Hội (∧), Tuyển (∨), Kéo theo (→), và cuối cùng là Kéo theo hai chiều (↔)."
  },
  {
    id: "c1_l1_q14",
    chapterId: "c1",
    lessonId: "l1_1",
    lessonTitle: "§1 Pháp tính mệnh đề",
    difficulty: "Thông hiểu",
    question: "Mệnh đề: 'Mặt trời mọc ở hướng Tây khi và chỉ khi 1 + 1 = 3' có chân trị là:",
    options: [
      "Đúng (1)",
      "Sai (0)",
      "Không xác định",
      "Mâu thuẫn"
    ],
    correctAnswer: 0,
    explanation: "Đặt p: 'Mặt trời mọc ở hướng Tây' (sai, chân trị 0), q: '1 + 1 = 3' (sai, chân trị 0). Ta có: 0 ↔ 0 = 1 (Đúng)."
  },
  {
    id: "c1_l1_q15",
    chapterId: "c1",
    lessonId: "l1_1",
    lessonTitle: "§1 Pháp tính mệnh đề",
    difficulty: "Vận dụng",
    question: "Biểu thức $(p \\land q) \\lor (\\neg p \\land \\neg q)$ nhận giá trị 1 khi và chỉ khi:",
    options: [
      "p và q có cùng chân trị (tương đương logic với p ↔ q)",
      "p và q khác chân trị",
      "p = 1, q = 0",
      "p = 0, q = 1"
    ],
    correctAnswer: 0,
    explanation: "(p ∧ q) ∨ (¬p ∧ ¬q) nhận 1 khi cả hai cùng đúng (p=1, q=1) hoặc cả hai cùng sai (p=0, q=0). Đây chính là dạng chuẩn tắc tuyển của mệnh đề tương đương p ↔ q."
  },

  // -------------------------------------------------------------------------
  // §2: PHÉP KÉO THEO & LUẬT PHẢN ĐẢO (BỔ SUNG CHUYÊN SÂU ĐẦY ĐỦ)
  // -------------------------------------------------------------------------
  {
    id: "c1_l2_q1",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Nhận biết",
    question: "Mệnh đề kéo theo $p \\rightarrow q$ chỉ nhận chân trị Sai ($0$) trong trường hợp duy nhất nào?",
    options: [
      "p = 0 và q = 0",
      "p = 1 và q = 0",
      "p = 0 và q = 1",
      "p = 1 và q = 1"
    ],
    correctAnswer: 1,
    explanation: "Theo định nghĩa bảng chân trị của phép kéo theo, p → q chỉ sai duy nhất khi tiền đề p đúng mà kết luận q sai (1 → 0 = 0). Khi tiền đề p sai (0), mệnh đề luôn đúng."
  },
  {
    id: "c1_l2_q2",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Nhận biết",
    question: "Luật phản đảo (Contrapositive Law) khẳng định mệnh đề $p \\rightarrow q$ luôn tương đương logic với:",
    options: [
      "q → p",
      "¬p → ¬q",
      "¬q → ¬p",
      "¬p ∨ ¬q"
    ],
    correctAnswer: 2,
    explanation: "Luật phản đảo phát biểu rằng: p → q ≡ ¬q → ¬p. Mệnh đề gốc luôn luôn có cùng giá trị chân lý với mệnh đề phản đảo của nó."
  },
  {
    id: "c1_l2_q3",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Thông hiểu",
    question: "Mệnh đề đảo (Converse) và mệnh đề nghịch đảo (Inverse) của $p \\rightarrow q$ lần lượt là:",
    options: [
      "q → p và ¬p → ¬q",
      "¬q → ¬p và q → p",
      "¬p → ¬q và ¬q → ¬p",
      "q → p và ¬q → ¬p"
    ],
    correctAnswer: 0,
    explanation: "Từ mệnh đề gốc p → q: Mệnh đề đảo là q → p; Mệnh đề nghịch đảo là ¬p → ¬q; Mệnh đề phản đảo là ¬q → ¬p."
  },
  {
    id: "c1_l2_q4",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Thông hiểu",
    question: "Mối quan hệ chân lý giữa mệnh đề đảo ($q \\rightarrow p$) và mệnh đề nghịch đảo ($\\neg p \\rightarrow \\neg q$) là:",
    options: [
      "Chúng là cặp mệnh đề phản đảo của nhau nên luôn luôn tương đương logic",
      "Chúng luôn luôn có chân trị trái ngược nhau",
      "Chúng không có quan hệ logic nào",
      "Chúng luôn là hằng sai"
    ],
    correctAnswer: 0,
    explanation: "Phản đảo của (q → p) chính là ¬p → ¬q. Vì một mệnh đề luôn tương đương logic với phản đảo của nó, nên mệnh đề đảo và mệnh đề nghịch đảo luôn luôn có cùng chân trị."
  },
  {
    id: "c1_l2_q5",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Thông hiểu",
    question: "Mệnh đề phản đảo của $p \\rightarrow \\neg q$ là:",
    options: [
      "q → ¬p",
      "¬q → p",
      "¬p → q",
      "q → p"
    ],
    correctAnswer: 0,
    explanation: "Áp dụng định nghĩa: Phản đảo của A → B là ¬B → ¬A. Với A = p, B = ¬q: ¬(¬q) → ¬p ≡ q → ¬p."
  },
  {
    id: "c1_l2_q6",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Thông hiểu",
    question: "Phát biểu nào sau đây diễn đạt đúng mệnh đề phản đảo của câu: 'Nếu số tự nhiên n chia hết cho 4 thì n là số chẵn'?",
    options: [
      "Nếu số tự nhiên n là số chẵn thì n chia hết cho 4",
      "Nếu số tự nhiên n không phải là số chẵn (tức n lẻ) thì n không chia hết cho 4",
      "Nếu số tự nhiên n không chia hết cho 4 thì n là số lẻ",
      "Số tự nhiên n chia hết cho 4 và n không phải số chẵn"
    ],
    correctAnswer: 1,
    explanation: "Mệnh đề gốc có dạng p → q với p: 'n chia hết cho 4', q: 'n chẵn'. Mệnh đề phản đảo là ¬q → ¬p: 'Nếu n không phải là số chẵn (tức n lẻ) thì n không chia hết cho 4'."
  },
  {
    id: "c1_l2_q7",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Nhận biết",
    question: "Phép kéo theo $p \\rightarrow q$ có thể viết lại dưới dạng chỉ gồm phép phủ định và phép tuyển là:",
    options: [
      "¬p ∨ q",
      "p ∨ ¬q",
      "¬p ∧ q",
      "p ∧ ¬q"
    ],
    correctAnswer: 0,
    explanation: "Định lý tương đương cơ bản của phép kéo theo: p → q ≡ ¬p ∨ q."
  },
  {
    id: "c1_l2_q8",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Nhận biết",
    question: "Phủ định của mệnh đề kéo theo $\\neg(p \\rightarrow q)$ tương đương với:",
    options: [
      "p ∧ ¬q",
      "¬p ∨ q",
      "¬p ∧ q",
      "p → ¬q"
    ],
    correctAnswer: 0,
    explanation: "Ta có: ¬(p → q) ≡ ¬(¬p ∨ q) ≡ ¬(¬p) ∧ ¬q ≡ p ∧ ¬q."
  },
  {
    id: "c1_l2_q9",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Thông hiểu",
    question: "Luật xuất nhập phát biểu đẳng thức logic nào sau đây?",
    options: [
      "(p ∧ q) → r ≡ p → (q → r)",
      "(p ∨ q) → r ≡ p → (q ∨ r)",
      "(p → q) → r ≡ p → (q ∧ r)",
      "p → (q ∧ r) ≡ (p → q) ∧ r"
    ],
    correctAnswer: 0,
    explanation: "Luật xuất nhập (Exportation Law) khẳng định: (p ∧ q) → r ≡ p → (q → r). Chứng minh: (p ∧ q) → r ≡ ¬(p ∧ q) ∨ r ≡ ¬p ∨ ¬q ∨ r ≡ ¬p ∨ (¬q ∨ r) ≡ p → (q → r)."
  },
  {
    id: "c1_l2_q10",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Thông hiểu",
    question: "Biểu thức $(p \\rightarrow q) \\land (p \\rightarrow r)$ tương đương logic với biểu thức nào?",
    options: [
      "p → (q ∧ r)",
      "p → (q ∨ r)",
      "(p ∧ q) → r",
      "(p ∨ q) → r"
    ],
    correctAnswer: 0,
    explanation: "(p → q) ∧ (p → r) ≡ (¬p ∨ q) ∧ (¬p ∨ r) ≡ ¬p ∨ (q ∧ r) ≡ p → (q ∧ r)."
  },
  {
    id: "c1_l2_q11",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Thông hiểu",
    question: "Biểu thức $(p \\rightarrow r) \\lor (q \\rightarrow r)$ tương đương logic với biểu thức nào?",
    options: [
      "(p ∧ q) → r",
      "(p ∨ q) → r",
      "p → (q ∨ r)",
      "(p → q) → r"
    ],
    correctAnswer: 0,
    explanation: "(p → r) ∨ (q → r) ≡ (¬p ∨ r) ∨ (¬q ∨ r) ≡ (¬p ∨ ¬q) ∨ r ≡ ¬(p ∧ q) ∨ r ≡ (p ∧ q) → r."
  },
  {
    id: "c1_l2_q12",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Thông hiểu",
    question: "Biểu thức $(p \\rightarrow r) \\land (q \\rightarrow r)$ tương đương logic với biểu thức nào?",
    options: [
      "(p ∨ q) → r",
      "(p ∧ q) → r",
      "p ∧ q ∧ r",
      "(p → q) ∧ r"
    ],
    correctAnswer: 0,
    explanation: "(p → r) ∧ (q → r) ≡ (¬p ∨ r) ∧ (¬q ∨ r) ≡ (¬p ∧ ¬q) ∨ r ≡ ¬(p ∨ q) ∨ r ≡ (p ∨ q) → r."
  },
  {
    id: "c1_l2_q13",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Thông hiểu",
    question: "Biểu thức $(p \\rightarrow q) \\lor (p \\rightarrow r)$ tương đương logic với biểu thức nào?",
    options: [
      "p → (q ∨ r)",
      "p → (q ∧ r)",
      "(p ∧ q) → r",
      "(p ∨ q) → r"
    ],
    correctAnswer: 0,
    explanation: "(p → q) ∨ (p → r) ≡ (¬p ∨ q) ∨ (¬p ∨ r) ≡ ¬p ∨ (q ∨ r) ≡ p → (q ∨ r)."
  },
  {
    id: "c1_l2_q14",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Vận dụng",
    question: "Biểu thức $A = (p \\rightarrow q) \\lor (q \\rightarrow p)$ luôn nhận giá trị chân lý nào?",
    options: [
      "Luôn bằng 1 (Hằng đúng - Tautology)",
      "Luôn bằng 0 (Mâu thuẫn)",
      "Phụ thuộc vào giá trị của p",
      "Phụ thuộc vào giá trị của q"
    ],
    correctAnswer: 0,
    explanation: "Biến đổi: (¬p ∨ q) ∨ (¬q ∨ p) ≡ (¬p ∨ p) ∨ (q ∨ ¬q) ≡ 1 ∨ 1 ≡ 1. Do đó đây là một hằng đúng."
  },
  {
    id: "c1_l2_q15",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Thông hiểu",
    question: "Khẳng định nào sau đây là hằng đúng?",
    options: [
      "p → (q → p)",
      "(p ∧ q) → p",
      "p ∨ (p → q)",
      "Tất cả các khẳng định trên đều là hằng đúng"
    ],
    correctAnswer: 3,
    explanation: "1) p → (¬q ∨ p) ≡ ¬p ∨ ¬q ∨ p ≡ (¬p ∨ p) ∨ ¬q ≡ 1. 2) ¬(p ∧ q) ∨ p ≡ ¬p ∨ ¬q ∨ p ≡ 1. 3) p ∨ (¬p ∨ q) ≡ (p ∨ ¬p) ∨ q ≡ 1. Cả 3 khẳng định đều là hằng đúng."
  },
  {
    id: "c1_l2_q16",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Vận dụng",
    question: "Cho mệnh đề: $p \\rightarrow (q \\lor r)$ nhận giá trị Sai ($F$). Chân trị của $p, q, r$ là:",
    options: [
      "p = 1, q = 0, r = 0",
      "p = 0, q = 1, r = 1",
      "p = 1, q = 1, r = 0",
      "p = 1, q = 0, r = 1"
    ],
    correctAnswer: 0,
    explanation: "Phép kéo theo A → B nhận 0 khi A = 1 và B = 0. Do đó p = 1 và q ∨ r = 0 <=> q = 0, r = 0. Vậy p = 1, q = 0, r = 0."
  },
  {
    id: "c1_l2_q17",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Vận dụng",
    question: "Mệnh đề phản đảo của mệnh đề phức hợp $(p \\land q) \\rightarrow r$ là:",
    options: [
      "¬r → (¬p ∨ ¬q)",
      "¬r → (¬p ∧ ¬q)",
      "r → (p ∧ q)",
      "(¬p ∨ ¬q) → ¬r"
    ],
    correctAnswer: 0,
    explanation: "Phản đảo của A → B là ¬B → ¬A. Với A = p ∧ q, B = r: ¬r → ¬(p ∧ q) ≡ ¬r → (¬p ∨ ¬q) theo luật De Morgan."
  },
  {
    id: "c1_l2_q18",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Thông hiểu",
    question: "Phát biểu 'P là điều kiện đủ của Q' và 'P chỉ khi Q' lần lượt tương ứng với các công thức logic nào?",
    options: [
      "P → Q và P → Q",
      "Q → P và P → Q",
      "P → Q và Q → P",
      "P ↔ Q và P → Q"
    ],
    correctAnswer: 0,
    explanation: "Trong toán học: 'P là điều kiện đủ để có Q' có nghĩa là nếu P xảy ra thì chắc chắn Q xảy ra (P → Q). 'P chỉ khi Q' (P only if Q) cũng đồng nghĩa với việc nếu P đúng thì bắt buộc Q phải đúng (P → Q)."
  },
  {
    id: "c1_l2_q19",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Vận dụng",
    question: "Rút gọn biểu thức $E = (p \\rightarrow q) \\land (q \\rightarrow \\neg p)$:",
    options: [
      "¬p",
      "¬q",
      "p ∧ ¬q",
      "0"
    ],
    correctAnswer: 0,
    explanation: "(¬p ∨ q) ∧ (¬q ∨ ¬p) ≡ ¬p ∨ (q ∧ ¬q) ≡ ¬p ∨ 0 ≡ ¬p."
  },
  {
    id: "c1_l2_q20",
    chapterId: "c1",
    lessonId: "l1_2",
    lessonTitle: "§2 Phép kéo theo & Luật phản đảo",
    difficulty: "Vận dụng",
    question: "Biết $(p \\land \\neg q) \\rightarrow (r \\lor s)$ nhận chân trị Sai ($F$). Khẳng định nào sau đây chắc chắn đúng?",
    options: [
      "r = 0 và s = 0",
      "p = 0",
      "q = 1",
      "p = 1 và q = 1"
    ],
    correctAnswer: 0,
    explanation: "Tiền đề (p ∧ ¬q) = 1 => p = 1, q = 0. Kết luận (r ∨ s) = 0 => r = 0 và s = 0. Do đó khẳng định chắc chắn đúng là r = 0 và s = 0."
  },

  // -------------------------------------------------------------------------
  // §3: 10 QUY LUẬT LOGIC CƠ BẢN (KHÔNG CÓ XOR)
  // -------------------------------------------------------------------------
  {
    id: "c1_l3_q1",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Nhận biết",
    question: "Theo quy tắc De Morgan, phủ định của mệnh đề $p \\land q$ tương đương với:",
    options: [
      "¬p ∨ ¬q",
      "¬p ∧ ¬q",
      "p ∨ q",
      "¬p → ¬q"
    ],
    correctAnswer: 0,
    explanation: "Quy tắc De Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q và ¬(p ∨ q) ≡ ¬p ∧ ¬q."
  },
  {
    id: "c1_l3_q2",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Nhận biết",
    question: "Đẳng thức logic nào sau đây biểu diễn quy luật Bù trừ (Complement Laws)?",
    options: [
      "p ∨ ¬p ≡ 1 và p ∧ ¬p ≡ 0",
      "p ∨ 0 ≡ p và p ∧ 1 ≡ p",
      "p ∨ 1 ≡ 1 và p ∧ 0 ≡ 0",
      "¬(¬p) ≡ p"
    ],
    correctAnswer: 0,
    explanation: "Luật về phần tử bù: Mệnh đề tuyển với phủ định của nó là hằng đúng (p ∨ ¬p ≡ 1), và hội với phủ định của nó là mâu thuẫn (p ∧ ¬p ≡ 0)."
  },
  {
    id: "c1_l3_q3",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Nhận biết",
    question: "Đẳng thức logic nào dưới đây là biểu diễn của quy luật Thống trị / Nuốt (Domination Laws)?",
    options: [
      "p ∨ 1 ≡ 1 và p ∧ 0 ≡ 0",
      "p ∨ 0 ≡ p và p ∧ 1 ≡ p",
      "p ∨ p ≡ p và p ∧ p ≡ p",
      "p ∨ (p ∧ q) ≡ p"
    ],
    correctAnswer: 0,
    explanation: "Luật thống trị: p ∨ 1 ≡ 1 và p ∧ 0 ≡ 0."
  },
  {
    id: "c1_l3_q4",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Nhận biết",
    question: "Áp dụng luật hấp thụ (Absorption Law), mệnh đề $p \\lor (p \\land q)$ tương đương với:",
    options: [
      "p",
      "q",
      "p ∨ q",
      "1"
    ],
    correctAnswer: 0,
    explanation: "Theo Luật hấp thụ: p ∨ (p ∧ q) ≡ p và p ∧ (p ∨ q) ≡ p."
  },
  {
    id: "c1_l3_q5",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Thông hiểu",
    question: "Biểu thức rút gọn tối giản của $E = p \\lor ( \\neg p \\land q )$ là:",
    options: [
      "p ∨ q",
      "p ∧ q",
      "¬p ∨ q",
      "p"
    ],
    correctAnswer: 0,
    explanation: "Dùng luật phân bố: p ∨ (¬p ∧ q) ≡ (p ∨ ¬p) ∧ (p ∨ q) ≡ 1 ∧ (p ∨ q) ≡ p ∨ q."
  },
  {
    id: "c1_l3_q6",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Thông hiểu",
    question: "Biểu thức rút gọn tối giản của $E = p \\land ( \\neg p \\lor q )$ là:",
    options: [
      "p ∧ q",
      "p ∨ q",
      "¬p ∧ q",
      "q"
    ],
    correctAnswer: 0,
    explanation: "Dùng luật phân bố: p ∧ (¬p ∨ q) ≡ (p ∧ ¬p) ∨ (p ∧ q) ≡ 0 ∨ (p ∧ q) ≡ p ∧ q."
  },
  {
    id: "c1_l3_q7",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Thông hiểu",
    question: "Dạng rút gọn của $E = (p \\land q) \\lor (p \\land \\neg q)$ là:",
    options: [
      "p",
      "q",
      "¬p",
      "1"
    ],
    correctAnswer: 0,
    explanation: "Đặt p ra ngoài theo luật phân bố: p ∧ (q ∨ ¬q) ≡ p ∧ 1 ≡ p."
  },
  {
    id: "c1_l3_q8",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Thông hiểu",
    question: "Dạng rút gọn của $E = (p \\lor q) \\land (p \\lor \\neg q)$ là:",
    options: [
      "p",
      "q",
      "¬q",
      "0"
    ],
    correctAnswer: 0,
    explanation: "Phân bố của phép tuyển đối với hội: p ∨ (q ∧ ¬q) ≡ p ∨ 0 ≡ p."
  },
  {
    id: "c1_l3_q9",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Vận dụng",
    question: "Rút gọn biểu thức $A = \\neg [ \\neg (p \\land q) \\rightarrow \\neg q ]$:",
    options: [
      "¬p ∧ q",
      "p ∧ ¬q",
      "¬p ∧ ¬q",
      "0"
    ],
    correctAnswer: 0,
    explanation: "Biến đổi: ¬(p ∧ q) → ¬q ≡ ¬(¬(p ∧ q)) ∨ ¬q ≡ (p ∧ q) ∨ ¬q ≡ (p ∨ ¬q) ∧ (q ∨ ¬q) ≡ p ∨ ¬q. Lấy phủ định ngoài: ¬(p ∨ ¬q) ≡ ¬p ∧ q."
  },
  {
    id: "c1_l3_q10",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Thông hiểu",
    question: "Đơn giản hóa biểu thức $A = (p \\land q) \\lor (\\neg p \\land q) \\lor (p \\land \\neg q)$:",
    options: [
      "p ∨ q",
      "p ∧ q",
      "¬p ∨ ¬q",
      "1"
    ],
    correctAnswer: 0,
    explanation: "[(p ∧ q) ∨ (¬p ∧ q)] ∨ (p ∧ ¬q) ≡ [(p ∨ ¬p) ∧ q] ∨ (p ∧ ¬q) ≡ q ∨ (p ∧ ¬q) ≡ (q ∨ p) ∧ (q ∨ ¬q) ≡ p ∨ q."
  },
  {
    id: "c1_l3_q11",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Vận dụng",
    question: "Phủ định của biểu thức $p \\rightarrow (q \\land \\neg r)$ là:",
    options: [
      "p ∧ (¬q ∨ r)",
      "¬p ∨ (q ∧ ¬r)",
      "¬p ∧ (q ∨ ¬r)",
      "p → (¬q ∨ r)"
    ],
    correctAnswer: 0,
    explanation: "¬[p → (q ∧ ¬r)] ≡ p ∧ ¬(q ∧ ¬r) ≡ p ∧ (¬q ∨ r)."
  },
  {
    id: "c1_l3_q12",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Thông hiểu",
    question: "Biểu thức $[(p \\rightarrow q) \\rightarrow q]$ tương đương logic với:",
    options: [
      "p ∨ q",
      "p ∧ q",
      "¬p ∨ q",
      "p → q"
    ],
    correctAnswer: 0,
    explanation: "(p → q) → q ≡ ¬(¬p ∨ q) ∨ q ≡ (p ∧ ¬q) ∨ q ≡ (p ∨ q) ∧ (¬q ∨ q) ≡ p ∨ q."
  },
  {
    id: "c1_l3_q13",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Nhận biết",
    question: "Rút gọn biểu thức $M = (p \\lor q \\lor r) \\land (p \\lor q \\lor \\neg r)$:",
    options: [
      "p ∨ q",
      "p ∧ q",
      "r ∨ ¬r",
      "p ∨ r"
    ],
    correctAnswer: 0,
    explanation: "Đặt X = p ∨ q. Biểu thức có dạng (X ∨ r) ∧ (X ∨ ¬r) ≡ X ∨ (r ∧ ¬r) ≡ X ∨ 0 ≡ X ≡ p ∨ q."
  },
  {
    id: "c1_l3_q14",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Thông hiểu",
    question: "Biểu thức $p \\land (\\neg p \\lor q \\lor (q \\rightarrow p))$ tương đương với:",
    options: [
      "p",
      "q",
      "0",
      "¬p"
    ],
    correctAnswer: 0,
    explanation: "Để ý ¬p ∨ (q → p) ≡ ¬p ∨ ¬q ∨ p ≡ (¬p ∨ p) ∨ ¬q ≡ 1 ∨ ¬q ≡ 1. Do đó biểu thức trong ngoặc bằng 1. Ta được p ∧ 1 ≡ p."
  },
  {
    id: "c1_l3_q15",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Vận dụng",
    question: "Rút gọn biểu thức $K = (p \\land q) \\lor (\\neg p \\land r) \\lor (q \\land r)$ theo quy tắc Đồng thuận (Consensus Theorem):",
    options: [
      "(p ∧ q) ∨ (¬p ∧ r)",
      "(p ∧ q) ∨ (q ∧ r)",
      "(¬p ∧ r) ∨ (q ∧ r)",
      "p ∨ q ∨ r"
    ],
    correctAnswer: 0,
    explanation: "Định lý đồng thuận: (x ∧ y) ∨ (¬x ∧ z) ∨ (y ∧ z) ≡ (x ∧ y) ∨ (¬x ∧ z). Số hạng (q ∧ r) là số hạng đồng thuận dư thừa bị triệt tiêu hoàn toàn."
  },
  {
    id: "c1_l3_q16",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Nhận biết",
    question: "Dạng chuẩn tắc hội liên hoàn (CNF) của $p \\leftrightarrow q$ là:",
    options: [
      "(¬p ∨ q) ∧ (p ∨ ¬q)",
      "(p ∧ q) ∨ (¬p ∧ ¬q)",
      "(¬p ∨ ¬q) ∧ (p ∨ q)",
      "(p ∨ q) ∧ (¬p ∨ ¬q)"
    ],
    correctAnswer: 0,
    explanation: "CNF là tích của các tổng: p ↔ q ≡ (p → q) ∧ (q → p) ≡ (¬p ∨ q) ∧ (¬q ∨ p) ≡ (¬p ∨ q) ∧ (p ∨ ¬q)."
  },
  {
    id: "c1_l3_q17",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Nhận biết",
    question: "Dạng chuẩn tắc tuyển liên hoàn (DNF) của $p \\leftrightarrow q$ là:",
    options: [
      "(p ∧ q) ∨ (¬p ∧ ¬q)",
      "(¬p ∨ q) ∧ (p ∨ ¬q)",
      "(p ∧ ¬q) ∨ (¬p ∧ q)",
      "(p ∨ ¬q) ∧ (¬p ∨ q)"
    ],
    correctAnswer: 0,
    explanation: "DNF là tổng của các tích: p ↔ q nhận 1 khi (p=1, q=1) hoặc (p=0, q=0), tương ứng là (p ∧ q) ∨ (¬p ∧ ¬q)."
  },
  {
    id: "c1_l3_q18",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Thông hiểu",
    question: "Rút gọn mệnh đề $E = (p \\rightarrow r) \\land (q \\rightarrow r) \\land (p \\lor q)$:",
    options: [
      "r",
      "p ∧ q",
      "p ∨ q",
      "p → r"
    ],
    correctAnswer: 0,
    explanation: "(p → r) ∧ (q → r) ≡ (p ∨ q) → r. Kết hợp với tiền đề (p ∨ q) ta suy ra kết quả tối giản là r."
  },
  {
    id: "c1_l3_q19",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Thông hiểu",
    question: "Mệnh đề nào sau đây là một mâu thuẫn (luôn nhận giá trị 0)?",
    options: [
      "(p ∨ q) ∧ (¬p ∧ ¬q)",
      "(p → q) ∧ (p ∧ ¬q)",
      "[p ∧ (p → q)] ∧ ¬q",
      "Tất cả các phương án trên đều là mâu thuẫn."
    ],
    correctAnswer: 3,
    explanation: "A: (p ∨ q) ∧ ¬(p ∨ q) ≡ 0. B: (p → q) ∧ ¬(p → q) ≡ 0. C: (p ∧ q) ∧ ¬q ≡ 0. Tất cả đều là mâu thuẫn."
  },
  {
    id: "c1_l3_q20",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Thông hiểu",
    question: "Biểu thức logic nào dưới đây là một hằng đúng (tautology)?",
    options: [
      "[(p ∨ q) ∧ ¬p] → q",
      "[(p ∨ q) ∧ p] → ¬q",
      "(p → q) → (q → p)",
      "(p ∧ q) → (p ∨ r → q)"
    ],
    correctAnswer: 0,
    explanation: "[(p ∨ q) ∧ ¬p] → q ≡ (q ∧ ¬p) → q ≡ ¬(q ∧ ¬p) ∨ q ≡ ¬q ∨ p ∨ q ≡ 1 ∨ p ≡ 1 (Hằng đúng)."
  },
  {
    id: "c1_l3_q21",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Thông hiểu",
    question: "Đẳng thức logic nào sau đây biểu diễn quy luật Lũy đẳng (Idempotent Laws)?",
    options: [
      "p ∨ p ≡ p và p ∧ p ≡ p",
      "p ∨ 0 ≡ p và p ∧ 1 ≡ p",
      "p ∨ ¬p ≡ 1 và p ∧ ¬p ≡ 0",
      "p ∨ 1 ≡ 1 và p ∧ 0 ≡ 0"
    ],
    correctAnswer: 0,
    explanation: "Luật lũy đẳng nêu rõ: Tuyển của một biến với chính nó bằng chính nó (p ∨ p ≡ p), và hội của một biến với chính nó bằng chính nó (p ∧ p ≡ p)."
  },
  {
    id: "c1_l3_q22",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Thông hiểu",
    question: "Đẳng thức logic nào sau đây biểu diễn quy luật Trung hòa / Đồng nhất (Identity Laws)?",
    options: [
      "p ∨ 0 ≡ p và p ∧ 1 ≡ p",
      "p ∨ 1 ≡ 1 và p ∧ 0 ≡ 0",
      "p ∨ p ≡ p và p ∧ p ≡ p",
      "p ∨ ¬p ≡ 1 và p ∧ ¬p ≡ 0"
    ],
    correctAnswer: 0,
    explanation: "Luật trung hòa (phần tử đồng nhất): 0 là phần tử trung hòa đối với phép tuyển (p ∨ 0 ≡ p), và 1 là phần tử trung hòa đối với phép hội (p ∧ 1 ≡ p)."
  },
  {
    id: "c1_l3_q23",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Vận dụng",
    question: "Rút gọn biểu thức $E = (p \\lor q) \\land (\\neg p \\lor q) \\land (p \\lor \\neg q)$:",
    options: [
      "p ∧ q",
      "p ∨ q",
      "p",
      "q"
    ],
    correctAnswer: 0,
    explanation: "Nhóm 1 và 2: (p ∨ q) ∧ (¬p ∨ q) ≡ (p ∧ ¬p) ∨ q ≡ 0 ∨ q ≡ q. Khi đó biểu thức trở thành: q ∧ (p ∨ ¬q) ≡ (q ∧ p) ∨ (q ∧ ¬q) ≡ (p ∧ q) ∨ 0 ≡ p ∧ q."
  },
  {
    id: "c1_l3_q24",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Vận dụng",
    question: "Biểu thức $\\neg (p \\leftrightarrow q)$ tương đương với dạng nào chỉ dùng hội và tuyển?",
    options: [
      "(p ∧ ¬q) ∨ (¬p ∧ q)",
      "(p ∨ ¬q) ∧ (¬p ∨ q)",
      "(p ∧ q) ∨ (¬p ∧ ¬q)",
      "(¬p ∨ ¬q) ∧ (p ∨ q)"
    ],
    correctAnswer: 0,
    explanation: "p ↔ q nhận 1 khi p, q cùng chân trị; do đó phủ định của nó nhận 1 khi p, q khác chân trị (p=1, q=0 hoặc p=0, q=1), tức là (p ∧ ¬q) ∨ (¬p ∧ q)."
  },
  {
    id: "c1_l3_q25",
    chapterId: "c1",
    lessonId: "l1_3",
    lessonTitle: "§3 10 Quy luật Logic cơ bản",
    difficulty: "Vận dụng",
    question: "Tìm mệnh đề tương đương logic với $\\neg p \\rightarrow (q \\rightarrow r)$:",
    options: [
      "q → (p ∨ r)",
      "(p ∨ ¬q) ∨ r",
      "¬(p ∨ r) → ¬q",
      "Cả A, B, C đều đúng."
    ],
    correctAnswer: 3,
    explanation: "¬p → (q → r) ≡ p ∨ (¬q ∨ r) ≡ (p ∨ ¬q) ∨ r (B đúng). Biến đổi tiếp: ¬q ∨ (p ∨ r) ≡ q → (p ∨ r) (A đúng). Lấy phản đảo: ¬(p ∨ r) → ¬q (C đúng). Cả 3 phương án đều đúng."
  },

  // -------------------------------------------------------------------------
  // §4: CÁC QUY TẮC SUY DIỄN HỢP LÝ & PHƯƠNG PHÁP CHỨNG MINH
  // -------------------------------------------------------------------------
  {
    id: "c1_l4_q1",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Nhận biết",
    question: "Quy tắc suy diễn Modus Ponens (phương pháp khẳng định) có dạng sơ đồ là:",
    options: [
      "p → q, p ∴ q",
      "p → q, ¬q ∴ ¬p",
      "p → q, q → r ∴ p → r",
      "p ∨ q, ¬p ∴ q"
    ],
    correctAnswer: 0,
    explanation: "Modus Ponens: Từ giả thiết p → q và khẳng định p, suy ra kết luận q."
  },
  {
    id: "c1_l4_q2",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Nhận biết",
    question: "Quy tắc suy diễn Modus Tollens (phương pháp phủ định) có dạng sơ đồ là:",
    options: [
      "p → q, ¬q ∴ ¬p",
      "p → q, p ∴ q",
      "p → q, ¬p ∴ ¬q",
      "p ∨ q, ¬p ∴ q"
    ],
    correctAnswer: 0,
    explanation: "Modus Tollens: Từ giả thiết p → q và phủ định kết luận ¬q, suy ra phủ định tiền đề ¬p."
  },
  {
    id: "c1_l4_q3",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Nhận biết",
    question: "Quy tắc Tam đoạn luận giả thiết (Hypothetical Syllogism) cho phép kết luận điều gì từ hai tiền đề: $p \\rightarrow q$ và $q \\rightarrow r$?",
    options: [
      "p → r",
      "r → p",
      "p ∨ r",
      "p ∧ r"
    ],
    correctAnswer: 0,
    explanation: "Tam đoạn luận giả thiết dựa trên tính chất bắc cầu: Từ p → q và q → r, suy ra p → r."
  },
  {
    id: "c1_l4_q4",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Nhận biết",
    question: "Quy tắc Tam đoạn luận rời (Disjunctive Syllogism) cho phép kết luận điều gì từ: $p \\lor q$ và $\\neg p$?",
    options: [
      "q",
      "¬q",
      "p",
      "0"
    ],
    correctAnswer: 0,
    explanation: "Tam đoạn luận rời: Có 2 trường hợp p hoặc q xảy ra; nếu đã biết p sai (¬p) thì trường hợp còn lại q bắt buộc phải đúng."
  },
  {
    id: "c1_l4_q5",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Thông hiểu",
    question: "Xét suy luận: 'Nếu hôm nay trời mưa thì tôi ở nhà. Hôm nay trời mưa. Vậy tôi ở nhà.' Suy luận này sử dụng quy tắc nào?",
    options: [
      "Modus Ponens",
      "Modus Tollens",
      "Tam đoạn luận giả thiết",
      "Phép giải (Resolution)"
    ],
    correctAnswer: 0,
    explanation: "Tiền đề: p → q và p. Kết luận: q. Đây là Modus Ponens."
  },
  {
    id: "c1_l4_q6",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Thông hiểu",
    question: "Xét suy luận: 'Nếu n chia hết cho 6 thì n chia hết cho 3. Số n không chia hết cho 3. Vậy số n không chia hết cho 6.' Quy tắc sử dụng là:",
    options: [
      "Modus Tollens",
      "Modus Ponens",
      "Tam đoạn luận rời",
      "Phép giải"
    ],
    correctAnswer: 0,
    explanation: "Tiền đề: p → q và ¬q. Kết luận: ¬p. Đây là Modus Tollens."
  },
  {
    id: "c1_l4_q7",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Thông hiểu",
    question: "Xét quy tắc suy diễn phép giải (Resolution): từ $p \\lor q$ và $\\neg p \\lor r$, ta suy ra được:",
    options: [
      "q ∨ r",
      "q ∧ r",
      "p ∨ r",
      "¬q ∨ r"
    ],
    correctAnswer: 0,
    explanation: "Quy tắc phép giải (Resolution): (p ∨ q) ∧ (¬p ∨ r) suy ra q ∨ r (triệt tiêu cặp biến đối ngẫu p và ¬p)."
  },
  {
    id: "c1_l4_q8",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Thông hiểu",
    question: "Lập luận sau mắc lỗi gì?\n'Nếu một số tự nhiên chia hết cho 4 thì nó chia hết cho 2. Số 10 chia hết cho 2. Vậy số 10 chia hết cho 4.'",
    options: [
      "Ngụy biện khẳng định kết luận (Affirming the consequent).",
      "Ngụy biện phủ định tiền đề (Denying the antecedent).",
      "Ngụy biện tam đoạn luận rời.",
      "Lập luận hợp lý."
    ],
    correctAnswer: 0,
    explanation: "Sơ đồ: p → q, q ∴ p. Đây là lỗi ngụy biện khẳng định kết luận (Affirming the consequent)."
  },
  {
    id: "c1_l4_q9",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Thông hiểu",
    question: "Lập luận sau mắc lỗi gì?\n'Nếu bạn đạt điểm A môn Toán rời rạc thì bạn chăm chỉ. Bạn không đạt điểm A. Do đó, bạn không chăm chỉ.'",
    options: [
      "Ngụy biện phủ định tiền đề (Denying the antecedent).",
      "Ngụy biện khẳng định kết luận.",
      "Ngụy biện đường dốc trơn trượt.",
      "Lập luận hoàn toàn hợp lý."
    ],
    correctAnswer: 0,
    explanation: "Sơ đồ: p → q, ¬p ∴ ¬q. Đây là lỗi ngụy biện phủ định tiền đề (Denying the antecedent)."
  },
  {
    id: "c1_l4_q10",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Vận dụng",
    question: "Cho hệ tiền đề: $p \\rightarrow q$, $q \\rightarrow r$, $\neg r$, $p \\lor s$. Kết luận hợp lý nào được rút ra?",
    options: [
      "s",
      "¬s",
      "p",
      "q"
    ],
    correctAnswer: 0,
    explanation: "1) p → q và q → r => p → r (Tam đoạn luận). 2) p → r và ¬r => ¬p (Modus Tollens). 3) p ∨ s và ¬p => s (Tam đoạn luận rời). Kết luận là s."
  },
  {
    id: "c1_l4_q11",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Thông hiểu",
    question: "Cho hệ tiền đề: $p \\lor q$, $p \\rightarrow r$, $\neg r$. Kết luận đúng là:",
    options: [
      "q",
      "p",
      "¬q",
      "r"
    ],
    correctAnswer: 0,
    explanation: "p → r và ¬r => ¬p (Modus Tollens). Kết hợp với p ∨ q => q (Tam đoạn luận rời)."
  },
  {
    id: "c1_l4_q12",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Vận dụng",
    question: "Cho các tiền đề: $\\neg p \\rightarrow (q \\rightarrow r)$, $\\neg p$, $q$. Kết luận suy ra theo Modus Ponens là:",
    options: [
      "r",
      "¬r",
      "p",
      "¬q"
    ],
    correctAnswer: 0,
    explanation: "Bước 1: ¬p → (q → r) và ¬p => q → r. Bước 2: q → r và q => r."
  },
  {
    id: "c1_l4_q13",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Vận dụng",
    question: "Cho các tiền đề: $p \\rightarrow \\neg q$, $r \\rightarrow q$, $p$. Bằng quy tắc suy diễn, ta kết luận được:",
    options: [
      "¬r",
      "r",
      "q",
      "p ∧ r"
    ],
    correctAnswer: 0,
    explanation: "p → ¬q và p => ¬q. Tiếp theo r → q và ¬q => ¬r (Modus Tollens)."
  },
  {
    id: "c1_l4_q14",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Nhận biết",
    question: "Để chứng minh mệnh đề dạng $P \\rightarrow Q$ bằng phương pháp chứng minh phản đảo (Contraposition), ta phải:",
    options: [
      "Giả sử Q sai, chứng minh P sai (tức ¬Q → ¬P).",
      "Giả sử P đúng, suy ra Q đúng.",
      "Giả sử cả P và Q đều sai.",
      "Giả sử P đúng và Q sai, dẫn đến mâu thuẫn."
    ],
    correctAnswer: 0,
    explanation: "Chứng minh phản đảo dựa trên tương đương logic P → Q ≡ ¬Q → ¬P: Giả sử ¬Q đúng (Q sai), từ đó suy ra ¬P đúng (P sai)."
  },
  {
    id: "c1_l4_q15",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Thông hiểu",
    question: "Điểm khác nhau cốt lõi giữa phương pháp chứng minh phản đảo và phương pháp chứng minh phản chứng (Contradiction) khi chứng minh định lý $P \\rightarrow Q$ là:",
    options: [
      "Phản đảo giả thiết ¬Q và chỉ hướng đến suy ra ¬P; còn phản chứng giả thiết đồng thời cả P và ¬Q để suy ra một mâu thuẫn bất kỳ loại R ∧ ¬R.",
      "Phương pháp phản chứng chỉ áp dụng được cho số học.",
      "Hai phương pháp hoàn toàn đồng nhất về mặt bản chất.",
      "Phản đảo không dùng được cho các định lý hình học."
    ],
    correctAnswer: 0,
    explanation: "Phản đảo chứng minh trực tiếp mệnh đề tương đương ¬Q → ¬P. Còn phản chứng giả thiết cả P đúng và Q sai (tức P ∧ ¬Q), sau đó tìm ra bất kỳ điều mâu thuẫn nào trong hệ thống."
  },
  {
    id: "c1_l4_q16",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Thông hiểu",
    question: "Khi chứng minh định lý 'Không tồn tại số nguyên dương lớn nhất', cách chứng minh phổ biến nhất là:",
    options: [
      "Chứng minh phản chứng (giả sử tồn tại số nguyên dương lớn nhất là M, sau đó xét M+1).",
      "Chứng minh trực tiếp.",
      "Chứng minh theo trường hợp.",
      "Quy nạp toán học."
    ],
    correctAnswer: 0,
    explanation: "Giả sử phản chứng tồn tại số nguyên lớn nhất M. Khi đó M+1 cũng là số nguyên và M+1 > M, mâu thuẫn với tính lớn nhất của M."
  },
  {
    id: "c1_l4_q17",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Vận dụng",
    question: "Để chứng minh đẳng thức $|x \\cdot y| = |x| \\cdot |y|$ với mọi số thực $x, y$, phương pháp chứng minh thích hợp nhất là:",
    options: [
      "Chứng minh vét cạn theo trường hợp (dấu của x và y: dương, âm, bằng không).",
      "Chứng minh phản đảo.",
      "Chứng minh phản chứng.",
      "Quy nạp toán học."
    ],
    correctAnswer: 0,
    explanation: "Chứng minh theo trường hợp xét các tổ hợp dấu của x và y (x >= 0, y >= 0; x >= 0, y < 0; x < 0, y >= 0; x < 0, y < 0) là cách giải tự nhiên và chặt chẽ nhất."
  },
  {
    id: "c1_l4_q18",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Nhận biết",
    question: "Cho các tiền đề: (1) $p \\rightarrow q$; (2) $r \\lor \\neg q$; (3) $\\neg r$. Kết luận nào sau đây là hợp lý?",
    options: [
      "¬p",
      "p",
      "q",
      "r"
    ],
    correctAnswer: 0,
    explanation: "r ∨ ¬q và ¬r => ¬q (Tam đoạn luận rời). p → q và ¬q => ¬p (Modus Tollens)."
  },
  {
    id: "c1_l4_q19",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Vận dụng",
    question: "Cho hệ tiền đề: $(p \\land q) \\rightarrow r$, $r \\rightarrow s$, $\\neg s$, $p$. Ta kết luận được:",
    options: [
      "¬q",
      "q",
      "s",
      "¬p"
    ],
    correctAnswer: 0,
    explanation: "r → s và ¬s => ¬r. (p ∧ q) → r và ¬r => ¬(p ∧ q) ≡ ¬p ∨ ¬q. Vì đề bài cho p đúng nên ¬p sai, suy ra ¬q."
  },
  {
    id: "c1_l4_q20",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Thông hiểu",
    question: "Xét lập luận: 'Nếu An đi học thì Bình đi học. Nếu Bình đi học thì Cường nghỉ học. An đi học. Vậy Cường nghỉ học.' Lập luận trên:",
    options: [
      "Là lập luận hợp lý (Valid).",
      "Không hợp lý (Invalid).",
      "Ngụy biện khẳng định kết luận.",
      "Thiếu tiền đề về Cường."
    ],
    correctAnswer: 0,
    explanation: "Tiền đề: A → B, B → C, A. Tam đoạn luận cho A → C. Modus Ponens kết hợp với A suy ra C ('Cường nghỉ học'). Lập luận hợp lý."
  },
  {
    id: "c1_l4_q21",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Nhận biết",
    question: "Cho quy tắc suy diễn: $p \\vdash p \\lor q$. Đây là quy tắc:",
    options: [
      "Phép bổ sung (Addition).",
      "Phép đơn giản hóa (Simplification).",
      "Phép nối liền (Conjunction).",
      "Modus Ponens."
    ],
    correctAnswer: 0,
    explanation: "Từ mệnh đề p đúng, ta luôn suy ra p ∨ q đúng với bất kỳ q nào. Đây là Phép bổ sung (Addition)."
  },
  {
    id: "c1_l4_q22",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Nhận biết",
    question: "Cho quy tắc suy diễn: $p \\land q \\vdash p$. Đây là quy tắc:",
    options: [
      "Phép đơn giản hóa (Simplification).",
      "Phép bổ sung (Addition).",
      "Phép thế (Substitution).",
      "Modus Tollens."
    ],
    correctAnswer: 0,
    explanation: "Từ hội p ∧ q đúng, suy ra p đúng (hoặc q đúng). Đây là Phép đơn giản hóa (Simplification)."
  },
  {
    id: "c1_l4_q23",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Vận dụng",
    question: "Dạng suy diễn $p \\rightarrow q, r \\rightarrow s, p \\lor r \\vdash q \\lor s$ được gọi là:",
    options: [
      "Tam đoạn luận kiến thiết (Constructive Dilemma).",
      "Tam đoạn luận phá hủy (Destructive Dilemma).",
      "Tam đoạn luận giả định lặp.",
      "Quy tắc khử tuyển."
    ],
    correctAnswer: 0,
    explanation: "Quy tắc này là Tam đoạn luận kiến thiết (Constructive Dilemma): Có p hoặc r, mà p kéo theo q và r kéo theo s, suy ra tất yếu có q hoặc s."
  },
  {
    id: "c1_l4_q24",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Vận dụng",
    question: "Dạng suy diễn $p \\rightarrow q, r \\rightarrow s, \\neg q \\lor \\neg s \\vdash \\neg p \\lor \\neg r$ được gọi là:",
    options: [
      "Tam đoạn luận phá hủy (Destructive Dilemma).",
      "Tam đoạn luận kiến thiết (Constructive Dilemma).",
      "Modus Tollens mở rộng.",
      "Phép giải (Resolution)."
    ],
    correctAnswer: 0,
    explanation: "Quy tắc này là Tam đoạn luận phá hủy (Destructive Dilemma): Phủ định kết luận kéo theo phủ định tiền đề."
  },
  {
    id: "c1_l4_q25",
    chapterId: "c1",
    lessonId: "l1_4",
    lessonTitle: "§4 Các Quy tắc Suy diễn hợp lý",
    difficulty: "Vận dụng",
    question: "Một phản ví dụ (counterexample) chứng tỏ một suy diễn $(p_1 \\land p_2 \\land \\dots \\land p_n) \\rightarrow q$ là SAI khi:",
    options: [
      "Mọi tiền đề p1, p2, ..., pn đều nhận giá trị 1 nhưng kết luận q nhận giá trị 0",
      "Mọi tiền đề p1, p2, ..., pn nhận giá trị 0 và q nhận giá trị 1",
      "Tất cả các biến đều nhận giá trị 0",
      "Tiền đề nhận giá trị 0 và kết luận nhận giá trị 0"
    ],
    correctAnswer: 0,
    explanation: "Suy diễn sai khi và chỉ khi phép kéo theo giữa tiền đề và kết luận nhận giá trị 0. Điều này xảy ra khi toàn bộ các tiền đề đồng thời đúng (1) mà kết luận lại sai (0)."
  },

  // -------------------------------------------------------------------------
  // §5: VỊ TỪ VÀ LƯỢNG TỪ LỒNG NHAU
  // -------------------------------------------------------------------------
  {
    id: "c1_l5_q1",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Nhận biết",
    question: "Cho vị từ $P(x, y): \"x + 2y = 10\"$ với không gian là tập số nguyên dương $\\mathbb{Z}^+$. Mệnh đề nào sau đây có giá trị chân lý Đúng?",
    options: [
      "P(2, 4)",
      "P(4, 2)",
      "P(1, 4)",
      "P(3, 3)"
    ],
    correctAnswer: 0,
    explanation: "Thay số: P(2, 4) <=> 2 + 2*4 = 2 + 8 = 10 (Đúng). Với P(4, 2): 4 + 4 = 8 ≠ 10. Với P(1, 4): 1 + 8 = 9. Với P(3, 3): 3 + 6 = 9."
  },
  {
    id: "c1_l5_q2",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Thông hiểu",
    question: "Phủ định của mệnh đề $\\forall x \\exists y [ P(x, y) \\rightarrow Q(x, y) ]$ là:",
    options: [
      "∃x ∀y [ P(x, y) ∧ ¬Q(x, y) ]",
      "∃x ∀y [ ¬P(x, y) ∨ Q(x, y) ]",
      "∃x ∃y [ P(x, y) ∧ ¬Q(x, y) ]",
      "∀x ∃y [ P(x, y) ∧ ¬Q(x, y) ]"
    ],
    correctAnswer: 0,
    explanation: "¬(∀x ∃y [P → Q]) ≡ ∃x ∀y ¬(P → Q) ≡ ∃x ∀y [P(x, y) ∧ ¬Q(x, y)]."
  },
  {
    id: "c1_l5_q3",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Thông hiểu",
    question: "Xét trên không gian số thực $\\mathbb{R}$, mệnh đề nào sau đây có giá trị chân lý Sai?",
    options: [
      "∀x ∃y (x · y = 1)",
      "∀x ∃y (x + y = 0)",
      "∃y ∀x (x + y = x)",
      "∀x ∃y (x < y)"
    ],
    correctAnswer: 0,
    explanation: "Với x = 0 ∈ ℝ, không tồn tại số thực y nào thỏa mãn 0 · y = 1. Do đó khẳng định ∀x ∃y (x · y = 1) là Sai."
  },
  {
    id: "c1_l5_q4",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Thông hiểu",
    question: "Mệnh đề $\\exists x \\forall y (x \\cdot y = 0)$ với không gian xác định là tập số thực $\\mathbb{R}$ có giá trị chân lý là:",
    options: [
      "Đúng, vì chọn x = 0 thì 0 · y = 0 đúng với mọi y ∈ ℝ.",
      "Sai, vì không có số thực nào nhân với mọi số đều bằng 0.",
      "Đúng, vì chọn y = 0.",
      "Sai, phụ thuộc vào giá trị của y."
    ],
    correctAnswer: 0,
    explanation: "Tồn tại số thực x = 0. Khi đó với mọi y thuộc ℝ, ta luôn có 0 · y = 0. Mệnh đề này hoàn toàn Đúng."
  },
  {
    id: "c1_l5_q5",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Thông hiểu",
    question: "Phủ định của mệnh đề 'Mọi học sinh trong lớp đều yêu thích ít nhất một môn học' là:",
    options: [
      "Có ít nhất một học sinh không yêu thích bất kỳ môn học nào.",
      "Không có học sinh nào thích bất kỳ môn học nào.",
      "Mọi học sinh đều không yêu thích môn học nào.",
      "Có ít nhất một học sinh yêu thích tất cả các môn học."
    ],
    correctAnswer: 0,
    explanation: "Mệnh đề gốc: ∀x ∈ Lớp, ∃y ∈ Môn, Thích(x, y). Phủ định là: ∃x ∈ Lớp, ∀y ∈ Môn, ¬Thích(x, y): 'Có ít nhất một học sinh không yêu thích bất kỳ môn học nào'."
  },
  {
    id: "c1_l5_q6",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Nhận biết",
    question: "Mệnh đề logic biểu diễn cho khẳng định: 'Không có ai là hoàn hảo' (với $P(x)$: '$x$ hoàn hảo') là:",
    options: [
      "Cả A và B đều đúng và tương đương nhau.",
      "¬∃x P(x)",
      "∀x ¬P(x)",
      "∃x ¬P(x)"
    ],
    correctAnswer: 0,
    explanation: "'Không tồn tại người hoàn hảo' là ¬∃x P(x), tương đương với ∀x ¬P(x) ('Mọi người đều không hoàn hảo'). Cả hai đều đúng."
  },
  {
    id: "c1_l5_q7",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Nhận biết",
    question: "Cho các vị từ trên tập người: $S(x)$: '$x$ là sinh viên', $C(x)$: '$x$ có máy tính cá nhân'. Mệnh đề 'Một vài sinh viên không có máy tính cá nhân' được dịch thành:",
    options: [
      "∃x [S(x) ∧ ¬C(x)]",
      "∃x [S(x) → ¬C(x)]",
      "∀x [S(x) ∧ ¬C(x)]",
      "¬∃x [S(x) ∧ C(x)]"
    ],
    correctAnswer: 0,
    explanation: "Lượng từ tồn tại ∃ ('một vài / có ít nhất một') kết hợp với điều kiện đối tượng luôn dùng phép hội ∧: ∃x [S(x) ∧ ¬C(x)]. Không dùng phép kéo theo → với lượng từ ∃."
  },
  {
    id: "c1_l5_q8",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Nhận biết",
    question: "Mệnh đề $\\forall x [S(x) \\rightarrow C(x)]$ tương đương với:",
    options: [
      "Mọi sinh viên đều có máy tính cá nhân.",
      "Chỉ có sinh viên mới có máy tính cá nhân.",
      "Bất kỳ ai có máy tính cá nhân đều là sinh viên.",
      "Có sinh viên sở hữu máy tính cá nhân."
    ],
    correctAnswer: 0,
    explanation: "∀x [S(x) → C(x)] đọc là: Với mọi x, nếu x là sinh viên thì x có máy tính cá nhân, tức: 'Mọi sinh viên đều có máy tính cá nhân'."
  },
  {
    id: "c1_l5_q9",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Thông hiểu",
    question: "Cho mệnh đề: $\\forall x \\forall y [(x > 0 \\land y > 0) \\rightarrow xy > 0]$ trên không gian số thực $\\mathbb{R}$. Mệnh đề phản đảo là:",
    options: [
      "∀x ∀y [xy ≤ 0 → (x ≤ 0 ∨ y ≤ 0)]",
      "∃x ∃y [xy ≤ 0 → (x ≤ 0 ∨ y ≤ 0)]",
      "∀x ∀y [xy ≤ 0 → (x ≤ 0 ∧ y ≤ 0)]",
      "∀x ∀y [(x ≤ 0 ∨ y ≤ 0) → xy ≤ 0]"
    ],
    correctAnswer: 0,
    explanation: "Phản đảo của A → B là ¬B → ¬A. Phủ định của xy > 0 là xy ≤ 0. Phủ định của (x > 0 ∧ y > 0) là (x ≤ 0 ∨ y ≤ 0). Lượng từ ∀x ∀y giữ nguyên."
  },
  {
    id: "c1_l5_q10",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Thông hiểu",
    question: "Mệnh đề $\\exists ! x P(x)$ (lượng từ tồn tại duy nhất) tương đương với dạng logic hình thức nào?",
    options: [
      "Cả A và B đều đúng.",
      "∃x [P(x) ∧ ∀y (P(y) → y = x)]",
      "∃x P(x) ∧ ∀y ∀z [(P(y) ∧ P(z)) → y = z]",
      "∃x P(x) ∨ ∀y ¬P(y)"
    ],
    correctAnswer: 0,
    explanation: "Cả biểu thức ∃x [P(x) ∧ ∀y (P(y) → y = x)] và ∃x P(x) ∧ ∀y ∀z [(P(y) ∧ P(z)) → y = z] đều là các định nghĩa hình thức chính xác của lượng từ tồn tại duy nhất ∃!."
  },
  {
    id: "c1_l5_q11",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Vận dụng",
    question: "Cho không gian $\\mathbb{R}$. Xét hai mệnh đề:\n$A: \\forall x \\exists y (x^2 < y)$\n$B: \\exists y \\forall x (x^2 < y)$\nGiá trị chân lý của $A$ và $B$ lần lượt là:",
    options: [
      "A Đúng, B Sai.",
      "A Đúng, B Đúng.",
      "A Sai, B Đúng.",
      "A Sai, B Sai."
    ],
    correctAnswer: 0,
    explanation: "Mệnh đề A: Với mỗi số thực x, luôn chọn được y = x^2 + 1 để x^2 < y => A Đúng. Mệnh đề B: Không tồn tại một số thực y nào lớn hơn bình phương của mọi số thực => B Sai. Vậy A Đúng, B Sai."
  },
  {
    id: "c1_l5_q12",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Nhận biết",
    question: "Thứ tự của các lượng từ có thể hoán vị mà không làm thay đổi ý nghĩa trong trường hợp nào?",
    options: [
      "Cả A và B đều đúng.",
      "∀x ∀y P(x, y) ≡ ∀y ∀x P(x, y)",
      "∃x ∃y P(x, y) ≡ ∃y ∃x P(x, y)",
      "∀x ∃y P(x, y) ≡ ∃y ∀x P(x, y)"
    ],
    correctAnswer: 0,
    explanation: "Hai lượng từ cùng loại kề nhau luôn hoán vị được (∀x ∀y ≡ ∀y ∀x và ∃x ∃y ≡ ∃y ∃x). Ngược lại, hai lượng từ khác loại ∀∃ và ∃∀ không thể hoán vị."
  },
  {
    id: "c1_l5_q13",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Thông hiểu",
    question: "Mệnh đề $\\exists x [P(x) \\lor Q(x)]$ tương đương logic với biểu thức nào sau đây?",
    options: [
      "∃x P(x) ∨ ∃x Q(x)",
      "∃x P(x) ∧ ∃x Q(x)",
      "∀x P(x) ∨ ∀x Q(x)",
      "∃x [P(x) ∧ Q(x)]"
    ],
    correctAnswer: 0,
    explanation: "Lượng từ tồn tại ∃ phân phối được đối với phép tuyển ∨: ∃x [P(x) ∨ Q(x)] ≡ ∃x P(x) ∨ ∃x Q(x)."
  },
  {
    id: "c1_l5_q14",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Vận dụng",
    question: "Phép phân phối lượng từ nào sau đây là Sai (không tương đương logic tổng quát)?",
    options: [
      "∀x [P(x) ∨ Q(x)] ≡ ∀x P(x) ∨ ∀x Q(x)",
      "∀x [P(x) ∧ Q(x)] ≡ ∀x P(x) ∧ ∀x Q(x)",
      "∃x [P(x) ∨ Q(x)] ≡ ∃x P(x) ∨ ∃x Q(x)",
      "∀x [P → Q(x)] ≡ P → ∀x Q(x) (với P không chứa biến x)"
    ],
    correctAnswer: 0,
    explanation: "Lượng từ ∀ KHÔNG phân phối đối với phép tuyển ∨. Phản ví dụ: Trên ℤ, P(x): 'x chẵn', Q(x): 'x lẻ'. ∀x [P(x) ∨ Q(x)] đúng (mọi số nguyên chẵn hoặc lẻ), nhưng ∀x P(x) ∨ ∀x Q(x) sai."
  },
  {
    id: "c1_l5_q15",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Thông hiểu",
    question: "Mệnh đề: 'Mọi số nguyên chẵn lớn hơn 2 đều có thể biểu diễn thành tổng của hai số nguyên tố' (Giả thuyết Goldbach) được viết dạng vị từ là:",
    options: [
      "∀x ∈ E [ (x > 2) → ∃p ∃q (Prime(p) ∧ Prime(q) ∧ x = p + q) ]",
      "∃x ∈ E [ (x > 2) ∧ ∃p ∃q (Prime(p) ∧ Prime(q) ∧ x = p + q) ]",
      "∀x ∈ E ∀p ∀q [ (x > 2) → x = p + q ]",
      "∀x ∈ E [ (x > 2) ∧ (Prime(p) ∨ Prime(q)) ]"
    ],
    correctAnswer: 0,
    explanation: "Với mọi số nguyên chẵn x (∀x ∈ E), nếu x > 2 thì tồn tại hai số nguyên tố p, q sao cho x = p + q."
  },
  {
    id: "c1_l5_q16",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Thông hiểu",
    question: "Cho vị từ $P(x)$: '$x$ là sinh viên giỏi', $Q(x)$: '$x$ được nhận học bổng'. Phát biểu 'Tất cả các sinh viên giỏi đều được nhận học bổng' được phủ định là:",
    options: [
      "Tồn tại ít nhất một sinh viên giỏi không được nhận học bổng.",
      "Mọi sinh viên giỏi đều không được nhận học bổng.",
      "Mọi sinh viên không giỏi đều không được nhận học bổng.",
      "Tồn tại sinh viên không giỏi nhưng vẫn được học bổng."
    ],
    correctAnswer: 0,
    explanation: "¬(∀x [P(x) → Q(x)]) ≡ ∃x [P(x) ∧ ¬Q(x)]: 'Tồn tại ít nhất một sinh viên giỏi không được nhận học bổng'."
  },
  {
    id: "c1_l5_q17",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Nhận biết",
    question: "Trên miền số nguyên $\\mathbb{Z}$, mệnh đề $\\exists m \\forall n (m \\cdot n = n)$ có chân trị gì và giá trị $m$ tương ứng là bao nhiêu?",
    options: [
      "Đúng; m = 1",
      "Đúng; m = 0",
      "Sai; không tồn tại m",
      "Đúng; m = -1"
    ],
    correctAnswer: 0,
    explanation: "Số 1 là phần tử đơn vị của phép nhân: 1 · n = n với mọi số nguyên n. Do đó m = 1 thỏa mãn mệnh đề."
  },
  {
    id: "c1_l5_q18",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Vận dụng",
    question: "Mệnh đề $\\forall x \\exists y (x + y > 0)$ trên miền số nguyên âm $\\mathbb{Z}^-$ có chân trị:",
    options: [
      "Sai",
      "Đúng",
      "Không xác định",
      "Luôn đúng với mọi y ∈ ℤ⁻"
    ],
    correctAnswer: 0,
    explanation: "Trong miền ℤ^-, mọi phần tử đều ≤ -1. Tổng của hai số nguyên âm luôn ≤ -2 < 0. Do đó không thể tồn tại y ∈ ℤ^- để x + y > 0."
  },
  {
    id: "c1_l5_q19",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Thông hiểu",
    question: "Cho không gian đàm thoại là tập hợp người. $M(x, y)$: '$x$ là mẹ của $y$'. Biểu thức logic biểu diễn '$x$ là bà ngoại của $z$' là:",
    options: [
      "∃y [M(x, y) ∧ M(y, z)]",
      "∀y [M(x, y) ∧ M(y, z)]",
      "M(x, z)",
      "∃y [M(z, y) ∧ M(y, x)]"
    ],
    correctAnswer: 0,
    explanation: "x là bà ngoại của z khi tồn tại người y sao cho x là mẹ của y và y là mẹ của z: ∃y [M(x, y) ∧ M(y, z)]."
  },
  {
    id: "c1_l5_q20",
    chapterId: "c1",
    lessonId: "l1_5",
    lessonTitle: "§5 Vị từ và Lượng từ",
    difficulty: "Thông hiểu",
    question: "Mệnh đề logic $\\forall x [P(x) \\rightarrow Q(x)]$ có quan hệ thế nào với $(\\forall x P(x)) \\rightarrow (\\forall x Q(x))$?",
    options: [
      "∀x [P(x) → Q(x)] ⇒ (∀x P(x) → ∀x Q(x)) (Kéo theo một chiều).",
      "Tương đương logic hai chiều (≡).",
      "Không có quan hệ logic nào.",
      "Phủ định của nhau."
    ],
    correctAnswer: 0,
    explanation: "Đây là định lý cơ bản của logic vị từ: Nếu mọi x đều có P(x) kéo theo Q(x), thì khi tất cả x thỏa P(x) chắc chắn tất cả x đều thỏa Q(x). Chiều ngược lại không đúng."
  },

  // -------------------------------------------------------------------------
  // §6: NGUYÊN LÝ QUY NẠP TOÁN HỌC & ỨNG DỤNG
  // -------------------------------------------------------------------------
  {
    id: "c1_l6_q1",
    chapterId: "c1",
    lessonId: "l1_6",
    lessonTitle: "§6 Nguyên lý quy nạp",
    difficulty: "Nhận biết",
    question: "Để chứng minh bất đẳng thức $2^n > n^3$ đúng với mọi số nguyên $n \\ge n_0$ bằng quy nạp, giá trị nguyên dương nhỏ nhất $n_0$ là:",
    options: [
      "10",
      "8",
      "9",
      "5"
    ],
    correctAnswer: 0,
    explanation: "Kiểm tra: n=8: 256 < 512 (sai); n=9: 512 < 729 (sai); n=10: 2^10 = 1024 > 10^3 = 1000 (đúng). Bước quy nạp đúng với mọi n >= 10. Vậy n0 = 10."
  },
  {
    id: "c1_l6_q2",
    chapterId: "c1",
    lessonId: "l1_6",
    lessonTitle: "§6 Nguyên lý quy nạp",
    difficulty: "Thông hiểu",
    question: "Chứng minh khẳng định: $P(n): \"n^3 - n \\text{ chia hết cho } 3\"$ với mọi $n \\ge 1$. Khi thực hiện bước quy nạp, xét $(k+1)^3 - (k+1)$, biểu thức này được phân tích thành:",
    options: [
      "(k^3 - k) + 3(k^2 + k)",
      "(k^3 - k) + 3k^2 + 1",
      "(k^3 - k) + 6k",
      "(k^3 - k) + 3k^2 + 3k + 2"
    ],
    correctAnswer: 0,
    explanation: "(k+1)^3 - (k+1) = (k^3 + 3k^2 + 3k + 1) - (k + 1) = (k^3 - k) + 3(k^2 + k). Do k^3 - k chia hết cho 3 (giả thiết quy nạp) và 3(k^2+k) chia hết cho 3 nên tổng chia hết cho 3."
  },
  {
    id: "c1_l6_q3",
    chapterId: "c1",
    lessonId: "l1_6",
    lessonTitle: "§6 Nguyên lý quy nạp",
    difficulty: "Nhận biết",
    question: "Cho $S_n = 1^2 + 2^2 + 3^2 + \\dots + n^2 = \\frac{n(n+1)(2n+1)}{6}$. Để chứng minh mệnh đề đúng cho $n = k+1$, ta phải cộng thêm lượng nào vào $S_k$?",
    options: [
      "(k+1)^2",
      "k+1",
      "2k+1",
      "(k+1)^3"
    ],
    correctAnswer: 0,
    explanation: "Tổng S_{k+1} = S_k + (k+1)^2. Do đó lượng cần cộng thêm chính là (k+1)^2."
  },
  {
    id: "c1_l6_q4",
    chapterId: "c1",
    lessonId: "l1_6",
    lessonTitle: "§6 Nguyên lý quy nạp",
    difficulty: "Thông hiểu",
    question: "Bất đẳng thức Bernoulli phát biểu rằng: $(1 + x)^n \\ge 1 + nx$ với mọi số nguyên $n \\ge 0$ và số thực $x > -1$. Trong bước chuyển quy nạp từ $k$ lên $k+1$, ta nhân cả hai vế của giả thiết $(1+x)^k \\ge 1+kx$ với:",
    options: [
      "1+x (vì 1+x > 0)",
      "1+kx",
      "x",
      "(1+x)^2"
    ],
    correctAnswer: 0,
    explanation: "Vì x > -1 nên 1 + x > 0. Nhân hai vế bất đẳng thức với đại lượng dương 1 + x thì chiều bất đẳng thức không đổi: (1+x)^k · (1+x) ≥ (1+kx)(1+x)."
  },
  {
    id: "c1_l6_q5",
    chapterId: "c1",
    lessonId: "l1_6",
    lessonTitle: "§6 Nguyên lý quy nạp",
    difficulty: "Thông hiểu",
    question: "Dãy số Fibonacci được định nghĩa: $F_0 = 0, F_1 = 1, F_n = F_{n-1} + F_{n-2}$ với $n \\ge 2$. Để chứng minh tính chất của dãy Fibonacci bằng quy nạp, phương pháp phù hợp và thuận tiện nhất là:",
    options: [
      "Quy nạp toán học mạnh (giả thiết mệnh đề đúng tới k-1 và k).",
      "Quy nạp toán học yếu (chỉ cần giả thiết P(k)).",
      "Quy nạp lùi.",
      "Chứng minh vét cạn."
    ],
    correctAnswer: 0,
    explanation: "Phần tử F_n phụ thuộc đồng thời vào hai phần tử liền trước nó, nên bước quy nạp cần giả thiết đúng cho cả k-1 và k để suy ra cho k+1. Đây là quy nạp mạnh."
  },
  {
    id: "c1_l6_q6",
    chapterId: "c1",
    lessonId: "l1_6",
    lessonTitle: "§6 Nguyên lý quy nạp",
    difficulty: "Nhận biết",
    question: "Một bàn cờ kích thước $2^n \\times 2^n$ bị khuyết đúng 1 ô vuông đơn vị bất kỳ. Bằng quy nạp toán học, ta có thể chứng minh bàn cờ này luôn được lát kín bằng các mảnh chữ L gồm 3 ô vuông với:",
    options: [
      "Mọi số nguyên dương n ≥ 1.",
      "Chỉ với n chẵn.",
      "Chỉ với n lẻ.",
      "Chỉ với n ≥ 3."
    ],
    correctAnswer: 0,
    explanation: "Định lý chia để trị kinh điển: Bàn cờ 2^n × 2^n thiếu 1 ô luôn lát được bằng các mảnh trimino chữ L với mọi số nguyên dương n ≥ 1."
  },
  {
    id: "c1_l6_q7",
    chapterId: "c1",
    lessonId: "l1_6",
    lessonTitle: "§6 Nguyên lý quy nạp",
    difficulty: "Vận dụng",
    question: "Cho bài toán: 'Chứng minh rằng mọi số nguyên $n \\ge 2$ đều biểu diễn được dưới dạng tích của các số nguyên tố'. Dạng quy nạp bắt buộc phải sử dụng là:",
    options: [
      "Quy nạp mạnh (giả sử khẳng định đúng với mọi số nguyên từ 2 đến k).",
      "Quy nạp thông thường (giả sử k đúng suy ra k+1).",
      "Quy nạp Cauchy.",
      "Không thể chứng minh bằng quy nạp."
    ],
    correctAnswer: 0,
    explanation: "Nếu k+1 là hợp số, k+1 = a · b với 2 ≤ a, b ≤ k. Để phân tích a và b ra thừa số nguyên tố, ta phải giả sử mệnh đề đã đúng cho TẤT CẢ các số từ 2 đến k (Quy nạp mạnh)."
  },
  {
    id: "c1_l6_q8",
    chapterId: "c1",
    lessonId: "l1_6",
    lessonTitle: "§6 Nguyên lý quy nạp",
    difficulty: "Thông hiểu",
    question: "Cho mệnh đề $P(n): \"11^n - 6 \\text{ chia hết cho } 5\"$. Giá trị của biểu thức tại bước $n = k+1$ có thể viết lại thành:",
    options: [
      "Cả A, B, C đều là các phép biến đổi quy nạp hợp lệ.",
      "11 · (11^k - 6) + 60",
      "11^k · 11 - 6 = 11(11^k - 6) + 60, vì 11^k - 6 chia hết cho 5 và 60 chia hết cho 5 nên chia hết cho 5.",
      "10 · 11^k + (11^k - 6)"
    ],
    correctAnswer: 0,
    explanation: "Cả 3 cách biến đổi đều tách biểu thức ở bước k+1 thành tổng của một số chia hết cho 5 và giả thiết quy nạp (11^k - 6). Do đó cả A, B, C đều hợp lệ."
  },
  {
    id: "c1_l6_q9",
    chapterId: "c1",
    lessonId: "l1_6",
    lessonTitle: "§6 Nguyên lý quy nạp",
    difficulty: "Nhận biết",
    question: "Trong bài toán Tháp Hà Nội với $n$ đĩa, số bước tối thiểu để chuyển toàn bộ tháp $n$ đĩa từ cọc nguồn sang cọc đích tuân theo công thức nào sau đây:",
    options: [
      "2^n - 1",
      "2^n + 1",
      "2^(n-1)",
      "n^2 - 1"
    ],
    correctAnswer: 0,
    explanation: "Hệ thức truy hồi chuyển tháp Hà Nội: H_n = 2H_{n-1} + 1 với H_1 = 1. Công thức nghiệm là H_n = 2^n - 1."
  },
  {
    id: "c1_l6_q10",
    chapterId: "c1",
    lessonId: "l1_6",
    lessonTitle: "§6 Nguyên lý quy nạp",
    difficulty: "Thông hiểu",
    question: "Lỗi sai trong ngụy biện nổi tiếng 'Tất cả mọi con ngựa đều có cùng một màu' bằng quy nạp nằm ở bước nào?",
    options: [
      "Bước chuyển từ k = 1 lên k = 2 bị đứt gãy vì hai tập con k phần tử không có phần tử giao nhau.",
      "Bước cơ sở n = 1 sai.",
      "Giả thiết quy nạp không đúng.",
      "Không áp dụng được quy nạp cho tập hữu hạn."
    ],
    correctAnswer: 0,
    explanation: "Khi n = 2, hai tập con 1 con ngựa {ngựa 1} và {ngựa 2} không hề có phần tử giao nhau (giao rỗng). Do đó không có con ngựa trung gian nào để bắc cầu màu sắc từ ngựa 1 sang ngựa 2. Bước k = 1 → k = 2 bị đứt gãy."
  },
  {
    id: "c1_l6_q11",
    chapterId: "c1",
    lessonId: "l1_6",
    lessonTitle: "§6 Nguyên lý quy nạp",
    difficulty: "Nhận biết",
    question: "Bất đẳng thức $n! > 2^n$ đúng với mọi số tự nhiên $n$ thỏa mãn:",
    options: [
      "n ≥ 4",
      "n ≥ 2",
      "n ≥ 3",
      "n ≥ 5"
    ],
    correctAnswer: 0,
    explanation: "Kiểm tra: 1! = 1 < 2, 2! = 2 < 4, 3! = 6 < 8, 4! = 24 > 16. Khẳng định bắt đầu đúng từ n = 4."
  },
  {
    id: "c1_l6_q12",
    chapterId: "c1",
    lessonId: "l1_6",
    lessonTitle: "§6 Nguyên lý quy nạp",
    difficulty: "Thông hiểu",
    question: "Cho mệnh đề $P(n): \"n^2 + 5n + 1 \\text{ là số lẻ}\"$. Giả sử $P(k)$ đúng, tức $k^2 + 5k + 1$ là số lẻ. Khi đó với $n = k+1$: $(k+1)^2 + 5(k+1) + 1 = (k^2 + 5k + 1) + 2(k+3)$. Kết luận nào sau đây là đúng?",
    options: [
      "Khẳng định n^2 + 5n + 1 luôn là số lẻ với mọi n ≥ 1.",
      "P(k) → P(k+1) luôn đúng, nhưng P(n) sai với mọi n ≥ 1.",
      "Bước chuyển quy nạp sai.",
      "Chỉ đúng khi n là số chẵn."
    ],
    correctAnswer: 0,
    explanation: "Bước cơ sở P(1) = 1 + 5 + 1 = 7 là số lẻ (đúng). Bước chuyển: (k^2 + 5k + 1) + 2(k+3). Vì k^2 + 5k + 1 lẻ và 2(k+3) chẵn nên tổng luôn là số lẻ. Khẳng định đúng với mọi n ≥ 1."
  },
  {
    id: "c1_l6_q13",
    chapterId: "c1",
    lessonId: "l1_6",
    lessonTitle: "§6 Nguyên lý quy nạp",
    difficulty: "Vận dụng",
    question: "Định lý cơ bản của số học (Tính duy nhất của phân tích ra thừa số nguyên tố) cần nguyên lý nào để chứng minh hoàn chỉnh?",
    options: [
      "Nguyên lý thứ tự tốt (Well-ordering Principle) hoặc Quy nạp mạnh.",
      "Quy nạp toán học đơn giản P(n) ⇒ P(n+1).",
      "Quy tắc Modus Ponens đơn giản.",
      "Phương pháp vét cạn."
    ],
    correctAnswer: 0,
    explanation: "Để chứng minh tính tồn tại và duy nhất của phân tích thừa số nguyên tố, bắt buộc phải sử dụng Nguyên lý thứ tự tốt (mọi tập con khác rỗng của ℕ đều có phần tử nhỏ nhất) hoặc Quy nạp mạnh."
  },
  {
    id: "c1_l6_q14",
    chapterId: "c1",
    lessonId: "l1_6",
    lessonTitle: "§6 Nguyên lý quy nạp",
    difficulty: "Nhận biết",
    question: "Cho tổng $T_n = \\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\dots + \\frac{1}{n(n+1)}$. Bằng quy nạp ta chứng minh được $T_n$ bằng:",
    options: [
      "n / (n + 1)",
      "(n + 1) / n",
      "1 / (n + 1)",
      "n / [2(n + 1)]"
    ],
    correctAnswer: 0,
    explanation: "1/(i(i+1)) = 1/i - 1/(i+1). Tổng triệt tiêu liên tiếp: T_n = (1 - 1/2) + (1/2 - 1/3) + ... + (1/n - 1/(n+1)) = 1 - 1/(n+1) = n/(n+1)."
  },
  {
    id: "c1_l6_q15",
    chapterId: "c1",
    lessonId: "l1_6",
    lessonTitle: "§6 Nguyên lý quy nạp",
    difficulty: "Thông hiểu",
    question: "Khẳng định nào sau đây diễn đạt đúng nhất về mối liên hệ giữa Nguyên lý Quy nạp Toán học và Nguyên lý Thứ tự Tốt (Well-ordering principle trên tập $\\mathbb{N}$)?",
    options: [
      "Hai nguyên lý này tương đương logic với nhau trên nền tảng tiên đề tập hợp.",
      "Nguyên lý thứ tự tốt yếu hơn quy nạp toán học.",
      "Quy nạp toán học chỉ đúng trên tập số thực.",
      "Không thể dùng nguyên lý thứ tự tốt để chứng minh nguyên lý quy nạp."
    ],
    correctAnswer: 0,
    explanation: "Trong hệ tiên đề Peano cho tập số tự nhiên ℕ, Nguyên lý quy nạp toán học và Nguyên lý thứ tự tốt là hai phát biểu hoàn toàn tương đương logic với nhau."
  },

  // =========================================================================
  // CHƯƠNG 2: PHƯƠNG PHÁP ĐẾM
  // =========================================================================
  // §1 Tập hợp
  {
    id: "c2_l1_q1",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Nhận biết",
    question: "Cho tập A có 4 phần tử. Số tập hợp con của A (lực lượng của tập lũy thừa P(A)) là:",
    options: [
      "8",
      "16",
      "12",
      "4"
    ],
    correctAnswer: 1,
    explanation: "Số tập hợp con của một tập hợp có n phần tử là 2^n. Với n = 4, số tập con là 2^4 = 16."
  },
  {
    id: "c2_l1_q2",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Thông hiểu",
    question: "Khẳng định nào dưới đây là ĐÚNG đối với tập rỗng ∅?",
    options: [
      "∅ ∈ ∅",
      "∅ ⊂ ∅",
      "∅ ⊆ {∅}",
      "{∅} = ∅"
    ],
    correctAnswer: 2,
    explanation: "Tập rỗng ∅ là tập con của bất kỳ tập hợp nào, do đó ∅ ⊆ {∅} là đúng. ∅ không chứa phần tử nào nên ∅ ∈ ∅ là sai. {∅} là tập có 1 phần tử (chứa tập rỗng) nên không bằng ∅."
  },
  {
    id: "c2_l1_q3",
    chapterId: "c2",
    lessonId: "l2_1",
    lessonTitle: "§1 Tập hợp & Đại số tập hợp",
    difficulty: "Vận dụng",
    question: "Cho tập vũ trụ U = {1, 2, ..., 10}, A = {1, 2, 3, 4, 5}, B = {1, 2, 4, 8}. Tập hợp A \\ B là:",
    options: [
      "{8}",
      "{3, 5}",
      "{1, 2, 4}",
      "{1, 2, 3, 4, 5, 8}"
    ],
    correctAnswer: 1,
    explanation: "Phép hiệu A \\ B gồm các phần tử thuộc A nhưng không thuộc B. Các phần tử của A là {1, 2, 3, 4, 5}, bỏ đi các phần tử {1, 2, 4} thuộc B, ta còn lại {3, 5}."
  },

  // §2 Ánh xạ
  {
    id: "c2_l2_q1",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Nhận biết",
    question: "Ánh xạ f: A -> B được gọi là đơn ánh (injective) nếu:",
    options: [
      "Mọi phần tử của B đều có tạo ảnh",
      "Hai phần tử khác nhau bất kỳ của A có ảnh khác nhau trong B",
      "Tập A và tập B có cùng số phần tử",
      "f(A) = B"
    ],
    correctAnswer: 1,
    explanation: "Định nghĩa đơn ánh: Với mọi x1, x2 ∈ A, nếu x1 ≠ x2 thì f(x1) ≠ f(x2) (hoặc tương đương: f(x1) = f(x2) => x1 = x2)."
  },
  {
    id: "c2_l2_q2",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Thông hiểu",
    question: "Xét ánh xạ f: Z -> Z xác định bởi f(x) = 2x + 1. Khẳng định nào sau đây là ĐÚNG?",
    options: [
      "f là toàn ánh nhưng không đơn ánh",
      "f là đơn ánh nhưng không phải toàn ánh",
      "f là song ánh",
      "f không đơn ánh và không toàn ánh"
    ],
    correctAnswer: 1,
    explanation: "1) f là đơn ánh: Nếu 2x1 + 1 = 2x2 + 1 => 2x1 = 2x2 => x1 = x2. 2) f KHÔNG phải toàn ánh: f(x) luôn là số lẻ, nên các số chẵn (như 0, 2, 4) không có tạo ảnh trong Z. Vậy f là đơn ánh nhưng không toàn ánh."
  },
  {
    id: "c2_l2_q3",
    chapterId: "c2",
    lessonId: "l2_2",
    lessonTitle: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    difficulty: "Vận dụng",
    question: "Cho f: A -> B và g: B -> C. Nếu ánh xạ hợp g o f là đơn ánh thì khẳng định nào chắc chắn đúng?",
    options: [
      "g phải là đơn ánh",
      "f phải là đơn ánh",
      "cả f và g đều phải là đơn ánh",
      "g phải là toàn ánh"
    ],
    correctAnswer: 1,
    explanation: "Giả sử x1, x2 ∈ A thỏa f(x1) = f(x2). Khi đó g(f(x1)) = g(f(x2)), tức (g o f)(x1) = (g o f)(x2). Vì g o f là đơn ánh nên x1 = x2. Vậy f bắt buộc phải là đơn ánh (còn g chưa chắc là đơn ánh)."
  },

  // §3 Phép đếm
  {
    id: "c2_l3_q1",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Nhận biết",
    question: "Một nhà hàng có 5 món khai vị và 8 món chính. Một thực khách chọn 1 món khai vị và 1 món chính. Số cách chọn là:",
    options: [
      "13 cách",
      "40 cách",
      "26 cách",
      "120 cách"
    ],
    correctAnswer: 1,
    explanation: "Theo nguyên lý nhân: Việc chọn gồm 2 công đoạn độc lập liên tiếp: chọn khai vị (5 cách) và chọn món chính (8 cách). Số cách là 5 * 8 = 40 cách."
  },
  {
    id: "c2_l3_q2",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Thông hiểu",
    question: "Lớp có 30 sinh viên học Tiếng Anh, 25 sinh viên học Tiếng Pháp, và 10 sinh viên học cả hai môn. Số sinh viên học ít nhất một trong hai môn là:",
    options: [
      "55 sinh viên",
      "45 sinh viên",
      "65 sinh viên",
      "35 sinh viên"
    ],
    correctAnswer: 1,
    explanation: "Theo nguyên lý bù trừ (Inclusion-Exclusion): |A v B| = |A| + |B| - |A ^ B| = 30 + 25 - 10 = 45 sinh viên."
  },
  {
    id: "c2_l3_q3",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Vận dụng",
    question: "Có bao nhiêu xâu nhị phân có độ dài 8 (1 byte) chứa đúng 3 bit 1?",
    options: [
      "24",
      "56",
      "64",
      "128"
    ],
    correctAnswer: 1,
    explanation: "Một xâu nhị phân 8 bit có 8 vị trí. Để có đúng 3 bit 1, ta chỉ cần chọn 3 vị trí trong 8 vị trí để đặt bit 1 (các vị trí còn lại đặt bit 0). Số cách là C(8, 3) = 8! / (3! * 5!) = (8 * 7 * 6) / 6 = 56 xâu."
  },
  {
    id: "c2_l3_q4",
    chapterId: "c2",
    lessonId: "l2_3",
    lessonTitle: "§3 Phép đếm & Các nguyên lý đếm",
    difficulty: "Vận dụng",
    question: "Có bao nhiêu số nguyên từ 1 đến 1000 chia hết cho 3 hoặc chia hết cho 5?",
    options: [
      "533",
      "467",
      "500",
      "333"
    ],
    correctAnswer: 1,
    explanation: "Số các số chia hết cho 3 là: floor(1000 / 3) = 333. Số các số chia hết cho 5 là: floor(1000 / 5) = 200. Số các số chia hết cho cả 3 và 5 (tức chia hết cho 15) là: floor(1000 / 15) = 66. Theo nguyên lý bù trừ: 333 + 200 - 66 = 467 số."
  },

  // §4 Giải tích tổ hợp
  {
    id: "c2_l4_q1",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Nhận biết",
    question: "Số cách xếp 6 học sinh ngồi vào một dãy 6 chiếc ghế là:",
    options: [
      "36",
      "720",
      "120",
      "64"
    ],
    correctAnswer: 1,
    explanation: "Đây là số hoán vị của 6 phần tử: P6 = 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720 cách."
  },
  {
    id: "c2_l4_q2",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Thông hiểu",
    question: "Số nghiệm nguyên không âm của phương trình x1 + x2 + x3 + x4 = 10 là:",
    options: [
      "C(10 + 4 - 1, 10) = 286",
      "C(10, 4) = 210",
      "C(10 - 1, 4 - 1) = 84",
      "4^10"
    ],
    correctAnswer: 0,
    explanation: "Bài toán chia kẹo Euler (chia 10 vật giống nhau vào 4 hộp khác nhau): Số nghiệm nguyên không âm của x1 + x2 + ... + xn = r là C(n + r - 1, r). Ở đây n = 4, r = 10, nên số nghiệm là C(4 + 10 - 1, 10) = C(13, 10) = C(13, 3) = (13 * 12 * 11) / 6 = 286."
  },
  {
    id: "c2_l4_q3",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Vận dụng",
    question: "Trong khai triển nhị thức (x + 2y)^12, hệ số của số hạng x^9 * y^3 là:",
    options: [
      "220",
      "1760",
      "880",
      "3520"
    ],
    correctAnswer: 1,
    explanation: "Theo công thức nhị thức Newton, số hạng chứa x^(12-k) * (2y)^k là C(12, k) * x^(12-k) * 2^k * y^k. Ứng với x^9 * y^3 thì k = 3. Khi đó hệ số là C(12, 3) * 2^3 = 220 * 8 = 1760."
  },
  {
    id: "c2_l4_q4",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Thông hiểu",
    question: "Một lớp có 15 nam và 10 nữ. Cần lập ban cán sự gồm 3 người trong đó có ít nhất 1 nữ. Số cách chọn là:",
    options: [
      "C(25, 3) - C(15, 3) = 1845",
      "C(10, 1) * C(15, 2) = 1050",
      "C(10, 3) = 120",
      "C(25, 3) = 2300"
    ],
    correctAnswer: 0,
    explanation: "Dùng phương pháp phần bù: Tổng số cách chọn 3 người bất kỳ từ 25 người là C(25, 3) = 2300. Số cách chọn 3 người toàn nam là C(15, 3) = 455. Vậy số cách chọn có ít nhất 1 nữ là 2300 - 455 = 1845 cách."
  },
  {
    id: "c2_l4_q5",
    chapterId: "c2",
    lessonId: "l2_4",
    lessonTitle: "§4 Giải tích tổ hợp & Nhị thức Newton",
    difficulty: "Vận dụng",
    question: "Có 4 loại bánh ngọt khác nhau. Bạn An muốn mua 10 chiếc bánh (mỗi loại có thể mua nhiều chiếc). Số cách chọn mua là:",
    options: [
      "C(10, 4) = 210",
      "C(4 + 10 - 1, 10) = 286",
      "4^10",
      "10^4"
    ],
    correctAnswer: 1,
    explanation: "Đây là bài toán tổ hợp lặp: Chọn r = 10 vật từ n = 4 loại vật. Số cách là C(n + r - 1, r) = C(4 + 10 - 1, 10) = C(13, 10) = C(13, 3) = 286 cách."
  },

  // §5 Chuồng bồ câu
  {
    id: "c2_l5_q1",
    chapterId: "c2",
    lessonId: "l2_5",
    lessonTitle: "§5 Nguyên lý Chuồng bồ câu",
    difficulty: "Nhận biết",
    question: "Cần chọn ngẫu nhiên ít nhất bao nhiêu người để chắc chắn có ít nhất 2 người có cùng ngày sinh nhật trong năm (năm thường 365 ngày)?",
    options: [
      "365",
      "366",
      "367",
      "183"
    ],
    correctAnswer: 1,
    explanation: "Năm thường có 365 ngày (tương ứng 365 chuồng). Theo nguyên lý Dirichlet, nếu có 365 + 1 = 366 người (bồ câu) thì chắc chắn có ít nhất một ngày có từ 2 người sinh cùng ngày."
  },
  {
    id: "c2_l5_q2",
    chapterId: "c2",
    lessonId: "l2_5",
    lessonTitle: "§5 Nguyên lý Chuồng bồ câu",
    difficulty: "Thông hiểu",
    question: "Trong một phòng học có 65 sinh viên. Khẳng định nào sau đây là CHẮC CHẮN ĐÚNG?",
    options: [
      "Có ít nhất 6 sinh viên sinh cùng một tháng",
      "Có đúng 5 sinh viên sinh vào tháng Giêng",
      "Tất cả sinh viên sinh vào các tháng khác nhau",
      "Không có sinh viên nào sinh vào tháng 12"
    ],
    correctAnswer: 0,
    explanation: "Một năm có 12 tháng (12 chuồng), số sinh viên là 65 (bồ câu). Theo nguyên lý Dirichlet tổng quát, ít nhất một tháng chứa tối thiểu: ceil(65 / 12) = ceil(5.416) = 6 sinh viên sinh cùng tháng."
  },
  {
    id: "c2_l5_q3",
    chapterId: "c2",
    lessonId: "l2_5",
    lessonTitle: "§5 Nguyên lý Chuồng bồ câu",
    difficulty: "Vận dụng",
    question: "Cho tập S = {1, 2, ..., 25}. Chọn ngẫu nhiên k phần tử từ S sao cho chắc chắn có 2 phần tử có tổng bằng 26. Giá trị nhỏ nhất của k là:",
    options: [
      "12",
      "13",
      "14",
      "15"
    ],
    correctAnswer: 2,
    explanation: "Ta ghép các cặp có tổng bằng 26: {1, 25}, {2, 24}, {3, 23}, ..., {12, 14}, và số lẻ thừa lại là {13}. Có tất cả 12 cặp + 1 phần tử lẻ = 13 nhóm (13 chuồng). Theo nguyên lý Dirichlet, nếu chọn 13 + 1 = 14 số thì chắc chắn có ít nhất 2 số cùng rơi vào 1 cặp, nghĩa là có tổng bằng 26. Vậy k = 14."
  },

  // =========================================================================
  // CHƯƠNG 3: QUAN HỆ
  // =========================================================================
  // §1 Quan hệ & Quan hệ chiếu
  {
    id: "c3_l1_q1",
    chapterId: "c3",
    lessonId: "l3_1",
    lessonTitle: "§1 Quan hệ & Quan hệ chiếu",
    difficulty: "Nhận biết",
    question: "Cho tập A có 3 phần tử và tập B có 2 phần tử. Có tất cả bao nhiêu quan hệ hai ngôi khác nhau từ A vào B?",
    options: [
      "6",
      "32",
      "64",
      "12"
    ],
    correctAnswer: 2,
    explanation: "Tích Descartes A x B có |A| * |B| = 3 * 2 = 6 phần tử. Một quan hệ từ A vào B là một tập con của A x B. Do đó số quan hệ chính là số tập con của A x B: 2^6 = 64 quan hệ."
  },
  {
    id: "c3_l1_q2",
    chapterId: "c3",
    lessonId: "l3_1",
    lessonTitle: "§1 Quan hệ & Quan hệ chiếu",
    difficulty: "Thông hiểu",
    question: "Hai số nguyên a và b được gọi là đồng dư modulo n (a ≡ b mod n) khi và chỉ khi:",
    options: [
      "a + b chia hết cho n",
      "a - b chia hết cho n",
      "a * b chia hết cho n",
      "a chia hết cho b"
    ],
    correctAnswer: 1,
    explanation: "Theo định nghĩa, a ≡ b (mod n) <=> (a - b) là bội số của n (tức a - b chia hết cho n)."
  },

  // §2 Quan hệ tương đương
  {
    id: "c3_l2_q1",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương",
    difficulty: "Nhận biết",
    question: "Một quan hệ R trên tập A được gọi là quan hệ tương đương nếu nó thỏa mãn đồng thời 3 tính chất nào?",
    options: [
      "Phản xạ, phản xứng, bắc cầu",
      "Phản xạ, đối xứng, bắc cầu",
      "Đối xứng, phản xứng, bắc cầu",
      "Phản xạ, đối xứng, phản xứng"
    ],
    correctAnswer: 1,
    explanation: "Quan hệ tương đương bắt buộc phải thỏa mãn 3 tính chất: Phản xạ (Reflexive), Đối xứng (Symmetric) và Bắc cầu (Transitive)."
  },
  {
    id: "c3_l2_q2",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương",
    difficulty: "Thông hiểu",
    question: "Xét quan hệ R trên Z xác định bởi: xRy <=> x + y là số chẵn. Khẳng định nào sau đây là ĐÚNG?",
    options: [
      "R không phản xạ",
      "R là quan hệ tương đương với 2 lớp tương đương: các số chẵn và các số lẻ",
      "R không đối xứng",
      "R không bắc cầu"
    ],
    correctAnswer: 1,
    explanation: "1) Phản xạ: x + x = 2x là số chẵn => xRx (đúng). 2) Đối xứng: x + y chẵn <=> y + x chẵn (đúng). 3) Bắc cầu: x + y chẵn và y + z chẵn => x, y cùng tính chẵn lẻ và y, z cùng tính chẵn lẻ => x, z cùng tính chẵn lẻ => x + z chẵn (đúng). Vậy R là quan hệ tương đương, chia Z thành 2 lớp: lớp số chẵn và lớp số lẻ."
  },
  {
    id: "c3_l2_q3",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương",
    difficulty: "Vận dụng",
    question: "Cho A = {1, 2, 3}. Quan hệ tương đương R nào sau đây tạo ra phân hoạch {{1, 2}, {3}} của A?",
    options: [
      "R = {(1,1), (2,2), (3,3), (1,2)}",
      "R = {(1,1), (2,2), (3,3), (1,2), (2,1)}",
      "R = {(1,1), (2,2), (3,3), (1,3), (3,1)}",
      "R = {(1,2), (2,1)}"
    ],
    correctAnswer: 1,
    explanation: "Phân hoạch gồm 2 khối: {1, 2} sinh ra các cặp: (1,1), (2,2), (1,2), (2,1); khối {3} sinh ra cặp (3,3). Hợp lại ta được R = {(1,1), (2,2), (3,3), (1,2), (2,1)}."
  },
  {
    id: "c3_l2_q4",
    chapterId: "c3",
    lessonId: "l3_2",
    lessonTitle: "§2 Quan hệ Tương đương",
    difficulty: "Vận dụng",
    question: "Số quan hệ tương đương khác nhau trên một tập hợp có 3 phần tử {a, b, c} là:",
    options: [
      "3",
      "5",
      "8",
      "6"
    ],
    correctAnswer: 1,
    explanation: "Số quan hệ tương đương trên tập n phần tử chính bằng số phân hoạch của tập đó (số Bell B_n). Với n = 3: B_3 = 5 phân hoạch: 1) {{a,b,c}}; 2) {{a,b},{c}}; 3) {{a,c},{b}}; 4) {{b,c},{a}}; 5) {{a},{b},{c}}. Vậy có đúng 5 quan hệ tương đương."
  },

  // §3 Thứ tự & Biểu đồ Hasse
  {
    id: "c3_l3_q1",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Nhận biết",
    question: "Một quan hệ thứ tự (bộ phận) trên tập A thỏa mãn 3 tính chất nào?",
    options: [
      "Phản xạ, đối xứng, bắc cầu",
      "Phản xạ, phản xứng, bắc cầu",
      "Đối xứng, phản xứng, bắc cầu",
      "Toàn phần, phản xạ, đối xứng"
    ],
    correctAnswer: 1,
    explanation: "Quan hệ thứ tự (Partial order) phải thỏa mãn: Phản xạ, Phản xứng (Antisymmetric: nếu xRy và yRx thì x = y), và Bắc cầu."
  },
  {
    id: "c3_l3_q2",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Thông hiểu",
    question: "Trong biểu đồ Hasse của một tập sắp thứ tự hữu hạn, ta KHÔNG vẽ những đường nối nào?",
    options: [
      "Các đường nối giữa hai phần tử kề nhau",
      "Các vòng lặp phản xạ (nối phần tử với chính nó) và các cung bắc cầu",
      "Các đường nối giữa phần tử bé nhất và phần tử lớn nhất",
      "Các đường đi từ dưới lên trên"
    ],
    correctAnswer: 1,
    explanation: "Biểu đồ Hasse được tối giản hóa bằng quy ước: bỏ các khuyên phản xạ (x <= x) và bỏ các cạnh suy diễn từ tính bắc cầu (nếu x < y và y < z thì chỉ vẽ cạnh x-y và y-z, không vẽ cạnh x-z)."
  },
  {
    id: "c3_l3_q3",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Vận dụng",
    question: "Cho tập A = {2, 3, 4, 6, 12, 18} sắp thứ tự theo quan hệ chia hết (a | b). Phần tử tối đại của A là:",
    options: [
      "12",
      "18",
      "12 và 18",
      "2 và 3"
    ],
    correctAnswer: 2,
    explanation: "Phần tử m là tối đại nếu trong A không có phần tử nào khác mà m chia hết cho nó. Trong A: 12 không chia hết cho phần tử nào lớn hơn (vì 18 không chia hết cho 12); 18 cũng không chia hết cho phần tử nào lớn hơn. Do đó 12 và 18 đều là các phần tử tối đại (và tập này không có phần tử lớn nhất)."
  },
  {
    id: "c3_l3_q4",
    chapterId: "c3",
    lessonId: "l3_3",
    lessonTitle: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    difficulty: "Thông hiểu",
    question: "Trong một tập hợp sắp thứ tự (Poset), nhận xét nào sau đây luôn ĐÚNG?",
    options: [
      "Mọi phần tử tối đại đều là phần tử lớn nhất",
      "Nếu tồn tại phần tử lớn nhất thì nó là phần tử tối đại duy nhất",
      "Mọi Poset đều có ít nhất một phần tử lớn nhất",
      "Một Poset không thể có nhiều hơn 1 phần tử tối tiểu"
    ],
    correctAnswer: 1,
    explanation: "Định lý 3.3.2: Trong một Poset, nếu tồn tại phần tử lớn nhất M thì M là duy nhất và M cũng chính là phần tử tối đại duy nhất. Ngược lại, một Poset có thể có nhiều phần tử tối đại mà không có phần tử lớn nhất."
  },

  // §4 Dàn
  {
    id: "c3_l4_q1",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice)",
    difficulty: "Nhận biết",
    question: "Một tập sắp thứ tự (L, ≤) được gọi là một Dàn (Lattice) khi và chỉ khi:",
    options: [
      "L có phần tử lớn nhất và phần tử bé nhất",
      "Mọi cặp phần tử x, y ∈ L đều có sup{x, y} và inf{x, y}",
      "L là một tập sắp thứ tự toàn phần",
      "L là một tập hợp hữu hạn"
    ],
    correctAnswer: 1,
    explanation: "Định nghĩa: Dàn là một tập sắp thứ tự mà trong đó mọi cặp phần tử x, y đều có cận trên đúng (sup/join: x v y) và cận dưới đúng (inf/meet: x ^ y)."
  },
  {
    id: "c3_l4_q2",
    chapterId: "c3",
    lessonId: "l3_4",
    lessonTitle: "§4 Dàn (Lattice)",
    difficulty: "Thông hiểu",
    question: "Mọi tập hợp sắp thứ tự toàn phần (chẳng hạn (R, ≤)) có phải là một dàn phân bố không?",
    options: [
      "Không phải là dàn",
      "Là dàn nhưng không phân bố",
      "Luôn luôn là một dàn phân bố",
      "Chỉ là dàn phân bố khi tập hữu hạn"
    ],
    correctAnswer: 2,
    explanation: "Với tập sắp thứ tự toàn phần, sup{x, y} = max(x, y) và inf{x, y} = min(x, y). Các hàm min, max luôn thỏa mãn luật phân bố min(x, max(y, z)) = max(min(x, y), min(x, z)), do đó nó luôn là một dàn phân bố."
  },

  // §6 Dàn U_n & Euclide
  {
    id: "c3_l6_q1",
    chapterId: "c3",
    lessonId: "l3_6",
    lessonTitle: "§6 Dàn U_n & Thuật chia Euclide",
    difficulty: "Nhận biết",
    question: "Trong dàn các ước số dương U_n với quan hệ chia hết, inf(a, b) và sup(a, b) tương ứng là:",
    options: [
      "min(a, b) và max(a, b)",
      "USCLN(a, b) và BSCNN(a, b)",
      "a * b và a / b",
      "a + b và a - b"
    ],
    correctAnswer: 1,
    explanation: "Cận dưới lớn nhất theo quan hệ chia hết chính là Ước số chung lớn nhất USCLN(a, b), và cận trên nhỏ nhất chính là Bội số chung nhỏ nhất BSCNN(a, b)."
  },
  {
    id: "c3_l6_q2",
    chapterId: "c3",
    lessonId: "l3_6",
    lessonTitle: "§6 Dàn U_n & Thuật chia Euclide",
    difficulty: "Thông hiểu",
    question: "Dàn các ước số U_n là một DÀN BÙ khi và chỉ khi n thỏa mãn điều kiện nào?",
    options: [
      "n là một số chẵn",
      "n không có thừa số chính phương (phân tích thừa số nguyên tố có các số mũ đều bằng 1)",
      "n là số nguyên tố",
      "n là một lũy thừa của 2"
    ],
    correctAnswer: 1,
    explanation: "Theo Định lý 3.6.10 trong giáo trình GS. Nguyễn Hữu Anh: Dàn U_n là dàn bù khi và chỉ khi n không chia hết cho bình phương của bất kỳ số nguyên nào > 1 (square-free integer)."
  },
  {
    id: "c3_l6_q3",
    chapterId: "c3",
    lessonId: "l3_6",
    lessonTitle: "§6 Dàn U_n & Thuật chia Euclide",
    difficulty: "Vận dụng",
    question: "Áp dụng thuật toán Euclide tìm USCLN(252, 105):",
    options: [
      "7",
      "21",
      "42",
      "3"
    ],
    correctAnswer: 1,
    explanation: "Các bước chia Euclide: 252 = 105 * 2 + 42; 105 = 42 * 2 + 21; 42 = 21 * 2 + 0. Số dư khác 0 cuối cùng là 21, vậy USCLN(252, 105) = 21."
  },
  {
    id: "c3_l6_q4",
    chapterId: "c3",
    lessonId: "l3_6",
    lessonTitle: "§6 Dàn U_n & Thuật chia Euclide",
    difficulty: "Vận dụng",
    question: "Dàn các ước số U_n nào sau đây KHÔNG PHẢI là một dàn bù?",
    options: [
      "U_6",
      "U_30",
      "U_12",
      "U_70"
    ],
    correctAnswer: 2,
    explanation: "Theo Định lý 3.6.10, U_n là dàn bù khi và chỉ khi n không chia hết cho bình phương của bất kỳ số nguyên tố nào. Ta có: 6 = 2*3 (dàn bù); 30 = 2*3*5 (dàn bù); 70 = 2*5*7 (dàn bù). Riêng 12 = 2^2 * 3 có chứa 2^2 nên U_12 không phải là dàn bù (ví dụ phần tử 2 không có phần bù trong U_12)."
  },

  // =========================================================================
  // CHƯƠNG 4: ĐẠI SỐ BOOL VÀ HÀM BOOL
  // =========================================================================
  // §1 Đại số Bool & Định lý Stone
  {
    id: "c4_l1_q1",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Nhận biết",
    question: "Theo định lý Stone, số phần tử của một đại số Bool hữu hạn bất kỳ luôn có dạng:",
    options: [
      "Một số nguyên tố",
      "2^n với n là số nguyên không âm",
      "Một số chẵn bất kỳ",
      "n! với n ≥ 1"
    ],
    correctAnswer: 1,
    explanation: "Theo Định lý Stone: Mọi đại số Bool hữu hạn đều đẳng cấu với P(E) của một tập hữu hạn E gồm n phần tử. Do đó số phần tử của nó luôn là |P(E)| = 2^n."
  },
  {
    id: "c4_l1_q2",
    chapterId: "c4",
    lessonId: "l4_1",
    lessonTitle: "§1 Đại số Bool & Định lý Stone",
    difficulty: "Thông hiểu",
    question: "Tập hợp các ước số U_30 có phải là một đại số Bool đối với các phép toán (BSCNN, USCLN) không?",
    options: [
      "Không phải đại số Bool vì 30 là số chẵn",
      "Phải, vì 30 = 2 * 3 * 5 không có thừa số chính phương, U_30 có 2^3 = 8 phần tử",
      "Không phải, vì U_30 không có phần bù",
      "Chỉ là đại số Bool khi bỏ đi phần tử 1"
    ],
    correctAnswer: 1,
    explanation: "30 = 2 * 3 * 5 là số không chứa thừa số chính phương, nên dàn U_30 là một dàn bù phân bố, tức là một đại số Bool với 2^3 = 8 phần tử, đẳng cấu với P({2, 3, 5})."
  },

  // §2 Hàm Bool & Dạng chính tắc
  {
    id: "c4_l2_q1",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Nhận biết",
    question: "Có tất cả bao nhiêu hàm Bool 3 biến khác nhau?",
    options: [
      "8",
      "64",
      "256",
      "512"
    ],
    correctAnswer: 2,
    explanation: "Số hàm Bool n biến được tính theo công thức: 2^(2^n). Với n = 3: 2^(2^3) = 2^8 = 256 hàm."
  },
  {
    id: "c4_l2_q2",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Thông hiểu",
    question: "Từ tối tiểu (minterm) của hàm 3 biến x, y, z nhận giá trị 1 tại điểm (x=1, y=0, z=1) có biểu thức là:",
    options: [
      "x + ~y + z",
      "x * ~y * z",
      "~x * y * ~z",
      "x * y * z"
    ],
    correctAnswer: 1,
    explanation: "Quy tắc lập minterm: Biến có giá trị 1 viết nguyên dạng, biến có giá trị 0 viết dạng phủ định. Tại (1, 0, 1), minterm tương ứng là x * ~y * z."
  },
  {
    id: "c4_l2_q3",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Vận dụng",
    question: "Dạng nối rời chính tắc (DNF / SOP) của hàm Bool f(x, y) = x v y là:",
    options: [
      "xy v x~y v ~xy",
      "xy v ~x~y",
      "xy",
      "x~y v ~xy"
    ],
    correctAnswer: 0,
    explanation: "Hàm x v y nhận giá trị 1 tại 3 điểm: (1,1), (1,0), (0,1). Các minterm tương ứng là xy, x~y, ~xy. Dạng nối rời chính tắc là tổng của 3 minterm này: xy v x~y v ~xy."
  },
  {
    id: "c4_l2_q4",
    chapterId: "c4",
    lessonId: "l4_2",
    lessonTitle: "§2 Hàm Bool & Dạng chính tắc",
    difficulty: "Thông hiểu",
    question: "Một từ tối tiểu (minterm) của hàm Bool 4 biến x, y, z, t nhận giá trị 1 tại bao nhiêu điểm trong bảng chân trị?",
    options: [
      "Đúng 1 điểm",
      "2 điểm",
      "4 điểm",
      "8 điểm"
    ],
    correctAnswer: 0,
    explanation: "Mỗi từ tối tiểu là tích của 4 từ đơn (ví dụ x*y*~z*t). Tích logic chỉ nhận giá trị 1 khi tất cả các thừa số đều bằng 1, điều này chỉ xảy ra tại duy nhất một bộ giá trị (1, 1, 0, 1)."
  },

  // §3 Mạng cổng logic
  {
    id: "c4_l3_q1",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Nhận biết",
    question: "Cổng nào dưới đây được gọi là cổng vạn năng (Universal Gate) vì có thể tổng hợp mọi hàm Bool chỉ bằng một loại cổng đó?",
    options: [
      "Cổng AND",
      "Cổng OR",
      "Cổng NAND",
      "Cổng đệm (Buffer)"
    ],
    correctAnswer: 2,
    explanation: "Hai cổng vạn năng trong kỹ thuật số là NAND và NOR. Mọi phép toán logic (NOT, AND, OR) đều có thể được xây dựng hoàn toàn chỉ bằng các cổng NAND (hoặc chỉ bằng các cổng NOR)."
  },
  {
    id: "c4_l3_q2",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Thông hiểu",
    question: "Để tổng hợp cổng NOT từ một cổng NAND 2 đầu vào, ta làm như thế nào?",
    options: [
      "Nối một đầu vào với 1 và đầu vào kia với biến x",
      "Nối chung cả hai đầu vào với cùng một biến x",
      "Nối một đầu vào với 0",
      "Cả A và B đều đúng"
    ],
    correctAnswer: 3,
    explanation: "Theo định lý: ~(x * x) = ~x, và ~(x * 1) = ~x. Do đó cả cách nối chung 2 đầu vào hoặc nối 1 đầu vào với mức 1 đều biến cổng NAND thành cổng NOT."
  },
  {
    id: "c4_l3_q3",
    chapterId: "c4",
    lessonId: "l4_3",
    lessonTitle: "§3 Mạng các cổng logic & Tối ưu",
    difficulty: "Vận dụng",
    question: "Biểu thức logic x v (y ^ z) khi chuyển đổi thành biểu thức chỉ dùng phép toán NAND có dạng là:",
    options: [
      "NAND(NAND(x, x), NAND(y, z))",
      "NAND(x, NAND(y, z))",
      "NAND(NAND(x, y), z)",
      "NAND(~x, yz)"
    ],
    correctAnswer: 0,
    explanation: "Ta có: x v yz = ~(~x ^ ~(yz)) = NAND(~x, yz). Vì ~x = NAND(x, x) và yz = ~(NAND(y, z)) = NAND(NAND(y, z), NAND(y, z)), nhưng đơn giản hơn: ~(~x ^ yz) chính là NAND(~x, yz) = NAND(NAND(x, x), NAND(y, z))."
  },

  // §4 Biểu đồ Karnaugh
  {
    id: "c4_l4_q1",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Nhận biết",
    question: "Trong bản đồ Karnaugh 4 biến, một nhóm (tế bào) gồm 4 ô số 1 kề nhau sẽ rút gọn được bao nhiêu biến?",
    options: [
      "Rút gọn được 1 biến, còn lại 3 biến",
      "Rút gọn được 2 biến, còn lại 2 biến",
      "Rút gọn được 3 biến, còn lại 1 biến",
      "Rút gọn được cả 4 biến, thành hằng số 1"
    ],
    correctAnswer: 1,
    explanation: "Một tế bào gồm 2^k ô kề nhau sẽ loại bỏ được k biến. Với nhóm 4 ô = 2^2 ô (k = 2), số biến bị triệt tiêu là 2, đơn thức thu được chỉ còn lại 4 - 2 = 2 biến."
  },
  {
    id: "c4_l4_q2",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Thông hiểu",
    question: "Thứ tự gán nhãn các hàng hoặc cột trong bản đồ Karnaugh tuân theo mã nào để hai ô cạnh nhau chỉ khác nhau 1 bit?",
    options: [
      "Mã nhị phân tự nhiên: 00, 01, 10, 11",
      "Mã Gray: 00, 01, 11, 10",
      "Mã BCD",
      "Mã bù 2"
    ],
    correctAnswer: 1,
    explanation: "Bản đồ Karnaugh sử dụng mã Gray (00, 01, 11, 10) để đảm bảo hai ô kề nhau (và hai ô biên ngoài cùng) chỉ thay đổi giá trị của đúng một biến duy nhất."
  },
  {
    id: "c4_l4_q3",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Vận dụng",
    question: "Tối thiểu hóa hàm Bool 3 biến có các minterm m(0, 1, 2, 3) bằng Karnaugh Map, ta được:",
    options: [
      "~x",
      "x",
      "~y",
      "~z"
    ],
    correctAnswer: 0,
    explanation: "Các minterm 0, 1, 2, 3 tương ứng với các bộ (x, y, z): (0,0,0), (0,0,1), (0,1,0), (0,1,1). Nhận thấy cả 4 ô này đều có x = 0 (tức ~x), trong khi y và z nhận đủ mọi tổ hợp (00, 01, 10, 11) nên y và z bị triệt tiêu hoàn toàn. Kết quả tối tiểu là ~x."
  },
  {
    id: "c4_l4_q4",
    chapterId: "c4",
    lessonId: "l4_4",
    lessonTitle: "§4 Phương pháp Biểu đồ Karnaugh",
    difficulty: "Vận dụng",
    question: "Trong bản đồ Karnaugh 4 biến x, y, z, t, nhóm 4 ô nằm ở 4 góc của bản đồ biểu diễn đơn thức nào?",
    options: [
      "~x * ~z",
      "~y * ~t",
      "~x * ~t",
      "~y * ~z"
    ],
    correctAnswer: 1,
    explanation: "4 ô góc có tọa độ (hàng, cột): (00, 00), (00, 10), (10, 00), (10, 10). Với hàng (x, y) gồm 00 và 10: y giữ nguyên giá trị 0 (~y), x thay đổi 0 -> 1 nên bị triệt tiêu. Với cột (z, t) gồm 00 và 10: t giữ nguyên giá trị 0 (~t), z thay đổi 0 -> 1 nên bị triệt tiêu. Kết quả là đơn thức ~y * ~t."
  },

  // §5 Phương pháp thỏa thuận
  {
    id: "c4_l5_q1",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Nhận biết",
    question: "Thỏa thuận (consensus) của hai đơn thức x * y và ~x * z là đơn thức nào?",
    options: [
      "x * z",
      "y * z",
      "~y * z",
      "Không có thỏa thuận"
    ],
    correctAnswer: 1,
    explanation: "Biến đối ngẫu giữa hai đơn thức là x và ~x. Triệt tiêu biến x, ghép các biến còn lại ta được thỏa thuận là y * z."
  },
  {
    id: "c4_l5_q2",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Thông hiểu",
    question: "Hai đơn thức x * ~y * z và ~x * y * t có thỏa thuận bằng bao nhiêu?",
    options: [
      "z * t",
      "0 (không có thỏa thuận)",
      "x * z * t",
      "y * z * t"
    ],
    correctAnswer: 1,
    explanation: "Hai đơn thức này có tới 2 biến đối ngẫu: biến x và ~x; biến ~y và y. Khi có từ hai biến đối ngẫu trở lên, tích của chúng chứa (x * ~x = 0) hoặc (y * ~y = 0) nên thỏa thuận bằng 0."
  },
  {
    id: "c4_l5_q3",
    chapterId: "c4",
    lessonId: "l4_5",
    lessonTitle: "§5 Phương pháp Thỏa thuận (Consensus)",
    difficulty: "Vận dụng",
    question: "Sau khi tìm được tất cả các tiền đề nguyên tố, phương pháp nào thường được áp dụng để tìm các tổ hợp tiền đề nguyên tố tối tiểu phủ hết hàm f?",
    options: [
      "Phương pháp phân hoạch tập hợp",
      "Phương pháp lập phương trình phủ (Petrick's Method)",
      "Thuật toán Euclide mở rộng",
      "Quy tắc Modus Ponens"
    ],
    correctAnswer: 1,
    explanation: "Phương pháp Petrick lập một hệ phương trình logic biểu diễn điều kiện mỗi từ tối tiểu (minterm) phải được phủ bởi ít nhất một tiền đề nguyên tố, sau đó dùng luật phân bố và hấp thụ để tìm các phương án phủ tối thiểu."
  }
];
