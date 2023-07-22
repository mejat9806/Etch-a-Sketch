let color ="black"
document.addEventListener("DOMContentLoaded",function(){
    let size =16
    
    canvasSize(size)
    console.log("hi")
    
   
})
 let sizeChange =document.getElementById("canvasSize")

 sizeChange.addEventListener("change",function(){
    
    size = sizeChange.value
    console.log(size)
    canvasSize(size)
})
 

function canvasSize(size){
    canva =document.querySelectorAll("div")[1]
    canva.style.gridTemplateColumns=`repeat(${size}, 1fr)`
    canva.style.gridTemplateRows=`repeat(${size}, 1fr)`
    let label=document.querySelector("label")
    label.textContent =`${size}*${size}`
    divdiv(size)
}
 function eraser() {
   const eraser =document.querySelector("#eraser")
   eraser.addEventListener("click",function(size){
    divdiv()
    
}) 

} 


function divdiv(sizeChange) {
    
    let numDiv = sizeChange*sizeChange

    for (let i = 0;i<numDiv;i++){
        const divs= document.createElement('div')
        divs.style.backgroundColor="white"
        divs.classList.add("manydiv")
        canva.insertAdjacentElement("beforeend",divs)
    divs.addEventListener("mouseover",function(){
        divs.style.backgroundColor=color
        
    })
}
}
function resetBoard(){
let divs =document.querySelectorAll(".manydiv")
    divs.forEach((divs)=> divs.style.backgroundColor="white")


}




function rainbowColor() {
    const r =Math.floor(Math.random()*256)
        const g =Math.floor(Math.random()*256)
        const b =Math.floor(Math.random()*256)
        return `rgb(${r},${g},${b})`
}

     colorInput = document.querySelector("#color")

colorInput.addEventListener("change",function(){
    color =colorInput.value
})




function setColor(colorChoice) {
     color = colorChoice
}

