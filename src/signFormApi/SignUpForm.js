import React, { useState } from 'react'
import axios from 'axios'
import './signup.css'

const SignUpForm = () => {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    console.log("formdata",formData)
    const onchangeHandler =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})

    }
    const submitHandle = async()=>{
        console.log("hhh")
        try{
            const res = await axios.post('https://api.publicapis.org/entries',formData)

        }
        catch (error){
console.log("error",error)

        }

    }
  return (
    <div className='maindiv'>
    <form>
    <div className="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" value={formData.name} name="name" onChange={(e)=>onchangeHandler(e)}  />
    </div>
    <div className="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={(e)=>onchangeHandler(e)} />
    </div>
    <div className="form-group">
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" value={formData.password} onChange={(e)=>onchangeHandler(e)}/>
    </div>
    <div className="form-group">
      <label for="confirm-password">Confirm Password:</label>
      <input type="password" id="confirm-password" name="confirmPassword" value={formData.confirmPassword} onChange={(e)=>onchangeHandler(e)}/>
    </div>
    <button type="submit" onClick={submitHandle}>Sign Up</button>
  </form>
    </div>
  )
}

export default SignUpForm