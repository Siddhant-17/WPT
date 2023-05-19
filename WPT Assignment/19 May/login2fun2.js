function fun2(){
        
    let n=document.getElementById("n1").value
        let obj={n1:n}
    let http =new XMLHttpRequest()
    http.onload =((res)=>{
        let jsonobj =JSON.parse(http.response)
         document.getElementById("p2").innerText=`${jsonobj.sqr}`
    })
    http.open("POST","sqr")
    http.setRequestHeader("Content-Type","Application/json")
    http.send(JSON.stringify(obj))
}

// app.post("/sqr",(req,res)=>{
//     let num1=(req.body.n1)
//     let sqr=num1*num1
//     console.log(sqr);
//     res.send({sqr})
// })