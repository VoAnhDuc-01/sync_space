#include <bits/stdc++.h>
using namespace std;
int n;
int kt(int n)
{
    int d=0;
    for(int i=1;i<=n;i++)
    {
        if(n%i==0) d+=i;
    }
    return d==2*n;
}

int main() {
    cin>>n;
    if(kt(n)) cout<<"YES";
    else cout<<"NO";
}
