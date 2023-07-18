import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let navigate=useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    })
    const json = await response.json()
    console.log(json)
    if (!json.success) {
      alert('Enter a Valid Credentials')
    }
    if (json.success) {
      localStorage.setItem("userEmail",credentials.email)
      localStorage.setItem("authtoken",json.authtoken)
      console.log(localStorage.getItem("authtoken"))
      navigate('/')
    }
  }
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value })
  }
  return (
    <>
    
      <div className="container">
        <form onSubmit={handleSubmit} >

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1">Email Address</label>
            <input name='email' value={credentials.email} onChange={onChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input name='password' value={credentials.password} onChange={onChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to='/createuser' className='m-3 btn btn-danger'>I'm a new User</Link>
        </form>
      </div>
    </>
  )
}

export default Login