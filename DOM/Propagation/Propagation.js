/**
    problem:
          div1
            |
        ---------
        |        |
        btn     div-2

    if click the btn then the div-2 will appear. if we click the div-2 container then nothing will happen but if we click outside of the div-2 or div-1 then div-2 will disappear.
 */


const div1=document.querySelector('.container-1');
const div2=document.querySelector('.container-2');
const button=document.querySelector('button');

function showContainer(show){
    if(show){
        div2.style.display='flex';
    }
    else
    div2.style.display='none';
}

button.addEventListener('click',(e)=>{
    e.stopPropagation();
    showContainer(true)
})

div2.addEventListener('click',(e)=>{
    e.stopPropagation();
    showContainer(true);
})

div1.addEventListener('click',(e)=>{
    showContainer(false)
})

