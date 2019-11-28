const router = require('express').Router()
const userRoute = require('./user')
const wordRoute = require('./word')

router.use('/users', userRoute)
router.use('/word',wordRoute)

module.exports = router