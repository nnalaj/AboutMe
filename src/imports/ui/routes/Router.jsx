import React from 'react'
import Home from "./../Home";
import App from './../App'
import ErrorPage from "./../ErrorPage"
import { createHashRouter } from "react-router-dom";
import Installs from '../Installs';

//possibly not needed anymore since this is a single page 


const Router = createHashRouter([
    // {path: "*", Component: <Home />},
    {path: "/", element: <><Home /></>},
    {path: "/installs", element: <Installs/>},
    
    {
        // {
        //     path: "https://nnalaj.github.io/AboutMe/home",
        //     element: <Home />,
        //     //errorElement: <ErrorPage />
        // },
        // {
        //     path: "https://nnalaj.github.io/AboutMe/installs",
        //     element: <Installs />,
        //     //errorElement: <ErrorPage />
        //  }, 
        //  {
        //     path: "https://nnalaj.github.io/AboutMe/resume",
        //     element: <Resume />,
        //     //errorElement: <ErrorPage />
        //   }, 
        
      //errorElement: <ErrorPage />    
    }
  ]);

export default Router
