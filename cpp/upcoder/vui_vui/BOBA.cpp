#include <bits/stdc++.h>
using namespace std;

#define fast_io ios_base::sync_with_stdio(false); cin.tie(NULL);

int main() {
    fast_io;
    int N, K;
    string M;
    cin >> N >> M >> K;
    int tong = 0;
    while (N > 0) 
    {
        tong += N % 10;
        N /= 10;
    }
    int fi = M[0] - '0';
    if (tong + fi == K)  cout << "Yes";
    else cout << "No";
    return 0;
}
