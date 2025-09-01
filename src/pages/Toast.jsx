import React from 'react'
import{toast} from "react-toastify"
import 'react-toastify/ReactToastify.css'
export default function Toast() {
    const notifySuccess=()=>{toast.success("Hello i ama here");}
    const notifyInfo=()=>{toast.info("Hello i ama here");}
    const notifyError=()=>{toast.error("Hello i ama here");}
    const notifyWarinig=()=>{toast.warning("Hello i ama here");}
    
  return (
    <>
      <button onClick={notifySuccess}>Button</button>
      <button onClick={notifyInfo}>Button</button>
      <button onClick={notifyError}>Button</button>
      <button onClick={notifyWarinig}>Button</button>
    </>
  )
}
