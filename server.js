const dotenv = require("dotenv");
const express = require("express");
const mongodb = require("mongodb");

dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

const uri = process.env.DATABASE_URI;

app.get('/', function (request, response) {
   //Database name See_The_Future
   // collection name users 
})