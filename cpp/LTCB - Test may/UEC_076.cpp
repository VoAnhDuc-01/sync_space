#include <bits/stdc++.h>
using namespace std;
#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);
#define fi first
#define se second
using ll = long long;
using db=double;
int main() {
    double n,t=0;cin>>n;
    vector<double> a(n);
    for(auto &x:a)
    {cin>>x;t+=x;} 
    cout<<fixed<<setprecision(2)<<t/n;
}
