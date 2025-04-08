import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";  // Import Outlet

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <div className="mt-[20px]">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
