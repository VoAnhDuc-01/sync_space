#include <iostream>
using namespace std;
bool kt(int n){
    if(n<=1) return 0;
   int tong=0;
   for(int i=1;i<n;i++){
        if(n%i==0) tong+=i;
}
 if(tong==n) return 1;
 return 0;
}

int main(){
    int n;cin>>n;
    if(kt(n)) cout<<"Yes";
    else cout<<"No";
}