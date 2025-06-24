const input = document.querySelector("#input");
const button = document.querySelector("#button");
const ul = document.querySelector(".addtask");

ul.addEventListener("click", (e) => {
    // console.log(e.target.parentElement)

    if (e.target.classList.contains("delete")) {
        ul.removeChild(e.target.parentElement);
    }

    if (e.target.classList.contains('complete')) {
        const task=e.target.parentElement.querySelector('.text')
        task.style.textDecoration = "line-through";
    }
});

button.addEventListener("click", (e) => {
    let value = input.value.trim();

    if (!value) return;

    const li = document.createElement("li");
    const p = document.createElement("p");
    const del = document.createElement("button");
    const complete = document.createElement("button");

    p.innerText = value;
    complete.innerText = "complete";
    del.innerText = "delete";

    p.setAttribute("class", "text");
    li.setAttribute("class", "list");
    del.setAttribute("class", "delete");
    complete.setAttribute("class", "complete");

    if (value) li.append(p, complete, del);
    ul.append(li);

    input.value = "";
});
