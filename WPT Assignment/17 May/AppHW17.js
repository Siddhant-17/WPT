import Graduation from "./Graduation"
import User from "./HW5"
import { useState } from "react"
import Postgrad from "./Postgrad"
import Undergrad from "./Undergrad"

export default function AppHW17()
{
    let [Graduate,setgrad]=useState(false)
    let[Post,setPg]=useState(false)
    let[Ug,setUg]=useState(false)
    
    function f1(e)
    {     
        if(e.target.value==="Graduate")
        {
            setgrad(true)
            setPg(false)
            setUg(false)
        }
        
        if(e.target.value==="Post")
        {
            setPg(true)
            setgrad(false)
            setUg(false)
        }
        if(e.target.value==="UG")
         {
             setUg(true)
             setPg(false)
             setgrad(false)
         }
    }
return <div >
<User ></User>
{/* <Graduation></Graduation> */}
 
<select onChange={f1} id="s1">
<option >select</option>
<option value="Graduate" name="choice">Graduate</option>
<option value="Post" name="choice">Post</option>
<option value="UG" name="choice">Under Grad</option>


</select>

{Graduate?<Graduation></Graduation>:""} 
{Post?<Postgrad></Postgrad>:""}
{Ug?<Undergrad></Undergrad>:""}


</div>
 }

