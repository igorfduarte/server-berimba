const express = require('express')
const User = require ('../controllers/user.controller')
const router = express.Router()


router.post('/login', User.loginUser)

router.get('/get-user/:id', User.getUser)


module.exports = router