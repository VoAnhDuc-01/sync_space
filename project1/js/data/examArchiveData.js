/**
 * KHO ĐỀ THI THỰC TẾ TOÁN RỜI RẠC – KHOA CNTT, TRƯỜNG ĐHSP TP.HCM (2022–2025)
 * Bao gồm đầy đủ 5 đề thi Giữa học phần & Kết thúc học phần kèm lời giải chi tiết từng bước bằng LaTeX.
 * Trích xuất & chuẩn hóa từ: extra/Toán rời rạc_/Tài liệu_/Tổng_hợp_đề_thi_Toán_rời_rạc.pdf
 */

const EXAM_ARCHIVE_DATA = [
  {
    id: 'dhsp_gk_2223',
    code: 'ĐỀ SỐ 01',
    title: 'Đề thi Giữa Học Phần – Năm học 2022–2023',
    institution: 'Trường ĐH Sư phạm TP.HCM – Khoa Công nghệ Thông tin',
    semester: 'Học kỳ 1 • Năm học 2022–2023',
    type: 'Giữa kỳ',
    durationMinutes: 70,
    totalPoints: 10,
    chaptersCovered: ['Chương 1: Cơ sở Logic', 'Chương 2: Phương pháp Đếm', 'Chương 3: Quan hệ'],
    pdfPath: 'extra/Toán rời rạc_/Tài liệu_/Tổng_hợp_đề_thi_Toán_rời_rạc.pdf',
    problems: [
      {
        id: 'gk2223_c1',
        label: 'Câu 1',
        points: 3.0,
        topic: 'Chương 1 • Kiểm tra tính hợp lý của suy luận',
        statement: `Kiểm tra tính hợp lý của suy luận sau bằng các quy tắc suy diễn (hoặc phương pháp phản chứng):

$$\\begin{aligned}
& t \\to u \\\\
& r \\to (s \\lor t) \\\\
& (\\neg p \\lor q) \\to r \\\\
& \\neg(s \\lor u) \\\\
\\hline
\\therefore \\; & p
\\end{aligned}$$`,
        solution: `### Lời giải chi tiết (Phương pháp Phản chứng)

Giả sử tất cả các tiền đề đều Đúng ($1$) và kết luận **Sai**, tức bổ sung tiền đề tạm $\\neg p$:

1. Ta có $\\neg(s \\lor u)$ (Tiền đề 4).
2. Áp dụng **Luật De Morgan** cho (1): $\\neg s \\land \\neg u$.
3. Áp dụng **Quy tắc Rút gọn (Simplification)** từ (2): thu được $\\neg s$ và $\\neg u$.
4. Kết hợp $t \\to u$ (Tiền đề 1) và $\\neg u$ theo **Modus Tollens**: suy ra $\\neg t$.
5. Kết hợp $\\neg s$ và $\\neg t$ theo **Quy tắc Hội (Conjunction)**: $\\neg s \\land \\neg t \\equiv \\neg(s \\lor t)$.
6. Kết hợp $r \\to (s \\lor t)$ (Tiền đề 2) và $\\neg(s \\lor t)$ theo **Modus Tollens**: suy ra $\\neg r$.
7. Mặt khác, từ giả thiết phản chứng $\\neg p$, áp dụng **Quy tắc Cộng (Addition)**: suy ra $\\neg p \\lor q$.
8. Kết hợp $(\\neg p \\lor q) \\to r$ (Tiền đề 3) và $\\neg p \\lor q$ theo **Modus Ponens**: suy ra $r$.
9. Từ (6) và (8) ta có $r \\land \\neg r \\equiv 0$ (**mâu thuẫn**!).

> **Kết luận:** Giả thiết phản chứng $\\neg p$ sai, vậy suy luận đã cho là **hợp lý** ($\\therefore p$).`
      },
      {
        id: 'gk2223_c2',
        label: 'Câu 2',
        points: 4.5,
        topic: 'Chương 2 • Tổ hợp, Tập con có điều kiện & Phương trình nghiệm nguyên',
        statement: `Giải các bài toán đếm sau:

- **a) (1.5 điểm)** Từ tập chữ số $E = \\{0, 1, 2, 3, 4, 5\\}$, lập được bao nhiêu **số tự nhiên chẵn gồm $3$ chữ số đôi một khác nhau**?
- **b) (1.5 điểm)** Cho tập $S = \\{1, 2, \\dots, 20\\}$. Có bao nhiêu tập con $A \\subseteq S$ thỏa mãn đồng thời $\\min(A) = 8$ và $|A| \\ge 10$?
- **c) (1.5 điểm)** Tìm số nghiệm nguyên không âm của phương trình $x_1 + x_2 + x_3 = 15$ thỏa mãn $x_1 > 2$ và $x_2 < 4$.`,
        solution: `### Lời giải chi tiết

**a) Đếm số chẵn $3$ chữ số đôi một khác nhau từ $E = \\{0, 1, 2, 3, 4, 5\\}$:**
Gọi số cần lập là $\\overline{abc}$ với $a \\neq 0$; $a, b, c \\in E$ đôi một khác nhau và $c \\in \\{0, 2, 4\\}$. Ta chia làm $2$ trường hợp rời nhau:
- **Trường hợp 1 ($c = 0$):** $c$ có $1$ cách chọn; $a \\in \\{1, 2, 3, 4, 5\\}$ có $5$ cách chọn; $b \\in E \\setminus \\{a, 0\\}$ có $4$ cách chọn $\\implies 1 \\cdot 5 \\cdot 4 = 20$ số.
- **Trường hợp 2 ($c \\in \\{2, 4\\}$):** $c$ có $2$ cách chọn; $a \\in E \\setminus \\{0, c\\}$ có $4$ cách chọn; $b \\in E \\setminus \\{a, c\\}$ có $4$ cách chọn $\\implies 2 \\cdot 4 \\cdot 4 = 32$ số.
- Theo quy tắc cộng, tổng số các số thỏa mãn là: $20 + 32 = \\mathbf{52}$ số.

**b) Tập con $A \\subseteq \\{1, \\dots, 20\\}$ có $\\min(A) = 8$ và $|A| \\ge 10$:**
- Điều kiện $\\min(A) = 8$ đòi hỏi $8 \\in A$ và $\\{1, 2, 3, 4, 5, 6, 7\\} \\cap A = \\emptyset$.
- Các phần tử còn lại của $A$ được lấy từ tập $T = \\{9, 10, \\dots, 20\\}$ gồm $|T| = 12$ phần tử.
- Để $|A| \\ge 10$, số phần tử chọn thêm từ $T$ phải là $k = |A| - 1 \\ge 9$, tức $k \\in \\{9, 10, 11, 12\\}$.
- Số tập con thỏa mãn là:

$$N = \\sum_{k=9}^{12} C_{12}^k = C_{12}^9 + C_{12}^{10} + C_{12}^{11} + C_{12}^{12} = 220 + 66 + 12 + 1 = \\mathbf{299}$$

**c) Nghiệm nguyên không âm của $x_1 + x_2 + x_3 = 15$ với $x_1 > 2, x_2 < 4$:**
- Vì $x_1 \\in \\mathbb{Z}$ nên $x_1 > 2 \\iff x_1 \\ge 3$. Đặt $y_1 = x_1 - 3 \\ge 0$, phương trình trở thành:

$$y_1 + x_2 + x_3 = 12 \\quad (y_1, x_2, x_3 \\ge 0, \\; x_2 \\le 3)$$

- Tổng số nghiệm nguyên không âm của $y_1 + x_2 + x_3 = 12$ (chưa ràng buộc cận trên $x_2$) là: $N_{\\text{all}} = K_3^{12} = C_{3+12-1}^{12} = C_{14}^{12} = C_{14}^2 = 91$.
- Số nghiệm vi phạm điều kiện $x_2 \\ge 4$: đặt $y_2 = x_2 - 4 \\ge 0$, ta có $y_1 + y_2 + x_3 = 8$, có $N_{\\text{bad}} = K_3^8 = C_{3+8-1}^8 = C_{10}^8 = C_{10}^2 = 45$ nghiệm.
- Theo nguyên lý phần bù, số nghiệm thỏa mãn là: $N = 91 - 45 = \\mathbf{46}$.`
      },
      {
        id: 'gk2223_c3',
        label: 'Câu 3',
        points: 2.5,
        topic: 'Chương 3 • Quan hệ tương đương & Lớp tương đương',
        statement: `Trên tập số nguyên $\\mathbb{Z}$, định nghĩa quan hệ hai ngôi $\\mathcal{R}$ như sau:

$$\\forall x, y \\in \\mathbb{Z}, \\quad x \\mathcal{R} y \\iff (x - y) \\text{ chia hết cho } 5$$

1. Chứng minh $\\mathcal{R}$ là một quan hệ tương đương trên $\\mathbb{Z}$.
2. Xác định tất cả các lớp tương đương của $\\mathcal{R}$ và thương tập $\\mathbb{Z} / \\mathcal{R}$.`,
        solution: `### Lời giải chi tiết

**1. Chứng minh $\\mathcal{R}$ là quan hệ tương đương trên $\\mathbb{Z}$:**
- **Tính phản xạ:** Với mọi $x \\in \\mathbb{Z}$, ta có $x - x = 0 = 5 \\cdot 0 \\vdots 5 \\implies x \\mathcal{R} x$.
- **Tính đối xứng:** Với mọi $x, y \\in \\mathbb{Z}$, nếu $x \\mathcal{R} y$ thì $x - y = 5k$ ($k \\in \\mathbb{Z}$), suy ra $y - x = 5(-k) \\vdots 5 \\implies y \\mathcal{R} x$.
- **Tính bắc cầu:** Với mọi $x, y, z \\in \\mathbb{Z}$, nếu $x \\mathcal{R} y$ và $y \\mathcal{R} z$ thì $x - y = 5k$ và $y - z = 5m$ ($k, m \\in \\mathbb{Z}$). Cộng lại: $x - z = (x - y) + (y - z) = 5(k + m) \\vdots 5 \\implies x \\mathcal{R} z$.
Do thỏa đủ $3$ tính chất nên $\\mathcal{R}$ là quan hệ tương đương.

**2. Các lớp tương đương và thương tập $\\mathbb{Z} / \\mathcal{R}$:**
Theo phép chia Euclide cho $5$, mỗi số nguyên $x \\in \\mathbb{Z}$ có dạng $x = 5q + r$ với số dư duy nhất $r \\in \\{0, 1, 2, 3, 4\\}$, nên $x \\mathcal{R} r$. Vậy có đúng **$5$ lớp tương đương đôi một rời nhau**:
- $\\overline{0} = [0] = \\{5k \\mid k \\in \\mathbb{Z}\\}$
- $\\overline{1} = [1] = \\{5k + 1 \\mid k \\in \\mathbb{Z}\\}$
- $\\overline{2} = [2] = \\{5k + 2 \\mid k \\in \\mathbb{Z}\\}$
- $\\overline{3} = [3] = \\{5k + 3 \\mid k \\in \\mathbb{Z}\\}$
- $\\overline{4} = [4] = \\{5k + 4 \\mid k \\in \\mathbb{Z}\\}$

Thương tập: $\\mathbb{Z} / \\mathcal{R} = \\mathbb{Z}_5 = \\{\\overline{0}, \\overline{1}, \\overline{2}, \\overline{3}, \\overline{4}\\}$.`
      }
    ]
  },
  {
    id: 'dhsp_gk_2324',
    code: 'ĐỀ SỐ 02',
    title: 'Đề thi Giữa Học Phần – Năm học 2023–2024',
    institution: 'Trường ĐH Sư phạm TP.HCM – Khoa Công nghệ Thông tin',
    semester: 'Học kỳ 1 • Năm học 2023–2024',
    type: 'Giữa kỳ',
    durationMinutes: 90,
    totalPoints: 10,
    chaptersCovered: ['Chương 1: Cơ sở Logic & Lượng từ', 'Chương 2: Phương pháp Đếm', 'Chương 3: Quan hệ'],
    pdfPath: 'extra/Toán rời rạc_/Tài liệu_/Tổng_hợp_đề_thi_Toán_rời_rạc.pdf',
    problems: [
      {
        id: 'gk2324_c1',
        label: 'Câu 1',
        points: 3.5,
        topic: 'Chương 1 • Suy diễn Logic & Phủ định Mệnh đề Lượng từ',
        statement: `1. **(1.5 điểm)** Kiểm tra tính đúng đắn của suy luận sau:

$$p, \\quad p \\to r, \\quad p \\to (q \\lor \\neg r) \\quad \\therefore q$$

2. **(1.0 điểm)** Lấy phủ định các mệnh đề sau đây:
   - *"Nếu bình phương của một số nguyên là lẻ thì số nguyên ấy là lẻ."*
   - "$\\exists x \\in \\mathbb{R}, \\; (x^2 - 4x - 5 = 0) \\to (x > 0)$"`,
        solution: `### Lời giải chi tiết

**1. Chứng minh suy luận trực tiếp:**
- Bước 1: $p$ *(Tiền đề 1)*
- Bước 2: $p \\to r$ *(Tiền đề 2)*
- Bước 3: $r$ *(Modus Ponens từ 1 và 2)*
- Bước 4: $p \\to (q \\lor \\neg r)$ *(Tiền đề 3)*
- Bước 5: $q \\lor \\neg r$ *(Modus Ponens từ 1 và 4)*
- Bước 6: $\\neg(\\neg r)$ *(Luật phủ định kép từ 3)*
- Bước 7: $q$ *(Tam đoạn luận rời / Disjunctive Syllogism từ 5 và 6)*. Vậy suy luận **hợp lý**.

**2. Lập mệnh đề phủ định lượng từ:**
Áp dụng luật De Morgan cho lượng từ và $\\neg(A \\to B) \\equiv A \\land \\neg B$:
- Mệnh đề đầu viết lại dạng lượng từ: $\\forall n \\in \\mathbb{Z}, \\; (n^2 \\text{ lẻ}) \\to (n \\text{ lẻ})$. Phủ định là: $\\exists n \\in \\mathbb{Z}, \\; (n^2 \\text{ lẻ}) \\land (n \\text{ chẵn})$ — *"Tồn tại một số nguyên có bình phương là số lẻ nhưng chính nó là số chẵn"*.
- Mệnh đề thứ hai có phủ định là: $\\forall x \\in \\mathbb{R}, \\; (x^2 - 4x - 5 = 0) \\land (x \\le 0)$.`
      },
      {
        id: 'gk2324_c2',
        label: 'Câu 2',
        points: 4.0,
        topic: 'Chương 2 • Đếm Tập con & Nghiệm nguyên có Ràng buộc',
        statement: `1. **(2.0 điểm)** Cho tập hợp $S = \\{1, 2, 3, \\dots, 10\\}$. Có bao nhiêu tập con $A \\subseteq S$ gồm đúng $6$ phần tử sao cho phần tử lớn nhất của $A$ bằng $8$ ($\\max(A) = 8$)?
2. **(2.0 điểm)** Tìm số nghiệm nguyên không âm của phương trình:

$$x_1 + x_2 + x_3 + x_4 = 16$$

thỏa mãn điều kiện $x_1 > 0$ và $x_2 \\le 4$.`,
        solution: `### Lời giải chi tiết

**1. Đếm số tập con $A \\subseteq \\{1..10\\}$ có $|A| = 6$ và $\\max(A) = 8$:**
- Để $\\max(A) = 8$: bắt buộc $8 \\in A$ ($1$ cách) và $9 \\notin A, 10 \\notin A$.
- Để $|A| = 6$, ta cần chọn thêm $6 - 1 = 5$ phần tử từ tập $\\{1, 2, 3, 4, 5, 6, 7\\}$ ($7$ phần tử).
- Số tập con thỏa mãn là:

$$C_7^5 = C_7^2 = \\frac{7 \\cdot 6}{2} = \\mathbf{21}$$

**2. Nghiệm nguyên không âm của $x_1 + x_2 + x_3 + x_4 = 16$ với $x_1 > 0, x_2 \\le 4$:**
- Vì $x_1 \\in \\mathbb{Z}$ và $x_1 > 0 \\iff x_1 \\ge 1$, đặt $y_1 = x_1 - 1 \\ge 0$. Phương trình chuyển thành:

$$y_1 + x_2 + x_3 + x_4 = 15 \\quad (y_1, x_2, x_3, x_4 \\ge 0, \\; x_2 \\le 4)$$

- Tổng số nghiệm không âm của phương trình trên (không ràng buộc $x_2 \\le 4$) là:

$$N_{\\text{all}} = K_4^{15} = C_{4+15-1}^{15} = C_{18}^{15} = C_{18}^3 = \\frac{18 \\cdot 17 \\cdot 16}{6} = 816$$

- Số nghiệm vi phạm điều kiện $x_2 \\ge 5$: đặt $y_2 = x_2 - 5 \\ge 0$, phương trình thành $y_1 + y_2 + x_3 + x_4 = 10$, có số nghiệm là:

$$N_{\\text{bad}} = K_4^{10} = C_{4+10-1}^{10} = C_{13}^{10} = C_{13}^3 = \\frac{13 \\cdot 12 \\cdot 11}{6} = 286$$

- Vậy số nghiệm thỏa đề bài là: $N = 816 - 286 = \\mathbf{530}$.`
      },
      {
        id: 'gk2324_c3',
        label: 'Câu 3',
        points: 2.5,
        topic: 'Chương 3 • Quan hệ tương đương trên tập hữu hạn',
        statement: `Trên tập hợp $A = \\{1, 2, 3, 4, 5, 6\\}$, xét quan hệ hai ngôi $\\mathcal{R}$ xác định bởi:

$$x \\mathcal{R} y \\iff (x + y) \\text{ là một số chẵn}$$

Chứng minh $\\mathcal{R}$ là quan hệ tương đương và tìm phân hoạch $A / \\mathcal{R}$.`,
        solution: `### Lời giải chi tiết

- **Phản xạ:** $\\forall x \\in A$, $x + x = 2x$ luôn chẵn $\\implies x \\mathcal{R} x$.
- **Đối xứng:** $\\forall x, y \\in A$, nếu $x + y$ chẵn thì $y + x = x + y$ cũng chẵn $\\implies y \\mathcal{R} x$.
- **Bắc cầu:** $\\forall x, y, z \\in A$, nếu $x + y = 2k$ và $y + z = 2m$ ($k, m \\in \\mathbb{Z}$) thì $x + z = (x + y) + (y + z) - 2y = 2(k + m - y)$ là số chẵn $\\implies x \\mathcal{R} z$.
- Vậy $\\mathcal{R}$ là **quan hệ tương đương**.
- Hai phần tử có tổng chẵn khi và chỉ khi chúng cùng tính chẵn lẻ:
  - Lớp các số lẻ: $[1] = [3] = [5] = \\{1, 3, 5\\}$.
  - Lớp các số chẵn: $[2] = [4] = [6] = \\{2, 4, 6\\}$.
- Phân hoạch thương tập: $A / \\mathcal{R} = \\{\\{1, 3, 5\\}, \\{2, 4, 6\\}\\}$.`
      }
    ]
  },
  {
    id: 'dhsp_ck_2223',
    code: 'ĐỀ SỐ 03',
    title: 'Đề thi Kết Thúc Học Phần – Năm học 2022–2023',
    institution: 'Trường ĐH Sư phạm TP.HCM – Khoa Công nghệ Thông tin',
    semester: 'Học kỳ 1 • Năm học 2022–2023',
    type: 'Cuối kỳ',
    durationMinutes: 90,
    totalPoints: 10,
    chaptersCovered: ['Chương 2: Tổ hợp lặp', 'Chương 3: Poset & Hasse', 'Chương 4: Karnaugh', 'Chương 5: Hệ thức Đệ quy'],
    pdfPath: 'extra/Toán rời rạc_/Tài liệu_/Tổng_hợp_đề_thi_Toán_rời_rạc.pdf',
    problems: [
      {
        id: 'ck2223_c1',
        label: 'Câu 1',
        points: 2.0,
        topic: 'Chương 2 • Phương trình nghiệm nguyên có cận dưới',
        statement: `Tìm số nghiệm nguyên của phương trình:

$$x + y + z + t = 20$$

thỏa mãn các điều kiện $x > 3, \\; y \\ge 4, \\; z \\ge 5, \\; t \\ge 2$.`,
        solution: `### Lời giải chi tiết

Do $x$ nguyên nên điều kiện $x > 3$ tương đương với $x \\ge 4$.
Đặt các biến nguyên không âm:

$$x' = x - 4 \\ge 0, \\quad y' = y - 4 \\ge 0, \\quad z' = z - 5 \\ge 0, \\quad t' = t - 2 \\ge 0$$

Thay vào phương trình ban đầu:

$$(x' + 4) + (y' + 4) + (z' + 5) + (t' + 2) = 20 \\iff x' + y' + z' + t' = 5$$

Số nghiệm nguyên không âm của phương trình $4$ ẩn có tổng bằng $5$ là tổ hợp lặp:

$$K_4^5 = \\overline{C}_4^5 = C_{4+5-1}^5 = C_8^5 = C_8^3 = \\frac{8 \\cdot 7 \\cdot 6}{6} = \\mathbf{56}$$`
      },
      {
        id: 'ck2223_c2',
        label: 'Câu 2',
        points: 2.5,
        topic: 'Chương 3 • Tập thứ tự bộ phận (Poset) & Biểu đồ Hasse',
        statement: `Cho tập hợp $A = \\{2, 3, 4, 6, 8\\}$ cùng quan hệ ước số $\\mid$ ($x \\mid y \\iff y$ chia hết cho $x$).
1. Vẽ biểu đồ Hasse cho tập thứ tự $(A, \\mid)$.
2. Tìm các phần tử tối tiểu, tối đại, phần tử nhỏ nhất và phần tử lớn nhất (nếu có) của $(A, \\mid)$.`,
        solution: `### Lời giải chi tiết

**1. Quan hệ trội trực tiếp (các cạnh của biểu đồ Hasse):**
- Tầng đáy (tối tiểu): đỉnh $2$ và đỉnh $3$.
- Tầng giữa: đỉnh $4$ (nối từ $2 \\to 4$) và đỉnh $6$ (nối từ $2 \\to 6$ và $3 \\to 6$).
- Tầng trên: đỉnh $8$ (nối từ $4 \\to 8$; không nối trực tiếp $2 \\to 8$ do tính bắc cầu qua $4$).
- Các cạnh của biểu đồ Hasse gồm $4$ cạnh có hướng đi lên: $(2, 4), (4, 8), (2, 6), (3, 6)$.

**2. Các phần tử đặc biệt:**
- **Phần tử tối tiểu:** $\\{2, 3\\}$ (không có phần tử nào trong $A$ khác chính nó là ước của $2$ hoặc $3$).
- **Phần tử tối đại:** $\\{6, 8\\}$ ($6$ và $8$ không là ước của phần tử nào khác trong $A$).
- **Phần tử nhỏ nhất:** **Không tồn tại** (vì có hai phần tử tối tiểu phân biệt $2$ và $3$ không so sánh được với nhau).
- **Phần tử lớn nhất:** **Không tồn tại** (vì có hai phần tử tối đại phân biệt $6$ và $8$).`
      },
      {
        id: 'ck2223_c3',
        label: 'Câu 3',
        points: 2.5,
        topic: 'Chương 5 • Giải Hệ thức Đệ quy tuyến tính thuần nhất bậc 2',
        statement: `Giải hệ thức đệ quy sau:

$$a_n = a_{n-1} + 6a_{n-2} \\quad (\\forall n \\ge 2), \\qquad a_0 = 2, \\; a_1 = 2$$`,
        solution: `### Lời giải chi tiết

Chuyển vế hệ thức thuần nhất: $a_n - a_{n-1} - 6a_{n-2} = 0$.
- **Phương trình đặc trưng:**

$$r^2 - r - 6 = 0 \\iff (r - 3)(r + 2) = 0 \\iff \\begin{bmatrix} r_1 = 3 \\\\ r_2 = -2 \\end{bmatrix}$$

- **Dạng nghiệm tổng quát:** $a_n = \\alpha \\cdot 3^n + \\beta (-2)^n$.
- **Thay điều kiện đầu $a_0 = 2, a_1 = 2$:**

$$\\begin{cases} \\alpha + \\beta = 2 \\\\ 3\\alpha - 2\\beta = 2 \\end{cases} \\iff \\begin{cases} 2\\alpha + 2\\beta = 4 \\\\ 3\\alpha - 2\\beta = 2 \\end{cases} \\iff \\begin{cases} \\alpha = \\frac{6}{5} \\\\ \\beta = \\frac{4}{5} \\end{cases}$$

- **Công thức nghiệm chính xác:**

$$a_n = \\frac{6}{5} \\cdot 3^n + \\frac{4}{5}(-2)^n \\quad (\\forall n \\ge 0)$$

*(Kiểm tra: $a_0 = \\frac{6}{5} + \\frac{4}{5} = 2$; $a_1 = \\frac{18}{5} - \\frac{8}{5} = 2$; $a_2 = \\frac{54}{5} + \\frac{16}{5} = 14 = 2 + 6 \\cdot 2$ — Đúng!)*`
      },
      {
        id: 'ck2223_c4',
        label: 'Câu 4',
        points: 3.0,
        topic: 'Chương 4 • Tối tiểu hóa Hàm Bool bằng Biểu đồ Karnaugh',
        statement: `Cho hàm Boole $4$ biến:

$$f(x, y, z, t) = x\\overline{y}z \\lor xyt \\lor \\overline{x}y\\overline{z} \\lor xt$$

- **a) (1.0 điểm)** Vẽ biểu đồ Karnaugh của hàm $f$. Tìm tất cả các tế bào lớn.
- **b) (1.0 điểm)** Tìm công thức đa thức tối tiểu của $f$.
- **c) (1.0 điểm)** Vẽ mạng các cổng tổng hợp của $f$ với số cổng ít nhất có thể được.`,
        solution: `### Lời giải chi tiết

**1. Biểu diễn các đơn thức lên bảng Karnaugh $4$ biến $(xy \\setminus zt)$ theo mã Gray $(00, 01, 11, 10)$:**
- $x\\overline{y}z$ ($x=1, y=0, z=1$): phủ $2$ ô $m_{10}(1010), m_{11}(1011)$.
- $xyt$ ($x=1, y=1, t=1$): phủ $2$ ô $m_{13}(1101), m_{15}(1111)$.
- $\\overline{x}y\\overline{z}$ ($x=0, y=1, z=0$): phủ $2$ ô $m_4(0100), m_5(0101)$.
- $xt$ ($x=1, t=1$): phủ $4$ ô $m_9(1001), m_{11}(1011), m_{13}(1101), m_{15}(1111)$.
- Tập minterm của hàm là: $f = \\sum m(4, 5, 9, 10, 11, 13, 15)$.

**2. a) Tất cả các tế bào lớn (Prime Implicants) & b) Công thức đa thức tối tiểu:**
Có tất cả **$4$ tế bào lớn**:
- Nhóm $4$ ô $\\{m_9, m_{11}, m_{13}, m_{15}\\} \\leftrightarrow xt$: là **EPI** (duy nhất phủ $m_9, m_{15}$; hấp thụ hoàn toàn $xyt$).
- Nhóm $2$ ô $\\{m_4, m_5\\} \\leftrightarrow \\overline{x}y\\overline{z}$: là **EPI** (duy nhất phủ $m_4$).
- Nhóm $2$ ô $\\{m_{10}, m_{11}\\} \\leftrightarrow x\\overline{y}z$: là **EPI** (duy nhất phủ $m_{10}$).
- Nhóm $2$ ô $\\{m_5, m_{13}\\} \\leftrightarrow y\\overline{z}t$: là tế bào lớn **không cốt yếu** (dư thừa vì $m_5, m_{13}$ đã được phủ bởi hai EPI đầu).

Ba EPI trên đã phủ kín cả $7$ ô mang giá trị $1$. Vậy công thức đa thức tối tiểu duy nhất là:

$$f(x, y, z, t) = xt \\lor \\overline{x}y\\overline{z} \\lor x\\overline{y}z$$

**3. c) Mạng cổng tổng hợp tối ưu:**
Cần tổng cộng **$7$ cổng logic**: $3$ cổng NOT (tạo $\\overline{x}, \\overline{y}, \\overline{z}$), $3$ cổng AND (tạo $xt$, $\\overline{x}y\\overline{z}$, $x\\overline{y}z$) và $1$ cổng OR $3$ ngõ vào ghép thành $f$.`
      }
    ]
  },
  {
    id: 'dhsp_ck_2324',
    code: 'ĐỀ SỐ 04',
    title: 'Đề thi Kết Thúc Học Phần – Năm học 2023–2024',
    institution: 'Trường ĐH Sư phạm TP.HCM – Khoa Công nghệ Thông tin',
    semester: 'Học kỳ 1 • Năm học 2023–2024',
    type: 'Cuối kỳ',
    durationMinutes: 90,
    totalPoints: 10,
    chaptersCovered: ['Chương 2: Tổ hợp lặp & Ánh xạ', 'Chương 3: Poset tập lũy thừa', 'Chương 4: Karnaugh', 'Chương 5: Đệ quy'],
    pdfPath: 'extra/Toán rời rạc_/Tài liệu_/Tổng_hợp_đề_thi_Toán_rời_rạc.pdf',
    problems: [
      {
        id: 'ck2324_c1',
        label: 'Câu 1',
        points: 1.5,
        topic: 'Chương 2 • Phương trình nghiệm nguyên',
        statement: `Tìm số nghiệm nguyên của phương trình $x + y + z + t = 20$ thỏa mãn:

$$x > 2, \\quad y > 4, \\quad z \\ge 3, \\quad t \\ge 3$$`,
        solution: `### Lời giải chi tiết

Với các biến nguyên: $x > 2 \\iff x \\ge 3$ và $y > 4 \\iff y \\ge 5$.
Đặt $x' = x - 3 \\ge 0, \\; y' = y - 5 \\ge 0, \\; z' = z - 3 \\ge 0, \\; t' = t - 3 \\ge 0$.
Tổng cận dưới bằng $3 + 5 + 3 + 3 = 14$. Phương trình tương đương với:

$$x' + y' + z' + t' = 20 - 14 = 6 \\quad (x', y', z', t' \\in \\mathbb{N})$$

Số nghiệm là tổ hợp lặp:

$$K_4^6 = C_{4+6-1}^6 = C_9^6 = C_9^3 = \\frac{9 \\cdot 8 \\cdot 7}{6} = \\mathbf{84}$$`
      },
      {
        id: 'ck2324_c2',
        label: 'Câu 2',
        points: 2.0,
        topic: 'Chương 2 • Chứng minh Song ánh & Tìm Ánh xạ ngược',
        statement: `Cho ánh xạ $f: \\mathbb{R} \\setminus \\{3\\} \\to \\mathbb{R} \\setminus \\{1\\}$ xác định bởi:

$$f(x) = \\frac{x + 1}{x - 3}$$

Chứng minh $f$ là một song ánh và tìm ánh xạ ngược $f^{-1}$.`,
        solution: `### Lời giải chi tiết

- **Đơn ánh:** Với mọi $x_1, x_2 \\in \\mathbb{R} \\setminus \\{3\\}$, giả sử $f(x_1) = f(x_2)$:

$$\\frac{x_1 + 1}{x_1 - 3} = \\frac{x_2 + 1}{x_2 - 3} \\iff (x_1 + 1)(x_2 - 3) = (x_2 + 1)(x_1 - 3) \\iff -3x_1 + x_2 = -3x_2 + x_1 \\iff 4x_1 = 4x_2 \\iff x_1 = x_2$$

Vậy $f$ là đơn ánh.
- **Toàn ánh & Ánh xạ ngược:** Lấy $y \\in \\mathbb{R} \\setminus \\{1\\}$ bất kỳ, xét phương trình $f(x) = y$:

$$\\frac{x + 1}{x - 3} = y \\iff x + 1 = xy - 3y \\iff x(1 - y) = -3y - 1 \\iff x = \\frac{3y + 1}{y - 1}$$

Do $y \\neq 1$ nên $x$ xác định duy nhất, đồng thời $x - 3 = \\frac{3y + 1 - 3(y - 1)}{y - 1} = \\frac{4}{y - 1} \\neq 0 \\implies x \\in \\mathbb{R} \\setminus \\{3\\}$.
Vậy $f$ là toàn ánh, suy ra $f$ là **song ánh** với ánh xạ ngược:

$$f^{-1}: \\mathbb{R} \\setminus \\{1\\} \\to \\mathbb{R} \\setminus \\{3\\}, \\qquad f^{-1}(x) = \\frac{3x + 1}{x - 1}$$`
      },
      {
        id: 'ck2324_c3',
        label: 'Câu 3',
        points: 2.0,
        topic: 'Chương 3 • Tập thứ tự $(\\mathcal{P}(E), \\subseteq)$ & Biểu đồ Hasse',
        statement: `Cho tập $E = \\{a, b, c\\}$. Xét tập lũy thừa $\\mathcal{P}(E)$ cùng quan hệ bao hàm $\\subseteq$.
Vẽ biểu đồ Hasse của $(\\mathcal{P}(E), \\subseteq)$ và chỉ ra các phần tử tối tiểu, tối đại, nhỏ nhất, lớn nhất.`,
        solution: `### Lời giải chi tiết

Tập $\\mathcal{P}(E)$ gồm $2^3 = 8$ tập con phân theo $4$ tầng lực lượng:
- **Tầng 0 ($|X| = 0$):** $\\emptyset$.
- **Tầng 1 ($|X| = 1$):** $\\{a\\}, \\{b\\}, \\{c\\}$ (nối từ $\\emptyset$ lên cả $3$ đỉnh).
- **Tầng 2 ($|X| = 2$):** $\\{a, b\\}, \\{a, c\\}, \\{b, c\\}$ (mỗi tập $1$ phần tử nối lên $2$ tập $2$ phần tử chứa nó).
- **Tầng 3 ($|X| = 3$):** $E = \\{a, b, c\\}$ (cả $3$ tập tầng $2$ đều nối lên $E$).
- Biểu đồ Hasse có $8$ đỉnh và $12$ cạnh (đẳng cấu khối lập phương $3$ chiều $Q_3$).
- **Phần tử nhỏ nhất = Phần tử tối tiểu duy nhất:** $\\emptyset$.
- **Phần tử lớn nhất = Phần tử tối đại duy nhất:** $\\{a, b, c\\}$.`
      },
      {
        id: 'ck2324_c4',
        label: 'Câu 4',
        points: 2.0,
        topic: 'Chương 5 • Giải Hệ thức Đệ quy tuyến tính bậc 2',
        statement: `Giải hệ thức đệ quy:

$$a_n = 2a_{n-1} + 8a_{n-2} \\quad (\\forall n \\ge 2), \\qquad a_0 = 2, \\; a_1 = 4$$`,
        solution: `### Lời giải chi tiết

- **Phương trình đặc trưng:**

$$r^2 - 2r - 8 = 0 \\iff (r - 4)(r + 2) = 0 \\iff r_1 = 4, \\; r_2 = -2$$

- **Nghiệm tổng quát:** $a_n = \\alpha \\cdot 4^n + \\beta (-2)^n$.
- **Áp dụng điều kiện đầu $a_0 = 2, a_1 = 4$:**

$$\\begin{cases} \\alpha + \\beta = 2 \\\\ 4\\alpha - 2\\beta = 4 \\end{cases} \\implies 6\\alpha = 8 \\implies \\alpha = \\frac{4}{3}, \\quad \\beta = 2 - \\frac{4}{3} = \\frac{2}{3}$$

- **Vậy nghiệm cần tìm là:**

$$a_n = \\frac{4}{3} \\cdot 4^n + \\frac{2}{3}(-2)^n \\quad (\\forall n \\ge 0)$$`
      },
      {
        id: 'ck2324_c5',
        label: 'Câu 5',
        points: 2.5,
        topic: 'Chương 4 • Biểu đồ Karnaugh có nhiều công thức tối tiểu đồng hạng',
        statement: `Tìm tất cả các công thức đa thức tối tiểu của hàm Bool $4$ biến:

$$f(x, y, z, t) = xz\\overline{t} \\lor xyt \\lor \\overline{x}y\\overline{z} \\lor \\overline{y}z\\overline{t}$$`,
        solution: `### Lời giải chi tiết

**1. Xác định tập minterm của $f$:**
- $xz\\overline{t} \\leftrightarrow \\{m_{10}, m_{14}\\}$
- $xyt \\leftrightarrow \\{m_{13}, m_{15}\\}$
- $\\overline{x}y\\overline{z} \\leftrightarrow \\{m_4, m_5\\}$
- $\\overline{y}z\\overline{t} \\leftrightarrow \\{m_2, m_{10}\\}$
- Vậy $f = \\sum m(2, 4, 5, 10, 13, 14, 15)$.

**2. Tìm tất cả các tế bào lớn (Prime Implicants):**
- $P_1 = \\overline{y}z\\overline{t} = \\{2, 10\\}$ — **EPI** (duy nhất phủ $m_2$).
- $P_2 = \\overline{x}y\\overline{z} = \\{4, 5\\}$ — **EPI** (duy nhất phủ $m_4, m_5$).
- $P_3 = xyt = \\{13, 15\\}$ — **EPI** (duy nhất phủ $m_{13}$).
- $P_4 = xz\\overline{t} = \\{10, 14\\}$ (không cốt yếu).
- $P_5 = xyz = \\{14, 15\\}$ (tế bào lớn mới tạo thành do $m_{14}$ kề $m_{15}$, không cốt yếu).

**3. Phủ ô còn sót $m_{14}$:**
Ba EPI $P_1, P_2, P_3$ đã phủ $\\{2, 4, 5, 10, 13, 15\\}$, chỉ còn lại ô $m_{14}$. Ô $m_{14}$ được phủ bởi $P_4 = xz\\overline{t}$ hoặc $P_5 = xyz$ (cùng $3$ literal). Vậy hàm có **đúng $2$ công thức đa thức tối tiểu đồng hạng**:

$$f_1 = \\overline{y}z\\overline{t} \\lor \\overline{x}y\\overline{z} \\lor xyt \\lor xz\\overline{t}$$

$$f_2 = \\overline{y}z\\overline{t} \\lor \\overline{x}y\\overline{z} \\lor xyt \\lor xyz$$`
      }
    ]
  },
  {
    id: 'dhsp_ck_2425',
    code: 'ĐỀ SỐ 05',
    title: 'Đề thi Kết Thúc Học Phần – Năm học 2024–2025',
    institution: 'Trường ĐH Sư phạm TP.HCM – Khoa Công nghệ Thông tin',
    semester: 'Học kỳ 1 • Năm học 2024–2025',
    type: 'Cuối kỳ',
    durationMinutes: 90,
    totalPoints: 10,
    chaptersCovered: ['Chương 3: Quan hệ tương đương', 'Chương 4: Karnaugh 4 biến', 'Chương 5: Mô hình hóa & Giải Đệ quy'],
    pdfPath: 'extra/Toán rời rạc_/Tài liệu_/Tổng_hợp_đề_thi_Toán_rời_rạc.pdf',
    problems: [
      {
        id: 'ck2425_c1',
        label: 'Câu 1',
        points: 4.0,
        topic: 'Chương 5 • Mô hình hóa Đệ quy & Nghiệm kép đặc trưng',
        statement: `1. **(2.0 điểm)** Lập hệ thức đệ quy kèm điều kiện đầu cho số cách đổi $n$ đồng ($n \\ge 0$) thành các đồng xu mệnh giá $1$ đồng và $2$ đồng. *(Trình bày rõ trường hợp có phân biệt thứ tự bỏ xu và không phân biệt thứ tự bỏ xu).*
2. **(2.0 điểm)** Giải hệ thức đệ quy:

$$x_n = 6x_{n-1} - 9x_{n-2} \\quad (\\forall n \\ge 2), \\qquad x_0 = 2, \\; x_1 = 6$$`,
        solution: `### Lời giải chi tiết

**1. Mô hình hóa bài toán đổi $n$ đồng bằng xu $1$ đồng và $2$ đồng:**
- **Mô hình A (Có phân biệt thứ tự các đồng xu):**
  - Nếu đồng xu đầu tiên là $1$ đồng: số tiền còn lại $n - 1$ đồng có $a_{n-1}$ cách.
  - Nếu đồng xu đầu tiên là $2$ đồng: số tiền còn lại $n - 2$ đồng có $a_{n-2}$ cách.
  - Hệ thức: $a_n = a_{n-1} + a_{n-2}$ ($n \\ge 2$) với $a_0 = 1, a_1 = 1$ (dãy Fibonacci dịch chỉ số).
- **Mô hình B (Không phân biệt thứ tự — chỉ tính số lượng mỗi loại xu):**
  - Không dùng đồng $2$ đồng nào: có duy nhất $1$ cách (toàn xu $1$ đồng).
  - Có dùng ít nhất một đồng $2$ đồng: bớt đi một đồng $2$ đồng còn $c_{n-2}$ cách.
  - Hệ thức: $c_n = c_{n-2} + 1$ ($n \\ge 2$) với $c_0 = 1, c_1 = 1$ (nghiệm $c_n = \\lfloor \\frac{n}{2} \\rfloor + 1$).

**2. Giải $x_n = 6x_{n-1} - 9x_{n-2}$ với $x_0 = 2, x_1 = 6$:**
- Phương trình đặc trưng: $r^2 - 6r + 9 = 0 \\iff (r - 3)^2 = 0$, có **nghiệm thực kép** $r_0 = 3$.
- Dạng nghiệm tổng quát: $x_n = (\\alpha + \\beta n) \\cdot 3^n$.
- Thay điều kiện đầu:
  - $n = 0 \\implies \\alpha \\cdot 3^0 = 2 \\implies \\alpha = 2$.
  - $n = 1 \\implies (2 + \\beta) \\cdot 3 = 6 \\implies 2 + \\beta = 2 \\implies \\beta = 0$.
- Vậy công thức nghiệm là:

$$x_n = 2 \\cdot 3^n \\quad (\\forall n \\ge 0)$$`
      },
      {
        id: 'ck2425_c2',
        label: 'Câu 2',
        points: 3.0,
        topic: 'Chương 3 • Quan hệ tương đương $(2x + y) \\vdots 3$',
        statement: `Trên tập hợp $S = \\{2, 4, 5\\}$, xét quan hệ hai ngôi $\\mathcal{R}$ xác định bởi:

$$x \\mathcal{R} y \\iff (2x + y) \\text{ chia hết cho } 3$$

1. Liệt kê tất cả các cặp có thứ tự thuộc $\\mathcal{R}$ và lập ma trận biểu diễn $\\mathcal{R}$.
2. Chứng minh $\\mathcal{R}$ là quan hệ tương đương và tìm các lớp tương đương của nó.`,
        solution: `### Lời giải chi tiết

**1. Liệt kê phần tử của $\\mathcal{R}$:**
Nhận xét: $2x + y = 3x - (x - y)$, do đó $(2x + y) \\vdots 3 \\iff (x - y) \\vdots 3 \\iff x \\equiv y \\pmod 3$.
Kiểm tra trên $S = \\{2, 4, 5\\}$ ($2 \\equiv 2, \\; 4 \\equiv 1, \\; 5 \\equiv 2 \\pmod 3$):

$$\\mathcal{R} = \\{(2, 2), (4, 4), (5, 5), (2, 5), (5, 2)\\}$$

**2. Chứng minh quan hệ tương đương & Lớp tương đương:**
- **Phản xạ:** $\\forall x \\in S, \\; 2x + x = 3x \\vdots 3 \\implies (x, x) \\in \\mathcal{R}$.
- **Đối xứng:** Nếu $2x + y \\vdots 3$ thì $2y + x = 3(x + y) - (2x + y) \\vdots 3 \\implies (y, x) \\in \\mathcal{R}$.
- **Bắc cầu:** Nếu $2x + y \\vdots 3$ và $2y + z \\vdots 3$ thì $(2x + y) + (2y + z) = 2x + z + 3y \\vdots 3 \\implies 2x + z \\vdots 3 \\implies (x, z) \\in \\mathcal{R}$.
- Vậy $\\mathcal{R}$ là quan hệ tương đương và chia $S$ thành **$2$ lớp tương đương**:

$$[2] = [5] = \\{2, 5\\}, \\qquad [4] = \\{4\\}$$`
      },
      {
        id: 'ck2425_c3',
        label: 'Câu 3',
        points: 3.0,
        topic: 'Chương 4 • Tối tiểu hóa Hàm Bool từ Dạng nối rời chính tắc',
        statement: `Dùng biểu đồ Karnaugh tối tiểu hóa hàm Bool $4$ biến sau *(đã hiệu đính lỗi gõ máy $\\overline{z}yzt \\to \\overline{x}yzt$ trong bản chế bản)*:

$$f(x, y, z, t) = \\overline{x}\\overline{y}\\overline{z}\\overline{t} \\lor x\\overline{y}z\\overline{t} \\lor x\\overline{y}\\overline{z}t \\lor \\overline{x}\\overline{y}\\overline{z}t \\lor \\overline{x}yz\\overline{t} \\lor \\overline{x}yzt \\lor \\overline{x}y\\overline{z}t$$`,
        solution: `### Lời giải chi tiết

**1. Đổi từng minterm sang chỉ số thập phân $(xyzt)_2$:**
- $\\overline{x}\\overline{y}\\overline{z}\\overline{t} = 0000_2 = m_0$
- $\\overline{x}\\overline{y}\\overline{z}t = 0001_2 = m_1$
- $\\overline{x}y\\overline{z}t = 0101_2 = m_5$
- $\\overline{x}yz\\overline{t} = 0110_2 = m_6$
- $\\overline{x}yzt = 0111_2 = m_7$
- $x\\overline{y}\\overline{z}t = 1001_2 = m_9$
- $x\\overline{y}z\\overline{t} = 1010_2 = m_{10}$
- Vậy $f(x, y, z, t) = \\sum m(0, 1, 5, 6, 7, 9, 10)$.

**2. Xác định các tế bào lớn cốt yếu (EPI) trên bảng Karnaugh:**
- Ô $m_0$ chỉ ghép được với $m_1 \\implies \\{m_0, m_1\\} = \\overline{x}\\overline{y}\\overline{z}$ (**EPI**).
- Ô $m_6$ chỉ ghép được với $m_7 \\implies \\{m_6, m_7\\} = \\overline{x}yz$ (**EPI**).
- Ô $m_9$ chỉ ghép được với $m_1 \\implies \\{m_1, m_9\\} = \\overline{y}\\overline{z}t$ (**EPI**).
- Ô $m_{10}$ không kề với bất kỳ ô $1$ nào ($m_2 = m_8 = m_{11} = m_{14} = 0$) $\\implies \\{m_{10}\\} = x\\overline{y}z\\overline{t}$ (**EPI cô lập**).

**3. Phủ ô còn lại $m_5$:**
Ô $m_5$ có thể ghép với $m_1$ thành $\\overline{x}\\overline{z}t = \\{m_1, m_5\\}$ hoặc ghép với $m_7$ thành $\\overline{x}yt = \\{m_5, m_7\\}$ (đồng hạng $3$ literal). Vậy hai công thức tối tiểu đồng hạng là:

$$f = \\overline{x}\\overline{y}\\overline{z} \\lor \\overline{x}yz \\lor \\overline{y}\\overline{z}t \\lor x\\overline{y}z\\overline{t} \\lor \\overline{x}\\overline{z}t$$

*(hoặc thay hạng tử cuối $\\overline{x}\\overline{z}t$ bằng $\\overline{x}yt$).*`
      }
    ]
  }
];
