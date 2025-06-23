const lists = document.querySelectorAll(".list");
const leftBox = document.getElementById("left");
const rightBox = document.getElementById("right");

// console.log(lists);

for (let item of lists) {
    item.addEventListener("dragstart", (e) => {
        let selectedBox = e.target;

        
        //right box
        rightBox.addEventListener("dragover", (e) => {
            e.preventDefault();
            // console.log(e.target);
        });

        rightBox.addEventListener("drop", (e) => {
            if(selectedBox){
                rightBox.append(selectedBox);
                selectedBox=null;
            }
        });

        //left box
        leftBox.addEventListener('dragover',(e)=>{
            e.preventDefault();
        })

        leftBox.addEventListener('drop',(e)=>{
            if(selectedBox){
                leftBox.append(selectedBox)
                selectedBox=null;
            }
        })

    });
}
