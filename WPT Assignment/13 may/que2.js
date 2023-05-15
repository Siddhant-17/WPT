// 2) Write a route productrouter mapped to path /product 
// create an array of products
// "productId" :1
// "productName" : "AAA",
//  "costPerUnit": 30
//  "units": 2
// }
// a) Method =POST url=/add pass a request body { 
// Add this product Info the products array
// b) Method = GET url=/getInfo pass the product Id as query parameter
// Client will receive the entire product object for that ID
//  c) Method = GET url=/all show all array
//  d) method= PUT url=/changecost accept product Id and cost from user as path 
// parameters and change the cost for that product Id 
//  e) method= DELETE url=/remove accept a product Id as path parameter and 
// remove it from array
import express from 'express'
import {Router} from 'express'
let productrouter=Router()
export default productrouter

let products=[{
    "productId" :1,
 "productName" : "AAA",
  "costPerUnit": 30,
  "units": 2
}
]

productrouter.use(express.json())

// a) Method =POST url=/add pass a request body { 
// Add this product Info the products array
productrouter.post('/add',(req,res)=>{
    const newproduct=req.body
    product.push(newproduct)
    res.send("added")
})


// b) Method = GET url=/getInfo pass the product Id as query parameter
// Client will receive the entire product object for that I
productrouter.get('/getInfo', (req, res) => {
    const prodId = req.query.productId;

    for(let i=0;i<products.length;i++)
    {
        if(products[i].productId==prodId)
        {
          res.send(products[i])
        }
       
    }
    
      res.send("not found")
  })
  

//c) Method = GET url=/all show all array
productrouter.get('/all',(req,res)=>{
    res.send(products)
})

//  d) method= PUT url=/changecost accept product Id and cost from user as path 
// parameters and change the cost for that product Id 
productrouter.put('/changecost/:id/:cost',(req,res)=>{
    let prodId=req.params.id
     let cost=req.params.cost
    
      if(products.length===0)
    {
      res.send("not found")
    }
     else{
      for(let i=0;i<products.length;i++)
      {
        if(prodId==products[i].productId)
        {
          products[i].costPerUnit=cost;
          res.send("updated")
        }
        else
    {
      res.send("not found")
    }
     } 
    }
})



//e) method= DELETE url=/remove accept a product Id as path parameter and 
// remove it from array

productrouter.delete('/remove/:id',(req,res)=>{
  let prodId=req.params.id
  if(products.length===0)
  {
    res.send("not found")
  }
  else{
  for(let i=0;i<products.length;i++)
  {
    if(products[i].productId==prodId)
    {
      products.splice(i,1)
      res.send("deleted")
    }
    else
    {
      res.send("not found")
    }
  }
}
})
