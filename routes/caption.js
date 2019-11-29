const router = require('express').Router()

const CaptionController = require('../controllers/CaptionController')

router.post('/detect',CaptionController.detectLanguage)
// router.post('/translate', CaptionController.translateLanguange)

module.exports = router