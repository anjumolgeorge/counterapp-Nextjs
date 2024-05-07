'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

function folder1() {
    const router = useRouter()
    const handleClick = () => {
        router.push("/folder2")
    }
  return (
    <div>
      folder1
      <button onClick={handleClick}>click</button>
    </div>
  );
}

export default folder1;

