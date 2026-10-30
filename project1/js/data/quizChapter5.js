/**
 * Ngân hàng câu hỏi Chương 5: Hệ thức Đệ quy & Hàm sinh (105 câu)
 * Biên soạn bám sát chương trình Toán Rời Rạc – Khoa CNTT, ĐHSP TP.HCM & Giáo trình GS. Nguyễn Hữu Anh.
 * Chuẩn hóa 100% ký hiệu toán học bằng KaTeX ($...$), không sử dụng ký tự thô '^'.
 */

const QUIZ_DATA_CH5 = [
  {
    "id": "c5_l1_q1",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Nhận biết",
    "question": "Một hệ thức đệ quy (truy hồi) cho dãy số $\\{a_n\\}$ là công thức biểu diễn số hạng $a_n$ thông qua:",
    "options": [
      "Một hoặc nhiều số hạng đi trước $a_0, a_1, \\dots, a_{n-1}$ với $n \\ge n_0$",
      "Chỉ duy nhất chỉ số $n$ mà không phụ thuộc các số hạng đi trước",
      "Tổng vô hạn của tất cả các số hạng trong dãy",
      "Đạo hàm bậc nhất của hàm liên tục $f(x)$"
    ],
    "correctAnswer": 0,
    "explanation": "Theo định nghĩa, hệ thức đệ quy (recurrence relation) của dãy $\\{a_n\\}$ là phương trình biểu diễn $a_n$ theo một hay nhiều số hạng đứng trước nó ($a_{n-1}, a_{n-2}, \\dots$) với mọi $n \\ge n_0$."
  },
  {
    "id": "c5_l1_q2",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Nhận biết",
    "question": "Vai trò của các điều kiện đầu (initial conditions) trong bài toán hệ thức đệ quy là gì?",
    "options": [
      "Chỉ dùng để kiểm tra chẵn lẻ của $n$",
      "Xác định duy nhất một dãy nghiệm cụ thể từ họ nghiệm tổng quát",
      "Làm thay đổi bậc của phương trình đặc trưng",
      "Không ảnh hưởng đến giá trị các số hạng $a_n$ khi $n$ lớn"
    ],
    "correctAnswer": 1,
    "explanation": "Một hệ thức đệ quy bậc $k$ có vô số dãy nghiệm phụ thuộc $k$ hằng số tùy ý. Cần đúng $k$ điều kiện đầu (ví dụ $a_0, a_1, \\dots, a_{k-1}$) để xác định duy nhất dãy số."
  },
  {
    "id": "c5_l1_q3",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Nhận biết",
    "question": "Dãy số Fibonacci kinh điển $\\{F_n\\}$ được định nghĩa bởi hệ thức truy hồi nào sau đây?",
    "options": [
      "$F_0 = 0, F_1 = 1$ và $F_n = F_{n-1} \\cdot F_{n-2}$ với $n \\ge 2$",
      "$F_0 = 1, F_1 = 2$ và $F_n = 2F_{n-1} - F_{n-2}$ với $n \\ge 2$",
      "$F_0 = 0, F_1 = 1$ và $F_n = F_{n-1} + F_{n-2}$ với $n \\ge 2$",
      "$F_0 = 1, F_1 = 1$ và $F_n = 2F_{n-1} + 1$ với $n \\ge 2$"
    ],
    "correctAnswer": 2,
    "explanation": "Dãy Fibonacci chuẩn có điều kiện đầu $F_0 = 0, F_1 = 1$ và quy tắc truy hồi $F_n = F_{n-1} + F_{n-2}$ ($n \\ge 2$), cho các số hạng: $0, 1, 1, 2, 3, 5, 8, 13, 21, \\dots$"
  },
  {
    "id": "c5_l1_q4",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Nhận biết",
    "question": "Cho dãy $\\{a_n\\}$ xác định bởi $a_0 = 2, a_1 = 3$ và $a_n = 2a_{n-1} - a_{n-2}$ ($n \\ge 2$). Giá trị của $a_4$ là:",
    "options": [
      "$5$",
      "$8$",
      "$7$",
      "$6$"
    ],
    "correctAnswer": 3,
    "explanation": "Tính lần lượt: $a_2 = 2(3) - 2 = 4$; $a_3 = 2(4) - 3 = 5$; $a_4 = 2(5) - 4 = 6$ (đây là cấp số cộng $a_n = n + 2$)."
  },
  {
    "id": "c5_l1_q5",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Nhận biết",
    "question": "Trong bài toán Tháp Hà Nội với $n$ đĩa ($n \\ge 1$), gọi $H_n$ là số lần di chuyển đĩa ít nhất để chuyển toàn bộ $n$ đĩa sang cọc đích. Hệ thức đệ quy của $H_n$ là:",
    "options": [
      "$H_n = 2H_{n-1} + 1, \\; H_1 = 1$",
      "$H_n = H_{n-1} + 2, \\; H_1 = 1$",
      "$H_n = 2H_{n-1} - 1, \\; H_1 = 1$",
      "$H_n = H_{n-1} + H_{n-2}, \\; H_1 = 1$"
    ],
    "correctAnswer": 0,
    "explanation": "Để chuyển $n$ đĩa: chuyển $n-1$ đĩa trên sang cọc trung gian ($H_{n-1}$ bước), chuyển đĩa lớn nhất sang cọc đích ($1$ bước), rồi chuyển $n-1$ đĩa từ cọc trung gian sang cọc đích ($H_{n-1}$ bước). Vậy $H_n = 2H_{n-1} + 1$ với $H_1 = 1$."
  },
  {
    "id": "c5_l1_q6",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Thông hiểu",
    "question": "Công thức nghiệm tổng quát của bài toán Tháp Hà Nội $H_n = 2H_{n-1} + 1$ với $H_1 = 1$ là:",
    "options": [
      "$H_n = 2^n$",
      "$H_n = 2^n - 1$",
      "$H_n = 2^{n-1} + 1$",
      "$H_n = n^2$"
    ],
    "correctAnswer": 1,
    "explanation": "Cộng $1$ vào hai vế: $H_n + 1 = 2(H_{n-1} + 1)$. Đặt $b_n = H_n + 1$, ta có $b_1 = 2$ và $b_n = 2b_{n-1} \\implies b_n = 2^n \\implies H_n = 2^n - 1$."
  },
  {
    "id": "c5_l1_q7",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Thông hiểu",
    "question": "Gọi $a_n$ là số xâu nhị phân độ dài $n$ ($n \\ge 1$) không chứa hai chữ số $0$ liên tiếp (`00`). Hệ thức đệ quy và điều kiện đầu đúng của $a_n$ là:",
    "options": [
      "$a_n = 2a_{n-1} - 1$ với $a_1 = 2$",
      "$a_n = a_{n-1} + a_{n-2}$ với $a_1 = 1, a_2 = 2$",
      "$a_n = a_{n-1} + a_{n-2}$ với $a_1 = 2, a_2 = 3$",
      "$a_n = 2a_{n-1} + a_{n-2}$ với $a_1 = 2, a_2 = 4$"
    ],
    "correctAnswer": 2,
    "explanation": "Xét ký tự cuối của xâu hợp lệ độ dài $n$: nếu kết thúc bằng `1` thì $n-1$ vị trí đầu là xâu hợp lệ bất kỳ ($a_{n-1}$ xâu); nếu kết thúc bằng `0` thì ký tự kề trước bắt buộc là `1`, tức hậu tố `10`, còn $n-2$ vị trí đầu có $a_{n-2}$ cách. Với $n=1$: `{0, 1}` $\\implies a_1 = 2$; $n=2$: `{01, 10, 11}` $\\implies a_2 = 3$."
  },
  {
    "id": "c5_l1_q8",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Thông hiểu",
    "question": "Có bao nhiêu xâu nhị phân độ dài $6$ không chứa hai bit `1` đứng liền nhau?",
    "options": [
      "$13$",
      "$18$",
      "$34$",
      "$21$"
    ],
    "correctAnswer": 3,
    "explanation": "Hoàn toàn đối xứng với bài toán không chứa `00`: $a_1 = 2, a_2 = 3$ và $a_n = a_{n-1} + a_{n-2}$. Tính tiếp: $a_3 = 5, a_4 = 8, a_5 = 13, a_6 = 21$."
  },
  {
    "id": "c5_l1_q9",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Thông hiểu",
    "question": "(Đề CK ĐHSP 2024–2025) Gọi $a_n$ là số cách trả số tiền $n$ đồng bằng các đồng xu mệnh giá $1$ đồng và $2$ đồng, biết rằng **thứ tự bỏ các đồng xu khác nhau được tính là khác nhau**. Hệ thức truy hồi của $a_n$ ($n \\ge 2$) là:",
    "options": [
      "$a_n = a_{n-1} + a_{n-2}$ với $a_0 = 1, a_1 = 1$",
      "$a_n = a_{n-2} + 1$ với $a_0 = 1, a_1 = 1$",
      "$a_n = 2a_{n-1}$ với $a_0 = 1, a_1 = 1$",
      "$a_n = a_{n-1} + 2a_{n-2}$ với $a_0 = 1, a_1 = 1$"
    ],
    "correctAnswer": 0,
    "explanation": "Khi phân biệt thứ tự đồng xu: nếu đồng xu đầu tiên bỏ vào là $1$ đồng thì còn $n-1$ đồng ($a_{n-1}$ cách); nếu đồng xu đầu tiên là $2$ đồng thì còn $n-2$ đồng ($a_{n-2}$ cách). Do hai trường hợp rời nhau, $a_n = a_{n-1} + a_{n-2}$ với $a_0 = 1, a_1 = 1$."
  },
  {
    "id": "c5_l1_q10",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Vận dụng",
    "question": "(Đề CK ĐHSP 2024–2025) Gọi $c_n$ là số cách đổi $n$ đồng ra các đồng xu $1$ đồng và $2$ đồng sao cho **không phân biệt thứ tự** (chỉ quan tâm số lượng mỗi loại xu). Hệ thức đệ quy và công thức của $c_n$ là:",
    "options": [
      "$c_n = c_{n-1} + c_{n-2}$ ($n \\ge 2$)",
      "$c_n = c_{n-2} + 1$ ($n \\ge 2$), hay $c_n = \\lfloor \\frac{n}{2} \\rfloor + 1$",
      "$c_n = 2c_{n-2}$ ($n \\ge 2$), hay $c_n = 2^{\\lfloor n/2 \\rfloor}$",
      "$c_n = c_{n-1} + 1$ ($n \\ge 1$), hay $c_n = n + 1$"
    ],
    "correctAnswer": 1,
    "explanation": "Khi không kể thứ tự, ta chia làm 2 trường hợp loại trừ: (1) Không dùng đồng $2$ đồng nào: có duy nhất $1$ cách (toàn xu $1$ đồng); (2) Có dùng ít nhất một đồng $2$ đồng: bớt đi một đồng $2$ đồng còn $c_{n-2}$ cách. Vậy $c_n = c_{n-2} + 1$ với $c_0 = 1, c_1 = 1$, suy ra $c_n = \\lfloor \\frac{n}{2} \\rfloor + 1$."
  },
  {
    "id": "c5_l1_q11",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Thông hiểu",
    "question": "Một người bước lên cầu thang gồm $n$ bậc, mỗi bước có thể bước $1$ bậc, $2$ bậc hoặc $3$ bậc. Gọi $s_n$ là số cách lên hết $n$ bậc thang. Hệ thức đệ quy của $s_n$ ($n \\ge 4$) là:",
    "options": [
      "$s_n = s_{n-1} + s_{n-2} + s_{n-3}$ với $s_1 = 1, s_2 = 2, s_3 = 3$",
      "$s_n = s_{n-1} + 2s_{n-2} + 3s_{n-3}$ với $s_1 = 1, s_2 = 2, s_3 = 3$",
      "$s_n = s_{n-1} + s_{n-2} + s_{n-3}$ với $s_1 = 1, s_2 = 2, s_3 = 4$",
      "$s_n = 3s_{n-1}$ với $s_1 = 1$"
    ],
    "correctAnswer": 2,
    "explanation": "Bước đầu tiên có thể là $1, 2$ hoặc $3$ bậc, để lại $n-1, n-2$ hoặc $n-3$ bậc: $s_n = s_{n-1} + s_{n-2} + s_{n-3}$. Điều kiện đầu: $s_1 = 1$ (`1`), $s_2 = 2$ (`1+1, 2`), $s_3 = 4$ (`1+1+1, 1+2, 2+1, 3`)."
  },
  {
    "id": "c5_l1_q12",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Thông hiểu",
    "question": "Gọi $t_n$ là số cách lát kín hình chữ nhật kích thước $2 \\times n$ bằng các viên gạch domino kích thước $2 \\times 1$ (có thể đặt dọc $2 \\times 1$ hoặc đặt ngang $1 \\times 2$). Hệ thức truy hồi của $t_n$ ($n \\ge 3$) là:",
    "options": [
      "$t_n = 2t_{n-1} + t_{n-2}$ với $t_1 = 1, t_2 = 2$",
      "$t_n = t_{n-1} + 2t_{n-2}$ với $t_1 = 1, t_2 = 3$",
      "$t_n = 2t_{n-1}$ với $t_1 = 1$",
      "$t_n = t_{n-1} + t_{n-2}$ với $t_1 = 1, t_2 = 2$"
    ],
    "correctAnswer": 3,
    "explanation": "Tại cột đầu tiên của bảng $2 \\times n$: nếu đặt $1$ viên dọc $2 \\times 1$ thì phần còn lại là $2 \\times (n-1)$ có $t_{n-1}$ cách; nếu đặt ngang thì phải đặt $2$ viên ngang chồng lên nhau phủ kín $2 \\times 2$, phần còn lại là $2 \\times (n-2)$ có $t_{n-2}$ cách. Vậy $t_n = t_{n-1} + t_{n-2}$ với $t_1 = 1, t_2 = 2$."
  },
  {
    "id": "c5_l1_q13",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Vận dụng",
    "question": "Gọi $u_n$ là số cách lát kín bảng $2 \\times n$ bằng các viên domino $2 \\times 1$ và các viên gạch vuông $2 \\times 2$. Hệ thức truy hồi của $u_n$ ($n \\ge 3$) là:",
    "options": [
      "$u_n = u_{n-1} + 2u_{n-2}$ với $u_1 = 1, u_2 = 3$",
      "$u_n = 2u_{n-1} + u_{n-2}$ với $u_1 = 1, u_2 = 3$",
      "$u_n = u_{n-1} + u_{n-2} + 1$ với $u_1 = 1, u_2 = 2$",
      "$u_n = 2u_{n-1} + 2u_{n-2}$ với $u_1 = 1, u_2 = 4$"
    ],
    "correctAnswer": 0,
    "explanation": "Ở cột đầu: (1) Đặt $1$ domino dọc $2 \\times 1 \\implies u_{n-1}$ cách; (2) Phủ khối $2 \\times 2$ đầu tiên bằng $2$ domino ngang chồng nhau HOẶC $1$ viên vuông $2 \\times 2 \\implies 2u_{n-2}$ cách. Điều kiện đầu: $u_1 = 1, u_2 = 3$. Vậy $u_n = u_{n-1} + 2u_{n-2}$."
  },
  {
    "id": "c5_l1_q14",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Thông hiểu",
    "question": "Trên mặt phẳng cho $n$ đường thẳng ở vị trí tổng quát (không có $2$ đường nào song song, không có $3$ đường nào đồng quy). Gọi $R_n$ là số miền mặt phẳng được chia ra. Hệ thức truy hồi của $R_n$ là:",
    "options": [
      "$R_n = 2R_{n-1}$ với $R_0 = 1$",
      "$R_n = R_{n-1} + n$ với $R_0 = 1$",
      "$R_n = R_{n-1} + n - 1$ với $R_0 = 1$",
      "$R_n = R_{n-1} + 2n$ với $R_0 = 1$"
    ],
    "correctAnswer": 1,
    "explanation": "Khi vẽ thêm đường thẳng thứ $n$, nó cắt $n-1$ đường thẳng trước đó tại $n-1$ giao điểm phân biệt. Các giao điểm này chia đường thẳng thứ $n$ thành $n$ đoạn/tia, mỗi đoạn/tia chia đôi một miền cũ làm tăng thêm đúng $n$ miền mới: $R_n = R_{n-1} + n$, $R_0 = 1$ (nghiệm $R_n = \\frac{n(n+1)}{2} + 1$)."
  },
  {
    "id": "c5_l1_q15",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Vận dụng",
    "question": "Gọi $a_n$ là số xâu tam phân (lập từ bảng chữ cái $\\{0, 1, 2\\}$) có độ dài $n$ mà không chứa hai chữ số `0` liên tiếp (`00`). Hệ thức đệ quy của $a_n$ ($n \\ge 3$) là:",
    "options": [
      "$a_n = 3a_{n-1} - a_{n-2}$ với $a_1 = 3, a_2 = 8$",
      "$a_n = 2a_{n-1} + a_{n-2}$ với $a_1 = 3, a_2 = 8$",
      "$a_n = 2a_{n-1} + 2a_{n-2}$ với $a_1 = 3, a_2 = 8$",
      "$a_n = a_{n-1} + 2a_{n-2}$ với $a_1 = 3, a_2 = 7$"
    ],
    "correctAnswer": 2,
    "explanation": "Xét ký tự cuối của xâu hợp lệ độ dài $n$: nếu ký tự cuối là `1` hoặc `2` ($2$ lựa chọn) thì $n-1$ ký tự đầu tùy ý hợp lệ ($2a_{n-1}$ xâu); nếu ký tự cuối là `0` thì ký tự thứ $n-1$ phải là `1` hoặc `2` ($2$ lựa chọn), còn $n-2$ ký tự đầu hợp lệ ($2a_{n-2}$ xâu). Với $n=1$: $3$ xâu; $n=2$: $3^2 - 1 = 8$ xâu."
  },
  {
    "id": "c5_l1_q16",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Thông hiểu",
    "question": "Một tài khoản tiết kiệm ban đầu gửi $P_0$ đồng với lãi suất kép $6\\%$/năm (lãi nhập vốn cuối mỗi năm). Số tiền $P_n$ sau $n$ năm thỏa mãn hệ thức đệ quy nào?",
    "options": [
      "$P_n = 1{,}6 P_{n-1} \\implies P_n = P_0 (1{,}6)^n$",
      "$P_n = P_{n-1} + 0{,}06 \\implies P_n = P_0 + 0{,}06n$",
      "$P_n = 0{,}06 P_{n-1} \\implies P_n = P_0 (0{,}06)^n$",
      "$P_n = 1{,}06 P_{n-1} \\implies P_n = P_0 (1{,}06)^n$"
    ],
    "correctAnswer": 3,
    "explanation": "Cuối năm thứ $n$, số tiền gồm vốn đầu năm $P_{n-1}$ cộng tiền lãi $0{,}06 P_{n-1}$, tức $P_n = 1{,}06 P_{n-1}$. Đây là hệ thức đệ quy bậc $1$ có nghiệm $P_n = P_0 (1{,}06)^n$."
  },
  {
    "id": "c5_l1_q17",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Vận dụng",
    "question": "Gọi $e_n$ là số xâu nhị phân độ dài $n$ chứa một **số chẵn** các chữ số `0` (số $0$ được xem là chẵn). Hệ thức đệ quy nào sau đây đúng với mọi $n \\ge 1$?",
    "options": [
      "$e_n = 2^{n-1}$ (suy ra từ $e_n = e_{n-1} + (2^{n-1} - e_{n-1})$)",
      "$e_n = 2e_{n-1} + 1$ với $e_1 = 1$",
      "$e_n = e_{n-1} + e_{n-2}$ với $e_1 = 1, e_2 = 2$",
      "$e_n = 2^{n} - 1$"
    ],
    "correctAnswer": 0,
    "explanation": "Để lập xâu độ dài $n$ có chẵn số `0`: nếu bit cuối là `1` thì $n-1$ bit đầu phải có chẵn số `0` ($e_{n-1}$ xâu); nếu bit cuối là `0` thì $n-1$ bit đầu phải có lẻ số `0`, tức $2^{n-1} - e_{n-1}$ xâu. Cộng lại: $e_n = e_{n-1} + (2^{n-1} - e_{n-1}) = 2^{n-1}$ với mọi $n \\ge 1$."
  },
  {
    "id": "c5_l1_q18",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Vận dụng",
    "question": "Hoán vị mất thứ tự (Derangement) $D_n$ đếm số hoán vị của $\\{1, 2, \\dots, n\\}$ sao cho không phần tử nào đứng đúng vị trí ban đầu của nó ($\\pi(i) \\neq i, \\forall i$). Hệ thức truy hồi của $D_n$ ($n \\ge 3$) là:",
    "options": [
      "$D_n = n D_{n-1} + 1$ với $D_1 = 0, D_2 = 1$",
      "$D_n = (n - 1)(D_{n-1} + D_{n-2})$ với $D_1 = 0, D_2 = 1$",
      "$D_n = (n - 1) D_{n-1}$ với $D_1 = 0, D_2 = 1$",
      "$D_n = D_{n-1} + (n - 1) D_{n-2}$ với $D_1 = 0, D_2 = 1$"
    ],
    "correctAnswer": 1,
    "explanation": "Phần tử $1$ có $n-1$ cách chọn vị trí $k \\in \\{2, \\dots, n\\}$. Nếu phần tử $k$ nhảy về đúng vị trí $1$ thì $n-2$ phần tử còn lại mất thứ tự ($D_{n-2}$ cách); nếu phần tử $k$ không về vị trí $1$ thì bài toán quy về $n-1$ phần tử mất thứ tự ($D_{n-1}$ cách). Do đó $D_n = (n-1)(D_{n-1} + D_{n-2})$ với $D_1 = 0, D_2 = 1$."
  },
  {
    "id": "c5_l1_q19",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Vận dụng",
    "question": "Áp dụng hệ thức mất thứ tự $D_n = (n - 1)(D_{n-1} + D_{n-2})$ với $D_1 = 0, D_2 = 1$. Có bao nhiêu cách bỏ $5$ lá thư khác nhau vào $5$ phong bì ghi sẵn địa chỉ sao cho không lá thư nào đúng địa chỉ ($D_5$)?",
    "options": [
      "$45$",
      "$24$",
      "$44$",
      "$60$"
    ],
    "correctAnswer": 2,
    "explanation": "Tính lần lượt: $D_1 = 0$, $D_2 = 1$, $D_3 = 2(1 + 0) = 2$, $D_4 = 3(2 + 1) = 9$, $D_5 = 4(9 + 2) = 44$."
  },
  {
    "id": "c5_l1_q20",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Vận dụng",
    "question": "Dãy số Catalan $C_n$ (đếm số dãy ngoặc đúng gồm $n$ cặp ngoặc, hoặc số cây nhị phân đầy đủ có $n+1$ lá) thỏa mãn hệ thức đệ quy phi tuyến nào sau đây với $C_0 = 1$?",
    "options": [
      "$C_n = 2 C_{n-1} + C_{n-2} \\quad (n \\ge 2)$",
      "$C_n = \\sum_{k=1}^{n-1} k \\cdot C_{n-k} \\quad (n \\ge 1)$",
      "$C_n = C_{n-1}^2 + 1 \\quad (n \\ge 1)$",
      "$C_n = \\sum_{k=0}^{n-1} C_k C_{n-1-k} \\quad (n \\ge 1)$"
    ],
    "correctAnswer": 3,
    "explanation": "Mọi dãy ngoặc đúng $n$ cặp đều tách duy nhất dưới dạng $(A)B$, trong đó $A$ có $k$ cặp ngoặc đúng ($C_k$ cách) và $B$ có $n - 1 - k$ cặp ngoặc đúng ($C_{n-1-k}$ cách) với $0 \\le k \\le n-1$. Suy ra $C_n = \\sum_{k=0}^{n-1} C_k C_{n-1-k}$ (công thức đóng $C_n = \\frac{1}{n+1} C_{2n}^n$)."
  },
  {
    "id": "c5_l1_q21",
    "chapterId": "c5",
    "lessonId": "l5_1",
    "lessonTitle": "§1 Dãy số truy hồi & Mô hình hóa bài toán đếm bằng Đệ quy",
    "difficulty": "Nhận biết",
    "question": "Trong các hệ thức truy hồi dưới đây, hệ thức nào là **tuyến tính thuần nhất với hệ số hằng**?",
    "options": [
      "$a_n = 3a_{n-1} - 2a_{n-2}$",
      "$a_n = n a_{n-1} + a_{n-2}$",
      "$a_n = a_{n-1}^2 + 2a_{n-2}$",
      "$a_n = 3a_{n-1} + 2^n$"
    ],
    "correctAnswer": 0,
    "explanation": "Hệ thức $a_n = 3a_{n-1} - 2a_{n-2}$ có bậc $1$ đối với các $a_i$ (tuyến tính), các hệ số $3, -2$ là hằng số không phụ thuộc $n$, và vế không chứa $a_i$ bằng $0$ (thuần nhất). Trong khi đó $n a_{n-1}$ có hệ số biến thiên, $a_{n-1}^2$ là phi tuyến, còn $+ 2^n$ là không thuần nhất."
  },
  {
    "id": "c5_l2_q1",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Nhận biết",
    "question": "Nghiệm tổng quát của hệ thức đệ quy tuyến tính thuần nhất bậc 1: $a_n = q \\cdot a_{n-1}$ ($n \\ge 1, q \\neq 0$) với điều kiện đầu $a_0$ là:",
    "options": [
      "$a_n = a_0 + n q$",
      "$a_n = a_0 \\cdot q^n$",
      "$a_n = a_0 \\cdot q^{n-1}$",
      "$a_n = q \\cdot n^{a_0}$"
    ],
    "correctAnswer": 1,
    "explanation": "Đây là cấp số nhân công bội $q$ bắt đầu từ chỉ số $0$: $a_1 = a_0 q, a_2 = a_0 q^2, \\dots$, bằng quy nạp suy ra $a_n = a_0 \\cdot q^n$ với mọi $n \\ge 0$."
  },
  {
    "id": "c5_l2_q2",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Nhận biết",
    "question": "Phương trình đặc trưng của hệ thức đệ quy tuyến tính thuần nhất bậc 2: $a_n = c_1 a_{n-1} + c_2 a_{n-2}$ ($c_2 \\neq 0$) là:",
    "options": [
      "$c_2 r^2 + c_1 r - 1 = 0$",
      "$r^2 + c_1 r + c_2 = 0$",
      "$r^2 - c_1 r - c_2 = 0$",
      "$r^2 - c_2 r - c_1 = 0$"
    ],
    "correctAnswer": 2,
    "explanation": "Thử nghiệm dạng lũy thừa $a_n = r^n$ ($r \\neq 0$) vào $a_n - c_1 a_{n-1} - c_2 a_{n-2} = 0$ và chia hai vế cho $r^{n-2}$, ta thu được phương trình đặc trưng $r^2 - c_1 r - c_2 = 0$."
  },
  {
    "id": "c5_l2_q3",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Nhận biết",
    "question": "Nếu phương trình đặc trưng $r^2 - c_1 r - c_2 = 0$ có hai nghiệm thực phân biệt $r_1 \\neq r_2$, dạng nghiệm tổng quát của hệ thức đệ quy là:",
    "options": [
      "$a_n = \\alpha n r_1^n + \\beta n r_2^n$",
      "$a_n = (\\alpha + \\beta n) r_1^n$",
      "$a_n = \\alpha (r_1 + r_2)^n$",
      "$a_n = \\alpha r_1^n + \\beta r_2^n$"
    ],
    "correctAnswer": 3,
    "explanation": "Khi $\\Delta = c_1^2 + 4c_2 > 0$, phương trình đặc trưng có $2$ nghiệm thực phân biệt $r_1, r_2$. Mọi nghiệm đều có dạng tổ hợp tuyến tính $a_n = \\alpha r_1^n + \\beta r_2^n$."
  },
  {
    "id": "c5_l2_q4",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Nhận biết",
    "question": "Nếu phương trình đặc trưng $r^2 - c_1 r - c_2 = 0$ có nghiệm kép $r_1 = r_2 = r_0 \\neq 0$, dạng nghiệm tổng quát của hệ thức đệ quy là:",
    "options": [
      "$a_n = (\\alpha + \\beta n) r_0^n$",
      "$a_n = \\alpha r_0^n + \\beta r_0^{2n}$",
      "$a_n = \\alpha r_0^n$",
      "$a_n = (\\alpha + \\beta n^2) r_0^n$"
    ],
    "correctAnswer": 0,
    "explanation": "Khi $\\Delta = 0$ có nghiệm kép $r_0$ bội $2$, hai nghiệm độc lập tuyến tính cơ sở là $r_0^n$ và $n r_0^n$. Do đó nghiệm tổng quát có dạng $a_n = (\\alpha + \\beta n) r_0^n$."
  },
  {
    "id": "c5_l2_q5",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Thông hiểu",
    "question": "(Đề CK ĐHSP 2022–2023) Nghiệm của hệ thức đệ quy $a_n = a_{n-1} + 6a_{n-2}$ ($n \\ge 2$) với điều kiện đầu $a_0 = 2, a_1 = 2$ là:",
    "options": [
      "$a_n = \\frac{4}{5} \\cdot 3^n + \\frac{6}{5}(-2)^n$",
      "$a_n = \\frac{6}{5} \\cdot 3^n + \\frac{4}{5}(-2)^n$",
      "$a_n = 3^n + (-2)^n$",
      "$a_n = \\frac{6}{5} \\cdot (-3)^n + \\frac{4}{5} \\cdot 2^n$"
    ],
    "correctAnswer": 1,
    "explanation": "Phương trình đặc trưng: $r^2 - r - 6 = 0 \\iff (r - 3)(r + 2) = 0 \\implies r_1 = 3, r_2 = -2$. Đặt $a_n = \\alpha \\cdot 3^n + \\beta (-2)^n$. Thay $a_0 = 2, a_1 = 2$: $\\alpha + \\beta = 2$ và $3\\alpha - 2\\beta = 2 \\implies 5\\alpha = 6 \\implies \\alpha = \\frac{6}{5}, \\beta = \\frac{4}{5}$."
  },
  {
    "id": "c5_l2_q6",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Thông hiểu",
    "question": "(Đề CK ĐHSP 2023–2024) Nghiệm của hệ thức đệ quy $a_n = 2a_{n-1} + 8a_{n-2}$ ($n \\ge 2$) với điều kiện đầu $a_0 = 2, a_1 = 4$ là:",
    "options": [
      "$a_n = 4^n + (-2)^n$",
      "$a_n = \\frac{2}{3} \\cdot 4^n + \\frac{4}{3}(-2)^n$",
      "$a_n = \\frac{4}{3} \\cdot 4^n + \\frac{2}{3}(-2)^n$",
      "$a_n = 2 \\cdot 4^n$"
    ],
    "correctAnswer": 2,
    "explanation": "Phương trình đặc trưng: $r^2 - 2r - 8 = 0 \\iff (r - 4)(r + 2) = 0 \\implies r_1 = 4, r_2 = -2$. Hệ phương trình: $\\alpha + \\beta = 2$ và $4\\alpha - 2\\beta = 4 \\implies 6\\alpha = 8 \\implies \\alpha = \\frac{4}{3}, \\beta = \\frac{2}{3}$. Vậy $a_n = \\frac{4}{3} \\cdot 4^n + \\frac{2}{3}(-2)^n$."
  },
  {
    "id": "c5_l2_q7",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Thông hiểu",
    "question": "(Đề CK ĐHSP 2024–2025) Giải hệ thức đệ quy $x_n = 6x_{n-1} - 9x_{n-2}$ ($n \\ge 2$) với điều kiện đầu $x_0 = 2, x_1 = 6$. Công thức nghiệm của $x_n$ là:",
    "options": [
      "$x_n = 6 \\cdot 3^{n-1} + n \\cdot 3^n$",
      "$x_n = (2 + n) \\cdot 3^n$",
      "$x_n = (2 - n) \\cdot 3^n$",
      "$x_n = 2 \\cdot 3^n$"
    ],
    "correctAnswer": 3,
    "explanation": "Phương trình đặc trưng: $r^2 - 6r + 9 = 0 \\iff (r - 3)^2 = 0$ có nghiệm kép $r_0 = 3$. Nghiệm tổng quát $x_n = (\\alpha + \\beta n) 3^n$. Thay $n = 0$: $\\alpha = 2$. Thay $n = 1$: $(2 + \\beta) \\cdot 3 = 6 \\implies \\beta = 0$. Vậy $x_n = 2 \\cdot 3^n$."
  },
  {
    "id": "c5_l2_q8",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Thông hiểu",
    "question": "Tìm nghiệm của hệ thức đệ quy $a_n = 5a_{n-1} - 6a_{n-2}$ ($n \\ge 2$) với $a_0 = 1, a_1 = 4$.",
    "options": [
      "$a_n = 2 \\cdot 3^n - 2^n$",
      "$a_n = 3^n + 2^n$",
      "$a_n = 2 \\cdot 2^n - 3^n$",
      "$a_n = 3 \\cdot 3^n - 2 \\cdot 2^n$"
    ],
    "correctAnswer": 0,
    "explanation": "Phương trình đặc trưng $r^2 - 5r + 6 = 0 \\implies r_1 = 3, r_2 = 2$. Giải hệ $\\alpha + \\beta = 1$ và $3\\alpha + 2\\beta = 4$, ta được $\\alpha = 2, \\beta = -1$. Do đó $a_n = 2 \\cdot 3^n - 2^n$."
  },
  {
    "id": "c5_l2_q9",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Thông hiểu",
    "question": "Tìm nghiệm của hệ thức đệ quy $a_n = 4a_{n-1} - 4a_{n-2}$ ($n \\ge 2$) biết $a_0 = 1, a_1 = 6$.",
    "options": [
      "$a_n = (1 + 3n) \\cdot 2^n$",
      "$a_n = (1 + 2n) \\cdot 2^n$",
      "$a_n = (1 + 4n) \\cdot 2^n$",
      "$a_n = 6 \\cdot 2^{n-1}$"
    ],
    "correctAnswer": 1,
    "explanation": "Phương trình đặc trưng $r^2 - 4r + 4 = 0 \\iff (r - 2)^2 = 0$ có nghiệm kép $r_0 = 2$. Đặt $a_n = (\\alpha + \\beta n) 2^n$. Với $a_0 = 1 \\implies \\alpha = 1$; với $a_1 = 6 \\implies (1 + \\beta) \\cdot 2 = 6 \\implies \\beta = 2$. Vậy $a_n = (1 + 2n) \\cdot 2^n$."
  },
  {
    "id": "c5_l2_q10",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Thông hiểu",
    "question": "Tìm công thức Binet cho dãy Fibonacci $F_n = F_{n-1} + F_{n-2}$ với $F_0 = 0, F_1 = 1$.",
    "options": [
      "$F_n = \\frac{1}{2}\\left[\\left(\\frac{1+\\sqrt{5}}{2}\\right)^n - \\left(\\frac{1-\\sqrt{5}}{2}\\right)^n\\right]$",
      "$F_n = \\frac{1}{\\sqrt{5}}\\left[\\left(\\frac{1+\\sqrt{5}}{2}\\right)^n + \\left(\\frac{1-\\sqrt{5}}{2}\\right)^n\\right]$",
      "$F_n = \\frac{1}{\\sqrt{5}}\\left[\\left(\\frac{1+\\sqrt{5}}{2}\\right)^n - \\left(\\frac{1-\\sqrt{5}}{2}\\right)^n\\right]$",
      "$F_n = \\left(\\frac{1+\\sqrt{5}}{2}\\right)^n$"
    ],
    "correctAnswer": 2,
    "explanation": "Phương trình đặc trưng $r^2 - r - 1 = 0$ có hai nghiệm $\\varphi = \\frac{1+\\sqrt{5}}{2}$ và $\\overline{\\varphi} = \\frac{1-\\sqrt{5}}{2}$. Từ $F_0 = \\alpha + \\beta = 0 \\implies \\beta = -\\alpha$ và $F_1 = \\alpha(\\varphi - \\overline{\\varphi}) = \\alpha \\sqrt{5} = 1 \\implies \\alpha = \\frac{1}{\\sqrt{5}}$."
  },
  {
    "id": "c5_l2_q11",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Thông hiểu",
    "question": "Dãy số Lucas $\\{L_n\\}$ thỏa mãn cùng hệ thức $L_n = L_{n-1} + L_{n-2}$ như Fibonacci nhưng có điều kiện đầu $L_0 = 2, L_1 = 1$. Công thức nghiệm của $L_n$ là:",
    "options": [
      "$L_n = \\left(\\frac{1+\\sqrt{5}}{2}\\right)^n - \\left(\\frac{1-\\sqrt{5}}{2}\\right)^n$",
      "$L_n = \\frac{2}{\\sqrt{5}}\\left[\\left(\\frac{1+\\sqrt{5}}{2}\\right)^n + \\left(\\frac{1-\\sqrt{5}}{2}\\right)^n\\right]$",
      "$L_n = 2\\left(\\frac{1+\\sqrt{5}}{2}\\right)^n$",
      "$L_n = \\left(\\frac{1+\\sqrt{5}}{2}\\right)^n + \\left(\\frac{1-\\sqrt{5}}{2}\\right)^n$"
    ],
    "correctAnswer": 3,
    "explanation": "Đặt $\\varphi = \\frac{1+\\sqrt{5}}{2}, \\overline{\\varphi} = \\frac{1-\\sqrt{5}}{2}$. Thử $\\alpha = 1, \\beta = 1$: tại $n=0$, $\\alpha + \\beta = 2 = L_0$; tại $n=1$, $\\varphi + \\overline{\\varphi} = 1 = L_1$. Vậy $L_n = \\varphi^n + \\overline{\\varphi}^n$."
  },
  {
    "id": "c5_l2_q12",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Thông hiểu",
    "question": "Xét hệ thức bậc 2 khuyết số hạng $a_{n-1}$: $a_n = 9a_{n-2}$ ($n \\ge 2$) với điều kiện đầu $a_0 = 3, a_1 = 9$. Nghiệm $a_n$ là:",
    "options": [
      "$a_n = 3 \\cdot 3^n = 3^{n+1}$",
      "$a_n = 2 \\cdot 3^n + (-3)^n$",
      "$a_n = \\frac{3}{2} \\cdot 3^n + \\frac{3}{2}(-3)^n$",
      "$a_n = 3 \\cdot (-3)^n$"
    ],
    "correctAnswer": 0,
    "explanation": "Phương trình đặc trưng: $r^2 - 9 = 0 \\implies r_1 = 3, r_2 = -3$. Hệ phương trình: $\\alpha + \\beta = 3$ và $3\\alpha - 3\\beta = 9 \\iff \\alpha - \\beta = 3$. Giải ra $\\alpha = 3, \\beta = 0 \\implies a_n = 3 \\cdot 3^n = 3^{n+1}$."
  },
  {
    "id": "c5_l2_q13",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Thông hiểu",
    "question": "Giải hệ thức đệ quy $a_n = -4a_{n-1} - 4a_{n-2}$ ($n \\ge 2$) với $a_0 = 2, a_1 = -2$.",
    "options": [
      "$a_n = (2 + n)(-2)^n$",
      "$a_n = (2 - n)(-2)^n$",
      "$a_n = (2 - n) \\cdot 2^n$",
      "$a_n = 2(-2)^n$"
    ],
    "correctAnswer": 1,
    "explanation": "Phương trình đặc trưng: $r^2 + 4r + 4 = 0 \\iff (r + 2)^2 = 0$ có nghiệm kép $r_0 = -2$. Nghiệm tổng quát $a_n = (\\alpha + \\beta n)(-2)^n$. Từ $a_0 = 2 \\implies \\alpha = 2$. Từ $a_1 = (2 + \\beta)(-2) = -2 \\implies 2 + \\beta = 1 \\implies \\beta = -1$. Vậy $a_n = (2 - n)(-2)^n$."
  },
  {
    "id": "c5_l2_q14",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Vận dụng",
    "question": "Biết dãy số $\\{a_n\\}$ có công thức tổng quát $a_n = 4 \\cdot 5^n - 3 \\cdot (-1)^n$. Hệ thức đệ quy tuyến tính thuần nhất bậc 2 sinh ra dãy số này là:",
    "options": [
      "$a_n = 5a_{n-1} - a_{n-2}$",
      "$a_n = 4a_{n-1} - 5a_{n-2}$",
      "$a_n = 4a_{n-1} + 5a_{n-2}$",
      "$a_n = -4a_{n-1} + 5a_{n-2}$"
    ],
    "correctAnswer": 2,
    "explanation": "Hai nghiệm đặc trưng là $r_1 = 5$ và $r_2 = -1$. Phương trình đặc trưng là $(r - 5)(r + 1) = 0 \\iff r^2 - 4r - 5 = 0 \\iff r^2 = 4r + 5$. Do đó $a_n = 4a_{n-1} + 5a_{n-2}$."
  },
  {
    "id": "c5_l2_q15",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Vận dụng",
    "question": "Biết dãy số $\\{a_n\\}$ có dạng $a_n = (3 + 5n) \\cdot 4^n$. Hệ thức đệ quy tuyến tính thuần nhất bậc 2 tương ứng là:",
    "options": [
      "$a_n = 16a_{n-1} - 8a_{n-2}$",
      "$a_n = 4a_{n-1} - 16a_{n-2}$",
      "$a_n = 8a_{n-1} + 16a_{n-2}$",
      "$a_n = 8a_{n-1} - 16a_{n-2}$"
    ],
    "correctAnswer": 3,
    "explanation": "Dạng $(\\alpha + \\beta n) \\cdot 4^n$ chứng tỏ phương trình đặc trưng có nghiệm kép $r_0 = 4$: $(r - 4)^2 = 0 \\iff r^2 - 8r + 16 = 0 \\iff r^2 = 8r - 16$. Suy ra $a_n = 8a_{n-1} - 16a_{n-2}$."
  },
  {
    "id": "c5_l2_q16",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Vận dụng",
    "question": "Xét hệ thức đệ quy $a_n = -a_{n-2}$ ($n \\ge 2$) với $a_0 = 1, a_1 = 0$. Phương trình đặc trưng có nghiệm phức và giá trị của $a_{100}$ bằng:",
    "options": [
      "$1$",
      "$-1$",
      "$0$",
      "$2^{50}$"
    ],
    "correctAnswer": 0,
    "explanation": "Phương trình đặc trưng $r^2 + 1 = 0 \\implies r = \\pm i = \\cos\\frac{\\pi}{2} \\pm i\\sin\\frac{\\pi}{2}$. Nghiệm thực: $a_n = k_1 \\cos\\frac{n\\pi}{2} + k_2 \\sin\\frac{n\\pi}{2}$. Thay $a_0 = 1 \\implies k_1 = 1$; $a_1 = 0 \\implies k_2 = 0$. Vậy $a_n = \\cos\\frac{n\\pi}{2}$, suy ra $a_{100} = \\cos(50\\pi) = 1$."
  },
  {
    "id": "c5_l2_q17",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Vận dụng",
    "question": "Khi phương trình đặc trưng bậc 2 có hai nghiệm phức liên hợp $r_{1,2} = \\rho(\\cos\\theta \\pm i\\sin\\theta)$ với $\\rho > 0$, dạng nghiệm tổng quát thực của $a_n$ là:",
    "options": [
      "$a_n = \\rho (k_1 \\cos(\\theta^n) + k_2 \\sin(\\theta^n))$",
      "$a_n = \\rho^n (k_1 \\cos(n\\theta) + k_2 \\sin(n\\theta))$",
      "$a_n = k_1 \\rho^n \\cos\\theta + k_2 n \\rho^n \\sin\\theta$",
      "$a_n = \\rho^{2n} (k_1 + k_2 n)$"
    ],
    "correctAnswer": 1,
    "explanation": "Theo công thức Moivre, $r_{1,2}^n = \\rho^n (\\cos(n\\theta) \\pm i\\sin(n\\theta))$. Tổ hợp tuyến tính của hai nghiệm này biểu diễn trên trường số thực dưới dạng $a_n = \\rho^n (k_1 \\cos(n\\theta) + k_2 \\sin(n\\theta))$."
  },
  {
    "id": "c5_l2_q18",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Vận dụng",
    "question": "Cho hệ thức đệ quy $a_n = a_{n-1} - a_{n-2}$ ($n \\ge 2$) với $a_0 = 2, a_1 = 1$. Chu kỳ tuần hoàn của dãy $\\{a_n\\}$ là bao nhiêu và $a_{2025}$ bằng mấy?",
    "options": [
      "Chu kỳ $4$, và $a_{2025} = 1$",
      "Chu kỳ $6$, và $a_{2025} = 2$",
      "Chu kỳ $6$, và $a_{2025} = -2$",
      "Chu kỳ $3$, và $a_{2025} = -1$"
    ],
    "correctAnswer": 2,
    "explanation": "Tính các số hạng đầu: $a_0 = 2, a_1 = 1, a_2 = -1, a_3 = -2, a_4 = -1, a_5 = 1, a_6 = 2, a_7 = 1, \\dots$ Dãy tuần hoàn với chu kỳ $6$ (do nghiệm đặc trưng $r = \\cos\\frac{\\pi}{3} \\pm i\\sin\\frac{\\pi}{3}$). Vì $2025 = 6 \\times 337 + 3$, ta có $a_{2025} = a_3 = -2$."
  },
  {
    "id": "c5_l2_q19",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Thông hiểu",
    "question": "Tìm nghiệm của hệ thức đệ quy $a_n = 2a_{n-1} + 3a_{n-2}$ ($n \\ge 2$) với điều kiện đầu cho tại $n = 1, 2$: $a_1 = 5, a_2 = 13$.",
    "options": [
      "$a_n = \\frac{3}{2} \\cdot 3^n + \\frac{1}{2}(-1)^n$",
      "$a_n = 2 \\cdot 3^n - (-1)^n$",
      "$a_n = \\frac{7}{4} \\cdot 3^n + \\frac{1}{4}(-1)^n$",
      "$a_n = \\frac{3}{2} \\cdot 3^n - \\frac{1}{2}(-1)^n$"
    ],
    "correctAnswer": 3,
    "explanation": "Phương trình đặc trưng $r^2 - 2r - 3 = 0 \\implies r_1 = 3, r_2 = -1$. Đặt $a_n = \\alpha \\cdot 3^n + \\beta (-1)^n$. Thay $n = 1$: $3\\alpha - \\beta = 5$; thay $n = 2$: $9\\alpha + \\beta = 13$. Cộng lại được $12\\alpha = 18 \\implies \\alpha = \\frac{3}{2}$, suy ra $\\beta = 3\\alpha - 5 = -\\frac{1}{2}$. Vậy $a_n = \\frac{3}{2}\\cdot 3^n - \\frac{1}{2}(-1)^n$."
  },
  {
    "id": "c5_l2_q20",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Thông hiểu",
    "question": "Giải hệ thức đệ quy $2a_n - 5a_{n-1} + 2a_{n-2} = 0$ ($n \\ge 2$) với $a_0 = 2, a_1 = \\frac{5}{2}$.",
    "options": [
      "$a_n = 2^n + \\left(\\frac{1}{2}\\right)^n$",
      "$a_n = 2^n - \\left(\\frac{1}{2}\\right)^n$",
      "$a_n = 2 \\cdot 2^n$",
      "$a_n = \\frac{3}{2} \\cdot 2^n + \\frac{1}{2} \\left(\\frac{1}{2}\\right)^n$"
    ],
    "correctAnswer": 0,
    "explanation": "Phương trình đặc trưng: $2r^2 - 5r + 2 = 0 \\iff (r - 2)(2r - 1) = 0 \\implies r_1 = 2, r_2 = \\frac{1}{2}$. Hệ điều kiện đầu: $\\alpha + \\beta = 2$ và $2\\alpha + \\frac{1}{2}\\beta = \\frac{5}{2} \\implies \\alpha = 1, \\beta = 1$. Do đó $a_n = 2^n + \\left(\\frac{1}{2}\\right)^n$."
  },
  {
    "id": "c5_l2_q21",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Thông hiểu",
    "question": "Cho hệ thức đệ quy $a_n = 2a_{n-1} - a_{n-2}$ ($n \\ge 2$) với $a_0 = 5, a_1 = 8$. Công thức đóng của $a_n$ là:",
    "options": [
      "$a_n = 5 \\cdot 2^n$",
      "$a_n = 5 + 3n$",
      "$a_n = (5 + 3n) \\cdot 2^n$",
      "$a_n = 5 + 8n$"
    ],
    "correctAnswer": 1,
    "explanation": "Phương trình đặc trưng $r^2 - 2r + 1 = 0 \\iff (r - 1)^2 = 0$ có nghiệm kép $r_0 = 1$. Nghiệm tổng quát $a_n = (\\alpha + \\beta n) \\cdot 1^n = \\alpha + \\beta n$. Thay $a_0 = 5 \\implies \\alpha = 5$; $a_1 = 8 \\implies 5 + \\beta = 8 \\implies \\beta = 3$. Vậy $a_n = 5 + 3n$."
  },
  {
    "id": "c5_l2_q22",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Vận dụng",
    "question": "Xét hệ thức phi tuyến $a_n = a_{n-1} \\cdot a_{n-2}^2$ ($n \\ge 2$) với $a_0 = 2, a_1 = 2$. Bằng phép đổi biến $b_n = \\log_2 a_n$, ta thu được hệ thức tuyến tính nào và giá trị của $a_4$ là bao nhiêu?",
    "options": [
      "$b_n = b_{n-1} + 2b_{n-2}$, và $a_4 = 2^{10} = 1024$",
      "$b_n = 2b_{n-1} + b_{n-2}$, và $a_4 = 2^{12} = 4096$",
      "$b_n = b_{n-1} + 2b_{n-2}$, và $a_4 = 2^{11} = 2048$",
      "$b_n = b_{n-1} \\cdot 2b_{n-2}$, và $a_4 = 2^{16}$"
    ],
    "correctAnswer": 2,
    "explanation": "Lấy $\\log_2$ hai vế: $\\log_2 a_n = \\log_2 a_{n-1} + 2\\log_2 a_{n-2} \\iff b_n = b_{n-1} + 2b_{n-2}$ với $b_0 = \\log_2 2 = 1, b_1 = \\log_2 2 = 1$. Tính tiếp: $b_2 = 1 + 2(1) = 3$; $b_3 = 3 + 2(1) = 5$; $b_4 = 5 + 2(3) = 11$. Suy ra $a_4 = 2^{11} = 2048$."
  },
  {
    "id": "c5_l2_q23",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Vận dụng",
    "question": "Cho dãy dương $\\{a_n\\}$ thỏa mãn $a_n = \\sqrt{a_{n-1} \\cdot a_{n-2}}$ ($n \\ge 2$) với $a_0 = 1, a_1 = 8$. Bằng phép đặt $b_n = \\log_2 a_n$, giới hạn $\\lim_{n \\to \\infty} a_n$ bằng:",
    "options": [
      "$8$",
      "$2$",
      "$2\\sqrt{2}$",
      "$4$"
    ],
    "correctAnswer": 3,
    "explanation": "Đặt $b_n = \\log_2 a_n$, ta có $b_n = \\frac{1}{2}b_{n-1} + \\frac{1}{2}b_{n-2}$ với $b_0 = 0, b_1 = 3$. Phương trình đặc trưng $r^2 - \\frac{1}{2}r - \\frac{1}{2} = 0$ có nghiệm $r_1 = 1, r_2 = -\\frac{1}{2}$. Giải $\\alpha + \\beta = 0, \\alpha - \\frac{1}{2}\\beta = 3 \\implies \\alpha = 2, \\beta = -2$. Vậy $b_n = 2 - 2\\left(-\\frac{1}{2}\\right)^n \\to 2$ khi $n \\to \\infty$, suy ra $\\lim_{n\\to\\infty} a_n = 2^2 = 4$."
  },
  {
    "id": "c5_l2_q24",
    "chapterId": "c5",
    "lessonId": "l5_2",
    "lessonTitle": "§2 Hệ thức đệ quy tuyến tính thuần nhất bậc 1 & bậc 2",
    "difficulty": "Vận dụng",
    "question": "Điều kiện cần và đủ đối với các nghiệm đặc trưng $r_1, r_2$ của hệ thức $a_n = c_1 a_{n-1} + c_2 a_{n-2}$ để mọi nghiệm $\\{a_n\\}$ (với mọi điều kiện đầu $a_0, a_1$ bất kỳ) đều hội tụ về $0$ khi $n \\to \\infty$ là:",
    "options": [
      "$|r_1| < 1$ và $|r_2| < 1$",
      "$r_1 < 0$ và $r_2 < 0$",
      "$|r_1 + r_2| < 1$",
      "$|r_1 \\cdot r_2| < 1$"
    ],
    "correctAnswer": 0,
    "explanation": "Vì mọi nghiệm có dạng $\\alpha r_1^n + \\beta r_2^n$ (hoặc $(\\alpha + \\beta n)r_0^n$), để $\\lim_{n \\to \\infty} a_n = 0$ với mọi lựa chọn $\\alpha, \\beta$, điều kiện cần và đủ là cả hai nghiệm đặc trưng (kể cả nghiệm phức) đều nằm trong hình tròn đơn vị: $|r_1| < 1$ và $|r_2| < 1$."
  },
  {
    "id": "c5_l3_q1",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Nhận biết",
    "question": "Bậc của hệ thức đệ quy tuyến tính thuần nhất $a_n = 3a_{n-1} - 4a_{n-3} + 2a_{n-4}$ ($n \\ge 4$) là:",
    "options": [
      "Bậc $3$ vì có $3$ số hạng ở vế phải",
      "Bậc $4$ vì hiệu chỉ số xa nhất có hệ số khác $0$ là $n - (n-4) = 4$",
      "Bậc $2$ vì khuyết $a_{n-2}$",
      "Bậc $1$ vì tuyến tính"
    ],
    "correctAnswer": 1,
    "explanation": "Bậc $k$ của hệ thức đệ quy $a_n = c_1 a_{n-1} + \\dots + c_k a_{n-k}$ ($c_k \\neq 0$) được xác định bởi độ trễ xa nhất $k$ có hệ số $c_k \\neq 0$. Ở đây $c_4 = 2 \\neq 0$ nên hệ thức có bậc $4$."
  },
  {
    "id": "c5_l3_q2",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Nhận biết",
    "question": "Phương trình đặc trưng của hệ thức đệ quy $a_n = 6a_{n-1} - 11a_{n-2} + 6a_{n-3}$ là:",
    "options": [
      "$r^3 + 6r^2 - 11r + 6 = 0$",
      "$r^3 - 6r^2 - 11r - 6 = 0$",
      "$r^3 - 6r^2 + 11r - 6 = 0$",
      "$6r^3 - 11r^2 + 6r - 1 = 0$"
    ],
    "correctAnswer": 2,
    "explanation": "Chuyển vế $a_n - 6a_{n-1} + 11a_{n-2} - 6a_{n-3} = 0$ và thay $a_n = r^n$, chia cho $r^{n-3}$ ta được $r^3 - 6r^2 + 11r - 6 = 0$."
  },
  {
    "id": "c5_l3_q3",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Thông hiểu",
    "question": "Các nghiệm đặc trưng và dạng nghiệm tổng quát của hệ thức $a_n = 6a_{n-1} - 11a_{n-2} + 6a_{n-3}$ là:",
    "options": [
      "$r \\in \\{-1, -2, -3\\}$ và $a_n = \\alpha(-1)^n + \\beta(-2)^n + \\gamma(-3)^n$",
      "$r \\in \\{0, 2, 3\\}$ và $a_n = \\alpha \\cdot 2^n + \\beta \\cdot 3^n$",
      "$r \\in \\{1, 2, 3\\}$ và $a_n = (\\alpha + \\beta n + \\gamma n^2) \\cdot 2^n$",
      "$r \\in \\{1, 2, 3\\}$ và $a_n = \\alpha + \\beta \\cdot 2^n + \\gamma \\cdot 3^n$"
    ],
    "correctAnswer": 3,
    "explanation": "Ta phân tích $r^3 - 6r^2 + 11r - 6 = (r - 1)(r - 2)(r - 3) = 0$, thu được $3$ nghiệm đơn phân biệt $r_1 = 1, r_2 = 2, r_3 = 3$. Vậy $a_n = \\alpha \\cdot 1^n + \\beta \\cdot 2^n + \\gamma \\cdot 3^n = \\alpha + \\beta \\cdot 2^n + \\gamma \\cdot 3^n$."
  },
  {
    "id": "c5_l3_q4",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Nhận biết",
    "question": "Trong định lý tổng quát cho hệ thức thuần nhất bậc $k$, nếu nghiệm đặc trưng $r_i \\neq 0$ có **bội $m$** thì thành phần đóng góp của $r_i$ vào nghiệm tổng quát có dạng:",
    "options": [
      "$(\\alpha_0 + \\alpha_1 n + \\alpha_2 n^2 + \\dots + \\alpha_{m-1} n^{m-1}) r_i^n$",
      "$\\alpha_0 n^m r_i^n$",
      "$\\alpha_0 r_i^n + \\alpha_1 r_i^{2n} + \\dots + \\alpha_{m-1} r_i^{mn}$",
      "$(\\alpha_0 + \\alpha_1 n + \\dots + \\alpha_m n^m) r_i^n$"
    ],
    "correctAnswer": 0,
    "explanation": "Nghiệm đặc trưng $r_i$ bội $m$ đóng góp $m$ nghiệm cơ sở độc lập tuyến tính $r_i^n, n r_i^n, \\dots, n^{m-1} r_i^n$, tức đa thức theo $n$ bậc tối đa $m - 1$ nhân với $r_i^n$."
  },
  {
    "id": "c5_l3_q5",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Thông hiểu",
    "question": "Giả sử phương trình đặc trưng của một hệ thức đệ quy bậc $6$ có dạng $(r - 2)^3 (r + 1)^2 (r - 5) = 0$. Dạng nghiệm tổng quát của $a_n$ là:",
    "options": [
      "$a_n = c_1 2^n + c_2 (-1)^n + c_3 5^n$",
      "$a_n = (c_1 + c_2 n + c_3 n^2) 2^n + (c_4 + c_5 n)(-1)^n + c_6 5^n$",
      "$a_n = (c_1 + c_2 n) 2^n + c_3 (-1)^n + c_4 5^n$",
      "$a_n = (c_1 + c_2 n + c_3 n^2 + c_4 n^3) 2^n + (c_5 + c_6 n)(-1)^n + c_7 5^n$"
    ],
    "correctAnswer": 1,
    "explanation": "Nghiệm $r = 2$ bội $3$ sinh ra $(c_1 + c_2 n + c_3 n^2) 2^n$; nghiệm $r = -1$ bội $2$ sinh ra $(c_4 + c_5 n)(-1)^n$; nghiệm đơn $r = 5$ sinh ra $c_6 5^n$. Tổng số hằng số tự do đúng bằng $3 + 2 + 1 = 6$."
  },
  {
    "id": "c5_l3_q6",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Thông hiểu",
    "question": "Tìm nghiệm của hệ thức đệ quy bậc 3: $a_n = 6a_{n-1} - 11a_{n-2} + 6a_{n-3}$ ($n \\ge 3$) với điều kiện đầu $a_0 = 2, a_1 = 5, a_2 = 15$.",
    "options": [
      "$a_n = 2 - 2^n + 3^n$",
      "$a_n = 1 + 2^n + 3^n$",
      "$a_n = 1 - 2^n + 2 \\cdot 3^n$",
      "$a_n = -1 + 2 \\cdot 2^n + 3^n$"
    ],
    "correctAnswer": 2,
    "explanation": "Nghiệm tổng quát $a_n = \\alpha + \\beta \\cdot 2^n + \\gamma \\cdot 3^n$. Giải hệ: $\\alpha + \\beta + \\gamma = 2$; $\\alpha + 2\\beta + 3\\gamma = 5$; $\\alpha + 4\\beta + 9\\gamma = 15$. Trừ vế theo vế được $\\beta + 2\\gamma = 3$ và $2\\beta + 6\\gamma = 10 \\implies 2\\gamma = 4 \\implies \\gamma = 2, \\beta = -1, \\alpha = 1$."
  },
  {
    "id": "c5_l3_q7",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Thông hiểu",
    "question": "Cho hệ thức đệ quy $a_n = 3a_{n-1} - 3a_{n-2} + a_{n-3}$ ($n \\ge 3$). Phương trình đặc trưng và dạng nghiệm tổng quát của nó là:",
    "options": [
      "$r^3 - 1 = 0 \\implies a_n = \\alpha$",
      "$(r + 1)^3 = 0 \\implies a_n = (\\alpha + \\beta n + \\gamma n^2)(-1)^n$",
      "$(r - 1)^2(r + 1) = 0 \\implies a_n = \\alpha + \\beta n + \\gamma(-1)^n$",
      "$(r - 1)^3 = 0 \\implies a_n = \\alpha + \\beta n + \\gamma n^2$"
    ],
    "correctAnswer": 3,
    "explanation": "Phương trình đặc trưng là $r^3 - 3r^2 + 3r - 1 = 0 \\iff (r - 1)^3 = 0$, có nghiệm $r = 1$ bội $3$. Do đó mọi dãy đa thức bậc hai $a_n = \\alpha + \\beta n + \\gamma n^2$ đều là nghiệm."
  },
  {
    "id": "c5_l3_q8",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Thông hiểu",
    "question": "Với hệ thức $a_n = 3a_{n-1} - 3a_{n-2} + a_{n-3}$ ($n \\ge 3$) và $a_0 = 1, a_1 = 2, a_2 = 5$, công thức của $a_n$ là:",
    "options": [
      "$a_n = 1 + n^2$",
      "$a_n = 1 + n + n^2$",
      "$a_n = 1 + 2n - n^2$",
      "$a_n = (1 + n)^2$"
    ],
    "correctAnswer": 0,
    "explanation": "Đặt $a_n = \\alpha + \\beta n + \\gamma n^2$. Tại $n=0$: $\\alpha = 1$. Tại $n=1$: $1 + \\beta + \\gamma = 2 \\implies \\beta + \\gamma = 1$. Tại $n=2$: $1 + 2\\beta + 4\\gamma = 5 \\implies \\beta + 2\\gamma = 2$. Giải ra $\\gamma = 1, \\beta = 0 \\implies a_n = 1 + n^2$."
  },
  {
    "id": "c5_l3_q9",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Thông hiểu",
    "question": "Xét hệ thức $a_n = 3a_{n-2} + 2a_{n-3}$ ($n \\ge 3$). Tập nghiệm của phương trình đặc trưng và dạng nghiệm tổng quát là:",
    "options": [
      "$r = -2$ (đơn), $r = 1$ (bội $2$) $\\implies a_n = \\alpha(-2)^n + \\beta + \\gamma n$",
      "$r = 2$ (đơn), $r = -1$ (bội $2$) $\\implies a_n = \\alpha \\cdot 2^n + (\\beta + \\gamma n)(-1)^n$",
      "$r \\in \\{1, -1, 2\\} \\implies a_n = \\alpha + \\beta(-1)^n + \\gamma \\cdot 2^n$",
      "$r = 2$ (bội $2$), $r = -1$ (đơn) $\\implies a_n = (\\alpha + \\beta n)2^n + \\gamma(-1)^n$"
    ],
    "correctAnswer": 1,
    "explanation": "Phương trình đặc trưng: $r^3 - 3r - 2 = 0 \\iff (r - 2)(r^2 + 2r + 1) = 0 \\iff (r - 2)(r + 1)^2 = 0$. Nghiệm đơn $r = 2$ và nghiệm kép $r = -1$ cho $a_n = \\alpha \\cdot 2^n + (\\beta + \\gamma n)(-1)^n$."
  },
  {
    "id": "c5_l3_q10",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Thông hiểu",
    "question": "Dãy số $a_n = (2 + 3n - n^2) \\cdot 5^n$ là một nghiệm riêng của hệ thức đệ quy thuần nhất bậc nhỏ nhất nào dưới đây?",
    "options": [
      "$a_n = 10a_{n-1} - 25a_{n-2}$",
      "$a_n = 5a_{n-1} + 25a_{n-2} - 125a_{n-3}$",
      "$a_n = 15a_{n-1} - 75a_{n-2} + 125a_{n-3}$",
      "$a_n = 15a_{n-1} + 75a_{n-2} - 125a_{n-3}$"
    ],
    "correctAnswer": 2,
    "explanation": "Đa thức bậc $2$ nhân với $5^n$ đòi hỏi $r = 5$ là nghiệm đặc trưng bội tối thiểu $m = 3$. Phương trình đặc trưng bậc nhỏ nhất là $(r - 5)^3 = 0 \\iff r^3 - 15r^2 + 75r - 125 = 0$, ứng với $a_n = 15a_{n-1} - 75a_{n-2} + 125a_{n-3}$."
  },
  {
    "id": "c5_l3_q11",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Thông hiểu",
    "question": "Tìm số điều kiện đầu tối thiểu cần thiết để xác định duy nhất dãy nghiệm của $a_n = 2a_{n-2} - a_{n-4}$ ($n \\ge 4$).",
    "options": [
      "$2$ điều kiện đầu",
      "$3$ điều kiện đầu",
      "$5$ điều kiện đầu",
      "$4$ điều kiện đầu ($a_0, a_1, a_2, a_3$)"
    ],
    "correctAnswer": 3,
    "explanation": "Mặc dù khuyết $a_{n-1}$ và $a_{n-3}$, hệ thức có bậc $4$ (hệ số của $a_{n-4}$ bằng $-1 \\neq 0$). Không gian nghiệm có số chiều bằng $4$, nên cần đúng $4$ điều kiện đầu $a_0, a_1, a_2, a_3$."
  },
  {
    "id": "c5_l3_q12",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Vận dụng",
    "question": "Giải hệ thức bậc 4: $a_n = 2a_{n-2} - a_{n-4}$ ($n \\ge 4$) với điều kiện đầu $a_0 = 1, a_1 = 2, a_2 = 3, a_3 = 4$.",
    "options": [
      "$a_n = n + 1$",
      "$a_n = 1 + n(-1)^n$",
      "$a_n = 2^n - n$",
      "$a_n = 1 + \\frac{1}{2}n + \\frac{1}{2}n(-1)^n$"
    ],
    "correctAnswer": 0,
    "explanation": "Phương trình đặc trưng $r^4 - 2r^2 + 1 = 0 \\iff (r^2 - 1)^2 = 0 \\iff (r - 1)^2(r + 1)^2 = 0$. Dạng tổng quát $a_n = (c_1 + c_2 n) + (c_3 + c_4 n)(-1)^n$. Kiểm tra thấy $a_n = n + 1$ thỏa cả $4$ điều kiện đầu ($1, 2, 3, 4$) và thuộc không gian nghiệm ($c_1=1, c_2=1, c_3=c_4=0$), nên theo tính duy nhất nghiệm $a_n = n + 1$."
  },
  {
    "id": "c5_l3_q13",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Thông hiểu",
    "question": "Tập hợp tất cả các dãy nghiệm của một hệ thức đệ quy tuyến tính thuần nhất bậc $k$ (với $c_k \\neq 0$) lập thành cấu trúc đại số nào?",
    "options": [
      "Một không gian vectơ vô hạn chiều",
      "Một không gian vectơ có số chiều bằng $k$",
      "Một dàn bù hữu hạn có $2^k$ phần tử",
      "Một tập hợp chỉ gồm đúng $k$ dãy số"
    ],
    "correctAnswer": 1,
    "explanation": "Do tính tuyến tính và thuần nhất, tổng hai dãy nghiệm và tích một hằng số với dãy nghiệm vẫn là nghiệm. Ánh xạ chiếu dãy $\\{a_n\\} \\mapsto (a_0, a_1, \\dots, a_{k-1}) \\in \\mathbb{R}^k$ (hoặc $\\mathbb{C}^k$) là đẳng cấu tuyến tính, nên không gian nghiệm có chiều bằng $k$."
  },
  {
    "id": "c5_l3_q14",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Vận dụng",
    "question": "Tìm hệ thức đệ quy tuyến tính thuần nhất hệ số hằng có bậc nhỏ nhất nhận $a_n = 3^n + n \\cdot 2^n + 7$ làm nghiệm.",
    "options": [
      "Phương trình đặc trưng $(r - 3)(r - 2)(r - 7) = 0$ (bậc $3$)",
      "Phương trình đặc trưng $(r - 3)(r - 2)^2 = 0$ (bậc $3$)",
      "Phương trình đặc trưng $(r - 3)(r - 2)^2(r - 1) = 0$ (bậc $4$)",
      "Phương trình đặc trưng $(r - 3)(r - 2)(r - 1)^7 = 0$ (bậc $9$)"
    ],
    "correctAnswer": 2,
    "explanation": "Hạng tử $3^n$ cần nghiệm $r = 3$ (bội $\\ge 1$); hạng tử $n \\cdot 2^n$ cần nghiệm $r = 2$ (bội $\\ge 2$); hằng số $7 = 7 \\cdot 1^n$ cần nghiệm $r = 1$ (bội $\\ge 1$, không phải $r = 7$!). Vậy đa thức đặc trưng bậc nhỏ nhất là $(r - 3)(r - 2)^2(r - 1) = 0$ (bậc $4$)."
  },
  {
    "id": "c5_l3_q15",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Thông hiểu",
    "question": "Xét hệ thức $a_n = 5a_{n-1} - 8a_{n-2} + 4a_{n-3}$ ($n \\ge 3$) với $a_0 = 1, a_1 = 2, a_2 = 4$. Công thức của $a_n$ là:",
    "options": [
      "$a_n = 1 + n \\cdot 2^n$",
      "$a_n = 2 \\cdot 2^n - 1$",
      "$a_n = (1 + n) \\cdot 2^n$",
      "$a_n = 2^n$"
    ],
    "correctAnswer": 3,
    "explanation": "Phương trình đặc trưng: $r^3 - 5r^2 + 8r - 4 = (r - 1)(r - 2)^2 = 0$. Dạng tổng quát: $a_n = \\alpha + (\\beta + \\gamma n) 2^n$. Thử $\\alpha = 0, \\beta = 1, \\gamma = 0 \\implies a_n = 2^n$ khớp hoàn toàn với $a_0 = 1, a_1 = 2, a_2 = 4$!"
  },
  {
    "id": "c5_l3_q16",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Vận dụng",
    "question": "Với cùng hệ thức $a_n = 5a_{n-1} - 8a_{n-2} + 4a_{n-3}$ ($n \\ge 3$) nhưng điều kiện đầu $a_0 = 2, a_1 = 5, a_2 = 13$, công thức của $a_n$ là:",
    "options": [
      "$a_n = 1 + (1 + n) \\cdot 2^n$",
      "$a_n = 2 + n \\cdot 2^n$",
      "$a_n = 1 + (1 + 2n) \\cdot 2^n$",
      "$a_n = 3 \\cdot 2^n - 1$"
    ],
    "correctAnswer": 0,
    "explanation": "Từ $a_n = \\alpha + (\\beta + \\gamma n) 2^n$: tại $n=0$, $\\alpha + \\beta = 2$; tại $n=1$, $\\alpha + 2\\beta + 2\\gamma = 5$; tại $n=2$, $\\alpha + 4\\beta + 8\\gamma = 13$. Khử $\\alpha$: $\\beta + 2\\gamma = 3$ và $3\\beta + 8\\gamma = 11 \\implies 2\\gamma = 2 \\implies \\gamma = 1, \\beta = 1, \\alpha = 1$. Vậy $a_n = 1 + (1 + n) \\cdot 2^n$."
  },
  {
    "id": "c5_l3_q17",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Vận dụng",
    "question": "Cho hệ thức đệ quy $a_n = a_{n-3}$ ($n \\ge 3$) với $a_0 = 3, a_1 = 0, a_2 = 0$. Tổng $S = \\sum_{k=0}^{30} a_k$ bằng:",
    "options": [
      "$30$",
      "$33$",
      "$90$",
      "$93$"
    ],
    "correctAnswer": 1,
    "explanation": "Dãy tuần hoàn chu kỳ $3$: $(3, 0, 0, 3, 0, 0, \\dots)$, tức $a_k = 3$ khi $k \\equiv 0 \\pmod 3$ và $a_k = 0$ trong các trường hợp còn lại. Từ $k = 0$ đến $k = 30$ có $11$ chỉ số chia hết cho $3$ ($0, 3, 6, \\dots, 30$), nên $S = 11 \\times 3 = 33$."
  },
  {
    "id": "c5_l3_q18",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Thông hiểu",
    "question": "Xét toán tử dịch chuyển (shift operator) $E$ tác động lên dãy bởi $E(a_n) = a_{n+1}$. Hệ thức $a_{n+3} - 4a_{n+2} + 5a_{n+1} - 2a_n = 0$ viết dưới dạng đa thức toán tử là:",
    "options": [
      "$(E - 1)(E - 2)^2 a_n = 0$",
      "$(E + 1)^2 (E + 2) a_n = 0$",
      "$(E - 1)^2 (E - 2) a_n = 0$",
      "$(E - 4)(E + 5)(E - 2) a_n = 0$"
    ],
    "correctAnswer": 2,
    "explanation": "Thay $a_{n+j} = E^j a_n$, vế trái trở thành $(E^3 - 4E^2 + 5E - 2) a_n = 0$. Phân tích nhân tử: $E^3 - 4E^2 + 5E - 2 = (E - 1)^2 (E - 2)$."
  },
  {
    "id": "c5_l3_q19",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Vận dụng",
    "question": "Gọi $a_n$ là số cách lát kín băng chữ nhật $1 \\times n$ bằng các viên gạch $1 \\times 1$ (màu đỏ hoặc xanh) và các viên gạch $1 \\times 3$ (màu vàng). Hệ thức truy hồi của $a_n$ ($n \\ge 3$) và phương trình đặc trưng của nó là:",
    "options": [
      "$a_n = a_{n-1} + a_{n-2} + a_{n-3}$, phương trình đặc trưng $r^3 - r^2 - r - 1 = 0$",
      "$a_n = a_{n-1} + 2a_{n-3}$, phương trình đặc trưng $r^3 - r^2 - 2 = 0$",
      "$a_n = 2a_{n-1} + 3a_{n-3}$, phương trình đặc trưng $r^3 - 2r^2 - 3 = 0$",
      "$a_n = 2a_{n-1} + a_{n-3}$, phương trình đặc trưng $r^3 - 2r^2 - 1 = 0$"
    ],
    "correctAnswer": 3,
    "explanation": "Ô đầu tiên của băng $1 \\times n$ có thể lát bởi $1$ viên $1 \\times 1$ đỏ hoặc xanh ($2$ lựa chọn $\\implies 2a_{n-1}$ cách), hoặc khối $3$ ô đầu lát bởi $1$ viên $1 \\times 3$ vàng ($1$ lựa chọn $\\implies a_{n-3}$ cách). Vậy $a_n = 2a_{n-1} + a_{n-3}$, có phương trình đặc trưng $r^3 - 2r^2 - 1 = 0$."
  },
  {
    "id": "c5_l3_q20",
    "chapterId": "c5",
    "lessonId": "l5_3",
    "lessonTitle": "§3 Hệ thức đệ quy tuyến tính thuần nhất bậc $k$ tổng quát",
    "difficulty": "Vận dụng",
    "question": "Xét hệ hai phương trình đệ quy đồng thời: $x_n = 2x_{n-1} + y_{n-1}$ và $y_n = x_{n-1} + 2y_{n-1}$ ($n \\ge 1$) với $x_0 = 2, y_0 = 0$. Giá trị của $x_n$ là:",
    "options": [
      "$x_n = 3^n + 1$",
      "$x_n = 2 \\cdot 3^n$",
      "$x_n = 3^n - 1$",
      "$x_n = 2^n + 1$"
    ],
    "correctAnswer": 0,
    "explanation": "Cộng và trừ hai hệ thức: $x_n + y_n = 3(x_{n-1} + y_{n-1}) \\implies x_n + y_n = (x_0 + y_0)3^n = 2 \\cdot 3^n$; và $x_n - y_n = 1 \\cdot (x_{n-1} - y_{n-1}) \\implies x_n - y_n = x_0 - y_0 = 2$. Cộng lại chia đôi: $x_n = 3^n + 1$."
  },
  {
    "id": "c5_l4_q1",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Nhận biết",
    "question": "Nghiệm tổng quát $\\{a_n\\}$ của hệ thức đệ quy tuyến tính không thuần nhất $a_n - c_1 a_{n-1} - \\dots - c_k a_{n-k} = F(n)$ có cấu trúc là:",
    "options": [
      "$a_n = a_n^{(h)} \\cdot a_n^{(p)}$ (tích nghiệm thuần nhất và nghiệm riêng)",
      "$a_n = a_n^{(h)} + a_n^{(p)}$ (tổng nghiệm tổng quát thuần nhất và một nghiệm riêng)",
      "Chỉ phụ thuộc vào hàm $F(n)$, không phụ thuộc phần thuần nhất",
      "$a_n = a_n^{(h)} - F(n)$"
    ],
    "correctAnswer": 1,
    "explanation": "Theo nguyên lý chồng chất tuyến tính, hiệu của nghiệm bất kỳ $a_n$ với một nghiệm riêng cố định $a_n^{(p)}$ thỏa mãn phương trình thuần nhất liên kết, do đó $a_n = a_n^{(h)} + a_n^{(p)}$."
  },
  {
    "id": "c5_l4_q2",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Nhận biết",
    "question": "Cho hệ thức không thuần nhất có vế phải $F(n) = P_t(n) \\cdot s^n$ (với $P_t(n)$ là đa thức bậc $t$). Nếu $s$ **không phải** là nghiệm của phương trình đặc trưng thuần nhất thì dạng nghiệm riêng $a_n^{(p)}$ cần chọn là:",
    "options": [
      "$A \\cdot s^n$ (chỉ cần hằng số $A$)",
      "$n \\cdot Q_t(n) \\cdot s^n$",
      "$Q_t(n) \\cdot s^n$ với $Q_t(n)$ là đa thức tổng quát bậc $t$",
      "$Q_{t-1}(n) \\cdot s^n$"
    ],
    "correctAnswer": 2,
    "explanation": "Khi $s$ không trùng nghiệm đặc trưng (bội $m = 0$), không xảy ra cộng hưởng, ta chọn nghiệm riêng cùng dạng $a_n^{(p)} = (A_t n^t + \\dots + A_1 n + A_0) s^n$."
  },
  {
    "id": "c5_l4_q3",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Nhận biết",
    "question": "Nếu vế phải có dạng $F(n) = P_t(n) \\cdot s^n$ và $s$ **là nghiệm bội $m$** ($m \\ge 1$) của phương trình đặc trưng thuần nhất, dạng nghiệm riêng $a_n^{(p)}$ phải chọn là:",
    "options": [
      "$Q_t(n) \\cdot s^n$",
      "$n^m \\cdot s^n$ (bỏ đa thức $Q_t$)",
      "$n^{m-1} \\cdot Q_t(n) \\cdot s^n$",
      "$n^m \\cdot Q_t(n) \\cdot s^n$ (nhân thêm $n^m$ vào đa thức tổng quát bậc $t$)"
    ],
    "correctAnswer": 3,
    "explanation": "Khi $s$ trùng nghiệm đặc trưng bội $m$, các hạng tử $n^j s^n$ ($0 \\le j < m$) bị triệt tiêu bởi vế trái (hiện tượng cộng hưởng), nên ta bắt buộc nhân thêm $n^m$: $a_n^{(p)} = n^m (A_t n^t + \\dots + A_0) s^n$."
  },
  {
    "id": "c5_l4_q4",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Thông hiểu",
    "question": "Xét hệ thức $a_n - 5a_{n-1} + 6a_{n-2} = 4^n$. Dạng nghiệm riêng $a_n^{(p)}$ thích hợp nhất để tìm bằng phương pháp hệ số bất định là:",
    "options": [
      "$a_n^{(p)} = A \\cdot 4^n$",
      "$a_n^{(p)} = A n \\cdot 4^n$",
      "$a_n^{(p)} = (A n + B) \\cdot 4^n$",
      "$a_n^{(p)} = A n^2 \\cdot 4^n$"
    ],
    "correctAnswer": 0,
    "explanation": "Phương trình đặc trưng $r^2 - 5r + 6 = 0$ có nghiệm $r_1 = 2, r_2 = 3$. Vế phải $F(n) = 1 \\cdot 4^n$ có $t = 0, s = 4 \\notin \\{2, 3\\}$ ($m = 0$). Do đó chọn $a_n^{(p)} = A \\cdot 4^n$."
  },
  {
    "id": "c5_l4_q5",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Thông hiểu",
    "question": "Tìm nghiệm riêng $a_n^{(p)}$ của hệ thức $a_n - 5a_{n-1} + 6a_{n-2} = 4^n$.",
    "options": [
      "$a_n^{(p)} = 2 \\cdot 4^n$",
      "$a_n^{(p)} = 8 \\cdot 4^n$",
      "$a_n^{(p)} = \\frac{1}{2} \\cdot 4^n$",
      "$a_n^{(p)} = 4 \\cdot 4^n$"
    ],
    "correctAnswer": 1,
    "explanation": "Thay $a_n^{(p)} = A \\cdot 4^n$ vào phương trình: $A \\cdot 4^n - 5A \\cdot 4^{n-1} + 6A \\cdot 4^{n-2} = 4^n$. Chia hai vế cho $4^{n-2}$: $A(16 - 20 + 6) = 16 \\iff 2A = 16 \\implies A = 8$. Vậy $a_n^{(p)} = 8 \\cdot 4^n$."
  },
  {
    "id": "c5_l4_q6",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Thông hiểu",
    "question": "Xét hệ thức $a_n - 5a_{n-1} + 6a_{n-2} = 3^n$. Dạng nghiệm riêng $a_n^{(p)}$ cần chọn là:",
    "options": [
      "$A \\cdot 3^n$",
      "$(A n + B) \\cdot 3^n$",
      "$A n \\cdot 3^n$",
      "$A n^2 \\cdot 3^n$"
    ],
    "correctAnswer": 2,
    "explanation": "Nghiệm đặc trưng là $r_1 = 2, r_2 = 3$. Ở vế phải $F(n) = 1 \\cdot 3^n$, cơ số $s = 3$ là nghiệm đơn ($m = 1$) của phương trình đặc trưng và bậc đa thức $t = 0$. Do đó $a_n^{(p)} = n^1 \\cdot A \\cdot 3^n = A n \\cdot 3^n$."
  },
  {
    "id": "c5_l4_q7",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Vận dụng",
    "question": "Tìm nghiệm riêng $a_n^{(p)}$ của hệ thức $a_n - 5a_{n-1} + 6a_{n-2} = 3^n$.",
    "options": [
      "$a_n^{(p)} = \\frac{1}{3} n \\cdot 3^n$",
      "$a_n^{(p)} = -3 n \\cdot 3^n$",
      "$a_n^{(p)} = n \\cdot 3^n$",
      "$a_n^{(p)} = 3 n \\cdot 3^n$"
    ],
    "correctAnswer": 3,
    "explanation": "Thay $a_n^{(p)} = A n \\cdot 3^n$ vào vế trái rồi chia cho $3^{n-2}$: $A[9n - 15(n-1) + 6(n-2)] = 9 \\iff A[(9 - 15 + 6)n + (15 - 12)] = 9 \\iff 3A = 9 \\implies A = 3$. Vậy $a_n^{(p)} = 3 n \\cdot 3^n$."
  },
  {
    "id": "c5_l4_q8",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Thông hiểu",
    "question": "Xét hệ thức $a_n - 6a_{n-1} + 9a_{n-2} = (2n + 1) \\cdot 3^n$. Dạng nghiệm riêng $a_n^{(p)}$ đúng phải là:",
    "options": [
      "$n^2 (A n + B) \\cdot 3^n$",
      "$n (A n + B) \\cdot 3^n$",
      "$(A n + B) \\cdot 3^n$",
      "$A n^3 \\cdot 3^n$"
    ],
    "correctAnswer": 0,
    "explanation": "Phương trình đặc trưng $r^2 - 6r + 9 = (r - 3)^2 = 0$ có $r = 3$ là nghiệm kép ($m = 2$). Vế phải có $s = 3$ và đa thức $(2n + 1)$ bậc $t = 1$. Theo quy tắc tổng quát, $a_n^{(p)} = n^2 (A n + B) \\cdot 3^n$."
  },
  {
    "id": "c5_l4_q9",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Thông hiểu",
    "question": "Xét hệ thức $a_n - a_{n-1} = 2n + 1$ ($n \\ge 1$) với $a_0 = 1$. Dạng nghiệm riêng và công thức nghiệm chính xác của $a_n$ là:",
    "options": [
      "$a_n^{(p)} = A n + B$, và $a_n = 2n + 1$",
      "$a_n^{(p)} = n(A n + B)$, và $a_n = (n + 1)^2$",
      "$a_n^{(p)} = n(A n + B)$, và $a_n = n^2 + 1$",
      "$a_n^{(p)} = A n^2$, và $a_n = 2n^2 + 1$"
    ],
    "correctAnswer": 1,
    "explanation": "Viết lại $F(n) = (2n + 1) \\cdot 1^n$: cơ số $s = 1$ trùng nghiệm đơn $r = 1$ của $r - 1 = 0$ ($m = 1$), nên $a_n^{(p)} = n(A n + B)$. Hoặc cộng dồn trực tiếp: $a_n = a_0 + \\sum_{k=1}^n (2k + 1) = 1 + n(n + 2) = (n + 1)^2$."
  },
  {
    "id": "c5_l4_q10",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Thông hiểu",
    "question": "Tìm nghiệm của hệ thức đệ quy bậc 1 không thuần nhất: $a_n = 3a_{n-1} + 2$ ($n \\ge 1$) với $a_0 = 1$.",
    "options": [
      "$a_n = 2 \\cdot 3^n + 1$",
      "$a_n = 3^n + 2$",
      "$a_n = 2 \\cdot 3^n - 1$",
      "$a_n = 3^{n+1} - 2$"
    ],
    "correctAnswer": 2,
    "explanation": "Phần thuần nhất: $a_n^{(h)} = \\alpha \\cdot 3^n$. Với hằng số $2 = 2 \\cdot 1^n$ ($s = 1 \\neq 3$), thử nghiệm riêng hằng $a_n^{(p)} = C \\implies C = 3C + 2 \\implies C = -1$. Do đó $a_n = \\alpha \\cdot 3^n - 1$. Thay $a_0 = 1 \\implies \\alpha - 1 = 1 \\implies \\alpha = 2$, vậy $a_n = 2 \\cdot 3^n - 1$."
  },
  {
    "id": "c5_l4_q11",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Thông hiểu",
    "question": "Giải hệ thức đệ quy $a_n = 2a_{n-1} + 2^n$ ($n \\ge 1$) với $a_0 = 3$.",
    "options": [
      "$a_n = 3 + n \\cdot 2^n$",
      "$a_n = 3 \\cdot 2^n + 2^n = 4 \\cdot 2^n$",
      "$a_n = (3 + 2n) \\cdot 2^n$",
      "$a_n = (3 + n) \\cdot 2^n$"
    ],
    "correctAnswer": 3,
    "explanation": "Phương trình đặc trưng $r - 2 = 0$ có $r = 2$ bội $m = 1$. Vì $F(n) = 2^n$ có $s = 2$ trùng nghiệm đặc trưng, chọn $a_n^{(p)} = A n \\cdot 2^n$. Thay vào: $A n \\cdot 2^n - 2 A(n-1) 2^{n-1} = A \\cdot 2^n = 2^n \\implies A = 1$. Tổng quát $a_n = \\alpha \\cdot 2^n + n \\cdot 2^n$; từ $a_0 = 3 \\implies \\alpha = 3 \\implies a_n = (3 + n) \\cdot 2^n$."
  },
  {
    "id": "c5_l4_q12",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Thông hiểu",
    "question": "Giải hệ thức đệ quy $a_n = 3a_{n-1} + 2^n$ ($n \\ge 1$) với $a_0 = 1$.",
    "options": [
      "$a_n = 3^{n+1} - 2^{n+1}$",
      "$a_n = 2 \\cdot 3^n - 2^n$",
      "$a_n = 3^n + 2^n$",
      "$a_n = 3^{n+1} - 2^n$"
    ],
    "correctAnswer": 0,
    "explanation": "Nghiệm thuần nhất $a_n^{(h)} = \\alpha \\cdot 3^n$. Thử $a_n^{(p)} = A \\cdot 2^n$ ($s = 2 \\neq 3$): $A \\cdot 2^n - 3A \\cdot 2^{n-1} = 2^n \\iff 2A - 3A = 2 \\implies A = -2$, nên $a_n^{(p)} = -2 \\cdot 2^n = -2^{n+1}$. Từ $a_0 = \\alpha - 2 = 1 \\implies \\alpha = 3$. Vậy $a_n = 3 \\cdot 3^n - 2^{n+1} = 3^{n+1} - 2^{n+1}$."
  },
  {
    "id": "c5_l4_q13",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Thông hiểu",
    "question": "Nếu vế phải là tổng của hai hàm khác cơ số, ví dụ $a_n - 4a_{n-1} + 3a_{n-2} = 2^n + 5 \\cdot 3^n$, dạng nghiệm riêng $a_n^{(p)}$ được xác định theo nguyên lý chồng chất như thế nào?",
    "options": [
      "$a_n^{(p)} = A \\cdot 2^n + B \\cdot 3^n$",
      "$a_n^{(p)} = A \\cdot 2^n + B n \\cdot 3^n$",
      "$a_n^{(p)} = A n \\cdot 2^n + B n \\cdot 3^n$",
      "$a_n^{(p)} = (A + B) \\cdot 6^n$"
    ],
    "correctAnswer": 1,
    "explanation": "Phương trình đặc trưng $r^2 - 4r + 3 = 0$ có nghiệm $r_1 = 1, r_2 = 3$. Tách làm hai bài toán con: với $F_1(n) = 2^n$ ($s_1 = 2 \\notin \\{1, 3\\}$) chọn $A \\cdot 2^n$; với $F_2(n) = 5 \\cdot 3^n$ ($s_2 = 3$ là nghiệm đơn $m = 1$) chọn $B n \\cdot 3^n$. Cộng lại: $a_n^{(p)} = A \\cdot 2^n + B n \\cdot 3^n$."
  },
  {
    "id": "c5_l4_q14",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Vận dụng",
    "question": "Tìm nghiệm của hệ thức $a_n - 2a_{n-1} + a_{n-2} = 2$ ($n \\ge 2$) với điều kiện đầu $a_0 = 0, a_1 = 1$.",
    "options": [
      "$a_n = n(n - 1)$",
      "$a_n = 2n^2 - n$",
      "$a_n = n^2$",
      "$a_n = 2^n - 1$"
    ],
    "correctAnswer": 2,
    "explanation": "Phương trình đặc trưng $(r - 1)^2 = 0$ có $r = 1$ bội $m = 2$. Vế phải $2 = 2 \\cdot 1^n$ có $s = 1, t = 0$, nên chọn $a_n^{(p)} = A n^2$. Thay vào: $A[n^2 - 2(n-1)^2 + (n-2)^2] = 2A = 2 \\implies A = 1$. Vậy $a_n = \\alpha + \\beta n + n^2$. Thay $a_0 = 0 \\implies \\alpha = 0$; $a_1 = 1 \\implies \\beta + 1 = 1 \\implies \\beta = 0$. Suy ra $a_n = n^2$."
  },
  {
    "id": "c5_l4_q15",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Vận dụng",
    "question": "Giải hệ thức $a_n = 2a_{n-1} + n$ ($n \\ge 1$) với $a_0 = 1$.",
    "options": [
      "$a_n = 3 \\cdot 2^n + n - 2$",
      "$a_n = 2^n + n$",
      "$a_n = 2^{n+1} - n - 1$",
      "$a_n = 3 \\cdot 2^n - n - 2$"
    ],
    "correctAnswer": 3,
    "explanation": "Nghiệm thuần nhất $a_n^{(h)} = \\alpha \\cdot 2^n$. Với $F(n) = n \\cdot 1^n$ ($s = 1 \\neq 2, t = 1$), thử $a_n^{(p)} = A n + B$: $A n + B - 2[A(n-1) + B] = n \\iff -A n + (2A - B) = n \\implies A = -1, B = -2$. Vậy $a_n = \\alpha \\cdot 2^n - n - 2$. Thay $a_0 = 1 \\implies \\alpha - 2 = 1 \\implies \\alpha = 3$."
  },
  {
    "id": "c5_l4_q16",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Thông hiểu",
    "question": "Bằng phương pháp cộng dồn (telescoping), nghiệm của hệ thức $a_n = a_{n-1} + 3n^2 - 3n + 1$ ($n \\ge 1$) với $a_0 = 0$ là:",
    "options": [
      "$a_n = n^3$",
      "$a_n = (n + 1)^3 - 1$",
      "$a_n = 3n^3$",
      "$a_n = n^3 - n$"
    ],
    "correctAnswer": 0,
    "explanation": "Chú ý hằng đẳng thức sai phân: $k^3 - (k - 1)^3 = 3k^2 - 3k + 1$. Do đó $a_n - a_{n-1} = n^3 - (n - 1)^3$. Cộng dồn từ $k = 1$ đến $n$: $a_n - a_0 = n^3 - 0^3 \\implies a_n = n^3$."
  },
  {
    "id": "c5_l4_q17",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Vận dụng",
    "question": "Tìm dạng nghiệm riêng $a_n^{(p)}$ của hệ thức $a_n - 7a_{n-1} + 16a_{n-2} - 12a_{n-3} = n^2 \\cdot 2^n$.",
    "options": [
      "$(A n^2 + B n + C) \\cdot 2^n$",
      "$n^2 (A n^2 + B n + C) \\cdot 2^n$",
      "$n (A n^2 + B n + C) \\cdot 2^n$",
      "$n^3 (A n^2 + B n + C) \\cdot 2^n$"
    ],
    "correctAnswer": 1,
    "explanation": "Phân tích phương trình đặc trưng: $r^3 - 7r^2 + 16r - 12 = (r - 3)(r - 2)^2 = 0$. Cơ số $s = 2$ là nghiệm đặc trưng bội $m = 2$, còn đa thức $n^2$ có bậc $t = 2$. Vậy $a_n^{(p)} = n^2 (A n^2 + B n + C) \\cdot 2^n$."
  },
  {
    "id": "c5_l4_q18",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Vận dụng",
    "question": "Khử phần không thuần nhất để đưa hệ thức $a_n = 3a_{n-1} + 4$ về một hệ thức đệ quy **thuần nhất** bậc $2$, ta nhận được:",
    "options": [
      "$a_n - 2a_{n-1} - 3a_{n-2} = 0$",
      "$a_n - 3a_{n-1} + 4a_{n-2} = 0$",
      "$a_n - 4a_{n-1} + 3a_{n-2} = 0$",
      "$a_n - 6a_{n-1} + 9a_{n-2} = 0$"
    ],
    "correctAnswer": 2,
    "explanation": "Ta có $a_n - 3a_{n-1} = 4$ và $a_{n-1} - 3a_{n-2} = 4$. Trừ vế theo vế hai đẳng thức: $(a_n - 3a_{n-1}) - (a_{n-1} - 3a_{n-2}) = 0 \\iff a_n - 4a_{n-1} + 3a_{n-2} = 0$."
  },
  {
    "id": "c5_l4_q19",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Vận dụng",
    "question": "(Đề CK ĐHSP 2024–2025 – Giải nghiệm đóng) Giải hệ thức không thuần nhất $c_n - c_{n-2} = 1$ ($n \\ge 2$) với $c_0 = 1, c_1 = 1$. Biểu thức giải tích (không dùng phần nguyên) của $c_n$ là:",
    "options": [
      "$c_n = \\frac{n + 1}{2}$",
      "$c_n = \\frac{2n + 3 - (-1)^n}{4}$",
      "$c_n = \\frac{n + 2 + (-1)^n}{2}$",
      "$c_n = \\frac{2n + 3 + (-1)^n}{4}$"
    ],
    "correctAnswer": 3,
    "explanation": "Phương trình đặc trưng $r^2 - 1 = (r - 1)(r + 1) = 0$ có $r_1 = 1$ (đơn, $m = 1$) và $r_2 = -1$. Với vế phải $1 = 1^n$, chọn $c_n^{(p)} = A n$: $A n - A(n - 2) = 2A = 1 \\implies A = \\frac{1}{2}$. Đặt $c_n = \\alpha + \\beta(-1)^n + \\frac{1}{2}n$. Từ $c_0 = \\alpha + \\beta = 1$ và $c_1 = \\alpha - \\beta + \\frac{1}{2} = 1 \\implies \\alpha = \\frac{3}{4}, \\beta = \\frac{1}{4}$. Vậy $c_n = \\frac{2n + 3 + (-1)^n}{4} = \\lfloor \\frac{n}{2} \\rfloor + 1$."
  },
  {
    "id": "c5_l4_q20",
    "chapterId": "c5",
    "lessonId": "l5_4",
    "lessonTitle": "§4 Hệ thức đệ quy tuyến tính không thuần nhất",
    "difficulty": "Vận dụng",
    "question": "Tìm tổng $S_n = \\sum_{k=1}^n k \\cdot 2^k$ bằng cách giải hệ thức $S_n - S_{n-1} = n \\cdot 2^n$ với $S_0 = 0$.",
    "options": [
      "$S_n = (n - 1) 2^{n+1} + 2$",
      "$S_n = n \\cdot 2^{n+1} - 2$",
      "$S_n = (n + 1) 2^n - 1$",
      "$S_n = n \\cdot 2^n + 2$"
    ],
    "correctAnswer": 0,
    "explanation": "Nghiệm thuần nhất $S_n^{(h)} = \\alpha$. Với $F(n) = n \\cdot 2^n$ ($s = 2 \\neq 1, t = 1$), thử $S_n^{(p)} = (A n + B) 2^n$: $(A n + B)2^n - [A(n-1) + B]2^{n-1} = n \\cdot 2^n \\iff [A n + (A + B)] 2^{n-1} = 2n \\cdot 2^{n-1} \\implies A = 2, B = -2$. Từ $S_0 = \\alpha - 2 = 0 \\implies \\alpha = 2$. Vậy $S_n = (2n - 2)2^n + 2 = (n - 1)2^{n+1} + 2$."
  },
  {
    "id": "c5_l5_q1",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Nhận biết",
    "question": "Trong hệ thức đệ quy Chia để trị $T(n) = a T(n/b) + f(n)$ với $a \\ge 1, b > 1$, đại lượng mũ tới hạn (critical exponent) dùng trong Định lý Master là:",
    "options": [
      "$c_{\\text{crit}} = \\log_a b$",
      "$c_{\\text{crit}} = \\log_b a$",
      "$c_{\\text{crit}} = \\frac{a}{b}$",
      "$c_{\\text{crit}} = a^b$"
    ],
    "correctAnswer": 1,
    "explanation": "Ở độ sâu $\\log_b n$ của cây đệ quy, số lượng bài toán con ở mức lá là $a^{\\log_b n} = n^{\\log_b a}$. Vì vậy mũ tới hạn để so sánh với $f(n) = \\Theta(n^d)$ là $\\log_b a$."
  },
  {
    "id": "c5_l5_q2",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Nhận biết",
    "question": "Áp dụng Định lý Master cho $T(n) = a T(n/b) + \\Theta(n^d)$ ($d \\ge 0$). Khi $d = \\log_b a$ (tức $a = b^d$), độ phức tạp tiệm cận của $T(n)$ là:",
    "options": [
      "$\\Theta(n^d)$",
      "$\\Theta(n^{\\log_b a})$",
      "$\\Theta(n^d \\log n)$",
      "$\\Theta(n^{d+1})$"
    ],
    "correctAnswer": 2,
    "explanation": "Khi $d = \\log_b a$ (Trường hợp 2 của Định lý Master), chi phí tại mỗi tầng của cây đệ quy đều bằng $\\Theta(n^d)$, nhân với $\\log_b n$ tầng cho kết quả $T(n) = \\Theta(n^d \\log n)$."
  },
  {
    "id": "c5_l5_q3",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Thông hiểu",
    "question": "Thuật toán Tìm kiếm nhị phân (Binary Search) có độ phức tạp thỏa mãn $T(n) = T(n/2) + \\Theta(1)$. Độ phức tạp tiệm cận của $T(n)$ là:",
    "options": [
      "$\\Theta(1)$",
      "$\\Theta(n \\log n)$",
      "$\\Theta(n)$",
      "$\\Theta(\\log n)$"
    ],
    "correctAnswer": 3,
    "explanation": "Ở đây $a = 1, b = 2, d = 0$. Ta có $\\log_b a = \\log_2 1 = 0 = d$ (Trường hợp 2), suy ra $T(n) = \\Theta(n^0 \\log n) = \\Theta(\\log n)$."
  },
  {
    "id": "c5_l5_q4",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Thông hiểu",
    "question": "Thuật toán Sắp xếp trộn (Merge Sort) có hệ thức thời gian chạy $T(n) = 2 T(n/2) + \\Theta(n)$. Theo Định lý Master, $T(n)$ thuộc lớp nào?",
    "options": [
      "$\\Theta(n \\log n)$",
      "$\\Theta(n)$",
      "$\\Theta(n^2)$",
      "$\\Theta(n \\log^2 n)$"
    ],
    "correctAnswer": 0,
    "explanation": "Với $a = 2, b = 2, d = 1$, ta có $\\log_2 2 = 1 = d$ (Trường hợp 2). Do đó $T(n) = \\Theta(n \\log n)$."
  },
  {
    "id": "c5_l5_q5",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Thông hiểu",
    "question": "Thuật toán nhân số nguyên lớn Karatsuba chia bài toán $n$ chữ số thành $3$ bài toán con $n/2$ chữ số: $T(n) = 3 T(n/2) + \\Theta(n)$. Độ phức tạp của thuật toán là:",
    "options": [
      "$\\Theta(n \\log n)$",
      "$\\Theta(n^{\\log_2 3}) \\approx \\Theta(n^{1{,}585})$",
      "$\\Theta(n^2)$",
      "$\\Theta(n^{1{,}5})$"
    ],
    "correctAnswer": 1,
    "explanation": "Ở đây $a = 3, b = 2, d = 1$. Vì $d = 1 < \\log_2 3 \\approx 1{,}585$ (Trường hợp 1: lá cây đệ quy chiếm ưu thế), ta có $T(n) = \\Theta(n^{\\log_2 3})$."
  },
  {
    "id": "c5_l5_q6",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Thông hiểu",
    "question": "Thuật toán nhân hai ma trận vuông cấp $n$ của Strassen thỏa mãn $T(n) = 7 T(n/2) + \\Theta(n^2)$. Độ phức tạp tiệm cận của $T(n)$ là:",
    "options": [
      "$\\Theta(n^2 \\log n)$",
      "$\\Theta(n^3)$",
      "$\\Theta(n^{\\log_2 7}) \\approx \\Theta(n^{2{,}807})$",
      "$\\Theta(n^{7/2})$"
    ],
    "correctAnswer": 2,
    "explanation": "Ta có $a = 7, b = 2, d = 2$. Vì $d = 2 < \\log_2 7 \\approx 2{,}807$ (Trường hợp 1), nên $T(n) = \\Theta(n^{\\log_2 7})$, nhanh hơn nhân ma trận cổ điển $\\Theta(n^3)$."
  },
  {
    "id": "c5_l5_q7",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Thông hiểu",
    "question": "Xác định độ phức tạp tiệm cận của $T(n) = 2 T(n/2) + n^2$:",
    "options": [
      "$\\Theta(n \\log n)$",
      "$\\Theta(n^2 \\log n)$",
      "$\\Theta(n^3)$",
      "$\\Theta(n^2)$"
    ],
    "correctAnswer": 3,
    "explanation": "Với $a = 2, b = 2$, $\\log_2 2 = 1 < d = 2$ và điều kiện chính quy $2 (n/2)^2 = \\frac{1}{2} n^2 \\le c n^2$ ($c = \\frac{1}{2} < 1$) thỏa mãn (Trường hợp 3: gốc cây đệ quy chiếm ưu thế). Vậy $T(n) = \\Theta(n^2)$."
  },
  {
    "id": "c5_l5_q8",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Thông hiểu",
    "question": "Xác định độ phức tạp tiệm cận của $T(n) = 9 T(n/3) + n$:",
    "options": [
      "$\\Theta(n^2)$",
      "$\\Theta(n \\log n)$",
      "$\\Theta(n^2 \\log n)$",
      "$\\Theta(n^3)$"
    ],
    "correctAnswer": 0,
    "explanation": "Ta có $a = 9, b = 3 \\implies \\log_3 9 = 2 > d = 1$ (Trường hợp 1). Do đó $T(n) = \\Theta(n^2)$."
  },
  {
    "id": "c5_l5_q9",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Vận dụng",
    "question": "Với $n = 2^k$, tính chính xác nghiệm của $T(n) = 2 T(n/2) + n$ với điều kiện cơ sở $T(1) = 0$.",
    "options": [
      "$T(n) = n \\log_2 n + n$",
      "$T(n) = n \\log_2 n$",
      "$T(n) = 2n - 2$",
      "$T(n) = \\frac{1}{2} n \\log_2 n$"
    ],
    "correctAnswer": 1,
    "explanation": "Đặt $n = 2^k$, gọi $a_k = T(2^k)$. Ta có $a_k = 2a_{k-1} + 2^k$ với $a_0 = T(1) = 0$. Chia hai vế cho $2^k$: $\\frac{a_k}{2^k} = \\frac{a_{k-1}}{2^{k-1}} + 1 \\implies \\frac{a_k}{2^k} = k$. Suy ra $a_k = k \\cdot 2^k = n \\log_2 n$."
  },
  {
    "id": "c5_l5_q10",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Nhận biết",
    "question": "Hàm sinh thông thường (Ordinary Generating Function – OGF) của dãy số thực $\\{a_n\\}_{n \\ge 0}$ được định nghĩa bởi chuỗi lũy thừa hình thức nào?",
    "options": [
      "$G(x) = \\sum_{n=1}^{\\infty} \\frac{a_n}{n^x}$",
      "$G(x) = \\sum_{n=0}^{\\infty} \\frac{a_n}{n!} x^n$",
      "$G(x) = \\sum_{n=0}^{\\infty} a_n x^n$",
      "$G(x) = \\prod_{n=0}^{\\infty} (1 + a_n x^n)$"
    ],
    "correctAnswer": 2,
    "explanation": "Hàm sinh thông thường của dãy $(a_0, a_1, a_2, \\dots)$ là $G(x) = a_0 + a_1 x + a_2 x^2 + \\dots = \\sum_{n=0}^{\\infty} a_n x^n$ (trong khi $\\sum \\frac{a_n}{n!} x^n$ là hàm sinh mũ EGF)."
  },
  {
    "id": "c5_l5_q11",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Nhận biết",
    "question": "Hàm sinh dạng đóng của dãy hằng $(1, 1, 1, 1, \\dots)$, tức $a_n = 1$ với mọi $n \\ge 0$, là:",
    "options": [
      "$e^x$",
      "$\\frac{1}{1 + x}$",
      "$\\frac{1}{(1 - x)^2}$",
      "$\\frac{1}{1 - x}$"
    ],
    "correctAnswer": 3,
    "explanation": "Theo công thức tổng cấp số nhân lùi vô hạn (với $|x| < 1$): $\\sum_{n=0}^{\\infty} x^n = 1 + x + x^2 + \\dots = \\frac{1}{1 - x}$."
  },
  {
    "id": "c5_l5_q12",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Thông hiểu",
    "question": "Hàm sinh dạng đóng của dãy cấp số nhân $a_n = c^n$ ($n \\ge 0$, với $c$ là hằng số thực) là:",
    "options": [
      "$\\frac{1}{1 - c x}$",
      "$\\frac{c}{1 - x}$",
      "$\\frac{1}{c - x}$",
      "$\\frac{1}{(1 - x)^c}$"
    ],
    "correctAnswer": 0,
    "explanation": "Ta có $\\sum_{n=0}^{\\infty} c^n x^n = \\sum_{n=0}^{\\infty} (c x)^n = \\frac{1}{1 - c x}$."
  },
  {
    "id": "c5_l5_q13",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Thông hiểu",
    "question": "Hệ số của $x^n$ trong khai triển chuỗi lũy thừa của hàm $G(x) = \\frac{1}{(1 - x)^2}$ là:",
    "options": [
      "$a_n = n$",
      "$a_n = n + 1$",
      "$a_n = 2^n$",
      "$a_n = n^2$"
    ],
    "correctAnswer": 1,
    "explanation": "Lấy đạo hàm chuỗi $\\frac{1}{1 - x} = \\sum_{n=0}^{\\infty} x^n$: $\\frac{1}{(1 - x)^2} = \\sum_{n=1}^{\\infty} n x^{n-1} = \\sum_{n=0}^{\\infty} (n + 1) x^n$. Vậy $a_n = n + 1$."
  },
  {
    "id": "c5_l5_q14",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Thông hiểu",
    "question": "Theo khai triển nhị thức mở rộng $\\frac{1}{(1 - x)^m} = \\sum_{k=0}^{\\infty} K_m^k x^k$, hệ số của $x^k$ ($k \\ge 0$) với $m \\ge 1$ nguyên dương bằng:",
    "options": [
      "$C_m^k$",
      "$A_{m+k-1}^k$",
      "$C_{m+k-1}^k$ (tức tổ hợp lặp $K_m^k = \\overline{C}_m^k$)",
      "$m^k$"
    ],
    "correctAnswer": 2,
    "explanation": "Tích của $m$ chuỗi $(1 + x + x^2 + \\dots)^m$ đếm số nghiệm nguyên không âm của $e_1 + e_2 + \\dots + e_m = k$, đúng bằng tổ hợp lặp $K_m^k = C_{m+k-1}^k = C_{m+k-1}^{m-1}$."
  },
  {
    "id": "c5_l5_q15",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Thông hiểu",
    "question": "Tìm hệ số của $x^{10}$ trong khai triển chuỗi lũy thừa của $G(x) = \\frac{1}{(1 - x)^4}$.",
    "options": [
      "$4^{10}$",
      "$C_{14}^{10} = 1001$",
      "$C_{10}^4 = 210$",
      "$C_{13}^{10} = 286$"
    ],
    "correctAnswer": 3,
    "explanation": "Áp dụng $\\frac{1}{(1 - x)^m} = \\sum_{k=0}^{\\infty} C_{m+k-1}^k x^k$ với $m = 4, k = 10$: hệ số là $C_{4+10-1}^{10} = C_{13}^{10} = C_{13}^3 = \\frac{13 \\cdot 12 \\cdot 11}{6} = 286$."
  },
  {
    "id": "c5_l5_q16",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Thông hiểu",
    "question": "Hàm sinh đóng $G(x) = \\sum_{n=0}^{\\infty} F_n x^n$ của dãy Fibonacci ($F_0 = 0, F_1 = 1, F_n = F_{n-1} + F_{n-2}$) là:",
    "options": [
      "$G(x) = \\frac{x}{1 - x - x^2}$",
      "$G(x) = \\frac{1}{1 - x - x^2}$",
      "$G(x) = \\frac{x}{1 + x - x^2}$",
      "$G(x) = \\frac{1 - x}{1 - x - x^2}$"
    ],
    "correctAnswer": 0,
    "explanation": "Từ $G(x) - x G(x) - x^2 G(x) = F_0 + (F_1 - F_0)x + \\sum_{n=2}^{\\infty}(F_n - F_{n-1} - F_{n-2})x^n = 0 + (1 - 0)x + 0 = x$, ta rút được $G(x) = \\frac{x}{1 - x - x^2}$."
  },
  {
    "id": "c5_l5_q17",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Vận dụng",
    "question": "Bằng cách phân tích phân thức hữu tỉ $G(x) = \\frac{5 - 7x}{(1 - x)(1 - 2x)} = \\frac{A}{1 - x} + \\frac{B}{1 - 2x}$, dãy số $\\{a_n\\}$ tương ứng là:",
    "options": [
      "$a_n = -2 + 7 \\cdot 2^n$",
      "$a_n = 2 + 3 \\cdot 2^n$",
      "$a_n = 3 + 2 \\cdot 2^n$",
      "$a_n = 5 - 7 \\cdot 2^n$"
    ],
    "correctAnswer": 1,
    "explanation": "Quy đồng tử số: $A(1 - 2x) + B(1 - x) = 5 - 7x$. Thay $x = 1 \\implies -A = -2 \\implies A = 2$. Thay $x = \\frac{1}{2} \\implies \\frac{1}{2}B = \\frac{3}{2} \\implies B = 3$. Do đó $G(x) = \\frac{2}{1 - x} + \\frac{3}{1 - 2x} = \\sum_{n=0}^{\\infty} (2 + 3 \\cdot 2^n) x^n$."
  },
  {
    "id": "c5_l5_q18",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Vận dụng",
    "question": "Hàm sinh dùng để đếm số nghiệm nguyên của phương trình $x_1 + x_2 + x_3 = k$ với ràng buộc $1 \\le x_1 \\le 3$, $x_2 \\ge 2$ và $x_3 \\in \\{0, 2, 4, \\dots\\}$ ($x_3$ chẵn không âm) là:",
    "options": [
      "$\\frac{x^3}{(1 - x)^3}$",
      "$(1 + x + x^2 + x^3) \\cdot \\frac{x^2}{1 - x} \\cdot \\frac{1}{1 - x^2}$",
      "$(x + x^2 + x^3) \\cdot \\frac{x^2}{1 - x} \\cdot \\frac{1}{1 - x^2}$",
      "$(x + x^2 + x^3) \\cdot (x^2 + x^3) \\cdot (1 + x^2)$"
    ],
    "correctAnswer": 2,
    "explanation": "Nhân tử cho $x_1 \\in \\{1, 2, 3\\}$ là $(x + x^2 + x^3)$; nhân tử cho $x_2 \\ge 2$ là $x^2 + x^3 + \\dots = \\frac{x^2}{1 - x}$; nhân tử cho $x_3$ chẵn không âm là $1 + x^2 + x^4 + \\dots = \\frac{1}{1 - x^2}$. Tích ba nhân tử cho hàm sinh cần tìm."
  },
  {
    "id": "c5_l5_q19",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Thông hiểu",
    "question": "Cho $A(x) = \\sum_{n=0}^{\\infty} a_n x^n$ và $B(x) = \\sum_{n=0}^{\\infty} b_n x^n$. Hệ số của $x^n$ trong tích hai hàm sinh $C(x) = A(x) \\cdot B(x)$ (tích chập Cauchy) bằng:",
    "options": [
      "$c_n = a_n \\cdot b_n$",
      "$c_n = \\sum_{k=0}^n C_n^k a_k b_{n-k}$",
      "$c_n = a_n + b_n$",
      "$c_n = \\sum_{k=0}^n a_k b_{n-k}$"
    ],
    "correctAnswer": 3,
    "explanation": "Khi nhân hai chuỗi lũy thừa hình thức thông thường, các cặp số hạng $a_k x^k$ và $b_{n-k} x^{n-k}$ ghép lại thành $x^n$, nên hệ số của $x^n$ là tích chập $c_n = \\sum_{k=0}^n a_k b_{n-k}$."
  },
  {
    "id": "c5_l5_q20",
    "chapterId": "c5",
    "lessonId": "l5_5",
    "lessonTitle": "§5 Đệ quy Chia để trị (Định lý Master) & Hàm sinh",
    "difficulty": "Vận dụng",
    "question": "Nếu $G(x) = \\sum_{n=0}^{\\infty} a_n x^n$ là hàm sinh của dãy $\\{a_n\\}$, thì hàm sinh của dãy tổng riêng $s_n = \\sum_{k=0}^n a_k$ là:",
    "options": [
      "$\\frac{G(x)}{1 - x}$",
      "$(1 - x) G(x)$",
      "$x G'(x)$",
      "$G(x^2)$"
    ],
    "correctAnswer": 0,
    "explanation": "Nhân $G(x)$ với $\\frac{1}{1 - x} = \\sum_{n=0}^{\\infty} 1 \\cdot x^n$, theo công thức tích chập Cauchy hệ số của $x^n$ trong $\\frac{G(x)}{1 - x}$ bằng $\\sum_{k=0}^n a_k \\cdot 1 = s_n$."
  }
];
