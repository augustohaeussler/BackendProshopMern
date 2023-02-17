import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc Fetch all products
// @route GET /api/products
// @acces Public

export const getProducts = asyncHandler( async (req, res) =>{
    const product = await Product.find({})
    res.json(product)
} )

// @desc Fetch product ID
// @route GET /api/products/:id
// @acces Public

export const getProductsDetail = asyncHandler( async (req, res) =>{
    
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
  
    } else  {
        res.status(404)
        throw new Error('Product not found')
    }


    
} )

