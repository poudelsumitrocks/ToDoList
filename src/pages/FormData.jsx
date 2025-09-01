import React from 'react'
import { useLocation } from 'react-router';
export default function FormData() {
 const location=useLocation();
  const {userData}=location.state || {};
  if (!userData) return <h1 className="text-center mt-10">No data submitted yet</h1>;
  return (
    <div>
       <div className='p-10'>
      <h1 className='text-3xl font-bold mb-5'>Dashboard</h1>
      <p className='p-2'><strong>First Name:</strong> {userData.firstName}</p>
      <p className='p-2'><strong>Last Name:</strong> {userData.lastName}</p>
      <p className='p-2'><strong>Email:</strong> {userData.email}</p>
      <p className='p-2'><strong>Password:</strong> {userData.password}</p>
    </div>
    
    </div>
    
  )
}
