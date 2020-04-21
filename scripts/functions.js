//get products from local storage
const getProducts = () => {
    let productJson = localStorage.getItem("products")
    try {
        return productJson !== null ? JSON.parse(productJson) : []
    } catch (error) {
        return []
    }
}

//save products in local storage
const saveProducts = (products) => localStorage.setItem("products", JSON.stringify(products))

//remove product button 
const removeProduct = (id) => {
    let productIndex = products.findIndex(item => {
        return item.id === id
    })
    if(productIndex > -1){
        products.splice(productIndex, 1)
    }
}

//sum products's price
let showSum = () => {
    sumPrices = 0
    products.forEach(element => {
        sumPrices+=element.price
    });
    document.querySelector("#sum").innerHTML = `$${sumPrices}`
}

//sort products
let sortProduct = (products, sortBy) => {
    return products.sort((a,b) => {
        if(sortBy === "byUpdated"){
            if(a.updated > b.updated){
                return -1
            } else if(a.updated < b.updated){
                return 1
            } else {
                return 0
            }
        } else if(sortBy === "byCreated"){
            if(a.created> b.created){
                return -1
            } else if(a.created < b.created){
                return 1
            } else {
                return 0
            }
        } else {
            return []
        }
    })
}

//last updated 
let lastUpdated = (time) => {
    return moment(time).fromNow()
}

//craete products table
const createElement = (product) => {
    let trProduct = document.createElement("tr")
    trProduct.setAttribute("id", product.id)
    trProduct.setAttribute("class", "product")

    let tdCheckbox = document.createElement("td")
    let inputCheckbox = document.createElement("input")
    let labelCheckbox = document.createElement("label")
    let tdTitle = document.createElement("td")
    let aTitle = document.createElement("a")
    let tdPrice = document.createElement("td")
    let tdCreated = document.createElement("td")
    let tdUpdated = document.createElement("td")
    let tdRemoveButton = document.createElement("td")
    let removeButton = document.createElement("button")

    // ckeckBox
    labelCheckbox.textContent = "unavailable"
    inputCheckbox.setAttribute("type", "checkbox")
    inputCheckbox.setAttribute("id", product.id.slice(0, 4))
    labelCheckbox.setAttribute("for", product.id.slice(0, 4))
    inputCheckbox.addEventListener("change", (e) => {
        if(e.target.checked){
            product.exist = false
            e.target.checked = "0"
        } else {
            product.exist = true
        }
        saveProducts(products)
    })
    tdCheckbox.appendChild(inputCheckbox)
    tdCheckbox.appendChild(labelCheckbox)

    // Title
    aTitle.textContent = product.title
    aTitle.setAttribute("href", `./edit-product.html#${product.id}`)
    tdTitle.appendChild(aTitle)

    // Price
    tdPrice.textContent = `$${product.price}`
    // Created
    tdCreated.textContent = moment(product.created).fromNow()
    
    // Updated 
    tdUpdated.textContent = lastUpdated(product.updated)

    // remove button
    removeButton.textContent = "remove"
    removeButton.setAttribute("id", "removeButton")
    removeButton.addEventListener("click", () => {
        removeProduct(product.id)
        saveProducts(products)
        renderProduct(products,filters)
    })
    tdRemoveButton.appendChild(removeButton)

    trProduct.appendChild(tdCheckbox)
    trProduct.appendChild(tdTitle)
    trProduct.appendChild(tdPrice)
    trProduct.appendChild(tdCreated)
    trProduct.appendChild(tdUpdated)
    trProduct.appendChild(tdRemoveButton)
    return trProduct
}

//render products with filters(search, available product, sort products)
const renderProduct = (products, filters) => {
    sortProduct(products, filters.sortBy)
    let filtered = products.filter(item => item.title.toLowerCase().includes(filters.searchItems.toLowerCase()))
    let a = document.querySelectorAll(".product")
    a.forEach(item => {
        item.remove()
    })
    filtered = filtered.filter((item) => {
        if(filters.availableProduct){
            return item.exist
        } else {
            return true
        }
    })
    filtered.forEach(item => {
        document.querySelector("tbody").appendChild(createElement(item))
    })
    showSum()
}