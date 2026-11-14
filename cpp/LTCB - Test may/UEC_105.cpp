#include <bits/stdc++.h>
using namespace std;
#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);
#define fi first
#define se second
using ll = long long;
const int MAXN = 1e7+5;
int prime[MAXN];

int main(){
    fast_io
int n,t=1;cin>>n;
if(n<=0)
{
    cout<<"N phai la so nguyen duong";
    return 0;
} else 
{
    for(int i=1;i<=n;i++)
        if(i%3!=0) t*=i;
}
cout<<t;
}
