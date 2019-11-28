const router = require('express').Router()

const CaptionController = require('../controllers/CaptionController')

router.post('/detect',CaptionController.detectLanguage)

module.exports = router