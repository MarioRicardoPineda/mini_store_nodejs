const router = require('express').Router()
const { DescController } = require('../controller')


router.get('/descProduct', DescController.desc)
// router.get('/descProduct/:id', DescController.get)

module.exports = router;
