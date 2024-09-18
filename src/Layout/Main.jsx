import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="text-5xl font-bold text-center">hello team CodeWarriors</div>
      {/* Navbar */}
      <Outlet />
      {/*Footer*/}
    </div>
  );
};

export default Main;