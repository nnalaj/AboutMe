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
            <div className = "homeGrid">
                <section >
                    <div className = "cell" ></div>
                </section>
                <section>
                    <div className = "cell">
                        {/* <Link reloadDocument></Link> reolad for new video */}
                    </div>
                </section>
                <section>
                    <div className = "cell">
                        {/* <a href ="https://github.com/nnalaj">GitHub</a> */}
                    </div>
                </section>
                <section>
                    <div className = "cell-invisible">
                        {/* <Link to= {<Installs/>} >installs</Link>     */}
                    </div>
                </section>
                <section className="">
                    <Resume />
                </section>
                <section>
                    <div className = "cell-invisible"></div>
                </section>
                <section>
                    <div className = "cell"></div>
                </section>
                <section>
                    <div className = "cell"></div>
                </section>
                <section>
                    <div className = "cell"></div>
                </section>
            </div>

        {/* <Outlet /> */}
       </>
    );
}
export default Nav