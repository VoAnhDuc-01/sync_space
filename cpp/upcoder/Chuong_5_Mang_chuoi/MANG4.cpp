#include <iostream>
using namespace std;

bool snt(int x) {
    if (x < 2) return false;
    for (int i = 2; i * i <= x; i++)
        if (x % i == 0) return false;
    return true;
}

int main() {
    int n, tong = 0; 
    cin >> n;
    int a[n];
    
    for (auto &x : a) {
        cin >> x;
        if (snt(x)) tong += x;
    }
    
    cout << tong;
    return 0;
}
