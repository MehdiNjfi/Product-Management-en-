import {getProducts,saveProducts, lastUpdated} from './functions'
// get dom
let productTitle = document.querySelector("#productTitle")
let productPrice = document.querySelector("#productPrice")
let updatedTime = document.querySelector("#updatedTime")
updatedTime.setAttribute("style", "margin: 20px")

// get product from local storage
let productId = location.hash.substring(1)
let products = getProducts()
let product = products.find(item => item.id === productId)

if(product===undefined){
    location.assign("./index.html")
}

// Prepare products for change
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

// back to home btn
const backToHome = () => {
    location.assign('./index.html')
}

// remove btn
const removeEditedProduct = () => {
    removeProduct(product.id)
    saveProducts(products)
    location.assign("./index.html")
}

// multi-page synchronization 
window.addEventListener("storage", (e) => {
    if(e.key === "products"){
        products = JSON.parse(e.newValue)
        product = products.find(item => item.id === productId)
        if(product===undefined){
            location.assign("./index.html")
        }
        productTitle.value = product.title
        productPrice.value = product.price
        updatedTime.textContent = `Edited in: ${lastUpdated(product.updated)}`
    }
})