const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require("cors");

const userRoute=require('./services/routes/user')
const taskRoute=require('./services/routes/task')
const wallet=require('./services/routes/wallet')

const db=require('./services/database/connection');
const bodyparser=require('body-parser');
const cookie=require('cookie-parser');
var session = require('express-session');




const app = express();

// Set up Global configuration access
dotenv.config();

app.use(cors({origin:"*",methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
credentials: true,
exposedHeaders: ['x-auth-token']}));
app.use(express.json())
dotenv.config({path:'config.env'}
)

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*")
    return next()
  });

app.use(bodyparser.urlencoded({extended:true}))


let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server is up and running on ${PORT} ...`);
});


	

//routes

app.use('/',userRoute);
app.use('/',taskRoute);
app.use('/',wallet);




