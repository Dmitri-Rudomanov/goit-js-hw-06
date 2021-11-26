const body = document.querySelector("body")
const spanColor = document.querySelector(".color")
const btn = document.querySelector(".change-color")


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const onBtnClick = (event)=>{
    body.style.backgroundColor = getRandomHexColor()
    spanColor.textContent=getRandomHexColor()
}

btn.addEventListener('click',onBtnClick)

