#include <bits/stdc++.h>
using namespace std;

using ll=long long;
int main() {
    ll a,b;cin>>a>>b;ll d=0;
     if(a<b){for(ll i=a;i<=b;i++)
    {
        if(i%3==0) d+=i;
    } cout<<d;}
    else {
        for(ll i=b;i<=a;i++)
    {
        if(i%3==0) d+=i;
    } cout<<d;
    }
}