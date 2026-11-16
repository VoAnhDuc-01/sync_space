#include <iostream>
using namespace std;
using ll=long long;
int main() {
    ll m,n;cin>>n>>m;
    ll x=n,y=m;
    if(n<m)
    {
        x=m-n;
        y=m+n;
        
    } else {
        x=m+n;
        y=n-m;
    }
    
    cout<<x<<" "<<y;
    return 0;
}
