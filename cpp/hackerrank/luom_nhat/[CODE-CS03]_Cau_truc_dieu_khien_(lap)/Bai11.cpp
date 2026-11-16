#include <iostream>
#include <cmath>

using namespace std;
using ll=long long;
int main() {
    ll a, b;cin>>a>>b;
    ll start = ceil(sqrt((long double)a));
    ll end = floor(sqrt((long double)b));
    if (end >= start)  cout<<end-start+1;
     else cout<<0;
    return 0;
}
