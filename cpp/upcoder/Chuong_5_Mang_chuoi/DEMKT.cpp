#include <bits/stdc++.h>
using namespace std;
#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);
#define fi first
#define se second
using ll = long long;

int main() {
    map<char,int> mp;char c;
    while (cin>>c) {
        if (c>='a' and c<='z') mp[c]++;
    }
    for (auto x:mp) cout<<x.fi<<":"<<x.se<<endl;
}
