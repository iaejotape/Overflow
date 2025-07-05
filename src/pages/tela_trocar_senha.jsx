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

  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const [camposInvalidos, setCamposInvalidos] = useState([]);

  const toggleSenha = (campo) => {
    setMostrarSenha((prev) => ({ ...prev, [campo]: !prev[campo] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const invalidos = [];
    if (!senhaAtual) invalidos.push("senhaAtual");
    if (!novaSenha) invalidos.push("novaSenha");
    if (!confirmarSenha) invalidos.push("confirmarSenha");

    if (invalidos.length > 0) {
      setCamposInvalidos(invalidos);
      setErro("Todos os campos são obrigatórios.");
      return;
    }

    if (novaSenha !== confirmarSenha) {
      setCamposInvalidos(["novaSenha", "confirmarSenha"]);
      setErro("A nova senha e a confirmação não coincidem.");
      return;
    }

    setErro("");
    setCamposInvalidos([]);
    alert("Senha alterada com sucesso!");
    // Aqui você pode adicionar o envio ao backend
  };

  const isCampoInvalido = (campo) => camposInvalidos.includes(campo);

  const renderCampoSenha = (label, placeholder, campoKey, value, onChange) => (
    <div className={styles.grupo_senha}>
      <h2 style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        {label}
        {isCampoInvalido(campoKey) && (
          <span style={{ color: "red", fontSize: "0.9rem" }}>*</span>
        )}
      </h2>
      <div
        className={`${styles.input_container} ${
          isCampoInvalido(campoKey) ? styles.erroCampo : ""
        }`}
      >
        <FaLock className={styles.icon} />
        <input
          type={mostrarSenha[campoKey] ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
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
        <form className={styles.form_senha} onSubmit={handleSubmit}>
          <h1>Alterar senha</h1>

          {renderCampoSenha(
            "Senha atual:",
            "Digite a sua senha atual...",
            "senhaAtual",
            senhaAtual,
            setSenhaAtual
          )}

          {/* <div className={styles.esqueci_senha}>
            <a href="#">Esqueci minha senha</a>
          </div> */}

          {renderCampoSenha(
            "Nova senha:",
            "Digite sua nova senha...",
            "novaSenha",
            novaSenha,
            setNovaSenha
          )}

          {renderCampoSenha(
            "Confirmação de senha:",
            "Confirme sua nova senha...",
            "confirmarSenha",
            confirmarSenha,
            setConfirmarSenha
          )}

          {erro && <p className={styles.mensagem_erro}>{erro}</p>}

          <div className={styles.botoes}>
            <div className={styles.botao1}>
              <button className={styles.button} type="submit">
                Salvar Alteração
              </button>
            </div>
            <div className={styles.botao2}>
              <button className={styles.button} type="button">
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TrocarSenha;
