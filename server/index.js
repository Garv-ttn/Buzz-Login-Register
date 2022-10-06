const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const AuthRoute = require('./routes/AuthRoute')
const cors= require('cors');

dotenv.config();

try{
    mongoose.connect('mongodb://localhost/buzz1',()=>{
    console.log('Connected to Mongodb')
})
}catch(err){
    console.log('Ehllo')
}

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/auth',AuthRoute)



app.listen(5000,()=>{
    console.log('Backend is working!!')
})