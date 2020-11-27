import React from 'react'
import { Link } from 'react-router-dom'

const DashBoard = () => {
    return (
        <nav className='navbar-default'>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <Link to='/products'>
                <button>Products</button>
            </Link>
            <Link to='/product/add'>
                <button>Add</button>
            </Link>
        </nav>
    )
}

export default DashBoard
