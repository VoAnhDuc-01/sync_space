#include <bits/stdc++.h>
using namespace std;

#define fast_io ios_base::sync_with_stdio(false); cin.tie(NULL);

int main() {
   int n;cin>>n;
        if ((n%400==0 and n%100==0) or (n % 100 != 0 && n % 4 == 0)) cout << "Nam nhuan";
        else cout << "Khong phai nam nhuan";
    
    return 0;
}
