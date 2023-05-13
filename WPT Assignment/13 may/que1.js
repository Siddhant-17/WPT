// 1. Create a route for guestrouter mapped to /atithi as discussed in class
//  add following APIs
// a) Method=GET url="/" show the name of the host as discussed in class
// b) Method = GET url ="/all" show all the names in the list with index 
//  ---- create a new array using arr.map ( (e,index)=>{ return index+"."+e}
// c) Method =POST url ="/addguest" pass a query parameter "guestname" add 
// it to a guest array on server side
// d) Method = GET url="/guestcount show the total count of guests added 
// already
// e) Method = PUT url="/changeguestname" pass two path parameters the first 
// one is the index of the name already in the list and second one is the 
// changedname . Change the name on the specified index
//  f) method = DELETE url="removeguest" accept a path parameter that is the 
// index to be remove . Remove the entry from the guest array


import {Router} from 'express';
let guestrouter=Router()
export default guestrouter
//let guest='siddhant'
// a) Method=GET url="/" show the name of the host as discussed in class
let guest=['sid','sourya','sumya','nikya']
let guestname=[]
guestrouter.get('/atithi',(req,res)=>{
     res.send(`i am ${guest}`)
})


// b) Method = GET url ="/all" show all the names in the list with index 
//  ---- create a new array using arr.map ( (e,index)=>{ return index+"."+e}
guestrouter.get('/all',(req,res)=>{
    let guestname =guest.map((guest)=>{
        return guest
    })

res.send(guestname)
})


// c) Method =POST url ="/addguest" pass a query parameter "guestname" add 
// it to a guest array on server side


guestrouter.post('/addguest/:newguest',(req,res)=>{
    guest.push(req.params.newguest)
    res.send("added")  
})


// d) Method = GET url="/guestcount show the total count of guests added 
// already

guestrouter.get('/guestcount',(req,res)=>{
    res.send(`${guest.length}`)
})


// e) Method = PUT url="/changeguestname" pass two path parameters the first 
// one is the index of the name already in the list and second one is the 
// changedname . Change the name on the specified index

    guestrouter.put('/changeguestname/:index/:changedname',(req,res)=>{
        // let index=req.params.index
        // let changedname=req.params.changedname
        if(index<guest.length)
        {
            guest[index]=changedname
            res.send("changed ")
        }
        {
            res.send("index not exist")
        }
    })


    //f) method = DELETE url="removeguest" accept a path parameter that is the 
    // index to be remove . Remove the entry from the guest array
    
    guestrouter.delete('/removeguest/:index',(req,res)=>{
        let index=req.params.index
        if(index<guest.length)
        {
            guest.splice(index,1)
            res.send("deleted")
        }
        else
        {
            res.send("index not exist")
        }
    })
