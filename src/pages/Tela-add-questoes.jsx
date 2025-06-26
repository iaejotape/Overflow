import React, { useState } from "react";
import "../styles/tela-add-questoes.css"; // Mantém a importação do CSS
import Layout from "../componentes/layout";

// Ícone de lápis (placeholder)
const PencilIcon = () => <span className="pencil-icon-addq">✎</span>;

function TelaAddQuestoes() {
  const [form, setForm] = useState({
    titulo: "",
    autor: "",
    descricao: "",
    enunciado: "",
    pontuacao: "",
    resultado: "",
    categoria: [],
    dificuldade: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleCategoriaChange = (e) => {
    const { value, checked } = e.target;
    setForm((prevForm) => {
      if (checked) {
        return { ...prevForm, categoria: [...prevForm.categoria, value] };
      } else {
        return {
          ...prevForm,
          categoria: prevForm.categoria.filter((cat) => cat !== value),
        };
      }
    });
  };

  const handleDificuldade = (dificuldadeSelecionada) => {
    setForm({ ...form, dificuldade: dificuldadeSelecionada });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", form);
    alert("Questão adicionada com sucesso!");
  };

  return (
    <Layout>
      <div className="add-questao-container-addq">
        <form className="add-questao-form-addq" onSubmit={handleSubmit}>
          <div className="form-column-addq form-esquerda">
            <div className="form-group-addq">
              <label htmlFor="titulo">Título da Questão</label>
              <div className="input-wrapper-addq">
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

            <div className="form-group-addq">
              <label htmlFor="autor">Autor(a)</label>
              <div className="input-wrapper-addq">
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

            <div className="form-group-addq">
              <label htmlFor="descricao">Descrição</label>
              <div className="input-wrapper-addq">
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

            <div className="form-group-addq">
              <label>Categoria/Tags</label>
              <div className="categorias-tags-addq">
                <label className="checkbox-label-addq">
                  <input
                    type="checkbox"
                    name="categoria"
                    value="Matemática"
                    checked={form.categoria.includes("Matemática")}
                    onChange={handleCategoriaChange}
                  />
                  <span
                    className={`custom-checkbox-addq ${
                      form.categoria.includes("Matemática") ? "checked" : ""
                    }`}
                  ></span>{" "}
                  Matemática
                </label>
                <label className="checkbox-label-addq">
                  <input
                    type="checkbox"
                    name="categoria"
                    value="Lógica"
                    checked={form.categoria.includes("Lógica")}
                    onChange={handleCategoriaChange}
                  />
                  <span
                    className={`custom-checkbox-addq ${
                      form.categoria.includes("Lógica") ? "checked" : ""
                    }`}
                  ></span>{" "}
                  Lógica
                </label>
                <label className="checkbox-label-addq">
                  <input
                    type="checkbox"
                    name="categoria"
                    value="Strings"
                    checked={form.categoria.includes("Strings")}
                    onChange={handleCategoriaChange}
                  />
                  <span
                    className={`custom-checkbox-addq ${
                      form.categoria.includes("Strings") ? "checked" : ""
                    }`}
                  ></span>{" "}
                  Strings
                </label>
                <label className="checkbox-label-addq">
                  <input
                    type="checkbox"
                    name="categoria"
                    value="Estruturas de Dados"
                    checked={form.categoria.includes("Estruturas de Dados")}
                    onChange={handleCategoriaChange}
                  />
                  <span
                    className={`custom-checkbox-addq ${
                      form.categoria.includes("Estruturas de Dados")
                        ? "checked"
                        : ""
                    }`}
                  ></span>{" "}
                  Estruturas de Dados
                </label>
                <label className="checkbox-label-addq">
                  <input
                    type="checkbox"
                    name="categoria"
                    value="Algoritmos"
                    checked={form.categoria.includes("Algoritmos")}
                    onChange={handleCategoriaChange}
                  />
                  <span
                    className={`custom-checkbox-addq ${
                      form.categoria.includes("Algoritmos") ? "checked" : ""
                    }`}
                  ></span>{" "}
                  Algoritmos
                </label>
              </div>
            </div>

            <div className="form-group-addq">
              <label>Dificuldade</label>
              <div className="dificuldade-options-addq">
                <button
                  type="button"
                  className={`btn-dificuldade-addq dificil ${
                    form.dificuldade === "Difícil" ? "selected-addq" : ""
                  }`}
                  onClick={() => handleDificuldade("Difícil")}
                >
                  <span className="custom-radio-addq"></span> Difícil
                </button>
                <button
                  type="button"
                  className={`btn-dificuldade-addq intermediario ${
                    form.dificuldade === "Intermediário" ? "selected-addq" : ""
                  }`}
                  onClick={() => handleDificuldade("Intermediário")}
                >
                  <span className="custom-radio-addq"></span> Intermediário
                </button>
                <button
                  type="button"
                  className={`btn-dificuldade-addq facil ${
                    form.dificuldade === "Fácil" ? "selected-addq" : ""
                  }`}
                  onClick={() => handleDificuldade("Fácil")}
                >
                  <span className="custom-radio-addq"></span> Fácil
                </button>
              </div>
            </div>
          </div>

          <div className="form-column-addq form-direita">
            <div className="form-group-addq">
              <label htmlFor="enunciado">Enunciado</label>
              <div className="input-wrapper-addq">
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

            <div className="form-group-addq">
              <label htmlFor="pontuacao">Pontuação</label>
              <div className="input-wrapper-addq">
                <input
                  type="number"
                  id="pontuacao"
                  name="pontuacao"
                  value={form.pontuacao}
                  onChange={handleChange}
                  required
                />
                <PencilIcon />
              </div>
            </div>

            <div className="form-group-addq">
              <label htmlFor="resultado">Resultado esperado</label>
              <div className="input-wrapper-addq">
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
            <button type="submit" className="btn-adicionar-addq">
              Adicionar Questão
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default TelaAddQuestoes;
