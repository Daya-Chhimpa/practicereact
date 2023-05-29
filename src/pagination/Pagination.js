import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import './Pagination.css'


const Pagination = () => {
  const [data,setData]=useState([])
  const [searchItem,setSearchItm]=useState("")
  const[page,setPage]=useState(1)
  const [pageSet,setPageSet]=useState(10)
  const apiresult  = async()=>{
    const res =await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(res.data)
    setData(res.data)

  }
  useEffect(() => {
    apiresult()
  
  }, [])
  const pagehandler =(i)=>[
    setPage(i)
  ]
  const handleSelectChange=(e)=>{
    setPageSet(e.target.value)
  }
  console.log(setData)
  const filterData =data.filter((val)=>{
    if(searchItem==""){
      return val
    }
    else if (val.title.toLowerCase().includes(searchItem.toLowerCase())){
      return val
    }

  })
console.log(searchItem)
  return (
    <div>
      <input placeholder='filter' onChange={(e)=>setSearchItm(e.target.value)}/>
  
<select value={pageSet} onChange={handleSelectChange}>
<option value="10">10</option>
<option value="20">20</option>
<option value="25">25</option>
<option value="50">50</option>
</select>
<Table striped bordered hover variant="dark">
<thead>
  <tr>
    <th>ID</th>
    <th>TITLE</th>

  </tr>
</thead>
<tbody>
{filterData?.slice(page*pageSet-pageSet,page*pageSet).map((item,i)=>{
  return(
    <tr>
    <td>{item.id}</td>
    <td>{item.title}</td> 
  </tr>
  )
})}  
</tbody>
</Table>
   
    {
      data.length>0?
      <div className='pagination_div'>

{page==1?"":<span className='back_btn'onClick={()=>setPage(page-1)}>{"<"}</span>}
{[...Array(Math.ceil(filterData.length/pageSet))].map((val,i)=>{
  return(
    <span className={page==i+1?"active_btn":'btn_pagi'}
    onClick={()=>pagehandler(i+1)}>{i+1}</span>
  )
})}
{page==data.length/pageSet!=0?"":<span className='next_btn' 
onClick={()=>setPage(page+1)}>{">"}</span>}

    </div>:""
    }
    
        
    </div>
  )
}

export default Pagination