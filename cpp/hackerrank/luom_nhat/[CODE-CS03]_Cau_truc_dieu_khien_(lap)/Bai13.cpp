

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

using ll=long long;
int main() {
    ll n,t=0;cin>>n;
    while(n>0)
    {
        t+=n%10;
        n/=10;
    }cout<<t;
}
