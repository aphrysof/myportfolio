import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

interface LayoutProp {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProp) {
  return (
    <div className="flex relative min-w-full max-w-fit">
      <Sidebar />
      <div className="w-full bg-dashboardBg min-h-full">
        <Navbar />
        <div className="ml-[310px] ">{children}</div>
      </div>
    </div>
  );
}
