#include <bits/stdc++.h>
using namespace std;
#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);
#define fi first
#define se second
using ll = long long;
const int MAXN = 1e7+5;
const int MOD = 1e9+7;

int check(int n)
{
    if(n<2) return 0;
    if(n==2) return 1;
    if(n%2==0) return 0;
    for(int i=3;i<=sqrt(n);i+=2)
    {
        if(n%i==0) return 0;
    } return 1;
}


int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int n;cin>>n;
    int a[n];int tong=0;int dem=0;
    for(auto &x:a)
    {
        cin>>x;
        if(x%2==0) tong+=x;
        if(check(x)) dem++;
    } cout<<tong<<endl<<dem;
}
