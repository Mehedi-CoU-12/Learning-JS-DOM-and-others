//===================== explicit type  ================
let Name:string;
Name='sumon bro'

let number:number;
number=5;

//===================== Union  ================
let arry:number[]=[]
arry.push(5);

let str:string[]=[];
str.push('mehedi');

let array:(number|string)[]=[];
array.push(2);
array.push('mehedi');

type union=number|string
let unionArray:union[]=[];

unionArray.push('mehedi')
unionArray.push(3);

//===================== dynamic type  ================

let a:any;
a=5;
a='mehedi';

let newArray:any[]=[];
newArray.push('mehedi')
newArray.push(3);
newArray.push(true)

let b:{
  name:any,
  age:any
}

b={
  name:'mehedi',
  age:24
}


// ===================== function  ================

let myFunc:Function;

myFunc=()=>{
  console.log('mehedi')
}

//not valid 
// myFunc=65

const Func=(a:string ,b:string)=>{
  console.log(`Hello ${a} ${b}`)
}

Func('mehedi','hasan');

function myfunction(a:string ,b:number){
  return a-b;
} 

console.log(myfunction('10',6))


//========================= type aliases ==================

//without aliasing;
// const userDetails=(id:string| number,user:{name:string,age:number})=>{
//   console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
// }

// const sayHello=(user:{name:string,age:number})=>{
//   console.log(`Hello ${user.age>50?"Sir":"Mr"} ${user.name}`)
// }


//with aliasing
type stringOrNumber=string | number
type userType={name:string,age:number}

const userDetails=(id:stringOrNumber,user:userType)=>{
  console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
}

const sayHello=(user:userType)=>{
  console.log(`Hello ${user.age>50?"Sir":"Mr"} ${user.name}`)
}

userDetails(233,{name:"mehedi",age:24});
sayHello({name:"mehedi",age:48})


//========================== function signatures ===================
/*
  function means defining the function types;
*/

let add=(x:number,y:number)=>number

add=(a:number,b:number)=> {
  return a+b;
}



//====================== classes ==============================

class Player{
  name:string;
  age:number;
  country:string;

  constructor(n:string,a:number,c:string){
    this.name=n;
    this.age=a;
    this.country=c;
  }

  play(){
    console.log(`player ${this.name} from ${this.country} and age is ${this.age}`);
  }
};

const masrafi=new Player('mashrafi',40,'bangladesh');
const mehedi=new Player('mehedi',25,'bangladesh');

//typee of object
let players:Player[]=[];

players.push(masrafi);
players.push(mehedi);

for(let value of players){
  value.play();
}

//=========================== access Modifier ======================
/*
  there are 4 types of access modifier
  1.private
  2.protected
  3.public
  4.readonly (can be readed from outside of the function)
*/

class Person{
  public name:string;
  private age:number;
  readonly isAdult:boolean;

  Person(n:string,a:number){
    this.name=n;
    this.age=a;
  }

  info(){
    console.log(`name is ${this.name} and age is ${this.age}`)
  }
}

class Sumon{
  constructor(
    private name:string,
    private age:number
  ){}

  info(){
    console.log(`name is ${this.name} and age is ${this.age}`)
  }
};

const p1=new Sumon('sumon',26);
p1.info();

// ========================= Module System ======================

import { Car } from './classes/Car.js'

const ferrari=Car('ferarri',28888890);
ferrari.info();



//============================ inerfaces ==================

interface User{
  name:string;
  age:number;
}

interface User{
  city:string
}

const user:User={
  name:'mehedi',
  age:22,
  city:'cumilla'
};

console.log(user);

interface Persons{
  name:string
}

interface Employee extends Persons{
  salary:number
}

const emp:Employee={
  name:'sumon',
  salary:399
}

console.log(emp)


// ========== types ========

type korim={name:string} | {age:number};//union
type rohim={name:string}& {age:number}; //intersection

const user1:korim={
  name:'sumon',
  // age:24 //optional
}

const user2:rohim={
  name:'sumon',
  age:25
}

//1. generics for type composition

type ApiResponse<T>={
  success:boolean;
  data:T;
}

type Users={
  id:number,
  name:string
}

const response:ApiResponse<Users>={
  success:true,
  data:{
    id:1,
    name:'sumon'
  }
};

console.log(response)

//====================== type assertion =====================

//1. Using as keyword (✅ Preferred syntax)

let message:unknown="sumon bro"
console.log((message as string).length)

//2. Using angle brackets <> syntax (⚠️ Avoid in JSX)

let msg:unknown='mehedi'
console.log((<string>msg).length)


let json='{"name":"mehedi","age":24}';

type Userss={
  name:string,
  age:number,
}

const usersss=JSON.parse(json) as Userss;

console.log(usersss.name)




/*
  difference between type and interface

          Feature	                              interface	                      type
Describes object shapes	                          ✅ Yes	                        ✅ Yes
Describes primitives / unions / tuples	          ❌ No	                        ✅ Yes (`type A = string
Extending types	                                  ✅ extends	                    ✅ Using & (intersection)
Declaration merging	                     ✅ Yes (can be declared multiple times)	❌ No (duplicate type name = error)
Implements in classes	                            ✅ Yes	                        ✅ Yes
Used for union or intersection	                  ❌ No	                        ✅ Yes (`type A = B
Readability in tooling	               ✅ Clear in classes and OOP structures	  ✅ Better for complex composed types
Performance (compiler)	               ✅ Slightly better in very large projects	✅ Good too, no major difference in most projects

 */

// type tuple=[string,string,number,number,number,number]

// const arr:tuple=['mehedi','hasan',25,27,8,3];

// arr.push('3');
// console.log(arr)

// function greetUser(name:string="Guest",age?:number):string{
//     return `Hello ${name} ${age?", age "+age: ""}`
// }

// console.log(greetUser('mehedi'));


// function throwErr(): never {
//   throw new Error("Something went wrong!");
// }

// type sumon=(x: number, y: number) => number;

// let calculate:sumon = function (x, y) {
//   return x + y;
// };

// console.log(calculate(2,5));

// function doSomthing(callback:(msg:string)=>void):void{
//     callback('task complete')
// }

// doSomthing((text)=>console.log(text));


// function fun<T>(value:T): T {
//   return value;
// }

// console.log(fun<string>('mehedi')); // returns "hello"
// console.log(fun<number>(1))


// ///generic function:
// function getLength<T extends { length: number }>(item: T): number {
//   return item.length;
// }

// getLength('2'); // 6
