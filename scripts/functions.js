const getProducts = () => {
    let productJson = localStorage.getItem("products")
    try {
        return productJson !== null ? JSON.parse(productJson) : []
    } catch (error) {
        return []
    }
}

const saveProducts = (products) => localStorage.setItem("products", JSON.stringify(products))