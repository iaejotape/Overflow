import React, { useEffect, useRef, useState } from "react";
import "../styles/Tela-ResQuestao.css";
import Layout from "../componentes/layout";
import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { python } from "@codemirror/lang-python";
import { oneDark } from "@codemirror/theme-one-dark";
import { autocompletion } from "@codemirror/autocomplete";
import {
  defaultKeymap,
  indentWithTab,
  history,
  historyKeymap,
} from "@codemirror/commands";
import {
  bracketMatching,
  defaultHighlightStyle,
  syntaxHighlighting,
  indentOnInput,
  StreamLanguage,
} from "@codemirror/language";
import { useNavigate } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { HighlightStyle, tags as t } from "@codemirror/highlight";
import { max } from "d3-array";

// Estilos e tema do editor copiados do editor-codigo.jsx
export const mochaHighlightStyle = HighlightStyle.define([
  { tag: t.keyword, color: "#e74b77", fontWeight: "bold" },
  { tag: [t.string, t.special(t.string)], color: "#a6e3a1" },
  { tag: [t.number, t.bool, t.null], color: "#fab387" },
  { tag: [t.comment], color: "#767779" },
  { tag: [t.variableName], color: "#cdd6f4" },
  { tag: [t.definition(t.variableName)], color: "#7eaaf1" },
  { tag: [t.typeName, t.className], color: "#f9e2af" },
  { tag: [t.tagName, t.attributeName], color: "#fab387" },
  { tag: [t.atom], color: "#b4befe" },
  { tag: [t.meta], color: "#89b4fa" },
  { tag: [t.propertyName], color: "#cdd6f4" },
  { tag: [t.operator], color: "#e74b77" },
  { tag: [t.function(t.variableName)], color: "#cdd6f4" },
  { tag: [t.constant(t.variableName)], color: "#fab387" },
  { tag: [t.regexp], color: "#89b4fa" },
]);

const customTheme = EditorView.theme({
  "&": {
    fontSize: "16px",
    height: "100%",
    backgroundColor: "",
    color: "#e74b77",
    fontWeight: 600,
    border: "none",
    borderRadius: "20px",
  },
  ".cm-scroller": {
    overflow: "auto",
    height: "100%",
    padding: "1rem",
    fontFamily: "monospace",
    backgroundColor: "#161424",
    borderRadius: "20px",
    border: "none",
  },
  ".cm-content": {
    color: "#ffffff",
    caretColor: "#7f849c",
    borderRadius: "20px",
    border: "none",
  },
  ".cm-gutters": {
    backgroundColor: "#161424",
    color: "#6c7086",
    border: "none",
  },
  ".cm-activeLine": {
    backgroundColor: "#313244",
  },
  ".cm-line": {
    backgroundColor: "transparent",
  },
  ".cm-editor": {
    backgroundColor: "#161424",
    borderRadius: "20px",
    border: "none",
  },
});

