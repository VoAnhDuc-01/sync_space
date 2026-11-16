#include <bits/stdc++.h>
using namespace std;
int main()
{
    int a,b,c;cin>>a>>b>>c;
    if (c-b==b-a) {
        cout << 2*a << " " << 2*b << " " << 2*c;
    }
    else {
        cout << a-1 << " " << b-1 << " " << c -1;
    }
    return 0;
}
