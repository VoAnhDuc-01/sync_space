#include <bits/stdc++.h>
using namespace std;
int main() {
    int n;cin>>n;int x;
    int chan=0,le=0,am=0,duong=0;
    while(n--) {
        cin>>x;
        if (x%2==0)chan++;
        else le++;
        if (x<0) am++;
        else if (x>0) duong++;
    }
    cout << "Even: " << chan << "\n";
    cout << "Odd: " << le << "\n";
    cout << "Positive: " << duong << "\n";
    cout << "Negative: " << am << "\n";

    return 0;
}
