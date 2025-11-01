import React from 'react'

export default function CallBack() {
    function greet (name,callBack){
        console.log("Hello",name);
        callBack();
    }
    function satBye(){
        console.log("Goodbye")
    }
    greet("Sumit",satBye)
  return (
    <div>
      
    </div>
  )
}
