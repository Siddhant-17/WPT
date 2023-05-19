import { useState } from "react"

export default function Fruit()
{
    let [arr,setarr]=useState([])
    let temp=[]
    function handler(e)
    {
        arr.push(<option>{e.target.value}</option>)
        temp=[...arr]
        setarr(temp)
    }

return <>
    Enter Fruit:<input type="text" onBlur={handler} placeholder="frit"/>
    <select>{arr}</select>
    </>


}