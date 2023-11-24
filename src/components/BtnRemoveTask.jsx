import React from "react";
import { useDeleteTask } from "../hooks/tasks.hooks";

const BtnRemoveTask = ({ id }) => {
  const { mutate: deleteMutation, isPending } = useDeleteTask();

  return (
    <button
      onClick={() => deleteMutation(id)}
      className='px-4 py-2 bg-red-500 text-white rounded-md'
      disabled={isPending}
    >
      {isPending ? "loading..." : "Delete"}
    </button>
  );
};

export default BtnRemoveTask;
