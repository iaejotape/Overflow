import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./pages/login.jsx";
import Cadastro from "./pages/Tela-Cadastro.jsx";
import Barra from "./pages/teste-menu.jsx";
import MenuQuestao from "./pages/menu-questao.jsx";



function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Login />}/> 
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="menuquestao" element={<MenuQuestao/>}/>
            <Route path="/testebarra" element={<Barra />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;