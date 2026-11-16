#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
   int a,b;cin>>a>>b;
   for(int i=a;i<=b;i++)
   {
    int k=sqrt(i);
    if(k*k==i) cout<<i<<endl;
   }
}
