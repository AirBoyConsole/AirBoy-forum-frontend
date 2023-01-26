import React, {useEffect, useState} from 'react';
import './App.scss';
import {Navigate, RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import Home from "./modules/home/presentation/pages/Home";
import ErrorPage from "./shared/presentation/pages/ErrorPage";
import NavComponent from "./shared/presentation/components/NavComponent";
import Login from "./modules/login/presentation/pages/Login";
import Register from "./modules/register/presentation/pages/Register";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import storage from "./shared/infra/storage";
import Upload from "./modules/upload/presentation/pages/Upload";
import Article from "./modules/article/presentation/pages/Article";


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
        },
        {
          path: "article/:id",
          element: <Article/>
        },
        {
          path: "upload",
          element: authenticated ? <Upload/> : <Navigate to="/login" state={{ from: window.location }} replace />
        }
      ]
    },
  ]);

  return (
      <>
        <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
        <RouterProvider router={router} />
      </>
  );
}

export default App;