import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';

export default function Form() {

  const navigate=useNavigate();
  const { register, handleSubmit, formState: { errors},watch, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard", { state: { userData: data } });
    reset();
  }
  


  return (
    <div className='flex justify-center items-center mt-10'>
      <div className='w-1/2 h-1/2 bg-amber-50 border flex flex-col justify-center items-center p-6'>
        <h1 className='font-bold text-3xl p-10'>Sign up </h1>
        <form onSubmit={handleSubmit(onSubmit)}>

          <label htmlFor="firstName" className='font-semibold'>First Name :</label>
          <input 
            type="text" 
            placeholder='Enter the first name' 
            {...register("firstName", { required: "First name is required" })} 
            className='w-full px-4 py-2 border rounded-md focus:outline-none ' 
          />
          {errors.firstName && (<p className='text-red-500'>{errors.firstName.message}</p>)}

          <label htmlFor="lastName" className='font-semibold'>Last Name:</label>
          <input 
            type="text" 
            placeholder='Enter the last name' 
            {...register("lastName", { required: "Last name is required" })} 
            className='w-full px-4 py-2 border rounded-md focus:outline-none ' 
          />
          {errors.lastName && (<p className='text-red-500'>{errors.lastName.message}</p>)}

          <label htmlFor="email" className='font-semibold'>Email:</label>
          <input 
            type="email" 
            placeholder='Enter the Email' 
            {...register("email", { required: "Email is required" })} 
            className='w-full px-4 py-2 border rounded-md focus:outline-none ' 
          />
          {errors.email && (<p className='text-red-500'>{errors.email.message}</p>)}

          <label htmlFor="password" className='font-semibold'>Password:</label>
          <input 
            type="password" 
            placeholder='Enter the Password' 
            {...register("password", { required: "Password is required" })} 
            className='w-full px-4 py-2 border rounded-md focus:outline-none ' 
          />
          {errors.password && (<p className='text-red-500'>{errors.password.message}</p>)}

          <label htmlFor="confirmPassword" className='font-semibold'>Confirm password:</label>
          <input 
            type="password" 
            placeholder='Confirm password' 
            {...register("confirmPassword", { required: "Confirm password is required",validate: (value) => value === watch("password") || "Passwords do not match" })} 
            className='w-full px-4 py-2 border rounded-md focus:outline-none ' 
          />
          {errors.confirmPassword && (<p className='text-red-500'>{errors.confirmPassword.message}</p>)}

          <button className='bg-blue-400 w-full p-2 mt-4 text-white text-xl font-semibold'>Submit</button>
        </form>
      </div>
    </div>
  )
}
// {
//   open &&(
//     <>
//     <div className=''>
      
//     </div>
//     </>
//   )
// }