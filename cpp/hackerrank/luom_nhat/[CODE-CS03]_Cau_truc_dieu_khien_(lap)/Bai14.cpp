#include <iostream>
using namespace std;
int main() {
    long long n;cin >> n;
    if (n==1) {
        cout << 0;
        return 0;
    }
    long long d = 1; 
    for (long long i=2; i*i<=n; i++) {
        if (n%i==0) {
            d += i;
            if (i!=n/i) d+=n/i;
        }
    }
    cout << d;
    return 0;
}
