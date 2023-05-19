import express from "express"

let app=express()


app.get("/",(req,res)=>
{
    res.sendFile("C:\\Users\\IET\\Desktop\\SUMEDH_NIKHIL\\WPT\\18 MAY\\login.html")
})
app.use(express.json())
app.post("/login",(req,res)=>
{
    res.send(req.body)
})
app.get("/login",(req,res)=>{
    res.send(req.query)
})



app.listen(5000,()=>
{
    console.log("HWloo 5000");
})