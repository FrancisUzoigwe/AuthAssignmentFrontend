import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../Components/static/FirstLayout";
import LandingScreen from "../Pages/Home/LandingScreen";
import Layout from "../Components/static/Layout";
import MainScreen from "../Pages/Home/MainScreen";
import Signin from "../Pages/Auth/Signin";
import Signup from "../Pages/Auth/Signup";
import AddTask from "../Pages/Home/AddTask";
import ViewTask from "../Pages/Home/ViewTask";
import ViewInProgress from "../Pages/Home/ViewInProgress";
import DeleteTask from "../Pages/Home/DeleteTask";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <LandingScreen />,
      },
      {
        element: <Signin />,
        path: "/signin",
      },
      {
        element: <Signup />,
        path: "/signup",
      },
    ],
  },
  {
    path: "/auth",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainScreen />,
      },
      {
        path: "/auth/add",
        element: <AddTask/>
      },
      {
        path: "/auth/view",
        element: <ViewTask/>
      },
      {
        path: "/auth/inprogress",
        element: <ViewInProgress/>
      },
      {
        path: "/auth/delete",
        element: <DeleteTask/>
      }
    ],
  },
]);
