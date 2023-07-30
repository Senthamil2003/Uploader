import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
export default function SIgnup() {
    const [name,sname]=useState('')
    const [mail,smail]=useState('')
    const [pass,spass]=useState('')
    const navigate = useNavigate();
    function sub(e){
        e.preventDefault();
        console.log(name,mail,pass)
    }
    localStorage.setItem("ewwfe","ewfe");
    function signup(){

       if(name.length!==0 && mail.length!==0 && pass.length!==0){
        console.log("ji")
        axios
        .post("http://localhost:3002/signup", {
          Name:name,
          Mail:mail,
          Pass:pass

        })
        .then(function (response){
          console.log(response.data)
             navigate("/login")
            
      }).catch(function (error) {
        alert("NError")
        });
        sname("")
        smail("")
        spass("")
       }
       else{
        alert("Enter valid data")
       }
       
    }
   

  return (
    <div>
        <form action='' method='post' onSubmit={sub}>
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>sname(e.target.value)} required></input>
            <br></br>
            <label>Mail</label>
            <input type="text" value={mail} onChange={(e)=>smail(e.target.value)}></input>
            <br></br>
            <label>password</label>
            <input type="password" value={pass} onChange={(e)=>spass(e.target.value)}></input>
            <br></br>
            <button type='submit' onClick={signup}>Submit</button>
        </form>
        
    </div>
  )
}
