'use client'
import React, { useState } from 'react';

function page() {
    const [count,setCount] = useState(0)
  return (
    <div>
        count:{count}
      <button style={{background:'yellow'}} onClick={()=>setCount(count+1)}>increment</button>
      <button style={{background:'red'}} onClick={()=>setCount(count>0?count-1:count)}>decrement</button>
    </div>
  );
}

export default page;
