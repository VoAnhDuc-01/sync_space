/**
 * Ngân hàng câu hỏi trắc nghiệm Toán Rời Rạc (170 câu nền tảng Chương 1–4)
 * Toàn bộ biểu thức toán học, tổ hợp, chỉnh hợp, logic và đại số Bool được chuẩn hóa KaTeX 100%.
 * Chương 1 tuân thủ tuyệt đối yêu cầu không chứa câu hỏi phép tuyển loại trừ (XOR).
 */

const QUIZ_DATA = [
  {
    "id": "c1_l1_q1",
    "chapterId": "c1",
    "lessonId": "l1_1",
    "lessonTitle": "§1 Pháp tính mệnh đề",
    "difficulty": "Nhận biết",
    "question": "Câu nào dưới đây là một mệnh đề trong logic toán học?",
    "options": [
      "Hôm nay trời đẹp làm sao!",
      "Học môn Toán rời rạc có khó không?",
      "Số 17 là một số nguyên tố.",
      "x + 2 = 5"
    ],
    "correctAnswer": 2,
    "explanation": "Mệnh đề là một khẳng định có giá trị chân lý xác định: hoặc đúng (1) hoặc sai (0). 'Số 17 là một số nguyên tố' là mệnh đề đúng. Câu cảm thán, câu hỏi và câu chứa biến tự do chưa gán giá trị không phải là mệnh đề."
  },
  {
    "id": "c1_l1_q2",
    "chapterId": "c1",
    "lessonId": "l1_1",
    "lessonTitle": "§1 Pháp tính mệnh đề",
    "difficulty": "Nhận biết",
    "question": "Phép nối liền (phép hội $p \\land q$) nhận giá trị Đúng (1) khi nào?",
    "options": [
      "Khi ít nhất một trong hai mệnh đề p, q đúng",
      "Khi cả hai mệnh đề p và q đều đúng",
      "Khi p đúng và q sai",
      "Khi p sai và q đúng"
    ],
    "correctAnswer": 1,
    "explanation": "Định nghĩa phép hội: $p \\land q$ chỉ nhận giá trị 1 khi và chỉ khi cả p và q đều nhận giá trị 1."
  },
  {
    "id": "c1_l1_q3",
    "chapterId": "c1",
    "lessonId": "l1_1",
    "lessonTitle": "§1 Pháp tính mệnh đề",
    "difficulty": "Nhận biết",
    "question": "Phép nối rời (phép tuyển $p \\lor q$) nhận giá trị Sai (0) khi nào?",
    "options": [
      "Khi cả hai mệnh đề p và q đều sai",
      "Khi một mệnh đề đúng và một mệnh đề sai",
      "Khi cả hai mệnh đề đều đúng",
      "Khi p đúng và q sai"
    ],
    "correctAnswer": 0,
    "explanation": "Phép tuyển $p \\lor q$ mang nghĩa bao gồm: nó chỉ nhận giá trị sai ($0$) khi cả hai thành phần $p$ và $q$ đều sai ($0$)."
  },
  {
    "id": "c1_l1_q4",
    "chapterId": "c1",
    "lessonId": "l1_1",
    "lessonTitle": "§1 Pháp tính mệnh đề",
    "difficulty": "Thông hiểu",
    "question": "Mệnh đề tương đương (kéo theo hai chiều $p \\leftrightarrow q$) nhận giá trị Đúng (1) khi nào?",
    "options": [
      "Khi p = 1 và q = 0",
      "Khi p = 0 và q = 1",
      "Khi p và q có cùng chân trị (cùng đúng hoặc cùng sai)",
      "Chỉ khi cả p và q cùng bằng 1"
    ],
    "correctAnswer": 2,
    "explanation": "Phép kéo theo hai chiều $p \\leftrightarrow q$ nhận giá trị $1$ khi và chỉ khi $p$ và $q$ có cùng giá trị chân lý: $(1 \\leftrightarrow 1) = 1$ và $(0 \\leftrightarrow 0) = 1$."
  },
  {
    "id": "c1_l1_q5",
    "chapterId": "c1",
    "lessonId": "l1_1",
    "lessonTitle": "§1 Pháp tính mệnh đề",
    "difficulty": "Thông hiểu",
    "question": "Cho hai mệnh đề P: 'Minh giỏi Toán' và Q: 'Minh chăm học'. Mệnh đề 'Minh giỏi Toán nhưng không chăm học' được biểu diễn là:",
    "options": [
      "$P \\lor \\neg Q$",
      "$P \\land \\neg Q$",
      "$P \\to \\neg Q$",
      "$\\neg P \\land Q$"
    ],
    "correctAnswer": 1,
    "explanation": "Liên từ 'nhưng' trong logic mang ý nghĩa là phép hội ($\\land$). 'Không chăm học' là phủ định $\\neg Q$. Do đó biểu diễn là $P \\land \\neg Q$."
  },
  {
    "id": "c1_l1_q6",
    "chapterId": "c1",
    "lessonId": "l1_1",
    "lessonTitle": "§1 Pháp tính mệnh đề",
    "difficulty": "Nhận biết",
    "question": "Cho toán tử Sheffer Stroke (phép NAND, ký hiệu $\\mid$) định nghĩa bởi $p \\mid q \\equiv \\neg (p \\land q)$. Mệnh đề $\\neg p$ tương đương với:",
    "options": [
      "$p \\mid p$",
      "$p \\mid 1$",
      "Cả A và B đều đúng.",
      "Không biểu diễn được qua NAND."
    ],
    "correctAnswer": 2,
    "explanation": "Ta có: $p \\mid p \\equiv \\neg(p \\land p) \\equiv \\neg p$. Đồng thời $p \\mid 1 \\equiv \\neg(p \\land 1) \\equiv \\neg p$. Vì vậy cả hai cách biểu diễn đều đúng."
  },
  {
    "id": "c1_l1_q7",
    "chapterId": "c1",
    "lessonId": "l1_1",
    "lessonTitle": "§1 Pháp tính mệnh đề",
    "difficulty": "Vận dụng",
    "question": "Cho toán tử Peirce (phép NOR, ký hiệu $\\downarrow$) định nghĩa bởi $p \\downarrow q \\equiv \\neg (p \\lor q)$. Biểu diễn của $p \\land q$ chỉ dùng toán tử $\\downarrow$ là:",
    "options": [
      "$(p \\downarrow p) \\downarrow (q \\downarrow q)$",
      "$(p \\downarrow q) \\downarrow (p \\downarrow q)$",
      "$p \\downarrow (q \\downarrow p)$",
      "$\\neg(p \\downarrow q)$"
    ],
    "correctAnswer": 0,
    "explanation": "Ta có $p \\downarrow p \\equiv \\neg p$ và $q \\downarrow q \\equiv \\neg q$. Khi đó $(p \\downarrow p) \\downarrow (q \\downarrow q) \\equiv \\neg p \\downarrow \\neg q \\equiv \\neg(\\neg p \\lor \\neg q) \\equiv p \\land q$ (theo luật De Morgan)."
  },
  {
    "id": "c1_l1_q8",
    "chapterId": "c1",
    "lessonId": "l1_1",
    "lessonTitle": "§1 Pháp tính mệnh đề",
    "difficulty": "Thông hiểu",
    "question": "Giả sử phép toán mới $\\odot$ được định nghĩa bằng bảng chân lý: $T \\odot T = F$, $T \\odot F = T$, $F \\odot T = F$, $F \\odot F = T$. Khi đó $p \\odot q$ tương đương logic với:",
    "options": [
      "$\\neg p$",
      "$\\neg q$",
      "$p \\to q$",
      "$q \\to p$"
    ],
    "correctAnswer": 1,
    "explanation": "Khi $q = T$ thì kết quả là $F$; khi $q = F$ thì kết quả là $T$ (không phụ thuộc vào giá trị của $p$). Bảng chân trị này trùng khớp hoàn toàn với $\\neg q$."
  },
  {
    "id": "c1_l1_q9",
    "chapterId": "c1",
    "lessonId": "l1_1",
    "lessonTitle": "§1 Pháp tính mệnh đề",
    "difficulty": "Nhận biết",
    "question": "Cho bảng chân trị có $n$ biến logic $p_1, p_2, \\dots, p_n$. Có bao nhiêu hàm chân lý (hàm Boole) khác nhau có thể được tạo thành từ $n$ biến này?",
    "options": [
      "$2^n$",
      "$2^{2^n}$",
      "$n^2$",
      "$2^{n-1}$"
    ],
    "correctAnswer": 1,
    "explanation": "Một bảng chân trị $n$ biến có $2^n$ dòng. Mỗi dòng có $2$ khả năng gán chân trị ($0$ hoặc $1$). Theo nguyên lý nhân, số hàm Bool khác nhau là $2^{2^n}$."
  },
  {
    "id": "c1_l1_q10",
    "chapterId": "c1",
    "lessonId": "l1_1",
    "lessonTitle": "§1 Pháp tính mệnh đề",
    "difficulty": "Thông hiểu",
    "question": "Cho $P = 1, Q = 0, R = 1$. Chân trị của biểu thức logic: $(P \\lor Q) \\leftrightarrow (R \\land P)$ là:",
    "options": [
      "1 (Đúng)",
      "0 (Sai)",
      "Không xác định",
      "Phụ thuộc vào Q"
    ],
    "correctAnswer": 0,
    "explanation": "Ta tính: $P \\lor Q = 1 \\lor 0 = 1$. Tiếp theo: $R \\land P = 1 \\land 1 = 1$. Do đó: $1 \\leftrightarrow 1 = 1$ (Đúng)."
  },
  {
    "id": "c1_l1_q11",
    "chapterId": "c1",
    "lessonId": "l1_1",
    "lessonTitle": "§1 Pháp tính mệnh đề",
    "difficulty": "Vận dụng",
    "question": "Một mệnh đề có 5 biến logic độc lập. Bảng chân trị của mệnh đề này có bao nhiêu dòng?",
    "options": [
      "10 dòng",
      "16 dòng",
      "32 dòng",
      "64 dòng"
    ],
    "correctAnswer": 2,
    "explanation": "Số dòng của bảng chân trị $n$ biến là $2^n$. Với $n = 5$ biến, số dòng là $2^5 = 32$ dòng."
  },
  {
    "id": "c1_l1_q12",
    "chapterId": "c1",
    "lessonId": "l1_1",
    "lessonTitle": "§1 Pháp tính mệnh đề",
    "difficulty": "Thông hiểu",
    "question": "Phủ định của mệnh đề: 'Hôm nay trời mưa và tôi không mang áo mưa' là:",
    "options": [
      "Hôm nay trời không mưa và tôi mang áo mưa",
      "Hôm nay trời không mưa hoặc tôi mang áo mưa",
      "Nếu hôm nay trời mưa thì tôi mang áo mưa",
      "Hôm nay trời mưa hoặc tôi mang áo mưa"
    ],
    "correctAnswer": 1,
    "explanation": "Mệnh đề có dạng $p \\land \\neg q$. Phủ định là $\\neg (p \\land \\neg q) \\equiv \\neg p \\lor q$: 'Hôm nay trời không mưa hoặc tôi mang áo mưa'."
  },
  {
    "id": "c1_l1_q13",
    "chapterId": "c1",
    "lessonId": "l1_1",
    "lessonTitle": "§1 Pháp tính mệnh đề",
    "difficulty": "Nhận biết",
    "question": "Trong logic mệnh đề, thứ tự ưu tiên thực hiện các phép nối khi không có dấu ngoặc là:",
    "options": [
      "$\\neg$ trước, rồi đến $\\land$, tiếp đến $\\lor$, sau đó là $\\to$ và cuối cùng là $\\leftrightarrow$",
      "$\\to$ trước, rồi đến $\\leftrightarrow$, $\\land$, $\\lor$, $\\neg$",
      "$\\land$ và $\\lor$ trước, rồi đến $\\neg$, $\\to$, $\\leftrightarrow$",
      "Tất cả các phép nối có mức ưu tiên ngang nhau"
    ],
    "correctAnswer": 0,
    "explanation": "Thứ tự ưu tiên chuẩn mực quốc tế: Phủ định ($\\neg$) có mức ưu tiên cao nhất, sau đó đến Hội ($\\land$), Tuyển ($\\lor$), Kéo theo ($\\to$), và cuối cùng là Kéo theo hai chiều ($\\leftrightarrow$)."
  },
  {
    "id": "c1_l1_q14",
    "chapterId": "c1",
    "lessonId": "l1_1",
    "lessonTitle": "§1 Pháp tính mệnh đề",
    "difficulty": "Thông hiểu",
    "question": "Mệnh đề: 'Mặt trời mọc ở hướng Tây khi và chỉ khi 1 + 1 = 3' có chân trị là:",
    "options": [
      "Đúng (1)",
      "Sai (0)",
      "Không xác định",
      "Mâu thuẫn"
    ],
    "correctAnswer": 0,
    "explanation": "Đặt p: 'Mặt trời mọc ở hướng Tây' (sai, chân trị 0), q: '1 + 1 = 3' (sai, chân trị 0). Ta có: $0 \\leftrightarrow 0 = 1$ (Đúng)."
  },
  {
    "id": "c1_l1_q15",
    "chapterId": "c1",
    "lessonId": "l1_1",
    "lessonTitle": "§1 Pháp tính mệnh đề",
    "difficulty": "Vận dụng",
    "question": "Biểu thức $(p \\land q) \\lor (\\neg p \\land \\neg q)$ nhận giá trị 1 khi và chỉ khi:",
    "options": [
      "p và q có cùng chân trị (tương đương logic với $p \\leftrightarrow q)$",
      "p và q khác chân trị",
      "$p = 1, q = 0$",
      "$p = 0, q = 1$"
    ],
    "correctAnswer": 0,
    "explanation": "Biểu thức $(p \\land q) \\lor (\\neg p \\land \\neg q)$ nhận giá trị $1$ khi cả hai cùng đúng ($p=1, q=1$) hoặc cả hai cùng sai ($p=0, q=0$). Đây chính là dạng chuẩn tắc tuyển của mệnh đề tương đương $p \\leftrightarrow q$."
  },
  {
    "id": "c1_l2_q1",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Nhận biết",
    "question": "Mệnh đề kéo theo $p \\rightarrow q$ chỉ nhận chân trị Sai ($0$) trong trường hợp duy nhất nào?",
    "options": [
      "p = 0 và q = 0",
      "p = 1 và q = 0",
      "p = 0 và q = 1",
      "p = 1 và q = 1"
    ],
    "correctAnswer": 1,
    "explanation": "Theo định nghĩa bảng chân trị của phép kéo theo, $p \\to q$ chỉ sai duy nhất khi tiền đề p đúng mà kết luận q sai $(1 \\to 0 = 0)$. Khi tiền đề p sai (0), mệnh đề luôn đúng."
  },
  {
    "id": "c1_l2_q2",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Nhận biết",
    "question": "Luật phản đảo (Contrapositive Law) khẳng định mệnh đề $p \\rightarrow q$ luôn tương đương logic với:",
    "options": [
      "$q \\to p$",
      "$\\neg p \\to \\neg q$",
      "$\\neg q \\to \\neg p$",
      "$\\neg p \\lor \\neg q$"
    ],
    "correctAnswer": 2,
    "explanation": "Luật phản đảo phát biểu rằng: $p \\to q \\equiv \\neg q \\to \\neg p$. Mệnh đề gốc luôn luôn có cùng giá trị chân lý với mệnh đề phản đảo của nó."
  },
  {
    "id": "c1_l2_q3",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Thông hiểu",
    "question": "Mệnh đề đảo (Converse) và mệnh đề nghịch đảo (Inverse) của $p \\rightarrow q$ lần lượt là:",
    "options": [
      "$q \\to p$ và $\\neg p \\to \\neg q$",
      "$\\neg q \\to \\neg p$ và $q \\to p$",
      "$\\neg p \\to \\neg q$ và $\\neg q \\to \\neg p$",
      "$q \\to p$ và $\\neg q \\to \\neg p$"
    ],
    "correctAnswer": 0,
    "explanation": "Từ mệnh đề gốc $p \\to q$: Mệnh đề đảo là $q \\to p$; Mệnh đề nghịch đảo là $\\neg p \\to \\neg q$; Mệnh đề phản đảo là $\\neg q \\to \\neg p$."
  },
  {
    "id": "c1_l2_q4",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Thông hiểu",
    "question": "Mối quan hệ chân lý giữa mệnh đề đảo ($q \\rightarrow p$) và mệnh đề nghịch đảo ($\\neg p \\rightarrow \\neg q$) là:",
    "options": [
      "Chúng là cặp mệnh đề phản đảo của nhau nên luôn luôn tương đương logic",
      "Chúng luôn luôn có chân trị trái ngược nhau",
      "Chúng không có quan hệ logic nào",
      "Chúng luôn là hằng sai"
    ],
    "correctAnswer": 0,
    "explanation": "Phản đảo của $(q \\to p)$ chính là $\\neg p \\to \\neg q$. Vì một mệnh đề luôn tương đương logic với phản đảo của nó, nên mệnh đề đảo và mệnh đề nghịch đảo luôn luôn có cùng chân trị."
  },
  {
    "id": "c1_l2_q5",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Thông hiểu",
    "question": "Mệnh đề phản đảo của $p \\rightarrow \\neg q$ là:",
    "options": [
      "$q \\to \\neg p$",
      "$\\neg q \\to p$",
      "$\\neg p \\to q$",
      "$q \\to p$"
    ],
    "correctAnswer": 0,
    "explanation": "Áp dụng định nghĩa: Phản đảo của $A \\to B$ là $\\neg B \\to \\neg A$. Với $A = p, B = \\neg q$, ta có $\\neg(\\neg q) \\to \\neg p \\equiv q \\to \\neg p$."
  },
  {
    "id": "c1_l2_q6",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Thông hiểu",
    "question": "Phát biểu nào sau đây diễn đạt đúng mệnh đề phản đảo của câu: 'Nếu số tự nhiên n chia hết cho 4 thì n là số chẵn'?",
    "options": [
      "Nếu số tự nhiên n là số chẵn thì n chia hết cho 4",
      "Nếu số tự nhiên n không phải là số chẵn (tức n lẻ) thì n không chia hết cho 4",
      "Nếu số tự nhiên n không chia hết cho 4 thì n là số lẻ",
      "Số tự nhiên n chia hết cho 4 và n không phải số chẵn"
    ],
    "correctAnswer": 1,
    "explanation": "Mệnh đề gốc có dạng $p \\to q$ với p: 'n chia hết cho 4', q: 'n chẵn'. Mệnh đề phản đảo là $\\neg q \\to \\neg p$: 'Nếu n không phải là số chẵn (tức n lẻ) thì n không chia hết cho 4'."
  },
  {
    "id": "c1_l2_q7",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Nhận biết",
    "question": "Phép kéo theo $p \\rightarrow q$ có thể viết lại dưới dạng chỉ gồm phép phủ định và phép tuyển là:",
    "options": [
      "$\\neg p \\lor q$",
      "$p \\lor \\neg q$",
      "$\\neg p \\land q$",
      "$p \\land \\neg q$"
    ],
    "correctAnswer": 0,
    "explanation": "Định lý tương đương cơ bản của phép kéo theo: $p \\to q \\equiv \\neg p \\lor q$."
  },
  {
    "id": "c1_l2_q8",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Nhận biết",
    "question": "Phủ định của mệnh đề kéo theo $\\neg(p \\rightarrow q)$ tương đương với:",
    "options": [
      "$p \\land \\neg q$",
      "$\\neg p \\lor q$",
      "$\\neg p \\land q$",
      "$p \\to \\neg q$"
    ],
    "correctAnswer": 0,
    "explanation": "Ta có: $\\neg (p \\to q) \\equiv \\neg (\\neg p \\lor q) \\equiv \\neg (\\neg p) \\land \\neg q \\equiv p \\land \\neg q$."
  },
  {
    "id": "c1_l2_q9",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Thông hiểu",
    "question": "Luật xuất nhập phát biểu đẳng thức logic nào sau đây?",
    "options": [
      "$(p \\land q) \\to r \\equiv p \\to (q \\to r)$",
      "$(p \\lor q) \\to r \\equiv p \\to (q \\lor r)$",
      "$(p \\to q) \\to r \\equiv p \\to (q \\land r)$",
      "$p \\to (q \\land r) \\equiv (p \\to q) \\land r$"
    ],
    "correctAnswer": 0,
    "explanation": "Luật xuất nhập (Exportation Law) khẳng định: $(p \\land q) \\to r \\equiv p \\to (q \\to r)$. Chứng minh: $(p \\land q) \\to r \\equiv \\neg (p \\land q) \\lor r \\equiv \\neg p \\lor \\neg q \\lor r \\equiv \\neg p \\lor (\\neg q \\lor r) \\equiv p \\to (q \\to r)$."
  },
  {
    "id": "c1_l2_q10",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Thông hiểu",
    "question": "Biểu thức $(p \\rightarrow q) \\land (p \\rightarrow r)$ tương đương logic với biểu thức nào?",
    "options": [
      "$p \\to (q \\land r)$",
      "$p \\to (q \\lor r)$",
      "$(p \\land q) \\to r$",
      "$(p \\lor q) \\to r$"
    ],
    "correctAnswer": 0,
    "explanation": "$(p \\to q) \\land (p \\to r) \\equiv (\\neg p \\lor q) \\land (\\neg p \\lor r) \\equiv \\neg p \\lor (q \\land r) \\equiv p \\to (q \\land r).$"
  },
  {
    "id": "c1_l2_q11",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Thông hiểu",
    "question": "Biểu thức $(p \\rightarrow r) \\lor (q \\rightarrow r)$ tương đương logic với biểu thức nào?",
    "options": [
      "$(p \\land q) \\to r$",
      "$(p \\lor q) \\to r$",
      "$p \\to (q \\lor r)$",
      "$(p \\to q) \\to r$"
    ],
    "correctAnswer": 0,
    "explanation": "$(p \\to r) \\lor (q \\to r) \\equiv (\\neg p \\lor r) \\lor (\\neg q \\lor r) \\equiv (\\neg p \\lor \\neg q) \\lor r \\equiv \\neg (p \\land q) \\lor r \\equiv (p \\land q) \\to r.$"
  },
  {
    "id": "c1_l2_q12",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Thông hiểu",
    "question": "Biểu thức $(p \\rightarrow r) \\land (q \\rightarrow r)$ tương đương logic với biểu thức nào?",
    "options": [
      "$(p \\lor q) \\to r$",
      "$(p \\land q) \\to r$",
      "$p \\land q \\land r$",
      "$(p \\to q) \\land r$"
    ],
    "correctAnswer": 0,
    "explanation": "$(p \\to r) \\land (q \\to r) \\equiv (\\neg p \\lor r) \\land (\\neg q \\lor r) \\equiv (\\neg p \\land \\neg q) \\lor r \\equiv \\neg (p \\lor q) \\lor r \\equiv (p \\lor q) \\to r.$"
  },
  {
    "id": "c1_l2_q13",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Thông hiểu",
    "question": "Biểu thức $(p \\rightarrow q) \\lor (p \\rightarrow r)$ tương đương logic với biểu thức nào?",
    "options": [
      "$p \\to (q \\lor r)$",
      "$p \\to (q \\land r)$",
      "$(p \\land q) \\to r$",
      "$(p \\lor q) \\to r$"
    ],
    "correctAnswer": 0,
    "explanation": "$(p \\to q) \\lor (p \\to r) \\equiv (\\neg p \\lor q) \\lor (\\neg p \\lor r) \\equiv \\neg p \\lor (q \\lor r) \\equiv p \\to (q \\lor r).$"
  },
  {
    "id": "c1_l2_q14",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Vận dụng",
    "question": "Biểu thức $A = (p \\rightarrow q) \\lor (q \\rightarrow p)$ luôn nhận giá trị chân lý nào?",
    "options": [
      "Luôn bằng 1 (Hằng đúng - Tautology)",
      "Luôn bằng 0 (Mâu thuẫn)",
      "Phụ thuộc vào giá trị của p",
      "Phụ thuộc vào giá trị của q"
    ],
    "correctAnswer": 0,
    "explanation": "Biến đổi: $(\\neg p \\lor q) \\lor (\\neg q \\lor p) \\equiv (\\neg p \\lor p) \\lor (q \\lor \\neg q) \\equiv 1 \\lor 1 \\equiv 1$. Do đó đây là một hằng đúng."
  },
  {
    "id": "c1_l2_q15",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Thông hiểu",
    "question": "Khẳng định nào sau đây là hằng đúng?",
    "options": [
      "$p \\to (q \\to p)$",
      "$(p \\land q) \\to p$",
      "$p \\lor (p \\to q)$",
      "Tất cả các khẳng định trên đều là hằng đúng"
    ],
    "correctAnswer": 3,
    "explanation": "1) $p \\to (\\neg q \\lor p) \\equiv \\neg p \\lor \\neg q \\lor p \\equiv 1$. 2) $\\neg(p \\land q) \\lor p \\equiv \\neg p \\lor \\neg q \\lor p \\equiv 1$. 3) $p \\lor (\\neg p \\lor q) \\equiv (p \\lor \\neg p) \\lor q \\equiv 1$. Cả $3$ khẳng định đều là hằng đúng."
  },
  {
    "id": "c1_l2_q16",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Vận dụng",
    "question": "Cho mệnh đề: $p \\rightarrow (q \\lor r)$ nhận giá trị Sai ($F$). Chân trị của $p, q, r$ là:",
    "options": [
      "$p = 1, q = 0, r = 0$",
      "$p = 0, q = 1, r = 1$",
      "$p = 1, q = 1, r = 0$",
      "$p = 1, q = 0, r = 1$"
    ],
    "correctAnswer": 0,
    "explanation": "Phép kéo theo A $\\to$ B nhận 0 khi A = 1 và B = 0. Do đó p = 1 và $q \\lor r = 0$ $\\iff$ q = 0, r = 0. Vậy p = 1, q = 0, r = 0."
  },
  {
    "id": "c1_l2_q17",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Vận dụng",
    "question": "Mệnh đề phản đảo của mệnh đề phức hợp $(p \\land q) \\rightarrow r$ là:",
    "options": [
      "$\\neg r \\to (\\neg p \\lor \\neg q)$",
      "$\\neg r \\to (\\neg p \\land \\neg q)$",
      "$r \\to (p \\land q)$",
      "$(\\neg p \\lor \\neg q) \\to \\neg r$"
    ],
    "correctAnswer": 0,
    "explanation": "Phản đảo của $A \\to B$ là $\\neg B \\to \\neg A$. Với $A = p \\land q$ và $B = r$: $\\neg r \\to \\neg(p \\land q) \\equiv \\neg r \\to (\\neg p \\lor \\neg q)$ theo luật De Morgan."
  },
  {
    "id": "c1_l2_q18",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Thông hiểu",
    "question": "Phát biểu 'P là điều kiện đủ của Q' và 'P chỉ khi Q' lần lượt tương ứng với các công thức logic nào?",
    "options": [
      "$P \\to Q$ và $P \\to Q$",
      "$Q \\to P$ và $P \\to Q$",
      "$P \\to Q$ và $Q \\to P$",
      "$P \\leftrightarrow Q$ và $P \\to Q$"
    ],
    "correctAnswer": 0,
    "explanation": "Trong toán học: 'P là điều kiện đủ để có Q' có nghĩa là nếu P xảy ra thì chắc chắn Q xảy ra $(P \\to Q)$. 'P chỉ khi Q' (P only if Q) cũng đồng nghĩa với việc nếu P đúng thì bắt buộc Q phải đúng $(P \\to Q)$."
  },
  {
    "id": "c1_l2_q19",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Vận dụng",
    "question": "Rút gọn biểu thức $E = (p \\rightarrow q) \\land (q \\rightarrow \\neg p)$:",
    "options": [
      "$\\neg p$",
      "$\\neg q$",
      "$p \\land \\neg q$",
      "$0$"
    ],
    "correctAnswer": 0,
    "explanation": "$(\\neg p \\lor q) \\land (\\neg q \\lor \\neg p) \\equiv \\neg p \\lor (q \\land \\neg q) \\equiv \\neg p \\lor 0 \\equiv \\neg p.$"
  },
  {
    "id": "c1_l2_q20",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Vận dụng",
    "question": "Biết $(p \\land \\neg q) \\rightarrow (r \\lor s)$ nhận chân trị Sai ($F$). Khẳng định nào sau đây chắc chắn đúng?",
    "options": [
      "r = 0 và s = 0",
      "$p = 0$",
      "$q = 1$",
      "p = 1 và q = 1"
    ],
    "correctAnswer": 0,
    "explanation": "Tiền đề $(p \\land \\neg q) = 1 \\Rightarrow p = 1, q = 0$. Kết luận $(r \\lor s) = 0 \\Rightarrow r = 0$ và $s = 0$. Do đó khẳng định chắc chắn đúng là $r = 0$ và $s = 0$."
  },
  {
    "id": "c1_l3_q1",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Nhận biết",
    "question": "Theo quy tắc De Morgan, phủ định của mệnh đề $p \\land q$ tương đương với:",
    "options": [
      "$\\neg p \\lor \\neg q$",
      "$\\neg p \\land \\neg q$",
      "$p \\lor q$",
      "$\\neg p \\to \\neg q$"
    ],
    "correctAnswer": 0,
    "explanation": "Quy tắc De Morgan: $\\neg (p \\land q) \\equiv \\neg p \\lor \\neg q$ và $\\neg (p \\lor q) \\equiv \\neg p \\land \\neg q$."
  },
  {
    "id": "c1_l3_q2",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Nhận biết",
    "question": "Đẳng thức logic nào sau đây biểu diễn quy luật Bù trừ (Complement Laws)?",
    "options": [
      "$p \\lor \\neg p \\equiv 1$ và $p \\land \\neg p \\equiv 0$",
      "$p \\lor 0 \\equiv p$ và $p \\land 1 \\equiv p$",
      "$p \\lor 1 \\equiv 1$ và $p \\land 0 \\equiv 0$",
      "$\\neg (\\neg p) \\equiv p$"
    ],
    "correctAnswer": 0,
    "explanation": "Luật về phần tử bù: Mệnh đề tuyển với phủ định của nó là hằng đúng ($p \\lor \\neg p \\equiv 1$), và hội với phủ định của nó là mâu thuẫn ($p \\land \\neg p \\equiv 0$)."
  },
  {
    "id": "c1_l3_q3",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Nhận biết",
    "question": "Đẳng thức logic nào dưới đây là biểu diễn của quy luật Thống trị / Nuốt (Domination Laws)?",
    "options": [
      "$p \\lor 1 \\equiv 1$ và $p \\land 0 \\equiv 0$",
      "$p \\lor 0 \\equiv p$ và $p \\land 1 \\equiv p$",
      "$p \\lor p \\equiv p$ và $p \\land p \\equiv p$",
      "$p \\lor (p \\land q) \\equiv p$"
    ],
    "correctAnswer": 0,
    "explanation": "Luật thống trị: $p \\lor 1 \\equiv 1$ và $p \\land 0 \\equiv 0$."
  },
  {
    "id": "c1_l3_q4",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Nhận biết",
    "question": "Áp dụng luật hấp thụ (Absorption Law), mệnh đề $p \\lor (p \\land q)$ tương đương với:",
    "options": [
      "$p$",
      "$q$",
      "$p \\lor q$",
      "$1$"
    ],
    "correctAnswer": 0,
    "explanation": "Theo Luật hấp thụ: $p \\lor (p \\land q) \\equiv p$ và $p \\land (p \\lor q) \\equiv p$."
  },
  {
    "id": "c1_l3_q5",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Thông hiểu",
    "question": "Biểu thức rút gọn tối giản của $E = p \\lor ( \\neg p \\land q )$ là:",
    "options": [
      "$p \\lor q$",
      "$p \\land q$",
      "$\\neg p \\lor q$",
      "$p$"
    ],
    "correctAnswer": 0,
    "explanation": "Dùng luật phân bố: $p \\lor (\\neg p \\land q) \\equiv (p \\lor \\neg p) \\land (p \\lor q) \\equiv 1 \\land (p \\lor q) \\equiv p \\lor q$."
  },
  {
    "id": "c1_l3_q6",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Thông hiểu",
    "question": "Biểu thức rút gọn tối giản của $E = p \\land ( \\neg p \\lor q )$ là:",
    "options": [
      "$p \\land q$",
      "$p \\lor q$",
      "$\\neg p \\land q$",
      "$q$"
    ],
    "correctAnswer": 0,
    "explanation": "Dùng luật phân bố: $p \\land (\\neg p \\lor q) \\equiv (p \\land \\neg p) \\lor (p \\land q) \\equiv 0 \\lor (p \\land q) \\equiv p \\land q$."
  },
  {
    "id": "c1_l3_q7",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Thông hiểu",
    "question": "Dạng rút gọn của $E = (p \\land q) \\lor (p \\land \\neg q)$ là:",
    "options": [
      "$p$",
      "$q$",
      "$\\neg p$",
      "$1$"
    ],
    "correctAnswer": 0,
    "explanation": "Đặt p ra ngoài theo luật phân bố: $p \\land (q \\lor \\neg q) \\equiv p \\land 1 \\equiv p$."
  },
  {
    "id": "c1_l3_q8",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Thông hiểu",
    "question": "Dạng rút gọn của $E = (p \\lor q) \\land (p \\lor \\neg q)$ là:",
    "options": [
      "$p$",
      "$q$",
      "$\\neg q$",
      "$0$"
    ],
    "correctAnswer": 0,
    "explanation": "Phân bố của phép tuyển đối với hội: $p \\lor (q \\land \\neg q) \\equiv p \\lor 0 \\equiv p$."
  },
  {
    "id": "c1_l3_q9",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Vận dụng",
    "question": "Rút gọn biểu thức $A = \\neg [ \\neg (p \\land q) \\rightarrow \\neg q ]$:",
    "options": [
      "$\\neg p \\land q$",
      "$p \\land \\neg q$",
      "$\\neg p \\land \\neg q$",
      "$0$"
    ],
    "correctAnswer": 0,
    "explanation": "Biến đổi: $\\neg (p \\land q) \\to \\neg q \\equiv \\neg (\\neg (p \\land q)) \\lor \\neg q \\equiv (p \\land q) \\lor \\neg q \\equiv (p \\lor \\neg q) \\land (q \\lor \\neg q) \\equiv p \\lor \\neg q$. Lấy phủ định ngoài: $\\neg (p \\lor \\neg q) \\equiv \\neg p \\land q$."
  },
  {
    "id": "c1_l3_q10",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Thông hiểu",
    "question": "Đơn giản hóa biểu thức $A = (p \\land q) \\lor (\\neg p \\land q) \\lor (p \\land \\neg q)$:",
    "options": [
      "$p \\lor q$",
      "$p \\land q$",
      "$\\neg p \\lor \\neg q$",
      "$1$"
    ],
    "correctAnswer": 0,
    "explanation": "$[(p \\land q) \\lor (\\neg p \\land q)] \\lor (p \\land \\neg q) \\equiv [(p \\lor \\neg p) \\land q] \\lor (p \\land \\neg q) \\equiv q \\lor (p \\land \\neg q) \\equiv (q \\lor p) \\land (q \\lor \\neg q) \\equiv p \\lor q.$"
  },
  {
    "id": "c1_l3_q11",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Vận dụng",
    "question": "Phủ định của biểu thức $p \\rightarrow (q \\land \\neg r)$ là:",
    "options": [
      "$p \\land (\\neg q \\lor r)$",
      "$\\neg p \\lor (q \\land \\neg r)$",
      "$\\neg p \\land (q \\lor \\neg r)$",
      "$p \\to (\\neg q \\lor r)$"
    ],
    "correctAnswer": 0,
    "explanation": "$\\neg [p \\to (q \\land \\neg r)] \\equiv p \\land \\neg (q \\land \\neg r) \\equiv p \\land (\\neg q \\lor r).$"
  },
  {
    "id": "c1_l3_q12",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Thông hiểu",
    "question": "Biểu thức $[(p \\rightarrow q) \\rightarrow q]$ tương đương logic với:",
    "options": [
      "$p \\lor q$",
      "$p \\land q$",
      "$\\neg p \\lor q$",
      "$p \\to q$"
    ],
    "correctAnswer": 0,
    "explanation": "$(p \\to q) \\to q \\equiv \\neg (\\neg p \\lor q) \\lor q \\equiv (p \\land \\neg q) \\lor q \\equiv (p \\lor q) \\land (\\neg q \\lor q) \\equiv p \\lor q.$"
  },
  {
    "id": "c1_l3_q13",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Nhận biết",
    "question": "Rút gọn biểu thức $M = (p \\lor q \\lor r) \\land (p \\lor q \\lor \\neg r)$:",
    "options": [
      "$p \\lor q$",
      "$p \\land q$",
      "$r \\lor \\neg r$",
      "$p \\lor r$"
    ],
    "correctAnswer": 0,
    "explanation": "Đặt X = $p \\lor q$. Biểu thức có dạng (X $\\lor$ $r) \\land (X \\lor \\neg r) \\equiv X \\lor (r \\land \\neg r) \\equiv X \\lor 0 \\equiv X \\equiv p \\lor q$."
  },
  {
    "id": "c1_l3_q14",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Thông hiểu",
    "question": "Biểu thức $p \\land (\\neg p \\lor q \\lor (q \\rightarrow p))$ tương đương với:",
    "options": [
      "$p$",
      "$q$",
      "$0$",
      "$\\neg p$"
    ],
    "correctAnswer": 0,
    "explanation": "Để ý $\\neg p \\lor (q \\to p) \\equiv \\neg p \\lor \\neg q \\lor p \\equiv (\\neg p \\lor p) \\lor \\neg q \\equiv 1 \\lor \\neg q \\equiv 1$. Do đó biểu thức trong ngoặc bằng 1. Ta được $p \\land 1 \\equiv p$."
  },
  {
    "id": "c1_l3_q15",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Vận dụng",
    "question": "Rút gọn biểu thức $K = (p \\land q) \\lor (\\neg p \\land r) \\lor (q \\land r)$ theo quy tắc Đồng thuận (Consensus Theorem):",
    "options": [
      "$(p \\land q) \\lor (\\neg p \\land r)$",
      "$(p \\land q) \\lor (q \\land r)$",
      "$(\\neg p \\land r) \\lor (q \\land r)$",
      "$p \\lor q \\lor r$"
    ],
    "correctAnswer": 0,
    "explanation": "Định lý đồng thuận: $(x \\land y) \\lor (\\neg x \\land z) \\lor (y \\land z) \\equiv (x \\land y) \\lor (\\neg x \\land z)$. Số hạng $(q \\land r)$ là số hạng đồng thuận dư thừa bị triệt tiêu hoàn toàn."
  },
  {
    "id": "c1_l3_q16",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Nhận biết",
    "question": "Dạng chuẩn tắc hội liên hoàn (CNF) của $p \\leftrightarrow q$ là:",
    "options": [
      "$(\\neg p \\lor q) \\land (p \\lor \\neg q)$",
      "$(p \\land q) \\lor (\\neg p \\land \\neg q)$",
      "$(\\neg p \\lor \\neg q) \\land (p \\lor q)$",
      "$(p \\lor q) \\land (\\neg p \\lor \\neg q)$"
    ],
    "correctAnswer": 0,
    "explanation": "CNF là tích của các tổng: $p \\leftrightarrow q \\equiv (p \\to q) \\land (q \\to p) \\equiv (\\neg p \\lor q) \\land (\\neg q \\lor p) \\equiv (\\neg p \\lor q) \\land (p \\lor \\neg q)$."
  },
  {
    "id": "c1_l3_q17",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Nhận biết",
    "question": "Dạng chuẩn tắc tuyển liên hoàn (DNF) của $p \\leftrightarrow q$ là:",
    "options": [
      "$(p \\land q) \\lor (\\neg p \\land \\neg q)$",
      "$(\\neg p \\lor q) \\land (p \\lor \\neg q)$",
      "$(p \\land \\neg q) \\lor (\\neg p \\land q)$",
      "$(p \\lor \\neg q) \\land (\\neg p \\lor q)$"
    ],
    "correctAnswer": 0,
    "explanation": "DNF là tổng của các tích: $p \\leftrightarrow q$ nhận $1$ khi $(p=1, q=1)$ hoặc $(p=0, q=0)$, tương ứng là $(p \\land q) \\lor (\\neg p \\land \\neg q)$."
  },
  {
    "id": "c1_l3_q18",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Thông hiểu",
    "question": "Rút gọn mệnh đề $E = (p \\rightarrow r) \\land (q \\rightarrow r) \\land (p \\lor q)$:",
    "options": [
      "$r$",
      "$p \\land q$",
      "$p \\lor q$",
      "$p \\to r$"
    ],
    "correctAnswer": 0,
    "explanation": "Ta có $(p \\to r) \\land (q \\to r) \\equiv (p \\lor q) \\to r$. Kết hợp với tiền đề $(p \\lor q)$ ta suy ra kết quả tối giản là $r$."
  },
  {
    "id": "c1_l3_q19",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Thông hiểu",
    "question": "Mệnh đề nào sau đây là một mâu thuẫn (luôn nhận giá trị 0)?",
    "options": [
      "$(p \\lor q) \\land (\\neg p \\land \\neg q)$",
      "$(p \\to q) \\land (p \\land \\neg q)$",
      "$[p \\land (p \\to q)] \\land \\neg q$",
      "Tất cả các phương án trên đều là mâu thuẫn."
    ],
    "correctAnswer": 3,
    "explanation": "A: $(p \\lor q) \\land \\neg (p \\lor q) \\equiv 0$. B: $(p \\to q) \\land \\neg (p \\to q) \\equiv 0$. C: $(p \\land q) \\land \\neg q \\equiv 0$. Tất cả đều là mâu thuẫn."
  },
  {
    "id": "c1_l3_q20",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Thông hiểu",
    "question": "Biểu thức logic nào dưới đây là một hằng đúng (tautology)?",
    "options": [
      "$[(p \\lor q) \\land \\neg p] \\to q$",
      "$[(p \\lor q) \\land p] \\to \\neg q$",
      "$(p \\to q) \\to (q \\to p)$",
      "$(p \\land q) \\to (p \\lor r \\to q)$"
    ],
    "correctAnswer": 0,
    "explanation": "$[(p \\lor q) \\land \\neg p] \\to q \\equiv (q \\land \\neg p) \\to q \\equiv \\neg (q \\land \\neg p) \\lor q \\equiv \\neg q \\lor p \\lor q \\equiv 1 \\lor p \\equiv 1$ (Hằng đúng)."
  },
  {
    "id": "c1_l3_q21",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Thông hiểu",
    "question": "Đẳng thức logic nào sau đây biểu diễn quy luật Lũy đẳng (Idempotent Laws)?",
    "options": [
      "$p \\lor p \\equiv p$ và $p \\land p \\equiv p$",
      "$p \\lor 0 \\equiv p$ và $p \\land 1 \\equiv p$",
      "$p \\lor \\neg p \\equiv 1$ và $p \\land \\neg p \\equiv 0$",
      "$p \\lor 1 \\equiv 1$ và $p \\land 0 \\equiv 0$"
    ],
    "correctAnswer": 0,
    "explanation": "Luật lũy đẳng nêu rõ: Tuyển của một biến với chính nó bằng chính nó $(p \\lor p \\equiv p)$, và hội của một biến với chính nó bằng chính nó $(p \\land p \\equiv p)$."
  },
  {
    "id": "c1_l3_q22",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Thông hiểu",
    "question": "Đẳng thức logic nào sau đây biểu diễn quy luật Trung hòa / Đồng nhất (Identity Laws)?",
    "options": [
      "$p \\lor 0 \\equiv p$ và $p \\land 1 \\equiv p$",
      "$p \\lor 1 \\equiv 1$ và $p \\land 0 \\equiv 0$",
      "$p \\lor p \\equiv p$ và $p \\land p \\equiv p$",
      "$p \\lor \\neg p \\equiv 1$ và $p \\land \\neg p \\equiv 0$"
    ],
    "correctAnswer": 0,
    "explanation": "Luật trung hòa (phần tử đồng nhất): $0$ là phần tử trung hòa đối với phép tuyển ($p \\lor 0 \\equiv p$), và $1$ là phần tử trung hòa đối với phép hội ($p \\land 1 \\equiv p$)."
  },
  {
    "id": "c1_l3_q23",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Vận dụng",
    "question": "Rút gọn biểu thức $E = (p \\lor q) \\land (\\neg p \\lor q) \\land (p \\lor \\neg q)$:",
    "options": [
      "$p \\land q$",
      "$p \\lor q$",
      "$p$",
      "$q$"
    ],
    "correctAnswer": 0,
    "explanation": "Nhóm 1 và 2: $(p \\lor q) \\land (\\neg p \\lor q) \\equiv (p \\land \\neg p) \\lor q \\equiv 0 \\lor q \\equiv q$. Khi đó biểu thức trở thành: $q \\land (p \\lor \\neg q) \\equiv (q \\land p) \\lor (q \\land \\neg q) \\equiv (p \\land q) \\lor 0 \\equiv p \\land q$."
  },
  {
    "id": "c1_l3_q24",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Vận dụng",
    "question": "Biểu thức $\\neg (p \\leftrightarrow q)$ tương đương với dạng nào chỉ dùng hội và tuyển?",
    "options": [
      "$(p \\land \\neg q) \\lor (\\neg p \\land q)$",
      "$(p \\lor \\neg q) \\land (\\neg p \\lor q)$",
      "$(p \\land q) \\lor (\\neg p \\land \\neg q)$",
      "$(\\neg p \\lor \\neg q) \\land (p \\lor q)$"
    ],
    "correctAnswer": 0,
    "explanation": "Mệnh đề $p \\leftrightarrow q$ nhận $1$ khi $p, q$ cùng chân trị; do đó phủ định của nó nhận $1$ khi $p, q$ khác chân trị ($p=1, q=0$ hoặc $p=0, q=1$), tức là $(p \\land \\neg q) \\lor (\\neg p \\land q)$."
  },
  {
    "id": "c1_l3_q25",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic cơ bản",
    "difficulty": "Vận dụng",
    "question": "Tìm mệnh đề tương đương logic với $\\neg p \\rightarrow (q \\rightarrow r)$:",
    "options": [
      "$q \\to (p \\lor r)$",
      "$(p \\lor \\neg q) \\lor r$",
      "$\\neg (p \\lor r) \\to \\neg q$",
      "Cả A, B, C đều đúng."
    ],
    "correctAnswer": 3,
    "explanation": "$\\neg p \\to (q \\to r) \\equiv p \\lor (\\neg q \\lor r) \\equiv (p \\lor \\neg q) \\lor r$ (B đúng). Biến đổi tiếp: $\\neg q \\lor (p \\lor r) \\equiv q \\to (p \\lor r)$ (A đúng). Lấy phản đảo: $\\neg (p \\lor r) \\to \\neg q$ (C đúng). Cả 3 phương án đều đúng."
  },
  {
    "id": "c1_l4_q1",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Nhận biết",
    "question": "Quy tắc suy diễn Modus Ponens (phương pháp khẳng định) có dạng sơ đồ là:",
    "options": [
      "$p \\to q, p \\therefore q$",
      "$p \\to q, \\neg q \\therefore \\neg p$",
      "$p \\to q, q \\to r \\therefore p \\to r$",
      "$p \\lor q, \\neg p \\therefore q$"
    ],
    "correctAnswer": 0,
    "explanation": "Modus Ponens: Từ giả thiết $p \\to q$ và khẳng định p, suy ra kết luận q."
  },
  {
    "id": "c1_l4_q2",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Nhận biết",
    "question": "Quy tắc suy diễn Modus Tollens (phương pháp phủ định) có dạng sơ đồ là:",
    "options": [
      "$p \\to q, \\neg q \\therefore \\neg p$",
      "$p \\to q, p \\therefore q$",
      "$p \\to q, \\neg p \\therefore \\neg q$",
      "$p \\lor q, \\neg p \\therefore q$"
    ],
    "correctAnswer": 0,
    "explanation": "Modus Tollens: Từ giả thiết $p \\to q$ và phủ định kết luận $\\neg q$, suy ra phủ định tiền đề $\\neg p$."
  },
  {
    "id": "c1_l4_q3",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Nhận biết",
    "question": "Quy tắc Tam đoạn luận giả thiết (Hypothetical Syllogism) cho phép kết luận điều gì từ hai tiền đề: $p \\rightarrow q$ và $q \\rightarrow r$?",
    "options": [
      "$p \\to r$",
      "$r \\to p$",
      "$p \\lor r$",
      "$p \\land r$"
    ],
    "correctAnswer": 0,
    "explanation": "Tam đoạn luận giả thiết dựa trên tính chất bắc cầu: Từ $p \\to q$ và $q \\to r, suy ra p \\to r$."
  },
  {
    "id": "c1_l4_q4",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Nhận biết",
    "question": "Quy tắc Tam đoạn luận rời (Disjunctive Syllogism) cho phép kết luận điều gì từ: $p \\lor q$ và $\\neg p$?",
    "options": [
      "$q$",
      "$\\neg q$",
      "$p$",
      "$0$"
    ],
    "correctAnswer": 0,
    "explanation": "Tam đoạn luận rời: Có 2 trường hợp p hoặc q xảy ra; nếu đã biết p sai ($\\neg p$) thì trường hợp còn lại q bắt buộc phải đúng."
  },
  {
    "id": "c1_l4_q5",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Thông hiểu",
    "question": "Xét suy luận: 'Nếu hôm nay trời mưa thì tôi ở nhà. Hôm nay trời mưa. Vậy tôi ở nhà.' Suy luận này sử dụng quy tắc nào?",
    "options": [
      "Modus Ponens",
      "Modus Tollens",
      "Tam đoạn luận giả thiết",
      "Phép giải (Resolution)"
    ],
    "correctAnswer": 0,
    "explanation": "Tiền đề: $p \\to q$ và p. Kết luận: q. Đây là Modus Ponens."
  },
  {
    "id": "c1_l4_q6",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Thông hiểu",
    "question": "Xét suy luận: 'Nếu n chia hết cho 6 thì n chia hết cho 3. Số n không chia hết cho 3. Vậy số n không chia hết cho 6.' Quy tắc sử dụng là:",
    "options": [
      "Modus Tollens",
      "Modus Ponens",
      "Tam đoạn luận rời",
      "Phép giải"
    ],
    "correctAnswer": 0,
    "explanation": "Tiền đề: $p \\to q$ và $\\neg q$. Kết luận: $\\neg p$. Đây là Modus Tollens."
  },
  {
    "id": "c1_l4_q7",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Thông hiểu",
    "question": "Xét quy tắc suy diễn phép giải (Resolution): từ $p \\lor q$ và $\\neg p \\lor r$, ta suy ra được:",
    "options": [
      "$q \\lor r$",
      "$q \\land r$",
      "$p \\lor r$",
      "$\\neg q \\lor r$"
    ],
    "correctAnswer": 0,
    "explanation": "Quy tắc phép giải (Resolution): Từ $(p \\lor q) \\land (\\neg p \\lor r)$ suy ra $q \\lor r$ (triệt tiêu cặp biến đối ngẫu $p$ và $\\neg p$)."
  },
  {
    "id": "c1_l4_q8",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Thông hiểu",
    "question": "Lập luận sau mắc lỗi gì?\n'Nếu một số tự nhiên chia hết cho 4 thì nó chia hết cho 2. Số 10 chia hết cho 2. Vậy số 10 chia hết cho 4.'",
    "options": [
      "Ngụy biện khẳng định kết luận (Affirming the consequent).",
      "Ngụy biện phủ định tiền đề (Denying the antecedent).",
      "Ngụy biện tam đoạn luận rời.",
      "Lập luận hợp lý."
    ],
    "correctAnswer": 0,
    "explanation": "Sơ đồ: $p \\to q, q \\therefore p$. Đây là lỗi ngụy biện khẳng định kết luận (Affirming the consequent)."
  },
  {
    "id": "c1_l4_q9",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Thông hiểu",
    "question": "Lập luận sau mắc lỗi gì?\n'Nếu bạn đạt điểm A môn Toán rời rạc thì bạn chăm chỉ. Bạn không đạt điểm A. Do đó, bạn không chăm chỉ.'",
    "options": [
      "Ngụy biện phủ định tiền đề (Denying the antecedent).",
      "Ngụy biện khẳng định kết luận.",
      "Ngụy biện đường dốc trơn trượt.",
      "Lập luận hoàn toàn hợp lý."
    ],
    "correctAnswer": 0,
    "explanation": "Sơ đồ: $p \\to q, \\neg p \\therefore \\neg q$. Đây là lỗi ngụy biện phủ định tiền đề (Denying the antecedent)."
  },
  {
    "id": "c1_l4_q10",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Vận dụng",
    "question": "Cho hệ tiền đề: $p \\rightarrow q$, $q \\rightarrow r$, $\\neg r$, $p \\lor s$. Kết luận hợp lý nào được rút ra?",
    "options": [
      "$s$",
      "$\\neg s$",
      "$p$",
      "$q$"
    ],
    "correctAnswer": 0,
    "explanation": "$1) p \\to q$ và $q \\to r$ $\\Rightarrow$ $p \\to r (Tam$ đoạn luận). 2) $p \\to r$ và $\\neg r$ $\\Rightarrow$ $\\neg p$ (Modus Tollens). 3) $p \\lor s$ và $\\neg p$ $\\Rightarrow$ s (Tam đoạn luận rời). Kết luận là s."
  },
  {
    "id": "c1_l4_q11",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Thông hiểu",
    "question": "Cho hệ tiền đề: $p \\lor q$, $p \\rightarrow r$, $\\neg r$. Kết luận đúng là:",
    "options": [
      "$q$",
      "$p$",
      "$\\neg q$",
      "$r$"
    ],
    "correctAnswer": 0,
    "explanation": "$p \\to r$ và $\\neg r$ $\\Rightarrow$ $\\neg p$ (Modus Tollens). Kết hợp với $p \\lor q$ $\\Rightarrow$ q (Tam đoạn luận rời)."
  },
  {
    "id": "c1_l4_q12",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Vận dụng",
    "question": "Cho các tiền đề: $\\neg p \\rightarrow (q \\rightarrow r)$, $\\neg p$, $q$. Kết luận suy ra theo Modus Ponens là:",
    "options": [
      "$r$",
      "$\\neg r$",
      "$p$",
      "$\\neg q$"
    ],
    "correctAnswer": 0,
    "explanation": "Bước 1: $\\neg p \\to (q \\to r)$ và $\\neg p$ $\\Rightarrow$ $q \\to r$. Bước 2: $q \\to r$ và q $\\Rightarrow$ r."
  },
  {
    "id": "c1_l4_q13",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Vận dụng",
    "question": "Cho các tiền đề: $p \\rightarrow \\neg q$, $r \\rightarrow q$, $p$. Bằng quy tắc suy diễn, ta kết luận được:",
    "options": [
      "$\\neg r$",
      "$r$",
      "$q$",
      "$p \\land r$"
    ],
    "correctAnswer": 0,
    "explanation": "$p \\to \\neg q$ và p $\\Rightarrow$ $\\neg q$. Tiếp theo $r \\to q$ và $\\neg q$ $\\Rightarrow$ $\\neg r$ (Modus Tollens)."
  },
  {
    "id": "c1_l4_q14",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Nhận biết",
    "question": "Để chứng minh mệnh đề dạng $P \\rightarrow Q$ bằng phương pháp chứng minh phản đảo (Contraposition), ta phải:",
    "options": [
      "Giả sử Q sai, chứng minh P sai (tức $\\neg Q \\to \\neg P)$.",
      "Giả sử P đúng, suy ra Q đúng.",
      "Giả sử cả P và Q đều sai.",
      "Giả sử P đúng và Q sai, dẫn đến mâu thuẫn."
    ],
    "correctAnswer": 0,
    "explanation": "Chứng minh phản đảo dựa trên tương đương logic $P \\to Q \\equiv \\neg Q \\to \\neg P$: Giả sử $\\neg Q$ đúng (Q sai), từ đó suy ra $\\neg P$ đúng (P sai)."
  },
  {
    "id": "c1_l4_q15",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Thông hiểu",
    "question": "Điểm khác nhau cốt lõi giữa phương pháp chứng minh phản đảo và phương pháp chứng minh phản chứng (Contradiction) khi chứng minh định lý $P \\rightarrow Q$ là:",
    "options": [
      "Phản đảo giả thiết $\\neg Q$ và chỉ hướng đến suy ra $\\neg P$; còn phản chứng giả thiết đồng thời cả P và $\\neg Q$ để suy ra một mâu thuẫn bất kỳ loại $R \\land \\neg R$.",
      "Phương pháp phản chứng chỉ áp dụng được cho số học.",
      "Hai phương pháp hoàn toàn đồng nhất về mặt bản chất.",
      "Phản đảo không dùng được cho các định lý hình học."
    ],
    "correctAnswer": 0,
    "explanation": "Phản đảo chứng minh trực tiếp mệnh đề tương đương $\\neg Q \\to \\neg P$. Còn phản chứng giả thiết cả $P$ đúng và $Q$ sai (tức $P \\land \\neg Q$), sau đó tìm ra bất kỳ điều mâu thuẫn nào trong hệ thống."
  },
  {
    "id": "c1_l4_q16",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Thông hiểu",
    "question": "Khi chứng minh định lý 'Không tồn tại số nguyên dương lớn nhất', cách chứng minh phổ biến nhất là:",
    "options": [
      "Chứng minh phản chứng (giả sử tồn tại số nguyên dương lớn nhất là M, sau đó xét M+1).",
      "Chứng minh trực tiếp.",
      "Chứng minh theo trường hợp.",
      "Quy nạp toán học."
    ],
    "correctAnswer": 0,
    "explanation": "Giả sử phản chứng tồn tại số nguyên lớn nhất M. Khi đó M+1 cũng là số nguyên và M+1 > M, mâu thuẫn với tính lớn nhất của M."
  },
  {
    "id": "c1_l4_q17",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Vận dụng",
    "question": "Để chứng minh đẳng thức $|x \\cdot y| = |x| \\cdot |y|$ với mọi số thực $x, y$, phương pháp chứng minh thích hợp nhất là:",
    "options": [
      "Chứng minh vét cạn theo trường hợp (dấu của x và y: dương, âm, bằng không).",
      "Chứng minh phản đảo.",
      "Chứng minh phản chứng.",
      "Quy nạp toán học."
    ],
    "correctAnswer": 0,
    "explanation": "Chứng minh theo trường hợp xét các tổ hợp dấu của x và y (x >= 0, y >= 0; x >= 0, y < 0; x < 0, y >= 0; x < 0, y < 0) là cách giải tự nhiên và chặt chẽ nhất."
  },
  {
    "id": "c1_l4_q18",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Nhận biết",
    "question": "Cho các tiền đề: (1) $p \\rightarrow q$; (2) $r \\lor \\neg q$; (3) $\\neg r$. Kết luận nào sau đây là hợp lý?",
    "options": [
      "$\\neg p$",
      "$p$",
      "$q$",
      "$r$"
    ],
    "correctAnswer": 0,
    "explanation": "$r \\lor \\neg q$ và $\\neg r$ $\\Rightarrow$ $\\neg q$ (Tam đoạn luận rời). $p \\to q$ và $\\neg q$ $\\Rightarrow$ $\\neg p$ (Modus Tollens)."
  },
  {
    "id": "c1_l4_q19",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Vận dụng",
    "question": "Cho hệ tiền đề: $(p \\land q) \\rightarrow r$, $r \\rightarrow s$, $\\neg s$, $p$. Ta kết luận được:",
    "options": [
      "$\\neg q$",
      "$q$",
      "$s$",
      "$\\neg p$"
    ],
    "correctAnswer": 0,
    "explanation": "Từ $r \\to s$ và $\\neg s \\Rightarrow \\neg r$. Kết hợp $(p \\land q) \\to r$ và $\\neg r \\Rightarrow \\neg(p \\land q) \\equiv \\neg p \\lor \\neg q$. Vì đề bài cho $p$ đúng nên $\\neg p$ sai, suy ra $\\neg q$."
  },
  {
    "id": "c1_l4_q20",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Thông hiểu",
    "question": "Xét lập luận: 'Nếu An đi học thì Bình đi học. Nếu Bình đi học thì Cường nghỉ học. An đi học. Vậy Cường nghỉ học.' Lập luận trên:",
    "options": [
      "Là lập luận hợp lý (Valid).",
      "Không hợp lý (Invalid).",
      "Ngụy biện khẳng định kết luận.",
      "Thiếu tiền đề về Cường."
    ],
    "correctAnswer": 0,
    "explanation": "Tiền đề: A $\\to$ B, B $\\to$ C, A. Tam đoạn luận cho A $\\to$ C. Modus Ponens kết hợp với A suy ra C ('Cường nghỉ học'). Lập luận hợp lý."
  },
  {
    "id": "c1_l4_q21",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Nhận biết",
    "question": "Cho quy tắc suy diễn: $p \\vdash p \\lor q$. Đây là quy tắc:",
    "options": [
      "Phép bổ sung (Addition).",
      "Phép đơn giản hóa (Simplification).",
      "Phép nối liền (Conjunction).",
      "Modus Ponens."
    ],
    "correctAnswer": 0,
    "explanation": "Từ mệnh đề p đúng, ta luôn suy ra $p \\lor q$ đúng với bất kỳ q nào. Đây là Phép bổ sung (Addition)."
  },
  {
    "id": "c1_l4_q22",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Nhận biết",
    "question": "Cho quy tắc suy diễn: $p \\land q \\vdash p$. Đây là quy tắc:",
    "options": [
      "Phép đơn giản hóa (Simplification).",
      "Phép bổ sung (Addition).",
      "Phép thế (Substitution).",
      "Modus Tollens."
    ],
    "correctAnswer": 0,
    "explanation": "Từ hội $p \\land q$ đúng, suy ra p đúng (hoặc q đúng). Đây là Phép đơn giản hóa (Simplification)."
  },
  {
    "id": "c1_l4_q23",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Vận dụng",
    "question": "Dạng suy diễn $p \\rightarrow q, r \\rightarrow s, p \\lor r \\vdash q \\lor s$ được gọi là:",
    "options": [
      "Tam đoạn luận kiến thiết (Constructive Dilemma).",
      "Tam đoạn luận phá hủy (Destructive Dilemma).",
      "Tam đoạn luận giả định lặp.",
      "Quy tắc khử tuyển."
    ],
    "correctAnswer": 0,
    "explanation": "Quy tắc này là Tam đoạn luận kiến thiết (Constructive Dilemma): Có p hoặc r, mà p kéo theo q và r kéo theo s, suy ra tất yếu có q hoặc s."
  },
  {
    "id": "c1_l4_q24",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Vận dụng",
    "question": "Dạng suy diễn $p \\rightarrow q, r \\rightarrow s, \\neg q \\lor \\neg s \\vdash \\neg p \\lor \\neg r$ được gọi là:",
    "options": [
      "Tam đoạn luận phá hủy (Destructive Dilemma).",
      "Tam đoạn luận kiến thiết (Constructive Dilemma).",
      "Modus Tollens mở rộng.",
      "Phép giải (Resolution)."
    ],
    "correctAnswer": 0,
    "explanation": "Quy tắc này là Tam đoạn luận phá hủy (Destructive Dilemma): Phủ định kết luận kéo theo phủ định tiền đề."
  },
  {
    "id": "c1_l4_q25",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn hợp lý",
    "difficulty": "Vận dụng",
    "question": "Một phản ví dụ (counterexample) chứng tỏ một suy diễn $(p_1 \\land p_2 \\land \\dots \\land p_n) \\rightarrow q$ là SAI khi:",
    "options": [
      "Mọi tiền đề $p_1, p_2, \\dots, p_n$ đều nhận giá trị $1$ nhưng kết luận $q$ nhận giá trị $0$",
      "Mọi tiền đề $p_1, p_2, \\dots, p_n$ nhận giá trị $0$ và $q$ nhận giá trị $1$",
      "Tất cả các biến đều nhận giá trị $0$",
      "Tiền đề nhận giá trị $0$ và kết luận nhận giá trị $0$"
    ],
    "correctAnswer": 0,
    "explanation": "Suy diễn sai khi và chỉ khi phép kéo theo giữa tiền đề và kết luận nhận giá trị 0. Điều này xảy ra khi toàn bộ các tiền đề đồng thời đúng (1) mà kết luận lại sai (0)."
  },
  {
    "id": "c1_l5_q1",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Nhận biết",
    "question": "Cho vị từ $P(x, y): \"x + 2y = 10\"$ với không gian là tập số nguyên dương $\\mathbb{Z}^+$. Mệnh đề nào sau đây có giá trị chân lý Đúng?",
    "options": [
      "$P(2, 4)$",
      "$P(4, 2)$",
      "$P(1, 4)$",
      "$P(3, 3)$"
    ],
    "correctAnswer": 0,
    "explanation": "Thay số: $P(2, 4) \\iff 2 + 2 \\cdot 4 = 10$ (Đúng). Với $P(4, 2): 4 + 4 = 8 \\neq 10$. Với $P(1, 4): 1 + 8 = 9$. Với $P(3, 3): 3 + 6 = 9$."
  },
  {
    "id": "c1_l5_q2",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Thông hiểu",
    "question": "Phủ định của mệnh đề $\\forall x \\exists y [ P(x, y) \\rightarrow Q(x, y) ]$ là:",
    "options": [
      "$\\exists x \\forall y [ P(x, y) \\land \\neg Q(x, y) ]$",
      "$\\exists x \\forall y [ \\neg P(x, y) \\lor Q(x, y) ]$",
      "$\\exists x \\exists y [ P(x, y) \\land \\neg Q(x, y) ]$",
      "$\\forall x \\exists y [ P(x, y) \\land \\neg Q(x, y) ]$"
    ],
    "correctAnswer": 0,
    "explanation": "$\\neg (\\forall x \\exists y [P \\to Q]) \\equiv \\exists x \\forall y \\neg (P \\to Q) \\equiv \\exists x \\forall y [P(x, y) \\land \\neg Q(x, y)].$"
  },
  {
    "id": "c1_l5_q3",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Thông hiểu",
    "question": "Xét trên không gian số thực $\\mathbb{R}$, mệnh đề nào sau đây có giá trị chân lý Sai?",
    "options": [
      "$\\forall x \\exists y (x \\cdot y = 1)$",
      "$\\forall x \\exists y (x + y = 0)$",
      "$\\exists y \\forall x (x + y = x)$",
      "$\\forall x \\exists y (x < y)$"
    ],
    "correctAnswer": 0,
    "explanation": "Với $x = 0 \\in \\mathbb{R}$, không tồn tại số thực $y$ nào thỏa mãn $0 \\cdot y = 1$. Do đó khẳng định $\\forall x \\exists y \\, (x \\cdot y = 1)$ là Sai."
  },
  {
    "id": "c1_l5_q4",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Thông hiểu",
    "question": "Mệnh đề $\\exists x \\forall y (x \\cdot y = 0)$ với không gian xác định là tập số thực $\\mathbb{R}$ có giá trị chân lý là:",
    "options": [
      "Đúng, vì chọn x = 0 thì 0 · y = 0 đúng với mọi $y \\in \\mathbb{R}$.",
      "Sai, vì không có số thực nào nhân với mọi số đều bằng 0.",
      "Đúng, vì chọn y = 0.",
      "Sai, phụ thuộc vào giá trị của y."
    ],
    "correctAnswer": 0,
    "explanation": "Tồn tại số thực x = 0. Khi đó với mọi y thuộc $\\mathbb{R}$, ta luôn có 0 · y = 0. Mệnh đề này hoàn toàn Đúng."
  },
  {
    "id": "c1_l5_q5",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Thông hiểu",
    "question": "Phủ định của mệnh đề 'Mọi học sinh trong lớp đều yêu thích ít nhất một môn học' là:",
    "options": [
      "Có ít nhất một học sinh không yêu thích bất kỳ môn học nào.",
      "Không có học sinh nào thích bất kỳ môn học nào.",
      "Mọi học sinh đều không yêu thích môn học nào.",
      "Có ít nhất một học sinh yêu thích tất cả các môn học."
    ],
    "correctAnswer": 0,
    "explanation": "Mệnh đề gốc: $\\forall x \\in \\text{Lớp},\\; \\exists y \\in \\text{Môn},\\; \\text{Thích}(x, y)$. Phủ định là: $\\exists x \\in \\text{Lớp},\\; \\forall y \\in \\text{Môn},\\; \\neg\\text{Thích}(x, y)$, tức 'Có ít nhất một học sinh không yêu thích bất kỳ môn học nào'."
  },
  {
    "id": "c1_l5_q6",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Nhận biết",
    "question": "Mệnh đề logic biểu diễn cho khẳng định: 'Không có ai là hoàn hảo' (với $P(x)$: '$x$ hoàn hảo') là:",
    "options": [
      "Cả A và B đều đúng và tương đương nhau.",
      "$\\neg \\exists x P(x)$",
      "$\\forall x \\neg P(x)$",
      "$\\exists x \\neg P(x)$"
    ],
    "correctAnswer": 0,
    "explanation": "'Không tồn tại người hoàn hảo' là $\\neg \\exists x P(x)$, tương đương với $\\forall x \\neg P(x)$ ('Mọi người đều không hoàn hảo'). Cả hai đều đúng."
  },
  {
    "id": "c1_l5_q7",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Nhận biết",
    "question": "Cho các vị từ trên tập người: $S(x)$: '$x$ là sinh viên', $C(x)$: '$x$ có máy tính cá nhân'. Mệnh đề 'Một vài sinh viên không có máy tính cá nhân' được dịch thành:",
    "options": [
      "$\\exists x [S(x) \\land \\neg C(x)]$",
      "$\\exists x [S(x) \\to \\neg C(x)]$",
      "$\\forall x [S(x) \\land \\neg C(x)]$",
      "$\\neg \\exists x [S(x) \\land C(x)]$"
    ],
    "correctAnswer": 0,
    "explanation": "Lượng từ tồn tại $\\exists$ ('một vài / có ít nhất một') kết hợp với điều kiện đối tượng luôn dùng phép hội $\\land$: $\\exists x [S(x) \\land \\neg C(x)]$. Không dùng phép kéo theo $\\to$ với lượng từ $\\exists$."
  },
  {
    "id": "c1_l5_q8",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Nhận biết",
    "question": "Mệnh đề $\\forall x [S(x) \\rightarrow C(x)]$ tương đương với:",
    "options": [
      "Mọi sinh viên đều có máy tính cá nhân.",
      "Chỉ có sinh viên mới có máy tính cá nhân.",
      "Bất kỳ ai có máy tính cá nhân đều là sinh viên.",
      "Có sinh viên sở hữu máy tính cá nhân."
    ],
    "correctAnswer": 0,
    "explanation": "$\\forall x [S(x) \\to C(x)]$ đọc là: Với mọi x, nếu x là sinh viên thì x có máy tính cá nhân, tức: 'Mọi sinh viên đều có máy tính cá nhân'."
  },
  {
    "id": "c1_l5_q9",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Thông hiểu",
    "question": "Cho mệnh đề: $\\forall x \\forall y [(x > 0 \\land y > 0) \\rightarrow xy > 0]$ trên không gian số thực $\\mathbb{R}$. Mệnh đề phản đảo là:",
    "options": [
      "$\\forall x \\forall y [xy \\le 0 \\to (x \\le 0 \\lor y \\le 0)]$",
      "$\\exists x \\exists y [xy \\le 0 \\to (x \\le 0 \\lor y \\le 0)]$",
      "$\\forall x \\forall y [xy \\le 0 \\to (x \\le 0 \\land y \\le 0)]$",
      "$\\forall x \\forall y [(x \\le 0 \\lor y \\le 0) \\to xy \\le 0]$"
    ],
    "correctAnswer": 0,
    "explanation": "Phản đảo của $A \\to B$ là $\\neg B \\to \\neg A$. Phủ định của $xy > 0$ là $xy \\le 0$. Phủ định của $(x > 0 \\land y > 0)$ là $(x \\le 0 \\lor y \\le 0)$. Lượng từ $\\forall x \\forall y$ giữ nguyên."
  },
  {
    "id": "c1_l5_q10",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Thông hiểu",
    "question": "Mệnh đề $\\exists ! x P(x)$ (lượng từ tồn tại duy nhất) tương đương với dạng logic hình thức nào?",
    "options": [
      "Cả A và B đều đúng.",
      "$\\exists x [P(x) \\land \\forall y (P(y) \\to y = x)]$",
      "$\\exists x P(x) \\land \\forall y \\forall z [(P(y) \\land P(z)) \\to y = z]$",
      "$\\exists x P(x) \\lor \\forall y \\neg P(y)$"
    ],
    "correctAnswer": 0,
    "explanation": "Cả biểu thức $\\exists x [P(x) \\land \\forall y (P(y) \\to y = x)]$ và $\\exists x P(x) \\land \\forall y \\forall z [(P(y) \\land P(z)) \\to y = z]$ đều là các định nghĩa hình thức chính xác của lượng từ tồn tại duy nhất $\\exists!$."
  },
  {
    "id": "c1_l5_q11",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Vận dụng",
    "question": "Cho không gian $\\mathbb{R}$. Xét hai mệnh đề:\n$A: \\forall x \\exists y (x^2 < y)$\n$B: \\exists y \\forall x (x^2 < y)$\nGiá trị chân lý của $A$ và $B$ lần lượt là:",
    "options": [
      "$A$ Đúng, $B$ Sai.",
      "$A$ Đúng, $B$ Đúng.",
      "$A$ Sai, $B$ Đúng.",
      "$A$ Sai, $B$ Sai."
    ],
    "correctAnswer": 0,
    "explanation": "Mệnh đề $A$: Với mỗi số thực $x$, luôn chọn được $y = x^2 + 1$ để $x^2 < y \\Rightarrow A$ Đúng. Mệnh đề $B$: Không tồn tại số thực $y$ nào lớn hơn bình phương của mọi số thực $\\Rightarrow B$ Sai. Vậy $A$ Đúng, $B$ Sai."
  },
  {
    "id": "c1_l5_q12",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Nhận biết",
    "question": "Thứ tự của các lượng từ có thể hoán vị mà không làm thay đổi ý nghĩa trong trường hợp nào?",
    "options": [
      "Cả A và B đều đúng.",
      "$\\forall x \\forall y P(x, y) \\equiv \\forall y \\forall x P(x, y)$",
      "$\\exists x \\exists y P(x, y) \\equiv \\exists y \\exists x P(x, y)$",
      "$\\forall x \\exists y P(x, y) \\equiv \\exists y \\forall x P(x, y)$"
    ],
    "correctAnswer": 0,
    "explanation": "Hai lượng từ cùng loại kề nhau luôn hoán vị được $(\\forall x \\forall y \\equiv \\forall y \\forall x$ và $\\exists x \\exists y \\equiv \\exists y \\exists x)$. Ngược lại, hai lượng từ khác loại $\\forall$$\\exists$ và $\\exists$$\\forall$ không thể hoán vị."
  },
  {
    "id": "c1_l5_q13",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Thông hiểu",
    "question": "Mệnh đề $\\exists x [P(x) \\lor Q(x)]$ tương đương logic với biểu thức nào sau đây?",
    "options": [
      "$\\exists x P(x) \\lor \\exists x Q(x)$",
      "$\\exists x P(x) \\land \\exists x Q(x)$",
      "$\\forall x P(x) \\lor \\forall x Q(x)$",
      "$\\exists x [P(x) \\land Q(x)]$"
    ],
    "correctAnswer": 0,
    "explanation": "Lượng từ tồn tại $\\exists$ phân phối được đối với phép tuyển $\\lor$: $\\exists x [P(x) \\lor Q(x)] \\equiv \\exists x P(x) \\lor \\exists x Q(x)$."
  },
  {
    "id": "c1_l5_q14",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Vận dụng",
    "question": "Phép phân phối lượng từ nào sau đây là Sai (không tương đương logic tổng quát)?",
    "options": [
      "$\\forall x [P(x) \\lor Q(x)] \\equiv \\forall x P(x) \\lor \\forall x Q(x)$",
      "$\\forall x [P(x) \\land Q(x)] \\equiv \\forall x P(x) \\land \\forall x Q(x)$",
      "$\\exists x [P(x) \\lor Q(x)] \\equiv \\exists x P(x) \\lor \\exists x Q(x)$",
      "$\\forall x [P \\to Q(x)] \\equiv P \\to \\forall x Q(x)$ (với P không chứa biến x)"
    ],
    "correctAnswer": 0,
    "explanation": "Lượng từ $\\forall$ KHÔNG phân phối đối với phép tuyển $\\lor$. Phản ví dụ: Trên $\\mathbb{Z}$, $P(x)$: '$x$ chẵn', $Q(x)$: '$x$ lẻ'. Khi đó $\\forall x \\, [P(x) \\lor Q(x)]$ đúng, nhưng $\\forall x P(x) \\lor \\forall x Q(x)$ sai."
  },
  {
    "id": "c1_l5_q15",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Thông hiểu",
    "question": "Mệnh đề: 'Mọi số nguyên chẵn lớn hơn 2 đều có thể biểu diễn thành tổng của hai số nguyên tố' (Giả thuyết Goldbach) được viết dạng vị từ là:",
    "options": [
      "$\\forall x \\in E \\, [(x > 2) \\to \\exists p \\exists q \\, (\\text{Prime}(p) \\land \\text{Prime}(q) \\land x = p + q)]$",
      "$\\exists x \\in E \\, [(x > 2) \\land \\exists p \\exists q \\, (\\text{Prime}(p) \\land \\text{Prime}(q) \\land x = p + q)]$",
      "$\\forall x \\in E \\, \\forall p \\forall q \\, [(x > 2) \\to x = p + q]$",
      "$\\forall x \\in E \\, [(x > 2) \\land (\\text{Prime}(p) \\lor \\text{Prime}(q))]$"
    ],
    "correctAnswer": 0,
    "explanation": "Với mọi số nguyên chẵn $x$ ($\\forall x \\in E$), nếu $x > 2$ thì tồn tại hai số nguyên tố $p, q$ sao cho $x = p + q$."
  },
  {
    "id": "c1_l5_q16",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Thông hiểu",
    "question": "Cho vị từ $P(x)$: '$x$ là sinh viên giỏi', $Q(x)$: '$x$ được nhận học bổng'. Phát biểu 'Tất cả các sinh viên giỏi đều được nhận học bổng' được phủ định là:",
    "options": [
      "Tồn tại ít nhất một sinh viên giỏi không được nhận học bổng.",
      "Mọi sinh viên giỏi đều không được nhận học bổng.",
      "Mọi sinh viên không giỏi đều không được nhận học bổng.",
      "Tồn tại sinh viên không giỏi nhưng vẫn được học bổng."
    ],
    "correctAnswer": 0,
    "explanation": "$\\neg (\\forall x [P(x) \\to Q(x)]) \\equiv \\exists x [P(x) \\land \\neg Q(x)]$: 'Tồn tại ít nhất một sinh viên giỏi không được nhận học bổng'."
  },
  {
    "id": "c1_l5_q17",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Nhận biết",
    "question": "Trên miền số nguyên $\\mathbb{Z}$, mệnh đề $\\exists m \\forall n (m \\cdot n = n)$ có chân trị gì và giá trị $m$ tương ứng là bao nhiêu?",
    "options": [
      "Đúng; m = 1",
      "Đúng; m = 0",
      "Sai; không tồn tại m",
      "Đúng; m = -1"
    ],
    "correctAnswer": 0,
    "explanation": "Số 1 là phần tử đơn vị của phép nhân: 1 · n = n với mọi số nguyên n. Do đó m = 1 thỏa mãn mệnh đề."
  },
  {
    "id": "c1_l5_q18",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Vận dụng",
    "question": "Mệnh đề $\\forall x \\exists y (x + y > 0)$ trên miền số nguyên âm $\\mathbb{Z}^-$ có chân trị:",
    "options": [
      "Sai",
      "Đúng",
      "Không xác định",
      "Luôn đúng với mọi $y \\in \\mathbb{Z}^-$"
    ],
    "correctAnswer": 0,
    "explanation": "Trong miền $\\mathbb{Z}^-$, mọi phần tử đều $\\le -1$. Tổng của hai số nguyên âm luôn $\\le -2 < 0$. Do đó không thể tồn tại $y \\in \\mathbb{Z}^-$ để $x + y > 0$."
  },
  {
    "id": "c1_l5_q19",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Thông hiểu",
    "question": "Cho không gian đàm thoại là tập hợp người. $M(x, y)$: '$x$ là mẹ của $y$'. Biểu thức logic biểu diễn '$x$ là bà ngoại của $z$' là:",
    "options": [
      "$\\exists y \\, [M(x, y) \\land M(y, z)]$",
      "$\\forall y \\, [M(x, y) \\land M(y, z)]$",
      "$M(x, z)$",
      "$\\exists y \\, [M(z, y) \\land M(y, x)]$"
    ],
    "correctAnswer": 0,
    "explanation": "$x$ là bà ngoại của $z$ khi tồn tại người $y$ sao cho $x$ là mẹ của $y$ và $y$ là mẹ của $z$: $\\exists y \\, [M(x, y) \\land M(y, z)]$."
  },
  {
    "id": "c1_l5_q20",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ và Lượng từ",
    "difficulty": "Thông hiểu",
    "question": "Mệnh đề logic $\\forall x [P(x) \\rightarrow Q(x)]$ có quan hệ thế nào với $(\\forall x P(x)) \\rightarrow (\\forall x Q(x))$?",
    "options": [
      "$\\forall x [P(x) \\to Q(x)] \\Rightarrow (\\forall x P(x) \\to \\forall x Q(x))$ (Kéo theo một chiều).",
      "Tương đương logic hai chiều $( \\equiv )$.",
      "Không có quan hệ logic nào.",
      "Phủ định của nhau."
    ],
    "correctAnswer": 0,
    "explanation": "Đây là định lý cơ bản của logic vị từ: Nếu mọi x đều có P(x) kéo theo Q(x), thì khi tất cả x thỏa P(x) chắc chắn tất cả x đều thỏa Q(x). Chiều ngược lại không đúng."
  },
  {
    "id": "c1_l6_q1",
    "chapterId": "c1",
    "lessonId": "l1_6",
    "lessonTitle": "§6 Nguyên lý Quy nạp Toán học",
    "difficulty": "Nhận biết",
    "question": "Để chứng minh bất đẳng thức $2^n > n^3$ đúng với mọi số nguyên $n \\ge n_0$ bằng quy nạp, giá trị nguyên dương nhỏ nhất $n_0$ là:",
    "options": [
      "$10$",
      "8",
      "9",
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "Kiểm tra: $n = 8: 256 < 512$ (sai); $n = 9: 512 < 729$ (sai); $n = 10: 2^{10} = 1024 > 10^3 = 1000$ (đúng). Bước quy nạp đúng với mọi $n \\ge 10$. Vậy $n_0 = 10$."
  },
  {
    "id": "c1_l6_q2",
    "chapterId": "c1",
    "lessonId": "l1_6",
    "lessonTitle": "§6 Nguyên lý Quy nạp Toán học",
    "difficulty": "Thông hiểu",
    "question": "Chứng minh khẳng định: $P(n): \"n^3 - n \\text{ chia hết cho } 3\"$ với mọi $n \\ge 1$. Khi thực hiện bước quy nạp, xét $(k+1)^3 - (k+1)$, biểu thức này được phân tích thành:",
    "options": [
      "$(k^3 - k) + 3(k^2 + k)$",
      "$(k^3 - k) + 3k^2 + 1$",
      "$(k^3 - k) + 6k$",
      "$(k^3 - k) + 3k^2 + 3k + 2$"
    ],
    "correctAnswer": 0,
    "explanation": "$(k+1)^3 - (k+1) = (k^3 + 3k^2 + 3k + 1) - (k + 1) = (k^3 - k) + 3(k^2 + k)$. Do $k^3 - k$ chia hết cho $3$ (giả thiết quy nạp) và $3(k^2+k)$ chia hết cho $3$ nên tổng chia hết cho $3$."
  },
  {
    "id": "c1_l6_q3",
    "chapterId": "c1",
    "lessonId": "l1_6",
    "lessonTitle": "§6 Nguyên lý Quy nạp Toán học",
    "difficulty": "Nhận biết",
    "question": "Cho $S_n = 1^2 + 2^2 + 3^2 + \\dots + n^2 = \\frac{n(n+1)(2n+1)}{6}$. Để chứng minh mệnh đề đúng cho $n = k+1$, ta phải cộng thêm lượng nào vào $S_k$?",
    "options": [
      "$(k+1)^2$",
      "$k+1$",
      "$2k+1$",
      "$(k+1)^3$"
    ],
    "correctAnswer": 0,
    "explanation": "Tổng $S_{k+1} = S_k + (k+1)^2$. Do đó đại lượng cần cộng thêm chính là $(k+1)^2$."
  },
  {
    "id": "c1_l6_q4",
    "chapterId": "c1",
    "lessonId": "l1_6",
    "lessonTitle": "§6 Nguyên lý Quy nạp Toán học",
    "difficulty": "Thông hiểu",
    "question": "Bất đẳng thức Bernoulli phát biểu rằng: $(1 + x)^n \\ge 1 + nx$ với mọi số nguyên $n \\ge 0$ và số thực $x > -1$. Trong bước chuyển quy nạp từ $k$ lên $k+1$, ta nhân cả hai vế của giả thiết $(1+x)^k \\ge 1+kx$ với:",
    "options": [
      "$1+x$ (vì $1+x > 0$)",
      "$1+kx$",
      "$x$",
      "$(1+x)^2$"
    ],
    "correctAnswer": 0,
    "explanation": "Vì $x > -1$ nên $1 + x > 0$. Nhân hai vế bất đẳng thức với đại lượng dương $1 + x$ thì chiều bất đẳng thức không đổi: $(1+x)^k \\cdot (1+x) \\ge (1+kx)(1+x)$."
  },
  {
    "id": "c1_l6_q5",
    "chapterId": "c1",
    "lessonId": "l1_6",
    "lessonTitle": "§6 Nguyên lý Quy nạp Toán học",
    "difficulty": "Thông hiểu",
    "question": "Dãy số Fibonacci được định nghĩa: $F_0 = 0, F_1 = 1, F_n = F_{n-1} + F_{n-2}$ với $n \\ge 2$. Để chứng minh tính chất của dãy Fibonacci bằng quy nạp, phương pháp phù hợp và thuận tiện nhất là:",
    "options": [
      "Quy nạp toán học mạnh (giả thiết mệnh đề đúng tới $k-1$ và $k$).",
      "Quy nạp toán học yếu (chỉ cần giả thiết $P(k)$).",
      "Quy nạp lùi.",
      "Chứng minh vét cạn."
    ],
    "correctAnswer": 0,
    "explanation": "Phần tử $F_n$ phụ thuộc đồng thời vào hai phần tử liền trước nó, nên bước quy nạp cần giả thiết đúng cho cả $k-1$ và $k$ để suy ra cho $k+1$. Đây là quy nạp mạnh."
  },
  {
    "id": "c1_l6_q6",
    "chapterId": "c1",
    "lessonId": "l1_6",
    "lessonTitle": "§6 Nguyên lý Quy nạp Toán học",
    "difficulty": "Nhận biết",
    "question": "Một bàn cờ kích thước $2^n \\times 2^n$ bị khuyết đúng 1 ô vuông đơn vị bất kỳ. Bằng quy nạp toán học, ta có thể chứng minh bàn cờ này luôn được lát kín bằng các mảnh chữ L gồm 3 ô vuông với:",
    "options": [
      "Mọi số nguyên dương $n \\ge 1$.",
      "Chỉ với $n$ chẵn.",
      "Chỉ với $n$ lẻ.",
      "Chỉ với $n \\ge 3$."
    ],
    "correctAnswer": 0,
    "explanation": "Định lý chia để trị kinh điển: Bàn cờ $2^n \\times 2^n$ khuyết $1$ ô luôn lát được bằng các mảnh trimino chữ L với mọi số nguyên dương $n \\ge 1$."
  },
  {
    "id": "c1_l6_q7",
    "chapterId": "c1",
    "lessonId": "l1_6",
    "lessonTitle": "§6 Nguyên lý Quy nạp Toán học",
    "difficulty": "Vận dụng",
    "question": "Cho bài toán: 'Chứng minh rằng mọi số nguyên $n \\ge 2$ đều biểu diễn được dưới dạng tích của các số nguyên tố'. Dạng quy nạp bắt buộc phải sử dụng là:",
    "options": [
      "Quy nạp mạnh (giả sử khẳng định đúng với mọi số nguyên từ $2$ đến $k$).",
      "Quy nạp thông thường (giả sử $k$ đúng suy ra $k+1$).",
      "Quy nạp Cauchy.",
      "Không thể chứng minh bằng quy nạp."
    ],
    "correctAnswer": 0,
    "explanation": "Nếu $k+1$ là hợp số, $k+1 = a \\cdot b$ với $2 \\le a, b \\le k$. Để phân tích $a$ và $b$ ra thừa số nguyên tố, ta phải giả sử mệnh đề đã đúng cho tất cả các số từ $2$ đến $k$ (Quy nạp mạnh)."
  },
  {
    "id": "c1_l6_q8",
    "chapterId": "c1",
    "lessonId": "l1_6",
    "lessonTitle": "§6 Nguyên lý Quy nạp Toán học",
    "difficulty": "Thông hiểu",
    "question": "Cho mệnh đề $P(n): \"11^n - 6 \\text{ chia hết cho } 5\"$. Giá trị của biểu thức tại bước $n = k+1$ có thể viết lại thành:",
    "options": [
      "Cả A, B, C đều là các phép biến đổi quy nạp hợp lệ.",
      "$11 \\cdot (11^k - 6) + 60$",
      "$11^{k+1} - 6 = 11(11^k - 6) + 60$, đều chia hết cho $5$.",
      "$10 \\cdot 11^k + (11^k - 6)$"
    ],
    "correctAnswer": 0,
    "explanation": "Cả 3 cách biến đổi đều tách biểu thức ở bước $k+1$ thành tổng của một bội số của $5$ và giả thiết quy nạp $(11^k - 6)$. Do đó cả 3 phương án đều hợp lệ."
  },
  {
    "id": "c1_l6_q9",
    "chapterId": "c1",
    "lessonId": "l1_6",
    "lessonTitle": "§6 Nguyên lý Quy nạp Toán học",
    "difficulty": "Nhận biết",
    "question": "Trong bài toán Tháp Hà Nội với $n$ đĩa, số bước tối thiểu để chuyển toàn bộ tháp $n$ đĩa từ cọc nguồn sang cọc đích tuân theo công thức nào sau đây:",
    "options": [
      "$2^n - 1$",
      "$2^n + 1$",
      "$2^{n-1}$",
      "$n^2 - 1$"
    ],
    "correctAnswer": 0,
    "explanation": "Hệ thức truy hồi chuyển tháp Hà Nội: $H_n = 2H_{n-1} + 1$ với $H_1 = 1$. Công thức nghiệm là $H_n = 2^n - 1$."
  },
  {
    "id": "c1_l6_q10",
    "chapterId": "c1",
    "lessonId": "l1_6",
    "lessonTitle": "§6 Nguyên lý Quy nạp Toán học",
    "difficulty": "Thông hiểu",
    "question": "Lỗi sai trong ngụy biện nổi tiếng 'Tất cả mọi con ngựa đều có cùng một màu' bằng quy nạp nằm ở bước nào?",
    "options": [
      "Bước chuyển từ $k = 1$ lên $k = 2$ bị đứt gãy vì hai tập con $k$ phần tử không có phần tử giao nhau.",
      "Bước cơ sở $n = 1$ sai.",
      "Giả thiết quy nạp không đúng.",
      "Không áp dụng được quy nạp cho tập hữu hạn."
    ],
    "correctAnswer": 0,
    "explanation": "Khi $n = 2$, hai tập con $1$ phần tử không hề giao nhau (giao rỗng). Do đó không có phần tử trung gian để bắc cầu màu sắc. Bước $k = 1 \\to k = 2$ bị đứt gãy."
  },
  {
    "id": "c1_l6_q11",
    "chapterId": "c1",
    "lessonId": "l1_6",
    "lessonTitle": "§6 Nguyên lý Quy nạp Toán học",
    "difficulty": "Nhận biết",
    "question": "Bất đẳng thức $n! > 2^n$ đúng với mọi số tự nhiên $n$ thỏa mãn:",
    "options": [
      "$n \\ge 4$",
      "$n \\ge 2$",
      "$n \\ge 3$",
      "$n \\ge 5$"
    ],
    "correctAnswer": 0,
    "explanation": "Kiểm tra: $1! = 1 < 2$, $2! = 2 < 4$, $3! = 6 < 8$, $4! = 24 > 16$. Khẳng định bắt đầu đúng từ $n = 4$."
  },
  {
    "id": "c1_l6_q12",
    "chapterId": "c1",
    "lessonId": "l1_6",
    "lessonTitle": "§6 Nguyên lý Quy nạp Toán học",
    "difficulty": "Thông hiểu",
    "question": "Cho mệnh đề $P(n): \"n^2 + 5n + 1 \\text{ là số lẻ}\"$. Giả sử $P(k)$ đúng, tức $k^2 + 5k + 1$ là số lẻ. Khi đó với $n = k+1$: $(k+1)^2 + 5(k+1) + 1 = (k^2 + 5k + 1) + 2(k+3)$. Kết luận nào sau đây là đúng?",
    "options": [
      "Khẳng định $n^2 + 5n + 1$ luôn là số lẻ với mọi $n \\ge 1$.",
      "$P(k) \\to P(k+1)$ luôn đúng, nhưng $P(n)$ sai với mọi $n \\ge 1$.",
      "Bước chuyển quy nạp sai.",
      "Chỉ đúng khi $n$ là số chẵn."
    ],
    "correctAnswer": 0,
    "explanation": "Bước cơ sở $P(1): 1 + 5 + 1 = 7$ là số lẻ (đúng). Bước chuyển: $(k^2 + 5k + 1) + 2(k+3)$. Vì $k^2 + 5k + 1$ lẻ và $2(k+3)$ chẵn nên tổng luôn là số lẻ với mọi $n \\ge 1$."
  },
  {
    "id": "c1_l6_q13",
    "chapterId": "c1",
    "lessonId": "l1_6",
    "lessonTitle": "§6 Nguyên lý Quy nạp Toán học",
    "difficulty": "Vận dụng",
    "question": "Định lý cơ bản của số học (Tính duy nhất của phân tích ra thừa số nguyên tố) cần nguyên lý nào để chứng minh hoàn chỉnh?",
    "options": [
      "Nguyên lý thứ tự tốt (Well-ordering Principle) hoặc Quy nạp mạnh.",
      "Quy nạp toán học đơn giản $P(n) \\Rightarrow P(n+1)$.",
      "Quy tắc Modus Ponens đơn giản.",
      "Phương pháp vét cạn."
    ],
    "correctAnswer": 0,
    "explanation": "Để chứng minh tính tồn tại và duy nhất của phân tích thừa số nguyên tố, bắt buộc phải sử dụng Nguyên lý thứ tự tốt (mọi tập con khác rỗng của $\\mathbb{N}$ đều có phần tử nhỏ nhất) hoặc Quy nạp mạnh."
  },
  {
    "id": "c1_l6_q14",
    "chapterId": "c1",
    "lessonId": "l1_6",
    "lessonTitle": "§6 Nguyên lý Quy nạp Toán học",
    "difficulty": "Nhận biết",
    "question": "Cho tổng $T_n = \\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\dots + \\frac{1}{n(n+1)}$. Bằng quy nạp ta chứng minh được $T_n$ bằng:",
    "options": [
      "$\\dfrac{n}{n + 1}$",
      "$\\dfrac{n + 1}{n}$",
      "$\\dfrac{1}{n + 1}$",
      "$\\dfrac{n}{2(n + 1)}$"
    ],
    "correctAnswer": 0,
    "explanation": "Ta có $\\frac{1}{i(i+1)} = \\frac{1}{i} - \\frac{1}{i+1}$. Tổng triệt tiêu liên tiếp: $T_n = \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\dots + \\left(\\frac{1}{n} - \\frac{1}{n+1}\\right) = 1 - \\frac{1}{n+1} = \\frac{n}{n+1}$."
  },
  {
    "id": "c1_l6_q15",
    "chapterId": "c1",
    "lessonId": "l1_6",
    "lessonTitle": "§6 Nguyên lý Quy nạp Toán học",
    "difficulty": "Thông hiểu",
    "question": "Khẳng định nào sau đây diễn đạt đúng nhất về mối liên hệ giữa Nguyên lý Quy nạp Toán học và Nguyên lý Thứ tự Tốt (Well-ordering principle trên tập $\\mathbb{N}$)?",
    "options": [
      "Hai nguyên lý này tương đương logic với nhau trên nền tảng tiên đề tập hợp.",
      "Nguyên lý thứ tự tốt yếu hơn quy nạp toán học.",
      "Quy nạp toán học chỉ đúng trên tập số thực.",
      "Không thể dùng nguyên lý thứ tự tốt để chứng minh nguyên lý quy nạp."
    ],
    "correctAnswer": 0,
    "explanation": "Trong hệ tiên đề Peano cho tập số tự nhiên $\\mathbb{N}$, Nguyên lý quy nạp toán học và Nguyên lý thứ tự tốt là hai phát biểu hoàn toàn tương đương logic với nhau."
  },
  {
    "id": "c2_l1_q1",
    "chapterId": "c2",
    "lessonId": "l2_1",
    "lessonTitle": "§1 Tập hợp & Đại số tập hợp",
    "difficulty": "Nhận biết",
    "question": "Cho tập $A$ có $4$ phần tử. Số tập hợp con của $A$ (lực lượng của tập lũy thừa $\\mathcal{P}(A)$) là:",
    "options": [
      "$8$",
      "$16$",
      "$12$",
      "$4$"
    ],
    "correctAnswer": 1,
    "explanation": "Số tập hợp con của một tập hợp gồm $n$ phần tử là $|\\mathcal{P}(A)| = 2^n$. Với $n = 4$, số tập con là $2^4 = 16$."
  },
  {
    "id": "c2_l1_q2",
    "chapterId": "c2",
    "lessonId": "l2_1",
    "lessonTitle": "§1 Tập hợp & Đại số tập hợp",
    "difficulty": "Thông hiểu",
    "question": "Khẳng định nào dưới đây là ĐÚNG đối với tập rỗng $\\emptyset$?",
    "options": [
      "$\\emptyset \\in \\emptyset$",
      "$\\emptyset \\subset \\emptyset$",
      "$\\emptyset \\subseteq \\{\\emptyset\\}$",
      "$\\{\\emptyset\\} = \\emptyset$"
    ],
    "correctAnswer": 2,
    "explanation": "Tập rỗng $\\emptyset$ là tập con của bất kỳ tập hợp nào, do đó $\\emptyset \\subseteq \\{\\emptyset\\}$ là đúng. Tập $\\emptyset$ không chứa phần tử nào nên $\\emptyset \\in \\emptyset$ là sai; $\\{\\emptyset\\}$ có $1$ phần tử nên khác $\\emptyset$."
  },
  {
    "id": "c2_l1_q3",
    "chapterId": "c2",
    "lessonId": "l2_1",
    "lessonTitle": "§1 Tập hợp & Đại số tập hợp",
    "difficulty": "Vận dụng",
    "question": "Cho tập vũ trụ $\\mathcal{U} = \\{1, 2, \\dots, 10\\}$, $A = \\{1, 2, 3, 4, 5\\}$, $B = \\{1, 2, 4, 8\\}$. Tập hợp hiệu $A \\setminus B$ là:",
    "options": [
      "$\\{8\\}$",
      "$\\{3, 5\\}$",
      "$\\{1, 2, 4\\}$",
      "$\\{1, 2, 3, 4, 5, 8\\}$"
    ],
    "correctAnswer": 1,
    "explanation": "Phép hiệu $A \\setminus B = \\{x \\in A \\mid x \\notin B\\}$. Từ $A = \\{1, 2, 3, 4, 5\\}$ loại bỏ các phần tử $\\{1, 2, 4\\}$ thuộc $B$, ta còn lại $\\{3, 5\\}$."
  },
  {
    "id": "c2_l2_q1",
    "chapterId": "c2",
    "lessonId": "l2_2",
    "lessonTitle": "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    "difficulty": "Nhận biết",
    "question": "Ánh xạ $f: A \\to B$ được gọi là đơn ánh (injective) nếu:",
    "options": [
      "Mọi phần tử của $B$ đều có tạo ảnh",
      "Hai phần tử khác nhau bất kỳ của $A$ có ảnh khác nhau trong $B$",
      "Tập $A$ và tập $B$ có cùng số phần tử",
      "$f(A) = B$"
    ],
    "correctAnswer": 1,
    "explanation": "Định nghĩa đơn ánh: $\\forall x_1, x_2 \\in A,\\; x_1 \\neq x_2 \\implies f(x_1) \\neq f(x_2)$ (tương đương $f(x_1) = f(x_2) \\implies x_1 = x_2$)."
  },
  {
    "id": "c2_l2_q2",
    "chapterId": "c2",
    "lessonId": "l2_2",
    "lessonTitle": "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    "difficulty": "Thông hiểu",
    "question": "Xét ánh xạ $f: \\mathbb{Z} \\to \\mathbb{Z}$ xác định bởi $f(x) = 2x + 1$. Khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "$f$ là toàn ánh nhưng không đơn ánh",
      "$f$ là đơn ánh nhưng không phải toàn ánh",
      "$f$ là song ánh",
      "$f$ không đơn ánh và không toàn ánh"
    ],
    "correctAnswer": 1,
    "explanation": "1) Đơn ánh: $2x_1 + 1 = 2x_2 + 1 \\implies x_1 = x_2$. 2) Không toàn ánh: $f(x) = 2x + 1$ luôn là số lẻ, nên các số chẵn trong $\\mathbb{Z}$ (như $0, 2$) không có tạo ảnh nguyên."
  },
  {
    "id": "c2_l2_q3",
    "chapterId": "c2",
    "lessonId": "l2_2",
    "lessonTitle": "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    "difficulty": "Vận dụng",
    "question": "Cho hai ánh xạ $f: A \\to B$ và $g: B \\to C$. Nếu ánh xạ hợp $g \\circ f$ là đơn ánh thì khẳng định nào chắc chắn đúng?",
    "options": [
      "$g$ phải là đơn ánh",
      "$f$ phải là đơn ánh",
      "Cả $f$ và $g$ đều phải là đơn ánh",
      "$g$ phải là toàn ánh"
    ],
    "correctAnswer": 1,
    "explanation": "Giả sử $x_1, x_2 \\in A$ thỏa $f(x_1) = f(x_2)$. Khi đó $g(f(x_1)) = g(f(x_2))$, tức $(g \\circ f)(x_1) = (g \\circ f)(x_2)$. Vì $g \\circ f$ đơn ánh nên $x_1 = x_2$. Vậy $f$ bắt buộc là đơn ánh."
  },
  {
    "id": "c2_l3_q1",
    "chapterId": "c2",
    "lessonId": "l2_3",
    "lessonTitle": "§3 Phép đếm & Các nguyên lý đếm cơ bản",
    "difficulty": "Nhận biết",
    "question": "Một nhà hàng có 5 món khai vị và 8 món chính. Một thực khách chọn 1 món khai vị và 1 món chính. Số cách chọn là:",
    "options": [
      "13 cách",
      "40 cách",
      "26 cách",
      "120 cách"
    ],
    "correctAnswer": 1,
    "explanation": "Theo nguyên lý nhân: Việc chọn gồm $2$ công đoạn liên tiếp độc lập: chọn khai vị ($5$ cách) và chọn món chính ($8$ cách). Số cách là $5 \\times 8 = 40$ cách."
  },
  {
    "id": "c2_l3_q2",
    "chapterId": "c2",
    "lessonId": "l2_3",
    "lessonTitle": "§3 Phép đếm & Các nguyên lý đếm cơ bản",
    "difficulty": "Thông hiểu",
    "question": "Lớp có 30 sinh viên học Tiếng Anh, 25 sinh viên học Tiếng Pháp, và 10 sinh viên học cả hai môn. Số sinh viên học ít nhất một trong hai môn là:",
    "options": [
      "55 sinh viên",
      "45 sinh viên",
      "65 sinh viên",
      "35 sinh viên"
    ],
    "correctAnswer": 1,
    "explanation": "Theo nguyên lý bù trừ (Inclusion–Exclusion): $|A \\cup B| = |A| + |B| - |A \\cap B| = 30 + 25 - 10 = 45$ sinh viên."
  },
  {
    "id": "c2_l3_q3",
    "chapterId": "c2",
    "lessonId": "l2_3",
    "lessonTitle": "§3 Phép đếm & Các nguyên lý đếm cơ bản",
    "difficulty": "Vận dụng",
    "question": "Có bao nhiêu xâu nhị phân có độ dài 8 (1 byte) chứa đúng 3 bit 1?",
    "options": [
      "$24$",
      "$56$",
      "$64$",
      "$128$"
    ],
    "correctAnswer": 1,
    "explanation": "Xâu nhị phân $8$ bit có $8$ vị trí. Để có đúng $3$ bit $1$, ta chọn $3$ trong $8$ vị trí đặt bit $1$: $C_8^3 = \\dfrac{8!}{3!\\,5!} = \\dfrac{8 \\cdot 7 \\cdot 6}{6} = 56$ xâu."
  },
  {
    "id": "c2_l3_q4",
    "chapterId": "c2",
    "lessonId": "l2_3",
    "lessonTitle": "§3 Phép đếm & Các nguyên lý đếm cơ bản",
    "difficulty": "Vận dụng",
    "question": "Có bao nhiêu số nguyên từ 1 đến 1000 chia hết cho 3 hoặc chia hết cho 5?",
    "options": [
      "$533$",
      "$467$",
      "$500$",
      "$333$"
    ],
    "correctAnswer": 1,
    "explanation": "Số chia hết cho $3$: $\\lfloor 1000/3 \\rfloor = 333$. Số chia hết cho $5$: $\\lfloor 1000/5 \\rfloor = 200$. Số chia hết cho cả $3$ và $5$ (chia hết cho $15$): $\\lfloor 1000/15 \\rfloor = 66$. Theo nguyên lý bù trừ: $333 + 200 - 66 = 467$ số."
  },
  {
    "id": "c2_l4_q1",
    "chapterId": "c2",
    "lessonId": "l2_4",
    "lessonTitle": "§4 Giải tích tổ hợp & Nhị thức Newton",
    "difficulty": "Nhận biết",
    "question": "Số cách xếp 6 học sinh ngồi vào một dãy 6 chiếc ghế là:",
    "options": [
      "$36$",
      "$720$",
      "$120$",
      "$64$"
    ],
    "correctAnswer": 1,
    "explanation": "Đây là số hoán vị của $6$ phần tử: $P_6 = 6! = 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 720$ cách."
  },
  {
    "id": "c2_l4_q2",
    "chapterId": "c2",
    "lessonId": "l2_4",
    "lessonTitle": "§4 Giải tích tổ hợp & Nhị thức Newton",
    "difficulty": "Thông hiểu",
    "question": "Số nghiệm nguyên không âm của phương trình $x_1 + x_2 + x_3 + x_4 = 10$ là:",
    "options": [
      "$K_4^{10} = C_{13}^{10} = 286$",
      "$C_{10}^4 = 210$",
      "$C_9^3 = 84$",
      "$4^{10}$"
    ],
    "correctAnswer": 0,
    "explanation": "Theo công thức tổ hợp lặp (bài toán chia kẹo Euler), số nghiệm nguyên không âm của $x_1 + x_2 + \\dots + x_n = k$ là $\\overline{C}_n^k = K_n^k = C_{n+k-1}^k$. Với $n = 4, k = 10$: $K_4^{10} = C_{13}^{10} = C_{13}^3 = 286$."
  },
  {
    "id": "c2_l4_q3",
    "chapterId": "c2",
    "lessonId": "l2_4",
    "lessonTitle": "§4 Giải tích tổ hợp & Nhị thức Newton",
    "difficulty": "Vận dụng",
    "question": "Trong khai triển nhị thức Newton $(x + 2y)^{12}$, hệ số của số hạng chứa $x^9 y^3$ là:",
    "options": [
      "$220$",
      "$1760$",
      "$880$",
      "$3520$"
    ],
    "correctAnswer": 1,
    "explanation": "Số hạng tổng quát là $C_{12}^k x^{12-k} (2y)^k = C_{12}^k \\cdot 2^k x^{12-k} y^k$. Ứng với $x^9 y^3$ ta có $k = 3$. Hệ số cần tìm là $C_{12}^3 \\cdot 2^3 = 220 \\cdot 8 = 1760$."
  },
  {
    "id": "c2_l4_q4",
    "chapterId": "c2",
    "lessonId": "l2_4",
    "lessonTitle": "§4 Giải tích tổ hợp & Nhị thức Newton",
    "difficulty": "Thông hiểu",
    "question": "Một lớp có 15 nam và 10 nữ. Cần lập ban cán sự gồm 3 người trong đó có ít nhất 1 nữ. Số cách chọn là:",
    "options": [
      "$C_{25}^3 - C_{15}^3 = 1845$",
      "$C_{10}^1 \\cdot C_{15}^2 = 1050$",
      "$C_{10}^3 = 120$",
      "$C_{25}^3 = 2300$"
    ],
    "correctAnswer": 0,
    "explanation": "Dùng phương pháp phần bù: Số cách chọn $3$ người bất kỳ từ $25$ người là $C_{25}^3 = 2300$. Số cách chọn $3$ người toàn nam là $C_{15}^3 = 455$. Vậy số cách chọn có ít nhất $1$ nữ là $C_{25}^3 - C_{15}^3 = 2300 - 455 = 1845$ cách."
  },
  {
    "id": "c2_l4_q5",
    "chapterId": "c2",
    "lessonId": "l2_4",
    "lessonTitle": "§4 Giải tích tổ hợp & Nhị thức Newton",
    "difficulty": "Vận dụng",
    "question": "Có 4 loại bánh ngọt khác nhau. Bạn An muốn mua 10 chiếc bánh (mỗi loại có thể mua nhiều chiếc). Số cách chọn mua là:",
    "options": [
      "$C_{10}^4 = 210$",
      "$\\overline{C}_4^{10} = C_{13}^{10} = 286$",
      "$4^{10}$",
      "$10^4$"
    ],
    "correctAnswer": 1,
    "explanation": "Đây là bài toán tổ hợp lặp: chọn $k = 10$ chiếc bánh từ $n = 4$ loại bánh (có lặp, không phân biệt thứ tự). Số cách là $\\overline{C}_4^{10} = K_4^{10} = C_{4+10-1}^{10} = C_{13}^{10} = 286$ cách."
  },
  {
    "id": "c2_l5_q1",
    "chapterId": "c2",
    "lessonId": "l2_5",
    "lessonTitle": "§5 Nguyên lý Chuồng bồ câu (Dirichlet)",
    "difficulty": "Nhận biết",
    "question": "Cần chọn ngẫu nhiên ít nhất bao nhiêu người để chắc chắn có ít nhất 2 người có cùng ngày sinh nhật trong năm (năm thường 365 ngày)?",
    "options": [
      "$365$",
      "$366$",
      "$367$",
      "$183$"
    ],
    "correctAnswer": 1,
    "explanation": "Năm thường có $365$ ngày ($365$ chuồng). Theo nguyên lý Dirichlet, cần ít nhất $365 + 1 = 366$ người để chắc chắn có ít nhất $2$ người cùng ngày sinh."
  },
  {
    "id": "c2_l5_q2",
    "chapterId": "c2",
    "lessonId": "l2_5",
    "lessonTitle": "§5 Nguyên lý Chuồng bồ câu (Dirichlet)",
    "difficulty": "Thông hiểu",
    "question": "Trong một phòng học có 65 sinh viên. Khẳng định nào sau đây là CHẮC CHẮN ĐÚNG?",
    "options": [
      "Có ít nhất 6 sinh viên sinh cùng một tháng",
      "Có đúng 5 sinh viên sinh vào tháng Giêng",
      "Tất cả sinh viên sinh vào các tháng khác nhau",
      "Không có sinh viên nào sinh vào tháng 12"
    ],
    "correctAnswer": 0,
    "explanation": "Một năm có $12$ tháng ($12$ chuồng), số sinh viên là $65$ (bồ câu). Theo nguyên lý Dirichlet tổng quát, có ít nhất một tháng chứa tối thiểu $\\lceil 65 / 12 \\rceil = 6$ sinh viên."
  },
  {
    "id": "c2_l5_q3",
    "chapterId": "c2",
    "lessonId": "l2_5",
    "lessonTitle": "§5 Nguyên lý Chuồng bồ câu (Dirichlet)",
    "difficulty": "Vận dụng",
    "question": "Cho tập $S = \\{1, 2, \\dots, 25\\}$. Chọn ngẫu nhiên $k$ phần tử từ $S$ sao cho chắc chắn có $2$ phần tử có tổng bằng $26$. Giá trị nhỏ nhất của $k$ là:",
    "options": [
      "$12$",
      "$13$",
      "$14$",
      "$15$"
    ],
    "correctAnswer": 2,
    "explanation": "Ghép các cặp có tổng bằng $26$: $\\{1, 25\\}, \\{2, 24\\}, \\dots, \\{12, 14\\}$ ($12$ cặp) và phần tử lẻ $\\{13\\}$, tạo thành $13$ chuồng. Theo nguyên lý Dirichlet, chọn $k = 13 + 1 = 14$ phần tử chắc chắn có $2$ số thuộc cùng một cặp có tổng bằng $26$."
  },
  {
    "id": "c3_l1_q1",
    "chapterId": "c3",
    "lessonId": "l3_1",
    "lessonTitle": "§1 Quan hệ & Quan hệ chiếu",
    "difficulty": "Nhận biết",
    "question": "Cho tập $A$ có $3$ phần tử và tập $B$ có $2$ phần tử. Có tất cả bao nhiêu quan hệ hai ngôi khác nhau từ $A$ vào $B$?",
    "options": [
      "$6$",
      "$32$",
      "$64$",
      "$12$"
    ],
    "correctAnswer": 2,
    "explanation": "Tích Descartes $A \\times B$ có $|A| \\cdot |B| = 3 \\cdot 2 = 6$ phần tử. Mỗi quan hệ từ $A$ vào $B$ là một tập con của $A \\times B$, nên có $2^6 = 64$ quan hệ."
  },
  {
    "id": "c3_l1_q2",
    "chapterId": "c3",
    "lessonId": "l3_1",
    "lessonTitle": "§1 Quan hệ & Quan hệ chiếu",
    "difficulty": "Thông hiểu",
    "question": "Hai số nguyên $a$ và $b$ được gọi là đồng dư modulo $n$ ($a \\equiv b \\pmod n$) khi và chỉ khi:",
    "options": [
      "$a + b$ chia hết cho $n$",
      "$a - b$ chia hết cho $n$",
      "$a \\cdot b$ chia hết cho $n$",
      "$a$ chia hết cho $b$"
    ],
    "correctAnswer": 1,
    "explanation": "Theo định nghĩa, $a \\equiv b \\pmod n \\iff (a - b) \\vdots n$ (tức $a - b$ là bội số nguyên của $n$)."
  },
  {
    "id": "c3_l2_q1",
    "chapterId": "c3",
    "lessonId": "l3_2",
    "lessonTitle": "§2 Quan hệ Tương đương & Phân hoạch",
    "difficulty": "Nhận biết",
    "question": "Một quan hệ $\\mathcal{R}$ trên tập $A$ được gọi là quan hệ tương đương nếu nó thỏa mãn đồng thời 3 tính chất nào?",
    "options": [
      "Phản xạ, phản xứng, bắc cầu",
      "Phản xạ, đối xứng, bắc cầu",
      "Đối xứng, phản xứng, bắc cầu",
      "Phản xạ, đối xứng, phản xứng"
    ],
    "correctAnswer": 1,
    "explanation": "Quan hệ tương đương bắt buộc phải thỏa mãn 3 tính chất: Phản xạ (Reflexive), Đối xứng (Symmetric) và Bắc cầu (Transitive)."
  },
  {
    "id": "c3_l2_q2",
    "chapterId": "c3",
    "lessonId": "l3_2",
    "lessonTitle": "§2 Quan hệ Tương đương & Phân hoạch",
    "difficulty": "Thông hiểu",
    "question": "Xét quan hệ $\\mathcal{R}$ trên $\\mathbb{Z}$ xác định bởi: $x\\mathcal{R}y \\iff x + y$ là số chẵn. Khẳng định nào sau đây là ĐÚNG?",
    "options": [
      "$\\mathcal{R}$ không phản xạ",
      "$\\mathcal{R}$ là quan hệ tương đương với $2$ lớp tương đương: tập số chẵn và tập số lẻ",
      "$\\mathcal{R}$ không đối xứng",
      "$\\mathcal{R}$ không bắc cầu"
    ],
    "correctAnswer": 1,
    "explanation": "1) Phản xạ: $x + x = 2x$ chẵn $\\implies x\\mathcal{R}x$. 2) Đối xứng: $x + y$ chẵn $\\iff y + x$ chẵn. 3) Bắc cầu: $x + y$ chẵn và $y + z$ chẵn $\\implies (x + y) + (y + z) - 2y = x + z$ chẵn. Vậy $\\mathcal{R}$ chia $\\mathbb{Z}$ thành $2$ lớp tương đương: số chẵn và số lẻ."
  },
  {
    "id": "c3_l2_q3",
    "chapterId": "c3",
    "lessonId": "l3_2",
    "lessonTitle": "§2 Quan hệ Tương đương & Phân hoạch",
    "difficulty": "Vận dụng",
    "question": "Cho $A = \\{1, 2, 3\\}$. Quan hệ tương đương $\\mathcal{R}$ nào sau đây tạo ra phân hoạch $\\{\\{1, 2\\}, \\{3\\}\\}$ của $A$?",
    "options": [
      "$\\mathcal{R} = \\{(1,1), (2,2), (3,3), (1,2)\\}$",
      "$\\mathcal{R} = \\{(1,1), (2,2), (3,3), (1,2), (2,1)\\}$",
      "$\\mathcal{R} = \\{(1,1), (2,2), (3,3), (1,3), (3,1)\\}$",
      "$\\mathcal{R} = \\{(1,2), (2,1)\\}$"
    ],
    "correctAnswer": 1,
    "explanation": "Khối $\\{1, 2\\}$ sinh ra $\\{1, 2\\}^2 = \\{(1,1), (2,2), (1,2), (2,1)\\}$; khối $\\{3\\}$ sinh ra $\\{(3,3)\\}$. Hợp lại được $\\mathcal{R} = \\{(1,1), (2,2), (3,3), (1,2), (2,1)\\}$."
  },
  {
    "id": "c3_l2_q4",
    "chapterId": "c3",
    "lessonId": "l3_2",
    "lessonTitle": "§2 Quan hệ Tương đương & Phân hoạch",
    "difficulty": "Vận dụng",
    "question": "Số quan hệ tương đương khác nhau trên một tập hợp có $3$ phần tử $\\{a, b, c\\}$ là:",
    "options": [
      "$3$",
      "$5$",
      "$8$",
      "$6$"
    ],
    "correctAnswer": 1,
    "explanation": "Số quan hệ tương đương trên tập $n$ phần tử bằng số phân hoạch của nó (số Bell $B_n$). Với $n = 3$, $B_3 = 5$ phân hoạch: $\\{\\{a,b,c\\}\\}$, $\\{\\{a,b\\},\\{c\\}\\}$, $\\{\\{a,c\\},\\{b\\}\\}$, $\\{\\{b,c\\},\\{a\\}\\}$, $\\{\\{a\\},\\{b\\},\\{c\\}\\}$."
  },
  {
    "id": "c3_l3_q1",
    "chapterId": "c3",
    "lessonId": "l3_3",
    "lessonTitle": "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    "difficulty": "Nhận biết",
    "question": "Một quan hệ thứ tự (bộ phận) trên tập $A$ thỏa mãn 3 tính chất nào?",
    "options": [
      "Phản xạ, đối xứng, bắc cầu",
      "Phản xạ, phản xứng, bắc cầu",
      "Đối xứng, phản xứng, bắc cầu",
      "Toàn phần, phản xạ, đối xứng"
    ],
    "correctAnswer": 1,
    "explanation": "Quan hệ thứ tự (Partial Order) phải thỏa mãn: Phản xạ, Phản xứng ($x \\preceq y \\land y \\preceq x \\implies x = y$), và Bắc cầu."
  },
  {
    "id": "c3_l3_q2",
    "chapterId": "c3",
    "lessonId": "l3_3",
    "lessonTitle": "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    "difficulty": "Thông hiểu",
    "question": "Trong biểu đồ Hasse của một tập sắp thứ tự hữu hạn, ta KHÔNG vẽ những đường nối nào?",
    "options": [
      "Các đường nối giữa hai phần tử kề nhau",
      "Các vòng lặp phản xạ (nối phần tử với chính nó) và các cung bắc cầu",
      "Các đường nối giữa phần tử bé nhất và phần tử lớn nhất",
      "Các đường đi từ dưới lên trên"
    ],
    "correctAnswer": 1,
    "explanation": "Biểu đồ Hasse được tối giản hóa bằng quy ước: lược bỏ các khuyên phản xạ ($x \\preceq x$) và lược bỏ các cạnh suy diễn từ tính bắc cầu (nếu $x \\prec y \\prec z$ thì không vẽ cạnh nối trực tiếp $x$ với $z$)."
  },
  {
    "id": "c3_l3_q3",
    "chapterId": "c3",
    "lessonId": "l3_3",
    "lessonTitle": "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    "difficulty": "Vận dụng",
    "question": "Cho tập $A = \\{2, 3, 4, 6, 12, 18\\}$ sắp thứ tự theo quan hệ chia hết ($a \\mid b$). Các phần tử tối đại của $A$ là:",
    "options": [
      "$12$",
      "$18$",
      "$12$ và $18$",
      "$2$ và $3$"
    ],
    "correctAnswer": 2,
    "explanation": "Phần tử $m \\in A$ là tối đại nếu không có $x \\in A \\setminus \\{m\\}$ sao cho $m \\mid x$. Trong $A$, cả $12$ và $18$ đều không là ước thực sự của phần tử nào khác trong $A$, nên $12$ và $18$ đều là phần tử tối đại."
  },
  {
    "id": "c3_l3_q4",
    "chapterId": "c3",
    "lessonId": "l3_3",
    "lessonTitle": "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    "difficulty": "Thông hiểu",
    "question": "Trong một tập hợp sắp thứ tự (Poset), nhận xét nào sau đây luôn ĐÚNG?",
    "options": [
      "Mọi phần tử tối đại đều là phần tử lớn nhất",
      "Nếu tồn tại phần tử lớn nhất thì nó là phần tử tối đại duy nhất",
      "Mọi Poset đều có ít nhất một phần tử lớn nhất",
      "Một Poset không thể có nhiều hơn 1 phần tử tối tiểu"
    ],
    "correctAnswer": 1,
    "explanation": "Định lý 3.3.2: Trong một Poset, nếu tồn tại phần tử lớn nhất $M$ thì $M$ là duy nhất và cũng là phần tử tối đại duy nhất. Ngược lại, một Poset có thể có nhiều phần tử tối đại mà không có phần tử lớn nhất."
  },
  {
    "id": "c3_l4_q1",
    "chapterId": "c3",
    "lessonId": "l3_4",
    "lessonTitle": "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    "difficulty": "Nhận biết",
    "question": "Một tập sắp thứ tự $(L, \\preceq)$ được gọi là một Dàn (Lattice) khi và chỉ khi:",
    "options": [
      "$L$ có phần tử lớn nhất và phần tử bé nhất",
      "Mọi cặp phần tử $x, y \\in L$ đều có $\\sup\\{x, y\\}$ và $\\inf\\{x, y\\}$",
      "$L$ là một tập sắp thứ tự toàn phần",
      "$L$ là một tập hợp hữu hạn"
    ],
    "correctAnswer": 1,
    "explanation": "Định nghĩa: Dàn là một tập sắp thứ tự mà trong đó mọi cặp phần tử $x, y$ đều tồn tại cận trên đúng ($x \\lor y = \\sup\\{x, y\\}$) và cận dưới đúng ($x \\land y = \\inf\\{x, y\\}$)."
  },
  {
    "id": "c3_l4_q2",
    "chapterId": "c3",
    "lessonId": "l3_4",
    "lessonTitle": "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
    "difficulty": "Thông hiểu",
    "question": "Mọi tập hợp sắp thứ tự toàn phần (chẳng hạn $(\\mathbb{R}, \\le)$) có phải là một dàn phân bố không?",
    "options": [
      "Không phải là dàn",
      "Là dàn nhưng không phân bố",
      "Luôn luôn là một dàn phân bố",
      "Chỉ là dàn phân bố khi tập hữu hạn"
    ],
    "correctAnswer": 2,
    "explanation": "Với tập thứ tự toàn phần, $\\sup\\{x, y\\} = \\max(x, y)$ và $\\inf\\{x, y\\} = \\min(x, y)$. Phép $\\min$ và $\\max$ luôn thỏa mãn luật phân bố $\\min(x, \\max(y, z)) = \\max(\\min(x, y), \\min(x, z))$, nên nó luôn là dàn phân bố."
  },
  {
    "id": "c3_l6_q1",
    "chapterId": "c3",
    "lessonId": "l3_6",
    "lessonTitle": "§6 Dàn ước số $\\mathcal{U}_n$ & Thuật chia Euclide",
    "difficulty": "Nhận biết",
    "question": "Trong dàn các ước số nguyên dương $\\mathcal{U}_n$ với quan hệ chia hết, $\\inf(a, b)$ và $\\sup(a, b)$ tương ứng là:",
    "options": [
      "$\\min(a, b)$ và $\\max(a, b)$",
      "$\\gcd(a, b)$ (USCLN) và $\\operatorname{lcm}(a, b)$ (BSCNN)",
      "$a \\cdot b$ và $a / b$",
      "$a + b$ và $a - b$"
    ],
    "correctAnswer": 1,
    "explanation": "Theo quan hệ chia hết $a \\mid b$, cận dưới lớn nhất của $a, b$ là $\\gcd(a, b) = \\text{USCLN}(a, b)$, còn cận trên nhỏ nhất là $\\operatorname{lcm}(a, b) = \\text{BSCNN}(a, b)$."
  },
  {
    "id": "c3_l6_q2",
    "chapterId": "c3",
    "lessonId": "l3_6",
    "lessonTitle": "§6 Dàn ước số $\\mathcal{U}_n$ & Thuật chia Euclide",
    "difficulty": "Thông hiểu",
    "question": "Dàn các ước số $\\mathcal{U}_n$ là một DÀN BÙ khi và chỉ khi $n$ thỏa mãn điều kiện nào?",
    "options": [
      "$n$ là một số chẵn",
      "$n$ không chứa thừa số chính phương (mọi số mũ trong phân tích nguyên tố đều bằng $1$)",
      "$n$ là số nguyên tố",
      "$n$ là một lũy thừa của $2$"
    ],
    "correctAnswer": 1,
    "explanation": "Theo Định lý 3.6.10 (Giáo trình GS. Nguyễn Hữu Anh): Dàn $\\mathcal{U}_n$ là dàn bù khi và chỉ khi $n$ không chia hết cho bình phương của bất kỳ số nguyên lớn hơn $1$ nào ($n = p_1 p_2 \\dots p_k$)."
  },
  {
    "id": "c3_l6_q3",
    "chapterId": "c3",
    "lessonId": "l3_6",
    "lessonTitle": "§6 Dàn ước số $\\mathcal{U}_n$ & Thuật chia Euclide",
    "difficulty": "Vận dụng",
    "question": "Áp dụng thuật toán Euclide tìm $\\gcd(252, 105)$:",
    "options": [
      "$7$",
      "$21$",
      "$42$",
      "$3$"
    ],
    "correctAnswer": 1,
    "explanation": "Các bước chia Euclide: $252 = 105 \\cdot 2 + 42$; $105 = 42 \\cdot 2 + 21$; $42 = 21 \\cdot 2 + 0$. Số dư khác $0$ cuối cùng là $21$, vậy $\\gcd(252, 105) = 21$."
  },
  {
    "id": "c3_l6_q4",
    "chapterId": "c3",
    "lessonId": "l3_6",
    "lessonTitle": "§6 Dàn ước số $\\mathcal{U}_n$ & Thuật chia Euclide",
    "difficulty": "Vận dụng",
    "question": "Dàn các ước số $\\mathcal{U}_n$ nào sau đây KHÔNG PHẢI là một dàn bù?",
    "options": [
      "$\\mathcal{U}_6$",
      "$\\mathcal{U}_{30}$",
      "$\\mathcal{U}_{12}$",
      "$\\mathcal{U}_{70}$"
    ],
    "correctAnswer": 2,
    "explanation": "Ta có $6 = 2 \\cdot 3$, $30 = 2 \\cdot 3 \\cdot 5$, $70 = 2 \\cdot 5 \\cdot 7$ đều không chứa thừa số chính phương nên là dàn bù. Riêng $12 = 2^2 \\cdot 3$ chia hết cho $2^2$ nên $\\mathcal{U}_{12}$ không phải dàn bù (phần tử $2$ không có phần bù trong $\\mathcal{U}_{12}$)."
  },
  {
    "id": "c4_l1_q1",
    "chapterId": "c4",
    "lessonId": "l4_1",
    "lessonTitle": "§1 Đại số Bool & Định lý Stone",
    "difficulty": "Nhận biết",
    "question": "Theo định lý Stone, số phần tử của một đại số Bool hữu hạn bất kỳ luôn có dạng:",
    "options": [
      "Một số nguyên tố",
      "$2^n$ với $n$ là số nguyên không âm",
      "Một số chẵn bất kỳ",
      "$n!$ với $n \\ge 1$"
    ],
    "correctAnswer": 1,
    "explanation": "Theo Định lý Stone: Mọi đại số Bool hữu hạn đều đẳng cấu với $(\\mathcal{P}(E), \\cup, \\cap)$ của một tập hữu hạn $E$ gồm $n$ phần tử, nên lực lượng luôn bằng $|\\mathcal{P}(E)| = 2^n$."
  },
  {
    "id": "c4_l1_q2",
    "chapterId": "c4",
    "lessonId": "l4_1",
    "lessonTitle": "§1 Đại số Bool & Định lý Stone",
    "difficulty": "Thông hiểu",
    "question": "Tập hợp các ước số $\\mathcal{U}_{30}$ có phải là một đại số Bool đối với các phép toán $(\\operatorname{lcm}, \\gcd)$ không?",
    "options": [
      "Không phải đại số Bool vì $30$ là số chẵn",
      "Phải, vì $30 = 2 \\cdot 3 \\cdot 5$ không có thừa số chính phương, $\\mathcal{U}_{30}$ có $2^3 = 8$ phần tử",
      "Không phải, vì $\\mathcal{U}_{30}$ không có phần bù",
      "Chỉ là đại số Bool khi bỏ đi phần tử $1$"
    ],
    "correctAnswer": 1,
    "explanation": "Vì $30 = 2 \\cdot 3 \\cdot 5$ không chứa thừa số chính phương nên $\\mathcal{U}_{30}$ là một dàn bù phân bố, tức là một đại số Bool gồm $2^3 = 8$ phần tử, đẳng cấu với $\\mathcal{P}(\\{2, 3, 5\\})$."
  },
  {
    "id": "c4_l2_q1",
    "chapterId": "c4",
    "lessonId": "l4_2",
    "lessonTitle": "§2 Hàm Bool & Dạng chính tắc",
    "difficulty": "Nhận biết",
    "question": "Có tất cả bao nhiêu hàm Bool 3 biến khác nhau?",
    "options": [
      "$8$",
      "$64$",
      "$256$",
      "$512$"
    ],
    "correctAnswer": 2,
    "explanation": "Số hàm Bool $n$ biến được tính theo công thức $2^{2^n}$. Với $n = 3$, số hàm Bool là $2^{2^3} = 2^8 = 256$ hàm."
  },
  {
    "id": "c4_l2_q2",
    "chapterId": "c4",
    "lessonId": "l4_2",
    "lessonTitle": "§2 Hàm Bool & Dạng chính tắc",
    "difficulty": "Thông hiểu",
    "question": "Từ tối tiểu (minterm) của hàm Bool $3$ biến $x, y, z$ nhận giá trị $1$ tại điểm $(x=1, y=0, z=1)$ có biểu thức là:",
    "options": [
      "$x \\lor \\overline{y} \\lor z$",
      "$x\\overline{y}z$",
      "$\\overline{x}y\\overline{z}$",
      "$xyz$"
    ],
    "correctAnswer": 1,
    "explanation": "Quy tắc lập từ tối tiểu (minterm): biến có giá trị $1$ giữ nguyên, biến có giá trị $0$ lấy phần bù. Tại $(1, 0, 1)$, minterm tương ứng là $x\\overline{y}z$."
  },
  {
    "id": "c4_l2_q3",
    "chapterId": "c4",
    "lessonId": "l4_2",
    "lessonTitle": "§2 Hàm Bool & Dạng chính tắc",
    "difficulty": "Vận dụng",
    "question": "Dạng nối rời chính tắc (Canonical DNF) của hàm Bool $f(x, y) = x \\lor y$ là:",
    "options": [
      "$xy \\lor x\\overline{y} \\lor \\overline{x}y$",
      "$xy \\lor \\overline{x}\\,\\overline{y}$",
      "$xy$",
      "$x\\overline{y} \\lor \\overline{x}y$"
    ],
    "correctAnswer": 0,
    "explanation": "Hàm $f(x, y) = x \\lor y$ nhận giá trị $1$ tại $3$ điểm: $(1,1), (1,0), (0,1)$, ứng với $3$ minterm $xy$, $x\\overline{y}$, $\\overline{x}y$. Do đó dạng nối rời chính tắc là $xy \\lor x\\overline{y} \\lor \\overline{x}y$."
  },
  {
    "id": "c4_l2_q4",
    "chapterId": "c4",
    "lessonId": "l4_2",
    "lessonTitle": "§2 Hàm Bool & Dạng chính tắc",
    "difficulty": "Thông hiểu",
    "question": "Một từ tối tiểu (minterm) của hàm Bool $4$ biến $x, y, z, t$ nhận giá trị $1$ tại bao nhiêu điểm trong bảng chân trị?",
    "options": [
      "Đúng 1 điểm",
      "2 điểm",
      "4 điểm",
      "8 điểm"
    ],
    "correctAnswer": 0,
    "explanation": "Mỗi từ tối tiểu của hàm $4$ biến là tích của $4$ từ đơn (ví dụ $xy\\overline{z}t$), chỉ nhận giá trị $1$ tại duy nhất một bộ giá trị $(1, 1, 0, 1)$."
  },
  {
    "id": "c4_l3_q1",
    "chapterId": "c4",
    "lessonId": "l4_3",
    "lessonTitle": "§3 Mạng các cổng logic & Tối ưu hóa",
    "difficulty": "Nhận biết",
    "question": "Cổng nào dưới đây được gọi là cổng vạn năng (Universal Gate) vì có thể tổng hợp mọi hàm Bool chỉ bằng một loại cổng đó?",
    "options": [
      "Cổng AND",
      "Cổng OR",
      "Cổng NAND",
      "Cổng đệm (Buffer)"
    ],
    "correctAnswer": 2,
    "explanation": "Hai cổng vạn năng trong kỹ thuật số là NAND và NOR. Mọi phép toán logic (NOT, AND, OR) đều có thể được xây dựng hoàn toàn chỉ bằng các cổng NAND (hoặc chỉ bằng các cổng NOR)."
  },
  {
    "id": "c4_l3_q2",
    "chapterId": "c4",
    "lessonId": "l4_3",
    "lessonTitle": "§3 Mạng các cổng logic & Tối ưu hóa",
    "difficulty": "Thông hiểu",
    "question": "Để tổng hợp cổng NOT ($\\overline{x}$) từ một cổng NAND $2$ đầu vào, ta thực hiện như thế nào?",
    "options": [
      "Nối một đầu vào với hằng $1$ và đầu vào kia với biến $x$",
      "Nối chung cả hai đầu vào với cùng biến $x$",
      "Nối một đầu vào với hằng $0$",
      "Cả A và B đều đúng"
    ],
    "correctAnswer": 3,
    "explanation": "Ta có $\\overline{x \\cdot x} = \\overline{x}$ và $\\overline{x \\cdot 1} = \\overline{x}$. Do đó cả hai cách nối chung $2$ đầu vào hoặc nối $1$ đầu vào lên mức logic $1$ đều tạo ra cổng NOT."
  },
  {
    "id": "c4_l3_q3",
    "chapterId": "c4",
    "lessonId": "l4_3",
    "lessonTitle": "§3 Mạng các cổng logic & Tối ưu hóa",
    "difficulty": "Vận dụng",
    "question": "Biểu thức hàm Bool $f = x \\lor yz$ khi chuyển đổi thành biểu thức chỉ sử dụng phép toán $\\text{NAND}$ có dạng là:",
    "options": [
      "$\\operatorname{NAND}(\\operatorname{NAND}(x, x),\\; \\operatorname{NAND}(y, z))$",
      "$\\operatorname{NAND}(x,\\; \\operatorname{NAND}(y, z))$",
      "$\\operatorname{NAND}(\\operatorname{NAND}(x, y),\\; z)$",
      "$\\operatorname{NAND}(\\overline{x},\\; yz)$"
    ],
    "correctAnswer": 0,
    "explanation": "Theo luật De Morgan: $x \\lor yz = \\overline{\\overline{x} \\cdot \\overline{yz}} = \\operatorname{NAND}(\\overline{x}, \\overline{yz})$. Thay $\\overline{x} = \\operatorname{NAND}(x, x)$ và $\\overline{yz} = \\operatorname{NAND}(y, z)$, ta thu được $\\operatorname{NAND}(\\operatorname{NAND}(x, x), \\operatorname{NAND}(y, z))$."
  },
  {
    "id": "c4_l4_q1",
    "chapterId": "c4",
    "lessonId": "l4_4",
    "lessonTitle": "§4 Phương pháp Biểu đồ Karnaugh",
    "difficulty": "Nhận biết",
    "question": "Trong bản đồ Karnaugh 4 biến, một nhóm (tế bào) gồm 4 ô số 1 kề nhau sẽ rút gọn được bao nhiêu biến?",
    "options": [
      "Rút gọn được 1 biến, còn lại 3 biến",
      "Rút gọn được 2 biến, còn lại 2 biến",
      "Rút gọn được 3 biến, còn lại 1 biến",
      "Rút gọn được cả 4 biến, thành hằng số 1"
    ],
    "correctAnswer": 1,
    "explanation": "Một tế bào gồm $2^k$ ô kề nhau sẽ triệt tiêu được $k$ biến. Với nhóm $4 = 2^2$ ô ($k = 2$), số biến bị loại bỏ là $2$, đơn thức thu được còn lại $4 - 2 = 2$ biến."
  },
  {
    "id": "c4_l4_q2",
    "chapterId": "c4",
    "lessonId": "l4_4",
    "lessonTitle": "§4 Phương pháp Biểu đồ Karnaugh",
    "difficulty": "Thông hiểu",
    "question": "Thứ tự gán nhãn các hàng hoặc cột trong bản đồ Karnaugh tuân theo mã nào để hai ô cạnh nhau chỉ khác nhau 1 bit?",
    "options": [
      "Mã nhị phân tự nhiên: $00, 01, 10, 11$",
      "Mã Gray: $00, 01, 11, 10$",
      "Mã BCD",
      "Mã bù 2"
    ],
    "correctAnswer": 1,
    "explanation": "Bản đồ Karnaugh sử dụng mã Gray ($00, 01, 11, 10$) để đảm bảo hai ô kề nhau (kể cả hai ô ở biên đối diện) chỉ khác nhau giá trị của đúng $1$ biến."
  },
  {
    "id": "c4_l4_q3",
    "chapterId": "c4",
    "lessonId": "l4_4",
    "lessonTitle": "§4 Phương pháp Biểu đồ Karnaugh",
    "difficulty": "Vận dụng",
    "question": "Tối thiểu hóa hàm Bool $3$ biến $f(x, y, z) = \\sum m(0, 1, 2, 3)$ bằng bản đồ Karnaugh, ta thu được:",
    "options": [
      "$\\overline{x}$",
      "$x$",
      "$\\overline{y}$",
      "$\\overline{z}$"
    ],
    "correctAnswer": 0,
    "explanation": "Các minterm $m_0, m_1, m_2, m_3$ ứng với $(0,0,0), (0,0,1), (0,1,0), (0,1,1)$ tạo thành một tế bào $4$ ô phủ trọn hàng $x = 0$. Hai biến $y, z$ biến thiên hết $4$ trạng thái nên triệt tiêu, kết quả tối tiểu là $\\overline{x}$."
  },
  {
    "id": "c4_l4_q4",
    "chapterId": "c4",
    "lessonId": "l4_4",
    "lessonTitle": "§4 Phương pháp Biểu đồ Karnaugh",
    "difficulty": "Vận dụng",
    "question": "Trong bản đồ Karnaugh $4$ biến $x, y, z, t$, tế bào gồm $4$ ô số $1$ nằm ở $4$ góc của bản đồ biểu diễn đơn thức nào?",
    "options": [
      "$\\overline{x}\\,\\overline{z}$",
      "$\\overline{y}\\,\\overline{t}$",
      "$\\overline{x}\\,\\overline{t}$",
      "$\\overline{y}\\,\\overline{z}$"
    ],
    "correctAnswer": 1,
    "explanation": "Bốn ô góc có tọa độ $(xy, zt)$ là $(00, 00), (00, 10), (10, 00), (10, 10)$. Ở hàng $00$ và $10$, biến $y = 0$ cố định ($\\overline{y}$); ở cột $00$ và $10$, biến $t = 0$ cố định ($\\overline{t}$). Đơn thức thu được là $\\overline{y}\\,\\overline{t}$."
  },
  {
    "id": "c4_l5_q1",
    "chapterId": "c4",
    "lessonId": "l4_5",
    "lessonTitle": "§5 Phương pháp Thỏa thuận (Consensus Method)",
    "difficulty": "Nhận biết",
    "question": "Thỏa thuận (consensus) của hai đơn thức $xy$ và $\\overline{x}z$ là đơn thức nào?",
    "options": [
      "$xz$",
      "$yz$",
      "$\\overline{y}z$",
      "Không có thỏa thuận"
    ],
    "correctAnswer": 1,
    "explanation": "Cặp biến đối ngẫu duy nhất giữa hai đơn thức là $x$ và $\\overline{x}$. Khử cặp biến này và nhân các từ đơn còn lại ta được thỏa thuận là $yz$."
  },
  {
    "id": "c4_l5_q2",
    "chapterId": "c4",
    "lessonId": "l4_5",
    "lessonTitle": "§5 Phương pháp Thỏa thuận (Consensus Method)",
    "difficulty": "Thông hiểu",
    "question": "Hai đơn thức $x\\overline{y}z$ và $\\overline{x}yt$ có thỏa thuận không?",
    "options": [
      "Có, thỏa thuận là $zt$",
      "Không có thỏa thuận (vì có tới $2$ cặp biến đối ngẫu)",
      "Có, thỏa thuận là $xzt$",
      "Có, thỏa thuận là $yzt$"
    ],
    "correctAnswer": 1,
    "explanation": "Hai đơn thức $x\\overline{y}z$ và $\\overline{x}yt$ có $2$ cặp biến đối ngẫu đồng thời ($x, \\overline{x}$ và $\\overline{y}, y$). Theo định nghĩa, thỏa thuận chỉ tồn tại khi có đúng $1$ cặp biến đối ngẫu duy nhất."
  },
  {
    "id": "c4_l5_q3",
    "chapterId": "c4",
    "lessonId": "l4_5",
    "lessonTitle": "§5 Phương pháp Thỏa thuận (Consensus Method)",
    "difficulty": "Vận dụng",
    "question": "Sau khi tìm được tất cả các tiền đề nguyên tố, phương pháp nào thường được áp dụng để tìm các tổ hợp tiền đề nguyên tố tối tiểu phủ hết hàm f?",
    "options": [
      "Phương pháp phân hoạch tập hợp",
      "Phương pháp lập phương trình phủ (Petrick's Method)",
      "Thuật toán Euclide mở rộng",
      "Quy tắc Modus Ponens"
    ],
    "correctAnswer": 1,
    "explanation": "Phương pháp Petrick lập một hệ phương trình logic biểu diễn điều kiện mỗi từ tối tiểu (minterm) phải được phủ bởi ít nhất một tiền đề nguyên tố, sau đó dùng luật phân bố và hấp thụ để tìm các phương án phủ tối thiểu."
  }
];
