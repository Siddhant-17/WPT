import express from 'express';
let app=express()

import guestrouter from "./que1.js"
app.use("/",guestrouter)

app.listen(1001,(req,res)=>{
    console.log("listen 1001")
})