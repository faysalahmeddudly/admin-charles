import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <div className="min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
