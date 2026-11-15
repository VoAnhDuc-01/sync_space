#include <bits/stdc++.h>
using namespace std;
int main() {
    string s;cin>>s;
    char x = *min_element(s.begin(), s.end());
    char y = *max_element(s.begin(), s.end());
    cout << (x-'0') + (y-'0');
    return 0;
}
