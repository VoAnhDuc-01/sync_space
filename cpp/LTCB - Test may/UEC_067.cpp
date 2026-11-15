#include <bits/stdc++.h>
using namespace std;
using ll=long long;
#define fast_io ios_base::sync_with_stdio(false); cin.tie(NULL);

int kt(ll n) {
    if (n < 2) return 0;
    for (ll i = 2; i * i <= n; i++) {
        if (n % i == 0) return 0;
    }
    return 1;
}

int main() {
    fast_io;
    ll n;
    cin >> n;ll i = n; 
    while (1) {
        if (kt(i)) {
            cout << i;
            return 0;
        }
        i++;
    }
}
