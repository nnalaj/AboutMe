import React from 'react';
import './main.scss';
//import { Meteor } from 'meteor-node-stubs'
//import {Tracker} from 'meteor/tracker'; //implement this to refresh the video component after x time
import {RouterProvider} from 'react-router-dom';
import reactDom from 'react-dom/client';
import {Router} from './imports/api/Router.jsx';
import  App  from './imports/ui/App.jsx';
import {BrowserRouter} from 'react-router-dom';
import { Home } from './imports/ui/Home.jsx';


//TODO: implement error landing page (done)
//TODO: impoment router ( finally done)

//Meteor.startup(() => {

  reactDom.createRoot(document.getElementById('react-target')).render(   //have react-dom connect to react-target
  <>
  <RouterProvider router = {Router} fallbackelement={<App />} />
  </>  //render the app by taking the router to the app route
  //<App />
   )
  
  
  // const container = document.getElementById('react-target');
  // const root = reactDom.createRoot(container);
  // <BrowserRouter>      
  //   <App />        {/* no longer needed but good to have just in case router falls through */}
  // </BrowserRouter>
 
//});
