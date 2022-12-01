import React from 'react';
import './App.scss';
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import Home from "./modules/home/presentation/pages/Home";
import ErrorPage from "./shared/presentation/pages/ErrorPage";
import NavComponent from "./shared/presentation/components/NavComponent";


// https://github.com/avrcoelho/react-clean-architecture/blob/main/src/modules/activities/presentation/pages/Dashboard/index.tsx

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavComponent/>,
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
      <RouterProvider router={router} />
  );
}

export default App;
