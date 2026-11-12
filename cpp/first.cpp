#include <bits/stdc++.h>
using namespace std;
#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);
#define fi first
#define se second
using ll = long long;
const int MAXN = 1e7+5;
int prime[MAXN];
using db=double;
int main(){
    fast_io
    freopen("input.txt", "r", stdin);
    freopen("output.txt", "w", stdout);
     ll a,b,c=0,d=0;
     cin>>a>>b;
     while(a>0)
     {
      c*=a%10;
      a/=10;
     } 
     for(int i=1;i*i<=b;i++)
     {
   if(b%i==0) d+=i;
   if (i != b / i) {
                d += b / i;
            }
}

if(c==d) cout<<"yes";
else cout<<"no";
  }
