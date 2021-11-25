const counter = document.querySelector("#value")
console.log(counter.textContent)
let counterValue = 0;

const incremrntBtn = document.querySelector('[data-action="increment"]')
incremrntBtn.addEventListener("click", () => {
    counterValue+=1
    counter.textContent=counterValue
})

const decrementBtn = document.querySelector('[data-action="decrement"]')
decrementBtn.addEventListener("click", () => {
    counterValue-=1
    counter.textContent=counterValue
})




