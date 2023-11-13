import logo from "./logo.svg";
import "./App.css";
import Auth from "./components/Pages/Auth";
import SignIn from "./components/Layouts/Auth/SignIn";
import SignUp from "./components/Layouts/Auth/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Pages/Home";

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
  },

]);



function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;