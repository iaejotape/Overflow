import Layout from '../componentes/layout';
import styles from '../styles/inicio.module.css';

export default function PaginaInicial() {
  return (
    // O que tiver aqui dentro já tem uma div pai chamada ".principal"
    <Layout> 
        <div className={styles.lateral_esquerda}>
            <h1>Algum lugar...</h1>
        </div>

        <div className={styles.lateral_direita}>
            <div className={styles.container}>
                <h1>Bem-vindo à Plataforma Overflow!</h1>
                <p>Esta é a tela inicial do seu aplicativo.</p>
            </div>
        </div>
        
    </Layout>
  );
}
