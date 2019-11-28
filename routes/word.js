const router = require('express').Router()

const wordController = require('../controllers/WordController')

router.post('/',wordController.getEmotion)

module.exports = router