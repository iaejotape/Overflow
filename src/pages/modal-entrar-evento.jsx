import React from 'react';
import styles from '../styles/modal-entrar-evento.module.css';
import gameController from '../assets/img_eventos/GameController.png';
import badge from '../assets/img_eventos/Badge.png';
import qtd from '../assets/img_eventos/qtd.png';
import eye from '../assets/img_eventos/eye.png';
import lock from '../assets/img_eventos/lock.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const EntrarEventoModal = ({ onClose, inputId }) => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
     const entrar = () => {
    navigate("/questoesevento");
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        <div className={styles.header}>
          <img src={gameController} alt="" />
          <h2 className={styles.title}>Maratona CaisTech</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
            <path d="M14.2282 14.2282C14.3704 14.0856 14.5394 13.9724 14.7254 13.8952C14.9115 13.8181 15.1109 13.7783 15.3123 13.7783C15.5137 13.7783 15.7132 13.8181 15.8992 13.8952C16.0852 13.9724 16.2542 14.0856 16.3964 14.2282L24.4998 22.3346L32.6032 14.2282C32.7456 14.0858 32.9146 13.9729 33.1006 13.8958C33.2866 13.8188 33.486 13.7791 33.6873 13.7791C33.8886 13.7791 34.088 13.8188 34.274 13.8958C34.46 13.9729 34.6291 14.0858 34.7714 14.2282C34.9138 14.3706 35.0267 14.5396 35.1038 14.7256C35.1808 14.9116 35.2205 15.111 35.2205 15.3123C35.2205 15.5136 35.1808 15.713 35.1038 15.899C35.0267 16.085 34.9138 16.2541 34.7714 16.3964L26.665 24.4998L34.7714 32.6032C34.9138 32.7456 35.0267 32.9146 35.1038 33.1006C35.1808 33.2866 35.2205 33.486 35.2205 33.6873C35.2205 33.8886 35.1808 34.088 35.1038 34.274C35.0267 34.46 34.9138 34.6291 34.7714 34.7714C34.6291 34.9138 34.46 35.0267 34.274 35.1038C34.088 35.1808 33.8886 35.2205 33.6873 35.2205C33.486 35.2205 33.2866 35.1808 33.1006 35.1038C32.9146 35.0267 32.7456 34.9138 32.6032 34.7714L24.4998 26.665L16.3964 34.7714C16.2541 34.9138 16.085 35.0267 15.899 35.1038C15.713 35.1808 15.5136 35.2205 15.3123 35.2205C15.111 35.2205 14.9116 35.1808 14.7256 35.1038C14.5396 35.0267 14.3706 34.9138 14.2282 34.7714C14.0858 34.6291 13.9729 34.46 13.8958 34.274C13.8188 34.088 13.7791 33.8886 13.7791 33.6873C13.7791 33.486 13.8188 33.2866 13.8958 33.1006C13.9729 32.9146 14.0858 32.7456 14.2282 32.6032L22.3346 24.4998L14.2282 16.3964C14.0856 16.2542 13.9724 16.0852 13.8952 15.8992C13.8181 15.7132 13.7783 15.5137 13.7783 15.3123C13.7783 15.1109 13.8181 14.9115 13.8952 14.7254C13.9724 14.5394 14.0856 14.3704 14.2282 14.2282Z" fill="white"/>
            </svg>
          </button>
        </div>

        <div className={styles.contentBody}>
          <div className={styles.infoSection}>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <img src={badge} alt="" />
                <div>
                  <span className={styles.infoLabel}>ID da Sala</span>
                  <span className={styles.infoValue}>OF777</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <img src={qtd} alt="" />
                <div>
                  <span className={styles.infoLabel}>Quantidade</span>
                  <span className={styles.infoValue}>6 Questões</span>
                </div>
              </div>
            </div>
            <hr className={styles.divider} />
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <g clip-path="url(#clip0_806_3393)">
                    <path d="M12.75 15.75V14.25C12.75 13.4544 12.4339 12.6913 11.8713 12.1287C11.3087 11.5661 10.5456 11.25 9.75 11.25H3.75C2.95435 11.25 2.19129 11.5661 1.62868 12.1287C1.06607 12.6913 0.75 13.4544 0.75 14.25V15.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.75 8.25C8.40685 8.25 9.75 6.90685 9.75 5.25C9.75 3.59315 8.40685 2.25 6.75 2.25C5.09315 2.25 3.75 3.59315 3.75 5.25C3.75 6.90685 5.09315 8.25 6.75 8.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17.25 15.7502V14.2502C17.2495 13.5855 17.0283 12.9397 16.621 12.4144C16.2138 11.889 15.6436 11.5138 15 11.3477" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 2.34766C12.6453 2.51288 13.2173 2.88818 13.6257 3.41439C14.0342 3.9406 14.2559 4.58778 14.2559 5.25391C14.2559 5.92003 14.0342 6.56722 13.6257 7.09342C13.2173 7.61963 12.6453 7.99493 12 8.16016" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_806_3393">
                    <rect width="18" height="18" fill="white"/>
                    </clipPath>
                </defs>
                </svg>
                <div>
                  <span className={styles.infoLabel}>Usuários</span>
                  <span className={styles.infoValue}>14/20 Pessoas</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <img src={eye} alt="" />
                <div>
                  <span className={styles.infoLabel}>Tipo de sala</span>
                  <span className={styles.infoValue}>Privada</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.actionSection}>
            <label htmlFor="eventPassword" className={styles.passwordLabel}>Senha:</label>
            <div className={styles.inputFieldContainer}>
              <img  onClick={() => setShowPassword(!showPassword)} className={styles.lock} src={lock} alt="" />
              <input
                type="password"
                id={inputId}
                placeholder="Digite a senha do evento..."
                className={styles.inputElement}
              />
            </div>
            <button onClick={entrar} type="button" className={styles.submitButton}>
              Entrar no Evento
            </button>
          </div>
        </div>

        <div className={styles.footer}>
          <span className={styles.footerText}>#MaratonaCaisTech</span>
        </div>
      </div>
    </div>
  );
};

export default EntrarEventoModal;

