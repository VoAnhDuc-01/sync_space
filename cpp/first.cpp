#include <bits/stdc++.h>
using namespace std;
#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);

using ll = long long;

int main() {

    fast_io
     freopen("input.txt", "r", stdin);
     freopen("output.txt", "w", stdout);
    map<char,int> mp;char c;
    #define fi first
#define se second
    while (cin>>c) {
         mp[c]++;
    }
    for (auto x:mp) cout<<x.fi<<":"<<x.se<<endl;
}
