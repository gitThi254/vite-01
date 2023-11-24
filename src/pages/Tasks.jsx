import React from "react";
import { useTasks } from "../hooks/tasks.hooks";
import Task from "../components/Task";

const Tasks = () => {
  const { data: tasks, isLoading } = useTasks();
  if (isLoading)
    return (
      <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
        loading...
      </div>
    );
  return (
    <div className='p-2 bg-white'>
      {tasks?.data.length === 0 ? (
        <>
          <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
            empty tasks
          </div>
        </>
      ) : (
        <>
          <div className='container mt-5 mx-auto min-h-content grid md:grid-cols-3 sm:grid-cols-2 gap-4'>
            {tasks?.data.map((task) => (
              <Task task={task} key={task._id} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Tasks;
