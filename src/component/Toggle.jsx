import React from 'react'
import { useState } from 'react';
import './Toggle.css';
// import Navbar from './Navbar/Navbar';

const Toggle = () => {
    const [color, setColor] = useState('red');
    const [text, setText] = useState("off")

    const changedcolor = ()=>{
        if(color === "red"){
            setColor("yellow");
            setText("on")
        }else{
            setColor("red");
            setText("off")
        }
    }

  return (
    <>
    {/* <Navbar/> */}
    <div className='body2'>
    <div className='depend' >
      <div className="colors" style={{backgroundColor:color}}></div>
      <button onClick={changedcolor} className="button">{text}</button>
    </div>
    </div>
    </>
  )
}

export default Toggle
