import { useState } from "react"
import Child from "./Child1"

export default function Parents1()
{

    let [N1,setN1]=useState(0)
    let [N2,setN2]=useState(0)
    let [Re,setRe]=useState(0)
    
    function ans(a)
    {
        setRe(a)
    }




    return <div>
        <input type="number" onBlur={(e)=>{setN1(e.target.value)}}/>
        <input type="number" onBlur={(e)=>{setN2(e.target.value)}}/>
        <Child  f1={ans} num1={parseInt(N1)} num2={parseInt(N2)}></Child>
        
        <p> result = {Re}</p>
        
    </div>
}