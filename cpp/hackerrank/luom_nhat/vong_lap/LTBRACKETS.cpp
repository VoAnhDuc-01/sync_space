#include <bits/stdc++.h>
using namespace std;
int main() {
    string s;getline(cin,s);
    int k=0;
    for (char c:s) 
    {
        if (c != '(' && c != ')') 
        {
            cout<<"NO" << endl;
            return 0;
            
        }
        if (c=='(') k++;
        else if (k>0)  k--;
        else 
        {
            cout<<"NO" << endl;
            return 0;
        }
    }
    if(k==0) cout<<"YES"<<endl;
    else cout<<"NO" << endl;
    return 0;
}
    
