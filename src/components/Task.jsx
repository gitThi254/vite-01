import React from "react";
import { Link } from "react-router-dom";
import BtnRemoveTask from "./BtnRemoveTask";

const Task = ({ task }) => {
  return (
    <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md' key={task._id}>
      <header className='flex justify-between'>
        <h1 className='text-2xl font-bold text-white'>{task.title}</h1>
        <div className='flex gap-x-2 items-center'>
          <div>
            <BtnRemoveTask id={task._id} />
          </div>

          <Link
            to={`/tasks/${task._id}`}
            className='px-3 py-2 bg-yellow-500 font-semibold rounded-md'
          >
            edit
          </Link>
        </div>
      </header>

      <p className='text-slate-300'>{task.description}</p>
      <p className='text-white underline'>
        {new Date(task.date).toLocaleDateString()}
      </p>
    </div>
  );
};

export default Task;
