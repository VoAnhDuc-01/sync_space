#include <bits/stdc++.h>
using namespace std;
#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);

int main(){
    int n;cin>>n;int a=0,b=0;
    for(int i=n+1;i-->0;)
    {
        if(i%2==0) a+=i;
        else b+=i;
    } cout<<a<<endl<<b;
}
