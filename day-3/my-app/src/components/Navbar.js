import React from "react";
import logo from "./logo192.png";

function Navbar(){

    return (
    <nav>
        <div className="logo">
        <img src={logo} />
        <h3>ReactFacts</h3>
        </div>
        <div>
           <h4> React Course - Project 1 </h4> 
        </div> 
    </nav>
    )


}

export default Navbar;