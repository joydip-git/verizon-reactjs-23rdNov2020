import * as Actions from '../actions/productActions'
import * as ProductService from '../../services/productService'

export const fetchProductByIdAsyncCallbackCreator = (productId) => {

    const fetchProductByIdAsync = (dispatch) => {
        const initiateAction = Actions.getProductByIdInitiateActionCreator();
        dispatch(initiateAction)

        ProductService.getProductRecordById(productId)
            .then(
                (resp) => {
                    const successAction = Actions.getProductByIdSuccessActionCreator(resp.data);
                    dispatch(successAction)
                },
                (resaon) => {
                    const failureAction = Actions.getProductByIdFailureActionCreator(resaon);
                    dispatch(failureAction)
                }
            )
            .catch(
                (e) => {
                    const errorAction = Actions.getProductByIdFailureActionCreator(e.message);
                    dispatch(errorAction)
                }
            )
    }

    return fetchProductByIdAsync;
}

export const fetchProductsAsyncCallbackCreator = () => {

    const fetchProductsAsync = (dispatch) => {
        const initiateAction = Actions.getProductsInitiateActionCreator();
        dispatch(initiateAction)

        ProductService.getProductRecords()
            .then(
                (resp) => {
                    const successAction = Actions.getProductsSuccessActionCreator(resp.data);
                    dispatch(successAction)
                },
                (resaon) => {
                    const failureAction = Actions.getProductsFailureActionCreator(resaon);
                    dispatch(failureAction)
                }
            )
            .catch(
                (e) => {
                    const errorAction = Actions.getProductsFailureActionCreator(e.message);
                    dispatch(errorAction)
                }
            )
    }

    return fetchProductsAsync;
}