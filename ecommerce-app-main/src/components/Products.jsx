import React from 'react'
import {ApiTopPropducts} from '../componentApi/TopProductsApi'
import Product from './Product'

const Products = () => {
    return <div className='p-5 flex flex-wrap items-center justify-center '>
    {
        ApiTopPropducts.map((product)=>(
            <Product item={product} key={product.id}/>
        ))
    }
</div>;
}

export default Products
