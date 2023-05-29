import React, { forwardRef, useImperativeHandle, useState } from "react";

const UseReffun =((props,ref)=>{
    const [count,setCount]=useState(0)
    useImperativeHandle(ref,()=>({
        countFun(){
            alert("helo")
            setCount(count+1)
        }  
    }))
    
    
    return(
        <div>

            <h1>{count}</h1>
            {/* <button onClick={countFun}>Updatebychild</button> */}


        </div>
    )
})

export default forwardRef(UseReffun) ;