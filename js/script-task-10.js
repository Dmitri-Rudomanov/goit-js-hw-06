const input = document.querySelector("#controls input")
const create=document.querySelector("[data-create]")
const destroy = document.querySelector("[data-destroy]")
const boxes = document.querySelector("#boxes")

let arr=[]
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onBtnCreateClick = (event) => {
    destroyBoxes()
    createBoxes(input.value)
}
function createBoxes(amount) {
    for (let i = 0; i <= amount-1; i += 1) {
    const newDiv = document.createElement("div")
    newDiv.style.backgroundColor = getRandomHexColor()
    newDiv.style.width=(i * 10) + 30 + 'px'
    newDiv.style.height = (i * 10) + 30 + 'px'
    arr.push(newDiv)    
    }
    boxes.append(...arr)
}

const destroyBoxes = (event) => {
    boxes.innerHTML = ""
    arr=[]
}

create.addEventListener("click",onBtnCreateClick)
destroy.addEventListener("click",destroyBoxes)