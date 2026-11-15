#include <bits/stdc++.h>
using namespace std;
#define fast_io ios_base::sync_with_stdio(0);cin.tie(NULL);
#define fi first
#define se second
using ll = long long;

bool check(int n) 
{
    if (n<2) return 0;
    int sum = 1; 
    for (int i=2;i*i<=n;i++) 
    {
        if (n%i==0) 
        {
            if (i*i==n) sum += i;
            else sum+=i+n/i;
        }
    }
    return sum == n;
}

int main() {

    int a,b;cin>>a>>b;
    vector<int> v;

    for (int i=a; i<=b; i++) 
    {
        if (check(i)) v.push_back(i);
    }

    if (v.empty()) cout << 0;
    else for (auto x:v) cout<<x<<" ";
    return 0;
}
