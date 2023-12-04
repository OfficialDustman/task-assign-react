import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from "./components/Pages/Auth";
import Home from "./components/Pages/Home";
import Task from "./components/Pages/Task";
import Profile from "./components/Pages/Profile";
import Project from "./components/Pages/Project";
import Create from "./components/Pages/Create";

import SignIn from "./components/Layouts/Auth/SignIn";
import SignUp from "./components/Layouts/Auth/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faFontAwesome)


const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    // errorElement: <ErrorPage />,
    id: "root",
    children: [
      {
        index: true,
        element: <Auth />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/signin",
        element: <SignIn />
      }
    ],
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/home/task",
        element: <Task />
      },
      {
        path: "/home/profile",
        element: <Profile />
      },
      {
        path: "/home/project",
        element: <Project />
      },
      {
        path: "/home/create/:new",
        element: <Create />
      }
    ],  
  }

]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;