import  express  from "express";
let app=express()
import path from 'path'

app.set("views","./views")
app.set("view engine","hbs")



app.get('/',(req,res)=>{
    res.render("C:\\Users\\SID_17\\Downloads\\project\\14 may\\14 may\\views\\login.hbs")
})

app.get('/welcome',(req,res)=>{
    res.render("C:\\Users\\SID_17\\Downloads\\project\\14 may\\14 may\\views\\welcome.hbs")
})

import bodyparser from 'body-parser'
app.use(bodyparser.urlencoded({extended:true}))


app.get('/calculator',(req,res)=>{
    res.render("C:\\Users\\SID_17\\Downloads\\project\\14 may\\14 may\\views\\calc.hbs")
})

app.post('/add',(req,res)=>{
    let n1=req.body.num1
    let n2=req.body.num2
    let n3=req.body.num3
    
    switch(n3){

        case '+':
        let sum=parseInt(n1)+parseInt(n2)
        res.render("calc",{result:sum})
        break
        case '-':
        let sub=parseInt(n1)-parseInt(n2)
        res.render("calc",{result:sub})
        break
        case '*':
        let mul=parseInt(n1)*parseInt(n2)
        res.render("calc",{result:mul})
        break
        case '/':
        let div=parseInt(n1)/parseInt(n2)
        res.render("calc",{result:div})
        break

    }
})
app.get("/maths",(req,res)=>{
    res.render("tables")
})

app.post("/generatetable",(req,res)=>{
    let n1= req.body.num1

    let arr=[]
    for(let i=0;i<=10;i++)
    {
        arr[i]=`${n1}*${i}=${n1*i}`
    }
    res.render("tables",{rowdata:arr})

})



app.listen(5001,(req,res)=>{
    console.log("listen port 5001")
})