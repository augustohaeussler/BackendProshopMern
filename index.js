import colors from 'colors'
import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'

import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'

import { notFound } from './middleware/errorMiddleware.js'
import { erroHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on port ${PORT}`.red.inverse))

app.get('/', (req, res) => {
    res.send('API is running...')
})

// Products routes 

app.use('/api/products', productRoutes)


// Middleware

app.use(notFound)

app.use(erroHandler)