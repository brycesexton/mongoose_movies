const express = require('express')
const router = express.Router()
const movieCtrl = require('../controllers/moviesController')

router.post('/', movieCtrl.create)
router.get('/', movieCtrl.index)
router.get('/:id', movieCtrl.show)
router.get('/:movieId/performers/performerId', movieCtrl.addPerformer)




module.exports = router