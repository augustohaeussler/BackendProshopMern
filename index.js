
import express from 'express'
import products from './data/products.js'
import dotenv from 'dotenv'


dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on port ${PORT}`))

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.get('/api/products', (req, res) =>{
    res.json(products)
})

app.get('/api/products/:id', (req, res) =>{
    const product_id = products.find( p => p._id === req.params.id)
    res.json(product_id)
})