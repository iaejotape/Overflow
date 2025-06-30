import React, { useEffect } from 'react';
import styles from '../styles/modal-dica.module.css';

const ModalDica = ({ 
  hint, 
  hintNumber, 
  totalHints, 
  onConfirm, 
  onClose 
}) => {
  // Fecha o modal com a tecla ESC
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    
    // Previne scroll do body quando modal está aberto
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div className={styles.headerLeft}>
            <svg 
              className={styles.lightbulbIcon} 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 21h6M12 3a6 6 0 0 1 6 6c0 2.5-1.5 4.5-3 5.5V17a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.5C7.5 13.5 6 11.5 6 9a6 6 0 0 1 6-6z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h2 className={styles.modalTitle}>
              Dica {hintNumber} de {totalHints}
            </h2>
          </div>
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Fechar modal"
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.warningBox}>
            <svg 
              className={styles.warningIcon}
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9v4M12 17h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className={styles.warningText}>
              Atenção: Usar uma dica reduzirá sua pontuação final. Tem certeza que deseja continuar?
            </p>
          </div>

          <div className={styles.hintContent}>
            <h3 className={styles.hintLabel}>Sua dica:</h3>
            <p className={styles.hintText}>{hint}</p>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <button 
            className={styles.cancelButton}
            onClick={onClose}
          >
            Cancelar
          </button>
          <button 
            className={styles.confirmButton}
            onClick={onConfirm}
          >
            Usar Dica
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDica;

