import { Component } from "react";

export default class Fruits extends Component
{
    constructor()
    {
        super()
        this.State={arr:["mango","apple"]}
    }
    hander=(e)=>{

        let Fruitname=e.target.value
        let temp=[...this.state.arr]
        temp.push(Fruitname)
        console.log(this.state)
        this.setState({arr:temp})

    }
    render()
    {
        return <div>
            add:Fruit<input type="text" onBlur={this.hander}></input>
            <br></br>
            <p>arr={this.state.arr}</p>
        </div>
    }


}