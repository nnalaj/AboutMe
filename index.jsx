import React from 'react';
import './main.scss'
import {Meteor} from "meteor-node-stubs"
import {RouterProvider} from 'react-router-dom';
import reactDom from 'react-dom/client';
<<<<<<< HEAD:build/index.jsx
import {Router} from './Router.jsx'; // 
=======
<<<<<<<< HEAD:src/index.jsx
import {Router} from './imports/api/Router.jsx'; // 
========
<<<<<<< HEAD:index.jsx
import {Router} from './imports/api/Router.jsx'; // 
=======
import {Router} from './Router.jsx'; // 
>>>>>>> 5ad1295 (index fix?):build/index.jsx
>>>>>>>> 2c252357db6de218ae3b12a4fe047933fbb1b686:index.jsx
>>>>>>> 2c252357db6de218ae3b12a4fe047933fbb1b686:index.jsx

//TODO: implement error landing page (done)
//TODO: impoment router ( finally done)

Meteor.startup(() => {

  reactDom.createRoot(document.getElementById('react-target')).render(   //have react-dom connect to react-target
  <RouterProvider router = {Router} />  //render the app by taking the router to the app route
   )
  
  
   // const container = document.getElementById('react-target');
  // const root = createRoot(container);
  // <BrowserRouter>      
  //   <App />        no longer needed but good to have just in case router falls through
  // </BrowserRouter>

});
