import React from "react";
import { useParams } from "react-router-dom";
import { useGetTask } from "../hooks/tasks.hooks";
import FormCreateTask from "./FromCreateTasks";

const GetTask = () => {
  const params = useParams();
  const { data: task, isLoading, isError } = useGetTask(params.id);
  if (isLoading)
    return (
      <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
        loading...
      </div>
    );
  return (
    task && (
      <>
        <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
          <div className='w-[400px] bg-violet-500 flex flex-col items-center p-5 space-y-3 rounded-md shadow-md'>
            <h1 className='text-xl font-semibold text-white'>
              Form Create task
            </h1>
            <FormCreateTask id={params.id} task={task.data} />
          </div>
        </div>
      </>
    )
  );
};

export default GetTask;
