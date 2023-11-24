import React from "react";
import { useLogout } from "../hooks/auth.hooks";

const BtnLogout = () => {
  const { mutate: logoutMutation, isPending } = useLogout();
  return (
    <>
      <button
        className='font-semibold'
        onClick={logoutMutation}
        disabled={isPending}
      >
        {isPending ? "loading..." : "logout"}
      </button>
    </>
  );
};

export default BtnLogout;
