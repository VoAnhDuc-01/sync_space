#include <bits/stdc++.h>
using namespace std;

int a,b,c,d,n;
int kt(int n)
{
    a=n/1000; 
    b=(n/100)%10;
    c=(n/10)%10; 
    d=n%10; 
    return (pow(a,3) + pow(b,3) +pow(c,3) +pow(d,3) == n);    
}

int main() {
    cin >> n;
    if (kt(n)) cout <<"AMSTRONG";
    else cout <<"NOT AMSTRONG";
    return 0;
}
