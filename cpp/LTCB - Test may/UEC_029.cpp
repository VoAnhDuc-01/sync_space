#include <bits/stdc++.h>
using namespace std;
#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);
#define fi first
#define se second
#define ll long long
const int MAXN = 1e7+5;
int prime[MAXN];
using db=double;

int kt(int n)
{
    if(n%400==0 and n%100==0) return 1;
    if(n%100!=0 and n%4==0) return 1;
    return 0;
}


int main()
{
    int n;cin>>n;
    if(kt(n)) cout<<"Nam nhuan";
    else cout<<"Khong phai nam nhuan";
}
