import { useState } from "react"
import axios from "axios"
import Showperson from "./Showemployee"

export default function Maincomponent()
{
    let [arr,setarr]=useState([])
    let id=0




    function Display()
    {
        return arr.map((person)=>{
            return < Showperson id={person.id}
            first_name={person.first_name}
            last_name={person.last_name}
            email={person.email}></Showperson>
        }) 
        
    }

    function handler()
    {
        let p=axios.get(`https://reqres.in/api/users/${id}`).then((res)=>{
            let obj=res.data.data
            console.log(obj)
            arr.push(obj)
            setarr([...arr])
            
        })
      p.catch(()=>{
        console.error("not")
      })
    }

    return <>
        Enter Id:<input type="number" placeholder="Id" onBlur={(e)=>{id=e.target.value}}></input>
        <button onClick={handler}></button>
        <p id="p1"></p>
        {Display()}
    </>
}