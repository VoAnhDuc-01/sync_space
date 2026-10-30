#include <bits/stdc++.h>
using namespace std;
#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);
#define fi first
#define se second
using ll = long long;

int prime(int n){
    if(n<2) return 0;
    for(int i=2;i<=sqrt(n);i++)
        if(n%i==0) return 0;
    return 1;
}

int main(){
     freopen("input.txt", "r", stdin);
     freopen("output.txt", "w", stdout);
    int n;cin>>n;int k=0;
    for (int i=2;i<=n;i++)
        if (prime(i)) {cout<<i<<" ";k=1;}
    if(k==0) cout<<-1;



}
