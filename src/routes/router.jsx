import About from "../pages/main/About";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/main/Main");
const { default: Home } = require("../pages/main/Home");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About/>,
      },
    ],
  },
]);


export default router;
