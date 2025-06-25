const x=document.getElementById('x-value')
const y=document.getElementById('y-value')


window.addEventListener('mousemove',(e)=>{
    x.innerText=e.x;
    y.innerText=e.y;
})