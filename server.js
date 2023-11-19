const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();



connectDb();
const app = express();
app.use(express.json());


const port = process.env.port || 5000;

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.use(errorHandler);
app.use('/api/todos',require('./routes/todosRoutes'));

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})