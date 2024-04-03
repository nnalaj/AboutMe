import React from 'react';
import Video from './Video';
import Nav from './Nav';

const Home = () => {
    
    return(
       <div>
            <Video /> {/* video background component render last for speed */}
            <Nav />    {/*rendered grid in seperate component to save space */}
           
        </div> 
    );
}

export default Home;