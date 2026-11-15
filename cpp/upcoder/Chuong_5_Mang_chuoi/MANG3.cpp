#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int n, tong = 0; 
    cin >> n;
    int a[n];
    
    for (auto &x : a) {
        cin >> x;
        int k = sqrt(x);
        if (x >= 0 && k * k == x) {
            tong += x;
        }
    }
    
    cout << tong;
    return 0;
}
