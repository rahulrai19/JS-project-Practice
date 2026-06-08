// const express = require('express');
// const cors = require("cors");
// const foods = require('./data');
// const app = express();
import express from "express";
import cors from "cors";
import foods from './data.js';
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/foods",(req,res)=>{
    res.status(200).json(foods);
});

app.listen(5000,()=>{
    console.log("server running on port 5000");
});