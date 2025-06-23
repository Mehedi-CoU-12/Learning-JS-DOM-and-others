const div=document.querySelector('div')
const form=document.querySelector('form')
const button=document.querySelector('button')
const body=document.body;

/*
    capturing-> parent to child
    bubbling-> child to parent

    propagation-> capturing+bubbling
 */

//capturing
div.addEventListener('click',(e)=>{

    const event=e.currentTarget;
    setTimeout(() => {
        event.style.backgroundColor='red'
    }, 1000);
    
})
form.addEventListener('click',(e)=>{
    const event=e.currentTarget;
    setTimeout(() => {
        event.style.backgroundColor='red'
 
        console.log(event)
        
    }, 2000);
 
})
button.addEventListener('click',(e)=>{
    const event=e.currentTarget;
    setTimeout(() => {
        event.style.backgroundColor='red'
        
    }, 3000);
    e.preventDefault();
    
})

//bubbling
div.addEventListener('click',(e)=>{

    const event=e.currentTarget;
    setTimeout(() => {
        event.style.backgroundColor='green'
      
        
    }, 6000);

})
form.addEventListener('click',(e)=>{
    const event=e.currentTarget;
    setTimeout(() => {
        event.style.backgroundColor='green'
       
        console.log(event)
        
    }, 5000);
})
button.addEventListener('click',(e)=>{
    const event=e.currentTarget;
    setTimeout(() => {
        event.style.backgroundColor='green'
        
    }, 4000);
    e.preventDefault();
})