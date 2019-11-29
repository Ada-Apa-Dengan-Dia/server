const router = require('express').Router()
const userRoute = require('./user')
const pictureRoute = require('./picture')

router.use('/users', userRoute)



router.use('/pictures',pictureRoute)

module.exports = router