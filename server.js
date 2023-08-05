const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()


app.use(express.json())

//router
app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/', (req,res) => {
    res.send('Hello Blog, my name is swap')
}) 

app.post('/products', async(req, res) => {
    try {
        const products = await Product.create(req.body)
        res.status(200).json(products);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
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
