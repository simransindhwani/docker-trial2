const express = require("express");

const app = express();

const port = 3000 || process.env.PORT

app.get("/api/students",(req,res)=>{
    res.send("OK");
})


app.listen(port, (req,res)=>{
    console.log("Running at port 3000");
})