import React from "react";

function Navbar(){
    return(
        <nav class="navbar">
        <div class="logo">
            <img src="/logoicon.png" alt="Logo" />
            <div> 
              <h3>BROOMSVILLE</h3>
              <h3>SURVEILLANCE</h3>
              {/* <p>Intelligent Protection</p> */}
            </div>
        </div>
        <div class="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;