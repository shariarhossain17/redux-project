import BlogSIngleCard from "../cpmponent/BlogSIngleCard";
import Dashboard from "../layout/dashboard/Dashboard";
import AddBlog from "../pages/dahsboard/AddBlog";
import Allblog from "../pages/dahsboard/Allblog";
import EditBlog from "../pages/dahsboard/EditBlog";
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
        element: <About />,
      },
      {
        path: "blog/:id",
        element: <BlogSIngleCard/>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: <Allblog />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },
      {
        path: "edit-blog/:id",
        element: <EditBlog />,
      },
    ],
  },
]);

export default router;
