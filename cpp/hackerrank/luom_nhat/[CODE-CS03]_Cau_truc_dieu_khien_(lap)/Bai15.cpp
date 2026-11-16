#include <bits/stdc++.h>
using namespace std;

using ll=long long;
ll k(ll n)
{
    if(n<2) return 0;
    else 
    {
        for(ll i=2;i*i<=n;i++)
        {
            if(n%i==0) return 0;
        }
    } return 1;
}
int main() {
    ll n;cin>>n;if(k(n)) cout<<"YES";
    else cout<<"NO";
}