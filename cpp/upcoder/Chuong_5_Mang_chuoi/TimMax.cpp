#include <bits/stdc++.h>
using namespace std;
int main() {
    int n; cin >> n;int a[n];
    for (auto &x : a) cin >> x;
    cout << *max_element(a, a + n);
}