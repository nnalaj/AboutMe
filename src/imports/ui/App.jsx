import React from 'react';
import Home from "./Home.jsx";
import Router from './routes/Router.jsx';
import { RouterProvider } from 'react-router-dom';

  function App() { 
  return <RouterProvider router = {Router} />
}

export default App