#include<bits/stdc++.h>
using namespace std;
#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);
#define fi first
#define se second
using ll = long long;
using db = double;

int prime(int n)
{
    if (n<2) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;   
    for (int i=3;i<=sqrt(n);i+=2)
    {
        if (n%i==0) return false;
    }
    return true;
}

int main()
{
   int n;cin>>n;
   if(prime(n)) cout<<"YES";
   else cout<<"NO";
}
