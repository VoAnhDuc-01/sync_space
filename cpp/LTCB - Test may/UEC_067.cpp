#include <bits/stdc++.h>
using namespace std;
using ull = unsigned long long;
#define fast_io ios_base::sync_with_stdio(false); cin.tie(NULL);

int kt(ull n) {
    if (n < 2) return 0;
    for (ull i = 2; i <= n / i; i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

int main() {
    fast_io;
    ull n;cin>>n;
    ull i = n + 1; 
    while (1) {
        if (kt(i)) {
            cout << i;
            return 0;
        }
        i++;
    }
}
