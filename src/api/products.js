import instance  from "./connect";

const getProducts = () => {
    return instance.get("/products");
}

const createProduct = (product) => {
    return instance.post(`/products`, product)
}
const editProduct = (product) => {
    return instance.put(`/products/${product.id}`, product);
}

const deleteProduct = (id) => {
    return instance.delete(`/products/${id}`, id)
}

const getProduct = (id) => {
    return instance.get( `/products/${id}`)
}

export {getProducts, getProduct, createProduct, editProduct, deleteProduct }