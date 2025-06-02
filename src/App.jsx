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
import Editor from "./pages/editor-codigo.jsx";
import QuestoesEvento from "./pages/questoes-evento.jsx";
import MeusEventos from "./pages/tela-meus-eventos.jsx";
import Inicio from "./pages/tela-inicial.jsx";
import Rank_evento from "./pages/rank_evento.jsx";
import Rank_geral from "./pages/rank_geral.jsx";
import Eventos from "./pages/eventos.jsx";
import TelaAddQuestoes from "./pages/Tela-add-questoes.jsx";
import Trocar_senha from "./pages/tela_trocar_senha.jsx";
import Contato from "./pages/tela-contato.jsx"

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}/> 
            <Route path="/cadastro" element={<Cadastro />}/>
            <Route path="menuquestao" element={<MenuQuestao/>}/>
            <Route path="/editor" element={<Editor />}/>
            <Route path="/questoesevento" element={<QuestoesEvento />}/>
            <Route path="/resolucao" element={<Resolucao />}/>
            <Route path="/verificacao" element={<Tela_acerto />}/>
            <Route path="/erroindefinido" element={<Erro_indefinido/>}/>
            <Route path="/erro" element={<Erro />}/>
            <Route path="/meuseventos" element={<MeusEventos />}/>
            <Route path="/testebarra" element={<Barra />}/>
            <Route path="/rank_evento" element={<Rank_evento />}/>
            <Route path="/rank_geral" element={<Rank_geral />}/>
            <Route path="/inicio" element={<Inicio />}/>
            <Route path="/eventos" element={<Eventos/>}/>
            <Route path="/addquestoes" element={<TelaAddQuestoes />}/>
            <Route path="/trocar_senha" element={<Trocar_senha/>}/>
            <Route path="/contato" element={<Contato/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;