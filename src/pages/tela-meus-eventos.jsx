import React, { useState } from "react";
import "../styles/tela-meus-eventos.css";
import Layout from "../componentes/layout";
import NuvensFixas from "../componentes/nuvem-fixa";
import { FaGamepad, FaPlus, FaMinus, FaEye, FaEyeSlash, FaPen, FaChevronDown, FaChevronUp, FaArrowLeft, FaUpload, FaCheck } from "react-icons/fa";
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
      mensagemBoasVindas: ""
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
      mensagemBoasVindas: ""
    }
  ]);

  const [showPassword, setShowPassword] = useState({});

  const togglePasswordVisibility = (eventId) => {
    setShowPassword(prev => ({ ...prev, [eventId]: !prev[eventId] }));
  };

  const toggleEvent = (eventId) => {
    setExpandedEvent(prevExpanded => prevExpanded === eventId ? null : eventId);
  };

  const updateEventField = (eventoId, field, value) => {
    setEventos(prevEventos =>
      prevEventos.map(evento =>
        evento.id === eventoId ? { ...evento, [field]: value } : evento
      )
    );
  };

  const handleNomeChange = (eventoId, novoNome) => updateEventField(eventoId, 'nome', novoNome);
  const handleTipoSalaChange = (eventoId, novoTipo) => updateEventField(eventoId, 'tipoSala', novoTipo);
  const handleSenhaChange = (eventoId, novaSenha) => updateEventField(eventoId, 'senha', novaSenha);
  const handleMensagemChange = (eventoId, novaMensagem) => updateEventField(eventoId, 'mensagemBoasVindas', novaMensagem);

  const incrementarLimite = (eventoId) => {
    setEventos(prevEventos =>
      prevEventos.map(evento =>
        evento.id === eventoId ? { ...evento, maxUsuarios: evento.maxUsuarios + 1 } : evento
      )
    );
  };

  const decrementarLimite = (eventoId) => {
    setEventos(prevEventos =>
      prevEventos.map(evento =>
        evento.id === eventoId && evento.maxUsuarios > 1 ? { ...evento, maxUsuarios: evento.maxUsuarios - 1 } : evento
      )
    );
  };

  const handleSalvar = (eventoId) => {
    const evento = eventos.find(e => e.id === eventoId);
    console.log("Salvando evento:", evento);
    alert(`Evento ${evento?.nome || eventoId} salvo com sucesso!`);
    setExpandedEvent(null);
  };

  const handleCriar = () => {
    alert("Criando novo evento...");
  };

  const handleVoltar = () => {
    navigate("/eventos");
  };

  const handleAdicionarQuestao = (eventoId) => {
    alert(`Adicionando questão ao evento ${eventoId}`);
  };

  const handleVisualizarQuestoes = (eventoId) => {
    alert(`Visualizando questões do evento ${eventoId}`);
  };

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
                <div className="evento-card-header-wrapper" onClick={() => toggleEvent(evento.id)}>
                  <div className="evento-card-header">
                    <a href="#" onClick={(e) => e.preventDefault()} className="evento-nome">{evento.nome}</a>
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
                      <span>{evento.usuarios}/{evento.maxUsuarios} Pessoas</span>
                    </div>
                  </div>
                  <button
                    className={`toggle-btn ${expandedEvent === evento.id ? 'open' : ''}`}
                    onClick={(e) => { e.stopPropagation(); toggleEvent(evento.id); }}
                  >
                    {expandedEvent === evento.id ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>

                {expandedEvent === evento.id && (
                  <div className="evento-card-expanded dropdown-content">
                    <div className="evento-form-group">
                      <label>Nome:</label>
                      <input
                        type="text"
                        value={evento.nome}
                        onChange={(e) => handleNomeChange(evento.id, e.target.value)}
                      />
                    </div>

                    <div className="evento-form-group">
                      <label>Tipo de Sala:</label>
                      <select
                        value={evento.tipoSala}
                        onChange={(e) => handleTipoSalaChange(evento.id, e.target.value)}
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
                          onChange={(e) => handleSenhaChange(evento.id, e.target.value)}
                        />
                        <span className="eye-icon" onClick={(e) => {e.stopPropagation(); togglePasswordVisibility(evento.id)}}>
                          {showPassword[evento.id] ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                    </div>

                    <div className="evento-form-group">
                      <label>Limite de Usuários:</label>
                      <div className="limite-usuarios">
                        <button className="minus" onClick={(e) => {e.stopPropagation(); decrementarLimite(evento.id)}}>
                          <FaMinus />
                        </button>
                        <span>{evento.maxUsuarios}</span>
                        <button className="plus" onClick={(e) => {e.stopPropagation(); incrementarLimite(evento.id)}}>
                          <FaPlus />
                        </button>
                      </div>
                    </div>

                    <div className="evento-form-group">
                      <label>Insígnia:</label>
                      <div className="insignia-upload">
                        <FaUpload className="upload-icon" />
                        <p>Arquivo PNG de 24x24</p>
                        <p>Arraste o arquivo até aqui</p>
                        <p>Ou <span style={{ color: "var(--color-icones, #6325CE)" }}>Escolha seus arquivos</span></p>
                      </div>
                    </div>

                    <div className="evento-form-group">
                      <label>Sobre as Questões</label>
                      <div className="botoes-questao">
                        <button
                          className="btn-adicionar-questao"
                          onClick={(e) => {e.stopPropagation(); handleAdicionarQuestao(evento.id)}}
                        >
                          <FaPlus /> Adicionar Questão
                        </button>
                        <button
                          className="btn-visualizar-questoes"
                          onClick={(e) => {e.stopPropagation(); handleVisualizarQuestoes(evento.id)}}
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
                        onChange={(e) => handleMensagemChange(evento.id, e.target.value)}
                      ></textarea>
                    </div>

                    <button
                      className="btn-salvar"
                      onClick={(e) => {e.stopPropagation(); handleSalvar(evento.id)}}
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
    </Layout>
  );
}