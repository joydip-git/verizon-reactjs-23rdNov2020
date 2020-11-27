import Home from '../components/Common/Home/Home'
import ProductContainer from '../containers/Product/ProductContainer'
import ProductDetail from '../components/Product/ProductDetail/ProductDetail'
import UpdateProduct from '../components/Product/UpdateProduct/UpdateProduct'
import AddProduct from '../components/Product/AddProduct/AddProduct'
import PageNotFound from '../components/Common/PageNotFound/PageNotFound'

export const productRoutes = [
    {
        id: 1,
        url: '/',
        componentName: Home
    },
    {
        id: 2,
        url: '/home',
        componentName: Home
    },
    {
        id: 3,
        url: '/products',
        componentName: ProductContainer
    },
    {
        id: 4,
        url: '/products/:id',
        componentName: ProductDetail
    },
    {
        id: 5,
        url: '/product/update/:id',
        componentName: UpdateProduct
    },
    {
        id: 6,
        url: '/product/add',
        componentName: AddProduct
    },
    {
        id: 7,
        url: '*',
        componentName: PageNotFound
    }
]