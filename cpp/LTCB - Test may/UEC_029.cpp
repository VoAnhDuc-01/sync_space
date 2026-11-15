#include <bits/stdc++.h>
using namespace std;

#define fast_io ios_base::sync_with_stdio(false); cin.tie(NULL);

bool kt(int n) {
    return (n % 400 == 0) || (n % 100 != 0 && n % 4 == 0);
}

int main() {
    fast_io;
   int n;
    if (cin >> n) {
        if (kt(n)) cout << "Nam nhuan";
        else cout << "Khong phai nam nhuan";
    }
    return 0;
}
