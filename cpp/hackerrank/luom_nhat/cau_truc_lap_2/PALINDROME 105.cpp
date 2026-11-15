#include <bits/stdc++.h>
using namespace std;
typedef long long ll;

 int main()
 {
    string s;cin>>s;string ss=s;
    reverse(ss.begin(),ss.end());
    if(ss==s) cout<<"PALINDROME";
    else cout<<"NOT PALINDROME";
 }
