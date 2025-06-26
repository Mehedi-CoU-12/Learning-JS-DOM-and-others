const div = document.querySelector(".container");
const ul = document.querySelector(".cart");
const subTotal = document.querySelector("#subtotal");
const promocode = document.getElementById("promocode");
const TOTAL = document.getElementById("total");

let totalCartPrice = 0;

function renderItem() {
    const allProduct = document.querySelectorAll(".container");

    allProduct.forEach((product) => {
        product.childNodes[9].addEventListener("click", (e) => {
            const img = product.querySelector("#img");
            const name = product.querySelector("#name");
            const price = product.querySelector("#price");
            const totalQuantity = product.querySelector("#quantity");

            //creating element
            const div = document.createElement("div");
            const productImage = document.createElement("img");
            const productName = document.createElement("p");
            const productPrice = document.createElement("p");
            const quantity = document.createElement("p");
            const remove = document.createElement("button");
            const incBtn = document.createElement("button");
            const decBtn = document.createElement("button");
            const total = document.createElement("p");

            //all cart product
            const allCartProduct = document.querySelectorAll(".cart-row");
            for (let i = 0; i < allCartProduct.length; i++) {
                if (allCartProduct[i].children[1].innerText == name.innerText) {
                    const indCartProduct = allCartProduct[i].children;
                    if (Number(totalQuantity.innerText) > 0) {
                        //price
                        indCartProduct[2].innerText =
                            Number(indCartProduct[2].innerText) +
                            Number(price.innerText);
                        //quantity
                        indCartProduct[3].innerText =
                            Number(indCartProduct[3].innerText) + 1;
                        //main quantity
                        totalQuantity.innerText =
                            Number(totalQuantity.innerText) - 1;

                        //total price
                        indCartProduct[7].innerText =
                            Number(indCartProduct[7].innerText) +
                            Number(price.innerText);

                        //subtotal price
                        subTotal.innerText =
                            Number(subTotal.innerText) +
                            Number(price.innerText);

                        TOTAL.innerText = subTotal.innerText;
                    }
                    return;
                }
            }

            //add styling
            div.classList.add("cart-row");

            //adding value
            const src = img.getAttribute("src");
            productImage.setAttribute("src", src);
            productName.innerText = name.innerText;
            productPrice.innerText = price.innerText;
            remove.innerText = "remove";
            incBtn.innerText = "+";
            decBtn.innerText = "-";
            quantity.innerText = 1;
            total.innerText = price.innerText;
            totalCartPrice += Number(price.innerText);

            let ase = Number(totalQuantity.innerText);

            if (ase == 0) return;

            totalQuantity.innerText = ase - 1;

            //remove element
            remove.addEventListener("click", (e) => {
                totalCartPrice -=
                    Number(quantity.innerText) * Number(productPrice.innerText);

                subTotal.innerText = totalCartPrice;
                TOTAL.innerText = totalCartPrice;

                totalQuantity.innerText =
                    Number(quantity.innerText) +
                    Number(totalQuantity.innerText);

                ul.removeChild(div);
            });

            let pp = Number(price.innerText);

            //increment element
            incBtn.addEventListener("click", (e) => {
                let qtn = Number(quantity.innerText);
                let totalHave = Number(totalQuantity.innerText);

                if (totalHave > 0) {
                    totalCartPrice += pp;
                    qtn++;
                    totalQuantity.innerText =
                        Number(totalQuantity.innerText) - 1;
                }

                total.innerText = pp * qtn;

                quantity.innerText = qtn;
                subTotal.innerText = totalCartPrice;
                TOTAL.innerText = totalCartPrice;
            });

            //decrement element
            decBtn.addEventListener("click", (e) => {
                let qtn = Number(quantity.innerText);

                if (qtn > 0) {
                    qtn--;
                    totalCartPrice -= pp;

                    totalQuantity.innerText =
                        Number(totalQuantity.innerText) + 1;
                    total.innerText = pp * qtn;

                    quantity.innerText = qtn;
                    subTotal.innerText = totalCartPrice;
                    TOTAL.innerText = totalCartPrice;
                }

                if (qtn == 0) ul.removeChild(div);
            });

            div.append(
                productImage,
                productName,
                productPrice,
                quantity,
                remove,
                decBtn,
                incBtn,
                total
            );

            ul.append(div);
            subTotal.innerText = totalCartPrice;
            TOTAL.innerText = totalCartPrice;
        });
    });
}

renderItem();

//show alert
function showAlert(message, sucess) {
    const alert = document.getElementById("alert");
    alert.innerText = message;

    if (sucess) alert.classList.add("success");
    else alert.classList.add("failed");

    setTimeout(() => {
        alert.innerText = "";
        alert.classList.remove("failed");
        alert.classList.remove("success");
    }, 1200);
}
//applying promocode
promocode.addEventListener("click", (e) => {
    const inputPromocode = document.getElementById("promodcode-apply");
    if (inputPromocode.value === "SAVE15") {
        let total = Number(subTotal.innerText);
        let discount = Number(subTotal.innerText) * 0.15;
        TOTAL.innerText = total - discount;
        showAlert("15% promocode are applied!!", true);
    } else showAlert("invalid promo code!", false);

    inputPromocode.value = "";
});

//create new product
const newProductBtn = document.getElementById("prodCreate");
const prodImage = document.getElementById("prodImage");
const prodName = document.getElementById("prodName");
const prodPrice = document.getElementById("prodPrice");
const prodQuantity = document.getElementById("prodQuantity");
const allProductDiv = document.querySelector(".allProduct");

newProductBtn.addEventListener("click", (e) => {
    if (!prodImage.value || !prodName.value || !prodPrice || !prodQuantity) {
        alert(`required all the field!`);
        return;
    }

    const div = document.createElement("div");
    div.classList.add("container");

    //grab the image file
    const file = prodImage.files[0];

    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function (e) {
            let src = e.target.result;
            div.innerHTML = `
                <img id="img" src="${src}" />
                <p id="name">${prodName.value}</p>
                <p>
                    <span>Price: <span id="price">${prodPrice.value}</span></span>
                </p>
                <p>
                    <span>Quantity : <span id="quantity">${prodQuantity.value}</span></span>
                </p>
                <button id="btn">Add to cart</button>
            `;

            prodImage.value = "";
            prodName.value = "";
            prodPrice.value = "";
            prodQuantity.value = "";

            renderItem();
        };

        reader.readAsDataURL(file); // read file as base64 URL
    } else {
        alert("Please select a valid image file.");
    }

    allProductDiv.append(div);
});
