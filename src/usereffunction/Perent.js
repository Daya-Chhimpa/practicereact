import { useRef } from 'react'
import UserefFunction from './UserefFunction';
function Perent() {
  const mref =useRef()


  return (
    <div className="App">
<UserefFunction ref={mref} />
<button onClick={()=>mref.current.countFun()} >update</button>
    </div>
  );
}

export default Perent;
