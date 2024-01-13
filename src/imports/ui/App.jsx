import React from 'react';
import Home from './Home.jsx';
import { Route, Routes } from 'react-router-dom';

//TODO: determine if i still need this (not sure)

const App = () => {
  
  return (
<>
    
    // <Routes>
    //   <Route path='/home' element={<Home />} />
    // </Routes>

  <div className="content">
      <Home />
    </div></>
  );
};

export default App;


