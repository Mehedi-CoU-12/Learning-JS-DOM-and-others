const boxs=document.querySelectorAll('.box');
const body=document.body;

let arr=['yellow','aqua','white','red','blue'];
let textColor=['black','black','black','white','white'];

boxs.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        let boxColor=e.target.getAttribute('class');
        let color=boxColor[boxColor.length-1];
        
        body.style.backgroundColor=arr[color-1];
        body.style.color=textColor[color-1];
    })
})
