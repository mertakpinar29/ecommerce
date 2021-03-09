import express from 'express'
import { getProductById, getProducts } from '../controllers/productController.js'
const router = express.Router()

// GET all products
router.route('/').get(getProducts)
// GET single product
router.route('/:id').get(getProductById)

export default router