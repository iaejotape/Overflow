import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login.jsx";
import Cadastro from "./pages/Tela-Cadastro.jsx";
import Barra from "./pages/teste-menu.jsx";
import './App.css';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Login />}/> 
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="/testebarra" element={<Barra />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;