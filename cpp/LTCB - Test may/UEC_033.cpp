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
    int n,m;
    cin>>n>>m;
    if(n==1 or n==3 or n==5 or n==7 or n==8 or n==10 or n==12) cout<<31;
    if(n==4 or n==6 or n==9 or n==11) cout<<30;
    if(n==2)
    {
        if(kt(m)) cout<<29;
        else cout<<28;
    }
    return 0;
}
