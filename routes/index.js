const router = require('express').Router()
const userRoute = require('./user')
const captionRoute = require('./caption')
const wordRoute = require('./word')

router.use('/users', userRoute)
router.use('/caption', captionRoute)
router.use('/word', wordRoute)

module.exports = router