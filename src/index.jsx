import React from 'react';
import "./main.scss";
import { createRoot } from 'react-dom/client';
import  App  from './imports/ui/App.jsx';
import { HashRouter, RouterProvider } from 'react-router-dom';
import { Router } from './imports/api/Router.jsx';

  const container = document.getElementById('react-target');
  const root = createRoot(container);
  root.render(<App />);

