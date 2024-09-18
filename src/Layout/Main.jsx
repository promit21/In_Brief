import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="Text-5xl font-bolt text-center">hello team CodeWarriors</div>
      {/* Navbar */}
      <Outlet />
      {/*Footer*/}
    </div>
  );
};

export default Main;