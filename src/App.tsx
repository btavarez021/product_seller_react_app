import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SellerPage } from './pages/SellerPage';
import { PageNotFound } from './pages/PageNotFound';
import { ProductsPage } from './pages/ProductsPage';
import { Homepage } from './pages/Homepage';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext({theme: "dark", toggleTheme:() => {}});

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () =>{  
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
    <div className="switch">
      <label>{theme === "light"? "Light Mode" :"Dark Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme==="dark"}></ReactSwitch>
    </div>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Homepage></Homepage>}/>
        <Route path='sellers' element={<SellerPage></SellerPage>}/>
        <Route path='products' element={<ProductsPage></ProductsPage>}/>
        <Route path="*" element={<PageNotFound></PageNotFound>}/>
        </Routes>
        </BrowserRouter>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
