import React, {useEffect, useState} from 'react';
import './App.scss';
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import Home from "./modules/home/presentation/pages/Home";
import ErrorPage from "./shared/presentation/pages/ErrorPage";
import NavComponent from "./shared/presentation/components/NavComponent";
import Login from "./modules/login/presentation/pages/Login";
import Register from "./modules/register/presentation/pages/Register";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import storage from "./shared/infra/storage";


// https://github.com/avrcoelho/react-clean-architecture/blob/main/src/modules/activities/presentation/pages/Dashboard/index.tsx

function App() {

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if(storage.get('token') !== '') {
      setAuthenticated(true);
    }
  }, []);



  const loginProps = {
    authenticated,
    setAuthenticated
  }

  const navProps = {
    authenticated,
    setAuthenticated
  }

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login {...loginProps}/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/",
      element: <NavComponent {...navProps}/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "",
          element: <Home/>
        }
      ]
    },
  ]);

  return (
      <>
        <ToastContainer pauseOnFocusLoss={false}/>
        <RouterProvider router={router} />
      </>
  );
}

export default App;
