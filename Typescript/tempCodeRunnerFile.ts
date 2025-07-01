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

printt('age')