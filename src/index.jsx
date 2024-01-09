import React from 'react';
import './main.scss';
//import { Meteor } from 'meteor-node-stubs'
import {RouterProvider} from 'react-router-dom';
import reactDom from 'react-dom/client';
import {Router} from './imports/api/Router.jsx';
//import {HashRouter as Router} from 'react-router-dom';


//TODO: implement error landing page (done)
//TODO: impoment router ( finally done)

//Meteor.startup(() => {

  reactDom.createRoot(document.getElementById('react-target')).render(   //have react-dom connect to react-target
  <RouterProvider router = {Router} />  //render the app by taking the router to the app route
   )
  
  
  //  const container = document.getElementById('react-target');
  // const root = createRoot(container);
  // // <BrowserRouter>      
  // reactDom.createRoot(container).render(
  //   <App />      
  // )  
  // </BrowserRouter>
//no longer needed but good to have just in case router falls through (try this when you wake up)
//});
