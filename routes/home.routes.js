const router = require('express').Router()
const { HomeController } = require('../controller')

router.get('/', HomeController.index)

module.exports = router;