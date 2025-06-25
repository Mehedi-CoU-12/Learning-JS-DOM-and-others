const div = document.querySelector(".container");
const ul = document.querySelector(".cart");
const cartTotal = document.querySelector("#subtotal");
const promocode = document.getElementById("promocode");
const TOTAL = document.getElementById("total");

let totalCartPrice = 0;

const allProduct = document.querySelectorAll(".container");

allProduct.forEach((product) => {
    product.childNodes[9].addEventListener("click", (e) => {
        const img = product.querySelector("#img");
        const name = product.querySelector("#name");
        const price = product.querySelector("#price");
        const totalQuantity = product.querySelector("#quantity");

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
            TOTAL.innerText = totalCartPrice;
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
            TOTAL.innerText = totalCartPrice;
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
        TOTAL.innerText = totalCartPrice;
    });
});

promocode.addEventListener("click", (e) => {
    let total=Number(TOTAL.innerText)
    TOTAL.innerText=total-Number(TOTAL.innerText)*0.15;
});
