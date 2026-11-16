#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int x=0;
    int n;while(cin>>n)
    {
        if(x<=n) x=n;
    }cout<<x;
}
