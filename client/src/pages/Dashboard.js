import Navbar from "../utils/Navbar";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default DashBoard;
