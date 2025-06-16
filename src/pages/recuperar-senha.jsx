import React, { useState } from "react";
import styles from "../styles/recuperar-senha.module.css";
import logo from "../assets/logo_page.svg";
import Nuvem from "../componentes/nuvem.jsx";
import { useNavigate } from "react-router-dom";

const RecuperarSenha = () => {
  const navigate = useNavigate();
  const [etapa, setEtapa] = useState(1); // 1: escolher método, 2: inserir código
  const [metodoEscolhido, setMetodoEscolhido] = useState("");
  const [contato, setContato] = useState("");
  const [codigo, setCodigo] = useState("");
  const [codigoEnviado, setCodigoEnviado] = useState(false);

  const handleEnviarCodigoSMS = () => {
    if (contato.trim() === "") {
      alert("Por favor, digite seu número de telefone.");
      return;
    }
    setMetodoEscolhido("SMS");
    setCodigoEnviado(true);
    setEtapa(2);
    // Aqui você implementaria a lógica para enviar o SMS
    console.log("Enviando código por SMS para:", contato);
  };

  const handleEnviarCodigoEmail = () => {
    if (contato.trim() === "") {
      alert("Por favor, digite seu email.");
      return;
    }
    setMetodoEscolhido("Email");
    setCodigoEnviado(true);
    setEtapa(2);
    // Aqui você implementaria a lógica para enviar o email
    console.log("Enviando código por email para:", contato);
  };

  const handleVerificarCodigo = () => {
    if (codigo.trim() === "") {
      alert("Por favor, digite o código recebido.");
      return;
    }
    // Aqui você implementaria a lógica para verificar o código
    console.log("Verificando código:", codigo);
    // Se o código estiver correto, redirecionar para tela de nova senha
    alert("Código verificado com sucesso! Redirecionando...");
    // navigate("/nova-senha");
  };

  const handleVoltarLogin = () => {
    navigate("/login");
  };

  const handleVoltarEtapa = () => {
    setEtapa(1);
    setCodigoEnviado(false);
    setMetodoEscolhido("");
    setCodigo("");
  };

  return (
    <div className={styles.main}>
      <Nuvem />
      <div className={styles.imagem}>
        <div className={styles.textLogo}>
          <img src={logo} alt="imagem logo overflow" />
        </div>

        <div className={styles.textoImagem}>
          <img src="../src/assets/gif.gif" alt="gif"/>
          <div className={styles.mensagem}>
            <p className={styles.mensagemEquipe}>
              {etapa === 1 
                ? "Não se preocupe! Vamos ajudar você a recuperar sua senha."
                : `Código enviado por ${metodoEscolhido}! Verifique e digite abaixo.`
              }
            </p>
            <p className={styles.equipeCaistech}>- Equipe Overflows💜</p>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.textoTitulo}>
          <span className={styles.titulo1}>
            {etapa === 1 ? "Recuperar Senha" : "Verificar Código"}
          </span>
          <span className={styles.titulo2}>
            {etapa === 1 
              ? "Escolha como deseja receber o código"
              : "Digite o código que você recebeu"
            }
          </span>
        </div>

        <div className={styles.formulario}>
          {etapa === 1 ? (
            <form>
              <div className={styles.mb3}>
                <label className={styles.label} htmlFor="contato">
                  Telefone ou Email:
                </label>
                <div className={styles.inputGroup}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path d="M20 21.5V19.5C20 18.4391 19.5786 17.4217 18.8284 16.6716C18.0783 15.9214 17.0609 15.5 16 15.5H8C6.93913 15.5 5.92172 15.9214 5.17157 16.6716C4.42143 17.4217 4 18.4391 4 19.5V21.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11.5C14.2091 11.5 16 9.70914 16 7.5C16 5.29086 14.2091 3.5 12 3.5C9.79086 3.5 8 5.29086 8 7.5C8 9.70914 9.79086 11.5 12 11.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input 
                    className={styles.input}
                    type="text"
                    id="contato"
                    value={contato}
                    onChange={(e) => setContato(e.target.value)}
                    placeholder="Digite seu telefone ou email..."
                  />
                </div>
              </div>

              <div className={styles.botoesEnvio}>
                <button 
                  type="button" 
                  className={styles.btnSMS}
                  onClick={handleEnviarCodigoSMS}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                  Enviar código por SMS
                </button>

                <button 
                  type="button" 
                  className={styles.btnEmail}
                  onClick={handleEnviarCodigoEmail}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Enviar código por Email
                </button>
              </div>
            </form>
          ) : (
            <form>
              <div className={styles.mb3}>
                <label className={styles.label} htmlFor="codigo">
                  Código de Verificação:
                </label>
                <div className={styles.inputGroup}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <circle cx="12" cy="16" r="1"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <input 
                    className={styles.input}
                    type="text"
                    id="codigo"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    placeholder="Digite o código recebido..."
                    maxLength="6"
                  />
                </div>
              </div>

              <div className={styles.infoEnvio}>
                <p>Código enviado para: <strong>{contato}</strong> via {metodoEscolhido}</p>
              </div>

              <button 
                type="button" 
                className={styles.btnVerificar}
                onClick={handleVerificarCodigo}
              >
                Verificar Código
              </button>

              <div className={styles.acoes}>
                <button 
                  type="button" 
                  className={styles.btnVoltar}
                  onClick={handleVoltarEtapa}
                >
                  Voltar
                </button>
              </div>
            </form>
          )}

          <div className={styles.linkLogin}>
            <a onClick={handleVoltarLogin}>
              ← Voltar ao Login
            </a>
          </div>
        </div>

        <div className={styles.socialInfos}>
          <div className={styles.title}>
            <span>Siga-nos nas nossas redes</span>
          </div>
          <div className={styles.social}>
            <a
              href="#"
              target="_blank"
              className={styles.socialLink}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <g clipPath="url(#clip0_1529_43)">
                  <path d="M7.5 2.11926C9.35361 2.11926 9.57312 2.12695 10.3021 2.15771C10.9796 2.18591 11.3454 2.29358 11.5893 2.3833C11.9118 2.50122 12.1449 2.64478 12.3861 2.87292C12.63 3.10364 12.779 3.32153 12.9037 3.62659C12.9985 3.8573 13.1123 4.20593 13.1421 4.84424C13.1747 5.53638 13.1828 5.74402 13.1828 7.49487C13.1828 9.24829 13.1747 9.45593 13.1421 10.1455C13.1123 10.7864 12.9985 11.1324 12.9037 11.3632C12.779 11.6682 12.6272 11.8887 12.3861 12.1168C12.1422 12.3475 11.9118 12.4885 11.5893 12.6064C11.3454 12.6962 10.9769 12.8038 10.3021 12.832C9.57041 12.8628 9.3509 12.8705 7.5 12.8705C5.64639 12.8705 5.42688 12.8628 4.6979 12.832C4.02041 12.8038 3.65457 12.6962 3.41067 12.6064C3.08818 12.4885 2.85513 12.345 2.61394 12.1168C2.37004 11.8861 2.221 11.6682 2.09634 11.3632C2.00149 11.1324 1.88767 10.7838 1.85786 10.1455C1.82534 9.45337 1.81721 9.24573 1.81721 7.49487C1.81721 5.74146 1.82534 5.53381 1.85786 4.84424C1.88767 4.20337 2.00149 3.8573 2.09634 3.62659C2.221 3.32153 2.37275 3.10107 2.61394 2.87292C2.85784 2.64221 3.08818 2.50122 3.41067 2.3833C3.65457 2.29358 4.02312 2.18591 4.6979 2.15771C5.42688 2.12695 5.64639 2.11926 7.5 2.11926ZM7.5 0.9375C5.61658 0.9375 5.38081 0.94519 4.64099 0.975952C3.90388 1.00671 3.39712 1.11951 2.95811 1.28101C2.50012 1.4502 2.1126 1.67322 1.72778 2.03979C1.34026 2.40381 1.10449 2.77039 0.925635 3.20105C0.754907 3.6189 0.635669 4.0957 0.603149 4.79297C0.57063 5.49536 0.5625 5.71838 0.5625 7.5C0.5625 9.28162 0.57063 9.50464 0.603149 10.2045C0.635669 10.9017 0.754907 11.3811 0.925635 11.7964C1.10449 12.2296 1.34026 12.5962 1.72778 12.9602C2.1126 13.3242 2.50012 13.5498 2.9554 13.7164C3.39712 13.8779 3.90117 13.9907 4.63828 14.0215C5.3781 14.0522 5.61387 14.0599 7.49729 14.0599C9.38071 14.0599 9.61648 14.0522 10.3563 14.0215C11.0934 13.9907 11.6002 13.8779 12.0392 13.7164C12.4945 13.5498 12.882 13.3242 13.2668 12.9602C13.6516 12.5962 13.8901 12.2296 14.0662 11.799C14.237 11.3811 14.3562 10.9043 14.3887 10.207C14.4212 9.5072 14.4294 9.28418 14.4294 7.50256C14.4294 5.72095 14.4212 5.49792 14.3887 4.7981C14.3562 4.10083 14.237 3.62146 14.0662 3.20618C13.8955 2.77039 13.6597 2.40381 13.2722 2.03979C12.8874 1.67578 12.4999 1.4502 12.0446 1.28357C11.6029 1.12207 11.0988 1.00928 10.3617 0.978516C9.61919 0.94519 9.38342 0.9375 7.5 0.9375Z" fill="white"/>
                  <path d="M7.5 4.12903C5.53257 4.12903 3.9364 5.63892 3.9364 7.5C3.9364 9.36108 5.53257 10.871 7.5 10.871C9.46743 10.871 11.0636 9.36108 11.0636 7.5C11.0636 5.63892 9.46743 4.12903 7.5 4.12903ZM7.5 9.68665C6.22361 9.68665 5.1884 8.7074 5.1884 7.5C5.1884 6.2926 6.22361 5.31335 7.5 5.31335C8.77639 5.31335 9.8116 6.2926 9.8116 7.5C9.8116 8.7074 8.77639 9.68665 7.5 9.68665Z" fill="white"/>
                  <path d="M12.0365 3.99573C12.0365 4.43152 11.6625 4.78272 11.2045 4.78272C10.7438 4.78272 10.3726 4.42896 10.3726 3.99573C10.3726 3.55994 10.7465 3.20874 11.2045 3.20874C11.6625 3.20874 12.0365 3.5625 12.0365 3.99573Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_1529_43">
                    <rect width="13.875" height="13.125" fill="white" transform="translate(0.5625 0.9375)"/>
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a
              href="#"
              target="_blank"
              className={styles.socialLink}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                <g clipPath="url(#clip0_1529_3399)">
                  <path d="M8 0.9375C4.065 0.9375 0.875 3.87566 0.875 7.5C0.875 10.5776 3.17552 13.16 6.27889 13.8693V9.5055H4.80971V7.5H6.27889V6.63585C6.27889 4.40224 7.37642 3.36694 9.75731 3.36694C10.2088 3.36694 10.9877 3.44858 11.3063 3.52995V5.34776C11.1381 5.33149 10.846 5.32335 10.4832 5.32335C9.31499 5.32335 8.86355 5.73101 8.86355 6.79073V7.5H11.1909L10.791 9.5055H8.86355V14.0145C12.3916 13.622 15.1253 10.8553 15.1253 7.5C15.125 3.87566 11.935 0.9375 8 0.9375Z" fill="white"/>
                </g>
                <defs>
                  <clipPath id="clip0_1529_3399">
                    <rect width="14.25" height="13.125" fill="white" transform="translate(0.875 0.9375)"/>
                  </clipPath>
                </defs>
              </svg>
            </a>

            <a 
              href="#"
              target="_blank"
              className={styles.socialLink}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecuperarSenha;

