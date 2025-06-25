const img = document.querySelector("#img");
const name = document.querySelector("#name");
const div = document.querySelector(".container");
const button = document.querySelector("#btn");
const price = document.querySelector("#price");
const totalQuantity = document.querySelector("#quantity");
const ul = document.querySelector(".cart");
const cartTotal = document.querySelector("#subtotal");

let totalCartPrice = 0;

button.addEventListener("click", (e) => {
    //creating element
    const div = document.createElement("div");
    const quantity = document.createElement("p");
    const productName = document.createElement("p");
    const productPrice = document.createElement("p");
    const total = document.createElement("p");
    const productImage = document.createElement("img");
    const remove = document.createElement("button");
    const incBtn = document.createElement("button");
    const decBtn = document.createElement("button");

    //add styling
    div.style.display = "flex";
    div.style.alignItems = "center";
    productImage.style.height = "40px";
    // productImage.style.marginRight = "15px";
    productName.style.marginLeft = "80px";
    productPrice.style.marginLeft = "65px";
    quantity.style.marginLeft = "150px";
    remove.style.marginLeft = "120px";
    incBtn.style.marginLeft = "90px";
    decBtn.style.marginLeft = "130px";
    total.style.marginLeft = "140px";

    //adding value
    productImage.setAttribute("src", img.getAttribute("src"));
    productName.innerText = name.innerText;
    productPrice.innerText = price.innerText;
    remove.innerText = "remove";
    incBtn.innerText = "+";
    decBtn.innerText = "-";
    quantity.innerText = 1;
    total.innerText = price.innerText;
    totalCartPrice += Number(price.innerText);

    remove.addEventListener("click", (e) => {
        totalCartPrice -=
            Number(quantity.innerText) * Number(productPrice.innerText);
        cartTotal.innerText = totalCartPrice;
        ul.removeChild(div);
    });

    let pp = Number(price.innerText);

    incBtn.addEventListener("click", (e) => {
        let qtn = Number(quantity.innerText);
        let totalHave = Number(totalQuantity.innerText);

        if (qtn < totalHave) {
            totalCartPrice += pp;
            qtn++;
        }

        total.innerText = pp * qtn;

        quantity.innerText = qtn;
        cartTotal.innerText = totalCartPrice;
    });

    decBtn.addEventListener("click", (e) => {
        let qtn = Number(quantity.innerText);

        if (qtn > 0) {
            qtn--;
            totalCartPrice -= pp;
        }

        total.innerText = pp * qtn;

        quantity.innerText = qtn;
        cartTotal.innerText = totalCartPrice;
    });

    div.append(
        productImage,
        productName,
        productPrice,
        quantity,
        remove,
        incBtn,
        decBtn,
        total
    );

    ul.append(div);
    cartTotal.innerText = totalCartPrice;
});

const allProduct = document.querySelectorAll(".container");

//
allProduct.forEach((product) => {
    product.childNodes[9].addEventListener('click',(e)=>{
        console.log(product.childNodes)

        const img=product.childNodes[1];
        const name=product.childNodes[2];
        console.log(name)
    });
});
