import { useState } from "react"
import Graduate from "./Graduate"


export default function User()
{
    let [Grad,setGrad]=useState(false)
   
    function education(e)
    {
        switch(e.target.value)
        {

            case "Graduate":
                Grad=true
                break

        }
        console.log(Grad)
    }
    


    return <div>
        Username: <input type="text"></input>
        Email :<input type="email"></input>

        <Graduate></Graduate>
        <select onChange={education}>
            <option value="select">select</option>
            <option value="Graduate">Graduate</option>
            <option value="PG">PG</option>
            <option value="UnderGrad">UnderGrad</option>
        </select>
        <p>{Grad}</p>
    </div>


}