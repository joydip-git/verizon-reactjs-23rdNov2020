import React from 'react'
import PropTypes from 'prop-types'
import ProductRow from './ProductRow/ProductRow'

const ProductList = ({ products }) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>Image</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Rating</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(p => {
                        return <ProductRow product={p} key={p.id} />
                    })
                }
            </tbody>
        </table>
    )
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired
}

export default ProductList
