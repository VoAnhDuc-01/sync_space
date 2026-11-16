#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int n,m;cin>>n>>m;
    if(m-n<8)
    {
        cout<<-1;return 0;
    }
    for(int i=n;i<=m;i++)
    {
        if(i%8==0) cout<<i<<" ";
    }
}
