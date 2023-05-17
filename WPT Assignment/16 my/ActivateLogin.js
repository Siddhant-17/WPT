import { useState } from "react"

export default function ActivateLogin()
{   

   let arr=
    [
        { uname: "xxx" ,password :"123"},
        { uname: "rrr" ,password :"13"},
        { uname: "xeex" ,password :"23"},

    ]

    let[ans,setans]=useState()
    let str=""
    let pass
    function f1(e)
    {
        str=e.target.value
    }
   
    function f2(e)
    {
        pass=e.target.value
    }

    
    function check(e)
     {
  
        for(let i=0;i<arr.length;i++)
        {
            if(str==arr[i].uname && pass==arr[i].password)
                {
                    setans("Login successfully....!!!!")
                    
                    return
                }
            else
                {
                    setans("invalid")
                   
                }
            

        }
    }

    return <div>
              
        <input type="text" placeholder="username"onBlur={f1}></input>
        <input type="password" placeholder="password" onBlur={f2}></input>
        <input type="submit" onClick={check}></input>
        
        <p>{ans}</p>
      
    </div>

}