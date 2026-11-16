#include <bits/stdc++.h>
using namespace std;

int main() {
    int n; 
    cin >> n;
    set<int> se; 
    int x;
    for(int i = 0; i < n; i++) {
        cin >> x;
        se.insert(x);
    }
    
    if (se.size() < 2)  cout << 0;
    else cout << *prev(se.end(),2)
    return 0;
}
