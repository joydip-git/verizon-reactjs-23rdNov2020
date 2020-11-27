import React, { Component } from 'react'
import ProductDetail from '../../components/Product/ProductDetail/ProductDetail'
import { getProductRecords } from '../../services/productService'

export class ProductContainer extends Component {
    state = {
        products: [],
        loading: true,
        error: null,
        productId: 0
    }

    updateState = (data, status, e) => {
        this.setState({
            products: data,
            loading: status,
            error: e
        })
    }
    componentDidMount() {
        getProductRecords()
            .then(
                (response) => {
                    this.updateState(response.data, false, null);
                },
                (reason) => {
                    this.updateState([], false, reason);
                }
            )
            .catch(e => {
                this.updateState([], false, e.message);
            })
    }

    render() {
        let design = null;
        const { loading, error, products, productId } = this.state;

        if (loading) {
            design = <span>Loading...</span>
        } else if (error !== null) {
            design = <span>{error}</span>
        } else if (products.length === 0) {
            design = <span>No recorsd found</span>
        } else {
            design = (
                <>
                    <div style={{ border: '2px solid black' }} onClick={() => this.setState({ productId: products[1].productId })}>
                        <img src={products[1].imageUrl} alt='NA' title={products[1].productName} />
                    </div>
                    <br />
                    <br />
                    <div style={{ border: '2px solid blue' }}>
                        {productId > 0 ? <ProductDetail productId={productId} /> : 'no product to display'}
                    </div>
                </>
            )
        }
        return design;
    }
}

export default ProductContainer
