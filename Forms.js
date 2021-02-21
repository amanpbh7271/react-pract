import React from 'react'

export default class Forms extends React.Component
{
    constructor()
    {
        super()
        this.state={
                     
            user:null,
            psd:null
        }
    }

    submit()
    {
      //  console.warn(this.state)
      
      //alert("submiision scuusfull")
      alert(this.state.user +" your login sucessfully")

    }
    render()
    {
        return (
                 <div>
                     <form >                 
                            <h1>Login Form</h1>
                    <input type="text" name="user"  onChange={(e)=>{this.setState({user:e.target.value})} }placeholder="id"></input>
                    <br/>
                     
                    <br/>
                    <input type="text" name="psd" onChange={(e)=>{this.setState({psd:e.target.value})}} placeholder="psd"></input>
                    <br/>
                    
                    <br/>
                    <button onClick={()=>this.submit()} >Submit</button>

                    </form>

                 </div>


        )
    }
}