const router = require('express').Router()
const pictureController = require('../controllers/PictureController')


router.post('/',pictureController.getData)
router.post('/translate',pictureController.translateData)

module.exports = router