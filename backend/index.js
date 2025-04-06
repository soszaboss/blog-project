import bodyParser from "body-parser";
import { DB } from "./db.js";

import express from "express";


const app=express();
app.use(bodyParser.json());

const PORT=3000;

app.get("/", (req, res)=>{
    res.status(200)
    res.send("Hello World!")
});

app.listen(3000,(error)=>{
    if(error){
        console.log("Error while starting the server",error);
        return;
    }
    console.log(`my app is running on url http://localhost:${PORT}`);
});
