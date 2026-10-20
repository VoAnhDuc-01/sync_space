#include <bits/stdc++.h>
using namespace std;

#define fast_io ios_base::sync_with_stdio(false);cin.tie(NULL);
#define fi first
#define se second
using ll = long long;
using db = double;
const int MOD = 1e9+7;

struct PhanSo{
    int tu;
    int mau;
};

int main () 
{
    cin.tie(0)->sync_with_stdio(0);
    
     freopen("input.txt", "r", stdin);
     freopen("output.txt", "w", stdout);
    
    PhanSo p1;
    cin>>p1.tu>>p1.mau;
    PhanSo p2;
    cin>>p2.tu>>p2.mau;
    if (p1.mau == 0 || p2.mau ==0){
        cout<<-1;
    }
    else{
        PhanSo tong;
        tong.tu = p1.tu * p2.mau + p2.tu * p1.mau;
        tong.mau = p1.mau * p2.mau;
/*
        ll ucln = __gcd(tong.tu, tong.mau); 
        
        tong.tu /= ucln; 
        tong.mau /= ucln; 
        */
        cout << tong.tu << " " << tong.mau;
    } 
    return 0; 
}