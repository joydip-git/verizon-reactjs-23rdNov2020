const productBo = require('../bo/productBo');
const statusMessage = require('../statusMessage');

function fetchProducts(req, res) {
    let data = productBo.getProducts();

    if (data.length > 0)
        res.end(JSON.stringify(data));
    else
        res.end(JSON.stringify(new statusMessage.Status("no product record found")));
}

function fetchProduct(req, res) {
    let pid = parseInt(req.params.id);
    console.log(pid)
    let found = productBo.getProductById(pid);

    if (found)
        res.end(JSON.stringify(found));
    else
        res.end(JSON.stringify(new statusMessage.Status("no such record exists")));
}

function insertProduct(req, res) {
    let p = req.body;
    console.log(p)
    let status = productBo.addProduct(p);
    res.end(JSON.stringify(status));
}

function deleteProduct(req, res) {
    let pid = parseInt(req.params.id);
    let status = productBo.removeProduct(pid);
    res.end(JSON.stringify(status));
}

function modifyProduct(req, res) {
    let p = req.body;
    let status = productBo.updateProduct(p);
    res.end(JSON.stringify(status));
}

module.exports = {
    fetchProduct,
    fetchProducts,
    insertProduct,
    deleteProduct,
    modifyProduct
};