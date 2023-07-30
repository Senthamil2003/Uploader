import {React,useState}  from 'react'
import axios from "axios"
axios.defaults.withCredentials = true;

export default function Login() {
  const [name,sname]=useState('')
const [pass,spass]=useState('')
function sub(e){
  e.preventDefault();
 
}
localStorage.setItem('Name', 'Rahul');

function login(){
  
  if(name.length!==0 && pass.length!==0){
   
   axios.get("http://localhost:3002/login",{
    params: {
      Name:name,
      Pass:pass
    }
  }).then((response) => {
    console.log(response.data)
});
  }
  
}
function hi(){
  axios.get("http://localhost:3002/hi").then((response) => {
    console.log(response.data)

});
console.log(document.cookie);
}

  return (
    <div>
       <form action='' method='post' onSubmit={sub}>
          <label>Name</label>
          <input type="text" value={name} onChange={(e)=>sname(e.target.value)} required></input>
          <br></br>
          <label>password</label>  
          <input type="password" value={pass} onChange={(e)=>spass(e.target.value)}></input>
          <br></br>
          <button type='submit' onClick={login}>Submit</button>
          <button type='submit' onClick={hi}>HI</button>
          </form>
    </div>
  )
}
