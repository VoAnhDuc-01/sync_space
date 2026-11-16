#include <iostream>
using namespace std;
using ll=long long;
int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;cin>>n;
        while (n--) {
            ll a,p;cin>>a>>p;
            ll ans=0;
            while (a >= p) {
                a /= p;
                ans += a;
            }
            cout << ans << "\n";
        }
    
    return 0;
}
