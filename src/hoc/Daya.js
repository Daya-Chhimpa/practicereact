import React from 'react'
import HocComponent from './HocComponent'

const Daya = (props) => {
  return (
    <div>
    <h1>daya Gunshot with:{props.gun} {props.count} </h1>
    <button onClick={props.funIncreament}>gunshot</button>
      
    </div>
  )
}

export default HocComponent(Daya)
