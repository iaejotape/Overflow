import Menu from './menu';
import styles from '../styles/menu.module.css';
import { useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const location = useLocation();
  
  // Páginas que NÃO devem ter o menu e padding
  const publicPages = ['/', '/cadastro'];
  const isPublicPage = publicPages.includes(location.pathname);

  return (
    <>
      {!isPublicPage && <Menu />}
      <div className={isPublicPage ? styles.no_padding : styles.body_pd}>
        <div className={isPublicPage ? styles.reset_principal : styles.principal}>
          {children}
        </div>
      </div>
    </>
  );
}