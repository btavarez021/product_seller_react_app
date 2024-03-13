import React from "react";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";


export function Navbar(){
    return(<>
    &nbsp; <Link to='/sellers' className="link">sellers page</Link>&nbsp; &nbsp; 
    <Link to='/products' className="link">products page</Link>
    </>)
}