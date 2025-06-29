class Car {
    name: string;
    price: number;

    constructor(n: string, p: number) {
        this.name = n;
        this.price = p;
    }

    info() {
        console.log(`the car name is ${this.name} and price is ${this.price}`);
    }
}
