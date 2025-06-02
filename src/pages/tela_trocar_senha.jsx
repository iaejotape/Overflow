import { useState } from "react";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "../styles/trocar_senha.module.css";
import Nuvens from "../componentes/nuvem";
import logo from "../assets/logo_page.svg";

function TrocarSenha() {

    const [mostrarSenha, setMostrarSenha] = useState({
        atual: false,
        nova: false,
        confirmacao: false,
    });

    const toggleSenha = (campo) => {
        setMostrarSenha((prev) => ({ ...prev, [campo]: !prev[campo] }));
    };

    const renderCampoSenha = (label, placeholder, campoKey) => (
        <div className={styles.grupo_senha}>
            <h2>{label}</h2>
            <div className={styles.input_container}>
                <FaLock className={styles.icon} />
                <input
                    type={mostrarSenha[campoKey] ? "text" : "password"}
                    placeholder={placeholder}
                />
                <span
                    className={styles.icon_eye}
                    onClick={() => toggleSenha(campoKey)}
                >
                    {mostrarSenha[campoKey] ? <FaEyeSlash /> : <FaEye />}
                </span>
            </div>
        </div>

        
    );

    return (
        <div className={styles.main}>
            <Nuvens />
            <div className={styles.logo}>
                <img src={logo} alt="imagem overflow" />
            </div>
            <div className={styles.container}>
                <form className={styles.form_senha}>
                    <h1>Alterar senha</h1>

                    {renderCampoSenha("Senha atual:", "Digite a sua senha atual...", "atual", )}
                    <div className={styles.esqueci_senha}>
                        <a href="#">Esqueci minha senha</a>
                    </div>

                    {renderCampoSenha("Nova senha:", "Digite sua nova senha...", "nova")}

                    {renderCampoSenha("Confirmação de senha:", "Confirme sua senha", "confirmacao")}

                    <div className={styles.botoes}>
                        <div className={styles.botao1}>
                            <button className={styles.button}>Salvar Alteração</button>
                        </div>
                        <div className={styles.botao2}>
                            <button className={styles.button}>Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TrocarSenha;
