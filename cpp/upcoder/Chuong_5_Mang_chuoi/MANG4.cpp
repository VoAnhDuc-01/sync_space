#include <iostream>
using namespace std;

bool snt(int n) 
{
    if (n<2) return 0;
    for (int i=2; i*i<=n;i++)
        if (n%i==0) return 0;
    return 1;
}

int main() {
    int n,tong = 0; 
    cin>>n;int a[n];
    for (auto &x:a) {
        cin>>x;
        if (snt(x)) tong+=x;
    }cout<<tong;
}
