#include <bits/stdc++.h>
using namespace std;
#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);
#define fi first
#define se second
using ll = long long;

bool prime(int n) {
    for (int i=2;i*i<=n;i++) if (n%i==0) return false;
    return n > 1;
}

int ucln(int a,int b)
{ int c=1;
    for(int i=1;i<= a and i<=b;i++)
    {
        if(a%i==0 and b%i==0)
        {
            c=i;
        }
    } return c;
}



int main(){
     freopen("input.txt", "r", stdin);
     freopen("output.txt", "w", stdout);
    int a,b;cin>>a>>b;
    cout<<ucln(a,b);
}


