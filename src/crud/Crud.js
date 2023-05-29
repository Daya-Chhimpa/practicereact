import React, { useState } from "react";
import { cloneUniformsGroups } from "three";

const Crud =()=>{
    const [list,setList]=useState()
    const[data,setData]=useState([
    {
        Name:"",
        Email:"",
        Number:""
    }
    ])
    console.log("data",data)

const onchangehandeler =(e)=>{
setData((pre)=>{
    return{...pre ,[e.target.name]:e.target.value}
})
}
const savlist =(e)=>{
    setList(...data)
    setData("")
}
console.log("list,list",list)
    return(
        <div>
            <label>Name</label><input name="Name" value={data.Name} onChange={(e)=>onchangehandeler(e)} /><br/>
            <label>Email</label><input  name="Email" value={data.Email} onChange={(e)=>onchangehandeler(e)} /><br/>
            <label>Number</label><input  name="Number" value={data.Number} onChange={(e)=>onchangehandeler(e)} /><br/>
            <button onClick={savlist}>Submit</button>
            <ul>
            {
                list?.map((val,i)=>{
                    return(
                        <div>
                        <li>{val.Name}</li>
                        <li>{val.Email}</li>
                        <li>{val.Number}</li>
                        </div>
                        
                    )
                })
            }
            </ul>

        </div>
    )
}
export default Crud;