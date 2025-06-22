// function salary_(salary){
//     this.salary=salary;

//     console.log('called')
// }

// function person(name,age,salary){

//     salary_.call(this,salary);

//     this.name=name;
//     this.age=age;

// }

// const p1=new person('mehedi',25,20000);

// console.log(p1)

// function greeting(greet){
//    console.log(`${greet}, ${this.name}`)
// }

// function person(name){
//     this.name=name;
// }

// greeting.call(person('sumon'),'hi')

// class User {
//     constructor(username) {
//         this.username = username;
//     }

//     logMe() {
//         console.log(`User name is :${this.username}`);
//     }
// }

// class Teacher extends User {
//     constructor(username, age, course) {
//         super(username);
//         this.age = age;
//         this.course = course;
//     }

//     showInfo() {
//         console.log(
//             `user name is ${this.username}. age is ${this.age} and course is ${this.course}`
//         );
//     }
// }

// const mehedi = new User("mehedi");
// const sumon = new Teacher("sumon", 25, "ml");

// sumon.logMe();
// mehedi.logMe();
// sumon.showInfo();

class person{

    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    
    func=function(){
        console.log(`hi this is ${this.name}`);
    }
}

let p1 =new person('mehedi',25)

p1.func();

const obj={
    name:'mehedi',
    age:25,

    showInfo:function(){
        console.log(`name is ${this.name} and age is ${this.age}`)
    }
}

const obj2={
    ...obj,
    name:'sumon'
}

console.log(obj2)

//call back hell

function task1(callback) {
    setTimeout(() => {
        console.log("tasks 1 completed!");
        callback();
    }, 2000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("tasks 2 completed!");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("tasks 3 completed!");
        callback();
    }, 3000);
}

function task4(callback) {
    setTimeout(() => {
        console.log("tasks 4 completed!");
        callback();
    }, 1500);
}

function task5(callback) {
    setTimeout(() => {
        console.log("tasks 5 completed!");
        callback();
    }, 1700);
}
//here this is callback hell. also known as pyramid of dooms
task1(() => {
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    console.log('all tasks completed!')
                })
            })
        })
    })
});


//promises
const ride=new Promise(function(resolve,reject){
    const arrived=false;

    if(arrived){
        resolve('driver arrived!')
    }
    else
    reject('driver bailed!')
})

ride.then(function(value){
    console.log(value);
}).catch(function(error){
    console.log(error)
})

//promises chaining
const promise=new Promise((resolve,reject)=>{
    setTimeout(function () {
        let error=false;
        if(!error){
            resolve({username:'mehedi',email:'mehedi@gmail.com'})
        }
        else{
            reject('ERROR:Something Went Wrong!')
        }
    },2000)
})

promise.then(function(user){
    console.log(user)
    return user.username;
}).then(function(username){
    console.log(username);
    return 'mehedi@gmail.com'
}).then(function(email){
    console.log(email)
}).catch(function(error){
    console.log(error)
})



const promises1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('promises 1 completed');
    },1000)
})
const promises2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('promises 2 completed');
    },500)
})
const promises3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject('promises 3 completed');
    },2000)
})

const myPromises=[promises1,promises2,promises3];

//Promise.allSettled()
Promise.allSettled(myPromises).then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log('error!')
})


//JSON

const object={
    name:'mehedi',
    email:'mehedi@gmail.com'
}

//json.stringify
const json=JSON.stringify(object)
console.log(object);
console.log(json)

//json.parse
console.log(JSON.parse(json));


const name = "Mehedi";
// Backticks allow variables inside ${}
const msg = `Hello, ${name}!`; 
console.log(msg);

const multiLine = `Line 1
Line 2`;


console.log(typeof NaN)

//from left to right
console.log(2-2+"2") // '22'
console.log((1+'1'-1+'1')); // '101'
console.log(5+"5"-2) // 53  


//closure
let count=0;
function fun1(){
    return function fun2(){
        count++;
        console.log(count)
    }
}

let cnt1=fun1();
cnt1();
cnt1();
