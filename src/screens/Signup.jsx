import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit=async(e)=>{
 e.preventDefault()
 const response=await fetch("http://localhost:5000/api/createuser",{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
 })
 const json=await response.json()
 console.log(json)
 if(!json.success){
    alert('Enter a Valid Credentials')
 }
    }
    const onChange=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
    <>
    <div className="container">
        <form onSubmit={handleSubmit} >
        <div className="mb-3">
    <label htmlFor="name">Name</label>
    <input name='name' value={credentials.name} onChange={onChange}  type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1">Email Address</label>
    <input name='email' value={credentials.email} onChange={onChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input name='password' value={credentials.password} onChange={onChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1">Address</label>
    <input name='geolocation' value={credentials.geolocation} onChange={onChange} type="text" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to='/login' className='m-3 btn btn-danger'>Already a User</Link>
</form>
</div>
    </>
  )
}

export default Signup