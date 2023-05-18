import express  from "express";
let app = express();

app.get("/",(req, res)=>{
    res.sendFile("C:\\Users\\IET\\Desktop\\New folder\\login.html");
})
app.use(express.json())
app.post("/login",(req, res)=>{
    console.log(req.body);
    res.send(req.body);
})

app.post("/loginJquery",(req, res)=>{
    console.log(req.body);
    res.send(req.body);
})

app.get("/script/login.js",(req, res)=>{
    res.sendFile("C:\\HTML\\2023-05-18\\script\\login.js");
})

app.get("/script/loginJQuery.js",(req, res)=>{
    res.sendFile("C:\\HTML\\2023-05-18\\script\\loginJQuery.js");
})

app.listen(80,()=>{
    console.log("start on 80");
})