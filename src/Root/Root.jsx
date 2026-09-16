import { Outlet } from "react-router";
import Sidebar from "../components/shared/Sidebar";
import Topbar from "../components/shared/Topbar";

const Root = () => {
  return (
    <div className="flex min-h-screen font-[Inter]">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
