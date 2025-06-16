import React, { useState } from "react";
import style from "../styles/biblioteca.module.css";
import Barra from "../componentes/menu.jsx";
import CodeMirror from "@uiw/react-codemirror";
import { cpp} from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";
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

export default function Linguagens() {
  const [sections, setSections] = useState({
    Python: true,
    C: false,
    "C++": false,
    Java: false,
  });

  const [code, setCode] = useState(`# Python
print("Olá Mundo!")
`);
  const [languageExtension, setLanguageExtension] = useState(python());

  const toggleSection = (lang) => {
    setSections(() => ({
      Python: false,
      C: false,
      "C++": false,
      Java: false,
      [lang]: true,
    }));

    switch (lang) {
      case "Python":
        setCode(`# Python\nprint("Hello Word!!")`);
        setLanguageExtension(python());
        break;
      case "C":
        setCode(`// C\n#include <stdio.h>\nint main() {\n    printf("Hello Word!!");\n    return 0;\n}`);
        setLanguageExtension(c());
        break;
      case "C++":
        setCode(`// C++\n#include <iostream>\nint main() {\n    std::cout << "Hello Word!!";\n    return 0;\n}`);
        setLanguageExtension(cpp());
        break;
      case "Java":
        setCode(`// Java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello Word!!");\n    }\n}`);
        setLanguageExtension(java());
        break;
      default:
        break;
    }
  };

  return (
    <div className={style.main}>
      <Barra />
      <div className={style.sidebar}>
        {["Python", "C", "C++", "Java"].map((lang) => (
          <div key={lang} className={style["language-group"]}>
            <button
              className={`${style.language} ${sections[lang] ? style.active : ""}`}
              onClick={() => toggleSection(lang)}
            >
              {lang} <span className={style.arrow}>▾</span>
            </button>
            {sections[lang] && (
              <ul className={style.topics}>
                <li>Introdução</li>
                <li>Sintaxe</li>
                <li>Variáveis</li>
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className={style.geral}>
        <div className={style.exemplo}>
          <div className={style.botoes_editor}>
            <button>Download</button>
            <button>Reset</button>
            <button>Fork</button>
          </div>
          <div className={style.editor}>
            <div className="code">
              <CodeMirror
                value={code}
                onChange={(value) => setCode(value)}
                style={{
                  height: "55vh",
                  width: "82vh",
                  marginLeft: "20px",
                  marginRight: "20px",
                  marginTop: "0px",
                  borderRadius: "20px",
                }}
                theme="dark"
                extensions={[languageExtension, customTheme]}
              />
            </div>
            <div className={style.saidaTeste}>
              <textarea readOnly value="Hello Word!!" />
            </div>
          </div>
        </div>
        <div className={style.explicacao}>
          <p>
            Este código é um exemplo básico que demonstra como escrever um programa simples que imprime
            uma mensagem. Ele ajuda a ilustrar a sintaxe da linguagem escolhida.
          </p>
          <h1>Funcionalidade do código:</h1>
          <h2>1- Propósito Simples:</h2>
          <p>
            O código imprime a mensagem "Hello Word!!" na tela. É um clássico exemplo de introdução a uma
            linguagem de programação.
          </p>
          <h2>2- Sintaxe Básica:</h2>
          <p>
            O comando de saída (como `print`, `printf`, ou `System.out.println`) é usado para exibir
            informações no terminal.
          </p>
          <h2>3- Teste do Ambiente:</h2>
          <p>
            Esse programa serve para confirmar que o ambiente está configurado corretamente e pronto para
            uso.
          </p>
        </div>
      </div>
    </div>
  );
}
