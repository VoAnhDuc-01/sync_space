#include <bits/stdc++.h>
using namespace std;

int main() {
    long long n;
    cin >> n;
    string s = bitset<64>(n).to_string();
    cout << s.substr(s.find('1'));
    return 0;
}
