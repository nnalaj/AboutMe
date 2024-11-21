import React from "react";
import NNALAJ from "./NNALAJ.jsx";
import Resume from "./Resume.jsx";
import {Link, Outlet} from "react-router-dom";
import Installs from "./Installs.jsx"


const Nav = () => {

   //simple grid for now need to find a way to animate the secontions or something(Done, could use more work)
   //TODO: link resume or add resume component somehow (working on)
   //TODO: link video installation works (working on)
   //TODO: link soundcould (but clean it first)
   //TODO: link youtube (also maybe clean this or make more videos first)
   //TODO: implement router OR use useState to render components on button/link click (working on)
   
    return (
        <>
            
            <div className = "navGrid">
                    <div className = "cell" >

                    </div>

                    <div className = "cell">
                        
                    </div>

                    <div className = "cell">
                       
                    </div>
                 
                    <div className="centerCell">
                        <Resume />
                    </div>
                                  
                    <div className = "cell">

                    </div>
                 
                    <div className = "cell">
                        
                    </div>
                  
                    <div className = "cell">
                        
                    </div>

                    <div className = "cell">
                        
                    </div>

                    <div className = "cell">
                        
                    </div>

            </div>
                
       </>
    );
}
export default Nav