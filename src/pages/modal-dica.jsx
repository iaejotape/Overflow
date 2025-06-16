import React, { useEffect } from 'react';
import styles from '../styles/modal-dica.module.css';

const ModalDica = ({ 
  isOpen, 
  onClose, 
  titulo = "Dica para o Desafio",
  dicas = []
}) => {

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>
            <span className={styles.iconeDica}>💡</span>
            {titulo}
          </h2>
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Fechar modal"
          >
            ✕
          </button>
        </div>
        
        <div className={styles.modalContent}>
          <div className={styles.dicasContainer}>
            {dicas.length > 0 ? (
              dicas.map((dica, index) => (
                <div key={index} className={styles.dicaSection}>
                  <h3 className={styles.dicaTitulo}>
                    {dica.icone && <span className={styles.dicaIcone}>{dica.icone}</span>}
                    {dica.titulo}
                  </h3>
                  
                  {dica.descricao && (
                    <p className={styles.dicaDescricao}>{dica.descricao}</p>
                  )}
                  
                  {dica.codigo && (
                    <div className={styles.codigoContainer}>
                      <div className={styles.codigoHeader}>
                        <span className={styles.codigoLinguagem}>
                          {dica.linguagem || 'Código'}
                        </span>
                        <button 
                          className={styles.copiarButton}
                          onClick={() => navigator.clipboard.writeText(dica.codigo)}
                          title="Copiar código"
                        >
                          📋
                        </button>
                      </div>
                      <pre className={styles.codigoBloco}>
                        <code>{dica.codigo}</code>
                      </pre>
                    </div>
                  )}
                  
                  {dica.observacao && (
                    <div className={styles.observacao}>
                      <span className={styles.observacaoIcone}>⚠️</span>
                      <span className={styles.observacaoTexto}>{dica.observacao}</span>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className={styles.dicaSection}>
                <h3 className={styles.dicaTitulo}>
                  <span className={styles.dicaIcone}>💡</span>
                  Conceito Principal
                </h3>
                <p className={styles.dicaDescricao}>
                  Este é um desafio básico de saída de dados. Você precisa usar a função 
                  de impressão da linguagem escolhida para exibir o texto exato.
                </p>
                
                <div className={styles.codigoContainer}>
                  <div className={styles.codigoHeader}>
                    <span className={styles.codigoLinguagem}>Python</span>
                    <button 
                      className={styles.copiarButton}
                      onClick={() => navigator.clipboard.writeText('print("Olá Overflows!!")')}
                      title="Copiar código"
                    >
                      📋
                    </button>
                  </div>
                  <pre className={styles.codigoBloco}>
                    <code>print("Olá Overflows!!")</code>
                  </pre>
                </div>
                
                <div className={styles.observacao}>
                  <span className={styles.observacaoIcone}>⚠️</span>
                  <span className={styles.observacaoTexto}>
                    Certifique-se de que o texto está exatamente como especificado, 
                    incluindo pontuação e capitalização.
                  </span>
                </div>
              </div>
            )}
          </div>
          
          <div className={styles.modalFooter}>
            <div className={styles.dicaRodape}>
              <span className={styles.dicaInfo}>💬</span>
              <span>Precisa de mais ajuda? Entre em contato com o suporte!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDica;

