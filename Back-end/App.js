const express = require('express')
const app = express()
const path = require('path')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDatabse = require('./Config/connectDatabase.js')
dotenv.config({path: path.join(__dirname,'config','config.env')})

const products = require ('./Routes/Product.js');
const orders = require('./Routes/Order.js');

connectDatabse()


app.use(express.json());
app.use(cors())
app.use('/api/v1/', products);
app.use('/api/v1/',orders);

app.listen(process.env.PORT,()=>{
    console.log(`server Listening to ${process.env.PORT} in  ${process.env.NODE_ENV}`)
})