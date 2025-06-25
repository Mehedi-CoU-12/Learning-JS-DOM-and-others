//registration
const registerName = document.getElementById("register-name");
const registerEmail = document.getElementById("register-email");
const registerPassword = document.getElementById("register-password");
const registerButton = document.getElementById("register");
const registerAlert = document.getElementById("register-alert");

registerButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (
        !registerName.value ||
        !registerEmail.value ||
        !registerPassword.value
    ) {
        registerAlert.innerText = `all the field are required!`;

        setTimeout(() => {
            registerAlert.innerText = "";
        }, 1200);
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => registerEmail.value === user.email)) {
        registerAlert.innerText = `user already exist!`;

        setTimeout(() => {
            registerAlert.innerText = "";
        }, 1200);

        registerName.value = "";
        registerEmail.value = "";
        registerPassword.value = "";

        return;
    }

    const user = {
        name: registerName.value,
        email: registerEmail.value,
        password: registerPassword.value,
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    registerName.value = "";
    registerEmail.value = "";
    registerPassword.value = "";

    window.location.href = "login.html";
});
