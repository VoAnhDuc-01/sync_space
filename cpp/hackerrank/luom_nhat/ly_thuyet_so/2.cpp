#include<bits/stdc++.h>
using namespace std;
#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);
#define fi first
#define se second
using ll = long long;
using db = double;
const int N= 1e7+100;
vector<int> prime (N,1);

bool snt(int n)
{
    if(n<2) return 0;
    if(n==2) return 1;
    if(n%2==0) return 0;
    for(int i=3;i<=n/2;i+=2)
    {
        if(n%i==0) return 0;
    } return 1;
}
bool check (int n)
{
    int sum=0;
    while(n)
    {
     int r=n%10;
     if(r!=2 and r!=3 and r!=5 and r!=7) return 0;
     sum+=r;
     n/=10;
    } return snt(sum);
}    
int main(){
fast_io
   int a,b;cin>>a>>b;int d=0;
   for(int i=a;i<=b;i++)
   {
       if(check(i) and snt(i)) d++;
   }
   cout<<d;
}
