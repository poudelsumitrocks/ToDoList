import React, { useRef} from 'react'

export default function Useref() {
    console.log("Useref component rendered");
    const clickCount = useRef(0);
    const handleClick = () => {
        clickCount.current += 1;
        console.log(`Button clicked ${clickCount.current} times`);  
        if (clickCount.current >5){
            alert("You have clicked the button more than 5 times!");
        }
    }

  return (
    <div>
      <h1>My name is sumit </h1>
      <button onClick={handleClick}>ClickMe</button>
    </div>
  )
}
