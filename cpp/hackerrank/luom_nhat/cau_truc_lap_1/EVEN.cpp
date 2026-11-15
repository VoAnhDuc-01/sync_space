#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

 int main()
 {
    int n;cin>>n;
    if(n==1) 
    {
        cout<<-1; return 0;
    }
    for(int i=0;i++<n;)
    {
        if(i%2==0) cout<<i<<endl;
    }
 }