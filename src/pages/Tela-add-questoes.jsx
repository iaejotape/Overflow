import React, { useState } from "react";
import "../styles/tela-add-questoes.css"; // Importa o CSS específico para esta tela
import Layout from "../componentes/layout"; // Importa o componente de layout padrão

// Importa o ícone de lápis (substitua pelo caminho correto do seu ícone)
// import PencilIcon from '../assets/pencil-icon.svg'; 

function TelaAddQuestoes() {
  // Estado para armazenar os dados do formulário
  const [form, setForm] = useState({
    titulo: "",
    autor: "",
    descricao: "",
    enunciado: "",
    pontuacao: "",
    resultado: "",
    categoria: [], // Alterado para array para múltiplas seleções, se necessário, ou manter string se for seleção única
    dificuldade: "", // Armazena a dificuldade selecionada
  });

  // Função genérica para atualizar o estado do formulário para inputs de texto e textareas
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Função para atualizar as categorias selecionadas (checkboxes)
  const handleCategoriaChange = (e) => {
    const { value, checked } = e.target;
    setForm((prevForm) => {
      if (checked) {
        // Adiciona a categoria ao array se marcada
        return { ...prevForm, categoria: [...prevForm.categoria, value] };
      } else {
        // Remove a categoria do array se desmarcada
        return { ...prevForm, categoria: prevForm.categoria.filter((cat) => cat !== value) };
      }
    });
  };

  // Função para atualizar a dificuldade selecionada
  const handleDificuldade = (dificuldadeSelecionada) => {
    setForm({ ...form, dificuldade: dificuldadeSelecionada });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário
    console.log("Dados do formulário:", form); // Exibe os dados no console para depuração
    // Aqui você pode adicionar a lógica para enviar os dados para o backend
    alert("Questão adicionada com sucesso!"); // Exibe um alerta de sucesso
  };

  // Ícone de lápis (placeholder - substitua por um componente de ícone real ou SVG)
  const PencilIcon = () => <span className="pencil-icon">✎</span>; // Placeholder simples

  return (
    <Layout> {/* Usa o componente de Layout para estrutura da página */} 
      <div className="add-questao-container">
        <form className="add-questao-form" onSubmit={handleSubmit}>
          {/* Coluna da Esquerda */}
          <div className="form-column form-esquerda">
            {/* Campo Título */}
            <div className="form-group">
              <label htmlFor="titulo">Título da Questão</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  value={form.titulo}
                  onChange={handleChange}
                  required
                />
                <PencilIcon />
              </div>
            </div>

            {/* Campo Autor */}
            <div className="form-group">
              <label htmlFor="autor">Autor(a)</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="autor"
                  name="autor"
                  value={form.autor}
                  onChange={handleChange}
                  required
                />
                <PencilIcon />
              </div>
            </div>

            {/* Campo Descrição */}
            <div className="form-group">
              <label htmlFor="descricao">Descrição</label>
              <div className="input-wrapper">
                {/* Usando textarea para descrição, como é comum, mas pode ser input se preferir */}
                <textarea
                  id="descricao"
                  name="descricao"
                  value={form.descricao}
                  onChange={handleChange}
                  required
                />
                <PencilIcon />
              </div>
            </div>

            {/* Seção Categoria/Tags */}
            <div className="form-group">
              <label>Categoria/Tags</label>
              <div className="categorias-tags">
                {/* Opções de Categoria - usando checkboxes para permitir múltiplas seleções */}
                <label className="checkbox-label">
                  <input type="checkbox" name="categoria" value="Matemática" checked={form.categoria.includes("Matemática")} onChange={handleCategoriaChange} />
                  <span className="custom-checkbox"></span> Matemática
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="categoria" value="Lógica" checked={form.categoria.includes("Lógica")} onChange={handleCategoriaChange} />
                  <span className="custom-checkbox"></span> Lógica
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="categoria" value="Strings" checked={form.categoria.includes("Strings")} onChange={handleCategoriaChange} />
                  <span className="custom-checkbox"></span> Strings
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" name="categoria" value="Iniciante" checked={form.categoria.includes("Iniciante")} onChange={handleCategoriaChange} />
                  <span className="custom-checkbox"></span> Iniciante
                </label>
                 <label className="checkbox-label">
                  <input type="checkbox" name="categoria" value="Intermediário" checked={form.categoria.includes("Intermediário")} onChange={handleCategoriaChange} />
                  <span className="custom-checkbox"></span> Intermediário
                </label>
                {/* Adicione mais categorias conforme necessário */}
              </div>
            </div>

            {/* Seção Dificuldade */}
            <div className="form-group">
              <label>Dificuldade</label>
              <div className="dificuldade-options">
                <button
                  type="button" // Define como type="button" para não submeter o formulário
                  className={`btn-dificuldade dificil ${form.dificuldade === "Difícil" ? "selected" : ""}`}
                  onClick={() => handleDificuldade("Difícil")} >
                  <span className="custom-radio"></span> Difícil
                </button>
                <button
                  type="button"
                  className={`btn-dificuldade intermediario ${form.dificuldade === "Intermediário" ? "selected" : ""}`}
                  onClick={() => handleDificuldade("Intermediário")} >
                  <span className="custom-radio"></span> Intermediário
                </button>
                <button
                  type="button"
                  className={`btn-dificuldade facil ${form.dificuldade === "Fácil" ? "selected" : ""}`}
                  onClick={() => handleDificuldade("Fácil")} >
                  <span className="custom-radio"></span> Fácil
                </button>
              </div>
            </div>
          </div>

          {/* Coluna da Direita */}
          <div className="form-column form-direita">
            {/* Campo Enunciado */}
            <div className="form-group">
              <label htmlFor="enunciado">Enunciado</label>
              <div className="input-wrapper">
                <textarea
                  id="enunciado"
                  name="enunciado"
                  value={form.enunciado}
                  onChange={handleChange}
                  required
                />
                <PencilIcon />
              </div>
            </div>

            {/* Campo Pontuação */}
            <div className="form-group">
              <label htmlFor="pontuacao">Pontuação</label>
              <div className="input-wrapper">
                <input
                  type="number" // Tipo número para pontuação
                  id="pontuacao"
                  name="pontuacao"
                  value={form.pontuacao}
                  onChange={handleChange}
                  required
                />
                <PencilIcon />
              </div>
            </div>

            {/* Campo Resultado Esperado */}
            <div className="form-group">
              <label htmlFor="resultado">Resultado esperado</label>
              <div className="input-wrapper">
                <textarea
                  id="resultado"
                  name="resultado"
                  value={form.resultado}
                  onChange={handleChange}
                  required
                />
                <PencilIcon />
              </div>
            </div>

            {/* Botão Adicionar Questão */}
            <button type="submit" className="btn-adicionar">Adicionar Questão</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default TelaAddQuestoes;

