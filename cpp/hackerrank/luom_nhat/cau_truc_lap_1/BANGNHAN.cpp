#include <bits/stdc++.h>
using namespace std;
#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);
#define fi first
#define se second
using ll = long long;
const int MAXN = 1e7+5;
int prime[MAXN];

int main(){
    int n;cin>>n;
    if(n==2)
    {
        cout<<"1 x 2 = 1"<<endl;
        for(int i=2;i<=10;i++)
    {
        cout<<i<<" x "<<n<<" = "<<n*i<<endl;
    }
        return 0;
    }
    else {
    for(int i=1;i<=10;i++)
    {
        cout<<i<<" x "<<n<<" = "<<n*i<<endl;
    }
    
}
}
