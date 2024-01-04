import React from 'react'
import Resume from "./imports/ui/Resume";
import Installs from "./imports/ui/Installs";
import Home from "./imports/ui/Home";
import ErrorPage from "./imports/ui/ErrorPage"
import { createBrowserRouter } from "react-router-dom";


export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
        children: [
            {
                path: "/home",
                element: <Home />,
                errorElement: <ErrorPage />
              },
              {
                path: "/installs",
                element: <Installs />,
                errorElement: <ErrorPage />
              }, 
              {
                path: "/resume",
                element: <Resume />,
                errorElement: <ErrorPage />
              }, 
        ],
      errorElement: <ErrorPage />    
    }
  ]);
