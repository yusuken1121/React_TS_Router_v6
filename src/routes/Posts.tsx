import { FC } from "react";
import { Outlet } from "react-router-dom";

export const Posts: FC = () => {
  return (
    <>
      <h1 className="h1-base">Posts</h1>
      <Outlet />
    </>
  );
};
