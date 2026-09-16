import { Outlet } from "react-router";
import Sidebar from "../components/shared/Sidebar";

const Root = () => {
  return (
    <div className="flex min-h-screen font-[Inter]">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Root;
