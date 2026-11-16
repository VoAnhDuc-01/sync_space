#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int n;cin>>n;int d=0,d1=0;
    for(int i=1;i<=n;i++)
    {
        if(n%i==0 and i%2==0) d++;
    }cout<<d<<endl;
    for(int i=1;i<=n;i++)
    {
        if(n%i==0 and i%2!=0) d1++;
    }cout<<d1;
}
