import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Login from "./pages/login.jsx";
import Cadastro from "./pages/Tela-Cadastro.jsx";
import Resolucao from "./pages/Tela-ResQuestao.jsx";
import Erro_indefinido from "./pages/erro_indefinido.jsx";
import Tela_acerto from "./pages/Tela-acerto.jsx";
import Erro from "./pages/erro.jsx"
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
            <Route path="/resolucao" element={<Resolucao />}/>
            <Route path="/verificacao" element={<Tela_acerto />}/>
            <Route path="/erro_indefinido" element={<Erro_indefinido/>}/>
           <Route path="/erro" element={<Erro />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;