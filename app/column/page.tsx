'use client'
import React, { useState } from 'react';

function page() {
    const [count,setCount] = useState(0)
  return (
   
    <div style={{background : count!==0&& count%3===0 ? 'green':'blue', height:'5rem'}}>
        count:{count}
      <button style={{background:count!==0 && count%3===0?'red':'yellow'}} onClick={()=>setCount(count+1)}>click</button>
    </div>
  );
}

export default page;
