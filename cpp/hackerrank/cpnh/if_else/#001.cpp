#include <bits/stdc++.h>
using namespace std;
int main()
{
    int a,b,c,d;cin>>a>>b>>c>>d;
    int max =0;
    if (max<a) {
        max = a;
    }
    if (max<b) {
        max = b;
    }
    if (max<c) {
        max = c;
    }
    if (max<d) {
        max = d;
    }
    cout << max;
}
