import React from "react";
// import { exemplosPorLinguagem } from "../utils/linguagens";
import styles from "../styles/editor.module.css";
import Layout from "../componentes/layout";
import CodeMirror from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";


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

export default function Editor() {
    
  return (
    // O que tiver aqui dentro já tem uma div pai chamada ".principal"
    <Layout> 
        <div className={styles.container}>
            <div className={styles.editor}>
                <div className="code">
                    <CodeMirror
                    value={`// Overflow Editor - 2K25
#include <stdio.h>
int main(){
    printf("Olá Mundo!");
}
`}
                    style={{ height: "75vh", width: "100wh", marginLeft: "20px", marginRight: "20px", marginTop: "20px", borderRadius: "20px"}} // 🔥 força com estilo inline
                    theme="dark"
                    extensions={[cpp(), customTheme]}
                    />
                </div>
             


                <div className={styles.opcoesEditor}>
                    <div className={styles.inputGroup}>
                        <label className={styles.inputGroupText} htmlFor="selectLang">
                            <i className="bi bi-globe2"></i>
                        </label>
                        <select className="form-select" id="selectLang">
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
                    <button className={`${styles.btn} ${styles.btn_limpar}`} title="Limpar o Editor">
                        <i className="bi bi-recycle"></i>
                    </button>
                    </div>

                    <div className={styles.execucao}>
                        <button className={`${styles.btn} ${styles.btn_debug}`} title="Debug **Inativo**">
                            <i className="bi bi-bug"></i>
                        </button>
                        <button className={`${styles.btn} ${styles.btn_success}`}>
                            <i className="bi bi-play-fill"></i> Executar
                        </button>
                    </div>
                </div>
        </div>
        <div className={styles.editor_dados}>
            
            <div className={styles.entradaTeste}>
                <span>Entrada:</span>
                <textarea name="" id="" placeholder="Digite os Valores..."></textarea>
            </div>
            <div className={styles.saidaTeste}>
                <span>Saída:</span>
                <textarea name="" id="" placeholder="..."></textarea>
            </div>
        </div>
        </div>
      
    </Layout>
  );
}