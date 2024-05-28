// const express = require('express');
import express from 'express';
import mongoose from 'mongoose';

import { addStudent } from './controllers/StudentControllers.js';


const app = express();
app.use(express.json())
app.get('/', (req, res) => {
    res.send("express server")

}).listen(3000, () => {
    console.log("server started")
})

const connectdatabase=()=> {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/studentCRUD').then(()=>{
            console.log("database connected successfully")
        }).catch((err)=>{
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}
connectdatabase()


app.post('/addStudent',addStudent  )
