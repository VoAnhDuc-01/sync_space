#include <bits/stdc++.h>
using namespace std;
#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);
#define fi first
#define se second
using ll = long long;
const int MAXN = 1e7+5;
const int MOD = 1e9+7;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    

    string s;getline(cin,s);
    stringstream ss(s);
    string w;
    while(ss>>w)
    {
        w[0] = toupper(w[0]);
        cout<<w<<" ";
    }
}
