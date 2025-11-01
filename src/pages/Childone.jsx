import React, { useState, memo } from 'react';

function Childone(props) {
  console.log("Child ");

  const [count, setCount] = useState(0);

  return (
    <div className='border-2 m-2 p-3 bg-amber-200'>
      <h1>Child one component: {props.name}</h1>
      <button onClick={props.handleClick}>Child me to run function coming from app</button>
      <div>
        <p>Child count: {count}</p>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </div>
    </div>
  );
}


export default memo(Childone);
