import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>hellow world</h1>
      {/* Navbar */}
      <Outlet />
      {/*Footer*/}
    </div>
  );
};

export default Main;