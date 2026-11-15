#include <bits/stdc++.h>
using namespace std;
typedef long long ll;
 ll n;
 ll ok(ll n)
 {
    if(n<2) return 0;
    else 
    {
        for(int i=2;i*i<=n;i++)
        {
            if(n%i==0) return 0;
        }
    } return 1;
 }
 int main()
 {
    int n;cin>>n;
    if(ok(n)) cout<<"yes";
    else cout<<"no";
 }