const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productCtrl = require('./controller/productController');


const baseUrl = '/productservice';
let app = express();
app.use(cors());
app.use(bodyParser.json());

app.route(baseUrl)
    .get(productCtrl.fetchProducts)
    .post(productCtrl.insertProduct)
    .put(productCtrl.modifyProduct);

app.route(baseUrl + '/:id')
    .delete(productCtrl.deleteProduct)
    .get(productCtrl.fetchProduct);


let server = app.listen(8081, function () {     var port = server.address().port;
    console.log(`Product Service is running at http://127.0.0.1:${port}${baseUrl}`);
})