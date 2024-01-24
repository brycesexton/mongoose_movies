const express = require('express')
const router = express.Router()
const performerCtrl = require('../controllers/performersController')

router.post('/', performerCtrl.create)
router.get('/', performerCtrl.index)




module.exports = router