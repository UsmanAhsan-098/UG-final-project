const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('front'));

app.set('port', 3000)
app.use ((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

const port = process.env.PORT || 3000
app.listen(port)