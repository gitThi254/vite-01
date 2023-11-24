import React from "react";
import FormCreateTask from "../components/FromCreateTasks";
import { Link } from "react-router-dom";

const TaskForm = () => {
  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='w-[400px] bg-violet-500 flex flex-col items-center p-5 space-y-3 rounded-md shadow-md'>
        <h1 className='text-xl font-semibold text-white'>Form Create task</h1>
        <FormCreateTask />
      </div>
    </div>
  );
};

export default TaskForm;
