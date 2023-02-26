import React, {useEffect, useState} from 'react';
import './App.scss';
import {Navigate, RouterProvider} from "react-router";
import {createHashRouter} from "react-router-dom";
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
import Account from "./modules/account/presentation/pages/Account";
import AccountArticles from "./modules/account/presentation/pages/AccountArticles";
import {UserContext} from "./shared/presentation/context/UserContext";
import {useGetUserData} from "./shared/presentation/hooks/useGetUserData";


// https://github.com/avrcoelho/react-clean-architecture/blob/main/src/modules/activities/presentation/pages/Dashboard/index.tsx

function App() {

  const [authenticated, setAuthenticated] = useState(false);

  const {user, reload} = useGetUserData();

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

  const router = createHashRouter([
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
        },
        {
          path: "account",
          element: authenticated ? <Account/> : <Navigate to="/login" state={{ from: window.location }} replace />,
          children: [
            {
              path: "",
              element: authenticated ? <AccountArticles/> : <Navigate to="/login" state={{ from: window.location }} replace />
            },
          ]
        }
      ]
    },
  ]);

  return (
      <UserContext.Provider value={user}>
        <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
        <RouterProvider router={router} />
      </UserContext.Provider>
  );
}

export default App;
