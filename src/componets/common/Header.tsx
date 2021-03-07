import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

function Header () {
    const [active,setActive] = useState("home")
    const activeStyle ={color:"#F15B2A"};

    const presionar =(event:any) => {
        setActive(event.target.id);
    }
    return (
        <nav>
            <NavLink to="/" onClick={presionar} id="home"
             activeStyle={active=="home"?activeStyle:null}>Home</NavLink>
             {" | "}
            <NavLink to="/about" id="about"  onClick={presionar}
            activeStyle={active=="about"?activeStyle:null}>About</NavLink>
              {" | "}
            <NavLink to="/courses" id="courses"  onClick={presionar}
            activeStyle={active=="courses"?activeStyle:null}>Courses</NavLink>
        </nav>

    )
}
export default Header;