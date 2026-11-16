#include <bits/stdc++.h>
using namespace std;

using ll=long long;
int main() {
    ll a,b;cin>>a>>b;ll t=0;
   if(a<b){ for(ll i=a;i<=b;i++) t+=i;
    cout<<t; 
    }else 
    {
        for(ll i=b;i<=a;i++) t+=i;
    cout<<t; 
    }
}