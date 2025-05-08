import React from "react";
import styles from '../styles/login.module.css';
import logo from "../assets/logo_page.svg";

const Login = () => {
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.imagem}>
          <div className={styles.textLogo}>
            <img src={logo} alt="imagem overflow" />
          </div>

          <div className={styles.textoImagem}>
            <p className={styles.mensagemEquipe}>
              Desejamos uma excelente codificação a todos vocês!!
            </p>
            <p className={styles.equipeCaistech}>- Equipe Overflows💙</p>
          </div>
        </div>
      </div>

      <div className={styles.loginSpace}>
        <div className={styles.textoTitulo}>
          <span>Faça seu Login na</span>
          <span>Overflows</span>
        </div>
        <div className={styles.formulario}>
          <form action="">
            <div className={styles.mb3}>
              <label htmlFor="accessKey">Username ou Email:</label>
              <input
                type="text"
                id="accessKey"
                placeholder="Digite seu username ou email..."
              />
              <div id="accessHelp" className={styles.formText}>
                <i ></i>
                <span id="helpDecoration">Atenção:</span> A
                <span>Chave de Acesso</span> está no Caderno de Questões.
              </div>
            </div>
            <div className={styles.mb3}>
              <label htmlFor="password">Senha:</label>
              <div className={styles.inputGroup}>
                <input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha..."
                />
                <button  type="button" id="button-addon2">
                  <i id="togglePasswordIcon"></i>
                  Entrar
                </button>
                <div >Ou</div>
              </div>
              <div id="passwordHelp" className="formText">
                <i ></i>
                <span id="helpDecoration">Atenção:</span> Utilize a senha
                presente no Caderno de Questões.
              </div>
            </div>

            <button
              type="button"
              onclick="window.location.href='inicio.html';"
            >
              Entrar
            </button>
          </form>
        </div>

        <div className={styles.saibaMais}>
          <a href="mandaláparaosite">
            <p>Deseja saber mais sobre nossa plataforma?</p>
          </a>
        </div>

        <div className={styles.socialInfos}>
          <div className={styles.title}>
            <span>Fique Informado(a) nas nossas redes</span>
          </div>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/caistechflo/"
              target="_blank"
              className="btn btn-sm btn-roxo btn-social mt-4 mr-3 wow fadeIn delay-05s"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://www.instagram.com/caistechflo/"
              target="_blank"
              className="btn btn-sm btn-roxo btn-social mt-4 mr-3 wow fadeIn delay-05s"
            >
              <i className="bi bi-facebook"></i>
            </a>

            <a
              href="https://www.instagram.com/caistechflo/"
              target="_blank"
              className="btn btn-sm btn-roxo btn-social mt-4 mr-3"
            >
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
