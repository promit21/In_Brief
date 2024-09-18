import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Main;