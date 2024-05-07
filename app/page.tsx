'use client'
import React, { useState } from 'react';

function page() {
 const [count,setCount] = useState(0)
  return (
    <div>
    <button style = {{background:count!==0 && count%3===0?'red':'green'}}onClick={()=>setCount(count+1)}>click</button>
    </div>
  );
}

export default page;



