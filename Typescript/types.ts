type User = {
    id: number;
    name: string;
    age: number;
    address?: {
        street: string;
        city: string;
    };
};

//Requried
function createUserWithAddress(user: Required<User>) {}

//Omit
function createUser(user: Omit<User, "id">) {}

//Partial
function updateUser(user: Partial<User>) {}

//Pick
function renderUserDetails(user: Pick<User, "name" | "age">) {
    console.log(user.name, user.age);
}

renderUserDetails({ name: "mehedi", age: 25 });

createUser({ name: "dds", age: 25, address: { street: "er", city: "dsdf" } });

updateUser({ name: "mehedi" });

//ReadOnly

//Readonly just like javascript Object.freeze. it makes all the properties readonly. it's work on the 1st level. it doesn't make property readonly on the deep level

type T_Readonly = Readonly<User>;

//just like map we use in the c++. every property in the key must have User properties

//Record
type a = Record<string, User>;

const newUser: a = {
    mehedi: { name: "d", age: 3, id: 3 },
    key: { name: "d", id: 2, age: 3 },
};

type Role = "admin" | "user" | "moderator";
type OtherRole = "testing" | "admin" | "user" | "security";

//Extract
type T_role = Extract<Role, "admin" | "moderator">;
type T_roles = Extract<Role, OtherRole>; //admin | user

//Exclude
type T_Role = Exclude<Role, "moderator">;
//T_Role = "admin" | "user"

//ReturnType
function getUser(id: string, name: string, age: number) {
    return { name: "mehedi", id, age: 30 };
}

type T = ReturnType<typeof getUser>;
//T= {name:string,id:string,age:number}

//Parameters Type
type T_param = Parameters<typeof getUser>;
// T_param = [string,string,number]

const arr: T_param = ["mehedi", "ehedi", 3];

function getUserWrapper(id: Parameters<typeof getUser>[0], other: boolean) {
    return getUser(id, "mehedi", 30);
}

//ConstructorParamets

class Users {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

type T_cons = ConstructorParameters<typeof Users>; //[string]

//NonNullable
//it removes null and undefined from a types
type A = string | null | undefined;

type T_non = NonNullable<A>; // string

//awaited

async function getUserFormDB() {
    return Promise.resolve({ name: "mehedi", age: 25 });
}

type T_ = Awaited<ReturnType<typeof getUserFormDB>>;

type S = "Hello World";

//Lowercase
type T = Lowercase<S>;

//Uppercase
type T = Uppercase<S>

//uncapitalize
type T = Uncapitalize<S>

//capitalize
type T = Capitalize<S>