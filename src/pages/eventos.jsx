import styles from "../styles/eventos.module.css";
import Layout from "../componentes/layout";
import { BsArrowRight } from "react-icons/bs";
import ControleGamer from "../assets/img_eventos/GameController.png";
import iconeazul from "../assets/img_eventos/slack.png";
import edit from "../assets/img_eventos/edit.png";
import badge from "../assets/img_eventos/Badge.png";
import eye from "../assets/img_eventos/eye.png";
import users from "../assets/img_eventos/users.png"
import qtd from "../assets/img_eventos/qtd.png"
import { useNavigate } from "react-router-dom";
import ModalCriar from "./modal-criar-evento";
import { useState } from "react";
import EntrarEventoModal from "./modal-entrar-evento";

export default function Eventos() {
    const navigate = useNavigate();
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mostrarModalEntrar, setMostrarModalEntrar] = useState(false);

    const abrirModal = () => {
      setMostrarModal(true);
    };

    const fecharModal = () => {
      setMostrarModal(false);
    };

    const abrirModalEntrar = () => {
      setMostrarModalEntrar(true);
    };

    const fecharModalEntrar = () => {
      setMostrarModalEntrar(false);
    };
  return (
    <Layout>
      <div className={styles.eventosContainer}>
        <div className={styles.container1}>
          <div className={styles.cabecalho}>
            <img src={ControleGamer} alt="Ícone de controle" />
            <h1 className={styles.titulo}>Eventos da Plataforma</h1>
          </div>
          <div className={styles.barraBusca}>
            <input
              type="text"
              placeholder="Buscar sala por ID"
              className={styles.inputBusca}
            />
            <button className={styles.btnBusca}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.75 15.7498L12.4875 12.4873"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Buscar</p>
            </button>
          </div>
        </div>
        <div className={styles.containertotal}>
          <div className={styles.containerRow}>
            <div className={styles.resumoEventos}>
              <div className={styles.boxResumo1}>
                <div className={styles.circuloAzul}>
                  <img src={iconeazul} alt="icon azul" />
                  <p>Participações</p>
                  <h2>8</h2>
                </div>
              </div>
              <div className={styles.boxResumo2}>
                <div className={styles.circuloAmarelo}>
                  <img src={edit} alt="edit" />
                  <p>Eventos Criados</p>
                  <h2>2</h2>
                </div>
              </div>
            </div>
            <div className={styles.botoesAcoes}>
              <button 
              onClick={()=> navigate("/meuseventos")}
              className={styles.btnRoxo}>
                <svg
                  width="30"
                  height="24"
                  viewBox="0 0 22 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9874 5.62744C15.9874 5.81807 15.9117 6.00088 15.7769 6.13567C15.6421 6.27047 15.4593 6.34619 15.2687 6.34619C15.0781 6.34619 14.8952 6.27047 14.7604 6.13567C14.6257 6.00088 14.5499 5.81807 14.5499 5.62744C14.5499 5.43682 14.6257 5.254 14.7604 5.11921C14.8952 4.98442 15.0781 4.90869 15.2687 4.90869C15.4593 4.90869 15.6421 4.98442 15.7769 5.11921C15.9117 5.254 15.9874 5.43682 15.9874 5.62744ZM13.8312 7.78369C14.0218 7.78369 14.2046 7.70797 14.3394 7.57317C14.4742 7.43838 14.5499 7.25557 14.5499 7.06494C14.5499 6.87432 14.4742 6.6915 14.3394 6.55671C14.2046 6.42192 14.0218 6.34619 13.8312 6.34619C13.6406 6.34619 13.4577 6.42192 13.3229 6.55671C13.1882 6.6915 13.1124 6.87432 13.1124 7.06494C13.1124 7.25557 13.1882 7.43838 13.3229 7.57317C13.4577 7.70797 13.6406 7.78369 13.8312 7.78369ZM17.4249 7.06494C17.4249 7.25557 17.3492 7.43838 17.2144 7.57317C17.0796 7.70797 16.8968 7.78369 16.7062 7.78369C16.5156 7.78369 16.3327 7.70797 16.1979 7.57317C16.0632 7.43838 15.9874 7.25557 15.9874 7.06494C15.9874 6.87432 16.0632 6.6915 16.1979 6.55671C16.3327 6.42192 16.5156 6.34619 16.7062 6.34619C16.8968 6.34619 17.0796 6.42192 17.2144 6.55671C17.3492 6.6915 17.4249 6.87432 17.4249 7.06494ZM15.2687 9.22119C15.4593 9.22119 15.6421 9.14547 15.7769 9.01067C15.9117 8.87588 15.9874 8.69307 15.9874 8.50244C15.9874 8.31182 15.9117 8.129 15.7769 7.99421C15.6421 7.85942 15.4593 7.78369 15.2687 7.78369C15.0781 7.78369 14.8952 7.85942 14.7604 7.99421C14.6257 8.129 14.5499 8.31182 14.5499 8.50244C14.5499 8.69307 14.6257 8.87588 14.7604 9.01067C14.8952 9.14547 15.0781 9.22119 15.2687 9.22119ZM5.92493 4.90869H7.36243V6.34619H8.79993V7.78369H7.36243V9.22119H5.92493V7.78369H4.48743V6.34619H5.92493V4.90869Z"
                    fill="white"
                  />
                  <path
                    d="M3.84197 1.65019C3.81742 1.55892 3.81111 1.46369 3.82341 1.36998C3.8357 1.27626 3.86636 1.18589 3.91363 1.10404C3.9609 1.02219 4.02384 0.950468 4.09887 0.892977C4.17389 0.835486 4.25952 0.793357 4.35085 0.769002L7.1281 0.0243769C7.22357 -0.0010665 7.32327 -0.00655063 7.42096 0.00826672C7.51865 0.0230841 7.61224 0.0578846 7.69588 0.110495C7.77951 0.163106 7.85141 0.232396 7.90706 0.314039C7.96272 0.395682 8.00094 0.487923 8.01935 0.585002C8.96091 0.47144 9.95997 0.416814 10.9562 0.416814C11.9912 0.416814 13.0305 0.475752 14.0037 0.59794C14.0205 0.499389 14.0576 0.405428 14.1128 0.32206C14.168 0.238693 14.24 0.167753 14.3241 0.113774C14.4083 0.0597951 14.5027 0.0239641 14.6015 0.00857106C14.7003 -0.00682201 14.8012 -0.0014388 14.8978 0.0243769L17.675 0.769002C17.781 0.79737 17.8791 0.84962 17.9617 0.921748C18.0444 0.993875 18.1094 1.08397 18.1519 1.18512C18.1944 1.28628 18.2131 1.39581 18.2067 1.50532C18.2003 1.61484 18.1689 1.72143 18.1149 1.81694C18.3171 1.94727 18.4958 2.08959 18.6511 2.24388C19.2376 2.83038 19.7723 3.75325 20.2252 4.79113C20.6852 5.84481 21.0862 7.07819 21.3823 8.336C21.6785 9.59381 21.8711 10.8948 21.9056 12.0821C21.9401 13.2551 21.8208 14.385 21.4341 15.259C21.2578 15.6514 20.962 15.978 20.5889 16.1923C20.2159 16.4066 19.7847 16.4975 19.3569 16.4521C18.4427 16.3558 17.7541 15.8858 17.182 15.3409C16.8298 15.0074 16.469 14.5848 16.1197 14.1794C15.9385 13.9667 15.7603 13.7597 15.5907 13.5714C14.5442 12.4156 13.295 11.3763 10.9562 11.3763C8.61735 11.3763 7.36816 12.4156 6.32166 13.5714C6.1506 13.7597 5.97378 13.9667 5.79266 14.1794C5.44335 14.5848 5.08253 15.006 4.73035 15.3409C4.15822 15.8872 3.46966 16.3558 2.55541 16.4521C2.12762 16.4975 1.69643 16.4066 1.3234 16.1923C0.950364 15.978 0.654563 15.6514 0.478222 15.259C0.0900969 14.385 -0.0277782 13.2537 0.00528432 12.0821C0.0397843 10.8948 0.235284 9.59525 0.529972 8.336C0.826097 7.07819 1.2286 5.84481 1.68716 4.79113C2.13997 3.75325 2.67472 2.83038 3.25978 2.24388C3.44735 2.05915 3.65631 1.89748 3.88222 1.76231L3.84197 1.65019ZM6.76872 2.24244C5.50803 2.50838 4.65703 2.87925 4.27753 3.26019C3.88078 3.65694 3.43372 4.38575 3.00535 5.36613C2.55262 6.43281 2.19287 7.5366 1.9301 8.66519C1.65483 9.79933 1.49161 10.9578 1.44278 12.1238C1.41116 13.2091 1.53191 14.0903 1.7921 14.6768C1.84538 14.791 1.93308 14.8857 2.0429 14.9476C2.15273 15.0095 2.27916 15.0354 2.40447 15.0218C2.87453 14.9729 3.28135 14.7358 3.73991 14.3002C4.04466 14.0098 4.31491 13.6921 4.62397 13.3313C4.81516 13.1071 5.02072 12.867 5.25647 12.6068C6.44385 11.2944 8.04953 9.94025 10.9562 9.94025C13.8628 9.94025 15.4685 11.2944 16.6558 12.6068C16.8916 12.867 17.0972 13.1071 17.2883 13.3313C17.596 13.6921 17.8677 14.0098 18.1724 14.3002C18.6295 14.7358 19.0363 14.9729 19.5078 15.0233C19.6333 15.0368 19.7599 15.0106 19.8697 14.9485C19.9796 14.8863 20.0672 14.7913 20.1202 14.6768C20.379 14.0903 20.5012 13.2106 20.4695 12.1238C20.4207 10.9578 20.2575 9.79933 19.9822 8.66519C19.7195 7.5366 19.3597 6.43281 18.907 5.36613C18.4786 4.38575 18.0301 3.6555 17.6348 3.26019C17.2553 2.87925 16.4043 2.50838 15.1436 2.24244C13.9217 1.98513 12.4454 1.85431 10.9562 1.85431C9.46691 1.85431 7.9906 1.98513 6.76872 2.24244Z"
                    fill="white"
                  />
                </svg>
                Meus Eventos
              </button>
              <button className={styles.btnVerde}
              onClick={abrirModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M12.6434 23.1797C18.4623 23.1797 23.1795 18.4625 23.1795 12.6436C23.1795 6.82461 18.4623 2.10742 12.6434 2.10742C6.82442 2.10742 2.10724 6.82461 2.10724 12.6436C2.10724 18.4625 6.82442 23.1797 12.6434 23.1797Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.6434 8.42871V16.8576"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.42889 12.6436H16.8578"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Criar
              </button>
               {mostrarModal && <ModalCriar onClose={fecharModal} />}
            </div>
          </div>
          <div className={styles.listaEventos}>
            {[
              {
                nome: "Maratona CaisTech",
                id: "OF777",
                qntQuestoes: 6,
                tipo: "Privada",
                usuarios: "14/20",
              },
              {
                nome: "Sala TADS - 2024",
                id: "OF114",
                qntQuestoes: 26,
                tipo: "Privada",
                usuarios: "40/43",
              },
              {
                nome: "Exemplo Evento",
                id: "OF404",
                qntQuestoes: 8,
                tipo: "Privada",
                usuarios: "14/15",
              },
              {
                nome: "Exemplo Evento",
                id: "OF500",
                qntQuestoes: 12,
                tipo: "Pública",
                usuarios: "4/20",
              },
              {
                nome: "Exemplo Evento",
                id: "OF200",
                qntQuestoes: 10,
                tipo: "Pública",
                usuarios: "10/20",
              },
              {
                nome: "Exemplo Evento",
                id: "OF707",
                qntQuestoes: 7,
                tipo: "Privada",
                usuarios: "11/18",
              },
            ].map((evento, index) => (
              <div className={styles.cardEvento} key={index}>
                <h3 className={styles.nomeEvento}>{evento.nome}</h3>
                <p>
                  <strong>
                    <img src={badge} alt="" />ID da Sala:</strong> {evento.id}
                </p>
                <p>
                  <strong>
                    <img src={qtd} alt="" />Quantidade:</strong> {evento.qntQuestoes} Questões
                </p>
                <p>
                  <strong>
                    <img src={eye} alt="" />Tipo de sala:</strong> {evento.tipo}
                </p>
                <p>
                  <strong>
                    <img src={users} alt="" />
                    Usuários:</strong> {evento.usuarios} Pessoas
                </p>
                <div onClick={abrirModalEntrar}>
                <div className={styles.iconeEntrar}>
                  <BsArrowRight /> 
                </div>
                </div>
                {mostrarModalEntrar && <EntrarEventoModal onClose={fecharModalEntrar} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
