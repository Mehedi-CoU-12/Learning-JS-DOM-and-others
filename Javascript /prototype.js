const a = {
    name: "mehedi",
    city: "cumilla",
};

const p = {
    greets: function () {
        console.log("this is a object function");
    },
};

arr = ["thor", "loki"];

// __proto__
a.__proto__ = p;
arr.__proto__ = p;
a.__proto__.sayMyName = function () {
    console.log("say my name ");
};

a.greets();
a.sayMyName();
arr.sayMyName();

console.log(a);

Object.prototype.sayMyName = function () {
    console.log("this is the name function");
};

//prototype
function Person(name) {
    this.name = name;
}

const user = {
    name: "mehedi",
    email: "mehedi@gmail.com",
};

Object.prototype.sayHi = function () {
    console.log(this.name, ", say hi");
};

Person.prototype.sayMyName = function () {
    console.log(`say my name , ${this.name}`);
};

const p1 = new Person("thor");
p1.sayHi();
user.sayHi();

console.log(p1);
console.log(user);
