import React from "react";
import Video from "./Video";
import Nav from "./Nav";

const Home = () => {

    console.log('on home page');
    return(
       <div>
             <Nav />   {/*rendered grid in seperate component to save space */}
            <Video /> {/* video background component render last for speed */}
        </div> 
    );
}

export default Home