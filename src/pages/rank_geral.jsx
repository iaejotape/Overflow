import styles from "../styles/rank_geral.module.css"
import Barra from "../componentes/menu.jsx"
import ouro from "../assets/Rank/ouro.png"
import prata from "../assets/Rank/prata.png"
import bronze from "../assets/Rank/bronze.png"
import coroa from "../assets/Rank/coroa.png"
import lupa from "../assets/Rank/lupa.png"

function rank_geral() {
    return(
        <div className={styles.main}>
            <Barra/>
            <div className={styles.container}>
                <div className={styles.cabecario}>
                    <img src={coroa} alt="" />
                    <h1>Tabela de Classificação</h1>
                    <select className={styles.barra_pesquisa}>
                        <option value="1">Classificação Geral - 2025</option>
                        <option value="2">Classificação Geral - 2024</option>
                        <option value="3">Classificação Geral - 2023</option>
                    </select>
                    <div className={styles.pesquisa}><button>Buscar</button></div>
                </div>
                <div className={styles.geral}>
                <div className={styles.tabela}>
                    <table>
                        <div className={styles.cabecario_tabela}>
                            <tr className={styles.t1}>
                            <th>Posição</th>
                            <th>Nome de Usuario</th>
                            <th>Usuario</th>
                            <th>Ano</th>
                            <th>Insignias</th>
                            <th>Pontuacao</th>
                        </tr>
                        </div>
                        <div className={styles.main_tabela}>
                        <tr className={styles.t2}>
                            <td className={styles.posicao}><img src={ouro} alt="" /></td>
                            <td className={styles.nome }>Diogo B.</td>
                            <td className={styles.usuario}>@DiogoBruno</td>
                            <td className={styles.ano}>Over-2025</td>
                            <td className={styles.insigna}></td>
                            <td className={styles.pontos}>1000Pts</td>
                        </tr>

                        <tr className={styles.t3}>
                            <td className={styles.posicao}><img src={prata} alt="" /></td>
                            <td className={styles.nome }>ZacksBM</td>
                            <td className={styles.usuario}>@isacbm_</td>
                            <td className={styles.ano}>Over-2025</td>
                            <td className={styles.insigna}></td>
                            <td className={styles.pontos}>1000Pts</td>
                        </tr>

                        <tr className={styles.t4}>
                            <td className={styles.posicao}> <img src={bronze} alt="" /></td>
                            <td className={styles.nome }>PriscilaF</td>
                            <td className={styles.usuario}>@priscilamartins</td>
                            <td className={styles.ano}>Over-2025</td>
                            <td className={styles.insigna}></td>
                            <td className={styles.pontos}>800Pts</td>
                        </tr>

                        <tr className={styles.t5}>
                            <td className={styles.posicao}>4</td>
                            <td className={styles.nome }>Jotape</td>
                            <td className={styles.usuario}>@iaejottape</td>
                            <td className={styles.ano}>Over-2025</td>
                            <td className={styles.insigna}></td>
                            <td className={styles.pontos}>500Pts</td>
                        </tr>
                            <tr className={styles.t6}>
                                <td className={styles.posicao}>5</td>
                                <td className={styles.nome }>Alguem</td>
                                <td className={styles.usuario}>@Ninguem</td>
                                <td className={styles.ano}>Over-2025</td>
                                <td className={styles.insigna}></td>
                                <td className={styles.pontos}>300Pts</td>
                        </tr>
                            <tr className={styles.t7}>
                                <td className={styles.posicao}>6</td>
                                <td className={styles.nome }>Alguem</td>
                                <td className={styles.usuario}>@Ninguem</td>
                                <td className={styles.ano}>Over-2025</td>
                                <td className={styles.insigna}></td>
                                <td className={styles.pontos}>200Pts</td>
                        </tr>
                            <tr className={styles.t8}>
                                <td className={styles.posicao}>7</td>
                                <td className={styles.nome }>Alguem</td>
                                <td className={styles.usuario}>@Ninguem</td>
                                <td className={styles.ano}>Over-2025</td>
                                <td className={styles.insigna}></td>
                                <td className={styles.pontos}>100Pts</td>
                        </tr>
                                <tr className={styles.t9}>
                                <td className={styles.posicao}>8</td>
                                <td className={styles.nome }>Alguem</td>
                                <td className={styles.usuario}>@Ninguem</td>
                                <td className={styles.ano}>Over-2025</td>
                                <td className={styles.insigna}></td>
                                <td className={styles.pontos}>100Pts</td>
                        </tr>
                        
                        </div>
                    <div className={styles.final_tabela}>
                        <tr>
                            <td>Overflow💜</td>
                        </tr>
                    </div>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default rank_geral;