import React, { useEffect, useState } from 'react'
import './Airoplane.css'

import { Canvas } from 'react-three-fiber';
import { useCannon } from '@react-three/cannon';
import * as THREE from 'three';

const AiroplaneGame = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const interval = setInterval(() => {
        setPosition(prevPosition => ({
          x: prevPosition.x + velocity.x,
          y: prevPosition.y + velocity.y
        }));
      }, 10);
      return () => clearInterval(interval);
    }, [velocity]);
  
    const handleKeyDown = event => {
      switch (event.key) {
        case 'ArrowUp':
          setVelocity(prevVelocity => ({ x: prevVelocity.x, y: prevVelocity.y - 1 }));
          break;
        case 'ArrowDown':
          setVelocity(prevVelocity => ({ x: prevVelocity.x, y: prevVelocity.y + 1 }));
          break;
        case 'ArrowLeft':
          setVelocity(prevVelocity => ({ x: prevVelocity.x - 1, y: prevVelocity.y }));
          break;
        case 'ArrowRight':
          setVelocity(prevVelocity => ({ x: prevVelocity.x + 1, y: prevVelocity.y }));
          break;
        default:
          break;
      }
    };
    

  
  return (
    <div className="App" onKeyDown={handleKeyDown} tabIndex="0">
    <div className="plane" style={{ left: `${position.x}px`, top: `${position.y}px` }} />
  </div>
  )
}

export default AiroplaneGame