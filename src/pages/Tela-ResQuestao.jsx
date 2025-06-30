import React, { useState, useEffect } from "react";
import "../styles/Tela-ResQuestao.css";
import styles from "../styles/editor.module.css";
import Layout from "../componentes/layout";

import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';
import { EditorView } from "@codemirror/view";
import { HighlightStyle, tags as t } from "@codemirror/highlight";
import ModalDica from "./modal-dica.jsx";

import { useNavigate } from "react-router-dom";

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
    width: "100%",
    backgroundColor: "",
    color: "#e74b77",
    fontWeight: 600,
    border: "none",
  },
  ".cm-scroller": {
    overflowY: "auto",
    height: "100%",
    padding: "1rem",
    fontFamily: "monospace",
    backgroundColor: "transparent",
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
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

const TelaResQuestao =({ 
  questionId, 
  difficulty = 'hard', 
  hints = ["Lembre-se da função de impressão padrão da sua linguagem.",
    "A saída precisa ser exatamente igual à do enunciado, incluindo maiúsculas e minúsculas."], 
  onHintUsed = () => {} 
}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [usedHints, setUsedHints] = useState(0);
  const [availableHints, setAvailableHints] = useState(0);


  const getMaxHints = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 1;
      case 'medium':
      case 'intermediate':
        return 2;
      case 'hard':
      case 'difficult':
        return 3;
      default:
        return 1;
          }
  };

    const [selectedLanguage, setSelectedLanguage] = useState("python");
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const getLanguageDetails = (lang) => {
        switch (lang) {
            case "c":
                return { extension: cpp(), judge0Id: 50, exampleCode: `// Overflow - 2k25 - S2\n#include <stdio.h>\n\nint main() {\n    printf("Olá Overflows!!\\n");\n    return 0;\n}\n` };
            case "cpp":
                return { extension: cpp(), judge0Id: 54, exampleCode: `// Overflow - 2k25 - S2\n#include <iostream>\n\nint main() {\n    std::cout << "Olá Overflows!!" << std::endl;\n    return 0;\n}\n` };
            case "Java":
                return { extension: java(), judge0Id: 62, exampleCode: `// Overflow - 2k25 - S2\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Olá Overflows!!");\n    }\n}\n` };
            case "Python":
                return { extension: python(), judge0Id: 71, exampleCode: `# Overflow - 2k25 - S2\nprint("Olá Overflows!!")\n` };
            default:
                return { extension: python(), judge0Id: 71, exampleCode: `# Digite o seu código aqui\n` };
        }
    };

    useEffect(() => {
        const { exampleCode } = getLanguageDetails(selectedLanguage);
        setCode(exampleCode);
        const maxHints = getMaxHints(difficulty);
    setAvailableHints(maxHints);
    
    /*Recupera o estado das dicas usadas do localStorage
    const savedHints = localStorage.getItem(`hints_used_${questionId}`);
    if (savedHints) {
      setUsedHints(parseInt(savedHints, 10));
    }*/
    }, [selectedLanguage, questionId, difficulty]);

    const handleHintClick = () => {
    if (usedHints < availableHints && hints.length > 0) {
      setIsModalOpen(true);
    }
  };

  const handleHintConfirm = () => {
    const newUsedHints = usedHints + 1;
    setUsedHints(newUsedHints);
    
    
    localStorage.setItem(`hints_used_${questionId}`, newUsedHints.toString());
    
    // Callback para o componente pai
    onHintUsed(newUsedHints);
    
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const isDisabled = usedHints >= availableHints || hints.length === 0;
  const currentHint = hints[usedHints] || '';

    const handleLanguageChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedLanguage(selectedValue);
    };

    const handleCodeChange = (value) => {
        setCode(value);
    };

    const handleExecuteCode = async () => {
        const { judge0Id } = getLanguageDetails(selectedLanguage);

        if (!code.trim() || !judge0Id) {
            alert("Por favor, selecione uma linguagem e digite algum código válido.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/evaluate-code", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    source_code: code,
                    language_id: judge0Id,
                    stdin: ""
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                console.error("Erro no backend:", result.details || result.error);
                navigate("/erro-indefinido");
                return;
            }

            if (result.status === "success") {
                navigate("/verificacao");
            } else if (result.status === "failed") {
                navigate("/erro");
            } else if (result.status === "compile_error") {
                navigate("/erro");
            } else if (result.status === "runtime_error") {
                navigate("/erro");
            } else {
                navigate("/erroindefinido");
            }

        } catch (error) {
            console.error("Erro ao comunicar com o backend:", error);
            navigate("/erro-indefinido");
        } finally {
            setLoading(false);
        }
    };

    const codeMirrorExtensions = [customTheme, mochaHighlightStyle];
    const { extension: currentLanguageExtension } = getLanguageDetails(selectedLanguage);
    if (currentLanguageExtension) {
        codeMirrorExtensions.push(currentLanguageExtension);
    }

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
                    <aside className="resolucao-lateral">

                        <div className="botoes">
                            <button
                            className={`hintButton ${isDisabled ? "disabled" : ''}`}
                            onClick={handleHintClick}
                            disabled={isDisabled}
                            title={
                            isDisabled 
                                ? usedHints >= availableHints 
                                ? 'Você já usou todas as dicas disponíveis'
                                : 'Nenhuma dica disponível'
                                : `Dica disponível (${availableHints - usedHints} restante${availableHints - usedHints !== 1 ? 's' : ''})`
                            }
                        >
                            <svg 
                            className="lightbulbIcon" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path
                                d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 5.5V17a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.5C7.5 13.5 6 11.5 6 9a6 6 0 0 1 6-6z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            </svg>
                            <span className="hintCount">
                            {availableHints - usedHints}
                            </span>
                        </button>
                            <button
                                className="btn-debug"
                                onClick={() => alert("A função Debug será implementada em breve!")}
                                disabled={loading}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M23.712 16.1737L24 14.3766L19.6202 13.6129V9.88394C19.6202 9.81206 19.6202 9.74916 19.6202 9.67728L23.9068 8.45526L23.4748 6.72108L19.383 7.8802C19.1044 6.76319 18.6033 5.72248 17.9136 4.82816C17.2238 3.93383 16.3614 3.20666 15.3844 2.69562V0H13.6901V2.00374C12.5755 1.72817 11.4161 1.72817 10.3014 2.00374V0H8.60713V2.69562C7.62714 3.21247 6.76354 3.94703 6.07504 4.8494C5.38653 5.75176 4.88926 6.80077 4.61701 7.92512L0.525238 6.72108L0.135545 8.45526L4.37134 9.67728C4.37134 9.74916 4.37134 9.81206 4.37134 9.88394V13.6129L0 14.3766L0.271091 16.1737L4.37134 15.4369C4.39069 16.5457 4.62726 17.6381 5.06601 18.6447L1.22838 22.7241L2.43134 24L5.98094 20.2261C6.69386 21.1968 7.60622 21.9822 8.64854 22.5224C9.69087 23.0625 10.8357 23.3433 11.9958 23.3433C13.1559 23.3433 14.3007 23.0625 15.343 22.5224C16.3853 21.9822 17.2977 21.1968 18.0106 20.2261L21.5602 24L22.7631 22.7241L18.917 18.6447C19.3587 17.6388 19.5982 16.5463 19.6202 15.4369L23.712 16.1737ZM11.1486 21.4931C9.73843 21.2772 8.44867 20.53 7.5153 19.3882C6.58192 18.2464 6.06732 16.7864 6.06565 15.2752V9.88394H11.1486V21.4931ZM6.31133 8.08686C6.67536 6.78754 7.4254 5.64771 8.44971 4.83717C9.47402 4.02662 10.7178 3.58874 11.9958 3.58874C13.2737 3.58874 14.5175 4.02662 15.5418 4.83717C16.5661 5.64771 17.3162 6.78754 17.6802 8.08686H6.31133ZM17.9259 15.2752C17.9242 16.7864 17.4096 18.2464 16.4762 19.3882C15.5429 20.53 14.2531 21.2772 12.8429 21.4931V9.88394H17.9259V15.2752Z" fill="white" />
                                </svg>
                            </button>
                            <button
                                className="btn-executar"
                                onClick={handleExecuteCode} // Chama a função que vai para o backend
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        {" "}Avaliando...
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                        </svg>
                                        Executar
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="painel-testes">
                            <CodeMirror
                              value={code}
                              height="100%"
                              width="500px"
                              theme="dark"
                              extensions={codeMirrorExtensions}
                              onChange={handleCodeChange}
                              editable={true}
                            />
                        </div>

                        <div className="botoes-esquerda">
                            <div className={styles.inputGroup}>
                                <label className={styles.inputGroupText} htmlFor="selectLang">
                                    <i className="bi bi-globe2"></i>
                                </label>
                                <select className="form-select" id="selectLang" onChange={handleLanguageChange} value={selectedLanguage}>
                                    <option value="0">Selecione sua linguagem...</option>
                                    <option value="c">C</option>
                                    <option value="cpp">C++</option>
                                    <option value="Java">Java</option>
                                    <option value="Python">Python</option>
                                </select>
                            </div>
                        </div>
                        <div className="botoes-direita">
                            <button
                                className="btn-download"
                                onClick={() => {
                                    const blob = new Blob([code], { type: "text/plain" });
                                    const url = URL.createObjectURL(blob);
                                    const a = document.createElement("a");
                                    a.href = url;
                                    a.download = `codigo_${selectedLanguage}.${
                                        selectedLanguage === "python" ? "py" :
                                        selectedLanguage === "javascript" ? "js" :
                                        selectedLanguage === "java" ? "java" : "cpp"
                                    }`;
                                    document.body.appendChild(a);
                                    a.click();
                                    document.body.removeChild(a);
                                    URL.revokeObjectURL(url);
                                }}
                                title="Baixar código"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                            </button>
                            <button
                                className="btn-copiar"
                                onClick={() => {
                                    navigator.clipboard.writeText(code)
                                        .then(() => {
                                            const btn = document.querySelector(".btn-copiar");
                                            if (btn) { 
                                                btn.style.background = "#4CAF50";
                                                setTimeout(() => { btn.style.background = ""; }, 1000);
                                            }
                                        })
                                        .catch((err) => { console.error("Erro ao copiar: ", err); });
                                }}
                                title="Copiar código"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                            </button>
                            <button
                                className="btn-atualizar"
                                onClick={() => {
                                    const { exampleCode } = getLanguageDetails(selectedLanguage);
                                    setCode(exampleCode);
                                }}
                                title="Limpar editor"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 2v6h-6"></path>
                                    <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                                    <path d="M3 22v-6h6"></path>
                                    <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
                                </svg>
                            </button>
                        </div>
                    </aside>
                    {isModalOpen && (
        <ModalDica
          hint={currentHint}
          hintNumber={usedHints + 1}
          totalHints={availableHints}
          onConfirm={handleHintConfirm}
          onClose={handleModalClose}
        />
      )}
      
                </div>
                
            </div>
        </Layout>
    );
};

export default TelaResQuestao;