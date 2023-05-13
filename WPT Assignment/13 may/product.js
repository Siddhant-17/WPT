import express from 'express';
let app=express()

import productrouter from './que2.js'
app.use('/',productrouter)



app.listen(2001,(req,res)=>{
    console.log("listen 2001")
})