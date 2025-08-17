import React from 'react'
const HFooter=["© 2025 MyWebsite. All rights reserved.","Terms & Conditions","Privacy Policy","Cookie Policy"];
export default function Footer() {
    const Myfooter=HFooter.map((items,index)=>{
        return <span key={index}>{items}</span>
    });
  return (
    <>
      <footer className='h-10 w-screen bg-black text-white flex justify-center items-center gap-10'> 
        {Myfooter}
      </footer>
    </>
  )
}
