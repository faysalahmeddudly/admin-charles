import { useState } from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/shared/Sidebar";
import Topbar from "../components/shared/Topbar";

const Root = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen font-[Inter]">
      <Sidebar isOpen={isMobileSidebarOpen} onClose={() => setIsMobileSidebarOpen(false)} />
      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar onMenuClick={() => setIsMobileSidebarOpen(true)} />
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
