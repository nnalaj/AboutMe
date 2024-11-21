import React from 'react';
import Video from './Video';
import Nav from './Nav';
import  BusinessCard  from "./Card.jsx"

const Home = () => {
    
    return(
       <div>
            <Video /> {/* video background component render last for speed */}
            <Nav />    {/*rendered grid in seperate component to save space */}
            <BusinessCard /> {/*rendered to scroll over. use as backdrop for rest of page maybe?*/}
        </div> 
    );
}

export default Home;