import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getProductRecordById } from '../../../services/productService'

const ProductDetail = ({ productId }) => {
    const [productState, setProductState] = useState({ product: null, loading: true, error: null });

    const updateState = (data, status, e) => {
        setProductState(ps => {
            return {
                ...ps,
                product: data,
                loading: status,
                error: e
            }
        })
    }

    useEffect(() => {
        getProductRecordById(productId)
            .then(
                (response) => {
                    updateState(response.data, false, null)
                },
                (reason) => {
                    updateState(null, false, reason)
                }
            )
            .catch((e) => {
                updateState(null, false, e.massage)
            })
    }, [productId])

    let design = null;
    const { loading, error, product } = productState;

    if (loading) {
        design = <span>Loading...</span>
    } else if (error !== null) {
        design = <span>{error}</span>
    } else if (product === null || product === undefined) {
        design = <span>product not found</span>
    } else {
        design = product.productName
    }
    return design;
}

ProductDetail.propTypes = {
    productId: PropTypes.number.isRequired
}

export default ProductDetail
