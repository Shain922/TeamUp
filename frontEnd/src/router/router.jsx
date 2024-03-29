import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import DefoultLayout from "../layout/DefoultLayout";
import GuestLayout from "../layout/GuestLayout";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import NotFound from "../pages/NotFound";
import Dashbord from "../pages/Dashbord/Dashbord";
import Tasks from "../pages/task/Tasks";
import MyTask from "../pages/myTask/MyTask";
import Projects from "../pages/projects/Projects";
import MemberLayout from "../layout/MemberLayout";
import ProjectsMember from "../components/member/ProjectsMember";
import TaskMember from "../components/member/TaskMember";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefoultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashbord" />,
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
        path: "/projectTask",
        element: <Tasks />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
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
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <MemberLayout />,
    children: [
      {
        path: "/memberTask",
        element: <MyTask />,
      },
      {
        path: "/memberProject",
        element: <ProjectsMember />,
      },
      {
        path: "/projectTaskMember",
        element: <TaskMember />,
      },
    ],
  },
]);
export default router;
