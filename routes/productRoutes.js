import express from 'express'


import { getProducts, getProductsDetail } from '../controllers/productController.js'

const router = express.Router()



router.route('/').get(getProducts)

router.route('/:id').get(getProductsDetail)



export default router



