/**
 * Dữ liệu Lý thuyết Toán Rời Rạc
 * Biên soạn đầy đủ và chuyên sâu theo Giáo trình "Toán Rời Rạc" - GS. Nguyễn Hữu Anh
 * Nhà xuất bản Lao động Xã hội
 */

const THEORY_DATA = [
  {
    id: "c1",
    title: "Chương 1: Cơ sở Logic",
    subtitle: "Mệnh đề, dạng mệnh đề, quy tắc suy diễn, vị từ, lượng từ và quy nạp toán học",
    description: "Nền tảng toán học của tư duy lập trình và suy luận logic. Nghiên cứu chân trị của mệnh đề, các quy luật tương đương, phương pháp chứng minh hình thức và nguyên lý quy nạp toán học.",
    lessons: [
      {
        id: "l1_1",
        title: "§1 Pháp tính mệnh đề",
        readingTime: "15 phút",
        content: `
### 1. Khái niệm mệnh đề và chân trị
- **Mệnh đề (Proposition):** Là một khẳng định có giá trị chân lý xác định: hoặc **ĐÚNG** (True, ký hiệu là $1$ hay $T$), hoặc **SAI** (False, ký hiệu là $0$ hay $F$), nhưng **không thể vừa đúng vừa sai**.
- **Ký hiệu:** Ta thường ký hiệu các mệnh đề bằng các chữ cái in hoa: $P, Q, R, S, \\dots$

#### Ví dụ minh họa:
- "Hà Nội là thủ đô của Việt Nam" $\\rightarrow$ Là mệnh đề có chân trị $1$.
- "$2 + 3 = 7$" $\\rightarrow$ Là mệnh đề có chân trị $0$.
- "$n$ là số nguyên tố" $\\rightarrow$ **Không phải mệnh đề** vì chưa biết $n$ bằng bao nhiêu (đây là vị từ).
- "Hôm nay trời đẹp làm sao!" $\\rightarrow$ **Không phải mệnh đề** (câu cảm thán).
- "Hãy học bài đi!" $\\rightarrow$ **Không phải mệnh đề** (câu mệnh lệnh).

---

### 2. Phân loại mệnh đề
1. **Mệnh đề nguyên thủy (sơ cấp):** Mệnh đề không thể phân tích thành các mệnh đề đơn giản hơn nhờ các liên từ.
   - *Ví dụ:* "$3$ là số nguyên tố", "Mặt trời mọc ở hướng Đông".
2. **Mệnh đề phức hợp:** Mệnh đề được xây dựng từ các mệnh đề khác bằng cách liên kết chúng lại qua các liên từ ("và", "hay", "nếu... thì...", "khi và chỉ khi") hoặc trạng từ "không".

---

### 3. Các phép nối mệnh đề cơ bản

#### a. Phép phủ định (Negation): $\\neg P$ (hoặc $\\overline{P}$)
- Đọc là: "Không $P$" hoặc "Phủ định của $P$".
- Chân trị của $\\neg P$ là $0$ nếu $P$ có chân trị $1$, và ngược lại.

| $P$ | $\\neg P$ |
|:---:|:---------:|
| $0$ |    $1$    |
| $1$ |    $0$    |

#### b. Phép nối liền / Phép hội (Conjunction): $P \\land Q$
- Đọc là: "$P$ và $Q$".
- $P \\land Q$ chỉ đúng khi **cả $P$ và $Q$ đều đúng** ($1$). Trong các trường hợp khác, nó nhận giá trị sai ($0$).

| $P$ | $Q$ | $P \\land Q$ |
|:---:|:---:|:------------:|
| $0$ | $0$ |     $0$      |
| $0$ | $1$ |     $0$      |
| $1$ | $0$ |     $0$      |
| $1$ | $1$ |     $1$      |

#### c. Phép nối rời / Phép tuyển (Disjunction): $P \\lor Q$
- Đọc là: "$P$ hoặc $Q$" (theo nghĩa bao gồm: $P$ đúng, hoặc $Q$ đúng, hoặc cả hai cùng đúng).
- $P \\lor Q$ chỉ sai khi **cả $P$ và $Q$ đều sai** ($0$).

| $P$ | $Q$ | $P \\lor Q$ |
|:---:|:---:|:-----------:|
| $0$ | $0$ |     $0$     |
| $0$ | $1$ |     $1$     |
| $1$ | $0$ |     $1$     |
| $1$ | $1$ |     $1$     |

#### d. Phép kéo theo hai chiều / Tương đương (Biconditional): $P \\leftrightarrow Q$
- Đọc là: "$P$ khi và chỉ khi $Q$", "$P$ nếu và chỉ nếu $Q$", "$P$ là điều kiện cần và đủ của $Q$".
- $P \\leftrightarrow Q$ đúng khi **cả hai mệnh đề có cùng chân trị** (cùng là $1$ hoặc cùng là $0$).

| $P$ | $Q$ | $P \\leftrightarrow Q$ |
|:---:|:---:|:----------------------:|
| $0$ | $0$ |          $1$           |
| $0$ | $1$ |          $0$           |
| $1$ | $0$ |          $0$           |
| $1$ | $1$ |          $1$           |
`
      },
      {
        id: "l1_2",
        title: "§2 Phép kéo theo & Luật phản đảo",
        readingTime: "20 phút",
        content: `
### 1. Phép kéo theo (Implication): $P \\rightarrow Q$
- Đọc là: "Nếu $P$ thì $Q$", "$P$ kéo theo $Q$", "$P$ là điều kiện đủ của $Q$", "$Q$ là điều kiện cần của $P$", "$P$ chỉ khi $Q$".
- **Bảng chân trị:** $P \\rightarrow Q$ chỉ **SAI duy nhất** khi **$P$ đúng mà $Q$ sai** ($1 \\rightarrow 0 = 0$). Trong mọi trường hợp còn lại, $P \\rightarrow Q$ đều đúng ($1$).

| $P$ | $Q$ | $P \\rightarrow Q$ |
|:---:|:---:|:------------------:|
| $0$ | $0$ |        $1$         |
| $0$ | $1$ |        $1$         |
| $1$ | $0$ |        $0$         |
| $1$ | $1$ |        $1$         |

> **Chú ý quan trọng:**
> - Nếu giả thiết $P$ sai ($0$), thì mệnh đề $P \\rightarrow Q$ luôn đúng ($1$) bất chấp $Q$ đúng hay sai! (Ví dụ: "Nếu $1 + 1 = 3$ thì Mặt trời mọc ở hướng Tây" là một mệnh đề đúng).
> - Cần phân biệt mệnh đề $P \\rightarrow Q$ với lệnh rẽ nhánh \`if P then Q\` trong lập trình máy tính.

---

### 2. Bốn mệnh đề liên quan & Luật phản đảo (Contrapositive)
Từ mệnh đề kéo theo ban đầu, ta có 4 dạng mệnh đề:
1. **Mệnh đề gốc:** $P \\rightarrow Q$
2. **Mệnh đề đảo (Converse):** $Q \\rightarrow P$
3. **Mệnh đề nghịch đảo (Inverse):** $\\neg P \\rightarrow \\neg Q$
4. **Mệnh đề phản đảo (Contrapositive):** $\\neg Q \\rightarrow \\neg P$

#### Định lý về tính tương đương:
- **Luật phản đảo:** Mệnh đề gốc luôn luôn tương đương logic với mệnh đề phản đảo:
  $$P \\rightarrow Q \\Leftrightarrow \\neg Q \\rightarrow \\neg P$$
- Mệnh đề đảo luôn luôn tương đương logic với mệnh đề nghịch đảo:
  $$Q \\rightarrow P \\Leftrightarrow \\neg P \\rightarrow \\neg Q$$
- **Cảnh báo lỗi ngụy biện:** Mệnh đề gốc **KHÔNG tương đương** với mệnh đề đảo hay mệnh đề nghịch đảo:
  $$(P \\rightarrow Q) \\not\\Leftrightarrow (Q \\rightarrow P), \\quad (P \\rightarrow Q) \\not\\Leftrightarrow (\\neg P \\rightarrow \\neg Q)$$

---

### 3. Các quy luật tương đương của phép kéo theo
Cho $p, q, r$ là các biến mệnh đề:

1. **Chuyển phép kéo theo về phép tuyển:**
   $$p \\rightarrow q \\Leftrightarrow \\neg p \\lor q$$
2. **Phủ định của phép kéo theo:**
   $$\\neg(p \\rightarrow q) \\Leftrightarrow p \\land \\neg q$$
3. **Luật xuất nhập (Exportation Law):**
   $$(p \\land q) \\rightarrow r \\Leftrightarrow p \\rightarrow (q \\rightarrow r)$$
4. **Phân bố của phép kéo theo:**
   $$(p \\rightarrow q) \\land (p \\rightarrow r) \\Leftrightarrow p \\rightarrow (q \\land r)$$
   $$(p \\rightarrow r) \\lor (q \\rightarrow r) \\Leftrightarrow (p \\land q) \\rightarrow r$$
   $$(p \\rightarrow r) \\land (q \\rightarrow r) \\Leftrightarrow (p \\lor q) \\rightarrow r$$
   $$(p \\rightarrow q) \\lor (p \\rightarrow r) \\Leftrightarrow p \\rightarrow (q \\lor r)$$
5. **Các hằng đúng quan trọng:**
   $$(p \\rightarrow q) \\lor (q \\rightarrow p) \\Leftrightarrow 1$$
   $$p \\rightarrow (q \\rightarrow p) \\Leftrightarrow 1$$
   $$p \\lor (p \\rightarrow q) \\Leftrightarrow 1$$
`
      },
      {
        id: "l1_3",
        title: "§3 10 Quy luật Logic cơ bản",
        readingTime: "22 phút",
        content: `
### 1. Dạng mệnh đề & Tương đương logic
- **Dạng mệnh đề:** Biểu thức logic gồm các biến mệnh đề ($p, q, r, \\dots$), hằng mệnh đề ($1, 0$) và các phép nối logic.
- **Tương đương logic ($E \\Leftrightarrow F$):** Hai dạng mệnh đề có cùng bảng chân trị.
- **Hằng đúng (Tautology):** Dạng mệnh đề luôn nhận chân trị $1$.
- **Hằng sai / Mâu thuẫn (Contradiction):** Dạng mệnh đề luôn nhận chân trị $0$.
- **Hệ quả logic ($E \\Rightarrow F$):** Dạng mệnh đề $E \\rightarrow F$ là một hằng đúng.

---

### 2. Mười quy luật logic cơ bản (Equivalence Laws)
Cho $p, q, r$ là các biến mệnh đề, $1$ là hằng đúng, $0$ là hằng sai:

1. **Phủ định của phủ định (Phủ định kép):**
   $$\\neg(\\neg p) \\Leftrightarrow p$$
2. **Quy tắc De Morgan:**
   $$\\neg(p \\land q) \\Leftrightarrow \\neg p \\lor \\neg q$$
   $$\\neg(p \\lor q) \\Leftrightarrow \\neg p \\land \\neg q$$
3. **Luật giao hoán:**
   $$p \\lor q \\Leftrightarrow q \\lor p$$
   $$p \\land q \\Leftrightarrow q \\land p$$
4. **Luật kết hợp:**
   $$(p \\lor q) \\lor r \\Leftrightarrow p \\lor (q \\lor r)$$
   $$(p \\land q) \\land r \\Leftrightarrow p \\land (q \\land r)$$
5. **Luật phân bố:**
   $$p \\land (q \\lor r) \\Leftrightarrow (p \\land q) \\lor (p \\land r)$$
   $$p \\lor (q \\land r) \\Leftrightarrow (p \\lor q) \\land (p \\lor r)$$
6. **Luật lũy đẳng (Idempotent):**
   $$p \\lor p \\Leftrightarrow p, \\quad p \\land p \\Leftrightarrow p$$
7. **Luật trung hòa (Đồng nhất):**
   $$p \\lor 0 \\Leftrightarrow p, \\quad p \\land 1 \\Leftrightarrow p$$
8. **Luật về phần tử bù:**
   $$p \\lor \\neg p \\Leftrightarrow 1, \\quad p \\land \\neg p \\Leftrightarrow 0$$
9. **Luật thống trị (Nuốt):**
   $$p \\lor 1 \\Leftrightarrow 1, \\quad p \\land 0 \\Leftrightarrow 0$$
10. **Luật hấp thụ (Absorption):**
   $$p \\lor (p \\land q) \\Leftrightarrow p$$
   $$p \\land (p \\lor q) \\Leftrightarrow p$$

---

### 3. Định lý đồng thuận (Consensus Theorem) & Rút gọn
- **Định lý đồng thuận:**
  $$(p \\land q) \\lor (\\neg p \\land r) \\lor (q \\land r) \\Leftrightarrow (p \\land q) \\lor (\\neg p \\land r)$$
  Số hạng $(q \\land r)$ được gọi là **thỏa thuận (consensus)** của $(p \\land q)$ và $(\\neg p \\land r)$ và là số hạng dư thừa bị triệt tiêu hoàn toàn.
`
      },
      {
        id: "l1_4",
        title: "§4 Các Quy tắc Suy diễn hợp lý",
        readingTime: "25 phút",
        content: `
### 1. Khái niệm suy diễn hợp lý
- Một suy diễn từ các tiền đề $p_1, p_2, \\dots, p_n$ đến kết luận $q$ được gọi là **hợp lý (valid)** nếu dạng mệnh đề sau là một hằng đúng:
  $$(p_1 \\land p_2 \\land \\dots \\land p_n) \\rightarrow q$$
- Sơ đồ suy diễn:
  $$\\begin{matrix} p_1 \\\\ p_2 \\\\ \\vdots \\\\ p_n \\\\ \\hline \\therefore q \\end{matrix}$$

---

### 2. Bảng các quy tắc suy diễn cơ bản

| Tên quy tắc | Sơ đồ suy diễn | Hằng đúng tương ứng |
| :--- | :--- | :--- |
| **Modus Ponens** (Khẳng định) | $p \\rightarrow q, \\ p \\ \\therefore q$ | $[(p \\rightarrow q) \\land p] \\rightarrow q$ |
| **Modus Tollens** (Phủ định) | $p \\rightarrow q, \\ \\neg q \\ \\therefore \\neg p$ | $[(p \\rightarrow q) \\land \\neg q] \\rightarrow \\neg p$ |
| **Tam đoạn luận giả thiết** | $p \\rightarrow q, \\ q \\rightarrow r \\ \\therefore p \\rightarrow r$ | $[(p \\rightarrow q) \\land (q \\rightarrow r)] \\rightarrow (p \\rightarrow r)$ |
| **Tam đoạn luận rời** | $p \\lor q, \\ \\neg p \\ \\therefore q$ | $[(p \\lor q) \\land \\neg p] \\rightarrow q$ |
| **Phép bổ sung** (Addition) | $p \\ \\therefore p \\lor q$ | $p \\rightarrow (p \\lor q)$ |
| **Phép đơn giản hóa** (Simplification) | $p \\land q \\ \\therefore p$ | $(p \\land q) \\rightarrow p$ |
| **Phép nối liền** (Conjunction) | $p, \\ q \\ \\therefore p \\land q$ | $[p \\land q] \\rightarrow (p \\land q)$ |
| **Phép giải** (Resolution) | $p \\lor q, \\ \\neg p \\lor r \\ \\therefore q \\lor r$ | $[(p \\lor q) \\land (\\neg p \\lor r)] \\rightarrow (q \\lor r)$ |
| **Tam đoạn luận kiến thiết** | $p \\rightarrow q, \\ r \\rightarrow s, \\ p \\lor r \\ \\therefore q \\lor s$ | $[(p \\rightarrow q) \\land (r \\rightarrow s) \\land (p \\lor r)] \\rightarrow (q \\lor s)$ |

---

### 3. Các phương pháp chứng minh toán học
1. **Chứng minh trực tiếp:** Giả sử $P$ đúng, áp dụng các tiên đề và định lý để suy ra $Q$ đúng.
2. **Chứng minh phản đảo:** Giả sử kết luận $Q$ sai ($\\neg Q$ đúng), từ đó chứng minh tiền đề $P$ sai ($\\neg P$ đúng).
3. **Chứng minh phản chứng (Mâu thuẫn):** Giả thiết đồng thời $P$ đúng và $Q$ sai ($P \\land \\neg Q$), tìm cách suy luận dẫn đến một điều mâu thuẫn ($R \\land \\neg R \\equiv 0$).
4. **Chứng minh theo trường hợp:** Chia giả thiết thành các trường hợp vét cạn: $p \\lor q, p \\rightarrow r, q \\rightarrow r \\vdash r$.

---

### 4. Nhận diện các lỗi ngụy biện phổ biến
- **Ngụy biện khẳng định kết luận:** $p \\rightarrow q, q \\vdash p$ (SAI!).
- **Ngụy biện phủ định tiền đề:** $p \\rightarrow q, \\neg p \\vdash \\neg q$ (SAI!).
- **Phương pháp tìm phản ví dụ:** Chỉ ra một bộ chân trị làm cho mọi tiền đề đều đúng ($1$) nhưng kết luận lại sai ($0$).
`
      },
      {
        id: "l1_5",
        title: "§5 Vị từ và Lượng từ",
        readingTime: "20 phút",
        content: `
### 1. Khái niệm Vị từ (Predicate)
- **Vị từ:** Khẳng định $P(x, y, \\dots)$ chứa biến tự do lấy giá trị trong tập hợp cho trước. Khi thay biến bằng phần tử cụ thể thì trở thành mệnh đề có chân trị xác định.

---

### 2. Các lượng từ toán học
- **Lượng từ phổ dụng $\\forall$ ("với mọi"):** $\\forall x \\in A, P(x)$ đúng khi $P(a)$ đúng với mọi $a \\in A$.
- **Lượng từ tồn tại $\\exists$ ("tồn tại"):** $\\exists x \\in A, P(x)$ đúng khi có ít nhất một $a \\in A$ thỏa $P(a)$.
- **Lượng từ tồn tại duy nhất $\\exists!$:** Tồn tại đúng một phần tử thỏa mãn tính chất.

---

### 3. Phủ định và Hoán vị lượng từ
- $\\neg(\\forall x, P(x)) \\Leftrightarrow \\exists x, \\neg P(x)$
- $\\neg(\\exists x, P(x)) \\Leftrightarrow \\forall x, \\neg P(x)$
- **Hoán vị:** Cùng loại đổi chỗ được ($\\forall x \\forall y \\Leftrightarrow \\forall y \\forall x$; $\\exists x \\exists y \\Leftrightarrow \\exists y \\exists x$). Khác loại **không thể** tùy tiện đổi chỗ ($\\exists x \\forall y \\Rightarrow \\forall y \\exists x$).
`
      },
      {
        id: "l1_6",
        title: "§6 Nguyên lý Quy nạp Toán học",
        readingTime: "18 phút",
        content: `
### 1. Nguyên lý quy nạp toán học
Để chứng minh $P(n)$ đúng với mọi số tự nhiên $n \\ge n_0$:
- **Bước cơ sở (Base Case):** Chứng minh $P(n_0)$ đúng.
- **Bước quy nạp (Inductive Step):** Giả sử $P(k)$ đúng với $k \\ge n_0$, chứng minh $P(k+1)$ cũng đúng.

---

### 2. Quy nạp mạnh & Nguyên lý thứ tự tốt
- **Quy nạp mạnh (Strong Induction):** Giả sử mệnh đề đúng cho **tất cả** các số từ $n_0$ đến $k$, từ đó chứng minh đúng cho $k+1$.
- **Nguyên lý thứ tự tốt (Well-ordering Principle):** Mọi tập con khác rỗng của $\\mathbb{N}$ đều có phần tử nhỏ nhất. Tương đương logic với nguyên lý quy nạp.
- **Ứng dụng:** Chứng minh bất biến vòng lặp, tính đúng đắn thuật toán chia để trị, tháp Hà Nội, dãy Fibonacci.
`
      }
    ]
  },
  {
    id: "c2",
    title: "Chương 2: Phương pháp Đếm",
    subtitle: "Tập hợp, ánh xạ, nguyên lý cộng - nhân, giải tích tổ hợp và chuồng bồ câu",
    description: "Cơ sở toán học của độ phức tạp thuật toán, cấu trúc dữ liệu và xác suất rời rạc. Nghiên cứu cách đếm số phần tử của các cấu hình tổ hợp mà không cần liệt kê toàn bộ.",
    lessons: [
      {
        id: "l2_1",
        title: "§1 Tập hợp & Đại số tập hợp",
        readingTime: "15 phút",
        content: `
### 1. Khái niệm tập hợp
- **Tập hợp (Set):** Là tập hợp các đối tượng (phần tử) được gom nhóm lại theo một tính chất xác định. Ký hiệu $a \\in A$ ($a$ thuộc $A$) hoặc $a \\notin A$.
- **Tập con (Subset):** $A \\subseteq B \\Leftrightarrow \\forall x (x \\in A \\rightarrow x \\in B)$.
- **Tập rỗng (Empty Set):** Ký hiệu $\\emptyset$, là tập hợp không chứa phần tử nào. $\\emptyset \\subseteq A$ với mọi tập $A$.
- **Tập lũy thừa (Power Set):** $\\mathcal{P}(A)$ (hoặc $2^A$) là tập hợp tất cả các tập con của $A$. Nếu $|A| = n$ thì $|\\mathcal{P}(A)| = 2^n$.

---

### 2. Các phép toán trên tập hợp
Giả sử $A, B$ là các tập con của tập vũ trụ $\\mathcal{U}$:
1. **Phép hợp (Union):**
   $$A \\cup B = \\{x \\in \\mathcal{U} \\mid x \\in A \\lor x \\in B\\}$$
2. **Phép giao (Intersection):**
   $$A \\cap B = \\{x \\in \\mathcal{U} \\mid x \\in A \\land x \\in B\\}$$
3. **Phép hiệu (Difference):**
   $$A \\setminus B = \\{x \\in \\mathcal{U} \\mid x \\in A \\land x \\notin B\\}$$
4. **Phần bù (Complement):**
   $$\\overline{A} = \\mathcal{U} \\setminus A = \\{x \\in \\mathcal{U} \\mid x \\notin A\\}$$

---

### 3. Định lý các tính chất đại số tập hợp
Tương tự 10 quy luật logic:
- **Luật De Morgan:** $\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$; $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$.
- **Luật phân bố:**
  $$A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$$
  $$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$$
- **Luật phần tử bù:** $A \\cup \\overline{A} = \\mathcal{U}$; $A \\cap \\overline{A} = \\emptyset$.
`
      },
      {
        id: "l2_2",
        title: "§2 Ánh xạ: Đơn ánh, Toàn ánh, Song ánh",
        readingTime: "18 phút",
        content: `
### 1. Định nghĩa Ánh xạ (Mapping / Function)
- Một ánh xạ $f$ từ tập $A$ vào tập $B$ (ký hiệu $f: A \\rightarrow B$) là một quy tắc đặt tương ứng mỗi phần tử $x \\in A$ với **đúng một phần tử duy nhất** $y = f(x) \\in B$.
- $A$ gọi là **tập nguồn** (miền xác định), $B$ gọi là **tập đích**.
- **Ảnh (Image):** $f(A) = \\{f(x) \\mid x \\in A\\} \\subseteq B$.
- **Nghịch ảnh / Tạo ảnh:** $f^{-1}(y) = \\{x \\in A \\mid f(x) = y\\}$.

---

### 2. Phân loại ánh xạ

#### a. Đơn ánh (Injective / One-to-One)
- Hai phần tử khác nhau của tập nguồn luôn có ảnh khác nhau:
  $$\\forall x_1, x_2 \\in A, \\quad x_1 \\neq x_2 \\implies f(x_1) \\neq f(x_2)$$
  $$\\Leftrightarrow \\forall x_1, x_2 \\in A, \\quad f(x_1) = f(x_2) \\implies x_1 = x_2$$

#### b. Toàn ánh (Surjective / Onto)
- Mọi phần tử của tập đích đều là ảnh của ít nhất một phần tử tập nguồn:
  $$f(A) = B \\quad \\Leftrightarrow \\quad \\forall y \\in B, \\exists x \\in A: f(x) = y$$

#### c. Song ánh (Bijective / One-to-One & Onto)
- Ánh xạ vừa là đơn ánh vừa là toàn ánh.
- Khi $f: A \\rightarrow B$ là song ánh:
  - Tồn tại **ánh xạ ngược** $f^{-1}: B \\rightarrow A$.
  - Ta có $f \\circ f^{-1} = \\text{id}_B$ và $f^{-1} \\circ f = \\text{id}_A$.
  - Nếu $A, B$ hữu hạn thì $|A| = |B|$.
`
      },
      {
        id: "l2_3",
        title: "§3 Phép đếm & Các nguyên lý đếm cơ bản",
        readingTime: "20 phút",
        content: `
### 1. Lực lượng tập hợp (Cardinality)
- Ký hiệu $|A|$ là số phần tử của tập hữu hạn $A$.
- Nếu tồn tại song ánh giữa $A$ và $B$ thì $|A| = |B|$ (hai tập đồng lực lượng).

---

### 2. Nguyên lý cộng (Addition Principle)
- Nếu một công việc có thể thực hiện theo **một trong hai phương án loại trừ lẫn nhau**: phương án 1 có $m$ cách, phương án 2 có $n$ cách, thì công việc đó có:
  $$m + n \\text{ cách thực hiện.}$$
- Dưới dạng tập hợp: Nếu $A \\cap B = \\emptyset$ thì $|A \\cup B| = |A| + |B|$.

#### Mở rộng: Nguyên lý Bù trừ (Inclusion-Exclusion Principle)
Nếu $A$ và $B$ không rời nhau:
$$|A \\cup B| = |A| + |B| - |A \\cap B|$$
Với 3 tập hợp:
$$|A \\cup B \\cup C| = |A| + |B| + |C| - (|A \\cap B| + |B \\cap C| + |C \\cap A|) + |A \\cap B \\cap C|$$

---

### 3. Nguyên lý nhân (Multiplication Principle)
- Nếu một quy trình gồm **hai giai đoạn liên tiếp, độc lập**: giai đoạn 1 có $m$ cách thực hiện, và ứng với mỗi cách đó giai đoạn 2 có $n$ cách thực hiện, thì toàn bộ quy trình có:
  $$m \\cdot n \\text{ cách thực hiện.}$$
- Dưới dạng tích Descartes: $|A \\times B| = |A| \\cdot |B|$.
- Mở rộng cho $k$ giai đoạn: $|A_1 \\times A_2 \\times \\dots \\times A_k| = |A_1| \\cdot |A_2| \\dots |A_k|$.
`
      },
      {
        id: "l2_4",
        title: "§4 Giải tích tổ hợp & Nhị thức Newton",
        readingTime: "25 phút",
        content: `
### 1. Hoán vị (Permutations)
- Một hoán vị của $n$ phần tử phân biệt là một cách sắp xếp có thứ tự $n$ phần tử đó:
  $$P_n = n! = n(n-1)(n-2)\\dots 1$$
  *(Quy ước: $0! = 1$)*

---

### 2. Chỉnh hợp (Partial Permutations)
- Chọn $m$ phần tử từ $n$ phần tử ($m \\le n$) **có quan tâm đến thứ tự**:
  $$A_n^m = \\frac{n!}{(n-m)!} = n(n-1)\\dots(n-m+1)$$
- *Ý nghĩa ánh xạ:* $A_n^m$ chính là số lượng các đơn ánh từ tập $A$ ($m$ phần tử) vào tập $B$ ($n$ phần tử).

---

### 3. Tổ hợp (Combinations)
- Chọn $m$ phần tử từ $n$ phần tử ($m \\le n$) **không kể thứ tự**:
  $$C_n^m = \\binom{n}{m} = \\frac{n!}{m!(n-m)!} = \\frac{A_n^m}{m!}$$
- **Tính chất đối xứng:** $\\binom{n}{m} = \\binom{n}{n-m}$.
- **Công thức Pascal:** $\\binom{n+1}{m} = \\binom{n}{m} + \\binom{n}{m-1}$.

---

### 4. Công thức Nhị thức Newton
Với mọi số thực $x, y$ và số nguyên $n \\ge 1$:
$$(x + y)^n = \\sum_{m=0}^n \\binom{n}{m} x^{n-m} y^m = \\binom{n}{0}x^n + \\binom{n}{1}x^{n-1}y + \\dots + \\binom{n}{n}y^n$$
- **Hệ quả quan trọng:**
  - Cho $x = 1, y = 1$: $\\sum_{m=0}^n \\binom{n}{m} = 2^n$ (tổng số tập con của tập $n$ phần tử).
  - Cho $x = 1, y = -1$: $\\sum_{m=0}^n (-1)^m \\binom{n}{m} = 0$.

---

### 5. Tổ hợp lặp (Combinations with Repetition)
- Chọn $r$ vật từ $n$ loại vật khác nhau, mỗi loại có thể chọn lặp lại tùy ý:
  $$\\overline{C}_n^r = \\binom{n + r - 1}{r} = \\binom{n + r - 1}{n - 1}$$
- **Bài toán chia kẹo Euler (chia $r$ vật giống nhau vào $n$ hộp khác nhau):**
  - Số nghiệm nguyên **không âm** ($x_i \\ge 0$) của phương trình $x_1 + x_2 + \\dots + x_n = r$ là:
    $$\\binom{n + r - 1}{r}$$
  - Số nghiệm nguyên **dương** ($x_i \\ge 1$) của phương trình trên là:
    $$\\binom{r - 1}{n - 1}$$
`
      },
      {
        id: "l2_5",
        title: "§5 Nguyên lý Chuồng bồ câu (Dirichlet)",
        readingTime: "15 phút",
        content: `
### 1. Nguyên lý cơ bản
- **Phát biểu:** Nếu nhốt $m$ con chim bồ câu vào $n$ cái chuồng mà số bồ câu nhiều hơn số chuồng ($m > n$), thì **ít nhất một chuồng chứa từ $2$ con chim bồ câu trở lên**.
- *Ý nghĩa ánh xạ:* Không thể có đơn ánh từ tập $A$ vào tập $B$ nếu $|A| > |B|$.

---

### 2. Nguyên lý dạng tổng quát
- **Định lý:** Nếu nhốt $m$ con chim bồ câu vào $n$ chuồng thì ít nhất một chuồng chứa tối thiểu:
  $$\\left\\lceil \\frac{m}{n} \\right\\rceil \\text{ con chim bồ câu}$$
  *(Trong đó $\\lceil x \\rceil$ là hàm trần - số nguyên nhỏ nhất lớn hơn hoặc bằng $x$)*.

---

### 3. Các bài toán ứng dụng kinh điển
1. **Trùng ngày sinh:**
   - Trong một nhóm $367$ người, chắc chắn có ít nhất $2$ người có cùng ngày sinh (chuồng $= 366$ ngày).
   - Trong một nhóm $73$ người, chắc chắn có ít nhất $\\lceil 73 / 12 \\rceil = 7$ người sinh cùng tháng.
2. **Tổng bằng hằng số:**
   - Chọn $6$ số từ tập $\\{1, 2, \\dots, 9\\}$. Tạo $5$ chuồng: $\\{1,9\\}, \\{2,8\\}, \\{3,7\\}, \\{4,6\\}, \\{5\\}$. Vì có $6$ số nhốt vào $5$ chuồng nên luôn có $2$ số thuộc cùng một chuồng có tổng bằng $10$.
`
      }
    ]
  },
  {
    id: "c3",
    title: "Chương 3: Quan hệ",
    subtitle: "Quan hệ tương đương, quan hệ thứ tự, biểu đồ Hasse, lý thuyết dàn và dàn ước số",
    description: "Nền tảng của cấu trúc dữ liệu, cơ sở dữ liệu quan hệ (RDBMS), lý thuyết đồ thị và số học mô-đun. Nghiên cứu quan hệ tương đương, cấu trúc thứ tự bộ phận (Poset) và cấu trúc dàn.",
    lessons: [
      {
        id: "l3_1",
        title: "§1 Quan hệ & Quan hệ chiếu",
        readingTime: "15 phút",
        content: `
### 1. Khái niệm quan hệ hai ngôi
- Cho hai tập hợp $A$ và $B$. Một **quan hệ hai ngôi** $\\mathcal{R}$ từ $A$ vào $B$ là một tập con của tích Descartes $A \\times B$:
  $$\\mathcal{R} \\subseteq A \\times B$$
- Nếu $(a, b) \\in \\mathcal{R}$, ta viết $a\\mathcal{R}b$ ($a$ có quan hệ với $b$). Ngược lại, viết $a\\not\\!\\mathcal{R}b$.
- Nếu $A = B$, ta nói $\\mathcal{R}$ là một quan hệ trên $A$.

---

### 2. Các cách biểu diễn quan hệ
1. **Liệt kê các cặp có thứ tự:** $\\mathcal{R} = \\{(1,1), (1,2), (2,3)\\}$.
2. **Ma trận logic (Zero-One Matrix):** Ma trận $M_{\\mathcal{R}} = [m_{ij}]$ với $m_{ij} = 1$ nếu $a_i \\mathcal{R} b_j$, ngược lại $m_{ij} = 0$.
3. **Đồ thị có hướng (Digraph):** Các đỉnh là phần tử của $A$, cung có hướng từ $a$ đến $b$ nếu $a\\mathcal{R}b$.

---

### 3. Phép chia hết & Đồng dư Modulo $n$
- Cho $a, b \\in \\mathbb{Z}$ và $n > 1$: Ta nói $a$ đồng dư với $b$ modulo $n$ (ký hiệu $a \\equiv b \\pmod n$) nếu $a - b$ chia hết cho $n$.
- $a \\equiv b \\pmod n$ khi và chỉ khi $a$ và $b$ có cùng số dư khi chia cho $n$.

---

### 4. Ánh xạ chiếu & Ứng dụng trong CSDL Quan hệ
- Trong CSDL quan hệ, mỗi bảng dữ liệu là một quan hệ $n$-ngôi $\\mathcal{R} \\subseteq A_1 \\times A_2 \\times \\dots \\times A_n$.
- **Ánh xạ chiếu $\\pi_{i_1, \\dots, i_m}$:** Trích xuất các cột thuộc tính tương ứng, loại bỏ các cột còn lại.
- **Khóa chính (Primary Key):** Tập thuộc tính mà giá trị của nó xác định duy nhất mỗi bộ (bản ghi) trong bảng.
`
      },
      {
        id: "l3_2",
        title: "§2 Quan hệ Tương đương & Phân hoạch",
        readingTime: "20 phút",
        content: `
### 1. Ba tính chất của quan hệ tương đương
Một quan hệ $\\mathcal{R}$ trên tập $A$ được gọi là **quan hệ tương đương** nếu nó thỏa mãn đồng thời 3 tính chất:
1. **Tính phản xạ (Reflexive):**
   $$\\forall x \\in A, \\quad x\\mathcal{R}x$$
2. **Tính đối xứng (Symmetric):**
   $$\\forall x, y \\in A, \\quad x\\mathcal{R}y \\implies y\\mathcal{R}x$$
3. **Tính bắc cầu (Transitive):**
   $$\\forall x, y, z \\in A, \\quad (x\\mathcal{R}y \\land y\\mathcal{R}z) \\implies x\\mathcal{R}z$$

---

### 2. Lớp tương đương (Equivalence Class)
- Cho $\\mathcal{R}$ là quan hệ tương đương trên $A$ và $x \\in A$. **Lớp tương đương** chứa $x$ (ký hiệu là $[x]$ hoặc $\\bar{x}$) là tập hợp:
  $$[x] = \\{y \\in A \\mid x\\mathcal{R}y\\}$$
- **Tính chất cốt lõi:**
  1. $x \\in [x]$.
  2. $x\\mathcal{R}y \\Leftrightarrow [x] = [y]$.
  3. Hai lớp tương đương bất kỳ hoặc là **hoàn toàn rời nhau** hoặc là **trùng khít nhau**:
     $$[x] \\cap [y] \\neq \\emptyset \\implies [x] = [y]$$

---

### 3. Định lý Phân hoạch (Partition)
- Một quan hệ tương đương $\\mathcal{R}$ trên $A$ chia $A$ thành các lớp tương đương đôi một rời nhau mà hợp của chúng chính bằng $A$.
- Ngược lại, mỗi phân hoạch của $A$ xác định duy nhất một quan hệ tương đương trên $A$.

*Ví dụ:* Quan hệ đồng dư $\\equiv \\pmod 3$ trên $\\mathbb{Z}$ chia $\\mathbb{Z}$ thành $3$ lớp tương đương:
- $\\bar{0} = \\{\\dots, -6, -3, 0, 3, 6, \\dots\\}$
- $\\bar{1} = \\{\\dots, -5, -2, 1, 4, 7, \\dots\\}$
- $\\bar{2} = \\{\\dots, -4, -1, 2, 5, 8, \\dots\\}$
Tập các lớp này tạo thành vành $\\mathbb{Z}_3 = \\{\\bar{0}, \\bar{1}, \\bar{2}\\}$.
`
      },
      {
        id: "l3_3",
        title: "§3 Quan hệ Thứ tự & Biểu đồ Hasse",
        readingTime: "25 phút",
        content: `
### 1. Quan hệ thứ tự (Partial Order / Poset)
Một quan hệ $\\preceq$ trên tập $A$ được gọi là **quan hệ thứ tự** (bộ phận) nếu nó thỏa mãn:
1. **Phản xạ:** $\\forall x \\in A, x \\preceq x$.
2. **Phản xứng (Antisymmetric):** $\\forall x, y \\in A, (x \\preceq y \\land y \\preceq x) \\implies x = y$.
3. **Bắc cầu:** $\\forall x, y, z \\in A, (x \\preceq y \\land y \\preceq z) \\implies x \\preceq z$.

- Tập $A$ cùng quan hệ $\\preceq$ được gọi là **tập sắp thứ tự** (Poset - Partially Ordered Set), ký hiệu $(A, \\preceq)$.
- **Thứ tự toàn phần (Total order):** Nếu mọi cặp $x, y \\in A$ đều so sánh được ($x \\preceq y$ hoặc $y \\preceq x$).

---

### 2. Trội trực tiếp & Biểu đồ Hasse (Hasse Diagram)
- **Trội trực tiếp:** Ta nói $y$ là trội trực tiếp của $x$ nếu $x \\prec y$ và không tồn tại phần tử $z$ nào sao cho $x \\prec z \\prec y$.
- **Quy tắc vẽ biểu đồ Hasse:**
  1. Mỗi phần tử là một điểm (đỉnh).
  2. Nếu $y$ là trội trực tiếp của $x$, ta vẽ $y$ nằm **ở vị trí cao hơn** $x$ và nối một đoạn thẳng giữa $x$ và $y$.
  3. Bỏ qua các vòng lặp phản xạ ($x \\preceq x$) và các cung suy ra từ tính bắc cầu.

---

### 3. Các phần tử đặc biệt trong Poset
Cho $(A, \\preceq)$ và tập con $B \\subseteq A$:
- **Phần tử tối đại (Maximal element):** $m \\in A$ là tối đại nếu không có phần tử nào lớn hơn $m$ ($m \\preceq x \\implies x = m$).
- **Phần tử tối tiểu (Minimal element):** Không có phần tử nào bé hơn nó.
- **Phần tử lớn nhất (Greatest / Maximum):** $M \\in A$ thỏa $\\forall x \\in A, x \\preceq M$. (Nếu tồn tại thì là **duy nhất**).
- **Phần tử bé nhất (Least / Minimum):** $m_0 \\in A$ thỏa $\\forall x \\in A, m_0 \\preceq x$. (Nếu tồn tại thì là **duy nhất**).

> **Phân biệt:** Phần tử lớn nhất luôn là phần tử tối đại duy nhất. Nhưng một Poset có thể có nhiều phần tử tối đại mà không có phần tử lớn nhất!
`
      },
      {
        id: "l3_4",
        title: "§4 Dàn (Lattice) & Dàn phân bố, Dàn bù",
        readingTime: "20 phút",
        content: `
### 1. Khái niệm Sup và Inf
Cho $(A, \\preceq)$ và hai phần tử $x, y \\in A$:
- **Chặn trên chung:** $z$ thỏa $x \\preceq z$ và $y \\preceq z$. Chặn trên chung nhỏ nhất được gọi là **Supremum (Sup / Join)**, ký hiệu:
  $$x \\lor y = \\sup\\{x, y\\}$$
- **Chặn dưới chung:** $w$ thỏa $w \\preceq x$ và $w \\preceq y$. Chặn dưới chung lớn nhất được gọi là **Infimum (Inf / Meet)**, ký hiệu:
  $$x \\land y = \\inf\\{x, y\\}$$

---

### 2. Định nghĩa Dàn (Lattice)
- Một tập sắp thứ tự $(A, \\preceq)$ được gọi là một **dàn** nếu với mọi cặp phần tử $x, y \\in A$, cả $x \\lor y$ và $x \\land y$ đều tồn tại.
- **Tính chất cơ bản của dàn:** Các phép toán $\\lor, \\land$ trên dàn đều có tính:
  - Giao hoán: $x \\lor y = y \\lor x, \\quad x \\land y = y \\land x$
  - Kết hợp: $(x \\lor y) \\lor z = x \\lor (y \\lor z)$
  - Lũy đẳng: $x \\lor x = x, \\quad x \\land x = x$
  - Hấp thụ: $x \\lor (x \\land y) = x, \\quad x \\land (x \\lor y) = x$

---

### 3. Dàn phân bố và Dàn bù
- **Dàn phân bố (Distributive Lattice):** Dàn thỏa luật phân bố:
  $$x \\land (y \\lor z) = (x \\land y) \\lor (x \\land z)$$
  $$x \\lor (y \\land z) = (x \\lor y) \\land (x \\lor z)$$
- **Dàn bù (Complemented Lattice):** Dàn có phần tử bé nhất $0$ và phần tử lớn nhất $1$, sao cho mọi phần tử $x$ đều có phần bù $\\bar{x}$ thỏa:
  $$x \\lor \\bar{x} = 1 \\quad \\text{và} \\quad x \\land \\bar{x} = 0$$
`
      },
      {
        id: "l3_5",
        title: "§5 Dàn 2^E & Hàm đặc trưng",
        readingTime: "15 phút",
        content: `
### 1. Dàn lũy thừa $\\mathcal{P}(E)$
- Cho tập $E$. Tập tất cả các tập con $\\mathcal{P}(E)$ với thứ tự bao hàm $\\subseteq$ là một dàn, trong đó:
  $$A \\lor B = A \\cup B, \\quad A \\land B = A \\cap B$$
  Phần tử bé nhất là $\\emptyset$, phần tử lớn nhất là $E$, phần bù của $A$ là $\\overline{A} = E \\setminus A$.
- Đây là một **dàn bù phân bố**.

---

### 2. Dàn các ánh xạ $2^E$ & Hàm đặc trưng
- Ký hiệu $2^E = \\{0, 1\\}^E$ là tập các ánh xạ từ $E$ vào $\\{0, 1\\}$.
- Mỗi tập con $A \\subseteq E$ tương ứng 1-1 với một **hàm đặc trưng** $\\chi_A: E \\rightarrow \\{0, 1\\}$:
  $$\\chi_A(x) = \\begin{cases} 1 & \\text{nếu } x \\in A \\\\ 0 & \\text{nếu } x \\notin A \\end{cases}$$
- Ánh xạ $\\phi: A \\mapsto \\chi_A$ là một **đẳng cấu dàn**:
  $$\\chi_{A \\cup B} = \\chi_A \\lor \\chi_B, \\quad \\chi_{A \\cap B} = \\chi_A \\cdot \\chi_B, \\quad \\chi_{\\overline{A}} = 1 - \\chi_A$$
`
      },
      {
        id: "l3_6",
        title: "§6 Dàn ước số U_n & Thuật chia Euclide",
        readingTime: "25 phút",
        content: `
### 1. Cấu trúc dàn của tập ước số $\\mathcal{U}_n$
- Cho $n \\in \\mathbb{Z}^+$. Gọi $\\mathcal{U}_n$ là tập hợp tất cả các ước nguyên dương của $n$, sắp thứ tự theo quan hệ chia hết $a \\mid b$:
  $$a \\preceq b \\iff a \\mid b$$
- Khi đó $(\\mathcal{U}_n, \\mid)$ là một dàn hữu hạn với:
  $$a \\land b = \\text{USCLN}(a, b) = \\gcd(a, b)$$
  $$a \\lor b = \\text{BSCNN}(a, b) = \\text{lcm}(a, b)$$
- Phần tử bé nhất là $1$, phần tử lớn nhất là $n$.
- $\\mathcal{U}_n$ luôn là một **dàn phân bố**.

---

### 2. Điều kiện để $\\mathcal{U}_n$ là Dàn bù
> **Định lý 3.6.10:** Dàn $\\mathcal{U}_n$ là một dàn bù khi và chỉ khi $n$ **không có thừa số chính phương** (Square-free), nghĩa là trong phân tích ra thừa số nguyên tố $n = p_1 p_2 \\dots p_k$, tất cả các số mũ đều bằng $1$.

- Khi đó, phần bù của $a \\in \\mathcal{U}_n$ là $\\bar{a} = \\frac{n}{a}$.
- Nếu $n$ chia hết cho bình phương của một số nguyên $> 1$ (ví dụ $n = 12 = 2^2 \\cdot 3$), thì $\\mathcal{U}_{12}$ **không phải** là dàn bù!

---

### 3. Thuật chia Euclide & Định lý Bézout
- **Thuật toán Euclide:** Tìm $\\gcd(a, b)$ bằng cách thực hiện liên tiếp các phép chia có dư:
  $$r_{k-1} = r_k \\cdot q_k + r_{k+1}, \\quad 0 \\le r_{k+1} < r_k$$
  Số dư khác không cuối cùng chính là $\\gcd(a, b)$.
- **Định lý Bézout:** Tồn tại hai số nguyên $m, n \\in \\mathbb{Z}$ sao cho:
  $$\\gcd(a, b) = m \\cdot a + n \\cdot b$$
- Thuật toán Euclide mở rộng cho phép tìm cặp số $m, n$ này, từ đó giải phương trình đồng dư $ax \\equiv b \\pmod m$.
`
      }
    ]
  },
  {
    id: "c4",
    title: "Chương 4: Đại số Bool và Hàm Bool",
    subtitle: "Đại số Bool, định lý Stone, hàm Bool, mạch logic, bản đồ Karnaugh và phương pháp thỏa thuận",
    description: "Nền tảng trực tiếp của kiến trúc máy tính và thiết kế mạch kỹ thuật số. Nghiên cứu phương pháp tối thiểu hóa hàm logic bằng Karnaugh Map và phương pháp thỏa thuận (Consensus).",
    lessons: [
      {
        id: "l4_1",
        title: "§1 Đại số Bool & Định lý Stone",
        readingTime: "18 phút",
        content: `
### 1. Định nghĩa Đại số Bool (Boolean Algebra)
Một **đại số Bool** là một tập hợp $\\mathcal{B}$ cùng với hai phép toán hai ngôi $\\lor, \\land$, một phép toán một ngôi $\\bar{\\phantom{x}}$ và hai phần tử đặc biệt $0, 1$ thỏa mãn:
1. **Tính kết hợp:** $(x \\lor y) \\lor z = x \\lor (y \\lor z), \\quad (x \\land y) \\land z = x \\land (y \\land z)$.
2. **Tính giao hoán:** $x \\lor y = y \\lor x, \\quad x \\land y = y \\land x$.
3. **Tính phân bố:**
   $$x \\land (y \\lor z) = (x \\land y) \\lor (x \\land z)$$
   $$x \\lor (y \\land z) = (x \\lor y) \\land (x \\lor z)$$
4. **Phần tử trung hòa:** $x \\lor 0 = x, \\quad x \\land 1 = x$.
5. **Phần tử bù:** $x \\lor \\bar{x} = 1, \\quad x \\land \\bar{x} = 0$.

---

### 2. Định lý biểu diễn Stone (Stone's Theorem)
> **Định lý 4.1.3 (Stone):** Mọi đại số Bool hữu hạn $\\mathcal{B}$ đều đẳng cấu với đại số các tập con $(\\mathcal{P}(E), \\cup, \\cap)$ của một tập hợp hữu hạn $E$.

- **Hệ quả 1:** Số phần tử của một đại số Bool hữu hạn **bắt buộc phải là một lũy thừa của $2$**:
  $$|\\mathcal{B}| = 2^k \\quad (k \\in \\mathbb{N})$$
- **Hệ quả 2:** Hai đại số Bool hữu hạn có cùng số phần tử thì đẳng cấu với nhau.
- **Nguyên tử (Atom):** Là một trội trực tiếp của phần tử bé nhất $0$. Mỗi phần tử khác $0$ đều biểu diễn duy nhất dưới dạng tổng (sup) của các nguyên tử mà nó trội.
`
      },
      {
        id: "l4_2",
        title: "§2 Hàm Bool & Dạng chính tắc",
        readingTime: "22 phút",
        content: `
### 1. Định nghĩa Hàm Bool
- Hàm Bool $n$ biến là ánh xạ $f: \\mathcal{B}^n \\rightarrow \\mathcal{B}$ với $\\mathcal{B} = \\{0, 1\\}$.
- Số lượng hàm Bool $n$ biến khác nhau là:
  $$|\\mathcal{F}_n| = 2^{2^n}$$
  - Với $n = 1$: có $2^{2^1} = 4$ hàm.
  - Với $n = 2$: có $2^{2^2} = 16$ hàm.
  - Với $n = 3$: có $2^{2^3} = 256$ hàm.
  - Với $n = 4$: có $2^{2^4} = 65.536$ hàm.

---

### 2. Từ đơn, Từ tối tiểu & Từ tối đại
- **Từ đơn (Literal):** Là một biến $x_i$ hoặc phủ định của nó $\\bar{x}_i$. Có $2n$ từ đơn.
- **Từ tối tiểu (Minterm):** Tích của $n$ từ đơn trong đó mỗi biến xuất hiện đúng một lần. Một minterm chỉ nhận giá trị $1$ tại duy nhất một dòng trong bảng chân trị. Có $2^n$ minterm.
- **Từ tối đại (Maxterm):** Tổng của $n$ từ đơn. Nhận giá trị $0$ tại duy nhất một dòng.

---

### 3. Dạng nối rời chính tắc (DNF / SOP)
- **Định lý 4.2.2:** Mọi hàm Bool $f$ khác $0$ đều biểu diễn duy nhất dưới dạng tổng (OR) của các từ tối tiểu ứng với các dòng mà hàm nhận giá trị $1$:
  $$f = m_{i_1} \\lor m_{i_2} \\lor \\dots \\lor m_{i_k}$$
- *Quy tắc viết minterm:* Biến nhận giá trị $1$ viết là $x_i$, biến nhận giá trị $0$ viết là $\\bar{x}_i$.
`
      },
      {
        id: "l4_3",
        title: "§3 Mạng các cổng logic & Tối ưu hóa",
        readingTime: "20 phút",
        content: `
### 1. Các cổng logic cơ bản
- **Cổng NOT (Inverter):** Đầu vào $x$, đầu ra $\\bar{x}$.
- **Cổng AND:** Đầu vào $x, y$, đầu ra $x \\land y$ (hay $xy$).
- **Cổng OR:** Đầu vào $x, y$, đầu ra $x \\lor y$.

---

### 2. Các cổng vạn năng (Universal Gates)
- **Cổng NAND (NOT-AND):** Đầu ra $\\overline{xy}$.
- **Cổng NOR (NOT-OR):** Đầu ra $\\overline{x \\lor y}$.
- **Định lý:** Mọi hàm Bool đều có thể tổng hợp chỉ bằng các cổng NAND, hoặc chỉ bằng các cổng NOR.
  - Phủ định: $\\bar{x} = \\overline{xx}$.
  - AND bằng NAND: $xy = \\overline{\\overline{xy}}$.
  - OR bằng NAND: $x \\lor y = \\overline{\\bar{x}\\bar{y}}$.

---

### 3. Bài toán tối ưu hóa mạch logic
Trong thực tế chế tạo vi mạch:
1. **Cực tiểu hóa thời gian trễ (Delay):** Hạn chế số tầng cổng (thường dùng mạch 2 tầng AND-OR).
2. **Cực tiểu hóa số lượng cổng và số đầu vào của cổng:** Tìm **công thức đa thức tối tiểu** (Minimal SOP) của hàm Bool.
`
      },
      {
        id: "l4_4",
        title: "§4 Phương pháp Biểu đồ Karnaugh",
        readingTime: "25 phút",
        content: `
### 1. Cấu trúc bản đồ Karnaugh (K-Map)
- Bản đồ Karnaugh là một bảng gồm $2^n$ ô tương ứng với $2^n$ giá trị của bảng chân trị.
- Các hàng và cột được đánh số theo **mã Gray** ($00, 01, 11, 10$) để hai ô kề nhau chỉ khác nhau đúng một bit.
- Hai biên đối diện (trái - phải, trên - dưới) cũng được coi là kề nhau (tính chất hình xuyến).

---

### 2. Tế bào lớn (Prime Implicants)
- Một nhóm các ô có giá trị $1$ kề nhau có kích thước là lũy thừa của $2$ ($1, 2, 4, 8, 16$) tạo thành một **tế bào** (Subcube).
- Gom nhóm càng lớn thì số biến trong đơn thức càng giảm:
  - Nhóm $1$ ô: $4$ biến.
  - Nhóm $2$ ô: rút gọn còn $3$ biến.
  - Nhóm $4$ ô: rút gọn còn $2$ biến.
  - Nhóm $8$ ô: rút gọn còn $1$ biến.
  - Nhóm $16$ ô: hằng số $1$.
- **Tế bào lớn:** Tế bào không bị chứa hoàn toàn trong một tế bào nào lớn hơn.

---

### 3. Thuật toán phủ Karnaugh 4 bước
1. **Bước 1:** Xác định tất cả các tế bào lớn của hàm $f$.
2. **Bước 2 (Tế bào lớn cốt yếu):** Tìm các ô số $1$ chỉ thuộc đúng một tế bào lớn duy nhất. Bắt buộc phải chọn các tế bào lớn này vào công thức.
3. **Bước 3:** Nếu còn ô số $1$ chưa được phủ, chọn thêm số lượng tế bào lớn ít nhất có thể để phủ hết toàn bộ.
4. **Bước 4:** Viết tổng các đơn thức tương ứng với các tế bào lớn đã chọn để có công thức đa thức tối tiểu.
`
      },
      {
        id: "l4_5",
        title: "§5 Phương pháp Thỏa thuận (Consensus Method)",
        readingTime: "20 phút",
        content: `
### 1. Khái niệm Thỏa thuận giữa hai đơn thức
- Cho hai đơn thức $xm_1$ và $\\bar{x}m_2$. Nếu không có biến nào khác xuất hiện ở dạng khẳng định trong đơn thức này và dạng phủ định trong đơn thức kia, thì đơn thức:
  $$m_1 m_2$$
  được gọi là **thỏa thuận (Consensus)** của hai đơn thức trên theo biến $x$.
- *Định lý 4.5.1:* Thỏa thuận của hai đơn thức luôn là hệ quả logic của tổng hai đơn thức đó:
  $$m_1 m_2 \\preceq xm_1 \\lor \\bar{x}m_2$$

---

### 2. Thuật toán tìm tiền đề nguyên tố
1. Bắt đầu từ công thức rút gọn của $f$.
2. Duyệt qua từng biến $x_i$: Tìm tất cả các thỏa thuận có thể giữa các đơn thức chứa $x_i$ và các đơn thức chứa $\\bar{x}_i$. Thêm các thỏa thuận vào tập hợp.
3. Loại bỏ các đơn thức bị trội thực sự bởi đơn thức khác (ví dụ: nếu có $xy$ thì loại $xyz$).
4. Khi duyệt hết các biến, tập hợp thu được chính là toàn bộ **tiền đề nguyên tố** (Prime Implicants).

---

### 3. Bài toán phủ Petrick
Sau khi có tất cả các tiền đề nguyên tố $P_1, P_2, \\dots, P_k$:
- Lập hệ phương trình Bool đòi hỏi mỗi từ tối tiểu của $f$ phải được phủ bởi ít nhất một tiền đề nguyên tố.
- Khai triển và rút gọn bằng luật hấp thụ để tìm tổ hợp tiền đề nguyên tố ít nhất và ngắn nhất.
`
      }
    ]
  }
];
