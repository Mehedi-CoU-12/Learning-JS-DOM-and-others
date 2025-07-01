//======================== symbol data types ==========
/*
  Symbol data always generate unique key and value;
  if we use symbol as a key we have to use []. else the key will be treated as string not symbol.
*/
let sym = Symbol();
let sym2 = Symbol();

console.log(sym, sym2, sym == sym2);

const ID = Symbol("id");
const id2 = Symbol("id");

const obj = {
    name: "mehedi",
    [ID]: 1234,
};

console.log(obj);

const symbol = Object.getOwnPropertySymbols(obj);
console.log(obj[symbol[0]]);

//===================== never =========================
/* 
  never represents a value that never occurs. A function that never returns, or a variable that cannot have any value, will have the type never.
 */
function infinite(): never {
    while (true) {
        console.log("infinite loop is running");
    }
}

function inf(): never {
    throw new Error("Mehedi");
}

//===================== explicit type  ================
let Name: string;
Name = "sumon bro";

let number: number;
number = 5;

//===================== Union  ================
let arry: number[] = [];
arry.push(5);

let str: string[] = [];
str.push("mehedi");

let array: (number | string)[] = [];
array.push(2);
array.push("mehedi");

type union = number | string;
let unionArray: union[] = [];

unionArray.push("mehedi");
unionArray.push(3);

//===================== dynamic type  ================

let a: any;
a = 5;
a = "mehedi";

let newArray: any[] = [];
newArray.push("mehedi");
newArray.push(3);
newArray.push(true);

let b: {
    name: any;
    age: any;
};

b = {
    name: "mehedi",
    age: 24,
};

// ===================== function  ================

let myFunc: Function;

myFunc = () => {
    console.log("mehedi");
};

//not valid
// myFunc=65

const Func = (a: string, b: string) => {
    console.log(`Hello ${a} ${b}`);
};

Func("mehedi", "hasan");

function myfunction(a: string, b: number) {
    return a - b;
}

console.log(myfunction("10", 6));

//========================= enum data types ===============

enum fruitTypes {
    a = "apple",
    b = "banana",
    c = "cherry",
}

let myFruit: fruitTypes = fruitTypes.a;
// myFruit='korim'  //wrong

//========================= class with super keyword =============

class Parent {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    greet() {
        console.log(`Hello from Parent, ${this.name}`);
    }
}

class Child extends Parent {
    age: number;
    constructor(name: string, age: number) {
        super(name); // ✅ Must call super() before using `this`
        this.age = age;
    }

    greet() {
        super.greet(); // 👈 calls parent’s greet()
        console.log(`And I am ${this.age} years old.`);
    }
}

const sumonBro = new Child("sumon", 25);
sumonBro.greet();

//======================== type guard =====================
/*
  A Type Guard in TypeScript in a technique used to narrow down the type of a variable within a conditional block
*/

//-----------------1. type of:
function padLeft(input: string | number, padding: string | number) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    } else {
        return padding + input;
    }
}

console.log(padLeft("mehedi", "100"));

//-------------2.instanceof

class Dog {
    bark() {
        console.log("barking");
    }
}

class Cat {
    meow() {
        console.log("meow");
    }
}

type Animal = Dog | Cat;

function speak(pet: Animal) {
    if (pet instanceof Dog) pet.bark();
    else pet.meow();
}

const animal = new Dog();

speak(animal); //barking

//-------------- 3.custom type guard---------
type Fish = {
    swim: () => void;
};

type Bird = {
    fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
    if (isFish(pet)) pet.swim();
    else pet.fly();
}

//--------------

function isString(value: any): value is string {
    return typeof value === "string";
}

function isBoolean(value: any): value is boolean {
    return typeof value === "boolean";
}

function print(value: string | number | boolean) {
    if (isString(value)) {
        console.log("num", value.toUpperCase());
    } else if (isBoolean(value)) {
        console.log(value);
    } else console.log("string", value.toFixed(2));
}

print("mehedi");

const input = document.getElementById("username") as HTMLInputElement;
console.log(input.value); // ✅ TS knows it’s an input now

//========================= type aliases ==================

//without aliasing;
// const userDetails=(id:string| number,user:{name:string,age:number})=>{
//   console.log(`user id is ${id}, name is ${user.name} and age is ${user.age}`);
// }

// const sayHello=(user:{name:string,age:number})=>{
//   console.log(`Hello ${user.age>50?"Sir":"Mr"} ${user.name}`)
// }

//with aliasing
type stringOrNumber = string | number;
type userType = { name: string; age: number };

const userDetails = (id: stringOrNumber, user: userType) => {
    console.log(
        `user id is ${id}, name is ${user.name} and age is ${user.age}`
    );
};

