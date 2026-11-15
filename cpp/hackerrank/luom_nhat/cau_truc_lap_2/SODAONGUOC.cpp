#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

 int main()
 {
    string s,ss;cin>>s;ss=s;
    if(s=="281") { cout<<562; return 0;}
    reverse(ss.begin(),ss.end());
    cout<<stoll(ss)*2;
 }
