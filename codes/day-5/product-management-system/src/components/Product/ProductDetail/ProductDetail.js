import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { fetchProductByIdAsyncCallbackCreator } from '../../../redux/async-callbacks/productAsyncCallbacks'

// const ProductDetail = ({history, location, match}) => {
const ProductDetail = () => {
    //console.log(match.params.id)
    const productId = parseInt(useParams().id)
    const history = useHistory();

    const product = useSelector((combinedState) => combinedState.single.product)
    const error = useSelector((combinedState) => combinedState.single.error)
    const loading = useSelector((combinedState) => combinedState.single.loading)

    const dispatch = useDispatch();

    useEffect(() => {
        const callback = fetchProductByIdAsyncCallbackCreator(productId);
        dispatch(callback)
    }, [])

    let design = null;

    if (loading) {
        design = <span>Loading...</span>
    } else if (error !== null) {
        design = <span>{error}</span>
    } else if (product === null || product === undefined) {
        design = <span>product not found</span>
    } else {
        design = (
            <div>
                Name:&nbsp;{product.productName}
                <br />
                <br />
                <button className='btn btn-primary' onClick={() => history.push('/products')}>Back</button>
            </div>
        )
    }
    return design;

}

export default ProductDetail
