let products = getProducts()

let filters = {
    searchItems: "",
    sortBy: "",
    availableProduct: false
}
let sumPrices = 0
showSum()
renderProduct(products, filters)
document.querySelector("#addProduct").addEventListener("submit", (e) => {
    e.preventDefault()
    let time = moment().valueOf()
    products.push({
        id: uuidv4(),
        title: e.target.elements.productTitle.value,
        price: Number(e.target.elements.productPrice.value),
        exist: true,
        created: time,
        updated: time
    })
    renderProduct(products, filters)
    saveProducts(products)
    e.target.elements.productTitle.value = ''
    e.target.elements.productPrice.value = ''
})

document.querySelector("#search").addEventListener("input", (e) => {
    filters.searchItems = e.target.value
    renderProduct(products, filters)
    saveProducts(products)
})

document.querySelector("#availableProducts").addEventListener("change", (e) => {
    filters.availableProduct =e.target.checked
    renderProduct(products, filters)
})