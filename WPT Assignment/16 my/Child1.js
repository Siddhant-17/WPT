export default function Child({num1,num2,f1})
{
    function calc(e)
    {
        let val=e.target.value
        console.log(val)
        switch(val)
        {
            case "add":
                let add=num1+num2
                f1(add)
                break
            case "sub":
                    let sub=num1-num2
                    f1(sub)
                    break
            case "mul":
                    let mul=num1*num2
                    f1(mul)
                    break
            case "div":
                    let div=num1/num2
                    f1(div)
                    break
            case "power":
                    let power= Math.pow(num1,num2)
                    f1(power)
                    break

            default :
            
        }
    }

    return <div>
        <select onChange={calc}>
                <option value="select">select</option>
                <option value="add">add</option>
                <option value="sub">sub</option>
                <option value="div">div</option>
                <option value="mul">mul</option>
                <option value="power">power</option>
        </select>
    </div>
}