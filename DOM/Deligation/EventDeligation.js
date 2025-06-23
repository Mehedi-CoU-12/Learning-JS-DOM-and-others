const ul=document.getElementById('manu')

ul.addEventListener('click',(e)=>{
    if(e.target.matches('li'))
    e.target.style.backgroundColor='red'
})      