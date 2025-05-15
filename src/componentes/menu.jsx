import { useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import 'boxicons/css/boxicons.min.css';
import logo from '../assets/img/logo-overflows.svg';
import styles from '../styles/menu.module.css';

export default function Menu() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <>
      <header className={styles.header} id="header">
        <div className={styles.header_toggle} onClick={toggleSidebar}>
          {isSidebarExpanded ? <BsX id="header-toggle" /> : <BsList id="header-toggle" />}
        </div>

        <div className={styles.logo_caistech}>
          <a href="/"><img src={logo} width="172px" alt="Logo da Overflow" /></a>
        </div>

        <div className={styles.toggle}>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <label></label>
        </div>
      </header>

      <div className={`${styles.l_navbar} ${isSidebarExpanded ? styles.show : ''}`} id="nav-bar">
        <nav className={styles.nav}>
          <div className={styles.fluxo_central}>
            <div className={styles.opcao} >
              <a href="#" title="Inicio" className={`${styles.nav_link} ${styles.active}`}>
                <div className={styles.nav_inner}>
                  <i className={`bx bx-grid-alt ${styles.nav_icon}`}></i>
                  <span className={styles.nav_name}>Início</span>
                </div>
              </a>
            </div>
            <div className={styles.opcao}>
              <a href="#" title="Classificações" className={styles.nav_link}>
                <div className={styles.nav_inner}>
                  <i className={`bx bx-trophy ${styles.nav_icon}`}></i>
                  <span className={styles.nav_name}>Classificações</span>
                </div>
              </a>
            </div>
            <div className={styles.opcao}>
              <a href="#" title="Lista de Questões" className={styles.nav_link}>
                <div className={styles.nav_inner}>
                  <i className={`bx bxs-balloon ${styles.nav_icon}`}></i>
                  <span className={styles.nav_name}>Questões</span>
                </div>
              </a>
            </div>
            <div className={styles.opcao}>
              <a href="#" title="Editor de Código" className={styles.nav_link}>
                <div className={styles.nav_inner}>
                  <i className={`bx bx-terminal ${styles.nav_icon}`}></i>
                  <span className={styles.nav_name}>Editor</span>
                </div>
              </a>
            </div>
            <div className={styles.opcao}>
              <a href="#" title="Todos os Eventos" className={styles.nav_link}>
                <div className={styles.nav_inner}>
                  <i className={`bx bx-joystick ${styles.nav_icon}`}></i>
                  <span className={styles.nav_name}>Eventos</span>
                </div>
              </a>
            </div>
            <div className={styles.opcao}>
              <a href="#" title="Bibliotecas" className={styles.nav_link}>
                <div className={styles.nav_inner}>
                  <i className={`bx bx-coffee ${styles.nav_icon}`}></i>
                  <span className={styles.nav_name}>Bibliotecas</span>
                </div>
              </a>
            </div>
            <div className={styles.sair_plataforma}>
              <a href="#" title="Sair da Plataforma" className={styles.nav_link}>
                <i className={`bx bx-log-out ${styles.nav_icon}`}></i>
                <span className={styles.nav_name}>Sair</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}