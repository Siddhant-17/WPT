export default function Showperson({id,first_name,last_name,email})
{




    return <div>
        <p>{id}</p>
        <p>name:{first_name+" "+last_name}</p>
        <p>email={email}</p>
    
    
    </div>
}