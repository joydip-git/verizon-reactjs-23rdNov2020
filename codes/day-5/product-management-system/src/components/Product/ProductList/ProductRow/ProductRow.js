import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProductRow = ({ product }) => {
    return (
        <tr>
            <td>
                <Link to={'/products/' + product.productId}>
                    <div>
                        <img src={product.imageUrl} alt='NA' title={product.productName} style={{ width: '50px', margin: '2px' }} />
                    </div>
                </Link>
            </td>
            <td>
                <Link to={'/product/update/' + product.productId}>
                    {product.productName}
                </Link>
            </td>
            <td>
                {product.price}
            </td>
            <td>
                {product.starRating}
            </td>
            <td>
                <button className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    )
}

ProductRow.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductRow
