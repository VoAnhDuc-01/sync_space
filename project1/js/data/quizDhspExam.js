/**
 * NGÂN HÀNG 50 CÂU HỎI MỨC ĐỘ "ĐI THI" – CHUẨN ĐỀ THI ĐHSP TP.HCM (2022–2025)
 * Biên soạn & mở rộng trực tiếp từ 5 Đề thi Giữa học phần & Kết thúc học phần Khoa CNTT – ĐHSP TP.HCM.
 * Quy ước:
 * - Chương 1 tuyệt đối không dùng phép XOR.
 * - 100% ký hiệu toán học chuẩn LaTeX (KaTeX): P_n, A_n^k, C_n^k, K_n^k, \overline{x}, \neg, \land, \lor, \to, \leftrightarrow.
 * - Phân bố cân bằng đáp án đúng A / B / C / D (0, 1, 2, 3).
 */

const QUIZ_DATA_DHSP_EXAM = [
  // =========================================================================
  // CHƯƠNG 1: CƠ SỞ LOGIC & PHƯƠNG PHÁP CHỨNG MINH (10 CÂU)
  // =========================================================================
  {
    "id": "dhsp_c1_01",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ & Lượng từ",
    "difficulty": "Đi thi",
    "examSource": "Đề GK ĐHSP 2023–2024 • Câu 1.2a",
    "question": "(Đề GK ĐHSP 2023–2024) Xét mệnh đề trên tập số nguyên $\\mathbb{Z}$: \"Nếu bình phương của một số nguyên là lẻ thì số nguyên ấy là lẻ\". Mệnh đề phủ định chuẩn xác của mệnh đề trên là:",
    "options": [
      "Tồn tại một số nguyên có bình phương là số lẻ nhưng chính số nguyên đó là số chẵn",
      "Với mọi số nguyên, nếu bình phương của nó là số lẻ thì số nguyên đó là số chẵn",
      "Nếu bình phương của một số nguyên là chẵn thì số nguyên ấy là chẵn",
      "Tồn tại một số nguyên có bình phương là số chẵn và chính số nguyên đó là số lẻ"
    ],
    "correctAnswer": 0,
    "explanation": "Lượng từ hóa mệnh đề đã cho trên $\\mathbb{Z}$: $\\forall n \\in \\mathbb{Z},\\; (n^2 \\text{ lẻ}) \\to (n \\text{ lẻ})$. Áp dụng luật phủ định lượng từ $\\neg(\\forall n P(n)) \\equiv \\exists n \\neg P(n)$ và $\\neg(A \\to B) \\equiv A \\land \\neg B$, ta được $\\exists n \\in \\mathbb{Z},\\; (n^2 \\text{ lẻ}) \\land (n \\text{ chẵn})$."
  },
  {
    "id": "dhsp_c1_02",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn Hợp lý",
    "difficulty": "Đi thi",
    "examSource": "Đề GK ĐHSP 2022–2023 • Câu 1",
    "question": "(Đề GK ĐHSP 2022–2023) Cho các tiền đề $t \\to u$, $r \\to (s \\lor t)$, $(\\neg p \\lor q) \\to r$ và $\\neg(s \\lor u)$. Nếu giải trực tiếp (không phản chứng), từ $\\neg(s \\lor u)$ và hai tiền đề đầu ta suy ra $\\neg r$. Kết hợp tiếp $(\\neg p \\lor q) \\to r$ với $\\neg r$ theo Modus Tollens và De Morgan, ta thu được khẳng định mạnh nhất nào?",
    "options": [
      "$p \\lor \\neg q$",
      "$p \\land \\neg q$ (tức đồng thời cả $p$ Đúng và $q$ Sai)",
      "$\\neg p \\land q$",
      "Chỉ suy ra được $p$, không thể xác định chân trị của $q$"
    ],
    "correctAnswer": 1,
    "explanation": "Áp dụng Modus Tollens cho $(\\neg p \\lor q) \\to r$ và $\\neg r$, ta thu được $\\neg(\\neg p \\lor q)$. Theo luật De Morgan và phủ định kép: $\\neg(\\neg p \\lor q) \\equiv \\neg(\\neg p) \\land \\neg q \\equiv p \\land \\neg q$. Dùng quy tắc rút gọn suy ra ngay kết luận $p$ (đồng thời biết chắc chắn $\\neg q$)."
  },
  {
    "id": "dhsp_c1_03",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn Hợp lý",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề GK ĐHSP",
    "question": "(Mô phỏng Đề GK ĐHSP) Kiểm tra tính đúng đắn của suy luận gồm các tiền đề $p \\to q$, $r \\to s$, $q \\lor s$ và kết luận $p \\lor r$. Khẳng định nào dưới đây đúng?",
    "options": [
      "Suy luận hợp lý theo quy tắc Song đề kiến thiết (Constructive Dilemma)",
      "Suy luận hợp lý theo quy tắc Tam đoạn luận rời",
      "Suy luận không hợp lý; phản ví dụ là $p = 0, q = 1, r = 0, s = 0$",
      "Suy luận không hợp lý; phản ví dụ là $p = 1, q = 1, r = 0, s = 1$"
    ],
    "correctAnswer": 2,
    "explanation": "Đây là ngụy biện khẳng định hệ quả dạng tuyển. Chọn phép gán $p = 0, q = 1, r = 0, s = 0$: khi đó $p \\to q \\equiv (0 \\to 1) = 1$, $r \\to s \\equiv (0 \\to 0) = 1$, $q \\lor s \\equiv (1 \\lor 0) = 1$ (cả $3$ tiền đề đều Đúng), nhưng kết luận $p \\lor r \\equiv (0 \\lor 0) = 0$ (Sai). Vậy suy luận không hợp lý."
  },
  {
    "id": "dhsp_c1_04",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn Hợp lý",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề GK ĐHSP",
    "question": "(Mô phỏng Đề GK ĐHSP) Cho hệ tiền đề: (1) $(\\neg p \\land q) \\to r$; (2) $r \\to (s \\lor t)$; (3) $\\neg s \\land \\neg u$; (4) $u \\lor \\neg t$. Kết luận nào dưới đây được suy diễn hợp lý từ $4$ tiền đề đã cho?",
    "options": [
      "$p \\land \\neg q$",
      "$\\neg p \\to q$",
      "$p \\to \\neg q$",
      "$q \\to p$"
    ],
    "correctAnswer": 3,
    "explanation": "Từ (3) $\\neg s \\land \\neg u$ suy ra $\\neg s$ và $\\neg u$. Kết hợp (4) $u \\lor \\neg t$ với $\\neg u$ (Tam đoạn luận rời) suy ra $\\neg t$. Khi đó $\\neg s \\land \\neg t \\equiv \\neg(s \\lor t)$; kết hợp (2) theo Modus Tollens suy ra $\\neg r$. Kết hợp (1) với $\\neg r$ theo Modus Tollens được $\\neg(\\neg p \\land q) \\equiv p \\lor \\neg q \\equiv \\neg q \\lor p \\equiv q \\to p$."
  },
  {
    "id": "dhsp_c1_05",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ & Lượng từ",
    "difficulty": "Đi thi",
    "examSource": "Đề GK ĐHSP 2023–2024 • Mở rộng Câu 1.2b",
    "question": "(Mở rộng Đề GK ĐHSP 2023–2024) Đổi lượng từ $\\exists$ thành $\\forall$ trong mệnh đề đề thi: xét $M$: \"$\\forall x \\in \\mathbb{R},\\; (x^2 - 4x - 5 = 0) \\to (x > 0)$\". Chân trị của $M$ và giải thích đúng là:",
    "options": [
      "$M$ Sai, vì tại $x = -1$ ta có $(-1)^2 - 4(-1) - 5 = 0$ (Đúng) nhưng $-1 > 0$ (Sai)",
      "$M$ Đúng, vì tại $x = 5$ cả tiền đề và kết luận đều Đúng",
      "$M$ Sai, vì tại $x = 0$ tiền đề $x^2 - 4x - 5 = 0$ nhận chân trị Sai",
      "$M$ Đúng, vì phương trình bậc hai luôn có ít nhất một nghiệm dương"
    ],
    "correctAnswer": 0,
    "explanation": "Phương trình $x^2 - 4x - 5 = 0 \\iff (x - 5)(x + 1) = 0$ có hai nghiệm $x = 5$ và $x = -1$. Với lượng từ phổ dụng $\\forall x \\in \\mathbb{R}$, chỉ cần chỉ ra phản ví dụ $x = -1$: tiền đề đúng ($0 = 0$) kéo theo kết luận sai ($-1 > 0$) nên phép kéo theo bằng $0$. Vậy $M$ Sai."
  },
  {
    "id": "dhsp_c1_06",
    "chapterId": "c1",
    "lessonId": "l1_5",
    "lessonTitle": "§5 Vị từ & Lượng từ",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề GK ĐHSP",
    "question": "(Mô phỏng Đề GK ĐHSP) Đưa dấu phủ định vào sau cùng để tìm mệnh đề phủ định $\\overline{P}$ của $P$: \"$\\forall x \\in \\mathbb{R}, \\exists y \\in \\mathbb{R},\\; (x^2 + y < 2) \\to (x - y \\ge 1)$\":",
    "options": [
      "$\\exists x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R},\\; (x^2 + y \\ge 2) \\land (x - y < 1)$",
      "$\\exists x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R},\\; (x^2 + y < 2) \\land (x - y < 1)$",
      "$\\exists x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R},\\; (x^2 + y < 2) \\to (x - y < 1)$",
      "$\\forall x \\in \\mathbb{R}, \\exists y \\in \\mathbb{R},\\; (x^2 + y < 2) \\land (x - y < 1)$"
    ],
    "correctAnswer": 1,
    "explanation": "Đổi lượng từ $\\forall x \\exists y$ thành $\\exists x \\forall y$, đồng thời phủ định phép kéo theo $\\neg(A \\to B) \\equiv A \\land \\neg B$: giữ nguyên tiền đề $(x^2 + y < 2)$ và phủ định kết luận $(x - y \\ge 1)$ thành $(x - y < 1)$."
  },
  {
    "id": "dhsp_c1_07",
    "chapterId": "c1",
    "lessonId": "l1_3",
    "lessonTitle": "§3 10 Quy luật Logic Cơ bản",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề GK ĐHSP",
    "question": "(Mô phỏng Đề GK ĐHSP) Rút gọn biểu thức mệnh đề $E = [(p \\to q) \\land \\neg q] \\lor (p \\land q)$ bằng các quy luật logic cơ bản, ta thu được biểu thức tương đương nào?",
    "options": [
      "$p \\to q$",
      "$\\neg p \\lor q$",
      "$p \\leftrightarrow q$",
      "$\\neg p \\land \\neg q$"
    ],
    "correctAnswer": 2,
    "explanation": "Khử kéo theo và dùng luật phân bố: $(p \\to q) \\land \\neg q \\equiv (\\neg p \\lor q) \\land \\neg q \\equiv (\\neg p \\land \\neg q) \\lor (q \\land \\neg q) \\equiv \\neg p \\land \\neg q$. Khi đó $E \\equiv (\\neg p \\land \\neg q) \\lor (p \\land q)$, đúng bằng định nghĩa của phép tương đương $p \\leftrightarrow q$ (nhận giá trị $1$ khi và chỉ khi $p, q$ cùng chân trị)."
  },
  {
    "id": "dhsp_c1_08",
    "chapterId": "c1",
    "lessonId": "l1_2",
    "lessonTitle": "§2 Phép kéo theo & Luật phản đảo",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề GK ĐHSP",
    "question": "(Mô phỏng Đề GK ĐHSP) Mệnh đề phản đảo (tương đương logic) của định lý số học: \"Với mọi số nguyên dương $n \\ge 2$, nếu $2^n - 1$ là số nguyên tố thì $n$ là số nguyên tố\" là:",
    "options": [
      "Với mọi $n \\ge 2$, nếu $n$ là số nguyên tố thì $2^n - 1$ là số nguyên tố",
      "Với mọi $n \\ge 2$, nếu $2^n - 1$ là hợp số thì $n$ là hợp số",
      "Tồn tại $n \\ge 2$ sao cho $2^n - 1$ là số nguyên tố nhưng $n$ là hợp số",
      "Với mọi $n \\ge 2$, nếu $n$ là hợp số thì $2^n - 1$ là hợp số"
    ],
    "correctAnswer": 3,
    "explanation": "Với miền xét $n \\in \\mathbb{N}, n \\ge 2$, một số không phải số nguyên tố khi và chỉ khi nó là hợp số (vì $2^n - 1 \\ge 3 > 1$). Theo luật phản đảo $(P(n) \\to Q(n)) \\equiv (\\neg Q(n) \\to \\neg P(n))$, mệnh đề phản đảo là: \"Với mọi $n \\ge 2$, nếu $n$ là hợp số thì $2^n - 1$ là hợp số\"."
  },
  {
    "id": "dhsp_c1_09",
    "chapterId": "c1",
    "lessonId": "l1_4",
    "lessonTitle": "§4 Các Quy tắc Suy diễn Hợp lý",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề GK ĐHSP",
    "question": "(Mô phỏng Đề GK ĐHSP) Biết hai mệnh đề $p \\to (q \\to r)$ và $q \\land \\neg r$ đồng thời nhận giá trị chân lý Đúng ($1$). Bộ chân trị $(p, q, r)$ duy nhất thỏa mãn là:",
    "options": [
      "$(p, q, r) = (0, 1, 0)$",
      "$(p, q, r) = (1, 1, 0)$",
      "$(p, q, r) = (0, 0, 1)$",
      "$(p, q, r) = (1, 0, 0)$"
    ],
    "correctAnswer": 0,
    "explanation": "Từ $q \\land \\neg r = 1$ bắt buộc $q = 1$ và $\\neg r = 1 \\iff r = 0$. Thay vào $q \\to r$ được $(1 \\to 0) = 0$. Để $p \\to (q \\to r) \\equiv (p \\to 0) = 1$, bắt buộc $p = 0$. Vậy $(p, q, r) = (0, 1, 0)$."
  },
  {
    "id": "dhsp_c1_10",
    "chapterId": "c1",
    "lessonId": "l1_7",
    "lessonTitle": "§7 Chuyên đề: Mô hình hóa & Suy diễn Phản chứng",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề GK ĐHSP",
    "question": "(Mô phỏng Đề GK ĐHSP) Khi chứng minh mệnh đề \"$\\forall n \\in \\mathbb{Z},\\; (3n + 2 \\text{ là số chẵn}) \\to (n \\text{ là số chẵn})$\" bằng phương pháp phản chứng, bước khởi đầu chuẩn xác là:",
    "options": [
      "Giả sử với mọi $n \\in \\mathbb{Z}$, $3n + 2$ là số lẻ và $n$ là số lẻ",
      "Giả sử tồn tại $n \\in \\mathbb{Z}$ sao cho $3n + 2$ là số chẵn và $n$ là số lẻ",
      "Giả sử tồn tại $n \\in \\mathbb{Z}$ sao cho $n$ là số lẻ rồi suy ra $3n + 2$ là số lẻ",
      "Giả sử $n = 2k$ ($k \\in \\mathbb{Z}$) rồi thay vào $3n + 2$"
    ],
    "correctAnswer": 1,
    "explanation": "Chứng minh phản chứng định lý $\\forall n (P(n) \\to Q(n))$ nghĩa là giả sử mệnh đề phủ định $\\exists n (P(n) \\land \\neg Q(n))$ đúng, tức tồn tại $n \\in \\mathbb{Z}$ mà $3n + 2$ chẵn và $n$ lẻ ($n = 2k + 1 \\implies 3n + 2 = 6k + 5$ lẻ, mâu thuẫn với giả thiết $3n + 2$ chẵn!). Phương án C là chứng minh phản đảo chứ không phải phản chứng."
  },

  // =========================================================================
  // CHƯƠNG 2: PHƯƠNG PHÁP ĐẾM & ÁNH XẠ (10 CÂU)
  // =========================================================================
  {
    "id": "dhsp_c2_01",
    "chapterId": "c2",
    "lessonId": "l2_1",
    "lessonTitle": "§1 Quy tắc Cộng, Nhân & Bao hàm - Loại trừ",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề GK ĐHSP 2022–2023 • Câu 2a",
    "question": "(Mô phỏng Đề GK ĐHSP 2022–2023) Cho tập chữ số $S = \\{0, 1, 2, 3, 4, 5, 6\\}$. Có bao nhiêu số tự nhiên **chẵn gồm $3$ chữ số đôi một khác nhau** được tạo thành từ tập $S$?",
    "options": [
      "$90$",
      "$120$",
      "$105$",
      "$100$"
    ],
    "correctAnswer": 2,
    "explanation": "Gọi số cần lập là $\\overline{abc}$ ($a \\neq 0$; $a, b, c \\in S$ đôi một khác nhau; $c \\in \\{0, 2, 4, 6\\}$). Chia $2$ trường hợp rời nhau:\n• TH1 ($c = 0$): $c$ có $1$ cách, $a \\in \\{1..6\\}$ có $6$ cách, $b \\in S \\setminus \\{a, 0\\}$ có $5$ cách $\\implies 1 \\cdot 6 \\cdot 5 = 30$ số.\n• TH2 ($c \\in \\{2, 4, 6\\}$): $c$ có $3$ cách, $a \\in S \\setminus \\{0, c\\}$ có $5$ cách, $b \\in S \\setminus \\{a, c\\}$ có $5$ cách $\\implies 3 \\cdot 5 \\cdot 5 = 75$ số.\nTổng cộng: $30 + 75 = 105$ số."
  },
  {
    "id": "dhsp_c2_02",
    "chapterId": "c2",
    "lessonId": "l2_3",
    "lessonTitle": "§3 Hoán vị, Chỉnh hợp & Tổ hợp",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề GK ĐHSP 2022–2023 • Câu 2b",
    "question": "(Mô phỏng Đề GK ĐHSP 2022–2023) Cho tập hợp $X = \\{x \\in \\mathbb{N} : 1 \\le x \\le 18\\}$. Số tập con $A \\subseteq X$ thỏa mãn đồng thời $\\min(A) = 7$ và $|A| \\ge 10$ là:",
    "options": [
      "$C_{11}^8 + C_{11}^9 + C_{11}^{10} + C_{11}^{11} = 232$",
      "$C_{12}^9 + C_{12}^{10} + C_{12}^{11} + C_{12}^{12} = 299$",
      "$C_{11}^9 = 55$",
      "$C_{11}^9 + C_{11}^{10} + C_{11}^{11} = 67$"
    ],
    "correctAnswer": 3,
    "explanation": "Để $\\min(A) = 7$: bắt buộc $7 \\in A$ ($1$ cách) và $\\{1, 2, 3, 4, 5, 6\\} \\cap A = \\emptyset$. Các phần tử còn lại của $A$ được lấy từ tập $\\{8, 9, \\dots, 18\\}$ gồm $18 - 7 = 11$ phần tử. Vì $|A| \\ge 10$ nên cần chọn thêm $k = |A| - 1 \\ge 9$ phần tử ($k \\in \\{9, 10, 11\\}$): $C_{11}^9 + C_{11}^{10} + C_{11}^{11} = 55 + 11 + 1 = 67$."
  },
  {
    "id": "dhsp_c2_03",
    "chapterId": "c2",
    "lessonId": "l2_3",
    "lessonTitle": "§3 Hoán vị, Chỉnh hợp & Tổ hợp",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề GK ĐHSP 2023–2024 • Câu 2a",
    "question": "(Mô phỏng Đề GK ĐHSP 2023–2024) Cho tập hợp $X = \\{1, 2, \\dots, 12\\}$. Tìm số tập con $A \\subseteq X$ thỏa mãn $|A| = 5$, $\\min(A) = 3$ và $\\max(A) = 10$.",
    "options": [
      "$C_6^3 = 20$",
      "$C_8^3 = 56$",
      "$C_6^5 = 6$",
      "$C_7^3 = 35$"
    ],
    "correctAnswer": 0,
    "explanation": "Điều kiện $\\min(A) = 3$ và $\\max(A) = 10$ buộc $3 \\in A$, $10 \\in A$, và mọi phần tử còn lại của $A$ phải nằm chặt trong khoảng $\\{4, 5, 6, 7, 8, 9\\}$ ($6$ phần tử). Để $|A| = 5$, ta chọn thêm $5 - 2 = 3$ phần tử từ $6$ phần tử này: có $C_6^3 = 20$ tập con."
  },
  {
    "id": "dhsp_c2_04",
    "chapterId": "c2",
    "lessonId": "l2_4",
    "lessonTitle": "§4 Tổ hợp lặp & Nhị thức Newton",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề GK ĐHSP 2022–2023 • Câu 2c",
    "question": "(Mô phỏng Đề GK ĐHSP 2022–2023) Có bao nhiêu bộ ba số nguyên không âm $(x_1, x_2, x_3)$ thỏa mãn phương trình $x_1 + x_2 + x_3 = 18$ với điều kiện $x_1 > 3$ và $x_2 < 5$?",
    "options": [
      "$75$",
      "$65$",
      "$120$",
      "$55$"
    ],
    "correctAnswer": 1,
    "explanation": "Vì $x_1 \\in \\mathbb{Z}$ nên $x_1 > 3 \\iff x_1 \\ge 4$. Đặt $y_1 = x_1 - 4 \\ge 0$, phương trình trở thành $y_1 + x_2 + x_3 = 14$ với $x_2 \\le 4$.\n• Tổng nghiệm không âm: $K_3^{14} = C_{16}^{14} = C_{16}^2 = 120$.\n• Nghiệm vi phạm $x_2 \\ge 5$ (đặt $y_2 = x_2 - 5 \\ge 0 \\implies y_1 + y_2 + x_3 = 9$): $K_3^9 = C_{11}^9 = C_{11}^2 = 55$.\n• Số nghiệm thỏa mãn: $120 - 55 = 65$."
  },
  {
    "id": "dhsp_c2_05",
    "chapterId": "c2",
    "lessonId": "l2_4",
    "lessonTitle": "§4 Tổ hợp lặp & Nhị thức Newton",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề GK ĐHSP 2023–2024 • Câu 2b",
    "question": "(Mô phỏng Đề GK ĐHSP 2023–2024) Tìm số nghiệm nguyên không âm của phương trình $x_1 + x_2 + x_3 + x_4 = 14$ thỏa mãn điều kiện $x_1 \\ge 2$ và $x_2 \\le 3$.",
    "options": [
      "$455$",
      "$335$",
      "$290$",
      "$235$"
    ],
    "correctAnswer": 2,
    "explanation": "Đặt $y_1 = x_1 - 2 \\ge 0$, phương trình thành $y_1 + x_2 + x_3 + x_4 = 12$ với $x_2 \\le 3$.\n• Tổng nghiệm không âm: $K_4^{12} = C_{15}^{12} = C_{15}^3 = 455$.\n• Số nghiệm vi phạm $x_2 \\ge 4$ (tổng còn $12 - 4 = 8$): $K_4^8 = C_{11}^8 = C_{11}^3 = 165$.\n• Số nghiệm thỏa điều kiện: $455 - 165 = 290$."
  },
  {
    "id": "dhsp_c2_06",
    "chapterId": "c2",
    "lessonId": "l2_4",
    "lessonTitle": "§4 Tổ hợp lặp & Nhị thức Newton",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP 2022–2023 • Câu 1",
    "question": "(Mô phỏng Đề CK ĐHSP 2022–2023) Hệ điều kiện $x + y + z + t = 25$ với $x > 4,\\; y \\ge 3,\\; z > 5,\\; t \\ge 4$ có tất cả bao nhiêu nghiệm nguyên?",
    "options": [
      "$C_{12}^3 = 220$",
      "$C_{11}^3 = 165$",
      "$C_9^3 = 84$",
      "$C_{10}^3 = 120$"
    ],
    "correctAnswer": 3,
    "explanation": "Đổi các bất đẳng thức ngặt trên $\\mathbb{Z}$: $x > 4 \\iff x \\ge 5$ và $z > 5 \\iff z \\ge 6$. Đặt $x' = x - 5, y' = y - 3, z' = z - 6, t' = t - 4 \\ge 0$. Tổng cận dưới bằng $5 + 3 + 6 + 4 = 18$, nên $x' + y' + z' + t' = 25 - 18 = 7$. Số nghiệm là $K_4^7 = C_{4+7-1}^7 = C_{10}^7 = C_{10}^3 = 120$."
  },
  {
    "id": "dhsp_c2_07",
    "chapterId": "c2",
    "lessonId": "l2_2",
    "lessonTitle": "§2 Tập hợp & Ánh xạ",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP 2023–2024 • Câu 2",
    "question": "(Mô phỏng Đề CK ĐHSP 2023–2024) Cho ánh xạ $f: \\mathbb{R} \\setminus \\{2\\} \\to \\mathbb{R} \\setminus \\{3\\}$ xác định bởi $f(x) = \\dfrac{3x - 1}{x - 2}$. Khẳng định nào dưới đây đúng?",
    "options": [
      "$f$ là song ánh và ánh xạ ngược là $f^{-1}(x) = \\dfrac{2x - 1}{x - 3}$",
      "$f$ là song ánh và ánh xạ ngược là $f^{-1}(x) = \\dfrac{2x + 1}{x - 3}$",
      "$f$ là đơn ánh nhưng không phải toàn ánh",
      "$f$ là song ánh và ánh xạ ngược là $f^{-1}(x) = \\dfrac{x - 2}{3x - 1}$"
    ],
    "correctAnswer": 0,
    "explanation": "Với mọi $y \\in \\mathbb{R} \\setminus \\{3\\}$, giải phương trình $\\frac{3x - 1}{x - 2} = y \\iff 3x - 1 = xy - 2y \\iff x(3 - y) = 1 - 2y \\iff x = \\frac{2y - 1}{y - 3}$ (duy nhất và $x - 2 = \\frac{5}{y - 3} \\neq 0$). Vậy $f$ vừa đơn ánh vừa toàn ánh (song ánh) và $f^{-1}(x) = \\frac{2x - 1}{x - 3}$."
  },
  {
    "id": "dhsp_c2_08",
    "chapterId": "c2",
    "lessonId": "l2_2",
    "lessonTitle": "§2 Tập hợp & Ánh xạ",
    "difficulty": "Đi thi",
    "examSource": "Mở rộng Đề CK ĐHSP 2023–2024 • Câu 2",
    "question": "(Mở rộng Đề CK ĐHSP 2023–2024) Nếu giữ công thức $g(x) = \\dfrac{x + 1}{x - 3}$ nhưng xét ánh xạ $g: \\mathbb{R} \\setminus \\{3\\} \\to \\mathbb{R}$ (tập đích là toàn bộ $\\mathbb{R}$), tính chất của ánh xạ $g$ là:",
    "options": [
      "Song ánh",
      "Đơn ánh nhưng không toàn ánh (vì $y = 1 \\in \\mathbb{R}$ không có tạo ảnh)",
      "Toàn ánh nhưng không đơn ánh",
      "Không đơn ánh và cũng không toàn ánh"
    ],
    "correctAnswer": 1,
    "explanation": "Ta vẫn có $g(x_1) = g(x_2) \\implies x_1 = x_2$ nên $g$ là đơn ánh. Tuy nhiên xét $y = 1 \\in \\mathbb{R}$: phương trình $\\frac{x + 1}{x - 3} = 1 \\iff x + 1 = x - 3 \\iff 1 = -3$ vô nghiệm, tức $1 \\notin g(\\mathbb{R} \\setminus \\{3\\})$. Do tập đích không loại bỏ điểm $1$ nên $g$ không toàn ánh."
  },
  {
    "id": "dhsp_c2_09",
    "chapterId": "c2",
    "lessonId": "l2_4",
    "lessonTitle": "§4 Tổ hợp lặp & Nhị thức Newton",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề GK ĐHSP • Bao hàm – Loại trừ",
    "question": "(Mô phỏng Đề GK ĐHSP) Số nghiệm nguyên không âm của phương trình $x_1 + x_2 + x_3 + x_4 = 12$ thỏa mãn đồng thời hai ràng buộc cận trên $x_1 \\le 4$ và $x_2 \\le 5$ là:",
    "options": [
      "$251$",
      "$247$",
      "$255$",
      "$335$"
    ],
    "correctAnswer": 2,
    "explanation": "Áp dụng nguyên lý Bao hàm – Loại trừ trên tập nghiệm không âm ($|U| = K_4^{12} = C_{15}^3 = 455$):\n• Gọi $A_1$ là tập nghiệm có $x_1 \\ge 5$: $|A_1| = K_4^7 = C_{10}^3 = 120$.\n• Gọi $A_2$ là tập nghiệm có $x_2 \\ge 6$: $|A_2| = K_4^6 = C_9^3 = 84$.\n• Giao $A_1 \\cap A_2$ ($x_1 \\ge 5$ và $x_2 \\ge 6$, tổng còn $12 - 11 = 1$): $|A_1 \\cap A_2| = K_4^1 = C_4^3 = 4$.\n• Số nghiệm thỏa mãn: $455 - (120 + 84) + 4 = 255$."
  },
  {
    "id": "dhsp_c2_10",
    "chapterId": "c2",
    "lessonId": "l2_5",
    "lessonTitle": "§5 Nguyên lý Chuồng bồ câu (Dirichlet)",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề thi ĐHSP",
    "question": "(Mô phỏng Đề thi ĐHSP) Cần chọn ngẫu nhiên ít nhất bao nhiêu số nguyên phân biệt từ tập $X = \\{1, 2, 3, \\dots, 30\\}$ để chắc chắn trong các số đã chọn luôn có hai số có tổng bằng $31$?",
    "options": [
      "$15$",
      "$17$",
      "$14$",
      "$16$"
    ],
    "correctAnswer": 3,
    "explanation": "Phân hoạch tập $X$ thành $15$ cặp (chuồng) có tổng bằng $31$: $\\{1, 30\\}, \\{2, 29\\}, \\dots, \\{15, 16\\}$. Nếu chỉ chọn $15$ số, ta có thể lấy mỗi cặp đúng $1$ số (ví dụ $\\{1, 2, \\dots, 15\\}$) mà không có cặp nào tổng bằng $31$. Theo nguyên lý Dirichlet, chọn $k = 15 + 1 = 16$ số chắc chắn có ít nhất $2$ số rơi vào cùng một cặp."
  },

  // =========================================================================
  // CHƯƠNG 3: QUAN HỆ, BIỂU ĐỒ HASSE & DÀN (10 CÂU)
  // =========================================================================
  {
    "id": "dhsp_c3_01",
    "chapterId": "c3",
    "lessonId": "l3_1",
    "lessonTitle": "§1 Quan hệ hai ngôi & Các tính chất",
    "difficulty": "Đi thi",
    "examSource": "Đề GK ĐHSP 2022–2023 • Câu 3a",
    "question": "(Đề GK ĐHSP 2022–2023) Trên tập số nguyên $\\mathbb{Z}$, cho quan hệ $x \\mathcal{R} y \\iff x \\equiv y \\pmod{5}$. Khi xét đủ $4$ tính chất (phản xạ, đối xứng, phản xứng, bắc cầu) của $\\mathcal{R}$ trên $\\mathbb{Z}$, kết luận nào chính xác?",
    "options": [
      "Thỏa phản xạ, đối xứng, bắc cầu; không thỏa phản xứng (ví dụ $0 \\mathcal{R} 5$ và $5 \\mathcal{R} 0$ nhưng $0 \\neq 5$)",
      "Thỏa cả $4$ tính chất phản xạ, đối xứng, phản xứng và bắc cầu",
      "Thỏa phản xạ, phản xứng, bắc cầu nên $\\mathcal{R}$ là quan hệ thứ tự trên $\\mathbb{Z}$",
      "Chỉ thỏa đối xứng và bắc cầu, không thỏa phản xạ tại $x = 0$"
    ],
    "correctAnswer": 0,
    "explanation": "Với mọi $x \\in \\mathbb{Z}$, $x - x = 0 \\vdots 5$ (phản xạ); $x - y \\vdots 5 \\implies y - x \\vdots 5$ (đối xứng); $x - y \\vdots 5 \\land y - z \\vdots 5 \\implies x - z \\vdots 5$ (bắc cầu). Tính phản xứng bị vi phạm vì $0 \\equiv 5 \\pmod 5$ và $5 \\equiv 0 \\pmod 5$ nhưng $0 \\neq 5$."
  },
  {
    "id": "dhsp_c3_02",
    "chapterId": "c3",
    "lessonId": "l3_1",
    "lessonTitle": "§1 Quan hệ hai ngôi & Các tính chất",
    "difficulty": "Đi thi",
    "examSource": "Đề GK ĐHSP 2023–2024 • Câu 3a",
    "question": "(Đề GK ĐHSP 2023–2024) Trên tập $A = \\{1, 2, 3, 4, 5, 6\\}$, xét quan hệ $x \\mathcal{R} y \\iff (x + y)$ là số chẵn. Số lượng cặp có thứ tự $(x, y) \\in \\mathcal{R}$ trong $A^2$ và kết luận về tính phản xứng của $\\mathcal{R}$ là:",
    "options": [
      "$12$ cặp; thỏa tính phản xứng",
      "$18$ cặp; không phản xứng vì $(1, 3) \\in \\mathcal{R}$ và $(3, 1) \\in \\mathcal{R}$ nhưng $1 \\neq 3$",
      "$18$ cặp; thỏa tính phản xứng nên $\\mathcal{R}$ vừa tương đương vừa thứ tự",
      "$15$ cặp; không phản xứng"
    ],
    "correctAnswer": 1,
    "explanation": "Quan hệ $\\mathcal{R}$ chia $A$ thành $2$ lớp tương đương là $\\{1, 3, 5\\}$ ($3$ phần tử) và $\\{2, 4, 6\\}$ ($3$ phần tử). Tổng số cặp có thứ tự thuộc $\\mathcal{R}$ bằng $3^2 + 3^2 = 18$ cặp. Do $(1, 3), (3, 1) \\in \\mathcal{R}$ với $1 \\neq 3$ nên $\\mathcal{R}$ không phản xứng."
  },
  {
    "id": "dhsp_c3_03",
    "chapterId": "c3",
    "lessonId": "l3_1",
    "lessonTitle": "§1 Quan hệ hai ngôi & Các tính chất",
    "difficulty": "Đi thi",
    "examSource": "Đề CK ĐHSP 2024–2025 • Câu 2a & 2b",
    "question": "(Đề CK ĐHSP 2024–2025) Cho $S = \\{2, 4, 5\\}$ và quan hệ $x \\mathcal{R} y \\iff (2x + y)$ chia hết cho $3$. Tập hợp tất cả các cặp $(x, y) \\in \\mathcal{R}$ trong $S^2$ là:",
    "options": [
      "$\\{(2, 2), (4, 4), (5, 5), (2, 4), (4, 2)\\}$",
      "$\\{(2, 4), (4, 5), (2, 5), (5, 2)\\}$",
      "$\\{(2, 2), (4, 4), (5, 5), (2, 5), (5, 2)\\}$",
      "$\\{(2, 2), (4, 4), (5, 5), (4, 5), (5, 4)\\}$"
    ],
    "correctAnswer": 2,
    "explanation": "Kiểm tra trực tiếp $(2x + y) \\vdots 3$ trên $S = \\{2, 4, 5\\}$:\n• $x = 2$: $2(2)+2=6 \\vdots 3$, $2(2)+4=8 \\not\\vdots 3$, $2(2)+5=9 \\vdots 3 \\implies (2,2), (2,5)$.\n• $x = 4$: $2(4)+2=10$, $2(4)+4=12 \\vdots 3$, $2(4)+5=13 \\implies (4,4)$.\n• $x = 5$: $2(5)+2=12 \\vdots 3$, $2(5)+4=14$, $2(5)+5=15 \\vdots 3 \\implies (5,2), (5,5)$.\nVậy $\\mathcal{R}$ gồm đúng $5$ cặp."
  },
  {
    "id": "dhsp_c3_04",
    "chapterId": "c3",
    "lessonId": "l3_3",
    "lessonTitle": "§3 Quan hệ thứ tự & Biểu đồ Hasse",
    "difficulty": "Đi thi",
    "examSource": "Đề CK ĐHSP 2022–2023 • Câu 2c",
    "question": "(Đề CK ĐHSP 2022–2023) Cho tập $X = \\{2, 3, 4, 6, 8\\}$ với quan hệ ước số $\\mid$. Tập tất cả các cạnh nối trực tiếp đi lên (quan hệ trội trực tiếp) trong biểu đồ Hasse của $(X, \\mid)$ là:",
    "options": [
      "$\\{(2, 4), (4, 8), (2, 8), (2, 6), (3, 6)\\}$ ($5$ cạnh)",
      "$\\{(2, 4), (2, 6), (3, 6), (6, 8)\\}$ ($4$ cạnh)",
      "$\\{(2, 3), (3, 4), (4, 6), (6, 8)\\}$ ($4$ cạnh)",
      "$\\{(2, 4), (4, 8), (2, 6), (3, 6)\\}$ ($4$ cạnh)"
    ],
    "correctAnswer": 3,
    "explanation": "Trong biểu đồ Hasse ta bỏ các khuyên phản xạ và bỏ các cạnh bắc cầu. Ta có $2 \\mid 4 \\mid 8$ nên nối $(2, 4)$ và $(4, 8)$ nhưng KHÔNG nối trực tiếp $(2, 8)$; ngoài ra $2 \\mid 6$ và $3 \\mid 6$ không có phần tử trung gian trong $X$, còn $6 \\nmid 8$. Vậy biểu đồ Hasse có đúng $4$ cạnh: $(2, 4), (4, 8), (2, 6), (3, 6)$."
  },
  {
    "id": "dhsp_c3_05",
    "chapterId": "c3",
    "lessonId": "l3_4",
    "lessonTitle": "§4 Dàn (Lattice)",
    "difficulty": "Đi thi",
    "examSource": "Mở rộng Đề CK ĐHSP 2022–2023 • Câu 2",
    "question": "(Mở rộng Đề CK ĐHSP 2022–2023) Tập thứ tự $(X, \\mid)$ với $X = \\{2, 3, 4, 6, 8\\}$ có phải là một **dàn (lattice)** không? Vì sao?",
    "options": [
      "Không phải là dàn, vì cặp $\\{2, 3\\}$ không có cận dưới lớn nhất trong $X$ và cặp $\\{6, 8\\}$ không có cận trên nhỏ nhất trong $X$",
      "Là một dàn hữu hạn nhưng không phải dàn phân phối",
      "Là một dàn bù vì mọi phần tử đều là ước của $24$",
      "Không phải là dàn chỉ vì $\\sup\\{2, 3\\}$ không tồn tại trong $X$"
    ],
    "correctAnswer": 0,
    "explanation": "Trong $X = \\{2, 3, 4, 6, 8\\}$: cặp $\\{2, 3\\}$ có $\\sup_X\\{2, 3\\} = 6 \\in X$ nhưng tập cận dưới chung của $2$ và $3$ trong $X$ là $\\emptyset$ (vì $1 \\notin X$), nên không tồn tại $\\inf_X\\{2, 3\\}$. Tương tự, tập cận trên chung của $6$ và $8$ trong $X$ cũng là $\\emptyset$ ($24 \\notin X$). Vậy $(X, \\mid)$ không phải là dàn."
  },
  {
    "id": "dhsp_c3_06",
    "chapterId": "c3",
    "lessonId": "l3_3",
    "lessonTitle": "§3 Quan hệ thứ tự & Biểu đồ Hasse",
    "difficulty": "Đi thi",
    "examSource": "Đề CK ĐHSP 2023–2024 • Câu 3b & 3c",
    "question": "(Đề CK ĐHSP 2023–2024) Cho $E = \\{a, b, c\\}$ và xét tập thứ tự $(\\mathcal{P}(E), \\subseteq)$. Số đỉnh, số cạnh của biểu đồ Hasse và cặp (phần tử nhỏ nhất, phần tử lớn nhất) lần lượt là:",
    "options": [
      "$8$ đỉnh, $9$ cạnh; nhỏ nhất là $\\{\\emptyset\\}$, lớn nhất là $E$",
      "$8$ đỉnh, $12$ cạnh; nhỏ nhất là $\\emptyset$, lớn nhất là $E = \\{a, b, c\\}$",
      "$6$ đỉnh, $9$ cạnh; nhỏ nhất là $\\emptyset$, lớn nhất là $E$",
      "$8$ đỉnh, $12$ cạnh; không tồn tại phần tử nhỏ nhất, lớn nhất là $E$"
    ],
    "correctAnswer": 1,
    "explanation": "Tập $\\mathcal{P}(E)$ có $2^3 = 8$ tập con (đỉnh). Biểu đồ Hasse đẳng cấu khối lập phương $Q_3$ có $3 \\cdot 2^{3-1} = 12$ cạnh (nối mỗi tập lực lượng $k$ với tập lực lượng $k+1$ chứa nó). Vì $\\emptyset \\subseteq A \\subseteq E$ với mọi $A \\in \\mathcal{P}(E)$ nên phần tử nhỏ nhất (cũng là tối tiểu duy nhất) là $\\emptyset$, và phần tử lớn nhất (tối đại duy nhất) là $E$."
  },
  {
    "id": "dhsp_c3_07",
    "chapterId": "c3",
    "lessonId": "l3_2",
    "lessonTitle": "§2 Quan hệ tương đương & Phân hoạch",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP 2024–2025 • Câu 2",
    "question": "(Mô phỏng Đề CK ĐHSP 2024–2025) Trên tập hợp $S = \\{1, 2, 3, 4, 5, 7\\}$, xét quan hệ tương đương $x \\mathcal{R} y \\iff (2x + y)$ chia hết cho $3$. Thương tập $S / \\mathcal{R}$ gồm các lớp tương đương nào?",
    "options": [
      "$\\{\\{1, 2\\}, \\{3\\}, \\{4, 5, 7\\}\\}$",
      "$\\{\\{1, 5\\}, \\{2, 4, 7\\}, \\{3\\}\\}$",
      "$\\{\\{3\\}, \\{1, 4, 7\\}, \\{2, 5\\}\\}$",
      "$\\{\\{1, 4\\}, \\{2, 5\\}, \\{3, 7\\}\\}$"
    ],
    "correctAnswer": 2,
    "explanation": "Ta có $2x + y = 3x - (x - y)$, do đó $(2x + y) \\vdots 3 \\iff x \\equiv y \\pmod 3$. Phân nhóm các phần tử của $S$ theo số dư khi chia cho $3$: dư $0$ gồm $\\{3\\}$; dư $1$ gồm $\\{1, 4, 7\\}$; dư $2$ gồm $\\{2, 5\\}$."
  },
  {
    "id": "dhsp_c3_08",
    "chapterId": "c3",
    "lessonId": "l3_3",
    "lessonTitle": "§3 Quan hệ thứ tự & Biểu đồ Hasse",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP",
    "question": "(Mô phỏng Đề CK ĐHSP) Cho tập hợp $X = \\{2, 3, 6, 12, 18, 36\\}$ với quan hệ ước số $\\mid$. Kết luận nào dưới đây đúng về $(X, \\mid)$?",
    "options": [
      "Phần tử nhỏ nhất là $2$, phần tử lớn nhất là $36$",
      "Tối tiểu: $\\{2, 3\\}$; tối đại: $\\{12, 18, 36\\}$; không có lớn nhất",
      "Không có phần tử nhỏ nhất và cũng không có phần tử lớn nhất",
      "Tối tiểu: $\\{2, 3\\}$ (không có phần tử nhỏ nhất); tối đại duy nhất và cũng là phần tử lớn nhất là $36$"
    ],
    "correctAnswer": 3,
    "explanation": "Trong $X$: $2$ và $3$ không chia hết cho phần tử nào khác trong $X$ nên tập tối tiểu là $\\{2, 3\\}$; do có $2$ phần tử tối tiểu nên KHÔNG tồn tại phần tử nhỏ nhất. Ngược lại, mọi phần tử của $X$ đều là ước của $36$, nên $36$ là phần tử lớn nhất (và là tối đại duy nhất)."
  },
  {
    "id": "dhsp_c3_09",
    "chapterId": "c3",
    "lessonId": "l3_4",
    "lessonTitle": "§4 Dàn (Lattice)",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề thi ĐHSP",
    "question": "(Mô phỏng Đề thi ĐHSP) Trong các dàn ước số dương $(\\mathcal{U}_n, \\mid)$ dưới đây, dàn nào là một **dàn bù** (đồng thời lập thành một Đại số Bool)?",
    "options": [
      "$(\\mathcal{U}_{30}, \\mid)$",
      "$(\\mathcal{U}_{12}, \\mid)$",
      "$(\\mathcal{U}_{18}, \\mid)$",
      "$(\\mathcal{U}_{36}, \\mid)$"
    ],
    "correctAnswer": 0,
    "explanation": "Dàn ước số $(\\mathcal{U}_n, \\mid)$ là dàn bù (Đại số Bool) khi và chỉ khi $n$ là tích của các thừa số nguyên tố phân biệt (không chia hết cho số chính phương lớn hơn $1$). Ta có $30 = 2 \\cdot 3 \\cdot 5$ thỏa mãn (phần tử bù của $d$ là $30/d$ vì $\\gcd(d, 30/d) = 1$); còn $12 = 2^2 \\cdot 3$, $18 = 2 \\cdot 3^2$, $36 = 2^2 \\cdot 3^2$ đều không có bù cho $2$ hoặc $3$."
  },
  {
    "id": "dhsp_c3_10",
    "chapterId": "c3",
    "lessonId": "l3_2",
    "lessonTitle": "§2 Quan hệ tương đương & Phân hoạch",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề GK ĐHSP",
    "question": "(Mô phỏng Đề GK ĐHSP) Trên tập $A = \\mathbb{Z} \\times (\\mathbb{Z} \\setminus \\{0\\})$, xét quan hệ tương đương $(a, b) \\mathcal{R} (c, d) \\iff ad = bc$. Cặp phần tử nào dưới đây thuộc lớp tương đương $[(6, -9)]$?",
    "options": [
      "$(-4, -6)$",
      "$(-4, 6)$",
      "$(3, -6)$",
      "$(9, -6)$"
    ],
    "correctAnswer": 1,
    "explanation": "Kiểm tra điều kiện $(6, -9) \\mathcal{R} (c, d) \\iff 6d = -9c \\iff 2d = -3c$. Thay $(c, d) = (-4, 6)$: $2 \\cdot 6 = 12$ và $-3 \\cdot (-4) = 12$ (thỏa mãn, tương ứng cùng biểu diễn phân số tối giản $-\\frac{2}{3}$)."
  },

  // =========================================================================
  // CHƯƠNG 4: ĐẠI SỐ BOOL, BẢN ĐỒ KARNAUGH & MẠNG CỔNG LOGIC (10 CÂU)
  // =========================================================================
  {
    "id": "dhsp_c4_01",
    "chapterId": "c4",
    "lessonId": "l4_4",
    "lessonTitle": "§4 Tối tiểu hóa bằng Bản đồ Karnaugh",
    "difficulty": "Đi thi",
    "examSource": "Đề CK ĐHSP 2022–2023 • Câu 4a",
    "question": "(Đề CK ĐHSP 2022–2023 – Câu 4a) Cho hàm Bool $f(x, y, z, t) = x\\overline{y}z \\lor xyt \\lor \\overline{x}y\\overline{z} \\lor xt$. Khi vẽ biểu đồ Karnaugh và tìm **tất cả các tế bào lớn (Prime Implicants)** của $f$, tập đầy đủ các tế bào lớn là:",
    "options": [
      "$\\{xt,\\; \\overline{x}y\\overline{z},\\; x\\overline{y}z\\}$ ($3$ tế bào lớn)",
      "$\\{xt,\\; xyt,\\; \\overline{x}y\\overline{z},\\; x\\overline{y}z\\}$ ($4$ tế bào lớn)",
      "$\\{xt,\\; \\overline{x}y\\overline{z},\\; x\\overline{y}z,\\; y\\overline{z}t\\}$ ($4$ tế bào lớn, trong đó $y\\overline{z}t$ không cốt yếu)",
      "$\\{xt,\\; \\overline{x}y\\overline{z},\\; x\\overline{y}z,\\; xyz\\}$ ($4$ tế bào lớn)"
    ],
    "correctAnswer": 2,
    "explanation": "Hàm có tập minterm $\\sum m(4, 5, 9, 10, 11, 13, 15)$. Ngoài $3$ tế bào lớn cốt yếu (EPI) là $xt = \\{9, 11, 13, 15\\}$ ($xyt$ bị hấp thụ vào $xt$ nên $xyt$ KHÔNG phải tế bào lớn!), $\\overline{x}y\\overline{z} = \\{4, 5\\}$ và $x\\overline{y}z = \\{10, 11\\}$, hai ô $m_5(0101)$ và $m_{13}(1101)$ kề nhau tạo thành tế bào lớn thứ tư là $y\\overline{z}t = \\{5, 13\\}$ (dư thừa khi lập đa thức tối tiểu nhưng bắt buộc phải liệt kê ở câu 4a!)."
  },
  {
    "id": "dhsp_c4_02",
    "chapterId": "c4",
    "lessonId": "l4_3",
    "lessonTitle": "§3 Hàm Bool & Mạch Cổng Logic",
    "difficulty": "Đi thi",
    "examSource": "Đề CK ĐHSP 2022–2023 • Câu 4c",
    "question": "(Đề CK ĐHSP 2022–2023 – Câu 4c) Từ công thức đa thức tối tiểu $f(x, y, z, t) = xt \\lor \\overline{x}y\\overline{z} \\lor x\\overline{y}z$, nếu ngõ vào chỉ có các biến $x, y, z, t$ (chưa có sẵn biến bù) và dùng các cổng NOT, AND, OR nhiều ngõ vào để vẽ mạng cổng tổng hợp có số cổng ít nhất, ta cần:",
    "options": [
      "$4$ cổng NOT, $3$ cổng AND, $1$ cổng OR (tổng $8$ cổng)",
      "$3$ cổng NOT, $4$ cổng AND, $1$ cổng OR (tổng $8$ cổng)",
      "$2$ cổng NOT, $3$ cổng AND, $1$ cổng OR (tổng $6$ cổng)",
      "$3$ cổng NOT, $3$ cổng AND, $1$ cổng OR (tổng $7$ cổng)"
    ],
    "correctAnswer": 3,
    "explanation": "Kiểm tra các biến cần đảo: chỉ có $\\overline{x}, \\overline{y}, \\overline{z}$ xuất hiện còn biến $t$ không bị phủ định, nên cần đúng $3$ cổng NOT (tái sử dụng ngõ ra cổng NOT). Có $3$ tích sơ cấp ($xt$, $\\overline{x}y\\overline{z}$, $x\\overline{y}z$) tương ứng $3$ cổng AND, và $1$ cổng OR $3$ ngõ vào ở tầng cuối. Tổng số cổng tối thiểu là $3 + 3 + 1 = 7$ cổng."
  },
  {
    "id": "dhsp_c4_03",
    "chapterId": "c4",
    "lessonId": "l4_3",
    "lessonTitle": "§3 Hàm Bool & Mạch Cổng Logic",
    "difficulty": "Đi thi",
    "examSource": "Đề CK ĐHSP 2023–2024 • Câu 5c",
    "question": "(Đề CK ĐHSP 2023–2024 – Câu 5c) Hàm Bool ở Câu 5 có hai công thức đa thức tối tiểu đồng hạng là $f_1 = \\overline{y}z\\overline{t} \\lor \\overline{x}y\\overline{z} \\lor xyt \\lor xz\\overline{t}$ và $f_2 = \\overline{y}z\\overline{t} \\lor \\overline{x}y\\overline{z} \\lor xyt \\lor xyz$. Nếu vẽ mạng cổng tổng hợp 2 mức (ngõ vào chỉ có $x, y, z, t$ dương, dùng lại tín hiệu sau cổng NOT), số cổng tối thiểu của $f_1$ và $f_2$ là:",
    "options": [
      "Bằng nhau và đều bằng $9$ cổng ($4$ cổng NOT, $4$ cổng AND, $1$ cổng OR)",
      "$f_2$ ít hơn $f_1$ một cổng NOT nên $f_2$ chỉ cần $8$ cổng",
      "$f_1$ ít hơn $f_2$ một cổng AND nên $f_1$ chỉ cần $8$ cổng",
      "Đều bằng $10$ cổng ($5$ cổng NOT, $4$ cổng AND, $1$ cổng OR)"
    ],
    "correctAnswer": 0,
    "explanation": "Chú ý bẫy rất hay trong đề thi: dù hạng tử thứ tư của $f_2$ là $xyz$ không chứa dấu phủ định, nhưng hai tế bào lớn cốt yếu đầu tiên ($\\overline{y}z\\overline{t}$ và $\\overline{x}y\\overline{z}$) đã bắt buộc phải tạo sẵn cả $4$ tín hiệu bù $\\overline{x}, \\overline{y}, \\overline{z}, \\overline{t}$ ($4$ cổng NOT)! Do đó cả $f_1$ lẫn $f_2$ đều dùng đúng $4$ cổng NOT + $4$ cổng AND + $1$ cổng OR = $9$ cổng."
  },
  {
    "id": "dhsp_c4_04",
    "chapterId": "c4",
    "lessonId": "l4_4",
    "lessonTitle": "§4 Tối tiểu hóa bằng Bản đồ Karnaugh",
    "difficulty": "Đi thi",
    "examSource": "Đề CK ĐHSP 2024–2025 • Câu 3a",
    "question": "(Đề CK ĐHSP 2024–2025) Biểu diễn hàm Bool $f(x, y, z, t) = \\overline{x}\\overline{y}\\overline{z}\\overline{t} \\lor x\\overline{y}z\\overline{t} \\lor x\\overline{y}\\overline{z}t \\lor \\overline{x}\\overline{y}\\overline{z}t \\lor \\overline{x}yz\\overline{t} \\lor \\overline{x}yzt \\lor \\overline{x}y\\overline{z}t$ dưới dạng tổng các minterm thập phân $\\sum m(\\dots)$ theo thứ tự $(xyzt)_2$ là:",
    "options": [
      "$\\sum m(0, 1, 4, 6, 7, 9, 10)$",
      "$\\sum m(0, 1, 5, 6, 7, 9, 10)$",
      "$\\sum m(0, 1, 5, 6, 7, 9, 12)$",
      "$\\sum m(1, 2, 5, 6, 7, 9, 10)$"
    ],
    "correctAnswer": 1,
    "explanation": "Đổi từng tích chính tắc sang mã nhị phân $(xyzt)_2$: $0000_2 = 0$, $1010_2 = 10$, $1001_2 = 9$, $0001_2 = 1$, $0110_2 = 6$, $0111_2 = 7$, $0101_2 = 5$. Sắp tăng dần ta được $\\sum m(0, 1, 5, 6, 7, 9, 10)$."
  },
  {
    "id": "dhsp_c4_05",
    "chapterId": "c4",
    "lessonId": "l4_4",
    "lessonTitle": "§4 Tối tiểu hóa bằng Bản đồ Karnaugh",
    "difficulty": "Đi thi",
    "examSource": "Đề CK ĐHSP 2024–2025 • Câu 3a & 3b",
    "question": "(Đề CK ĐHSP 2024–2025) Trên biểu đồ Karnaugh $4$ biến của hàm $f(x, y, z, t) = \\sum m(0, 1, 5, 6, 7, 9, 10)$, ô minterm nào là **tế bào lớn cô lập** ($1$ ô không ghép đôi được với bất kỳ ô $1$ nào khác)?",
    "options": [
      "Ô $m_0 = \\overline{x}\\overline{y}\\overline{z}\\overline{t}$",
      "Ô $m_9 = x\\overline{y}\\overline{z}t$",
      "Ô $m_{10} = x\\overline{y}z\\overline{t}$",
      "Ô $m_6 = \\overline{x}yz\\overline{t}$"
    ],
    "correctAnswer": 2,
    "explanation": "Xét ô $m_{10}(1010)$: $4$ ô kề cạnh (khác đúng $1$ bit) với $1010$ lần lượt là $0010 (m_2)$, $1110 (m_{14})$, $1000 (m_8)$ và $1011 (m_{11})$. Cả $4$ ô này đều mang giá trị $0$ trong hàm $f$, nên $m_{10} = x\\overline{y}z\\overline{t}$ là tế bào lớn cô lập và bắt buộc xuất hiện nguyên vẹn trong công thức tối tiểu."
  },
  {
    "id": "dhsp_c4_06",
    "chapterId": "c4",
    "lessonId": "l4_4",
    "lessonTitle": "§4 Tối tiểu hóa bằng Bản đồ Karnaugh",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP",
    "question": "(Mô phỏng Đề CK ĐHSP) Dùng biểu đồ Karnaugh $4$ biến tối tiểu hóa hàm Bool $f(x, y, z, t) = \\sum m(0, 2, 5, 7, 8, 10, 13, 15)$, ta được công thức đa thức tối tiểu nào?",
    "options": [
      "$\\overline{x}\\overline{z} \\lor xz$",
      "$\\overline{y}t \\lor y\\overline{t}$",
      "$\\overline{x}\\overline{t} \\lor xt$",
      "$\\overline{y}\\overline{t} \\lor yt$"
    ],
    "correctAnswer": 3,
    "explanation": "Bốn ô ở $4$ góc bảng Karnaugh $\\{m_0(0000), m_2(0010), m_8(1000), m_{10}(1010)\\}$ cuộn biên ghép thành tế bào $4$ ô $\\overline{y}\\overline{t}$. Bốn ô ở tâm bảng $\\{m_5(0101), m_7(0111), m_{13}(1101), m_{15}(1111)\\}$ ghép thành tế bào $4$ ô $yt$. Vậy $f = \\overline{y}\\overline{t} \\lor yt$."
  },
  {
    "id": "dhsp_c4_07",
    "chapterId": "c4",
    "lessonId": "l4_4",
    "lessonTitle": "§4 Tối tiểu hóa bằng Bản đồ Karnaugh",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP",
    "question": "(Mô phỏng Đề CK ĐHSP) Tìm công thức đa thức tối tiểu của hàm Bool $f(x, y, z, t) = \\overline{x}\\overline{z} \\lor xyz \\lor x\\overline{y}z$:",
    "options": [
      "$\\overline{x}\\overline{z} \\lor xz$",
      "$\\overline{x}\\overline{z} \\lor yz$",
      "$\\overline{z} \\lor xz$",
      "$\\overline{x} \\lor z$"
    ],
    "correctAnswer": 0,
    "explanation": "Gộp hai hạng tử sau theo luật phân bố và phần tử bù: $xyz \\lor x\\overline{y}z = xz(y \\lor \\overline{y}) = xz \\cdot 1 = xz$. Khi đó $f = \\overline{x}\\overline{z} \\lor xz$ (gồm hai tế bào $4$ ô $\\{0, 1, 4, 5\\}$ và $\\{10, 11, 14, 15\\}$ đối đỉnh trên bìa Karnaugh, không rút gọn thêm được nữa)."
  },
  {
    "id": "dhsp_c4_08",
    "chapterId": "c4",
    "lessonId": "l4_2",
    "lessonTitle": "§2 Biểu thức Bool & Các quy tắc đại số",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP",
    "question": "(Mô phỏng Đề CK ĐHSP) Cho hàm Bool $3$ biến $f(x, y, z) = x\\overline{y} \\lor \\overline{x}z \\lor yz$. Công thức đa thức tối tiểu của **hàm phần bù** $\\overline{f}(x, y, z)$ là:",
    "options": [
      "$\\overline{x}y \\lor x\\overline{z}$",
      "$\\overline{x}\\overline{z} \\lor xy$",
      "$\\overline{x}\\overline{y} \\lor xz$",
      "$(\\overline{x} \\lor y)(x \\lor \\overline{z})(\\overline{y} \\lor \\overline{z})$"
    ],
    "correctAnswer": 1,
    "explanation": "Áp dụng định lý thỏa thuận (Consensus): $x\\overline{y} \\lor \\overline{x}z \\lor yz = x\\overline{y} \\lor \\overline{x}z$ (hạng tử $yz$ dư thừa). Lấy phần bù theo De Morgan: $\\overline{f} = \\overline{x\\overline{y} \\lor \\overline{x}z} = (\\overline{x} \\lor y)(x \\lor \\overline{z}) = \\overline{x}x \\lor \\overline{x}\\overline{z} \\lor xy \\lor y\\overline{z} = \\overline{x}\\overline{z} \\lor xy$ (hạng tử $y\\overline{z}$ lại bị triệt tiêu theo định lý thỏa thuận!)."
  },
  {
    "id": "dhsp_c4_09",
    "chapterId": "c4",
    "lessonId": "l4_3",
    "lessonTitle": "§3 Hàm Bool & Mạch Cổng Logic",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP",
    "question": "(Mô phỏng Đề CK ĐHSP) Mạch cổng logic có hàm đầu ra $f(x, y, z) = \\overline{(x \\lor \\overline{y}) \\land (\\overline{x} \\lor z)}$. Đưa $f$ về công thức đa thức tối tiểu (tổng các tích tối tiểu) ta được:",
    "options": [
      "$xy \\lor \\overline{x}\\overline{z}$",
      "$\\overline{x}\\overline{y} \\lor xz$",
      "$\\overline{x}y \\lor x\\overline{z}$",
      "$\\overline{x}y \\lor x\\overline{z} \\lor y\\overline{z}$"
    ],
    "correctAnswer": 2,
    "explanation": "Áp dụng luật De Morgan cho phép hội và phép tuyển: $f = \\overline{x \\lor \\overline{y}} \\lor \\overline{\\overline{x} \\lor z} = (\\overline{x} \\cdot \\overline{\\overline{y}}) \\lor (\\overline{\\overline{x}} \\cdot \\overline{z}) = \\overline{x}y \\lor x\\overline{z}$. Hai tế bào $\\{m_2, m_3\\}$ và $\\{m_4, m_6\\}$ rời nhau nên $\\overline{x}y \\lor x\\overline{z}$ đã là công thức đa thức tối tiểu."
  },
  {
    "id": "dhsp_c4_10",
    "chapterId": "c4",
    "lessonId": "l4_4",
    "lessonTitle": "§4 Tối tiểu hóa bằng Bản đồ Karnaugh",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP",
    "question": "(Mô phỏng Đề CK ĐHSP) Trên biểu đồ Karnaugh $4$ biến $(xy \\setminus zt)$, hàm Bool $f(x, y, z, t) = \\sum m(0, 1, 2, 3, 8, 9, 10, 11)$ rút gọn tối tiểu thành:",
    "options": [
      "$\\overline{x}$",
      "$\\overline{z}$",
      "$\\overline{x} \\lor \\overline{y}$",
      "$\\overline{y}$"
    ],
    "correctAnswer": 3,
    "explanation": "Hàng trên cùng $xy = 00$ gồm $\\{m_0, m_1, m_2, m_3\\}$ và hàng dưới cùng $xy = 10$ gồm $\\{m_8, m_9, m_{10}, m_{11}\\}$ cuộn biên trên – dưới tạo thành một tế bào $8$ ô ($2^3$ ô). Trên $8$ ô này $x, z, t$ đều đổi dấu, chỉ có duy nhất $y = 0$ giữ nguyên, nên $f = \\overline{y}$."
  },

  // =========================================================================
  // CHƯƠNG 5: HỆ THỨC ĐỆ QUY & HÀM SINH (10 CÂU)
  // =========================================================================
  {
    "id": "dhsp_c5_01",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Đệ quy tuyến tính thuần nhất hệ số hằng",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP 2022–2023 • Câu 3",
    "question": "(Mô phỏng Đề CK ĐHSP 2022–2023) Nghiệm của hệ thức đệ quy $a_n = 3a_{n-1} + 10a_{n-2}$ ($n \\ge 2$) thỏa điều kiện ban đầu $a_0 = 3,\\; a_1 = 1$ là:",
    "options": [
      "$a_n = 5^n + 2(-2)^n$",
      "$a_n = 2 \\cdot 5^n + (-2)^n$",
      "$a_n = 5^n - 2(-2)^n$",
      "$a_n = \\dfrac{5}{7} \\cdot 5^n + \\dfrac{16}{7}(-2)^n$"
    ],
    "correctAnswer": 0,
    "explanation": "Phương trình đặc trưng $r^2 - 3r - 10 = 0 \\iff (r - 5)(r + 2) = 0$ có hai nghiệm $r_1 = 5, r_2 = -2$. Nghiệm tổng quát $a_n = \\alpha \\cdot 5^n + \\beta(-2)^n$. Thay $a_0 = 3, a_1 = 1$: $\\alpha + \\beta = 3$ và $5\\alpha - 2\\beta = 1 \\implies 7\\alpha = 7 \\implies \\alpha = 1, \\beta = 2$. Vậy $a_n = 5^n + 2(-2)^n$."
  },
  {
    "id": "dhsp_c5_02",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Đệ quy tuyến tính thuần nhất hệ số hằng",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP 2023–2024 • Câu 4",
    "question": "(Mô phỏng Đề CK ĐHSP 2023–2024) Giải hệ thức đệ quy $a_n = -a_{n-1} + 12a_{n-2}$ ($n \\ge 2$) với điều kiện đầu $a_0 = 3$ và $a_1 = 2$:",
    "options": [
      "$a_n = 3^n + 2(-4)^n$",
      "$a_n = 2 \\cdot 3^n + (-4)^n$",
      "$a_n = 2 \\cdot 4^n + (-3)^n$",
      "$a_n = \\dfrac{14}{7} \\cdot 4^n + (-3)^n$"
    ],
    "correctAnswer": 1,
    "explanation": "Chuyển vế $a_n + a_{n-1} - 12a_{n-2} = 0$, phương trình đặc trưng $r^2 + r - 12 = 0 \\iff (r - 3)(r + 4) = 0 \\implies r_1 = 3, r_2 = -4$. Giải hệ $\\alpha + \\beta = 3$ và $3\\alpha - 4\\beta = 2$: khử $\\beta$ được $7\\alpha = 14 \\implies \\alpha = 2, \\beta = 1$. Vậy $a_n = 2 \\cdot 3^n + (-4)^n$."
  },
  {
    "id": "dhsp_c5_03",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Đệ quy tuyến tính thuần nhất hệ số hằng",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP 2024–2025 • Câu 1b",
    "question": "(Mô phỏng Đề CK ĐHSP 2024–2025) Cho hệ thức đệ quy $x_n = 6x_{n-1} - 9x_{n-2}$ ($n \\ge 2$) với điều kiện ban đầu $x_0 = 1$ và $x_1 = 9$. Công thức nghiệm của $x_n$ là:",
    "options": [
      "$x_n = 3^{n+1}$",
      "$x_n = (1 + 3n) \\cdot 3^n$",
      "$x_n = (1 + 2n) \\cdot 3^n$",
      "$x_n = (2 + n) \\cdot 3^n$"
    ],
    "correctAnswer": 2,
    "explanation": "Phương trình đặc trưng $r^2 - 6r + 9 = (r - 3)^2 = 0$ có nghiệm kép $r_0 = 3$, nên $x_n = (\\alpha + \\beta n) \\cdot 3^n$. Thay $n = 0$: $\\alpha = 1$; thay $n = 1$: $(1 + \\beta) \\cdot 3 = 9 \\implies 1 + \\beta = 3 \\implies \\beta = 2$. Vậy $x_n = (1 + 2n) \\cdot 3^n$."
  },
  {
    "id": "dhsp_c5_04",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Mô hình hóa bằng Hệ thức Đệ quy",
    "difficulty": "Đi thi",
    "examSource": "Mở rộng Đề CK ĐHSP 2024–2025 • Câu 1a",
    "question": "(Mở rộng Đề CK ĐHSP 2024–2025) Gọi $a_n$ là số cách trả $n$ đồng tiền ($n \\ge 5$) bằng các đồng xu mệnh giá $1$ đồng, $2$ đồng và $5$ đồng (có phân biệt thứ tự bỏ đồng xu vào máy). Hệ thức đệ quy và bộ điều kiện đầu đúng là:",
    "options": [
      "$a_n = a_{n-1} + 2a_{n-2} + 5a_{n-5}$ với $a_0 = 1, a_1 = 1, a_2 = 2, a_3 = 3, a_4 = 5$",
      "$a_n = a_{n-1} + a_{n-2} + a_{n-5}$ với $a_0 = 0, a_1 = 1, a_2 = 2, a_3 = 3, a_4 = 4$",
      "$a_n = a_{n-5} + 1$ với $a_0 = 1, a_1 = 1, a_2 = 2, a_3 = 2, a_4 = 3$",
      "$a_n = a_{n-1} + a_{n-2} + a_{n-5}$ với $a_0 = 1, a_1 = 1, a_2 = 2, a_3 = 3, a_4 = 5$"
    ],
    "correctAnswer": 3,
    "explanation": "Xét đồng xu đầu tiên bỏ vào máy ($n \\ge 5$): nếu là $1$ đồng thì còn $a_{n-1}$ cách; nếu là $2$ đồng thì còn $a_{n-2}$ cách; nếu là $5$ đồng thì còn $a_{n-5}$ cách $\\implies a_n = a_{n-1} + a_{n-2} + a_{n-5}$. Với $0 \\le n \\le 4$ chưa thể dùng xu $5$ đồng nên dãy trùng với bài toán xu $1, 2$ đồng: $a_0 = 1, a_1 = 1, a_2 = 2, a_3 = 3, a_4 = 5$."
  },
  {
    "id": "dhsp_c5_05",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Mô hình hóa bằng Hệ thức Đệ quy",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP",
    "question": "(Mô phỏng Đề CK ĐHSP) Gọi $u_n$ là số cách lát kín bảng chữ nhật kích thước $2 \\times n$ ($n \\ge 1$) bằng các viên gạch domino kích thước $1 \\times 2$ (đặt đứng $2 \\times 1$ hoặc đặt ngang $1 \\times 2$). Hệ thức đệ quy và giá trị $u_6$ là:",
    "options": [
      "$u_n = u_{n-1} + u_{n-2}$ ($u_1 = 1, u_2 = 2$) và $u_6 = 13$",
      "$u_n = u_{n-1} + 2u_{n-2}$ ($u_1 = 1, u_2 = 3$) và $u_6 = 43$",
      "$u_n = u_{n-1} + u_{n-2}$ ($u_1 = 1, u_2 = 1$) và $u_6 = 8$",
      "$u_n = 2u_{n-1}$ ($u_1 = 1$) và $u_6 = 32$"
    ],
    "correctAnswer": 0,
    "explanation": "Cột cuối cùng của bảng $2 \\times n$ hoặc được phủ bởi $1$ viên domino đặt đứng (còn bảng $2 \\times (n-1)$ có $u_{n-1}$ cách), hoặc được phủ bởi $2$ viên domino đặt ngang chồng lên nhau (còn bảng $2 \\times (n-2)$ có $u_{n-2}$ cách). Tính lần lượt: $u_1 = 1, u_2 = 2, u_3 = 3, u_4 = 5, u_5 = 8, u_6 = 13$."
  },
  {
    "id": "dhsp_c5_06",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Mô hình hóa bằng Hệ thức Đệ quy",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP",
    "question": "(Mô phỏng Đề CK ĐHSP) Gọi $b_n$ là số xâu nhị phân độ dài $n$ ($n \\ge 1$) **không chứa hai chữ số $0$ liên tiếp**. Hệ thức truy hồi và số lượng xâu $b_5$ là:",
    "options": [
      "$b_n = 2b_{n-1} - b_{n-2}$ ($b_1 = 2, b_2 = 3$) và $b_5 = 6$",
      "$b_n = b_{n-1} + b_{n-2}$ ($b_1 = 2, b_2 = 3$) và $b_5 = 13$",
      "$b_n = b_{n-1} + b_{n-2}$ ($b_1 = 1, b_2 = 2$) và $b_5 = 8$",
      "$b_n = 2^n - (n - 1)$ và $b_5 = 28$"
    ],
    "correctAnswer": 1,
    "explanation": "Nếu bit cuối là $1$: $n - 1$ bit đầu tùy ý hợp lệ có $b_{n-1}$ xâu. Nếu bit cuối là $0$: bit kế cuối bắt buộc là $1$ (để tránh $00$), còn $n - 2$ bit đầu hợp lệ có $b_{n-2}$ xâu. Với $b_1 = 2$ ($\\{0, 1\\}$), $b_2 = 3$ ($\\{01, 10, 11\\}$), ta có $b_3 = 5, b_4 = 8, b_5 = 13$."
  },
  {
    "id": "dhsp_c5_07",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Đệ quy tuyến tính thuần nhất hệ số hằng",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP",
    "question": "(Mô phỏng Đề CK ĐHSP) Nghiệm của hệ thức đệ quy $a_n = 4a_{n-1} - 4a_{n-2}$ ($n \\ge 2$) với điều kiện ban đầu $a_0 = 2,\\; a_1 = 5$ là:",
    "options": [
      "$a_n = (2 + n) \\cdot 2^n$",
      "$a_n = (2 + 3n) \\cdot 2^n$",
      "$a_n = \\left(2 + \\dfrac{n}{2}\\right) \\cdot 2^n$",
      "$a_n = 2 \\cdot 2^n + \\dfrac{1}{2}(-2)^n$"
    ],
    "correctAnswer": 2,
    "explanation": "Phương trình đặc trưng $r^2 - 4r + 4 = (r - 2)^2 = 0$ có nghiệm kép $r_0 = 2$. Đặt $a_n = (\\alpha + \\beta n) \\cdot 2^n$: từ $a_0 = 2 \\implies \\alpha = 2$; từ $a_1 = 5 \\implies (2 + \\beta) \\cdot 2 = 5 \\implies \\beta = \\frac{1}{2}$. Vậy $a_n = \\left(2 + \\frac{n}{2}\\right) \\cdot 2^n$."
  },
  {
    "id": "dhsp_c5_08",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Đệ quy tuyến tính không thuần nhất",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP",
    "question": "(Mô phỏng Đề CK ĐHSP) Giải hệ thức đệ quy tuyến tính không thuần nhất $a_n = 3a_{n-1} + 4$ ($n \\ge 1$) với điều kiện đầu $a_0 = 1$, ta được:",
    "options": [
      "$a_n = 3^n + 4n$",
      "$a_n = 2 \\cdot 3^n - 1$",
      "$a_n = 5 \\cdot 3^n - 4$",
      "$a_n = 3^{n+1} - 2$"
    ],
    "correctAnswer": 3,
    "explanation": "Nghiệm thuần nhất là $a_n^{(h)} = \\alpha \\cdot 3^n$. Do $s = 1 \\neq 3$, chọn nghiệm riêng hằng số $a_n^{(p)} = C$: thay vào được $C = 3C + 4 \\implies C = -2$. Khi đó $a_n = \\alpha \\cdot 3^n - 2$; từ $a_0 = 1 = \\alpha - 2 \\implies \\alpha = 3$. Vậy $a_n = 3 \\cdot 3^n - 2 = 3^{n+1} - 2$."
  },
  {
    "id": "dhsp_c5_09",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Đệ quy tuyến tính không thuần nhất",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP",
    "question": "(Mô phỏng Đề CK ĐHSP) Cho hệ thức đệ quy không thuần nhất $a_n - 5a_{n-1} + 6a_{n-2} = 2 \\cdot 3^n$ ($n \\ge 2$). Dạng đúng của nghiệm riêng $a_n^{(p)}$ cần chọn theo phương pháp hệ số bất định là:",
    "options": [
      "$a_n^{(p)} = A \\cdot n \\cdot 3^n$",
      "$a_n^{(p)} = A \\cdot 3^n$",
      "$a_n^{(p)} = A \\cdot n^2 \\cdot 3^n$",
      "$a_n^{(p)} = (An + B) \\cdot 3^n$"
    ],
    "correctAnswer": 0,
    "explanation": "Phương trình đặc trưng phần thuần nhất $r^2 - 5r + 6 = 0$ có hai nghiệm đơn $r_1 = 2$ và $r_2 = 3$. Vế phải $F(n) = 2 \\cdot 3^n$ có cơ số $s = 3$ trùng với nghiệm đặc trưng bội $m = 1$ và đa thức đi kèm bậc $t = 0$, nên dạng nghiệm riêng chuẩn là $a_n^{(p)} = n^1 \\cdot A \\cdot 3^n = A \\cdot n \\cdot 3^n$."
  },
  {
    "id": "dhsp_c5_10",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Hàm sinh (Generating Functions) & Ứng dụng",
    "difficulty": "Đi thi",
    "examSource": "Mô phỏng Đề CK ĐHSP",
    "question": "(Mô phỏng Đề CK ĐHSP) Hàm sinh $G(x) = \\sum_{n=0}^{\\infty} a_n x^n$ đếm số nghiệm nguyên của phương trình $x_1 + x_2 + x_3 = n$ với điều kiện $x_1 \\ge 2$, $0 \\le x_2 \\le 3$ và $x_3 \\ge 0$ có dạng thu gọn là:",
    "options": [
      "$G(x) = \\dfrac{x^2(1 - x^3)}{(1 - x)^3}$",
      "$G(x) = \\dfrac{x^2(1 - x^4)}{(1 - x)^3}$",
      "$G(x) = \\dfrac{1 - x^4}{(1 - x)^3}$",
      "$G(x) = \\dfrac{x^2}{(1 - x)^3}$"
    ],
    "correctAnswer": 1,
    "explanation": "Nhân tử cho $x_1 \\ge 2$ là $x^2 + x^3 + \\dots = \\frac{x^2}{1 - x}$; nhân tử cho $0 \\le x_2 \\le 3$ là $1 + x + x^2 + x^3 = \\frac{1 - x^4}{1 - x}$; nhân tử cho $x_3 \\ge 0$ là $\\frac{1}{1 - x}$. Nhân ba nhân tử lại ta được $G(x) = \\frac{x^2(1 - x^4)}{(1 - x)^3}$."
  }
];
