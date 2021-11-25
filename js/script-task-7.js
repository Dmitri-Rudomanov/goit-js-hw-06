const input = document.querySelector("#font-size-control")
const text = document.querySelector('#text')
input.value=0
input.addEventListener("input", () => {
    text.style.fontSize=`${input.value}px`
})