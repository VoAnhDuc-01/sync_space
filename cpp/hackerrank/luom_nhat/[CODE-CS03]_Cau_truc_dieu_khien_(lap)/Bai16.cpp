#include <bits/stdc++.h>
using namespace std;


int k(int n)
{
    if(n<2) return 0;
    else 
    {
        for(int i=2;i*i<=n;i++)
        {
            if(n%i==0) return 0;
        }
    } return 1;
}
int main() {
    int n;cin>>n;int d=0;
    for(int i=2;i<=n;i++) 
    {
        if(k(i)) d++;
    } cout<<d;
}