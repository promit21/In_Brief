import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Register from "../Pages/Register";
import Signin from "../Pages/Signin";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <h1>Oh no 404 error</h1>,
    children: [
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
]);

export default router;
