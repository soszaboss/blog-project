import express from "express";

const app=express();
const PORT=3000;
app.get("/", (req, res)=>{
    res.send("Hello World!")
});
app.listen(3000,()=>{
    console.log(`my app is running on url http://localhost:${PORT}`);
});
