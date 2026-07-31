import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get("/",(req,res)=>{
    console.log("Received");
    res.send("Hello Akash It is Working.");
})

app.listen(80 , ()=>{
    console.log("Server is Running");
})