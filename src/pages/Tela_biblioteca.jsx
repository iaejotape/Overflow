import React, { useState } from "react";
import style from "../styles/biblioteca.module.css";
import Barra from "../componentes/menu.jsx";
import CodeMirror from "@uiw/react-codemirror";
import { FaDownload, FaPlay, FaRedo } from 'react-icons/fa';
import { cpp } from "@codemirror/lang-cpp";
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

// Dados estáticos para cada linguagem
const languageData = {
  Python: {
    code: `# Overflows - 2025 - Python\nprint("Hello World!")`,
    terminal: "Hello World!",
    extension: python(),
    topics: {
      "Introdução": {
        content: " Este código é um exemplo básico que demonstra como escrever um programa simples que imprime uma mensagem. Ele ajuda a ilustrar a sintaxe da linguagem escolhida.",
        examples: `# Exemplo de Introdução ao Python\nprint("Olá Mundo")`
      },
      "Sintaxe": {
        content: "Python usa indentação para definir blocos de código.",
        examples: `# Exemplo de Sintaxe\nif True:\n    print("Verdadeiro")\nelse:\n    print("Falso")`
      },
      "Variáveis": {
        content: "Python não tem comando para declarar uma variável. Uma variável é criada no momento em que você atribui um valor a ela pela primeira vez.",
        examples: `# Exemplo de Variáveis\nnome = "João"\nidade = 25\nprint(f"{nome} tem {idade} anos")`
      }
    }
  },
  C: {
    code: `// Overflows - 2025 - C\n#include <stdio.h>\nint main() {\n    printf("Hello World!");\n    return 0;\n}`,
    terminal: "Hello World!",
    extension: cpp(),
    topics: {
      "Introdução": {
        content: "C é uma linguagem de programação compilada de propósito geral.",
        examples: `// Exemplo de Introdução ao C\n#include <stdio.h>\nint main() {\n    printf("Olá Mundo");\n    return 0;\n}`
      },
      "Sintaxe": {
        content: "C usa chaves {} para delimitar blocos de código.",
        examples: `// Exemplo de Sintaxe\n#include <stdio.h>\nint main() {\n    int x = 5;\n    if (x > 0) {\n        printf("Positivo");\n    }\n    return 0;\n}`,
      },
      "Variáveis": {
        content: "Em C, as variáveis devem ser declaradas com seu tipo.",
        examples: `// Exemplo de Variáveis\n#include <stdio.h>\nint main() {\n    int idade = 25;\n    printf("Idade: %d", idade);\n    return 0;\n}`
      }
    }
  },
  "C++": {
    code: `// Overflows - 2025 - C++\n#include <iostream>\nint main() {\n    std::cout << "Hello World!";\n    return 0;\n}`,
    terminal: "Hello World!",
    extension: cpp(),
    topics: {
      "Introdução": {
        content: "C++ é uma extensão da linguagem C com orientação a objetos.",
        examples: `// Exemplo de Introdução ao C++\n#include <iostream>\nint main() {\n    std::cout << "Olá Mundo";\n    return 0;\n}`
      },
      "Sintaxe": {
        content: "C++ mantém a sintaxe de C com adições de OO.",
        examples: `// Exemplo de Sintaxe\n#include <iostream>\nint main() {\n    int x = 5;\n    if (x > 0) {\n        std::cout << "Positivo";\n    }\n    return 0;\n}`
      },
      "Variáveis": {
        content: "Variáveis em C++ devem ser declaradas com tipo.",
        examples: `// Exemplo de Variáveis\n#include <iostream>\nint main() {\n    int idade = 25;\n    std::cout << "Idade: " << idade;\n    return 0;\n}`
      }
    }
  },
  Java: {
    code: `// Overflows - 2025 - Java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n    }\n}`,
    terminal: "Hello World!",
    extension: java(),
    topics: {
      "Introdução": {
        content: "Java é uma linguagem orientada a objetos executada na JVM.",
        examples: `// Exemplo de Introdução ao Java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Olá Mundo");\n    }\n}`
      },
      "Sintaxe": {
        content: "Java usa sintaxe similar ao C++ com OO obrigatória.",
        examples: `// Exemplo de Sintaxe\npublic class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x > 0) {\n            System.out.println("Positivo");\n        }\n    }\n}`
      },
      "Variáveis": {
        content: "Variáveis em Java devem ser declaradas com tipo.",
        examples: `// Exemplo de Variáveis\npublic class Main {\n    public static void main(String[] args) {\n        int idade = 25;\n        System.out.println("Idade: " + idade);\n    }\n}`
      }
    }
  }
};

export default function Linguagens() {
  const [activeLanguage, setActiveLanguage] = useState("Python");
  const [activeTopic, setActiveTopic] = useState("Introdução");
  const [code, setCode] = useState(languageData.Python.code);
  const [terminal, setTerminal] = useState(languageData.Python.terminal);
  
  const currentLanguage = languageData[activeLanguage];
  
  const toggleSection = (lang) => {
    setActiveLanguage(lang);
    setActiveTopic("Introdução");
    setCode(languageData[lang].code);
    setTerminal(languageData[lang].terminal);
  };

  const handleTopicClick = (topic) => {
    setActiveTopic(topic);
    setCode(currentLanguage.topics[topic].examples);
    setTerminal("Clique em 'Executar' para ver a saída");
  };

  return (
    <div className={style.main}>
      <Barra />
      <div className={style.sidebar}>
        {Object.keys(languageData).map((lang) => (
          <div key={lang} className={style["language-group"]}>
            <button
              className={`${style.language} ${activeLanguage === lang ? style.active : ""}`}
              onClick={() => toggleSection(lang)}
            >
              {lang} <span className={style.arrow}>▾</span>
            </button>
            {activeLanguage === lang && (
              <ul className={style.topics}>
                {Object.keys(languageData[lang].topics).map((topic) => (
                  <li 
                    key={topic} 
                    className={activeTopic === topic ? style.activeTopic : ""}
                    onClick={() => handleTopicClick(topic)}
                  >
                    {topic}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className={style.geral}>
        <div className={style.exemplo}>
          <div className={style.botoes_editor}>
            <button><FaDownload/> Download</button>
            <button onClick={() => {
              setCode(currentLanguage.code);
              setTerminal(currentLanguage.terminal);
            }}><FaRedo/>Reset</button>
            <div className={style.executar}><button><FaPlay /> Executar</button></div>
          </div>
          <div className={style.editor}>
            <div className="code">
              <CodeMirror
                value={code}
                onChange={(value) => setCode(value)}
                style={{
                  height: "55vh",
                  width: "90vh",
                  marginLeft: "20px",
                  marginRight: "20px",
                  marginTop: "0px",
                  borderRadius: "20px",
                }}
                theme="dark"
                extensions={[currentLanguage.extension, customTheme]}
              />
            </div>
            <div className={style.saidaTeste}>
              <textarea 
                readOnly 
                value={terminal}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#161424",
                  color: "#a6e3a1", 
                  border: "none",
                  padding: "10px",
                  fontFamily: "monospace",
                  borderRadius: "0 0 20px 20px",
                  resize: "none"
                }}
              />
            </div>
          </div>
        </div>
        <div className={style.explicacao}>
          <h1>{activeTopic} em {activeLanguage}</h1>
          <p>{currentLanguage.topics[activeTopic].content}</p>
          
          <h2>Como usar:</h2>
          <p>Clique em um tópico à esquerda para carregar exemplos no editor.</p>
        </div>
      </div>
    </div>
  );
}