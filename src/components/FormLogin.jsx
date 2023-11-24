import React from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/auth.hooks";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate: loginMutation, isPending, isError, error } = useLogin();
  const onSubmit = (data) => {
    loginMutation(data);
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
        {errors.email && (
          <span className='text-slate-100'>{errors.email?.message}</span>
        )}
      </div>
      <div className='w-full'>
        <input
          type='password'
          placeholder='Password'
          className='w-full p-1.5 outline-none'
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
            minLength: {
              value: 6,
              message: "password must beat 6 characters",
            },
          })}
        />
        {errors.password && (
          <span className='text-slate-100'>{errors.password.message}</span>
        )}
      </div>
      <button
        className='px-4 py-2 bg-slate-100 hover:bg-slate-200 self-center rounded-md shadow-md'
        disabled={isPending}
      >
        {isPending ? "loading..." : "Login"}
      </button>
    </form>
  );
};

export default FormLogin;
