import { useState } from "react";

 const InputBox =()=>{
    const [inputs, setInputs] = useState([{name:'',email:''}]);
    console.log("inputs",inputs)

    const addInput = () => {
      setInputs([...inputs,{name:'',email:''} ]);
    };

    const onchangeHandler =()=>{

    }
    return(
<div>
    {
        inputs?.map((val)=>{
            return(
                <div>
                <input type="text" onChange={(e)=>onchangeHandler(e.target.value)}></input>
                <input type="text" onChange={(e)=>onchangeHandler(e.target.value)}></input>
                </div>
            )
        })
    }
    <button onClick={addInput}>create</button>
</div>
    )
 }
 export default InputBox;