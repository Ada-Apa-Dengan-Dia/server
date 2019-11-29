const router = require('express').Router()
const userRoute = require('./user')
const captionRoute = require('./caption')
const wordRoute = require('./word')
const pictureRoute = require('./picture')

router.use('/users', userRoute)
router.use('/caption', captionRoute)
router.use('/word', wordRoute)
router.use('/pictures',pictureRoute)

module.exports = router