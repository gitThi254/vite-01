import React, { useSyncExternalStore } from "react";
import { useForm } from "react-hook-form";
import { useCreatTask, useUpdateTask } from "../hooks/tasks.hooks";

const FormCreateTask = ({ id, task }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: id ? task : undefined,
  });
  const { mutate: createTaskMutation, isPending: isPendingCreate } =
    useCreatTask();
  const { mutate: updateTaskMutation, isPending: isPendingUpdate } =
    useUpdateTask();
  const onSubmit = (data) => {
    if (id) {
      updateTaskMutation({ id, data });
    } else {
      createTaskMutation(data);
    }
  };

  return (
    <form
      className='w-full flex flex-col item-center gap-y-5'
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* {isError && (
        <p className='text-center p-2 bg-red-400 text-slate-900 rounded-md'>
          {error?.response?.data[0]}
        </p>
      )} */}

      <div className='w-full'>
        <input
          type='title'
          placeholder='Title'
          className='w-full p-1.5 outline-none'
          {...register("title", {
            required: {
              value: true,
              message: "title is required",
            },
          })}
        />
        {errors.title && (
          <span className='text-slate-100'>{errors.title?.message}</span>
        )}
      </div>
      <div className='w-full'>
        <textarea
          type='description'
          rows={3}
          placeholder='description'
          className='w-full p-1.5 outline-none'
          {...register("description", {
            required: {
              value: true,
              message: "description is required",
            },
            maxLength: {
              value: 100,
              message: "Description must be less than 100 characters",
            },
          })}
        />
        {errors.description && (
          <span className='text-slate-100'>{errors.description.message}</span>
        )}
      </div>
      <button
        className='px-4 py-2 bg-slate-100 hover:bg-slate-200 self-center rounded-md shadow-md'
        disabled={isPendingCreate || isPendingUpdate}
      >
        {id
          ? isPendingUpdate
            ? "loading..."
            : "update"
          : isPendingCreate
          ? "loading"
          : "new task"}
      </button>
    </form>
  );
};

export default FormCreateTask;
