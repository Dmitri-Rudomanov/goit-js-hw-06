const input = document.querySelector("#validation-input")
const neededLength = parseInt(input.dataset.length)
input.addEventListener("blur", () => {
    if (input.value.length === neededLength) {
        input.classList.add("valid")
        input.classList.remove("invalid")
    }
    else {
    input.classList.remove("valid")
    input.classList.add("invalid")
    }
})
