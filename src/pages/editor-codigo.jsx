import React, { useState } from "react";
import styles from "../styles/editor.module.css";
import Layout from "../componentes/layout";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { java } from '@codemirror/lang-java';
import { python } from '@codemirror/lang-python';

import { EditorView } from "@codemirror/view";
import { HighlightStyle, tags as t } from "@codemirror/highlight";

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
    backgroundColor: "",
    color: "#e74b77",
    fontWeight: 600,
    border: "none",
    //borderRadius: "20px",
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
    display: "flex", 
    flexDirection: "column",
  },
});

export default function Editor() {
  const [code, setCode] = useState(""); // Estado para o código
  const [language, setLanguage] = useState(""); // Estado para a bendita linguagem
  const [input, setInput] = useState(""); // Estado para a entrada
  const [output, setOutput] = useState(""); // Estado para a saída do código
  const [isEditorEnabled, setIsEditorEnabled] = useState(false); // Uso do editor
  const [loading, setLoading] = useState(false); // Estado para mostrar carregamento

  const getLanguageDetails = (selectedValue) => {
    switch (selectedValue) {
      case "c":
        return { extension: cpp(), judge0Id: 50, exampleCode: `// Overflow - 2k25 - S2\n#include <stdio.h>\n\nint main() {\n    printf("Olá Mundo!\\n");\n    return 0;\n}\n` };
      case "cpp":
        return { extension: cpp(), judge0Id: 54, exampleCode: `// Overflow - 2k25 - S2\n#include <iostream>\n\nint main() {\n    std::cout << "Olá Mundo!" << std::endl;\n    return 0;\n}\n` };
      case "Java":
        return { extension: java(), judge0Id: 62, exampleCode: `// Overflow - 2k25 - S2\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Olá Mundo!");\n    }\n}\n` };
      case "Python":
        return { extension: python(), judge0Id: 71, exampleCode: `# Overflow - 2k25 - S2\nprint("Olá Mundo!")\n` };
      default:
        return { extension: null, judge0Id: null, exampleCode: "" };
    }
  };

  const selecionarLinguagem = (e) => {
    const selectedValue = e.target.value;
    setLanguage(selectedValue);

    if (selectedValue === "0") {
      setIsEditorEnabled(false);
      setCode(""); // Limpa o código
    } else {
      setIsEditorEnabled(true);
      const { exampleCode } = getLanguageDetails(selectedValue);
      setCode(exampleCode); // coloca o código de exemplo
    }
    setOutput(""); // Limpa a saída quando troca a linguagem
  };

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Função para enviar o código ao backend
  const enviarCodigo = async () => {
    if (!language || language === "0" || !code.trim()) {
      alert("Por favor, selecione uma linguagem e digite algum código.");
      return;
    }

    setLoading(true);
    setOutput("Executando código..."); // Mensagem de aviso
    
    const { judge0Id } = getLanguageDetails(language);

    try {
      const response = await fetch("http://localhost:5000/api/run-code", { // URL de comunicacao do backend
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source_code: code,
          language_id: judge0Id,
          stdin: input,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao executar o código");
      }

      const data = await response.json();
      // Judge0 retorna stdout para saída normal e stderr para erros de execução
      // ou compile_output para erros de compilação
      if (data.stdout) {
        setOutput(data.stdout);
      } else if (data.stderr) {
        setOutput(`Erro de Execução:\n${data.stderr}`);
      } else if (data.compile_output) {
        setOutput(`Erro de Compilação:\n${data.compile_output}`);
      } else {
        setOutput("Nenhuma saída ou erro retornado.");
      }
      
    } catch (error) {
      console.error("Erro ao enviar código:", error);
      setOutput(`Erro: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const codeMirrorExtensions = [customTheme];
  const { extension: currentLanguageExtension } = getLanguageDetails(language);
  if (currentLanguageExtension) {
    codeMirrorExtensions.push(currentLanguageExtension);
  }

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.editor}>
          <div className={styles.code}>
            <CodeMirror
              value={code} // <--- O estado d o codigo
              height="100%"
              width="100%"
              theme="dark"
              extensions={codeMirrorExtensions}
              onChange={handleCodeChange}
              editable={isEditorEnabled}
            />
          </div>

          <div className={styles.opcoesEditor}>
            <div className={styles.inputGroup}>
              <label className={styles.inputGroupText} htmlFor="selectLang">
                <i className="bi bi-globe2"></i>
              </label>
              <select className="form-select" id="selectLang" onChange={selecionarLinguagem} value={language}>
                <option value="0">Selecione sua linguagem...</option>
                <option value="c">C</option>
                <option value="cpp">C++</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
              </select>
            </div>

            <div className={styles.btnGroup} role="group">
              <button className={`${styles.btn} ${styles.btn_download}`} title="Download do Código">
                <i className="bi bi-cloud-download"></i>
              </button>
              <button className={`${styles.btn} ${styles.btn_copiar}`} title="Copiar o Código">
                <i className="bi bi-copy"></i>
              </button>
              <button className={`${styles.btn} ${styles.btn_limpar}`} title="Limpar o Editor" onClick={() => { setCode(""); setInput(""); setOutput(""); setLanguage("0"); setIsEditorEnabled(false); }}>
                <i className="bi bi-recycle"></i>
              </button>
            </div>

            <div className={styles.execucao}>
              <button className={`${styles.btn} ${styles.btn_debug}`} title="Debug **Inativo**" disabled>
                <i className="bi bi-bug"></i>
              </button>
              <button className={`${styles.btn} ${styles.btn_success}`} onClick={enviarCodigo} disabled={loading || !isEditorEnabled}>
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    {" "}Executando...
                  </>
                ) : (
                  <>
                    <i className="bi bi-play-fill"></i> Executar
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.editor_dados}>
          <div className={styles.entradaTeste}>
            <span>Entrada:</span>
            <textarea name="input" value={input} onChange={handleInputChange} placeholder="Digite os Valores..." disabled={!isEditorEnabled}></textarea>
          </div>
          <div className={styles.saidaTeste}>
            <span>Saída:</span>
            <textarea name="output" value={output} readOnly placeholder="..."></textarea>
          </div>
        </div>
      </div>
    </Layout>
  );
}