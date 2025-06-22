const div1=document.querySelector('.con-1')
const div2=document.querySelector('.con-2')
const div3=document.querySelector('.con-3')
const div4=document.querySelector('.con-4')

//capturing
// div1.addEventListener('click',(e)=>{
    
// },true)


div2.addEventListener('click',(e)=>{
    console.log(2)
},true)
div3.addEventListener('click',(e)=>{
    console.log(3)
},true)
div4.addEventListener('click',(e)=>{
    console.log(4)
},true)

//bubbling
div1.addEventListener('click',(e)=>{
    console.log(1)
})



// div2.addEventListener('click',(e)=>{

// })
// div3.addEventListener('click',(e)=>{

// })
// div4.addEventListener('click',(e)=>{

// })