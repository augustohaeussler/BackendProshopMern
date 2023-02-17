import colors from 'colors'
import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'

import connectDB from './config/db.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoute.js'

import { notFound } from './middleware/errorMiddleware.js'
import { erroHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on port ${PORT}`.white.inverse))

// Configurar para traer JSON del body

app.use(express.json())

// Configuacion del la ruta home

app.get('/', (req, res) => {
    res.send('API is running...')
})

// Products routes 

app.use('/api/products', productRoutes)

// Users router 

app.use('/api/users', userRoutes)


// Middleware

app.use(notFound)

app.use(erroHandler)