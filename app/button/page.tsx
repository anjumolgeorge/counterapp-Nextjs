"use client"
import React, { useState } from 'react';

function page() {
   const[color,setColor] = useState('green')
   const[color1,setColor1] = useState('red')
   const handleclick = () => {
    setColor(color1)
    setColor1(color)
   }
  return (
    <div>
      <button style={{background : color}}onClick={handleclick}>click</button>
      <button style={{background : color1}}onClick={handleclick}>clickme</button>
    </div>
  );
}

export default page;
