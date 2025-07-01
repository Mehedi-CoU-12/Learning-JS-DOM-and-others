const userId=Symbol('userID');

let user={
    name:'mehedi',
    [userId]:1234

}

for(let key in user){
    console.log(key," ")
}