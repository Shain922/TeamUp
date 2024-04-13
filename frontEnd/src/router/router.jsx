import { createBrowserRouter, Navigate } from "react-router-dom";

// import layouts
import DefoultLayout from "../layout/DefoultLayout";
import GuestLayout from "../layout/GuestLayout";

// import components
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import NotFound from "../pages/NotFound";
import Dashbord from "../pages/Dashbord/Dashbord";
import Tasks from "../pages/task/Tasks";
import MyTask from "../pages/myTask/MyTask";
import Projects from "../pages/projects/Projects";
import AddTask from "../pages/addTask/AddTask";
import EditTask from "../pages/EditTask/EditTask";
import EditProject from "../pages/editProject/EditProject";
import EditProjectTask from "../pages/editProjecTask/EditProjectTask";

const router = createBrowserRouter([
  // Define routes for guest users
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "*",
        element: <Navigate to="/login" />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  // Define routes for logged-in users
  {
    path: "/",
    element: <DefoultLayout />,
    children: [
      {
        path: "*",
        element: <Navigate to="/login" />,
      },

      {
        path: "/dashbord",
        element: <Dashbord />,
      },
      {
        path: "/Mytasks",
        element: <MyTask />,
      },
      {
        path: "/addTask",
        element: <AddTask />,
      },
      {
        path: "/editTask/:id",
        element: <EditTask />,
      },
      {
        path: "/editProject/:id",
        element: <EditProject />,
      },
      {
        path: "/projectTask/:id",
        element: <Tasks />,
      },
      {
        path: "/editProjectTask/:id",
        element: <EditProjectTask />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
  // Route for any unknown paths
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
