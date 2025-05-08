import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import './App.css';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Cadastro />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
