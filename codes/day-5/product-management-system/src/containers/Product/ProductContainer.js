import React, { Component } from 'react'
import { connect } from 'react-redux';
import ProductList from '../../components/Product/ProductList/ProductList';
import { fetchProductsAsyncCallbackCreator } from '../../redux/async-callbacks/productAsyncCallbacks'

export class ProductContainer extends Component {

    componentDidMount() {
        this.props.getProducts()
    }

    render() {
        let design = null;
        const { loading, error, products } = this.props;

        if (loading) {
            design = <span>Loading...</span>
        } else if (error !== null) {
            design = <span>{error}</span>
        } else if (products.length === 0) {
            design = <span>No recorsd found</span>
        } else {
            design = (
                <ProductList products={products} />
            )
        }
        return design;
    }
}

const mapStateToProps = (combinedState) => {
    return {
        products: combinedState.all.products,
        error: combinedState.all.error,
        loading: combinedState.all.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => {
            console.log(dispatch)
            const callback = fetchProductsAsyncCallbackCreator()
            dispatch(callback)
        }
    }
}
// const connector = connect(mapStateToProps, mapDispatchToProps);
// export default connector(ProductContainer);
export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)