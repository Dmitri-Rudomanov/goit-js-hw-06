const items = document.querySelectorAll("li.item")
console.log(`Number of categories : ${items.length}`)

items.forEach(elems => {
    console.log(`Category : ${elems.querySelector("h2").textContent}`)
    console.log(`Elements : ${elems.querySelectorAll("li").length}`)
})