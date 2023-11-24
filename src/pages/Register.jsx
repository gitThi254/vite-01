import React from "react";
import FormRegisform from "../components/FormRegister";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='w-[400px] bg-violet-500 flex flex-col items-center p-5 space-y-3 rounded-md shadow-md'>
        <h1 className='text-xl font-semibold text-white'>Form Register</h1>
        <FormRegisform />
        <div className='w-full flex justify-around'>
          <div>
            <span className='text-sm'>Already have an account?</span>
          </div>
          <div>
            <Link to='/login' className='text-sm text-white'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
