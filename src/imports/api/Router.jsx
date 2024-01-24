import React from 'react'
import Resume from "../ui/Resume";
import Installs from "../ui/Installs";
import Home from "../ui/Home";
import App from '../ui/App'
import ErrorPage from "../ui/ErrorPage"
import { createHashRouter } from "react-router-dom";

//possibly not needed anymore since this is a single page 


export const Router = createHashRouter([
    {
      path: "https://nnalaj.github.io/bruh/",
      element: <Home />,
        children: [
            {
                path: "https://nnalaj.github.io/bruh/home",
                element: <Home />,
                //errorElement: <ErrorPage />
              },
              {
                path: "https://nnalaj.github.io/bruh/installs",
                element: <Installs />,
                //errorElement: <ErrorPage />
              }, 
              {
                path: "https://nnalaj.github.io/bruh/resume",
                element: <Resume />,
                //errorElement: <ErrorPage />
              }, 
        ],
      //errorElement: <ErrorPage />    
    }
  ]);
