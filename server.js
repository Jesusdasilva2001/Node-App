const express = require('express')
const mongoose = require('mongoose')
const app = express()

//router
app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/', (req,res) => {
    res.send('Hello Blog, my name is swap')
}) 



mongoose.set("strictQuery", false)
mongoose.
connect('mongodb+srv://jesustamba2017:J5XFer2C-wuSR-x@swapadminapi.l9vomkz.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, () => {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})
