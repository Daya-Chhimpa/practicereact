import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pagination2.css'

const Pagination2 = () => {
    const [data,setData]=useState([])
    const [page,setPage]=useState(1)
    const [dynamicpage,setPageDynamic]=useState(10)
    

    const ApiData =async()=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log("data",res.data)
        setData(res.data)
    }
    useEffect(() => {
        ApiData()
    }, [])
    const pagesethandeler =(i)=>{
        setPage(i)
    }
    const dynamicpageHandler =(e)=>{
setPageDynamic(e.target.value)
    }
    
  return (
    <div>
    <select onChange={dynamicpageHandler} value={dynamicpage}>
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="25">25</option>

    </select>
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
       
      </tr>
    </thead>
    <tbody>
    {data?.slice(page*dynamicpage-dynamicpage,page*dynamicpage).map((val,i)=>{
return(
    <tr>
        <td>{val.id}</td>
        <td>{val.title}</td>
      
      </tr>
)
    })}
      
      
     
    </tbody>
  </Table>
  <ul style={{display:"flex",listStyle:"none",cursor:"pointer"}}>
  
  {page<=1?"":<li className='back_btn' onClick={()=>setPage(page-1)}>{"<"}</li>}  {[...Array(data.length/dynamicpage)].map((val,i)=>{
    return(
        <li onClick={()=>pagesethandeler(i+1)} className={i+1==page?"active_btn":"'page_btn'"}>{i+1}</li>
    )
  })}
{page==data.length/dynamicpage?"":  <li className='next_btn' onClick={()=>setPage(page+1)}>{">"}</li>
}
  </ul>
    </div>
  )
}

export default Pagination2