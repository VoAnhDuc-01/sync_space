/**
 * Ngân hàng 50 câu hỏi Chuyên đề Handout trên lớp & Đề thi Thực tế ĐHSP TP.HCM (Chương 1–4)
 * Bám sát 6 Handout bài giảng (15/10/2025 – 30/10/2025) và Tuyển tập Đề thi 2022–2025.
 * Chương 1 tuyệt đối không chứa phép XOR. Toàn bộ biểu thức toán chuẩn hóa KaTeX 100%.
 */

const QUIZ_DATA_HANDOUT_EXTRA = [
  {
    "id": "c1_l7_q1",
    "chapterId": "c1",
    "lessonId": "l1_7",
    "lessonTitle": "§7 Chuyên đề: Mô hình hóa & Suy diễn Phản chứng",
    "difficulty": "Thông hiểu",
    "question": "(Đề GK ĐHSP 2022–2023) Cho suy luận gồm các tiền đề: $t \\to u$, $r \\to (s \\lor t)$, $(\\neg p \\lor q) \\to r$, $\\neg(s \\lor u)$ và kết luận $p$. Khi chứng minh bằng phương pháp phản chứng, ta bổ sung giả thiết tạm nào và suy ra điều gì từ $\\neg(s \\lor u)$?",
    "options": [
      "Giả sử $\\neg p = 1$; từ $\\neg(s \\lor u) = 1$ theo De Morgan suy ra $\\neg s = 1$ và $\\neg u = 1$",
      "Giả sử $p = 1$; từ $\\neg(s \\lor u) = 1$ suy ra $\\neg s \\lor \\neg u = 1$",
      "Giả sử $\\neg r = 1$; từ $\\neg(s \\lor u) = 1$ suy ra $s = 1, u = 1$",
      "Suy luận trên không hợp lý vì phản ví dụ xảy ra khi $p = 0, q = 0$"
    ],
    "correctAnswer": 0,
    "explanation": "Giả sử kết luận sai ($\\neg p = 1$) trong khi mọi tiền đề đúng: từ $\\neg(s \\lor u) \\equiv \\neg s \\land \\neg u = 1 \\implies s = 0, u = 0$. Kết hợp $t \\to u$ theo Modus Tollens được $t = 0 \\implies s \\lor t = 0$. Kết hợp $r \\to (s \\lor t)$ được $r = 0$. Nhưng $\\neg p = 1 \\implies \\neg p \\lor q = 1$, kéo theo $r = 1$ (mâu thuẫn!). Vậy suy luận hợp lý."
  },
  {
    "id": "c1_l7_q2",
    "chapterId": "c1",
    "lessonId": "l1_7",
    "lessonTitle": "§7 Chuyên đề: Mô hình hóa & Suy diễn Phản chứng",
    "difficulty": "Thông hiểu",
    "question": "(Đề GK ĐHSP 2023–2024) Kiểm tra tính hợp lý của suy luận: $p$, $p \\to r$, $p \\to (q \\lor \\neg r) \\therefore q$. Kết luận nào dưới đây đúng?",
    "options": [
      "Không hợp lý, vì khi $p = 1, r = 1, q = 0$ tất cả tiền đề đều đúng",
      "Hợp lý: dùng Modus Ponens suy ra $r$ và $q \\lor \\neg r$, sau đó dùng Tam đoạn luận rời với $\\neg(\\neg r) \\equiv r$ suy ra $q$",
      "Không hợp lý, vì thiếu tiền đề $r \\to q$",
      "Chỉ hợp lý khi $p$ nhận chân trị $0$"
    ],
    "correctAnswer": 1,
    "explanation": "(1) Từ $p$ và $p \\to r$ suy ra $r$ (Modus Ponens). (2) Từ $p$ và $p \\to (q \\lor \\neg r)$ suy ra $q \\lor \\neg r$ (Modus Ponens). (3) Từ $q \\lor \\neg r$ và $r \\equiv \\neg(\\neg r)$, áp dụng Tam đoạn luận rời (Disjunctive Syllogism) suy ra $q$. Suy luận hoàn toàn hợp lý."
  },
  {
    "id": "c1_l7_q3",
    "chapterId": "c1",
    "lessonId": "l1_7",
    "lessonTitle": "§7 Chuyên đề: Mô hình hóa & Suy diễn Phản chứng",
    "difficulty": "Thông hiểu",
    "question": "(Handout Buổi 2 – 16/10/2025) Xét bài toán suy luận: \"Nếu An hoàn thành dự án ($p$) thì An được thưởng ($q$). Nếu An được thưởng ($q$) hoặc có bằng khen ($r$) thì An lên chức ($s$). Thực tế An không lên chức ($\\neg s$).\" Kết luận hợp lý suy ra từ các giả thiết trên là:",
    "options": [
      "An hoàn thành dự án nhưng không có bằng khen ($p \\land \\neg r$)",
      "An được thưởng nhưng không lên chức ($q \\land \\neg s$)",
      "An không hoàn thành dự án và không có bằng khen ($\\neg p \\land \\neg r$)",
      "Không thể kết luận gì về việc An có hoàn thành dự án hay không"
    ],
    "correctAnswer": 2,
    "explanation": "Từ $(q \\lor r) \\to s$ và $\\neg s$, theo Modus Tollens ta có $\\neg(q \\lor r) \\equiv \\neg q \\land \\neg r$, suy ra $\\neg q$ và $\\neg r$. Từ $p \\to q$ và $\\neg q$, tiếp tục dùng Modus Tollens được $\\neg p$. Vậy $\\neg p \\land \\neg r$."
  },
  {
    "id": "c1_l7_q4",
    "chapterId": "c1",
    "lessonId": "l1_7",
    "lessonTitle": "§7 Chuyên đề: Mô hình hóa & Suy diễn Phản chứng",
    "difficulty": "Vận dụng",
    "question": "(Handout Buổi 2 – 16/10/2025) Xét suy luận 5 biến về lịch họp sáng thứ Ba: $p \\to (q \\lor r)$, $q \\to \\neg s$, $(s \\land t) \\to \\neg r$, biết $p = 1$, $s = 1$, $t = 1$. Giá trị chân lý bắt buộc của $(q, r)$ để hệ tiền đề không mâu thuẫn là:",
    "options": [
      "$q = 0, r = 1$",
      "$q = 1, r = 0$",
      "$q = 0, r = 0$",
      "Hệ tiền đề mâu thuẫn (không tồn tại cặp $(q, r)$ nào thỏa mãn đồng thời)"
    ],
    "correctAnswer": 3,
    "explanation": "Từ $s = 1 \\implies \\neg(\\neg s) = 1$, kết hợp $q \\to \\neg s$ suy ra $q = 0$. Từ $s = 1, t = 1 \\implies s \\land t = 1$, kết hợp $(s \\land t) \\to \\neg r$ suy ra $\\neg r = 1 \\implies r = 0$. Khi đó $q \\lor r = 0$, nhưng từ $p = 1$ và $p \\to (q \\lor r)$ lại bắt buộc $q \\lor r = 1$ (mâu thuẫn!)."
  },
  {
    "id": "c1_l7_q5",
    "chapterId": "c1",
    "lessonId": "l1_7",
    "lessonTitle": "§7 Chuyên đề: Mô hình hóa & Suy diễn Phản chứng",
    "difficulty": "Thông hiểu",
    "question": "(Handout Buổi 5 – 29/10/2025) Mệnh đề $((p \\lor q) \\land (p \\to r) \\land (q \\to r)) \\to r$ biểu diễn quy tắc suy diễn kinh điển nào và chân trị của nó là gì?",
    "options": [
      "Quy tắc Chứng minh theo trường hợp (Proof by Cases), là một hằng đúng",
      "Quy tắc Modus Tollens, là một hằng đúng",
      "Ngụy biện khẳng định hệ quả, là mệnh đề tiếp liên",
      "Luật xuất nhập (Exportation), là mệnh đề hằng sai"
    ],
    "correctAnswer": 0,
    "explanation": "Ta có $(p \\to r) \\land (q \\to r) \\equiv (p \\lor q) \\to r$ (luật phân bố tiền đề qua phép tuyển). Do đó vế trái trở thành $(p \\lor q) \\land ((p \\lor q) \\to r)$, kéo theo $r$ theo đúng Modus Ponens. Đây là hằng đúng biểu diễn quy tắc Chứng minh theo trường hợp."
  },
  {
    "id": "c1_l7_q6",
    "chapterId": "c1",
    "lessonId": "l1_7",
    "lessonTitle": "§7 Chuyên đề: Mô hình hóa & Suy diễn Phản chứng",
    "difficulty": "Thông hiểu",
    "question": "(Handout Buổi 2 – 16/10/2025) Xác định chân trị trên $\\mathbb{R}$ và mệnh đề phủ định của $P$: \"$\\exists x \\in \\mathbb{R},\\; (x^2 - 4x - 5 = 0) \\to (x > 0)$\".",
    "options": [
      "$P$ Sai; $\\overline{P}: \\forall x \\in \\mathbb{R},\\; (x^2 - 4x - 5 = 0) \\to (x \\le 0)$",
      "$P$ Đúng; $\\overline{P}: \\forall x \\in \\mathbb{R},\\; (x^2 - 4x - 5 = 0) \\land (x \\le 0)$",
      "$P$ Đúng; $\\overline{P}: \\forall x \\in \\mathbb{R},\\; (x^2 - 4x - 5 \\neq 0) \\lor (x \\le 0)$",
      "$P$ Sai; $\\overline{P}: \\exists x \\in \\mathbb{R},\\; (x^2 - 4x - 5 = 0) \\land (x \\le 0)$"
    ],
    "correctAnswer": 1,
    "explanation": "Chọn $x = 5 \\in \\mathbb{R}$: tiền đề $5^2 - 20 - 5 = 0$ đúng và kết luận $5 > 0$ đúng (hoặc chọn $x = 0$ làm tiền đề sai cũng khiến phép kéo theo đúng!), nên $P$ Đúng. Áp dụng $\\neg(A \\to B) \\equiv A \\land \\neg B$ và đổi $\\exists$ thành $\\forall$: $\\overline{P} \\equiv \\forall x \\in \\mathbb{R},\\; (x^2 - 4x - 5 = 0) \\land (x \\le 0)$."
  },
  {
    "id": "c1_l7_q7",
    "chapterId": "c1",
    "lessonId": "l1_7",
    "lessonTitle": "§7 Chuyên đề: Mô hình hóa & Suy diễn Phản chứng",
    "difficulty": "Vận dụng",
    "question": "(Handout Buổi 5 – 29/10/2025) Cho mệnh đề lượng từ lồng nhau trên $\\mathbb{R}$: $Q$: \"$\\forall x \\in \\mathbb{R}, \\exists y \\in \\mathbb{R},\\; (x^2(y + 2) < 0) \\to (x + 2y^3 \\neq 24)$\". Chân trị của $Q$ và mệnh đề phủ định $\\overline{Q}$ là:",
    "options": [
      "$Q$ Đúng; $\\overline{Q}: \\exists x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R},\\; (x^2(y + 2) \\ge 0) \\lor (x + 2y^3 = 24)$",
      "$Q$ Sai; $\\overline{Q}: \\exists x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R},\\; (x^2(y + 2) < 0) \\land (x + 2y^3 = 24)$",
      "$Q$ Đúng; $\\overline{Q}: \\exists x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R},\\; (x^2(y + 2) < 0) \\land (x + 2y^3 = 24)$",
      "$Q$ Sai; $\\overline{Q}: \\forall x \\in \\mathbb{R}, \\exists y \\in \\mathbb{R},\\; (x^2(y + 2) < 0) \\land (x + 2y^3 = 24)$"
    ],
    "correctAnswer": 2,
    "explanation": "Với mọi $x \\in \\mathbb{R}$ cho trước, chỉ cần chọn $y = 0$: khi đó $x^2(0 + 2) = 2x^2 \\ge 0$, làm tiền đề $(x^2(y + 2) < 0)$ nhận chân trị Sai ($0$), nên phép kéo theo luôn Đúng ($1$)! Vậy $Q$ Đúng. Phủ định đổi $\\forall x \\exists y$ thành $\\exists x \\forall y$ và $\\neg(A \\to B) \\equiv A \\land \\neg B$."
  },
  {
    "id": "c1_l7_q8",
    "chapterId": "c1",
    "lessonId": "l1_7",
    "lessonTitle": "§7 Chuyên đề: Mô hình hóa & Suy diễn Phản chứng",
    "difficulty": "Thông hiểu",
    "question": "(Đề GK ĐHSP 2023–2024) Phủ định chuẩn xác của mệnh đề \"$\\forall x \\in \\mathbb{R}, \\exists y \\in \\mathbb{R},\\; (x + y > 0) \\to (x^2 + y^2 \\ge 1)$\" là:",
    "options": [
      "$\\exists x \\in \\mathbb{R}, \\exists y \\in \\mathbb{R},\\; (x + y > 0) \\land (x^2 + y^2 < 1)$",
      "$\\exists x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R},\\; (x + y \\le 0) \\to (x^2 + y^2 < 1)$",
      "$\\forall x \\in \\mathbb{R}, \\exists y \\in \\mathbb{R},\\; (x + y > 0) \\land (x^2 + y^2 < 1)$",
      "$\\exists x \\in \\mathbb{R}, \\forall y \\in \\mathbb{R},\\; (x + y > 0) \\land (x^2 + y^2 < 1)$"
    ],
    "correctAnswer": 3,
    "explanation": "Theo luật De Morgan cho lượng từ và phủ định phép kéo theo $\\neg(A \\to B) \\equiv A \\land \\neg B$: đổi $\\forall x$ thành $\\exists x$, đổi $\\exists y$ thành $\\forall y$, giữ nguyên giả thiết $x + y > 0$ và phủ định kết luận thành $x^2 + y^2 < 1$."
  },
  {
    "id": "c1_l7_q9",
    "chapterId": "c1",
    "lessonId": "l1_7",
    "lessonTitle": "§7 Chuyên đề: Mô hình hóa & Suy diễn Phản chứng",
    "difficulty": "Thông hiểu",
    "question": "(Handout Buổi 6 – 30/10/2025) Sử dụng các quy luật đại số mệnh đề, rút gọn biểu thức $E = [(p \\to q) \\land \\neg q] \\lor p$ ta được kết quả tối giản là:",
    "options": [
      "$p \\lor \\neg q$",
      "$p \\land \\neg q$",
      "$1$ (hằng đúng)",
      "$p$"
    ],
    "correctAnswer": 0,
    "explanation": "Ta biến đổi: $(p \\to q) \\land \\neg q \\equiv (\\neg p \\lor q) \\land \\neg q \\equiv (\\neg p \\land \\neg q) \\lor (q \\land \\neg q) \\equiv \\neg p \\land \\neg q$. Khi đó $E \\equiv (\\neg p \\land \\neg q) \\lor p \\equiv (p \\lor \\neg p) \\land (p \\lor \\neg q) \\equiv 1 \\land (p \\lor \\neg q) \\equiv p \\lor \\neg q$."
  },
  {
    "id": "c1_l7_q10",
    "chapterId": "c1",
    "lessonId": "l1_7",
    "lessonTitle": "§7 Chuyên đề: Mô hình hóa & Suy diễn Phản chứng",
    "difficulty": "Thông hiểu",
    "question": "Để chứng minh một suy luận $H_1, H_2, \\dots, H_m \\therefore C$ là **KHÔNG hợp lý** (sai lầm logic), phương pháp ngắn gọn và chặt chẽ nhất là:",
    "options": [
      "Chỉ ra ít nhất một phép gán chân trị làm $C = 1$ và mọi $H_i = 1$",
      "Chỉ ra đúng một phép gán chân trị (phản ví dụ) làm $H_1 = H_2 = \\dots = H_m = 1$ nhưng $C = 0$",
      "Chỉ ra một phép gán chân trị làm $H_1 = 0$ và $C = 0$",
      "Chứng minh $C$ không phải là hằng đúng"
    ],
    "correctAnswer": 1,
    "explanation": "Suy luận hợp lý $\\iff (H_1 \\land \\dots \\land H_m) \\to C$ là hằng đúng. Do đó nó không hợp lý khi và chỉ khi tồn tại ít nhất một bộ chân trị của các biến (gọi là phản ví dụ / counterexample) làm tất cả các tiền đề $H_i = 1$ đồng thời kết luận $C = 0$."
  },
  {
    "id": "c1_l7_q11",
    "chapterId": "c1",
    "lessonId": "l1_7",
    "lessonTitle": "§7 Chuyên đề: Mô hình hóa & Suy diễn Phản chứng",
    "difficulty": "Vận dụng",
    "question": "Kiểm tra suy luận sau: $p \\to q$, $r \\to s$, $q \\lor s \\therefore p \\lor r$. Khẳng định nào dưới đây đúng?",
    "options": [
      "Suy luận hợp lý theo quy tắc Song đề kiến thiết",
      "Suy luận KHÔNG hợp lý; phản ví dụ là $p = 1, r = 1, q = 0, s = 0$",
      "Suy luận KHÔNG hợp lý; phản ví dụ là $p = 0, r = 0, q = 1, s = 0$",
      "Suy luận hợp lý theo quy tắc Song đề hủy diệt"
    ],
    "correctAnswer": 2,
    "explanation": "Đây là ngụy biện khẳng định hệ quả dạng tuyển! Thử gán $p = 0, r = 0, q = 1, s = 0$: khi đó $p \\to q \\equiv (0 \\to 1) = 1$, $r \\to s \\equiv (0 \\to 0) = 1$, $q \\lor s \\equiv (1 \\lor 0) = 1$ (mọi tiền đề đúng), nhưng kết luận $p \\lor r \\equiv (0 \\lor 0) = 0$ (sai!)."
  },
  {
    "id": "c1_l7_q12",
    "chapterId": "c1",
    "lessonId": "l1_7",
    "lessonTitle": "§7 Chuyên đề: Mô hình hóa & Suy diễn Phản chứng",
    "difficulty": "Thông hiểu",
    "question": "(Handout Buổi 1 – 15/10/2025) Trong tiếng Việt toán học, câu \"Điều kiện **cần** để tứ giác $ABCD$ là hình vuông ($p$) là nó có bốn góc vuông ($q$)\" được dịch sang công thức mệnh đề là:",
    "options": [
      "$\\neg p \\to q$",
      "$q \\to p$",
      "$p \\leftrightarrow q$",
      "$p \\to q$"
    ],
    "correctAnswer": 3,
    "explanation": "Trong biểu thức $p \\to q$, $p$ là điều kiện đủ cho $q$, còn $q$ là **điều kiện cần** cho $p$ (nếu không có $q$ thì không thể có $p$: $\\neg q \\to \\neg p \\equiv p \\to q$). Vì '$q$: có bốn góc vuông' là điều kiện cần của '$p$: là hình vuông', công thức đúng là $p \\to q$."
  },
  {
    "id": "c2_l2_hx1",
    "chapterId": "c2",
    "lessonId": "l2_2",
    "lessonTitle": "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    "difficulty": "Thông hiểu",
    "question": "(Đề CK ĐHSP 2023–2024 & Handout Buổi 2) Cho ánh xạ song ánh $f: \\mathbb{R} \\setminus \\{3\\} \\to \\mathbb{R} \\setminus \\{1\\}$ xác định bởi $f(x) = \\frac{x + 1}{x - 3}$. Ánh xạ ngược $f^{-1}: \\mathbb{R} \\setminus \\{1\\} \\to \\mathbb{R} \\setminus \\{3\\}$ có công thức là:",
    "options": [
      "$f^{-1}(y) = \\frac{3y + 1}{y - 1}$",
      "$f^{-1}(y) = \\frac{y - 3}{y + 1}$",
      "$f^{-1}(y) = \\frac{3y - 1}{y - 1}$",
      "$f^{-1}(y) = \\frac{y + 3}{y - 1}$"
    ],
    "correctAnswer": 0,
    "explanation": "Giải phương trình $y = \\frac{x + 1}{x - 3}$ theo $x$ (với $y \\neq 1$): $y(x - 3) = x + 1 \\iff (y - 1)x = 3y + 1 \\iff x = \\frac{3y + 1}{y - 1} \\in \\mathbb{R} \\setminus \\{3\\}$. Vậy $f^{-1}(y) = \\frac{3y + 1}{y - 1}$."
  },
  {
    "id": "c2_l2_hx2",
    "chapterId": "c2",
    "lessonId": "l2_2",
    "lessonTitle": "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    "difficulty": "Thông hiểu",
    "question": "(Handout Buổi 6 – 30/10/2025) Cho song ánh $f: \\mathbb{R} \\setminus \\{2\\} \\to \\mathbb{R} \\setminus \\{-3\\}$ xác định bởi $f(x) = \\frac{3x - 1}{2 - x}$. Công thức của ánh xạ ngược $f^{-1}(x)$ là:",
    "options": [
      "$f^{-1}(x) = \\frac{2x - 1}{x + 3}$",
      "$f^{-1}(x) = \\frac{2x + 1}{x + 3}$",
      "$f^{-1}(x) = \\frac{2 - x}{3x - 1}$",
      "$f^{-1}(x) = \\frac{3x + 1}{x - 2}$"
    ],
    "correctAnswer": 1,
    "explanation": "Đặt $y = \\frac{3x - 1}{2 - x} \\iff 2y - xy = 3x - 1 \\iff x(y + 3) = 2y + 1 \\iff x = \\frac{2y + 1}{y + 3}$ (với $y \\neq -3$). Đổi tên biến thành $x$ ta được $f^{-1}(x) = \\frac{2x + 1}{x + 3}$."
  },
  {
    "id": "c2_l2_hx3",
    "chapterId": "c2",
    "lessonId": "l2_2",
    "lessonTitle": "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
    "difficulty": "Thông hiểu",
    "question": "(Handout Buổi 2 – 16/10/2025) Xét hai ánh xạ trên $\\mathbb{R}$: $f(x) = x^3 + x$ và $g(x) = x^2 + x$. Khẳng định nào sau đây đúng?",
    "options": [
      "$f$ chỉ là đơn ánh nhưng không toàn ánh trên $\\mathbb{R}$",
      "Cả $f$ và $g$ đều là song ánh trên $\\mathbb{R}$",
      "$f$ là song ánh, còn $g$ không đơn ánh cũng không toàn ánh trên $\\mathbb{R}$",
      "$g$ là toàn ánh nhưng không đơn ánh trên $\\mathbb{R}$"
    ],
    "correctAnswer": 2,
    "explanation": "Với $f(x) = x^3 + x$: $f'(x) = 3x^2 + 1 > 0, \\forall x \\in \\mathbb{R}$ và $\\lim_{x \\to \\pm\\infty} f(x) = \\pm\\infty$ liên tục nên $f$ là song ánh. Với $g(x) = x^2 + x$: $g(0) = g(-1) = 0$ nên không đơn ánh, và $g(x) = (x + \\frac{1}{2})^2 - \\frac{1}{4} \\ge -\\frac{1}{4}$ nên không toàn ánh (chẳng hạn phương trình $g(x) = -1$ vô nghiệm thực)."
  },
  {
    "id": "c2_l4_hx1",
    "chapterId": "c2",
    "lessonId": "l2_4",
    "lessonTitle": "§4 Giải tích tổ hợp & Nhị thức Newton",
    "difficulty": "Thông hiểu",
    "question": "(Handout Buổi 3 – 25/10/2025) Có bao nhiêu chuỗi ký tự khác nhau nhận được bằng cách hoán vị tất cả các chữ cái của từ `SUCCESS`?",
    "options": [
      "$5040$",
      "$840$",
      "$210$",
      "$420$"
    ],
    "correctAnswer": 3,
    "explanation": "Từ `SUCCESS` có $n = 7$ chữ cái, gồm: $3$ chữ `S`, $2$ chữ `C`, $1$ chữ `U`, $1$ chữ `E`. Áp dụng công thức hoán vị lặp: $P^* = \\frac{7!}{3! \\cdot 2! \\cdot 1! \\cdot 1!} = \\frac{5040}{6 \\cdot 2} = 420$."
  },
  {
    "id": "c2_l4_hx2",
    "chapterId": "c2",
    "lessonId": "l2_4",
    "lessonTitle": "§4 Giải tích tổ hợp & Nhị thức Newton",
    "difficulty": "Thông hiểu",
    "question": "(Handout Buổi 3 – 25/10/2025) Có bao nhiêu hoán vị phân biệt của tất cả các chữ cái trong từ `GOOGLE`?",
    "options": [
      "$180$",
      "$720$",
      "$360$",
      "$90$"
    ],
    "correctAnswer": 0,
    "explanation": "Từ `GOOGLE` gồm $6$ chữ cái: $2$ chữ `G`, $2$ chữ `O`, $1$ chữ `L`, $1$ chữ `E`. Số hoán vị phân biệt là $\\frac{6!}{2! \\cdot 2! \\cdot 1! \\cdot 1!} = \\frac{720}{4} = 180$."
  },
  {
    "id": "c2_l5_hx1",
    "chapterId": "c2",
    "lessonId": "l2_5",
    "lessonTitle": "§5 Nguyên lý Chuồng bồ câu (Dirichlet)",
    "difficulty": "Thông hiểu",
    "question": "(Handout Buổi 5 – 29/10/2025) Trong tủ tối có $20$ chiếc áo gồm $4$ áo màu đỏ, $7$ áo màu trắng và $9$ áo màu xanh. Cần lấy ngẫu nhiên ít nhất bao nhiêu chiếc áo (không nhìn màu) để **chắc chắn** có được ít nhất $5$ chiếc áo cùng màu?",
    "options": [
      "$12$ chiếc áo",
      "$13$ chiếc áo",
      "$15$ chiếc áo",
      "$5$ chiếc áo"
    ],
    "correctAnswer": 1,
    "explanation": "Xét trường hợp xấu nhất không có màu nào đạt $5$ chiếc: ta lấy tối đa hết toàn bộ $4$ áo đỏ (vì đỏ chỉ có $4$ chiếc $< 5$), $4$ áo trắng và $4$ áo xanh, tổng cộng $4 + 4 + 4 = 12$ áo. Chỉ cần lấy thêm $1$ chiếc nữa ($12 + 1 = 13$ áo), chiếc thứ $13$ chắc chắn là trắng hoặc xanh, tạo thành $5$ áo cùng màu!"
  },
  {
    "id": "c2_l6_q1",
    "chapterId": "c2",
    "lessonId": "l2_6",
    "lessonTitle": "§6 Chuyên đề: Nghiệm nguyên có Ràng buộc & Đếm Tập con",
    "difficulty": "Thông hiểu",
    "question": "(Đề GK ĐHSP 2022–2023 & Handout Buổi 3) Từ tập chữ số $E = \\{0, 1, 2, 3, 4, 5\\}$, lập được bao nhiêu **số tự nhiên chẵn có $3$ chữ số đôi một khác nhau**?",
    "options": [
      "$48$",
      "$60$",
      "$52$",
      "$56$"
    ],
    "correctAnswer": 2,
    "explanation": "Gọi số cần tìm là $\\overline{abc}$ ($a \\neq 0$, đôi một khác nhau, $c \\in \\{0, 2, 4\\}$). Bắt buộc chia 2 trường hợp: TH1 ($c = 0$): $a$ có $5$ cách chọn ($\\{1..5\\}$), $b$ có $4$ cách $\\implies 1 \\cdot 5 \\cdot 4 = 20$ số. TH2 ($c \\in \\{2, 4\\}$, $2$ cách): $a \\notin \\{0, c\\}$ có $4$ cách, $b \\notin \\{a, c\\}$ có $4$ cách $\\implies 2 \\cdot 4 \\cdot 4 = 32$ số. Tổng cộng $20 + 32 = 52$ số."
  },
  {
    "id": "c2_l6_q2",
    "chapterId": "c2",
    "lessonId": "l2_6",
    "lessonTitle": "§6 Chuyên đề: Nghiệm nguyên có Ràng buộc & Đếm Tập con",
    "difficulty": "Vận dụng",
    "question": "(Đề GK ĐHSP 2022–2023) Cho tập $S = \\{1, 2, \\dots, 20\\}$. Có bao nhiêu tập con $A \\subseteq S$ thỏa mãn đồng thời $\\min(A) = 8$ và $|A| \\ge 10$?",
    "options": [
      "$C_{13}^9 = 715$",
      "$298$",
      "$C_{12}^9 = 220$",
      "$299$"
    ],
    "correctAnswer": 3,
    "explanation": "Vì $\\min(A) = 8$, phần tử $8 \\in A$ (cố định $1$ phần tử) và các phần tử $1..7$ không thuộc $A$. Các phần tử còn lại của $A$ chọn từ tập $T = \\{9, 10, \\dots, 20\\}$ có $|T| = 12$ phần tử. Để $|A| \\ge 10$, ta cần chọn thêm $k \\ge 9$ phần tử từ $T$ ($9 \\le k \\le 12$): số tập con là $C_{12}^9 + C_{12}^{10} + C_{12}^{11} + C_{12}^{12} = 220 + 66 + 12 + 1 = 299$."
  },
  {
    "id": "c2_l6_q3",
    "chapterId": "c2",
    "lessonId": "l2_6",
    "lessonTitle": "§6 Chuyên đề: Nghiệm nguyên có Ràng buộc & Đếm Tập con",
    "difficulty": "Thông hiểu",
    "question": "(Đề GK ĐHSP 2023–2024) Cho tập $S = \\{1, 2, \\dots, 10\\}$. Có bao nhiêu tập con $A \\subseteq S$ có đúng $6$ phần tử ($|A| = 6$) và phần tử lớn nhất $\\max(A) = 8$?",
    "options": [
      "$C_7^5 = 21$",
      "$C_8^5 = 56$",
      "$C_7^6 = 7$",
      "$C_{10}^6 = 210$"
    ],
    "correctAnswer": 0,
    "explanation": "Để $\\max(A) = 8$ và $|A| = 6$: phần tử $8$ bắt buộc thuộc $A$, các phần tử $9, 10 \\notin A$. Còn lại $6 - 1 = 5$ phần tử được chọn tùy ý từ tập $\\{1, 2, 3, 4, 5, 6, 7\\}$ ($7$ phần tử). Số tập con thỏa mãn là $C_7^5 = 21$."
  },
  {
    "id": "c2_l6_q4",
    "chapterId": "c2",
    "lessonId": "l2_6",
    "lessonTitle": "§6 Chuyên đề: Nghiệm nguyên có Ràng buộc & Đếm Tập con",
    "difficulty": "Vận dụng",
    "question": "(Đề GK ĐHSP 2022–2023) Phương trình $x_1 + x_2 + x_3 = 15$ có bao nhiêu nghiệm nguyên không âm thỏa mãn đồng thời $x_1 > 2$ và $x_2 < 4$?",
    "options": [
      "$91$",
      "$46$",
      "$45$",
      "$56$"
    ],
    "correctAnswer": 1,
    "explanation": "Điều kiện $x_1 > 2 \\iff x_1 \\ge 3$. Đặt $y_1 = x_1 - 3 \\ge 0$, phương trình thành $y_1 + x_2 + x_3 = 12$ ($y_1, x_2, x_3 \\ge 0$). Tổng số nghiệm không ràng buộc cận trên là $K_3^{12} = C_{14}^{12} = 91$. Trừ đi các nghiệm vi phạm $x_2 \\ge 4$ (đặt $y_2 = x_2 - 4 \\ge 0 \\implies y_1 + y_2 + x_3 = 8$, có $K_3^8 = C_{10}^8 = 45$ nghiệm): kết quả là $91 - 45 = 46$."
  },
  {
    "id": "c2_l6_q5",
    "chapterId": "c2",
    "lessonId": "l2_6",
    "lessonTitle": "§6 Chuyên đề: Nghiệm nguyên có Ràng buộc & Đếm Tập con",
    "difficulty": "Vận dụng",
    "question": "(Đề GK ĐHSP 2023–2024) Phương trình $x_1 + x_2 + x_3 + x_4 = 16$ có bao nhiêu nghiệm nguyên không âm thỏa mãn $x_1 > 0$ và $x_2 \\le 4$?",
    "options": [
      "$816$",
      "$445$",
      "$530$",
      "$606$"
    ],
    "correctAnswer": 2,
    "explanation": "Đặt $y_1 = x_1 - 1 \\ge 0$ (vì $x_1 \\ge 1$), ta có $y_1 + x_2 + x_3 + x_4 = 15$. Tổng số nghiệm không âm là $K_4^{15} = C_{18}^{15} = C_{18}^3 = 816$. Số nghiệm vi phạm $x_2 \\ge 5$ (đặt $y_2 = x_2 - 5 \\ge 0 \\implies y_1 + y_2 + x_3 + x_4 = 10$) là $K_4^{10} = C_{13}^{10} = C_{13}^3 = 286$. Theo phần bù: $816 - 286 = 530$."
  },
  {
    "id": "c2_l6_q6",
    "chapterId": "c2",
    "lessonId": "l2_6",
    "lessonTitle": "§6 Chuyên đề: Nghiệm nguyên có Ràng buộc & Đếm Tập con",
    "difficulty": "Thông hiểu",
    "question": "(Đề CK ĐHSP 2022–2023) Số nghiệm nguyên của phương trình $x + y + z + t = 20$ thỏa mãn $x > 3, y \\ge 4, z \\ge 5, t \\ge 2$ là:",
    "options": [
      "$C_{23}^{20} = 1771$",
      "$C_9^6 = 84$",
      "$C_8^4 = 70$",
      "$C_8^5 = 56$"
    ],
    "correctAnswer": 3,
    "explanation": "Vì $x$ nguyên nên $x > 3 \\iff x \\ge 4$. Đặt $x' = x - 4 \\ge 0, y' = y - 4 \\ge 0, z' = z - 5 \\ge 0, t' = t - 2 \\ge 0$. Tổng cận dưới bằng $4 + 4 + 5 + 2 = 15$, phương trình trở thành $x' + y' + z' + t' = 20 - 15 = 5$. Số nghiệm là $K_4^5 = C_{4+5-1}^5 = C_8^5 = C_8^3 = 56$."
  },
  {
    "id": "c2_l6_q7",
    "chapterId": "c2",
    "lessonId": "l2_6",
    "lessonTitle": "§6 Chuyên đề: Nghiệm nguyên có Ràng buộc & Đếm Tập con",
    "difficulty": "Thông hiểu",
    "question": "(Đề CK ĐHSP 2023–2024) Số nghiệm nguyên của phương trình $x + y + z + t = 20$ thỏa mãn $x > 2, y > 4, z \\ge 3, t \\ge 3$ là:",
    "options": [
      "$C_9^6 = 84$",
      "$C_{11}^8 = 165$",
      "$C_8^5 = 56$",
      "$C_{10}^6 = 210$"
    ],
    "correctAnswer": 0,
    "explanation": "Chuyển bất đẳng thức ngặt về $\\ge$: $x > 2 \\iff x \\ge 3$ và $y > 4 \\iff y \\ge 5$. Tổng cận dưới bằng $3 + 5 + 3 + 3 = 14$. Đổi biến không âm thu được $x' + y' + z' + t' = 20 - 14 = 6$. Số nghiệm là $K_4^6 = C_{4+6-1}^6 = C_9^6 = C_9^3 = 84$."
  },
  {
    "id": "c2_l6_q8",
    "chapterId": "c2",
    "lessonId": "l2_6",
    "lessonTitle": "§6 Chuyên đề: Nghiệm nguyên có Ràng buộc & Đếm Tập con",
    "difficulty": "Thông hiểu",
    "question": "(Handout Buổi 4 – 26/10/2025) Bất phương trình $x + y + z \\le 15$ có bao nhiêu nghiệm nguyên không âm ($x, y, z \\ge 0$)?",
    "options": [
      "$C_{17}^{15} = 136$",
      "$C_{18}^{15} = 816$",
      "$C_{18}^{16} = 153$",
      "$C_{15}^3 = 455$"
    ],
    "correctAnswer": 1,
    "explanation": "Đặt thêm biến bù (slack variable) $w = 15 - (x + y + z) \\ge 0$. Mỗi nghiệm nguyên không âm của bất phương trình tương ứng song ánh với một nghiệm nguyên không âm của phương trình $4$ ẩn $x + y + z + w = 15$. Số nghiệm là $K_4^{15} = C_{4+15-1}^{15} = C_{18}^{15} = C_{18}^3 = 816$."
  },
  {
    "id": "c2_l6_q9",
    "chapterId": "c2",
    "lessonId": "l2_6",
    "lessonTitle": "§6 Chuyên đề: Nghiệm nguyên có Ràng buộc & Đếm Tập con",
    "difficulty": "Thông hiểu",
    "question": "(Handout Buổi 5 – 29/10/2025) Một cửa hàng văn phòng phẩm có $7$ màu giấy thủ công khác nhau (mỗi màu có rất nhiều tờ). Có bao nhiêu cách chọn mua $40$ tờ giấy màu (không phân biệt thứ tự các tờ cùng màu)?",
    "options": [
      "$7^{40}$",
      "$C_{40}^7$",
      "$K_7^{40} = C_{46}^{40} = C_{46}^6$",
      "$A_{46}^7$"
    ],
    "correctAnswer": 2,
    "explanation": "Gọi $x_i \\ge 0$ ($i = 1..7$) là số tờ giấy màu thứ $i$ được chọn. Bài toán quy về đếm nghiệm nguyên không âm của $x_1 + x_2 + \\dots + x_7 = 40$, tức tổ hợp lặp chập $40$ của $7$ phần tử: $K_7^{40} = \\overline{C}_7^{40} = C_{7+40-1}^{40} = C_{46}^{40} = C_{46}^6$."
  },
  {
    "id": "c2_l6_q10",
    "chapterId": "c2",
    "lessonId": "l2_6",
    "lessonTitle": "§6 Chuyên đề: Nghiệm nguyên có Ràng buộc & Đếm Tập con",
    "difficulty": "Vận dụng",
    "question": "(Handout Buổi 4 – 26/10/2025) Cần xếp $65$ cuộn quấn cán vợt cầu lông giống hệt nhau vào $4$ chiếc hộp khác nhau sao cho hộp thứ nhất có ít nhất $10$ cuộn, hộp thứ hai có ít nhất $15$ cuộn, còn hai hộp kia mỗi hộp có thể rỗng hoặc chứa tùy ý. Số cách xếp là:",
    "options": [
      "$C_{42}^3 = 11480$",
      "$C_{68}^{65} = 50116$",
      "$C_{44}^{40} = 135751$",
      "$C_{43}^{40} = C_{43}^3 = 12341$"
    ],
    "correctAnswer": 3,
    "explanation": "Ta có $x_1 + x_2 + x_3 + x_4 = 65$ với $x_1 \\ge 10, x_2 \\ge 15, x_3 \\ge 0, x_4 \\ge 0$. Đặt $x_1' = x_1 - 10 \\ge 0, x_2' = x_2 - 15 \\ge 0$, phương trình còn lại là $x_1' + x_2' + x_3 + x_4 = 65 - 25 = 40$. Số nghiệm là $K_4^{40} = C_{4+40-1}^{40} = C_{43}^{40} = C_{43}^3 = 12341$."
  },
  {
    "id": "c3_l1_hx1",
    "chapterId": "c3",
    "lessonId": "l3_1",
    "lessonTitle": "§1 Quan hệ & Quan hệ chiếu",
    "difficulty": "Thông hiểu",
    "question": "(Ghi chú ĐHSP – Trịnh Minh Huy) Trên tập hữu hạn $A$ có $|A| = n$ phần tử, số lượng quan hệ hai ngôi **phản xạ** trên $A$ bằng:",
    "options": [
      "$2^{n(n-1)}$",
      "$2^{n^2}$",
      "$2^{n(n+1)/2}$",
      "$3^{n(n-1)/2}$"
    ],
    "correctAnswer": 0,
    "explanation": "Ma trận biểu diễn quan hệ hai ngôi trên $A$ có kích thước $n \\times n$ gồm $n^2$ ô. Để quan hệ phản xạ, toàn bộ $n$ ô trên đường chéo chính $(i, i)$ bắt buộc bằng $1$; còn lại $n^2 - n = n(n - 1)$ ô ngoài đường chéo mỗi ô có $2$ lựa chọn ($0$ hoặc $1$). Vậy có $2^{n(n-1)}$ quan hệ phản xạ."
  },
  {
    "id": "c3_l1_hx2",
    "chapterId": "c3",
    "lessonId": "l3_1",
    "lessonTitle": "§1 Quan hệ & Quan hệ chiếu",
    "difficulty": "Thông hiểu",
    "question": "(Ghi chú ĐHSP – Trịnh Minh Huy) Trên tập hữu hạn $A$ có $|A| = n$ phần tử, số lượng quan hệ hai ngôi **đối xứng** trên $A$ bằng:",
    "options": [
      "$2^{n(n-1)/2}$",
      "$2^{n(n+1)/2}$",
      "$2^{n(n-1)}$",
      "$2^n \\cdot 3^{n(n-1)/2}$"
    ],
    "correctAnswer": 1,
    "explanation": "Quan hệ đối xứng tương ứng với ma trận nhị phân đối xứng qua đường chéo chính: $n$ phần tử đường chéo chính chọn tự do, và $\\frac{n(n-1)}{2}$ cặp đối xứng $\\{(i, j), (j, i)\\}$ ($i < j$) mỗi cặp chọn cùng giá trị $0$ hoặc $1$. Tổng số bit tự do là $n + \\frac{n(n-1)}{2} = \\frac{n(n+1)}{2}$, cho $2^{n(n+1)/2}$ quan hệ."
  },
  {
    "id": "c3_l1_hx3",
    "chapterId": "c3",
    "lessonId": "l3_1",
    "lessonTitle": "§1 Quan hệ & Quan hệ chiếu",
    "difficulty": "Vận dụng",
    "question": "(Ghi chú ĐHSP – Trịnh Minh Huy) Trên tập hữu hạn $A$ có $|A| = n$ phần tử, số lượng quan hệ hai ngôi **phản xứng** trên $A$ bằng:",
    "options": [
      "$2^{n(n-1)/2}$",
      "$3^{n(n-1)/2}$",
      "$2^n \\cdot 3^{n(n-1)/2}$",
      "$2^n \\cdot 2^{n(n-1)/2}$"
    ],
    "correctAnswer": 2,
    "explanation": "Trên đường chéo chính, $n$ cặp $(i, i)$ không vi phạm tính phản xứng nên có $2^n$ cách chọn. Với mỗi cặp chỉ số $i < j$ (có $\\frac{n(n-1)}{2}$ cặp), cặp ô $((i, j), (j, i))$ không được đồng thời bằng $(1, 1)$, tức chỉ được chọn trong $\\{(0, 0), (1, 0), (0, 1)\\}$ ($3$ cách). Theo quy tắc nhân có $2^n \\cdot 3^{n(n-1)/2}$ quan hệ."
  },
  {
    "id": "c3_l2_hx1",
    "chapterId": "c3",
    "lessonId": "l3_2",
    "lessonTitle": "§2 Quan hệ Tương đương & Phân hoạch",
    "difficulty": "Thông hiểu",
    "question": "(Đề CK ĐHSP 2024–2025) Trên tập $S = \\{2, 4, 5\\}$, xét quan hệ $\\mathcal{R}$ xác định bởi: $x \\mathcal{R} y \\iff (2x + y) \\vdots 3$. Liệt kê các phần tử của $\\mathcal{R}$ và các lớp tương đương của nó:",
    "options": [
      "$\\mathcal{R} = S \\times S$; chỉ có một lớp tương đương duy nhất $\\{2, 4, 5\\}$",
      "$\\mathcal{R} = \\{(2,2), (4,4), (5,5), (2,4), (4,2)\\}$; hai lớp tương đương là $\\{2, 4\\}$ và $\\{5\\}$",
      "$\\mathcal{R}$ không phải quan hệ tương đương vì không đối xứng",
      "$\\mathcal{R} = \\{(2,2), (4,4), (5,5), (2,5), (5,2)\\}$; hai lớp tương đương là $\\{2, 5\\}$ và $\\{4\\}$"
    ],
    "correctAnswer": 3,
    "explanation": "Ta nhận xét $2x + y = 3x - (x - y)$, nên $(2x + y) \\vdots 3 \\iff x \\equiv y \\pmod 3$! Trong tập $S = \\{2, 4, 5\\}$: $2 \\equiv 5 \\equiv 2 \\pmod 3$ và $4 \\equiv 1 \\pmod 3$. Do đó $\\mathcal{R}$ là quan hệ tương đương gồm $5$ cặp $\\{(2,2), (4,4), (5,5), (2,5), (5,2)\\}$ và chia $S$ thành $2$ lớp tương đương $\\{2, 5\\}, \\{4\\}$."
  },
  {
    "id": "c3_l2_hx2",
    "chapterId": "c3",
    "lessonId": "l3_2",
    "lessonTitle": "§2 Quan hệ Tương đương & Phân hoạch",
    "difficulty": "Thông hiểu",
    "question": "(Đề GK ĐHSP 2023–2024) Trên tập $A = \\{1, 2, 3, 4, 5, 6\\}$, xét quan hệ $x \\mathcal{R} y \\iff (x + y)$ là một số chẵn. Thương tập $A / \\mathcal{R}$ gồm các lớp tương đương nào và $|\\mathcal{R}|$ bằng bao nhiêu?",
    "options": [
      "$A / \\mathcal{R} = \\{\\{1, 3, 5\\}, \\{2, 4, 6\\}\\}$, và $|\\mathcal{R}| = 18$ cặp",
      "$A / \\mathcal{R} = \\{\\{1, 2\\}, \\{3, 4\\}, \\{5, 6\\}\\}$, và $|\\mathcal{R}| = 12$ cặp",
      "$A / \\mathcal{R} = \\{\\{1, 3, 5\\}, \\{2, 4, 6\\}\\}$, và $|\\mathcal{R}| = 9$ cặp",
      "$\\mathcal{R}$ không có tính bắc cầu"
    ],
    "correctAnswer": 0,
    "explanation": "Tổng $x + y$ chẵn $\\iff x$ và $y$ cùng tính chẵn lẻ ($x \\equiv y \\pmod 2$). Đây là quan hệ tương đương phân hoạch $A$ thành lớp lẻ $O = \\{1, 3, 5\\}$ ($3$ phần tử) và lớp chẵn $E = \\{2, 4, 6\\}$ ($3$ phần tử). Số cặp thuộc $\\mathcal{R}$ là $|O|^2 + |E|^2 = 3^2 + 3^2 = 18$."
  },
  {
    "id": "c3_l2_hx3",
    "chapterId": "c3",
    "lessonId": "l3_2",
    "lessonTitle": "§2 Quan hệ Tương đương & Phân hoạch",
    "difficulty": "Thông hiểu",
    "question": "(Đề GK ĐHSP 2022–2023) Trên tập số nguyên $\\mathbb{Z}$, quan hệ đồng dư $x \\mathcal{R} y \\iff (x - y) \\vdots 5$ chia $\\mathbb{Z}$ thành bao nhiêu lớp tương đương và lớp $[ -7 ]_{\\mathcal{R}}$ trùng với lớp nào?",
    "options": [
      "$5$ lớp tương đương, và $[-7] = [2] = \\{5k + 2 \\mid k \\in \\mathbb{Z}\\}$",
      "$5$ lớp tương đương, và $[-7] = [3] = \\{5k + 3 \\mid k \\in \\mathbb{Z}\\}$",
      "$6$ lớp tương đương, và $[-7] = [-2]$",
      "Vô số lớp tương đương vì $\\mathbb{Z}$ vô hạn"
    ],
    "correctAnswer": 1,
    "explanation": "Quan hệ đồng dư modulo $5$ chia $\\mathbb{Z}$ thành đúng $5$ lớp thặng dư $[0], [1], [2], [3], [4]$. Vì $-7 - 3 = -10 \\vdots 5$ (hay $-7 = 5(-2) + 3$), nên $[-7] = [3]$."
  },
  {
    "id": "c3_l3_hx1",
    "chapterId": "c3",
    "lessonId": "l3_3",
    "lessonTitle": "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    "difficulty": "Thông hiểu",
    "question": "(Đề CK ĐHSP 2022–2023) Xét tập thứ tự $(A, \\mid)$ với $A = \\{2, 3, 4, 6, 8\\}$ và quan hệ ước số $x \\mid y$. Tìm tập các phần tử tối tiểu, tối đại, phần tử nhỏ nhất và phần tử lớn nhất của $A$:",
    "options": [
      "Tối tiểu: $\\{2, 3\\}$; Tối đại: $\\{4, 6, 8\\}$; Nhỏ nhất: không có; Lớn nhất: không có",
      "Tối tiểu: $\\{2\\}$; Tối đại: $\\{8\\}$; Nhỏ nhất: $2$; Lớn nhất: $8$",
      "Tối tiểu: $\\{2, 3\\}$; Tối đại: $\\{6, 8\\}$; Nhỏ nhất: không có; Lớn nhất: không có",
      "Tối tiểu: $\\{2, 3\\}$; Tối đại: $\\{6, 8\\}$; Nhỏ nhất: $2$; Lớn nhất: $8$"
    ],
    "correctAnswer": 2,
    "explanation": "Trong $A = \\{2, 3, 4, 6, 8\\}$: không có phần tử nào của $A$ là ước thực sự của $2$ hay $3$ $\\implies$ tối tiểu là $\\{2, 3\\}$ (vì có $2$ tối tiểu khác nhau nên không có phần tử nhỏ nhất). Tương tự, $6$ và $8$ không là ước thực sự của phần tử nào trong $A$ (còn $4 \\mid 8$) $\\implies$ tối đại là $\\{6, 8\\}$ (không có phần tử lớn nhất)."
  },
  {
    "id": "c3_l3_hx2",
    "chapterId": "c3",
    "lessonId": "l3_3",
    "lessonTitle": "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
    "difficulty": "Thông hiểu",
    "question": "(Đề CK ĐHSP 2023–2024) Xét tập thứ tự $(\\mathcal{P}(E), \\subseteq)$ với $E = \\{a, b, c\\}$. Biểu đồ Hasse của cấu trúc này có bao nhiêu đỉnh, bao nhiêu cạnh nối trực tiếp (quan hệ trội), phần tử nhỏ nhất và phần tử lớn nhất là gì?",
    "options": [
      "$8$ đỉnh, $12$ cạnh; tối tiểu là $\\{\\{a\\}, \\{b\\}, \\{c\\}\\}$",
      "$8$ đỉnh, $8$ cạnh; nhỏ nhất là $\\emptyset$, lớn nhất là $\\{a, b, c\\}$",
      "$6$ đỉnh, $9$ cạnh; không có phần tử nhỏ nhất",
      "$8$ đỉnh, $12$ cạnh (hình lập phương $Q_3$); nhỏ nhất là $\\emptyset$, lớn nhất là $\\{a, b, c\\}$"
    ],
    "correctAnswer": 3,
    "explanation": "$|\\mathcal{P}(E)| = 2^3 = 8$ đỉnh. Tập $X$ bị trội trực tiếp bởi $Y$ khi $X \\subset Y$ và $|Y| = |X| + 1$: từ $\\emptyset$ lên mức $1$ có $3$ cạnh, mức $1$ lên mức $2$ có $3 \\times 2 = 6$ cạnh, mức $2$ lên $E$ có $3$ cạnh $\\implies$ tổng $3 + 6 + 3 = 12$ cạnh (khối lập phương 3 chiều). Phần tử nhỏ nhất duy nhất là $\\emptyset$, lớn nhất duy nhất là $E = \\{a, b, c\\}$."
  },
  {
    "id": "c3_l6_hx1",
    "chapterId": "c3",
    "lessonId": "l3_6",
    "lessonTitle": "§6 Dàn ước số $\\mathcal{U}_n$ & Thuật chia Euclide",
    "difficulty": "Thông hiểu",
    "question": "Phương trình đồng dư tuyến tính $6x \\equiv 9 \\pmod{15}$ có bao nhiêu nghiệm không đồng dư theo modulo $15$, và tập nghiệm đó là gì?",
    "options": [
      "$3$ nghiệm: $x \\equiv 4, 9, 14 \\pmod{15}$",
      "$1$ nghiệm duy nhất: $x \\equiv 4 \\pmod{15}$",
      "Vô nghiệm vì $\\gcd(6, 15) = 3 > 1$",
      "$3$ nghiệm: $x \\equiv 1, 6, 11 \\pmod{15}$"
    ],
    "correctAnswer": 0,
    "explanation": "Ta có $d = \\gcd(6, 15) = 3$. Vì $3 \\mid 9$, phương trình có đúng $d = 3$ nghiệm modulo $15$. Chia cả $3$ số cho $3$: $2x \\equiv 3 \\pmod 5 \\iff 2x \\equiv 8 \\pmod 5 \\iff x \\equiv 4 \\pmod 5$. Nâng lên modulo $15$ được $x \\equiv 4, 9, 14 \\pmod{15}$."
  },
  {
    "id": "c3_l6_hx2",
    "chapterId": "c3",
    "lessonId": "l3_6",
    "lessonTitle": "§6 Dàn ước số $\\mathcal{U}_n$ & Thuật chia Euclide",
    "difficulty": "Thông hiểu",
    "question": "Tìm phần tử nghịch đảo nhân của $7$ theo modulo $26$ (tức số $x \\in \\{0, 1, \\dots, 25\\}$ sao cho $7x \\equiv 1 \\pmod{26}$).",
    "options": [
      "$x = 11$",
      "$x = 15$",
      "$x = 19$",
      "$x = 3$"
    ],
    "correctAnswer": 1,
    "explanation": "Dùng thuật toán Euclide mở rộng: $26 = 7 \\cdot 3 + 5$; $7 = 5 \\cdot 1 + 2$; $5 = 2 \\cdot 2 + 1$. Thế ngược: $1 = 5 - 2(7 - 5) = 3 \\cdot 5 - 2 \\cdot 7 = 3(26 - 3 \\cdot 7) - 2 \\cdot 7 = 3 \\cdot 26 - 11 \\cdot 7$. Lấy modulo $26$: $(-11) \\cdot 7 \\equiv 1 \\pmod{26}$, mà $-11 \\equiv 15 \\pmod{26}$ (kiểm tra $7 \\times 15 = 105 = 4 \\times 26 + 1$)."
  },
  {
    "id": "c3_l6_hx3",
    "chapterId": "c3",
    "lessonId": "l3_6",
    "lessonTitle": "§6 Dàn ước số $\\mathcal{U}_n$ & Thuật chia Euclide",
    "difficulty": "Thông hiểu",
    "question": "Phương trình đồng dư nào dưới đây **vô nghiệm** nguyên?",
    "options": [
      "$14x \\equiv 21 \\pmod{35}$",
      "$12x \\equiv 15 \\pmod{21}$",
      "$12x \\equiv 10 \\pmod{18}$",
      "$9x \\equiv 6 \\pmod{15}$"
    ],
    "correctAnswer": 2,
    "explanation": "Phương trình $ax \\equiv b \\pmod m$ có nghiệm $\\iff \\gcd(a, m) \\mid b$. Xét $12x \\equiv 10 \\pmod{18}$: $\\gcd(12, 18) = 6$, nhưng $10$ không chia hết cho $6$ ($6 \\nmid 10$), nên phương trình vô nghiệm!"
  },
  {
    "id": "c4_l3_hx1",
    "chapterId": "c4",
    "lessonId": "l4_3",
    "lessonTitle": "§3 Mạng các cổng logic & Tối ưu hóa",
    "difficulty": "Thông hiểu",
    "question": "(Bài giảng ĐHSP – Nguyễn Ngọc Trung) Trong mạch bán cộng (Half-Adder) cộng hai bit nhị phân $x$ và $y$, bit Tổng $S$ (Sum) và bit Nhớ $C$ (Carry) có công thức hàm Bool là:",
    "options": [
      "$S = x\\overline{y}$, và $C = \\overline{x}y$",
      "$S = x \\lor y$, và $C = xy$",
      "$S = xy \\lor \\overline{x}\\overline{y}$, và $C = x \\lor y$",
      "$S = x\\overline{y} \\lor \\overline{x}y = x \\oplus y$, và $C = xy$"
    ],
    "correctAnswer": 3,
    "explanation": "Phép cộng nhị phân $1$ bit: $0+0=00, 0+1=01, 1+0=01, 1+1=10$. Do đó bit tổng $S = 1$ khi $x \\neq y$, tức $S = x\\overline{y} \\lor \\overline{x}y = x \\oplus y$; còn bit nhớ $C = 1$ duy nhất khi $x = y = 1$, tức $C = xy$."
  },
  {
    "id": "c4_l3_hx2",
    "chapterId": "c4",
    "lessonId": "l4_3",
    "lessonTitle": "§3 Mạng các cổng logic & Tối ưu hóa",
    "difficulty": "Thông hiểu",
    "question": "(Bài giảng ĐHSP – Nguyễn Ngọc Trung) Thiết kế mạch biểu quyết đa số (Majority Circuit) cho $3$ thành viên $x, y, z$: đầu ra $f(x, y, z) = 1$ khi và chỉ khi có **ít nhất $2$ người** đồng ý ($1$). Công thức đa thức tối tiểu của $f$ là:",
    "options": [
      "$f(x, y, z) = xy \\lor yz \\lor xz$",
      "$f(x, y, z) = xyz$",
      "$f(x, y, z) = x \\lor y \\lor z$",
      "$f(x, y, z) = xy \\lor \\overline{x}z$"
    ],
    "correctAnswer": 0,
    "explanation": "Các minterm có ít nhất hai bit $1$ là $m_3(011), m_5(101), m_6(110), m_7(111)$. Trên biểu đồ Karnaugh $3$ biến, $3$ cặp tế bào lớn $(m_3, m_7), (m_5, m_7), (m_6, m_7)$ đều là tế bào lớn cốt yếu, cho công thức tối tiểu đối xứng $f = xy \\lor yz \\lor xz$."
  },
  {
    "id": "c4_l3_hx3",
    "chapterId": "c4",
    "lessonId": "l4_3",
    "lessonTitle": "§3 Mạng các cổng logic & Tối ưu hóa",
    "difficulty": "Vận dụng",
    "question": "Trong mạch cộng toàn phần (Full-Adder) cộng hai bit $x, y$ cùng bit nhớ vào $c_{\\text{in}}$, công thức của bit nhớ ra $c_{\\text{out}}$ là:",
    "options": [
      "$c_{\\text{out}} = x \\oplus y \\oplus c_{\\text{in}}$",
      "$c_{\\text{out}} = xy \\lor y c_{\\text{in}} \\lor x c_{\\text{in}}$",
      "$c_{\\text{out}} = x y c_{\\text{in}}$",
      "$c_{\\text{out}} = x \\lor y \\lor c_{\\text{in}}$"
    ],
    "correctAnswer": 1,
    "explanation": "Tổng $x + y + c_{\\text{in}} \\ge 2$ sinh ra bit nhớ $c_{\\text{out}} = 1$ khi và chỉ khi ít nhất $2$ trong $3$ đầu vào $(x, y, c_{\\text{in}})$ bằng $1$. Do đó $c_{\\text{out}}$ chính là hàm đa số $xy \\lor y c_{\\text{in}} \\lor x c_{\\text{in}}$ (còn bit tổng $S = x \\oplus y \\oplus c_{\\text{in}}$)."
  },
  {
    "id": "c4_l4_hx1",
    "chapterId": "c4",
    "lessonId": "l4_4",
    "lessonTitle": "§4 Phương pháp Biểu đồ Karnaugh",
    "difficulty": "Thông hiểu",
    "question": "(Đề CK ĐHSP 2022–2023) Dùng biểu đồ Karnaugh tối tiểu hóa hàm Bool $4$ biến $f(x, y, z, t) = x\\overline{y}z \\lor xyt \\lor \\overline{x}y\\overline{z} \\lor xt$. Công thức đa thức tối tiểu của $f$ là:",
    "options": [
      "$f = xt \\lor y\\overline{z} \\lor x\\overline{y}z$",
      "$f = xyt \\lor \\overline{x}y\\overline{z} \\lor x\\overline{y}z$",
      "$f = xt \\lor \\overline{x}y\\overline{z} \\lor x\\overline{y}z$",
      "$f = x \\lor \\overline{x}y\\overline{z}$"
    ],
    "correctAnswer": 2,
    "explanation": "Ta thấy ngay $xyt \\lor xt = xt$ (luật hấp thụ vì tế bào $4$ ô $xt$ chứa trọn tế bào $2$ ô $xyt$). Các minterm của $f$ là $\\sum m(4, 5, 9, 10, 11, 13, 15)$. Tế bào $4$ ô $xt = \\{9, 11, 13, 15\\}$ là cốt yếu (chứa $m_9, m_{13}, m_{15}$), tế bào $2$ ô $\\overline{x}y\\overline{z} = \\{4, 5\\}$ cốt yếu (chứa $m_4, m_5$), và tế bào $2$ ô $x\\overline{y}z = \\{10, 11\\}$ cốt yếu (duy nhất phủ $m_{10}$). Vậy $f = xt \\lor \\overline{x}y\\overline{z} \\lor x\\overline{y}z$."
  },
  {
    "id": "c4_l4_hx2",
    "chapterId": "c4",
    "lessonId": "l4_4",
    "lessonTitle": "§4 Phương pháp Biểu đồ Karnaugh",
    "difficulty": "Vận dụng",
    "question": "(Đề CK ĐHSP 2023–2024) Cho hàm Bool $4$ biến $f(x, y, z, t) = xz\\overline{t} \\lor xyt \\lor \\overline{x}y\\overline{z} \\lor \\overline{y}z\\overline{t}$. Danh sách minterm của $f$ là $\\sum m(2, 4, 5, 10, 13, 14, 15)$. Tất cả các tế bào lớn cốt yếu (Essential Prime Implicants) của $f$ là:",
    "options": [
      "$\\overline{y}z\\overline{t}$, $\\overline{x}y\\overline{z}$ và $xyz$",
      "$\\overline{y}z\\overline{t}$, $\\overline{x}y\\overline{z}$, $xyt$ và $xz\\overline{t}$",
      "Chỉ có $\\overline{y}z\\overline{t}$ và $\\overline{x}y\\overline{z}$",
      "$\\overline{y}z\\overline{t}$, $\\overline{x}y\\overline{z}$ và $xyt$"
    ],
    "correctAnswer": 3,
    "explanation": "Các tế bào lớn (PI) của $f$: $\\overline{y}z\\overline{t} = \\{2, 10\\}$ (duy nhất phủ $m_2 \\implies$ cốt yếu), $\\overline{x}y\\overline{z} = \\{4, 5\\}$ (duy nhất phủ $m_4, m_5 \\implies$ cốt yếu), $xyt = \\{13, 15\\}$ (duy nhất phủ $m_{13} \\implies$ cốt yếu), còn $m_{14}$ được phủ bởi hai PI cùng bậc $3$ biến là $xz\\overline{t} = \\{10, 14\\}$ và $xyz = \\{14, 15\\}$ nên hai PI này không cốt yếu."
  },
  {
    "id": "c4_l4_hx3",
    "chapterId": "c4",
    "lessonId": "l4_4",
    "lessonTitle": "§4 Phương pháp Biểu đồ Karnaugh",
    "difficulty": "Vận dụng",
    "question": "(Đề CK ĐHSP 2023–2024) Với hàm Bool $f(x, y, z, t) = \\sum m(2, 4, 5, 10, 13, 14, 15)$ ở câu trên, hàm $f$ có bao nhiêu công thức đa thức tối tiểu (Minimal SOP) và chúng là gì?",
    "options": [
      "Có đúng $2$ công thức tối tiểu đồng hạng: $\\overline{y}z\\overline{t} \\lor \\overline{x}y\\overline{z} \\lor xyt \\lor xz\\overline{t}$ và $\\overline{y}z\\overline{t} \\lor \\overline{x}y\\overline{z} \\lor xyt \\lor xyz$",
      "Có duy nhất $1$ công thức tối tiểu: $\\overline{y}z\\overline{t} \\lor \\overline{x}y\\overline{z} \\lor xyt \\lor xz\\overline{t} \\lor xyz$",
      "Có duy nhất $1$ công thức tối tiểu: $\\overline{y}z\\overline{t} \\lor \\overline{x}y\\overline{z} \\lor xyt$",
      "Có $3$ công thức tối tiểu khác nhau"
    ],
    "correctAnswer": 0,
    "explanation": "Ba EPI $\\overline{y}z\\overline{t}, \\overline{x}y\\overline{z}, xyt$ đã phủ $\\{2, 4, 5, 10, 13, 15\\}$, chỉ còn sót duy nhất ô $m_{14}$. Để phủ $m_{14}$, ta chọn một trong hai tế bào $2$ ô đồng kích thước ($3$ biến): hoặc $xz\\overline{t} = \\{10, 14\\}$, hoặc $xyz = \\{14, 15\\}$. Cả hai lựa chọn đều tốn đúng $4$ tích ($12$ literal) nên đều là công thức tối tiểu."
  },
  {
    "id": "c4_l4_hx4",
    "chapterId": "c4",
    "lessonId": "l4_4",
    "lessonTitle": "§4 Phương pháp Biểu đồ Karnaugh",
    "difficulty": "Vận dụng",
    "question": "(Đề CK ĐHSP 2024–2025) Tối tiểu hóa hàm Bool $4$ biến $f(x, y, z, t) = \\sum m(0, 1, 5, 6, 7, 9, 10)$ bằng biểu đồ Karnaugh, khẳng định nào sau đây đúng?",
    "options": [
      "Ô $m_{10}$ ghép được với ô $m_2$ tạo thành tế bào lớn $2$ ô $\\overline{y}z\\overline{t}$",
      "Hàm có $4$ tế bào lớn cốt yếu là $\\overline{x}\\overline{y}\\overline{z}, \\overline{x}yz, \\overline{y}\\overline{z}t, x\\overline{y}z\\overline{t}$ và một công thức tối tiểu là $f = \\overline{x}\\overline{y}\\overline{z} \\lor \\overline{x}yz \\lor \\overline{x}\\overline{z}t \\lor \\overline{y}\\overline{z}t \\lor x\\overline{y}z\\overline{t}$",
      "Công thức đa thức tối tiểu của $f$ chỉ gồm $3$ hạng tử tích",
      "Tất cả $7$ minterm ghép được thành một tế bào lớn $4$ ô và ba tế bào $2$ ô"
    ],
    "correctAnswer": 1,
    "explanation": "Xét $\\sum m(0, 1, 5, 6, 7, 9, 10)$: $m_0$ chỉ ghép được với $m_1 \\implies \\overline{x}\\overline{y}\\overline{z} = \\{0, 1\\}$ (EPI); $m_6$ chỉ ghép với $m_7 \\implies \\overline{x}yz = \\{6, 7\\}$ (EPI); $m_9$ chỉ ghép với $m_1 \\implies \\overline{y}\\overline{z}t = \\{1, 9\\}$ (EPI); $m_{10}(1010)$ không có ô kề nào bằng $1$ (vì $m_2 = m_8 = m_{11} = m_{14} = 0$) nên đứng cô lập thành $x\\overline{y}z\\overline{t}$ (EPI). Sau cùng ô $m_5$ được phủ bởi một trong hai PI đồng hạng $3$ biến là $\\overline{x}\\overline{z}t = \\{1, 5\\}$ hoặc $\\overline{x}yt = \\{5, 7\\}$."
  },
  {
    "id": "c4_l4_hx5",
    "chapterId": "c4",
    "lessonId": "l4_4",
    "lessonTitle": "§4 Phương pháp Biểu đồ Karnaugh",
    "difficulty": "Thông hiểu",
    "question": "Trên biểu đồ Karnaugh $4$ biến $(x, y, z, t)$, bốn ô ở **bốn góc ngoài cùng** của bảng là $m_0(0000), m_2(0010), m_8(1000), m_{10}(1010)$ ghép lại tạo thành một tế bào lớn $4$ ô ứng với đơn thức nào?",
    "options": [
      "$\\overline{y}z$",
      "$\\overline{x}\\overline{z}$",
      "$\\overline{y}\\overline{t}$",
      "$\\overline{x}\\overline{y}\\overline{z}\\overline{t}$"
    ],
    "correctAnswer": 2,
    "explanation": "Bốn ô góc $(0000, 0010, 1000, 1010)$ có $x \\in \\{0, 1\\}$ (đổi dấu $\\to$ triệt tiêu), $y = 0$ (cố định $\\to \\overline{y}$), $z \\in \\{0, 1\\}$ (đổi dấu $\\to$ triệt tiêu), và $t = 0$ (cố định $\\to \\overline{t}$). Nhờ tính cuộn tròn hai mép đối diện của bảng Karnaugh, $4$ góc ghép thành tế bào lớn $\\overline{y}\\overline{t}$."
  },
  {
    "id": "c4_l5_hx1",
    "chapterId": "c4",
    "lessonId": "l4_5",
    "lessonTitle": "§5 Phương pháp Thỏa thuận (Consensus Method)",
    "difficulty": "Thông hiểu",
    "question": "Tìm tích thỏa thuận (consensus term) của hai đơn thức Bool $P = x\\overline{y}z$ và $Q = yzt$:",
    "options": [
      "Không tồn tại tích thỏa thuận vì có $2$ biến đối ngẫu",
      "$x\\overline{y}yzt = 0$",
      "$xz$",
      "$xzt$"
    ],
    "correctAnswer": 3,
    "explanation": "Hai đơn thức $P = x\\overline{y}z$ và $Q = yzt$ có đúng một cặp biến đối ngẫu duy nhất là $\\overline{y}$ và $y$. Bỏ cặp đối ngẫu này và lấy hội các literal còn lại (rút gọn $z \\cdot z = z$), ta được tích thỏa thuận $C(P, Q) = xzt$."
  },
  {
    "id": "c4_l5_hx2",
    "chapterId": "c4",
    "lessonId": "l4_5",
    "lessonTitle": "§5 Phương pháp Thỏa thuận (Consensus Method)",
    "difficulty": "Thông hiểu",
    "question": "Xét hai đơn thức $P = xy\\overline{z}$ và $Q = \\overline{x}zt$. Tích thỏa thuận của $P$ và $Q$ là gì?",
    "options": [
      "Không tồn tại tích thỏa thuận khác $0$ vì $P$ và $Q$ có tới $2$ cặp biến đối ngẫu ($x, \\overline{x}$ và $\\overline{z}, z$)",
      "$yt$",
      "$x\\overline{z}t$",
      "$\\overline{x}yt$"
    ],
    "correctAnswer": 0,
    "explanation": "Quy tắc thỏa thuận $AB \\lor \\overline{A}C = AB \\lor \\overline{A}C \\lor BC$ chỉ áp dụng khi hai đơn thức đối lập ở **đúng một** biến duy nhất. Ở đây nếu khử $x, \\overline{x}$ thì phần còn lại $y\\overline{z} \\cdot zt = 0$; nếu khử $z, \\overline{z}$ thì $xy \\cdot \\overline{x}t = 0$. Do đó không sinh ra tích thỏa thuận khác $0$."
  },
  {
    "id": "c4_l5_hx3",
    "chapterId": "c4",
    "lessonId": "l4_5",
    "lessonTitle": "§5 Phương pháp Thỏa thuận (Consensus Method)",
    "difficulty": "Vận dụng",
    "question": "Áp dụng định lý thỏa thuận $AB \\lor \\overline{A}C \\lor BC = AB \\lor \\overline{A}C$, rút gọn biểu thức $f(x, y, z, t) = xy \\lor \\overline{x}zt \\lor yzt$ ta được:",
    "options": [
      "$f = xy \\lor yzt$",
      "$f = xy \\lor \\overline{x}zt$",
      "$f = \\overline{x}zt \\lor yzt$",
      "Không thể rút gọn thêm được nữa"
    ],
    "correctAnswer": 1,
    "explanation": "Đặt $A = x, B = y, C = zt$. Tích thỏa thuận của $xy$ và $\\overline{x}zt$ chính là $BC = yzt$. Do đó hạng tử dư thừa $yzt$ bị hấp thụ hoàn toàn bởi $xy \\lor \\overline{x}zt$, cho kết quả tối tiểu $f = xy \\lor \\overline{x}zt$."
  }
];
