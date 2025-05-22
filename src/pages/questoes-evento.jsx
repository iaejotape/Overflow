import React from "react";
import styles from "../styles/menu-questao.module.css";
import stylesEvento from "../styles/questoes-evento.module.css";
import Layout from "../componentes/layout";

const QuestaoEventos = () => {
  return (
    <div className={styles.corpo}>
      <Layout >
        <div className={styles.container}>
          <div className={styles.columns}>
            {/* Aqui não mexe */}
            <div className={styles.box_dados}> 
              <div className={styles.progresso}>
                <h3>10<span>%</span></h3>
                <p>Finalizado</p>
              </div>
                <div className = {styles.retanguleRancking}>
                  <h4>Top 3 do Evento</h4>
                
                <div className={styles.colocados}>
                  <span>
                      <span id="equipe-semanal1" className={styles.equipes}><img src="../src/assets/medalha-ouro.png" alt="medalha ouro" />ZacksBM</span>-<span>155 Pts</span>
                  </span>
                  
                </div>
                <div className={styles.colocados}>
                  <span>
                      <span id="equipe-semanal2"className={styles.equipes}><img src="../src/assets/medalha-prata.png" alt="medalha prata" />Teto</span>-<span>100 Pts</span>
                  </span>
                </div>
                <div className={styles.colocados}>
                  <span>
                      <span id="equipe-semanal3" className={styles.equipes}><img src="../src/assets/medalha-bronze.png" alt="medalha bronze" />LOQ</span>-<span>50 Pts</span>
                  </span>
                </div>
                </div>
            

              <div className={styles.envios}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" viewBox="0 0 38 32" fill="none">
                    <g filter="url(#filter0_d_706_1731)">
                        <path d="M28.8177 1.77551C29.3459 1.27259 30.0489 0.994562 30.7782 1.00008C31.5076 1.0056 32.2062 1.29424 32.7268 1.80509C33.2474 2.31594 33.5492 3.00905 33.5685 3.73816C33.5877 4.46728 33.323 5.17536 32.8302 5.71301L17.8677 24.4255C17.6104 24.7026 17.2998 24.925 16.9547 25.0794C16.6095 25.2337 16.2367 25.3169 15.8586 25.3239C15.4805 25.3309 15.1049 25.2616 14.7542 25.1201C14.4036 24.9787 14.085 24.7679 13.8177 24.5005L3.89516 14.578C3.61883 14.3205 3.3972 14.01 3.24348 13.665C3.08976 13.32 3.0071 12.9476 3.00044 12.57C2.99377 12.1923 3.06324 11.8172 3.2047 11.467C3.34615 11.1168 3.55669 10.7987 3.82376 10.5316C4.09083 10.2645 4.40896 10.054 4.75917 9.91255C5.10937 9.7711 5.48448 9.70163 5.86212 9.70829C6.23975 9.71496 6.61218 9.79761 6.95718 9.95133C7.30217 10.1051 7.61267 10.3267 7.87016 10.603L15.7227 18.4518L28.7464 1.85801L28.8177 1.77551Z" fill="#25D366"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_706_1731" x="0.6" y="0.6" width="37.3694" height="31.1242" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="1" dy="3"/>
                        <feGaussianBlur stdDeviation="1.7"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.145098 0 0 0 0 0.827451 0 0 0 0 0.327059 0 0 0 0.4 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_706_1731"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_706_1731" result="shape"/>
                        </filter>
                    </defs>
                    </svg>
                <span>Envios <span className={styles.correto}>Corretos</span></span>
                <span className="erros">
                  <span>26</span>/{"  "}10
                </span>
              </div>
            </div>

            {/* Aqui não mexe */}

            <div className={stylesEvento.container}>

            <div className={stylesEvento.tituloEvento}>
                <h1><i className={`${stylesEvento.icone} bi bi-controller`}></i> <span className="nomeEvento">Maratona CaisTech</span></h1>
                <button ><i className="bx bx-log-out"></i>Sair</button>
            </div>

            <div className={stylesEvento.box_listaquestoes}>
              <div className={styles.questao}>
                <a href="" className={styles.questao_name}>
                  <h2>Seja muito bem-vindo(a) ao CaisTech!</h2>
                </a>
                <p>Dê seu simples "Olá Mundo!" na linguagem que preferir para se ambientar á plataforma!!!🖖🏽</p>
                <div className={styles.info_questoes}>
                  <div className={styles.info_pessoas}>
                    <div className="criador">
                      <span className={styles.Criador}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3333 14V12.6667C13.3333 11.9594 13.0523 11.2811 12.5522 10.781C12.0521 10.281 11.3739 10 10.6666 10H5.33329C4.62605 10 3.94777 10.281 3.44767 10.781C2.94758 11.2811 2.66663 11.9594 2.66663 12.6667V14" fill="#ffff"/>
                        <path d="M13.3333 14V12.6667C13.3333 11.9594 13.0523 11.2811 12.5522 10.781C12.0521 10.281 11.3739 10 10.6666 10H5.33329C4.62605 10 3.94777 10.281 3.44767 10.781C2.94758 11.2811 2.66663 11.9594 2.66663 12.6667V14" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.00004 7.33333C9.4728 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.4728 2 8.00004 2C6.52728 2 5.33337 3.19391 5.33337 4.66667C5.33337 6.13943 6.52728 7.33333 8.00004 7.33333Z" fill="#ffff" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>{" "}
                          <span>EquipeCaisTech</span>
                      </span>
                    </div>
                    <span title="Envios Corretos">
                      <i className="bx bxs-paper-plane"></i>{" "}
                      <span className="respostas">27</span> Envios Corretos
                    </span>
                  </div>

                  <div className={styles.infos_gerais}>
                    <div className={styles.tags}>
                      <span className="tag">Boas Vindas</span>
                    </div>
                    <div className={styles.nivel_facil}>
                      <span>Fácil</span>
                    </div>
                    <div className={styles.pontos}>
                      <span>+5 pts</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.questao}>
                <a href="" className={styles.questao_name}>
                  <h2>Ajude a jardineira Flor!</h2>
                </a>
                <p>A jardineira Flor cuida de suas rosas com mais do que só água, ela as rega com ritmo, lembranças e esperança.
Ela percebeu que as rosas só crescem quando são cuidadas em padrões muito específicos, como se respondessem a memórias escondidas entre os dias.🌹💧</p>
                <div className={styles.info_questoes}>
                  <div className={styles.info_pessoas}>
                    <div className="criador">
                      <span className={styles.Criador}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3333 14V12.6667C13.3333 11.9594 13.0523 11.2811 12.5522 10.781C12.0521 10.281 11.3739 10 10.6666 10H5.33329C4.62605 10 3.94777 10.281 3.44767 10.781C2.94758 11.2811 2.66663 11.9594 2.66663 12.6667V14" fill="#ffff"/>
                        <path d="M13.3333 14V12.6667C13.3333 11.9594 13.0523 11.2811 12.5522 10.781C12.0521 10.281 11.3739 10 10.6666 10H5.33329C4.62605 10 3.94777 10.281 3.44767 10.781C2.94758 11.2811 2.66663 11.9594 2.66663 12.6667V14" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.00004 7.33333C9.4728 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.4728 2 8.00004 2C6.52728 2 5.33337 3.19391 5.33337 4.66667C5.33337 6.13943 6.52728 7.33333 8.00004 7.33333Z" fill="#ffff" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>{" "}
                          <span>IsacBM</span>
                      </span>
                    </div>
                    <span title="Envios Corretos">
                      <i className="bx bxs-paper-plane"></i>{" "}
                      <span className="respostas">21</span> Envios Corretos
                    </span>
                  </div>

                  <div className={styles.infos_gerais}>
                    <div className={styles.tags}>
                      <span className="tag">Matemática</span>
                    </div>
                    <div className={styles.nivel_intermediario}>
                      <span>Intermédiaria</span>
                    </div>
                    <div className={styles.pontos}>
                      <span>+25 pts</span>
                    </div>
                  </div>
                </div>
                </div>
              <div className={styles.questao}>
                <a href="" className={styles.questao_name}>
                  <h2>Invasão de Gatos Codificadores</h2>
                </a>
                <p>Gatos programadores estão invadindo seu teclado! Ajude a decifrar o código secreto que eles digitam enquanto dormem.⌨️💻</p>
               <div className={styles.info_questoes}>
                  <div className={styles.info_pessoas}>
                    <div className="criador">
                      <span className={styles.Criador}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3333 14V12.6667C13.3333 11.9594 13.0523 11.2811 12.5522 10.781C12.0521 10.281 11.3739 10 10.6666 10H5.33329C4.62605 10 3.94777 10.281 3.44767 10.781C2.94758 11.2811 2.66663 11.9594 2.66663 12.6667V14" fill="#ffff"/>
                        <path d="M13.3333 14V12.6667C13.3333 11.9594 13.0523 11.2811 12.5522 10.781C12.0521 10.281 11.3739 10 10.6666 10H5.33329C4.62605 10 3.94777 10.281 3.44767 10.781C2.94758 11.2811 2.66663 11.9594 2.66663 12.6667V14" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.00004 7.33333C9.4728 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.4728 2 8.00004 2C6.52728 2 5.33337 3.19391 5.33337 4.66667C5.33337 6.13943 6.52728 7.33333 8.00004 7.33333Z" fill="#ffff" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>{" "}
                        <span>IsacBM</span>

                      </span>
                    </div>
                    <span title="Envios Corretos">
                      <i className="bx bxs-paper-plane"></i>{" "}
                      <span className="respostas">10</span> Envios Corretos
                    </span>
                  </div>

                  <div className={styles.infos_gerais}>
                    <div className={styles.tags}>
                      <span className="tag">Strings</span>
                    </div>
                    <div className={styles.nivel_intermediario}>
                      <span>Intermédiario</span>
                    </div>
                    <div className={styles.pontos}>
                      <span>+25 pts</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.questao}>
                <a href="" className={styles.questao_name}>
                  <h2>Comunicação Robótica?!</h2>
                </a>
                <p>Robôs rebeldes estão se comunicando em binário invertido! Converta suas mensagens para salvar a humanidade. 🤖➡️👾</p>
                <div className={styles.info_questoes}>
                  <div className={styles.info_pessoas}>
                    <div className="criador">
                      <span className={styles.Criador}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3333 14V12.6667C13.3333 11.9594 13.0523 11.2811 12.5522 10.781C12.0521 10.281 11.3739 10 10.6666 10H5.33329C4.62605 10 3.94777 10.281 3.44767 10.781C2.94758 11.2811 2.66663 11.9594 2.66663 12.6667V14" fill="#ffff"/>
                        <path d="M13.3333 14V12.6667C13.3333 11.9594 13.0523 11.2811 12.5522 10.781C12.0521 10.281 11.3739 10 10.6666 10H5.33329C4.62605 10 3.94777 10.281 3.44767 10.781C2.94758 11.2811 2.66663 11.9594 2.66663 12.6667V14" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.00004 7.33333C9.4728 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.4728 2 8.00004 2C6.52728 2 5.33337 3.19391 5.33337 4.66667C5.33337 6.13943 6.52728 7.33333 8.00004 7.33333Z" fill="#ffff" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>{" "}
                          <span>IsacBM</span>
                      </span>
                    </div>
                    <span title="Envios Corretos">
                      <i className="bx bxs-paper-plane"></i>{" "}
                      <span className="respostas">7</span> Envios Corretos
                    </span>
                  </div>

                  <div className={styles.infos_gerais}>
                    <div className={styles.tags}>
                      <span className="tag">Binários</span>
                    </div>
                    <div className={styles.tags}>
                      <span className="tag">Lógica</span>
                    </div>
                    <div className={styles.nivel_dificil}>
                      <span>Dificil</span>
                    </div>
                    <div className={styles.pontos}>
                      <span>+50 pts</span>
                    </div>
                  </div>
                </div>
              </div>
            <div className={styles.questao}>
                <a href="" className={styles.questao_name}>
                  <h2>Um Belo Café Quântico</h2>
                </a>
                <p>Um café quântico onde os grãos existem em superposição. Calcule todas as combinações possíveis de Xícaras! ☕⚛️</p>
                <div className={styles.info_questoes}>
                  <div className={styles.info_pessoas}>
                    <div className="criador">
                      <span className={styles.Criador}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3333 14V12.6667C13.3333 11.9594 13.0523 11.2811 12.5522 10.781C12.0521 10.281 11.3739 10 10.6666 10H5.33329C4.62605 10 3.94777 10.281 3.44767 10.781C2.94758 11.2811 2.66663 11.9594 2.66663 12.6667V14" fill="#ffff"/>
                        <path d="M13.3333 14V12.6667C13.3333 11.9594 13.0523 11.2811 12.5522 10.781C12.0521 10.281 11.3739 10 10.6666 10H5.33329C4.62605 10 3.94777 10.281 3.44767 10.781C2.94758 11.2811 2.66663 11.9594 2.66663 12.6667V14" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.00004 7.33333C9.4728 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.4728 2 8.00004 2C6.52728 2 5.33337 3.19391 5.33337 4.66667C5.33337 6.13943 6.52728 7.33333 8.00004 7.33333Z" fill="#ffff" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>{" "}
                          <span>IsacBM</span>
                      </span>
                    </div>
                    <span title="Envios Corretos">
                      <i className="bx bxs-paper-plane"></i>{" "}
                      <span className="respostas">21</span> Envios Corretos
                    </span>
                  </div>

                  <div className={styles.infos_gerais}>
                    <div className={styles.tags}>
                      <span className="tag">Matemática</span>
                    </div>
                    <div className={styles.nivel_dificil}>
                      <span>Dificil</span>
                    </div>
                    <div className={styles.pontos}>
                      <span>+50 pts</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className={stylesEvento.opcoesEvento}>
                <a href="" className={stylesEvento.questoes}><i className={` ${stylesEvento.opcaoIcone} bi bi-balloon-fill`}></i> Questões do Evento</a>
                <a href="" className={stylesEvento.classificacao}><i className={` ${stylesEvento.opcaoIcone} bi bi-trophy-fill`}></i> Classificação do Evento</a>
            </div>
            </div>
          </div>
        </div>
      </Layout>
      </div>
  );
};
export default QuestaoEventos;
