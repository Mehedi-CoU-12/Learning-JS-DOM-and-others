//log in
const logEmail = document.getElementById("log-email");
const logPassword = document.getElementById("log-password");
const logButton = document.getElementById("log");
const logAlert = document.getElementById("log-alert");

logButton.addEventListener("click", (e) => {
    e.preventDefault();

    const email = logEmail.value;
    const password = logPassword.value;

    if (!email || !password) {
        logAlert.innerText = `all the field are requird!`;

        setTimeout(() => {
            logAlert.innerText = "";
        }, 1200);

        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!users.some((user) => user.email === email)) {
        logAlert.innerText = `email or password invalid!`;

        setTimeout(() => {
            logAlert.innerText = "";
        }, 1200);

        logEmail.value = "";
        logPassword.value = "";

        return;
    }

    users.forEach((user) => {
        if (user.email === email && user.password !== password) {
            logAlert.innerText = `email or password invalid!`;

            setTimeout(() => {
                logAlert.innerText = "";
            }, 1200);

            logEmail.value = "";
            logPassword.value = "";

            return;
        }

        if (user.email === email && user.password === password) {
            localStorage.setItem(
                "currentUser",
                JSON.stringify({ name: user.name, email: user.email })
            );
        }
    });

    logEmail.value = "";
    logPassword.value = "";
    window.location.href = "about.html";
});
