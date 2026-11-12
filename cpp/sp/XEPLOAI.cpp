#include <bits/stdc++.h>
using namespace std;
#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);
#define fi first
#define se second
using ll = long long;
using db = double;
int main(){
    db a,tong=0,dem=0;
    while(cin>>a)
    {
        if (a == -1) break;
        tong+=a;
        dem++;
        
    }
    db b=tong/dem;
    if (b < 4) cout << "F";
    if (b >= 4 and b < 5.5) cout << "D";
    if (b >= 5.5 and b < 7.0) cout << "C";
    if (b >= 7.0 and b < 8.5) cout << "B";
    if (b >= 8.5) cout << "A";
    return 0;

}


