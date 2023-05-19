import { useState } from "react"
import axios from "axios"
export default function EmployeeUpdate()
{
    let Name
    let job
    let [employee,setemployee]=useState({emp:null})
    function firefunc()
    {
        let data={Name:Name,Job:job}
        console.log(data);
        console.log(typeof(data));
        let promise=axios.put("https://reqres.in/api/users/",data).then((res)=>{
        console.log(res)    
        setemployee({emp:res})

        })

    }
    return <>
       Enter employee Name:<input type="text" onBlur={(e)=>{Name=e.target.value}}/>
       Enter employee Job:<input type="text" onBlur={(e)=>{job=e.target.value}}/> 
       <button onClick={firefunc}>Update employee</button>
       <p>{employee.emp==null?"employee not updated":JSON.stringify(employee.emp.data)}</p>
    
    
    
    </>
}