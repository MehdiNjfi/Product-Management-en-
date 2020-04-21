let productTitle = document.querySelector("#productTitle")
let productPrice = document.querySelector("#productPrice")
let updatedTime = document.querySelector("#updatedTime")
updatedTime.setAttribute("style", "margin: 20px")

let productId = location.hash.substring(1)
let products = getProducts()
let product = products.find(item => item.id === productId)

if(product===undefined){
    location.assign("./index.html")
}

productTitle.value = product.title
productPrice.value = product.price
updatedTime.textContent = `Edited in: ${lastUpdated(product.updated)}`

productTitle.addEventListener("input", (e) => {
    product.title = e.target.value
    product.updated = moment().valueOf()
    updatedTime.textContent = `Edited in: ${lastUpdated(product.updated)}`
    saveProducts(products)
})

productPrice.addEventListener("input", (e)=> {
    product.price = Number(e.target.value)
    product.updated = moment().valueOf()
    updatedTime.textContent = `Edited in: ${lastUpdated(product.updated)}`
    saveProducts(products)
})