import React from 'react';
import { Outlet, NavLink } from 'react-router';
export default function Dashborad() {
  function LinkClasses() {
    return "block py-3 px-5 w-full rounded-lg text-gray-700 transition-colors duration-200 hover:bg-blue-300 hover:text-white";
  }
  return (
    <div className='grid grid-cols-12  m-h-screen'>
      
      <div className='col-span-2 bg-blue-50 px-10 py-3'>
        <div className='bg-blue-900 h-14 w-14 text-white rounded-full text-xl flex justify-center items-center'> G </div>
        <h1 className='text-xl font-semibold text-blue-400 '>GoodFood</h1>
        <div className="mt-8 w-full">
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-2">Menu</h2>
          <ul className="space-y-3">
            <NavLink to="/dashboard" className={LinkClasses}>
              Dashboard
            </NavLink>
            <NavLink to="/dashboard/foodmenu" className={LinkClasses}>
              Food Order
            </NavLink>
            <NavLink to="/dashboard/managemenu" className={LinkClasses}>
              Manage Menu
            </NavLink>
            <NavLink to="/dashboard/customermenu" className={LinkClasses}>
              Customer Menu
            </NavLink>
          </ul>
        </div>
      </div>

      <div className='col-span-10'>
        <Outlet />
      </div>
    </div>
  );
}
