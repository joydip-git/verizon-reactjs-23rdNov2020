const productDao = require('../dao/productsDao');
const statusMessage = require('../statusMessage');


function getProducts() {
    return productDao.read();
}

function getProductById(pid) {
    let products = productDao.read();
    let found = products.find((p) => p.productId === pid);
    return found;
}

function addProduct(product) {
    let products = productDao.read();
    if (products.length > 0) {
        let found = products.find(px => px.productId === product.productId);
        if (found === undefined) {
            products.push(product);
            let status = productDao.write(products);
            if (!status)
                return new statusMessage.Status("couldn't add product");
            else
                return new statusMessage.Status("added product successfully", getProducts());
        } else
            return new statusMessage.Status("product exists");
    } else
        return new statusMessage.Status("no product record found");
}

function removeProduct(pid) {
    let products = productDao.read();
    if (products.length > 0) {
        if (products.find((p) => p.productId === pid) !== undefined) {
            let filtered = products.filter((p) => p.productId !== pid);
            let status = productDao.write(filtered);
            if (!status)
                return new statusMessage.Status("couldn't remove product");
            else
                return new statusMessage.Status("removed product successfully", getProducts());
        } else
            return new statusMessage.Status("no such record exists");
    } else
        return new statusMessage.Status("no product record found");
}

function updateProduct(product) {
    let products = productDao.read();
    if (products.length > 0) {

        const index = products.findIndex(p => p.productId === product.productId);

        if (index !== -1) {
            products.splice(index, 1, product);
            let status = productDao.write(products);
            if (!status)
                return new statusMessage.Status("couldn't update product");
            else
                return new statusMessage.Status("updated product successfully", getProducts());
        } else return new statusMessage.Status("no such record exists");
    } else
        return new statusMessage.Status("no product record found");
}

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    removeProduct,
    updateProduct
}