const TelaResQuestao = () => {
  const editorRef = useRef(null);
  const editorViewRef = useRef(null);
  const [selectedLanguage, setSelectedLanguage] = useState("python");
  const [code, setCode] = React.useState(`// Digite o seu código aqui
`);
  const navigate = useNavigate();

  // Configuração do autocomplemento para Python
  const completions = [
    { label: "print", type: "function" },
    { label: "def", type: "keyword" },
    { label: "return", type: "keyword" },
    { label: "if", type: "keyword" },
    { label: "else", type: "keyword" },
    { label: "while", type: "keyword" },
    { label: "for", type: "keyword" },
    { label: "in", type: "keyword" },
    { label: "range", type: "function" },
    { label: "len", type: "function" },
    { label: "str", type: "function" },
    { label: "int", type: "function" },
    { label: "input", type: "function" },
  ];

  function myCompletions(context) {
    let before = context.matchBefore(/\w+/);
    if (!context.explicit && !before) return null;
    return {
      from: before ? before.from : context.pos,
      options: completions,
      validFor: /^\w*$/,
    };
  }

  useEffect(() => {
    if (editorRef.current && !editorViewRef.current) {
      const startState = EditorState.create({
        doc: "# Escreva seu código aqui\n",
        extensions: [
          history(),
          python(),
          oneDark,
          syntaxHighlighting(defaultHighlightStyle),
          bracketMatching(),
          autocompletion({ override: [myCompletions] }),
          indentOnInput(),
          EditorView.lineWrapping,
          EditorView.theme({
            "&": {
              backgroundColor: "var(--color-roxo-claro)",
              height: "100%",
            },
            ".cm-content": {
              fontFamily: "monospace",
              fontSize: "20px",
            },
            ".cm-gutters": {
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              color: "#666",
              border: "none",
              minWidth: "80px",
            },
            ".cm-activeLineGutter": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "#fff",
            },
            ".cm-activeLine": {
              backgroundColor: "rgba(255, 255, 255, 0.03)",
            },
          }),
        ],
      });

      editorViewRef.current = new EditorView({
        state: startState,
        parent: editorRef.current,
      });
    }

    // Cleanup na desmontagem do componente
    return () => {
      if (editorViewRef.current) {
        editorViewRef.current.destroy();
        editorViewRef.current = null;
      }
    };
  }, []);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Atualiza o editor com a nova linguagem quando necessário
  };

  return (
    <Layout>
      <div className="resolucao-container">
        <div className="resolucao-content">
          <section className="resolucao-enunciado">
            <h2>Dê um Olá para a Plataforma!!</h2>
            <div className="user-info">
              <span className="user-name">Jotapê DEV</span>
              <span className="user-country">🇧🇷 Brasil</span>
            </div>
            <p>
              Bem-vindo(a) à nossa plataforma de desafios de programação! Neste
              primeiro desafio, queremos que você crie um programa simples que
              imprima uma mensagem de saudação. O objetivo é garantir que você
              esteja familiarizado com o processo de submissão de código e
              execução dos testes.
            </p>
            <p>
              Você deve escrever um programa que, quando executado, exiba a
              mensagem de saudação: <strong>"Olá Overflows!!"</strong>
            </p>
            <p>
              <strong>Entrada:</strong> Não há entradas para este desafio. O
              programa deve apenas imprimir a mensagem solicitada.
            </p>
            <p>
              <strong>Saída:</strong> Seu programa deve produzir exatamente a
              seguinte saída: <code>Olá Overflows!!</code>
            </p>
            <div className="resolucao-exemplo">
              <div>Exemplos de Entrada</div>
              <div>Exemplos de Saída</div>
              <div>Olá Overflows!!</div>
            </div>
            <p className="resolucao-obs">
              <strong>OBS:</strong> Certifique-se de que a saída do seu programa
              corresponda exatamente à saída esperada, incluindo letras
              maiúsculas e minúsculas, bem como os caracteres de pontuação.
            </p>
            <p className="resolucao-contato">
              <span className="contato-icon">💬</span>{" "}
              <span className="p">Com problemas? Entre em contato!</span>
            </p>
          </section>
          {/* Coluna da Direita */}
          <aside className="resolucao-lateral">
            <div className="botoes">
              <button
                className="btn-debug"
                onClick={() => {
                  const code = editorViewRef.current.state.doc.toString();

                  // Dividir o código em linhas
                  const lines = code.split("\n");
                  let lineNumber = 1;

                  // Simular debug linha por linha
                  const debugInterval = setInterval(() => {
                    if (lineNumber <= lines.length) {
                      const currentLine = lines[lineNumber - 1].trim();

                      if (currentLine && !currentLine.startsWith("#")) {
                        // Se encontrar o print com a saída esperada
                        if (
                          currentLine.includes('print("Olá Overflows!!")') ||
                          currentLine.includes("print('Olá Overflows!!')")
                        ) {
                          clearInterval(debugInterval);
                          // Navegar para a tela de acerto
                          navigate("/verificacao");
                          return;
                        }
                      }
                      lineNumber++;
                    } else {
                      clearInterval(debugInterval);
                      // Navegar para a tela de erro indefinido
                      navigate("/erro");
                    }
                  }, 1500); // Intervalo de 1.5 segundos entre cada linha

                  // Feedback visual do botão
                  const btn = document.querySelector(".btn-debug");
                  btn.style.background = "#2196F3";

                  setTimeout(() => {
                    btn.style.background = "";
                  }, lines.length * 1500 + 1000);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M23.712 16.1737L24 14.3766L19.6202 13.6129V9.88394C19.6202 9.81206 19.6202 9.74916 19.6202 9.67728L23.9068 8.45526L23.4748 6.72108L19.383 7.8802C19.1044 6.76319 18.6033 5.72248 17.9136 4.82816C17.2238 3.93383 16.3614 3.20666 15.3844 2.69562V0H13.6901V2.00374C12.5755 1.72817 11.4161 1.72817 10.3014 2.00374V0H8.60713V2.69562C7.62714 3.21247 6.76354 3.94703 6.07504 4.8494C5.38653 5.75176 4.88926 6.80077 4.61701 7.92512L0.525238 6.72108L0.135545 8.45526L4.37134 9.67728C4.37134 9.74916 4.37134 9.81206 4.37134 9.88394V13.6129L0 14.3766L0.271091 16.1737L4.37134 15.4369C4.39069 16.5457 4.62726 17.6381 5.06601 18.6447L1.22838 22.7241L2.43134 24L5.98094 20.2261C6.69386 21.1968 7.60622 21.9822 8.64854 22.5224C9.69087 23.0625 10.8357 23.3433 11.9958 23.3433C13.1559 23.3433 14.3007 23.0625 15.343 22.5224C16.3853 21.9822 17.2977 21.1968 18.0106 20.2261L21.5602 24L22.7631 22.7241L18.917 18.6447C19.3587 17.6388 19.5982 16.5463 19.6202 15.4369L23.712 16.1737ZM11.1486 21.4931C9.73843 21.2772 8.44867 20.53 7.5153 19.3882C6.58192 18.2464 6.06732 16.7864 6.06565 15.2752V9.88394H11.1486V21.4931ZM6.31133 8.08686C6.67536 6.78754 7.4254 5.64771 8.44971 4.83717C9.47402 4.02662 10.7178 3.58874 11.9958 3.58874C13.2737 3.58874 14.5175 4.02662 15.5418 4.83717C16.5661 5.64771 17.3162 6.78754 17.6802 8.08686H6.31133ZM17.9259 15.2752C17.9242 16.7864 17.4096 18.2464 16.4762 19.3882C15.5429 20.53 14.2531 21.2772 12.8429 21.4931V9.88394H17.9259V15.2752Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button
                className="btn-executar"
                onClick={() => {
                  const code = editorViewRef.current.state.doc.toString();
                  const expectedOutput = "Olá Overflows!!";

                  if (
                    code.includes(`print("${expectedOutput}")`) ||
                    code.includes(`print('${expectedOutput}')`)
                  ) {
                    // Navegar para a tela de acerto
                    navigate("/verificacao");
                  } else {
                    // Navegar para a tela de erro
                    navigate("/erro");
                  }
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Executar
              </button>
            </div>

            <div className="painel-testes">
              {/* Substitua o antigo editor pelo novo: */}
              <CodeMirror
                value={code}
                onChange={setCode}
                style={{
                  height: "60vh",
                  width: "100%",
                  marginLeft: "10px",
                  marginRight: "10px",
                  marginTop: "10px",
                  borderRadius: "20px",
                }}
                theme="dark"
                extensions={[cpp(), customTheme]}
              />
            </div>

            <div className="botoes-esquerda">
              <div className="language-selector">
                <button className="btn-language">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span>{selectedLanguage}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="language-options">
                  <button onClick={() => handleLanguageChange("python")}>
                    Python
                  </button>
                  <button onClick={() => handleLanguageChange("javascript")}>
                    JavaScript
                  </button>
                  <button onClick={() => handleLanguageChange("java")}>
                    Java
                  </button>
                  <button onClick={() => handleLanguageChange("cpp")}>
                    C++
                  </button>
                </div>
              </div>
            </div>
            <div className="botoes-direita">
              <button
                className="btn-download"
                onClick={() => {
                  // Obter o código do editor
                  const code = editorViewRef.current.state.doc.toString();

                  // Criar um blob com o código
                  const blob = new Blob([code], { type: "text/plain" });

                  // Criar um URL para o blob
                  const url = URL.createObjectURL(blob);

                  // Criar um elemento de link para download
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = `codigo_${selectedLanguage}.${
                    selectedLanguage === "python"
                      ? "py"
                      : selectedLanguage === "javascript"
                      ? "js"
                      : selectedLanguage === "java"
                      ? "java"
                      : "cpp"
                  }`;

                  // Adicionar o link ao documento, clicar nele e removê-lo
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);

                  // Liberar o URL
                  URL.revokeObjectURL(url);
                }}
                title="Baixar código"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
              <button
                className="btn-copiar"
                onClick={() => {
                  // Obter o código do editor
                  const code = editorViewRef.current.state.doc.toString();

                  // Copiar para a área de transferência
                  navigator.clipboard
                    .writeText(code)
                    .then(() => {
                      // Feedback visual temporário
                      const btn = document.querySelector(".btn-copiar");
                      btn.style.background = "#4CAF50";
                      setTimeout(() => {
                        btn.style.background = "";
                      }, 1000);
                    })
                    .catch((err) => {
                      console.error("Erro ao copiar: ", err);
                    });
                }}
                title="Copiar código"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
              <button
                className="btn-atualizar"
                onClick={() => {
                  // Resetar o editor para o estado inicial
                  const transaction = editorViewRef.current.state.update({
                    changes: {
                      from: 0,
                      to: editorViewRef.current.state.doc.length,
                      insert: "# Escreva seu código aqui\n",
                    },
                  });
                  editorViewRef.current.dispatch(transaction);
                }}
                title="Limpar editor"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 2v6h-6"></path>
                  <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                  <path d="M3 22v-6h6"></path>
                  <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
                </svg>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default TelaResQuestao;
