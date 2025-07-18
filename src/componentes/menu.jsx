import { useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import 'boxicons/css/boxicons.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../assets/img/logo-overflows.svg';
import styles from '../styles/menu.module.css';
import { useLocation } from 'react-router-dom';



export default function Menu() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <>
    <div className={styles.body}>
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
              <a href="/inicio" title="Inicio" className={`${styles.nav_link} ${currentPath === "/inicio" ? styles.active : ""}`}>
                <div className={styles.nav_inner}>
                  <i className={`bx bx-grid-alt ${styles.nav_icon}`}></i>
                  <span className={styles.nav_name}>Início</span>
                </div>
              </a>
            </div>
            <div className={styles.opcao}>
              <a href="/rank_geral" title="Classificações" className={`${styles.nav_link} ${currentPath === "/rank_geral" ? styles.active : ""}`}>
                <div className={styles.nav_inner}>
                  <i className={`bx bx-trophy ${styles.nav_icon}`}></i>
                  <span className={styles.nav_name}>Classificações</span>
                </div>
              </a>
            </div>
            <div className={styles.opcao}>
              <a href="/menuquestao" title="Lista de Questões" className={`${styles.nav_link} ${currentPath === "/menuquestao" ? styles.active : ""}`}>
                <div className={styles.nav_inner}>
                  <i className={`bx bxs-balloon ${styles.nav_icon}`}></i>
                  <span className={styles.nav_name}>Questões</span>
                </div>
              </a>
            </div>
            <div className={styles.opcao}>
              <a href="/editor" title="Editor de Código" className={`${styles.nav_link} ${currentPath === "/editor" ? styles.active : ""}`}>
                <div className={styles.nav_inner}>
                  <i className={`bx bx-terminal ${styles.nav_icon}`}></i>
                  <span className={styles.nav_name}>Editor</span>
                </div>
              </a>
            </div>
            <div className={styles.opcao}>
              <a href="/eventos" title="Todos os Eventos" className={`${styles.nav_link} ${currentPath === "/eventos" ? styles.active : ""}`}>
                <div className={styles.nav_inner}>
                  <i className={`bx bx-joystick ${styles.nav_icon}`}></i>
                  <span className={styles.nav_name}>Eventos</span>
                </div>
              </a>
            </div>
            <div className={styles.opcao}>
              <a href="/biblioteca" title="Bibliotecas" className={`${styles.nav_link} ${currentPath === "/biblioteca" ? styles.active : ""}`}>
                <div className={styles.nav_inner}>
                  <i className={`bx bx-coffee ${styles.nav_icon}`}></i>
                  <span className={styles.nav_name}>Bibliotecas</span>
                </div>
              </a>
            </div>
            <div className={styles.sair_plataforma}>
              <a href="./" title="Sair da Plataforma" className={styles.nav_link}>
                <i className={`bx bx-log-out ${styles.nav_icon}`}></i>
                <span className={styles.nav_name}>Sair</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
      </div>
    </>
  );
}