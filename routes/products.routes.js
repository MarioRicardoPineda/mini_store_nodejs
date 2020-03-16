const router = require('express').Router()
const { ProductsController } = require('../controller')


router.get('/products', ProductsController.products)
router.get('/products/all', ProductsController.get)

module.exports = router;