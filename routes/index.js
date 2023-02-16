const express = require('express')
const router = express.Router()

// Import your API routes here
const userRoutes = require('./userRoutes')
const productRoutes = require('./productRoutes')
const orderRoutes = require('./orderRoutes')
const cartRoutes = require('./cartRoutes')

// Register your API routes here
router.use('/api/product', productRoutes)
router.use('/api/user', userRoutes)
router.use('/api/order', orderRoutes)
router.use('/api/cart', cartRoutes)

module.exports = router
