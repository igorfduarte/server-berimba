const express = require('express')
const userRoute = require ('./routes/user.router')

const app = express()

app.use (express.json())

app.use('/user',userRoute)

app.listen(4000, console.log('Server is running...'))