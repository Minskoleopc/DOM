

// finding the element 
// based on useraction read the text from input element 
// create a new element and add the text to it
// append the element to li 

let inpuText = document.querySelector('input')
let ulList = document.querySelector('ul')
let buttonA = document.querySelector('button')

buttonA.addEventListener('click',function(){
    let textLi = inpuText.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = textLi // <li>Papaya</li>
    ulList.appendChild(newLi)
    inpuText.value = " "
})