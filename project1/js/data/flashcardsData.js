/**
 * BỘ 65 THẺ GHI NHỚ (FLASHCARDS 3D) TOÁN RỜI RẠC – TOÀN KHÓA CHƯƠNG 1–5
 * Tất cả công thức đều chuẩn hóa LaTeX KaTeX 100%, hỗ trợ tự đánh giá tiến độ "Đã thuộc".
 */

const FLASHCARDS_DATA = [
  // ================= CHƯƠNG 1: CƠ SỞ LOGIC (14 THẺ) =================
  {
    id: 'fc_c1_01',
    chapterId: 'c1',
    tag: 'Chương 1 • Mệnh đề',
    front: 'Khi nào phép kéo theo $p \\to q$ nhận giá trị chân lý **Sai ($0$)**?',
    back: 'Duy nhất khi tiền đề $p$ **Đúng ($1$)** và kết luận $q$ **Sai ($0$)**. Trong mọi trường hợp còn lại ($0 \\to 0$, $0 \\to 1$, $1 \\to 1$), $p \\to q$ đều nhận giá trị $1$.'
  },
  {
    id: 'fc_c1_02',
    chapterId: 'c1',
    tag: 'Chương 1 • Tương đương Logic',
    front: 'Viết biểu thức tương đương khử phép kéo theo và phủ định của phép kéo theo $p \\to q$.',
    back: '• Khử kéo theo: $p \\to q \\iff \\neg p \\lor q$ (hay $\\overline{p} \\lor q$).<br>• Phủ định kéo theo: $\\neg(p \\to q) \\iff p \\land \\neg q$.'
  },
  {
    id: 'fc_c1_03',
    chapterId: 'c1',
    tag: 'Chương 1 • Luật Phản đảo',
    front: 'Phát biểu **Luật phản đảo (Contrapositive)** của $p \\to q$ và phân biệt với mệnh đề đảo, mệnh đề nghịch.',
    back: '• **Phản đảo (tương đương):** $p \\to q \\iff \\neg q \\to \\neg p$.<br>• **Đảo:** $q \\to p$ và **Nghịch:** $\\neg p \\to \\neg q$ (hai mệnh đề này tương đương nhau nhưng **không** tương đương với $p \\to q$).'
  },
  {
    id: 'fc_c1_04',
    chapterId: 'c1',
    tag: 'Chương 1 • Quy luật Logic',
    front: 'Viết hai công thức **Luật De Morgan** trong đại số mệnh đề.',
    back: '$$\\neg(p \\land q) \\iff \\neg p \\lor \\neg q$$<br>$$\\neg(p \\lor q) \\iff \\neg p \\land \\neg q$$'
  },
  {
    id: 'fc_c1_05',
    chapterId: 'c1',
    tag: 'Chương 1 • Quy luật Logic',
    front: 'Viết hai công thức **Luật Hấp thụ (Absorption Laws)** và công thức hấp thụ mở rộng.',
    back: '• Hấp thụ chuẩn: $p \\lor (p \\land q) \\iff p$ và $p \\land (p \\lor q) \\iff p$.<br>• Mở rộng (rất hay gặp): $p \\lor (\\neg p \\land q) \\iff p \\lor q$ và $p \\land (\\neg p \\lor q) \\iff p \\land q$.'
  },
  {
    id: 'fc_c1_06',
    chapterId: 'c1',
    tag: 'Chương 1 • Kéo theo',
    front: 'Viết **Luật Xuất – Nhập (Exportation)** và **Luật Phân bố tiền đề qua phép tuyển**.',
    back: '• Luật xuất – nhập: $(p \\land q) \\to r \\iff p \\to (q \\to r)$.<br>• Phân bố tiền đề (chứng minh chia trường hợp): $(p \\lor q) \\to r \\iff (p \\to r) \\land (q \\to r)$.'
  },
  {
    id: 'fc_c1_07',
    chapterId: 'c1',
    tag: 'Chương 1 • Điều kiện Cần & Đủ',
    front: 'Trong mệnh đề $p \\to q$, mệnh đề nào là **điều kiện đủ**, mệnh đề nào là **điều kiện cần**?',
    back: '• $p$ là **điều kiện đủ** để có $q$ ("$p$ kéo theo $q$", "$p$ chỉ khi $q$").<br>• $q$ là **điều kiện cần** để có $p$ ("nếu không có $q$ thì không thể có $p$").'
  },
  {
    id: 'fc_c1_08',
    chapterId: 'c1',
    tag: 'Chương 1 • Quy tắc Suy diễn',
    front: 'So sánh sơ đồ suy diễn **Modus Ponens** và **Modus Tollens**.',
    back: '• **Modus Ponens (Khẳng định):** $p \\to q, \\; p \\; \\therefore q$.<br>• **Modus Tollens (Phủ định):** $p \\to q, \\; \\neg q \\; \\therefore \\neg p$.'
  },
  {
    id: 'fc_c1_09',
    chapterId: 'c1',
    tag: 'Chương 1 • Quy tắc Suy diễn',
    front: 'Viết sơ đồ **Tam đoạn luận giả thiết (Bắc cầu)** và **Tam đoạn luận rời (Disjunctive Syllogism)**.',
    back: '• **Tam đoạn luận giả thiết:** $p \\to q, \\; q \\to r \\; \\therefore p \\to r$.<br>• **Tam đoạn luận rời:** $p \\lor q, \\; \\neg p \\; \\therefore q$.'
  },
  {
    id: 'fc_c1_10',
    chapterId: 'c1',
    tag: 'Chương 1 • Suy diễn Phản chứng',
    front: 'Nguyên tắc chứng minh suy luận $H_1, H_2, \\dots, H_m \\therefore C$ bằng **phương pháp phản chứng** là gì?',
    back: 'Bổ sung giả thiết tạm $\\neg C$ vào tập tiền đề $\\{H_1, \\dots, H_m\\}$ rồi dùng các quy tắc suy diễn biến đổi đến mâu thuẫn $0$ ($R \\land \\neg R$). Vì $(H \\land \\neg C \\to 0) \\iff (H \\to C)$, suy ra $C$ hợp lý.'
  },
  {
    id: 'fc_c1_11',
    chapterId: 'c1',
    tag: 'Chương 1 • Ngụy biện Logic',
    front: 'Hai **ngụy biện kinh điển** (suy luận KHÔNG hợp lý) thường bẫy sinh viên là gì?',
    back: '1. **Khẳng định hệ quả:** $p \\to q, \\; q \\; \\therefore p$ (Sai khi $p = 0, q = 1$).<br>2. **Phủ định tiền đề:** $p \\to q, \\; \\neg p \\; \\therefore \\neg q$ (Sai khi $p = 0, q = 1$).'
  },
  {
    id: 'fc_c1_12',
    chapterId: 'c1',
    tag: 'Chương 1 • Lượng từ',
    front: 'Quy tắc phủ định mệnh đề chứa lượng từ lồng nhau $\\neg(\\forall x \\in A, \\exists y \\in B, \\; P(x, y) \\to Q(x, y))$?',
    back: 'Đổi $\\forall \\leftrightarrow \\exists$ (giữ nguyên miền biến thiên) và phủ định biểu thức sau cùng:<br>$$\\exists x \\in A, \\forall y \\in B, \\; P(x, y) \\land \\neg Q(x, y)$$'
  },
  {
    id: 'fc_c1_13',
    chapterId: 'c1',
    tag: 'Chương 1 • Lượng từ',
    front: 'So sánh chân trị của $\\exists y \\forall x P(x, y)$ và $\\forall x \\exists y P(x, y)$. Chiều kéo theo nào luôn đúng?',
    back: '$$\\exists y \\forall x P(x, y) \\implies \\forall x \\exists y P(x, y)$$ luôn là hằng đúng ($1$). Chiều ngược lại nói chung **không đúng** (vì ở vế phải $y$ có thể thay đổi phụ thuộc vào từng $x$).'
  },
  {
    id: 'fc_c1_14',
    chapterId: 'c1',
    tag: 'Chương 1 • Quy nạp',
    front: 'Sự khác biệt cốt lõi giữa **Quy nạp thường** và **Quy nạp mạnh (Strong Induction)** ở bước giả thiết quy nạp?',
    back: '• **Quy nạp thường:** Giả sử $P(k)$ đúng tại một giá trị $k \\ge n_0$ để chứng minh $P(k+1)$.<br>• **Quy nạp mạnh:** Giả sử $P(j)$ đúng với **mọi** $n_0 \\le j \\le k$ để chứng minh $P(k+1)$ (rất cần cho dãy truy hồi bậc $\\ge 2$ và phân tích số nguyên tố).'
  },

  // ================= CHƯƠNG 2: PHƯƠNG PHÁP ĐẾM (14 THẺ) =================
  {
    id: 'fc_c2_01',
    chapterId: 'c2',
    tag: 'Chương 2 • Tập hợp',
    front: 'Nếu tập hữu hạn $A$ có $|A| = n$ phần tử thì lực lượng tập lũy thừa $|\\mathcal{P}(A)|$ và tích Descartes $|A \\times B|$ là bao nhiêu?',
    back: '• Số tập con của $A$: $|\\mathcal{P}(A)| = |2^A| = 2^n$.<br>• Tích Descartes: $|A \\times B| = |A| \\cdot |B|$.'
  },
  {
    id: 'fc_c2_02',
    chapterId: 'c2',
    tag: 'Chương 2 • Ánh xạ',
    front: 'Cho $|A| = m, |B| = n$. Điều kiện về $m, n$ để tồn tại **Đơn ánh**, **Toàn ánh**, **Song ánh** $f: A \\to B$?',
    back: '• Có **Đơn ánh** $\\iff m \\le n$ (số đơn ánh là $A_n^m$).<br>• Có **Toàn ánh** $\\iff m \\ge n$.<br>• Có **Song ánh** $\\iff m = n$ (số song ánh là $P_n = n!$, tổng số ánh xạ bất kỳ là $n^m$).'
  },
  {
    id: 'fc_c2_03',
    chapterId: 'c2',
    tag: 'Chương 2 • Ánh xạ ngược',
    front: 'Công thức tổng quát tìm nhanh ánh xạ ngược của hàm phân thức bậc nhất $f(x) = \\frac{ax + b}{cx + d}$ ($ad - bc \\neq 0$)?',
    back: 'Miền xác định $D = \\mathbb{R} \\setminus \\{-\\frac{d}{c}\\}$, miền giá trị $T = \\mathbb{R} \\setminus \\{\\frac{a}{c}\\}$.<br>Ánh xạ ngược đổi chỗ & đổi dấu $a$ với $d$:<br>$$f^{-1}(x) = \\frac{-dx + b}{cx - a} = \\frac{dx - b}{-cx + a}$$'
  },
  {
    id: 'fc_c2_04',
    chapterId: 'c2',
    tag: 'Chương 2 • Nguyên lý Bù trừ',
    front: 'Viết công thức **Nguyên lý Bù trừ (Inclusion–Exclusion)** cho $3$ tập hợp hữu hạn $A, B, C$.',
    back: '$$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$$'
  },
  {
    id: 'fc_c2_05',
    chapterId: 'c2',
    tag: 'Chương 2 • Hoán vị & Hoán vị lặp',
    front: 'Công thức **Hoán vị** $P_n$, **Hoán vị vòng quanh** $n$ phần tử và **Hoán vị lặp** gồm các nhóm $(k_1, k_2, \\dots, k_m)$?',
    back: '• Hoán vị thẳng: $P_n = n!$.<br>• Hoán vị bàn tròn: $(n - 1)!$.<br>• Hoán vị lặp ($k_1 + \\dots + k_m = n$): $$P(k_1, \\dots, k_m) = \\frac{n!}{k_1! k_2! \\cdots k_m!}$$'
  },
  {
    id: 'fc_c2_06',
    chapterId: 'c2',
    tag: 'Chương 2 • Chỉnh hợp',
    front: 'Phân biệt **Chỉnh hợp không lặp** $A_n^k$ và **Chỉnh hợp lặp** $F_n^k = \\overline{A}_n^k$.',
    back: '• **Chỉnh hợp không lặp** (có thứ tự, không lặp, $0 \\le k \\le n$): $$A_n^k = \\frac{n!}{(n - k)!}$$<br>• **Chỉnh hợp lặp** (có thứ tự, được lặp, $k \\ge 0$ tùy ý): $$F_n^k = \\overline{A}_n^k = n^k$$'
  },
  {
    id: 'fc_c2_07',
    chapterId: 'c2',
    tag: 'Chương 2 • Tổ hợp',
    front: 'Công thức **Tổ hợp** $C_n^k$ và hai hằng đẳng thức nền tảng (Đối xứng & Pascal)?',
    back: '• Công thức: $C_n^k = \\binom{n}{k} = \\frac{n!}{k!(n - k)!}$ ($0 \\le k \\le n$).<br>• Đối xứng: $C_n^k = C_n^{n-k}$.<br>• Hệ thức Pascal: $C_n^k = C_{n-1}^{k-1} + C_{n-1}^k$.'
  },
  {
    id: 'fc_c2_08',
    chapterId: 'c2',
    tag: 'Chương 2 • Tổ hợp lặp',
    front: 'Công thức **Tổ hợp lặp** $K_n^k = \\overline{C}_n^k$ và bài toán chia kẹo Euler tương đương?',
    back: 'Số cách chọn $k$ vật từ $n$ loại (không phân biệt thứ tự, được lặp) bằng số nghiệm nguyên không âm của $x_1 + x_2 + \\dots + x_n = k$:<br>$$K_n^k = \\overline{C}_n^k = C_{n+k-1}^k = C_{n+k-1}^{n-1}$$'
  },
  {
    id: 'fc_c2_09',
    chapterId: 'c2',
    tag: 'Chương 2 • Nhị thức Newton',
    front: 'Khai triển **Nhị thức Newton** $(x + y)^n$ và hai hệ quả tổng hệ số nhị thức quan trọng?',
    back: '$$(x + y)^n = \\sum_{k=0}^n C_n^k x^{n-k} y^k$$<br>• Tổng tất cả hệ số: $\\sum_{k=0}^n C_n^k = 2^n$.<br>• Tổng đan dấu: $\\sum_{k=0}^n (-1)^k C_n^k = 0$ (tổng chẵn $=$ tổng lẻ $= 2^{n-1}$).'
  },
  {
    id: 'fc_c2_10',
    chapterId: 'c2',
    tag: 'Chương 2 • Nghiệm nguyên',
    front: 'Cách giải phương trình nghiệm nguyên có **cận dưới** $x_1 + \\dots + x_n = k$ với $x_i \\ge c_i$ (chú ý nếu đề cho $x_i > c_i$)?',
    back: '1. Đổi mọi dấu ngặt $x_i > c_i \\iff x_i \\ge c_i + 1$.<br>2. Đặt $y_i = x_i - a_i \\ge 0$ (với $a_i$ là cận dưới $\\ge$), đưa về $y_1 + \\dots + y_n = k\' = k - \\sum a_i$.<br>3. Đáp số (nếu $k\' \\ge 0$): $K_n^{k\'} = C_{n + k\' - 1}^{k\'}$.'
  },
  {
    id: 'fc_c2_11',
    chapterId: 'c2',
    tag: 'Chương 2 • Nghiệm nguyên',
    front: 'Cách xử lý **cận trên** $x_i \\le b$ và **bất phương trình** $x_1 + \\dots + x_n \\le k$ ($x_i \\ge 0$)?',
    back: '• **Cận trên $x_1 \\le b$:** Dùng phần bù! Tổng nghiệm không ràng buộc trừ đi số nghiệm vi phạm $x_1 \\ge b + 1$.<br>• **Bất phương trình $\\le k$:** Thêm biến bù không âm $w = k - (x_1 + \\dots + x_n) \\ge 0$ để đưa về phương trình $n + 1$ ẩn bằng $k$, đáp số $C_{n+k}^k$.'
  },
  {
    id: 'fc_c2_12',
    chapterId: 'c2',
    tag: 'Chương 2 • Đếm tập con',
    front: 'Trên $S = \\{1, 2, \\dots, N\\}$, đếm số tập con $A \\subseteq S$ có $|A| = m$ và $\\min(A) = p$ (hoặc $\\max(A) = q$)?',
    back: '• Nếu $\\min(A) = p$: cố định $p \\in A$, loại bỏ $1..(p-1)$, chọn $m - 1$ phần tử còn lại từ $\\{p+1, \\dots, N\\} \\implies C_{N-p}^{m-1}$.<br>• Nếu $\\max(A) = q$: cố định $q \\in A$, loại bỏ $(q+1)..N$, chọn $m - 1$ phần tử từ $\\{1, \\dots, q-1\\} \\implies C_{q-1}^{m-1}$.'
  },
  {
    id: 'fc_c2_13',
    chapterId: 'c2',
    tag: 'Chương 2 • Chuồng bồ câu',
    front: 'Phát biểu **Nguyên lý Chuồng bồ câu tổng quát (Dirichlet)** và công thức tìm $N$ nhỏ nhất?',
    back: '• Nếu xếp $N$ vật vào $k$ chuồng thì tồn tại ít nhất một chuồng chứa tối thiểu $\\left\\lceil \\frac{N}{k} \\right\\rceil$ vật.<br>• Để chắc chắn có ít nhất $r$ vật cùng chuồng (khi các chuồng dư sức chứa), số vật nhỏ nhất cần lấy là $N_{\\min} = k(r - 1) + 1$.'
  },
  {
    id: 'fc_c2_14',
    chapterId: 'c2',
    tag: 'Chương 2 • Dirichlet thực tế',
    front: 'Khi các loại vật có **giới hạn số lượng thiếu** (ví dụ $4$ đỏ, $7$ trắng, $9$ xanh; cần $5$ chiếc cùng màu), tính thế nào?',
    back: 'Áp dụng **nguyên tắc trường hợp xấu nhất (Worst-case)**: lấy tối đa $\\min(n_i, r - 1)$ vật ở mỗi loại rồi cộng thêm $1$:<br>$$N_{\\min} = \\sum_{i=1}^k \\min(n_i, r - 1) + 1 = 4 + 4 + 4 + 1 = 13$$'
  },

  // ================= CHƯƠNG 3: QUAN HỆ (13 THẺ) =================
  {
    id: 'fc_c3_01',
    chapterId: 'c3',
    tag: 'Chương 3 • Quan hệ hai ngôi',
    front: 'Định nghĩa $4$ tính chất cơ bản của quan hệ hai ngôi $\\mathcal{R}$ trên tập $A$.',
    back: '1. **Phản xạ:** $\\forall x \\in A, \\; x \\mathcal{R} x$.<br>2. **Đối xứng:** $\\forall x, y \\in A, \\; x \\mathcal{R} y \\implies y \\mathcal{R} x$.<br>3. **Phản xứng:** $\\forall x, y \\in A, \\; (x \\mathcal{R} y \\land y \\mathcal{R} x) \\implies x = y$.<br>4. **Bắc cầu:** $\\forall x, y, z \\in A, \\; (x \\mathcal{R} y \\land y \\mathcal{R} z) \\implies x \\mathcal{R} z$.'
  },
  {
    id: 'fc_c3_02',
    chapterId: 'c3',
    tag: 'Chương 3 • Đếm quan hệ',
    front: 'Trên tập $|A| = n$, có bao nhiêu quan hệ hai ngôi: bất kỳ, phản xạ, đối xứng, phản xứng?',
    back: '• Bất kỳ: $2^{n^2}$.<br>• Phản xạ: $2^{n(n-1)}$.<br>• Đối xứng: $2^{n(n+1)/2}$.<br>• Phản xứng: $2^n \\cdot 3^{n(n-1)/2}$.'
  },
  {
    id: 'fc_c3_03',
    chapterId: 'c3',
    tag: 'Chương 3 • Quan hệ Tương đương',
    front: 'Khi nào $\\mathcal{R}$ là **Quan hệ tương đương** và mối liên hệ với **Phân hoạch** của tập $A$?',
    back: '$\\mathcal{R}$ là quan hệ tương đương $\\iff$ thỏa **Phản xạ + Đối xứng + Bắc cầu**. Các lớp tương đương $[x] = \\{y \\in A \\mid x \\mathcal{R} y\\}$ đôi một rời nhau hoặc trùng nhau, tạo thành một phân hoạch $A / \\mathcal{R}$ của $A$.'
  },
  {
    id: 'fc_c3_04',
    chapterId: 'c3',
    tag: 'Chương 3 • Mẹo đồng dư',
    front: 'Mẹo biến đổi nhanh các quan hệ dạng $(2x + y) \\vdots 3$ hoặc $(3x + 4y) \\vdots 7$ để chứng minh tương đương?',
    back: 'Tách bội của mô-đun $m$:<br>• $2x + y = 3x - (x - y) \\implies (2x + y) \\vdots 3 \\iff x \\equiv y \\pmod 3$.<br>• $3x + 4y = 7y + 3(x - y)$ với $\\gcd(3, 7) = 1 \\implies (3x + 4y) \\vdots 7 \\iff x \\equiv y \\pmod 7$.'
  },
  {
    id: 'fc_c3_05',
    chapterId: 'c3',
    tag: 'Chương 3 • Quan hệ Thứ tự',
    front: 'Khi nào $\\preceq$ là **Quan hệ thứ tự (Poset)** và khi nào là **Thứ tự toàn phần (Chuỗi)**?',
    back: '• **Poset:** Thỏa **Phản xạ + Phản xứng + Bắc cầu**.<br>• **Thứ tự toàn phần:** Là Poset mà mọi cặp $x, y \\in A$ đều so sánh được ($x \\preceq y$ hoặc $y \\preceq x$).'
  },
  {
    id: 'fc_c3_06',
    chapterId: 'c3',
    tag: 'Chương 3 • Biểu đồ Hasse',
    front: 'Nguyên tắc vẽ **Biểu đồ Hasse** của tập thứ tự hữu hạn $(A, \\preceq)$ là gì?',
    back: '1. Bỏ toàn bộ khuyên phản xạ $(x, x)$.<br>2. Bỏ toàn bộ cạnh bắc cầu (nếu $x \\prec z \\prec y$ thì không vẽ cạnh nối $x$ với $y$).<br>3. Chỉ vẽ cạnh đi lên cho **quan hệ trội trực tiếp** $x \\lessdot y$ ($x$ đặt thấp hơn $y$, không cần vẽ mũi tên).'
  },
  {
    id: 'fc_c3_07',
    chapterId: 'c3',
    tag: 'Chương 3 • Cực trị Poset',
    front: 'Phân biệt **Phần tử tối đại (Maximal)** và **Phần tử lớn nhất (Greatest)** trong Poset $(A, \\preceq)$.',
    back: '• $m$ là **tối đại** nếu không có $x \\in A$ nào lớn hơn hẳn nó: $\\forall x \\in A, \\; m \\preceq x \\implies x = m$ (có thể có nhiều tối đại).<br>• $M$ là **lớn nhất** nếu mọi phần tử đều nhỏ hơn nó: $\\forall x \\in A, \\; x \\preceq M$ (nếu tồn tại thì **duy nhất**, và là tối đại duy nhất khi $A$ hữu hạn).'
  },
  {
    id: 'fc_c3_08',
    chapterId: 'c3',
    tag: 'Chương 3 • Dàn (Lattice)',
    front: 'Định nghĩa **Dàn (Lattice)** $(L, \\preceq)$ và hai phép toán đại số $\\lor, \\land$ tương ứng?',
    back: 'Poset $(L, \\preceq)$ là một **dàn** nếu mọi cặp phần tử $a, b \\in L$ đều có:<br>• Cận trên đúng (nhỏ nhất trong các cận trên): $a \\lor b = \\sup\\{a, b\\}$.<br>• Cận dưới đúng (lớn nhất trong các cận dưới): $a \\land b = \\inf\\{a, b\\}$.'
  },
  {
    id: 'fc_c3_09',
    chapterId: 'c3',
    tag: 'Chương 3 • Dàn bù & Phân bố',
    front: 'Khi nào một dàn có giới nội $(L, 0, 1)$ là **Dàn bù**? Trong **Dàn phân bố**, phần tử bù có tính chất gì?',
    back: '• **Dàn bù:** Mọi $x \\in L$ đều có ít nhất một phần tử bù $y$ sao cho $x \\lor y = 1$ và $x \\land y = 0$.<br>• Trong **dàn phân bố**, nếu $x$ có phần tử bù thì phần tử bù đó là **duy nhất** (ký hiệu $\\overline{x}$).'
  },
  {
    id: 'fc_c3_10',
    chapterId: 'c3',
    tag: 'Chương 3 • Dàn $2^E$',
    front: 'Trong dàn tập lũy thừa $(\\mathcal{P}(E), \\subseteq)$, các phép toán $a \\lor b, a \\land b, 0, 1, \\overline{a}$ là gì?',
    back: '• $A \\lor B = A \\cup B$, $A \\land B = A \\cap B$.<br>• Phần tử $0 = \\emptyset$, phần tử $1 = E$, phần tử bù $\\overline{A} = E \\setminus A$.<br>• Hàm đặc trưng $\\chi_A: E \\to \\{0, 1\\}$ thỏa $\\chi_{A \\cap B} = \\chi_A \\cdot \\chi_B$ và $\\chi_{\\overline{A}} = 1 - \\chi_A$.'
  },
  {
    id: 'fc_c3_11',
    chapterId: 'c3',
    tag: 'Chương 3 • Dàn ước số $\\mathcal{U}_n$',
    front: 'Trong dàn ước số $(\\mathcal{U}_n, \\mid)$, $\\sup(a, b)$ và $\\inf(a, b)$ là gì? Khi nào $\\mathcal{U}_n$ là **dàn bù** (và là Đại số Bool)?',
    back: '• $a \\lor b = \\text{lcm}(a, b)$ (BSCNN) và $a \\land b = \\gcd(a, b)$ (USCLN); $0_L = 1, \\; 1_L = n$.<br>• $\\mathcal{U}_n$ luôn là dàn phân bố, và là **dàn bù** $\\iff n$ **không chia hết cho số chính phương nào lớn hơn $1$** ($n = p_1 p_2 \\cdots p_k$ tích các số nguyên tố phân biệt).'
  },
  {
    id: 'fc_c3_12',
    chapterId: 'c3',
    tag: 'Chương 3 • Euclide & Bézout',
    front: 'Phát biểu **Định lý Bézout** và ứng dụng của **Thuật toán Euclide mở rộng**.',
    back: 'Với mọi $a, b \\in \\mathbb{Z}$ không đồng thời bằng $0$, tồn tại $u, v \\in \\mathbb{Z}$ sao cho:<br>$$au + bv = \\gcd(a, b)$$<br>Đặc biệt $\\gcd(a, m) = 1 \\iff$ tồn tại nghịch đảo $a^{-1} \\equiv u \\pmod m$ sao cho $au \\equiv 1 \\pmod m$.'
  },
  {
    id: 'fc_c3_13',
    chapterId: 'c3',
    tag: 'Chương 3 • Phương trình Đồng dư',
    front: 'Điều kiện có nghiệm và số nghiệm của phương trình đồng dư tuyến tính $ax \\equiv b \\pmod m$?',
    back: 'Đặt $d = \\gcd(a, m)$:<br>• Nếu $d \\nmid b$: phương trình **vô nghiệm**.<br>• Nếu $d \\mid b$: phương trình có đúng **$d$ nghiệm không đồng dư modulo $m$**, dạng $x \\equiv x_0 + k \\cdot \\frac{m}{d} \\pmod m$ ($k = 0, \\dots, d - 1$).'
  },

  // ================= CHƯƠNG 4: ĐẠI SỐ BOOL & HÀM BOOL (12 THẺ) =================
  {
    id: 'fc_c4_01',
    chapterId: 'c4',
    tag: 'Chương 4 • Định lý Stone',
    front: 'Định nghĩa **Đại số Bool** theo cấu trúc dàn và phát biểu **Định lý biểu diễn Stone** cho Đại số Bool hữu hạn.',
    back: '• **Đại số Bool** $=$ Dàn bù phân bố.<br>• **Định lý Stone:** Mọi đại số Bool hữu hạn $B$ đều đẳng cấu với đại số tập lũy thừa $(\\mathcal{P}(E), \\subseteq)$ của tập các nguyên tử $E$. Hệ quả: $|B| = 2^k$ ($k \\ge 1$).'
  },
  {
    id: 'fc_c4_02',
    chapterId: 'c4',
    tag: 'Chương 4 • Số hàm Bool',
    front: 'Với $n$ biến Bool độc lập $(x_1, \\dots, x_n)$, có bao nhiêu bộ giá trị đầu vào, bao nhiêu **minterm**, và tổng cộng bao nhiêu **hàm Bool $n$ biến**?',
    back: '• Số bộ đầu vào (số dòng bảng chân trị) $=$ Số minterm $= 2^n$.<br>• Tổng số hàm Bool $n$ biến khác nhau $= 2^{2^n}$ (ví dụ $n = 2 \\implies 16$ hàm; $n = 3 \\implies 256$ hàm; $n = 4 \\implies 65536$ hàm).'
  },
  {
    id: 'fc_c4_03',
    chapterId: 'c4',
    tag: 'Chương 4 • Nguyên lý Đối ngẫu',
    front: 'Cách lập biểu thức **đối ngẫu** $E^*$ của một biểu thức Bool $E$?',
    back: 'Đổi đồng thời: $\\lor \\leftrightarrow \\land$ (hay $+ \\leftrightarrow \\cdot$) và hằng số $0 \\leftrightarrow 1$, **giữ nguyên các biến và dấu bù $\\overline{x}$**. Nếu $E_1 = E_2$ là hằng đẳng thức Bool thì $E_1^* = E_2^*$ cũng là hằng đẳng thức Bool.'
  },
  {
    id: 'fc_c4_04',
    chapterId: 'c4',
    tag: 'Chương 4 • Minterm & Maxterm',
    front: 'Quy ước viết **Từ tối tiểu (Minterm $m_i$)** và **Từ tối đại (Maxterm $M_i$)** ứng với bộ bit $(b_1, \\dots, b_n)$?',
    back: '• **Minterm (tích, dùng cho DNF):** bit $1 \\mapsto x_k$, bit $0 \\mapsto \\overline{x_k}$ (ví dụ $1010_2 \\mapsto x\\overline{y}z\\overline{t} = m_{10}$).<br>• **Maxterm (tổng, dùng cho CNF):** bit $0 \\mapsto x_k$, bit $1 \\mapsto \\overline{x_k}$ (thỏa $M_i = \\overline{m_i}$).'
  },
  {
    id: 'fc_c4_05',
    chapterId: 'c4',
    tag: 'Chương 4 • Dạng chính tắc',
    front: 'Mối quan hệ bù nhau giữa Dạng nối rời chính tắc (Canonical DNF / $\\sum m$) và Dạng nối liền chính tắc (Canonical CNF / $\\prod M$)?',
    back: 'Nếu $f$ nhận giá trị $1$ tại tập chỉ số $I \\subseteq \\{0, \\dots, 2^n - 1\\}$ thì:<br>$$f = \\sum_{i \\in I} m_i = \\prod_{j \\notin I} M_j$$<br>(Ví dụ hàm $3$ biến $f = \\sum m(1, 3, 5, 7) = \\prod M(0, 2, 4, 6)$).'
  },
  {
    id: 'fc_c4_06',
    chapterId: 'c4',
    tag: 'Chương 4 • Cổng Logic',
    front: 'Kể tên các hệ cổng đầy đủ chức năng và hai **cổng vạn năng (Universal Gates)**.',
    back: '• Hệ đầy đủ chuẩn: $\\{\\text{AND}, \\text{OR}, \\text{NOT}\\}$, $\\{\\text{AND}, \\text{NOT}\\}$, $\\{\\text{OR}, \\text{NOT}\\}$.<br>• Hai **cổng vạn năng** đứng một mình biểu diễn được mọi hàm Bool: **NAND** ($\\overline{xy}$) và **NOR** ($\\overline{x \\lor y}$).'
  },
  {
    id: 'fc_c4_07',
    chapterId: 'c4',
    tag: 'Chương 4 • Mạch số học',
    front: 'Công thức hàm Bool của **Mạch bán cộng (Half-Adder)** và **Mạch biểu quyết đa số $3$ người**?',
    back: '• **Half-Adder:** Bit tổng $S = x\\overline{y} \\lor \\overline{x}y = x \\oplus y$, bit nhớ $C = xy$.<br>• **Biểu quyết đa số $3$ biến** ($\\ge 2$ phiếu thuận): $f(x, y, z) = xy \\lor yz \\lor xz$.'
  },
  {
    id: 'fc_c4_08',
    chapterId: 'c4',
    tag: 'Chương 4 • Biểu đồ Karnaugh',
    front: 'Tại sao thứ tự đánh nhãn hàng/cột trên bảng Karnaugh $4$ biến phải là **`00, 01, 11, 10`** (Mã Gray)?',
    back: 'Để hai ô kề nhau về mặt hình học (kể cả **hai mép đối diện cuộn tròn** và **$4$ góc bảng**) luôn chỉ khác nhau ở **đúng $1$ biến duy nhất**, cho phép gộp $x A \\lor \\overline{x} A = A$ để khử biến đổi dấu.'
  },
  {
    id: 'fc_c4_09',
    chapterId: 'c4',
    tag: 'Chương 4 • Tế bào Karnaugh',
    front: 'Trên biểu đồ Karnaugh $n$ biến, một tế bào hình chữ nhật hợp lệ gồm $2^k$ ô số $1$ sẽ rút gọn còn bao nhiêu biến (literal)?',
    back: 'Tế bào kích thước $2^k$ ô sẽ khử được đúng $k$ biến đổi dấu, còn lại một đơn thức tích gồm **$n - k$ biến**.<br>Ví dụ với $n = 4$: nhóm $1$ ô $\\to 4$ biến; $2$ ô $\\to 3$ biến; $4$ ô $\\to 2$ biến; $8$ ô $\\to 1$ biến; $16$ ô $\\to 1$.'
  },
  {
    id: 'fc_c4_10',
    chapterId: 'c4',
    tag: 'Chương 4 • Tế bào lớn cốt yếu',
    front: 'Định nghĩa **Tế bào lớn (Prime Implicant – PI)** và **Tế bào lớn cốt yếu (Essential PI – EPI)**.',
    back: '• **Tế bào lớn (PI):** Nhóm $2^k$ ô số $1$ lớn cực đại (không nằm trọn trong bất kỳ nhóm $2^{k+1}$ ô số $1$ nào khác).<br>• **Tế bào lớn cốt yếu (EPI):** Tế bào lớn chứa ít nhất một ô $1$ mà **không có bất kỳ tế bào lớn nào khác phủ được ô đó** (bắt buộc phải có mặt trong mọi công thức tối tiểu!).'
  },
  {
    id: 'fc_c4_11',
    chapterId: 'c4',
    tag: 'Chương 4 • Phương pháp Thỏa thuận',
    front: 'Quy tắc tìm **Tích thỏa thuận (Consensus)** của hai đơn thức $P$ và $Q$?',
    back: 'Nếu $P = x A$ và $Q = \\overline{x} B$ đối ngẫu nhau tại **đúng một biến duy nhất** $x$, thì tích thỏa thuận là $C(P, Q) = AB$:<br>$$x A \\lor \\overline{x} B = x A \\lor \\overline{x} B \\lor AB$$<br>Nếu đối ngẫu từ $2$ biến trở lên thì không có tích thỏa thuận ($= 0$).'
  },
  {
    id: 'fc_c4_12',
    chapterId: 'c4',
    tag: 'Chương 4 • Thuật toán Quine–McCluskey / Consensus',
    front: 'Hai pha của **Phương pháp Thỏa thuận** để tìm tất cả các nguyên nhân nguyên tố (Prime Implicants) và rút gọn?',
    back: '• **Pha 1 (Sinh đầy đủ PI):** Lặp lại việc thêm các tích thỏa thuận mới $AB$ và xóa ngay mọi hạng tử bị hấp thụ ($X \\lor XY = X$) cho đến khi không sinh thêm được hạng tử mới.<br>• **Pha 2 (Loại PI dư thừa):** Lần lượt thử xóa PI nào mà phần còn lại vẫn suy ra được nó.'
  },

  // ================= CHƯƠNG 5: HỆ THỨC ĐỆ QUY & HÀM SINH (12 THẺ) =================
  {
    id: 'fc_c5_01',
    chapterId: 'c5',
    tag: 'Chương 5 • Mô hình Đệ quy',
    front: 'Hệ thức đệ quy cho số xâu nhị phân độ dài $n$ **không chứa `00`** (hoặc không chứa `11`) và bài toán lát bảng $2 \\times n$ bằng domino $2 \\times 1$?',
    back: '• **Xâu nhị phân không chứa `00`:** $a_n = a_{n-1} + a_{n-2}$ với $a_1 = 2, a_2 = 3$ ($a_n = F_{n+2}$).<br>• **Lát bảng $2 \\times n$ bằng domino $2 \\times 1$:** $t_n = t_{n-1} + t_{n-2}$ với $t_1 = 1, t_2 = 2$ ($t_n = F_{n+1}$).'
  },
  {
    id: 'fc_c5_02',
    chapterId: 'c5',
    tag: 'Chương 5 • Tháp Hà Nội & Miền mặt phẳng',
    front: 'Hệ thức đệ quy và nghiệm đóng của **Tháp Hà Nội $n$ đĩa** ($H_n$) và **Số miền mặt phẳng chia bởi $n$ đường thẳng tổng quát** ($R_n$)?',
    back: '• **Tháp Hà Nội:** $H_n = 2H_{n-1} + 1$ ($H_1 = 1$) $\\implies H_n = 2^n - 1$.<br>• **Chia mặt phẳng:** $R_n = R_{n-1} + n$ ($R_0 = 1$) $\\implies R_n = \\frac{n(n+1)}{2} + 1$.'
  },
  {
    id: 'fc_c5_03',
    chapterId: 'c5',
    tag: 'Chương 5 • Đệ quy Bậc 2 (Δ > 0)',
    front: 'Cách giải $a_n = c_1 a_{n-1} + c_2 a_{n-2}$ khi phương trình đặc trưng $r^2 - c_1 r - c_2 = 0$ có **$2$ nghiệm thực phân biệt** $r_1 \\neq r_2$?',
    back: 'Nghiệm tổng quát có dạng:<br>$$a_n = \\alpha r_1^n + \\beta r_2^n$$<br>Giải hệ tuyến tính $2$ ẩn từ $a_0, a_1$: $\\begin{cases} \\alpha + \\beta = a_0 \\\\ \\alpha r_1 + \\beta r_2 = a_1 \\end{cases}$.'
  },
  {
    id: 'fc_c5_04',
    chapterId: 'c5',
    tag: 'Chương 5 • Đệ quy Bậc 2 (Δ = 0)',
    front: 'Cách giải $a_n = c_1 a_{n-1} + c_2 a_{n-2}$ khi phương trình đặc trưng $r^2 - c_1 r - c_2 = 0$ có **nghiệm thực kép** $r_1 = r_2 = r_0 \\neq 0$?',
    back: 'Nghiệm tổng quát bắt buộc nhân thêm $n$ ở số hạng thứ hai:<br>$$a_n = (\\alpha + \\beta n) r_0^n$$<br>Từ $a_0, a_1$: $\\alpha = a_0$ và $(\\alpha + \\beta) r_0 = a_1 \\implies \\beta = \\frac{a_1}{r_0} - a_0$.'
  },
  {
    id: 'fc_c5_05',
    chapterId: 'c5',
    tag: 'Chương 5 • Nghiệm phức (Δ < 0)',
    front: 'Dạng nghiệm thực khi phương trình đặc trưng bậc $2$ có hai nghiệm phức liên hợp $r_{1,2} = \\rho(\\cos\\theta \\pm i\\sin\\theta)$?',
    back: 'Với $\\rho = \\sqrt{-c_2} > 0$:<br>$$a_n = \\rho^n (k_1 \\cos(n\\theta) + k_2 \\sin(n\\theta))$$'
  },
  {
    id: 'fc_c5_06',
    chapterId: 'c5',
    tag: 'Chương 5 • Thuần nhất Bậc k',
    front: 'Trong hệ thức thuần nhất bậc $k$, nghiệm đặc trưng $r_i$ có **bội $m$** sinh ra thành phần nào trong $a_n^{(h)}$?',
    back: 'Đa thức theo $n$ bậc $m - 1$ nhân với $r_i^n$:<br>$$(\\alpha_0 + \\alpha_1 n + \\alpha_2 n^2 + \\dots + \\alpha_{m-1} n^{m-1}) r_i^n$$'
  },
  {
    id: 'fc_c5_07',
    chapterId: 'c5',
    tag: 'Chương 5 • Không thuần nhất',
    front: 'Quy tắc vàng chọn **nghiệm riêng $a_n^{(p)}$** cho hệ thức không thuần nhất có vế phải $F(n) = P_t(n) \\cdot s^n$?',
    back: '1. Nếu $s$ **không phải** nghiệm đặc trưng ($m = 0$): $a_n^{(p)} = Q_t(n) \\cdot s^n$.<br>2. Nếu $s$ **là nghiệm đặc trưng bội $m \\ge 1$**: nhân thêm $n^m$ để khử cộng hưởng:<br>$$a_n^{(p)} = n^m \\cdot Q_t(n) \\cdot s^n$$<br>*(Chú ý: nếu $F(n) = P_t(n)$ không thấy mũ thì $s = 1$!)*'
  },
  {
    id: 'fc_c5_08',
    chapterId: 'c5',
    tag: 'Chương 5 • Không thuần nhất',
    front: 'Thứ tự tìm các hằng số $\\alpha, \\beta$ khi giải bài toán giá trị đầu cho hệ thức **không thuần nhất** $a_n = a_n^{(h)} + a_n^{(p)}$?',
    back: '**Cảnh báo lỗi sai kinh điển:** Tuyệt đối KHÔNG thay $a_0, a_1$ vào riêng $a_n^{(h)}$! Phải tìm xong tường minh $a_n^{(p)}$ trước, ghép lại $a_n = a_n^{(h)} + a_n^{(p)}$, rồi mới thay $a_0, a_1$ vào tổng đó để giải $\\alpha, \\beta$.'
  },
  {
    id: 'fc_c5_09',
    chapterId: 'c5',
    tag: 'Chương 5 • Định lý Master',
    front: 'Phát biểu $3$ trường hợp của **Định lý Master** cho $T(n) = a T(n/b) + \\Theta(n^d)$ ($a \\ge 1, b > 1, d \\ge 0$).',
    back: 'So sánh $d$ với mũ tới hạn $c = \\log_b a$:<br>1. Nếu $d < \\log_b a$: $T(n) = \\Theta(n^{\\log_b a})$.<br>2. Nếu $d = \\log_b a$: $T(n) = \\Theta(n^d \\log n)$.<br>3. Nếu $d > \\log_b a$: $T(n) = \\Theta(n^d)$.'
  },
  {
    id: 'fc_c5_10',
    chapterId: 'c5',
    tag: 'Chương 5 • Hàm sinh cơ bản',
    front: 'Ba khai triển **Hàm sinh thông thường (OGF)** nền tảng cần thuộc lòng?',
    back: '1. $\\frac{1}{1 - cx} = \\sum_{n=0}^{\\infty} c^n x^n$.<br>2. $\\frac{1}{(1 - x)^2} = \\sum_{n=0}^{\\infty} (n + 1) x^n$.<br>3. $\\frac{1}{(1 - x)^m} = \\sum_{k=0}^{\\infty} C_{m+k-1}^k x^k = \\sum_{k=0}^{\\infty} K_m^k x^k$.'
  },
  {
    id: 'fc_c5_11',
    chapterId: 'c5',
    tag: 'Chương 5 • Hàm sinh Đếm',
    front: 'Cách lập hàm sinh đếm số nghiệm nguyên của $x_1 + x_2 + \\dots + x_m = k$ với ràng buộc riêng trên từng biến $x_i \\in S_i$?',
    back: 'Mỗi biến $x_i \\in S_i$ ứng với nhân tử đa thức/chuỗi $P_i(x) = \\sum_{r \\in S_i} x^r$. Số nghiệm bằng hệ số $[x^k]$ trong tích:<br>$$G(x) = P_1(x) P_2(x) \\cdots P_m(x)$$'
  },
  {
    id: 'fc_c5_12',
    chapterId: 'c5',
    tag: 'Chương 5 • Đổi xu ĐHSP 24–25',
    front: 'Phân biệt hai mô hình đệ quy bài toán đổi $n$ đồng bằng đồng xu $1$ đồng và $2$ đồng (Đề CK ĐHSP 2024–2025)?',
    back: '• **Có phân biệt thứ tự bỏ xu:** $a_n = a_{n-1} + a_{n-2}$ ($a_0 = 1, a_1 = 1$).<br>• **Không phân biệt thứ tự (chỉ xét số lượng xu):** $c_n = c_{n-2} + 1$ ($c_0 = 1, c_1 = 1$), nghiệm $c_n = \\lfloor \\frac{n}{2} \\rfloor + 1$, hàm sinh $\\frac{1}{(1 - x)(1 - x^2)}$.'
  }
];
