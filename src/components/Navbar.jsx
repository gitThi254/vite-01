import React from "react";
import { Link } from "react-router-dom";
import { useVerify } from "../hooks/auth.hooks";
import BtnLogout from "./BtnLogout";

const Navbar = () => {
  const { data: user } = useVerify();
  return (
    <nav className='p-5 flex container mx-auto justify-between bg-violet-500 items-center rounded-md shadow-md'>
      <div>
        <Link to='/' className='text-2xl text-semibold text-white underline'>
          Task app
        </Link>
      </div>
      <div>
        <ul className='flex gap-10'>
          {user ? (
            <>
              <li className='px-4 py-2 bg-slate-100 rounded-md shadow-sm hover:bg-slate-200'>
                <h1 className='font-semibold underline'>{user.username}</h1>
              </li>
              <li className='px-4 py-2 bg-slate-100 rounded-md shadow-sm hover:bg-slate-200'>
                <Link to='/tasks' className='font-semibold'>
                  all-task
                </Link>
              </li>
              <li className='px-4 py-2 bg-slate-100 rounded-md shadow-sm hover:bg-slate-200'>
                <Link to='/new-task' className='font-semibold'>
                  new-task
                </Link>
              </li>
              <li className='px-4 py-2 bg-slate-100 rounded-md shadow-sm hover:bg-slate-200'>
                <BtnLogout />
              </li>
            </>
          ) : (
            <>
              <li className='px-4 py-2 bg-slate-100 rounded-md shadow-sm hover:bg-slate-200'>
                <Link to='/login' className='font-semibold'>
                  Login
                </Link>
              </li>
              <li className='px-4 py-2 bg-slate-100 rounded-md shadow-sm hover:bg-slate-200'>
                <Link to='/register' className='font-semibold'>
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
