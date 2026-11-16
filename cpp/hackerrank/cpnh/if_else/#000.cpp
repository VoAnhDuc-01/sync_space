#include <bits/stdc++.h>
using namespace std;
using ll=long long;
int main() {
    ll x,y,v;cin>>x>>y;
    if (x>1 and y>1) v=x+y;
    else if (x>1 and y<=1) v=x-y;
    else if (x<=1 and y>0) v= -x+y;
    else v= -x-y;
    cout<<v;
}
