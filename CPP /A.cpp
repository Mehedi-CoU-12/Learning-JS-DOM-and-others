#include<bits/stdc++.h>
#define ll long long int
#define mod 1000000007
#define yes cout<<"Yes"<<endl
#define no cout<<"No"<<endl
#define ff first
#define ss second
#define output(v) for(auto it:v)cout<<it<<' ';cout<<endl;
#define input(v) for(auto &it:v)cin>>it;
#define all(v) v.begin(),v.end()
#define rall(v) v.rbegin(),v.rend()
const int N = (int)1e6 + 5;
const int M = (int)1e8 + 5;
const ll INF = 1e18;
using namespace std;

//======================== debug ===================================
#ifndef ONLINE_JUDGE
#include "template.cpp"
#else
#define debug(...)
#define debugArr(...)
#endif

//====================== ordered_set ===============================
#include <ext/pb_ds/assoc_container.hpp>
#include <ext/pb_ds/tree_policy.hpp>
using namespace __gnu_pbds;
#define ordered_set tree<int, null_type,less<int>, rb_tree_tag,tree_order_statistics_node_update>
// X.find_by_order(k) return kth element. 0 indexed.
// X.order_of_key(k) returns count of elements strictly less than k.
// to store same element multiple times instead of using 'less' use 'less_equal'

//============== Graph Moves ===============
// const string path="DURL";
// const int dx[] = {+1,-1,+0,+0}; ///Rock's Move
// const int dy[] = {+0,+0,+1,-1}; ///Rock's Move
// const int dx[] = {+0,+0,+1,-1,-1,+1,-1,+1}; ///King's Move
// const int dy[] = {-1,+1,+0,+0,+1,+1,-1,-1}; ///King's Move
// const int dx[] = {-2,-2,-1,-1,+1,+1,+2,+2}; ///Knight's Move
// const int dy[] = {-1,+1,-2,+2,-2,+2,-1,+1}; ///Knight's Move

//===================== Start from here ===========================
void solve(){
    ll n;
    cin>>n;
    vector<ll>a(n),b(n);
    input(a);
    input(b);

    vector<pair<ll,ll>>op;

}

int main(){
    int t = 1;
    cin >> t;
    for(int i = 1; i <= t; i++){
        solve();
    }
}