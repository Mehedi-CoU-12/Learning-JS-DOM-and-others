const user = JSON.parse(localStorage.getItem("currentUser"));
const name = document.getElementById("about-name");
const email = document.getElementById("about-email");

name.innerText = user.name;
email.innerText = user.email;
