#include <bits/stdc++.h>
using namespace std;
using ll=long long;
int main()
{
    int n;cin>>n;
    if (n%4==0 and n%100!=0) {
        cout << "YES";
    }
    else if (n%400==0 and n%100==0) {
        cout << "YES";
    }
    else {
        cout << "NO";
    }
    return 0;
} 