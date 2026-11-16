#include <bits/stdc++.h>
using namespace std;

using ll=long long;
int main() {
    string s;cin>>s;int k=0;
    ll n=stoll(s);
    string ss=s;
    reverse(ss.begin(),ss.end());
    if(s==ss) k=1;
    else k=0;
    int t=0;
    if (!k) cout<<-1;
    else 
    {
        while(n>0)
        {
            t+=n%10;
            n/=10;
        } cout<<t;
    }
}