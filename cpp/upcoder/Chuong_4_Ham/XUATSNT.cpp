#include <bits/stdc++.h>
using namespace std;
bool ok(int k) {
    if (k < 2) return 0;
    for (int i=2;i*i<=k;i++) {
        if (k%i==0) return 0;
    }
    return 1;
}
int main() {
    int n;cin>>n;
    if (n<2) {
        cout<<-1;return 0;
    }
    for (int i=2;i<=n;i++) {
        if (ok(i)) cout<<i<<" ";
    }
}
