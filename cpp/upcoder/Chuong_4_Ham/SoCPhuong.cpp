#include <bits/stdc++.h>
using namespace std;
bool ok(int n) {
    int k = sqrt(n);
    return (k*k==n);
}
int main() {
    int n;cin >> n;
    if (ok(n)) cout << "yes";
    else cout << "no";
    return 0;
}