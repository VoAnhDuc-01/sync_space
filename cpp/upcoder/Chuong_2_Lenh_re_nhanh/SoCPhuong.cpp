#include <iostream>
#include <cmath>
using namespace std;

int main() {
    long long n;
    cin >> n;
    long long k = sqrt(n);
    if (k * k == n) {
        cout << "yes";
    } else cout << "no";
}
