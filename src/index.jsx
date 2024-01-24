import React from 'react';
import "./main.scss";
import { createRoot } from 'react-dom/client';
import  {App}  from './/imports/ui/App';
import { HashRouter } from 'react-router-dom';

  const container = document.getElementById('react-target');
  const root = createRoot(container);
  root.render(
  
    <HashRouter>
       <App />
    </HashRouter>
 
  );

