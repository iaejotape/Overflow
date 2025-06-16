import React, { useState } from "react";
import "../styles/tela-meus-eventos.css";
import Layout from "../componentes/layout";
import NuvensFixas from "../componentes/nuvem-fixa";
import {
  FaGamepad,
  FaPlus,
  FaMinus,
  FaEye,
  FaEyeSlash,
  FaPen,
  FaChevronDown,
  FaChevronUp,
  FaArrowLeft,
  FaUpload,
  FaCheck,
  FaTrash,
} from "react-icons/fa";
import { BsBuilding, BsLock, BsPeople, BsQuestionCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function TelaMeusEventos() {
  const navigate = useNavigate();

  const [expandedEvent, setExpandedEvent] = useState(null);
  const [eventos, setEventos] = useState([
    {
      id: 1,
      nome: "Maratona CaisTech",
      idSala: "OF777",
      questoes: 6,
      tipoSala: "Privada",
      usuarios: 14,
      maxUsuarios: 20,
      senha: "**************",
      mensagemBoasVindas: "",
    },
    {
      id: 2,
      nome: "Maratona InovalFPI",
      idSala: "OF777",
      questoes: 7,
      tipoSala: "Privada",
      usuarios: 40,
      maxUsuarios: 43,
      senha: "**************",
      mensagemBoasVindas: "",
    },
  ]);
  const [showPassword, setShowPassword] = useState({});
  const [modalVisualizarQuestoes, setModalVisualizarQuestoes] = useState(false);
  const [questoesSelecionadas, setQuestoesSelecionadas] = useState([]);
  const [uploadError, setUploadError] = useState({});

  const togglePasswordVisibility = (eventId) => {
    setShowPassword((prev) => ({ ...prev, [eventId]: !prev[eventId] }));
  };

  const toggleEvent = (eventId) => {
    setExpandedEvent((prevExpanded) =>
      prevExpanded === eventId ? null : eventId
    );
  };

  const updateEventField = (eventoId, field, value) => {
    setEventos((prevEventos) =>
      prevEventos.map((evento) =>
        evento.id === eventoId ? { ...evento, [field]: value } : evento
      )
    );
  };

  const handleNomeChange = (eventoId, novoNome) =>
    updateEventField(eventoId, "nome", novoNome);
  const handleTipoSalaChange = (eventoId, novoTipo) =>
    updateEventField(eventoId, "tipoSala", novoTipo);
  const handleSenhaChange = (eventoId, novaSenha) =>
    updateEventField(eventoId, "senha", novaSenha);
  const handleMensagemChange = (eventoId, novaMensagem) =>
    updateEventField(eventoId, "mensagemBoasVindas", novaMensagem);

  const incrementarLimite = (eventoId) => {
    setEventos((prevEventos) =>
      prevEventos.map((evento) =>
        evento.id === eventoId
          ? { ...evento, maxUsuarios: evento.maxUsuarios + 1 }
          : evento
      )
    );
  };

  const decrementarLimite = (eventoId) => {
    setEventos((prevEventos) =>
      prevEventos.map((evento) =>
        evento.id === eventoId && evento.maxUsuarios > 1
          ? { ...evento, maxUsuarios: evento.maxUsuarios - 1 }
          : evento
      )
    );
  };

  const handleSalvar = (eventoId) => {
    const evento = eventos.find((e) => e.id === eventoId);
    console.log("Salvando evento:", evento);
    alert(`Evento ${evento?.nome || eventoId} salvo com sucesso!`);
    setExpandedEvent(null);
  };

  const handleCriar = () => {
    navigate("/modal-criar-evento");
  };

  const handleVoltar = () => {
    navigate("/eventos");
  };

  const handleAdicionarQuestao = () => {
    navigate("/addquestoes");
  };

  const handleVisualizarQuestoes = (eventoId) => {
    setQuestoesSelecionadas(questoesExemplo);
    setModalVisualizarQuestoes(true);
  };

  const handleFecharModal = () => {
    setModalVisualizarQuestoes(false);
    setQuestoesSelecionadas([]);
  };

  const validateFile = (file) => {
    // Verifica se é PNG
    if (file.type !== "image/png") {
      return "Apenas arquivos PNG são permitidos";
    }

    // Verifica o tamanho da imagem
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        URL.revokeObjectURL(img.src);
        if (img.width === 24 && img.height === 24) {
          resolve(null);
        } else {
          reject("A imagem deve ter exatamente 24x24 pixels");
        }
      };

      img.onerror = () => {
        URL.revokeObjectURL(img.src);
        reject("Erro ao carregar a imagem");
      };
    });
  };

  const handleFileDrop = async (e, eventoId) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];
    if (!file) return;

    try {
      await handleFileUpload(file, eventoId);
    } catch (error) {
      setUploadError((prev) => ({ ...prev, [eventoId]: error.message }));
    }
  };

  const handleFileSelect = async (e, eventoId) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      await handleFileUpload(file, eventoId);
    } catch (error) {
      setUploadError((prev) => ({ ...prev, [eventoId]: error.message }));
    }
  };

  const handleFileUpload = async (file, eventoId) => {
    try {
      // Valida o arquivo
      const errorMessage = await validateFile(file);
      if (errorMessage) {
        throw new Error(errorMessage);
      }

      // Converte para base64
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        // Atualiza o evento com a nova insígnia
        setEventos((prevEventos) =>
          prevEventos.map((evento) =>
            evento.id === eventoId
              ? { ...evento, insignia: reader.result }
              : evento
          )
        );

        // Limpa erro se existir
        setUploadError((prev) => ({ ...prev, [eventoId]: null }));
      };
    } catch (error) {
      throw new Error(
        error.message || "Apenas PNG de 24x24 pixels são permitidos"
      );
    }
  };

  const handleRemoveInsignia = (e, eventoId) => {
    e.stopPropagation();
    setEventos((prevEventos) =>
      prevEventos.map((evento) =>
        evento.id === eventoId ? { ...evento, insignia: null } : evento
      )
    );
  };

  const questoesExemplo = [
    {
      id: 1,
      titulo: "Angry Ducks",
      descricao:
        "Ajude os Duckneses a ganhar a guerra contra os Nlogoneses através de um código e patos!🦆",
      nivel: "Intermediária",
      pontos: 25,
    },
    {
      id: 2,
      titulo: "Área do Círculo",
      descricao:
        "Ajude o Sr. Isac a descobrir a área total da sua nova mesa redonda!🧑‍🔬✨",
      nivel: "Intermediária",
      pontos: 15,
    },
    {
      id: 3,
      titulo: "Área do retângulo",
      descricao:
        "Ajude o Sr. Isac a descobrir a área total de um retangulo!🧑‍🔬✨",
      nivel: "Intermediária",
      pontos: 15,
    },
  ];

  const totalUsuarios = 54;
  const finalizados = 2;

  return (
    <Layout>
      <div className="meus-eventos-container">
        <div className="meus-eventos-header">
          <FaGamepad className="icon" />
          <h1>Meus Eventos</h1>
        </div>

        <div className="eventos-content">
          <div className="eventos-lista">
            {eventos.map((evento) => (
              <div className="evento-card" key={evento.id}>
                <div
                  className="evento-card-header-wrapper"
                  onClick={() => toggleEvent(evento.id)}
                >
                  <div className="evento-card-header">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="evento-nome"
                    >
                      {evento.nome}
                    </a>
                  </div>

                  <div className="evento-card-info">
                    <div className="info-item">
                      <BsBuilding className="icon" />
                      <span>{evento.idSala}</span>
                    </div>
                    <div className="info-item">
                      <BsQuestionCircle className="icon" />
                      <span>{evento.questoes} Questões</span>
                    </div>
                    <div className="info-item">
                      <BsLock className="icon" />
                      <span>{evento.tipoSala}</span>
                    </div>
                    <div className="info-item">
                      <BsPeople className="icon" />
                      <span>
                        {evento.usuarios}/{evento.maxUsuarios} Pessoas
                      </span>
                    </div>
                  </div>
                  <button
                    className={`toggle-btn ${
                      expandedEvent === evento.id ? "open" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleEvent(evento.id);
                    }}
                  >
                    {expandedEvent === evento.id ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                </div>

                {expandedEvent === evento.id && (
                  <div className="evento-card-expanded dropdown-content">
                    <div className="evento-form-group">
                      <label>Nome:</label>
                      <input
                        type="text"
                        value={evento.nome}
                        onChange={(e) =>
                          handleNomeChange(evento.id, e.target.value)
                        }
                      />
                    </div>

                    <div className="evento-form-group">
                      <label>Tipo de Sala:</label>
                      <select
                        value={evento.tipoSala}
                        onChange={(e) =>
                          handleTipoSalaChange(evento.id, e.target.value)
                        }
                      >
                        <option value="Privada">Privada</option>
                        <option value="Pública">Pública</option>
                      </select>
                    </div>

                    <div className="evento-form-group">
                      <label>Senha:</label>
                      <div className="password-input-wrapper">
                        <input
                          type={showPassword[evento.id] ? "text" : "password"}
                          value={evento.senha}
                          onChange={(e) =>
                            handleSenhaChange(evento.id, e.target.value)
                          }
                        />
                        <span
                          className="eye-icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            togglePasswordVisibility(evento.id);
                          }}
                        >
                          {showPassword[evento.id] ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                    </div>

                    <div className="evento-form-group">
                      <label>Limite de Usuários:</label>
                      <div className="limite-usuarios">
                        <button
                          className="minus"
                          onClick={(e) => {
                            e.stopPropagation();
                            decrementarLimite(evento.id);
                          }}
                        >
                          <FaMinus />
                        </button>
                        <span>{evento.maxUsuarios}</span>
                        <button
                          className="plus"
                          onClick={(e) => {
                            e.stopPropagation();
                            incrementarLimite(evento.id);
                          }}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>

                    <div className="evento-form-group">
                      <label>Insígnia:</label>
                      <div
                        className="insignia-upload"
                        onDragOver={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        onDrop={(e) => handleFileDrop(e, evento.id)}
                      >
                        <input
                          type="file"
                          id={`file-upload-${evento.id}`}
                          accept=".png"
                          style={{ display: "none" }}
                          onChange={(e) => handleFileSelect(e, evento.id)}
                        />
                        <FaUpload className="upload-icon" />
                        <p>Arquivo PNG de 24x24</p>
                        <p>Arraste o arquivo até aqui</p>
                        <p>
                          Ou{" "}
                          <span
                            style={{
                              color: "var(--color-icones, #6325CE)",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              document
                                .getElementById(`file-upload-${evento.id}`)
                                .click()
                            }
                          >
                            Escolha seus arquivos
                          </span>
                        </p>
                        {evento.insignia && (
                          <div className="preview-container">
                            <img
                              src={evento.insignia}
                              alt="Insígnia"
                              className="insignia-preview"
                            />
                            <button
                              className="remove-insignia"
                              onClick={(e) =>
                                handleRemoveInsignia(e, evento.id)
                              }
                            >
                              <FaTrash />
                            </button>
                          </div>
                        )}
                        {uploadError[evento.id] && (
                          <div className="upload-error">
                            {uploadError[evento.id]}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="evento-form-group">
                      <label>Sobre as Questões</label>
                      <div className="botoes-questao">
                        <button
                          className="btn-adicionar-questao"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAdicionarQuestao(evento.id);
                          }}
                        >
                          <FaPlus /> Adicionar Questão
                        </button>
                        <button
                          className="btn-visualizar-questoes"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleVisualizarQuestoes(evento.id);
                          }}
                        >
                          <FaEye /> Visualizar Questões
                        </button>
                      </div>
                    </div>

                    <div className="evento-form-group full-width">
                      <label>Mensagem de Boas Vindas:</label>
                      <textarea
                        placeholder="Digite uma mensagem de boas vindas para seus usuários..."
                        value={evento.mensagemBoasVindas}
                        onChange={(e) =>
                          handleMensagemChange(evento.id, e.target.value)
                        }
                      ></textarea>
                    </div>

                    <button
                      className="btn-salvar"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSalvar(evento.id);
                      }}
                    >
                      Salvar
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="estatisticas">
            <div className="estatistica-card">
              <div className="nuvens-fixas-container">
                <NuvensFixas />
              </div>
              <div className="estatistica-circulo rosa">
                <div className="numero">{totalUsuarios}</div>
                <div className="texto">Total de Usuários</div>
              </div>
            </div>

            <div className="estatistica-card">
              <div className="nuvens-fixas-container">
                <NuvensFixas />
              </div>
              <div className="estatistica-circulo verde">
                <div className="numero">{finalizados}</div>
                <div className="texto">Finalizados</div>
              </div>
            </div>
            <div className="botoes-acao">
              <button className="btn-criar" onClick={handleCriar}>
                <FaPlus /> Criar
              </button>
              <button className="btn-voltar" onClick={handleVoltar}>
                <FaArrowLeft /> Voltar aos Eventos
              </button>
            </div>
          </div>
        </div>

      </div>
      {modalVisualizarQuestoes && (
        <div className="modal-overlay">
          <div className="modal-questoes">
            <div className="modal-questoes-header">
              <FaGamepad className="modal-questoes-icon" />
              <h2>Questões Adicionadas</h2>
              <button className="modal-close-btn" onClick={handleFecharModal}>
                ×
              </button>
            </div>
            <div className="modal-questoes-lista">
              {questoesSelecionadas.map((q) => (
                <div className="modal-questao-card" key={q.id}>
                  <div>
                    <div className="modal-questao-titulo">{q.titulo}</div>
                    <div className="modal-questao-desc">{q.descricao}</div>
                  </div>
                  <div className="modal-questao-info">
                    <span className="modal-questao-nivel">{q.nivel}</span>
                    <span className="modal-questao-pontos">
                      +{q.pontos} Pts
                    </span>
                    <button className="modal-questao-btn ver">
                      <FaEye />
                    </button>
                    <button className="modal-questao-btn deletar">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
