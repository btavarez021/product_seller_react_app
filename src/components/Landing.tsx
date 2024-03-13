import React, { createContext, useContext } from "react";
import { ThemeContext } from "../App";

export function Landing(){
    const ThemeContext = createContext({theme: "dark", toggleTheme:() => {}});

    
    return(<>
    
    <div>
    <h1>Welcome to the Landing Page!</h1>
    </div>
    
    </>)
}