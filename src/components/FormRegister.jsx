import React from "react";
import { useRegister } from "../hooks/auth.hooks";
import { useForm } from "react-hook-form";

const FormRegister = () => {
  const { mutate: registerMutation, isPending, error, isError } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    registerMutation(data);
  };
  return (
    <form
      className='w-full flex flex-col item-center gap-y-5'
      onSubmit={handleSubmit(onSubmit)}
    >
      {isError && (
        <p className='text-center p-2 bg-red-400 text-slate-900 rounded-md'>
          {error?.response?.data[0]}
        </p>
      )}

      <div className='w-full'>
        <input
          type='text'
          placeholder='Username'
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
          className='w-full p-1.5 outline-none'
        />

        {<span className='text-slate-100'>{errors.username?.message}</span>}
      </div>
      <div className='w-full'>
        <input
          type='email'
          placeholder='Email'
          className='w-full p-1.5 outline-none'
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
        />
        {<span className='text-slate-100'>{errors.email?.message}</span>}
      </div>
      <div className='w-full'>
        <input
          type='password'
          placeholder='Password'
          {...register("password", {
            required: {
              value: true,
              message: "password is required",
            },
            minLength: {
              value: 6,
              message: "password must be at least 6 characters",
            },
          })}
          className='w-full p-1.5 outline-none'
        />
        {<span className='text-slate-100'>{errors.password?.message}</span>}
      </div>

      <button
        className='px-4 py-2 bg-slate-100 hover:bg-slate-200 self-center rounded-md shadow-md'
        disabled={isPending}
      >
        {isPending ? "loading..." : "Register"}
      </button>
    </form>
  );
};

export default FormRegister;
