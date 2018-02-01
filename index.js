var express=require("express");
var app=express();

app.get("/",(req,res,next)=>{
    res.send("Hello World new another change");
})
app.listen(3000,()=>{
    console.log("server started at 3000");
})