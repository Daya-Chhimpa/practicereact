import React from 'react'
import HocComponent from './HocComponent'

const Suresh = (props) => {
  return (
    <div>
    <h1>Suresh gunshot with:{props.gun} {props.gunShot}</h1>
    <button onMouseOver={props.countshotFun}>Gunshot</button>
    </div>
  )
}

export default HocComponent(Suresh)