import React from "react";
import styles from "../styles/tela-contato.module.css";
import Layout from "../componentes/layout";

const TelaContato = () => {
  return (
    <div className={styles.corpo}>
      <Layout>
        <div className={styles.container}>
          <div className={styles.camposEnvio}>
            <div className={styles.titulo}>
              <span>Contate a equipe Overflows</span>
            </div>
            <div className={styles.formulario}>
              <form action="">
                {/* Nome */}
                <div className={`${styles.nomeUsuario} ${styles.inputWrapper}`}>
                  <label htmlFor="">Nome Usuário: </label>
                  <div className={styles.inputIcon}>
                    <i className="bi bi-person-fill"></i>
                    <input type="text" placeholder="Digite seu usuário..." />
                  </div>
                </div>

                {/* Email */}
                <div className={`${styles.emailUsuario} ${styles.inputWrapper}`}>
                  <label htmlFor="">Email: </label>
                  <div className={styles.inputIcon}>
                    <i className="bi bi-envelope-fill"></i>
                    <input type="email" placeholder="Exemplo: zacksbm@overflows.com..." />
                  </div>
                </div>

                {/* Feedback */}
                <div className={`${styles.mensagemUsuario} ${styles.inputWrapper}`}>
                  <label htmlFor="">Feedback: </label>
                  <div className={styles.inputIcon}>
                    <textarea placeholder="Escreva sua mensagem"></textarea>
                  </div>
                </div>
                <div className={styles.botaoMensagem}>
                    <button type="submit"><i className={` ${styles.iconContato}bi bi-send`}></i> Enviar</button>
                </div>
                
              </form>
            </div>
          </div>

          <div className={styles.redesContato}>
            <div className={styles.tituloRedes}>
                <span>Para mais <br/> Informações</span>
            </div>
            <div className={styles.cardsContato}>

                <div className={styles.cardContato}>
                    <a href=""><span><i className={` ${styles.iconContato}bi bi-github`}></i> Veja nosso Github</span></a>
                </div>
                <div className={styles.cardContato}>
                    <a href=""><span><i className={` ${styles.iconContato}bi bi-linkedin`}></i> Veja nosso LinkedIn</span></a>
                </div>
                <div className={styles.cardContato}>
                    <a href=""><span><i className={` ${styles.iconContato}bi bi-instagram`}></i> Veja nosso Instagram</span></a>
                </div>

            </div>
          </div>

        </div>
      </Layout>
    </div>
  );
};

export default TelaContato;