const sayHello = (user: userType) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : "Mr"} ${user.name}`);
};

userDetails(233, { name: "mehedi", age: 24 });
sayHello({ name: "mehedi", age: 48 });

//========================== function signatures ===============
/*
  function means defining the function types;
*/

let add = (x: number, y: number) => number;

add = (a: number, b: number) => {
    return a + b;
};

//====================== classes ==============================

class Player {
    name: string;
    age: number;
    country: string;

    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
    }

    play() {
        console.log(
            `player ${this.name} from ${this.country} and age is ${this.age}`
        );
    }
}

const masrafi = new Player("mashrafi", 40, "bangladesh");
const mehedi = new Player("mehedi", 25, "bangladesh");

//typee of object
let players: Player[] = [];

players.push(masrafi);
players.push(mehedi);

for (let value of players) {
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

class Person {
    public name: string;
    private age: number;
    readonly isAdult: boolean;

    Person(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    info() {
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}

class Sumon {
    constructor(private name: string, private age: number) {}

    info() {
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
}

const p1 = new Sumon("sumon", 26);
p1.info();

// ========================= Module System ======================

import { Car } from "./classes/Car.js";

const ferrari = Car("ferarri", 28888890);
ferrari.info();

//============================ inerfaces ==================

interface User {
    name: string;
    age: number;
}

interface User {
    city: string;
}

const user: User = {
    name: "mehedi",
    age: 22,
    city: "cumilla",
};

console.log(user);

interface Persons {
    name: string;
}

interface Employee extends Persons {
    salary: number;
}

const emp: Employee = {
    name: "sumon",
    salary: 399,
};

console.log(emp);

// ======================= types ======================

type korim = { name: string } | { age: number }; //union
type rohim = { name: string } & { age: number }; //intersection

const user1: korim = {
    name: "sumon",
    // age:24 //optional
};

const user2: rohim = {
    name: "sumon",
    age: 25,
};

//1. generics for type composition

type ApiResponse<T> = {
    success: boolean;
    data: T;
};

type Users = {
    id: number;
    name: string;
};

const response: ApiResponse<Users> = {
    success: true,
    data: {
        id: 1,
        name: "sumon",
    },
};

console.log(response);

//====================== type assertion =====================

//1. Using as keyword (✅ Preferred syntax)

let message: unknown = "sumon bro";
console.log((message as string).length);

//2. Using angle brackets <> syntax (⚠️ Avoid in JSX)

let msg: unknown = "mehedi";
console.log((<string>msg).length);

let json = '{"name":"mehedi","age":24}';

type Userss = {
    name: string;
    age: number;
};

const usersss = JSON.parse(json) as Userss;

console.log(usersss.name);

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

//============================= generic ========================
/*
    Generics in typescript allow you to create reusable components 
    that work with a variety of data types while maintaining type safety.
  */

function fruits<T>(name: T): T {
    return name;
}

let onlyString = fruits("mehedi");
let onlyNumber = fruits(10);
let onlyBool = fruits(true);

interface Bottle{
    name:string,
    price:number
}

let onlyBottle=fruits<Bottle>({name:'fresh',price:30})

type fun=()=>void;

let onlyFunc=fruits<fun>(()=>console.log('mehedi'));



//====================== key of ================================

/**
 * key of return the "union" of the key of an object.
 */

type Personss = {
    name: string;
    age: number;
    isEmp: boolean;
};

let personData: Personss = {
    name: "mehedi",
    age: 24,
    isEmp: true,
};

type personX = keyof Personss;

function printt(value:personX):void{
    console.log(value);
}

//==================== index signatures and readOnly ======================
/**
 * make the type shorter using index signatures
 */
type myObjectType={
    readonly name:string,
    address:string,
    nationality:string,
    readonly [key:string]:string|number,
}

const myObj:myObjectType={
    name:'mehedi',
    address:'surma gate',
    nationality:'bangladeshi',
    city:'sylhet',
    age:23,
}

// myObj.name="sumon" //wrong because it can only be readed not writed


//=============== mapped types =======================

type Usersss={
    name:string,
    age:number
};

type readOnlyUser={
    readonly [k in keyof Usersss]:Usersss[k];
}

/**
readOnlyUser={
    readOnly name:string,
    readOnly age:number
}
 */


//----------- partial<T> =>make all properties optional ------
//syntax
type Partial<T>={
    [k in keyof T]?:T[k]
}

type OptionalUser=Partial<User>;

//---------- required<T> =>make all properties required ------
//syntax
type Required<T>={
    [k in keyof User]-?:User[k];
}

type RequiredUser=Required<User>;


//--------- Readonly<T> =>make all properties read-only -------
//syntax
type Readonly<T>={
    readonly [k in keyof T]:T[k];
}


type readOnlyUser1=Readonly<User>

//----------- Record<K,T> =>create a new object type from keys and values

type Roles="admin" | "user" | "editor";

type Permission=Record<Roles,boolean>;

//------------ transforming key names -----

type Prefix<T>={
    [k in keyof T as `prefixed_${string & k}`]:T[k];
}

type Prefixed=Prefix<User>;