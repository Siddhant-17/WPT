import React, { useState } from "react";



export default function Graduation(){
let [str,setstr]=useState("")
let [final,seFinal]=useState("")
let[year,setyear]=useState("")
let [uni,setUni]=useState("")
function f1()
{

}

return <div id="id1">

    degree:<input type="text" id="i2" onBlur={(e)=>{setstr(e.target.value)}}/>
    <br/>
    year:<input type="number" id="i2" onBlur={(e)=>{setyear(e.target.value)}}/>
    <br/>
    Final year score<input type="number" id="i2"  onBlur={(e)=>{seFinal(e.target.value)}}/>
    <br/>
    University <input type="text" id="i2" onBlur={(e)=>{setUni(e.target.value)}}/>
    
    
    
    <p>{str}</p>
    <p>{final}</p>
    <p>{year}</p>
    <p>{uni}</p>

    
    
</div>



}