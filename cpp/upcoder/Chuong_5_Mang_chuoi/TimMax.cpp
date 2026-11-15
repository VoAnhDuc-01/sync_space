#include <bits/stdc++.h>
using namespace std;
using ll=long long;
int main() {
    ll x;
    ll y = -99999; 
    while (cin>>x) {
        if (x >y)y = x;
    }cout<<y;
    return 0;
}
