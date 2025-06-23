const div1 = document.querySelector("#drag");
const div2 = document.querySelector("#drop");
const div3 = document.querySelector("#drop2");

div1.addEventListener("dragstart", (e) => {
    let selectedBox = e.target;
    div1.style.opacity = 0.5;

    // console.log(selectedBox);

    //box-1
    div2.addEventListener("dragover", (e) => {
        e.preventDefault();
        // console.log(e);
    });
    div2.addEventListener("drop", (e) => {
        div2.innerText = "";
        div2.append(selectedBox);
        selectedBox = null;
    });
    //box-2
    div3.addEventListener("dragover", (e) => {
        e.preventDefault();
        // console.log(e.target);
    });

    div3.addEventListener("drop", (e) => {
        if (selectedBox) div3.append(selectedBox);
        selectedBox = null;
    });
    //dragend
    div1.addEventListener("dragend", (e) => {
        div1.style.opacity = 1;
    });
});
