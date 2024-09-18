import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Hellow team CodeWarriors</h1>
      {/* Navbar */}
      <Outlet />
      {/*Footer*/}
    </div>
  );
};

export default Main;