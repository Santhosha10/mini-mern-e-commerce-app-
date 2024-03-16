const express = require('express')
const { getProduct, getsingleProduct } = require('../Controllers/productController')
const router = express.Router()

router.route('/product').get(getProduct)
router.route('/product/:id').get(getsingleProduct)

module.exports = router;