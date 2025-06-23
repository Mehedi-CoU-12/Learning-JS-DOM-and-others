//generate the box;
let values = [1, 2, 3, 4, 5, 6, 7, 8, "-"];

function isPossible(arr){
    let inversion=0;
    for(let i=0;i<8;i++){
        for(let j=i+1;j<9;j++){
            if(arr[i]!='-' && arr[j]!='-' && arr[i]>arr[j])
                inversion++;
        }
    }

    return inversion%2==0;
}

do {
    // Fisher-Yates shuffle algorithm
    for (let i = values.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [values[i], values[j]] = [values[j], values[i]];
    }
} while (!isPossible(values));

//set the value to the boxs;
const boxs = document.querySelectorAll(".box");

boxs.forEach((box,index)=>{
    box.innerText=values[index];

    if(values[index]=='-'){
        box.classList.add('empty');
        box.removeAttribute('draggable');
    }
    else
        box.setAttribute('draggable','true');
})



let draggableBox = null;
boxs.forEach((box, index) => {
    box.addEventListener("dragstart", (e) => {
        if (!box.classList.contains("empty")) {
            draggableBox = e.target;
            box.style.opacity=0.5;
        }
    });

    box.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    box.addEventListener("drop", (e) => {
        if (draggableBox && box.classList.contains("empty")) {
            //neighbour check
            let currrentIndex = Number(index);
            let nextIndex = Number(draggableBox.getAttribute("id"));
            let differences = Math.abs(currrentIndex - nextIndex);

            if (currrentIndex > nextIndex)
                [currrentIndex, nextIndex] = [nextIndex, currrentIndex];

            let isNeighbour = false;
            if (differences == 1 || differences == 3) {
                if (
                    (currrentIndex == 2 && nextIndex == 3) ||
                    (currrentIndex == 5 && nextIndex == 6)
                )
                    isNeighbour = false;
                else isNeighbour = true;
            }

            if (isNeighbour) {
                box.innerText = draggableBox.innerText;
                draggableBox.innerText = "-";

                draggableBox.classList.add("empty");
                box.classList.remove("empty");

                box.setAttribute("draggable", "true");
                draggableBox.removeAttribute("draggable");
            }
        }
    });

    box.addEventListener('dragend',(e)=>{
        box.style.opacity=1;
    })
});
