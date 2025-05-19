import styles from "../styles/erro.module.css";
import tempo from "../assets/img_tela_verificacao/tempo.png"
import memoria from "../assets/img_tela_verificacao/memoria.png"
import alerta  from "../assets/img_tela_verificacao/alerta.png"
import terminal from "../assets/img_tela_verificacao/terminalpy.png"
import x from "../assets/img_tela_verificacao/x.png"
import comparacao from "../assets/img_tela_verificacao/terminal_comparacao.png"
import Barra from "../componentes/menu.jsx"
import { useNavigate } from "react-router-dom";
function erro(){
    const navigate = useNavigate();
    const handleClick = () =>{
    navigate("/resolucao");
  }
    return(
        <div className={styles.main_verificacao}>
            <Barra/>
            <div className={styles.container_verificacao}>
                <div className={styles.barra_esquerda}>
                    <div className={styles.status}>
                        <h1><u>Status</u></h1>
                        <img src={x} alt="" />
                        <h2>Indefinido</h2>
                    </div>
                    <div className={styles.tempo}>
                        <h1><u>Tempo</u></h1>
                        <img src={tempo} alt="" />
                        <h2>0.071s</h2>
                    </div>
                    <div className={styles.memoria}>
                        <h1><u>Memoria</u></h1>
                        <img src={memoria} alt="" />
                        <h2>3676Bytes</h2>
                    </div>
                </div>
                <div className={styles.barra_direita}>
                    <div className={styles.mensagem}>
                        <h1>Seja bem-vindo(a) a plataforma Overflow!</h1>
                        <img src={alerta} alt="" />
                        <h1>Ops! Houve algum erro, tente novamente!! :)</h1>
                        <p>Compare a saida resultante com a esperada(s)!</p>
                        <div className={styles.comparacao}>
                            <img src={comparacao} alt=""/>
                        </div>
                        <button onClick={handleClick}>Voltar a Questões</button>
                    </div>
                    <hr />
                    <div className={styles.code}>
                        <h1><u>Seu Codigo</u></h1>
                        <img src={terminal} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
}
export default erro;