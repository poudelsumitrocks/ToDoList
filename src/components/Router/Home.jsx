import React from 'react';
import { Link } from 'react-router';

export default function Home() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <Link to="/about">
        <button className='bg-blue-500 p-2 '>About</button>
      </Link> 
    </div>
  );
}
