import React, { useState } from "react";
import "../styles/tela-meus-eventos.css";
import Layout from "../componentes/layout";
import NuvensFixas from "../componentes/nuvem-fixa";
import { FaGamepad, FaPlus, FaMinus, FaEye, FaPen, FaChevronDown, FaChevronUp, FaArrowLeft } from "react-icons/fa";
import { BsBuilding, BsLock, BsPeople, BsQuestionCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function TelaMeusEventos() {
  const navigate = useNavigate();
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [limiteUsuarios, setLimiteUsuarios] = useState(20);
  const [limiteUsuarios2, setLimiteUsuarios2] = useState(43);
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

  const toggleEvent = (eventId) => {
    if (expandedEvent === eventId) {
      setExpandedEvent(null);
    } else {
      setExpandedEvent(eventId);
    }
  };

  const incrementarLimite = (eventoId) => {
    if (eventoId === 1) {
      setLimiteUsuarios(limiteUsuarios + 1);
      const novosEventos = [...eventos];
      novosEventos[0].maxUsuarios = limiteUsuarios + 1;
      setEventos(novosEventos);
    } else {
      setLimiteUsuarios2(limiteUsuarios2 + 1);
      const novosEventos = [...eventos];
      novosEventos[1].maxUsuarios = limiteUsuarios2 + 1;
      setEventos(novosEventos);
    }
  };

  const decrementarLimite = (eventoId) => {
    if (eventoId === 1) {
      if (limiteUsuarios > 1) {
        setLimiteUsuarios(limiteUsuarios - 1);
        const novosEventos = [...eventos];
        novosEventos[0].maxUsuarios = limiteUsuarios - 1;
        setEventos(novosEventos);
      }
    } else {
      if (limiteUsuarios2 > 1) {
        setLimiteUsuarios2(limiteUsuarios2 - 1);
        const novosEventos = [...eventos];
        novosEventos[1].maxUsuarios = limiteUsuarios2 - 1;
        setEventos(novosEventos);
      }
    }
  };

  const handleNomeChange = (eventoId, novoNome) => {
    const novosEventos = [...eventos];
    const index = novosEventos.findIndex(e => e.id === eventoId);
    if (index !== -1) {
      novosEventos[index].nome = novoNome;
      setEventos(novosEventos);
    }
  };

  const handleTipoSalaChange = (eventoId, novoTipo) => {
    const novosEventos = [...eventos];
    const index = novosEventos.findIndex(e => e.id === eventoId);
    if (index !== -1) {
      novosEventos[index].tipoSala = novoTipo;
      setEventos(novosEventos);
    }
  };

  const handleSenhaChange = (eventoId, novaSenha) => {
    const novosEventos = [...eventos];
    const index = novosEventos.findIndex(e => e.id === eventoId);
    if (index !== -1) {
      novosEventos[index].senha = novaSenha;
      setEventos(novosEventos);
    }
  };

  const handleMensagemChange = (eventoId, novaMensagem) => {
    const novosEventos = [...eventos];
    const index = novosEventos.findIndex(e => e.id === eventoId);
    if (index !== -1) {
      novosEventos[index].mensagemBoasVindas = novaMensagem;
      setEventos(novosEventos);
    }
  };

  const handleSalvar = (eventoId) => {
    alert(`Evento ${eventoId} salvo com sucesso!`);
    setExpandedEvent(null);
  };

  const handleCriar = () => {
    alert("Criando novo evento...");
    // Aqui você poderia navegar para uma página de criação de evento
    // navigate("/criar-evento");
  };

  const handleVoltar = () => {
    // Navegar de volta para a página de eventos
    navigate("/eventos");
  };

  const handleAdicionarQuestao = (eventoId) => {
    alert(`Adicionando questão ao evento ${eventoId}`);
    // Aqui você poderia navegar para uma página de adição de questão
    // navigate(`/adicionar-questao/${eventoId}`);
  };

  const handleVisualizarQuestoes = (eventoId) => {
    alert(`Visualizando questões do evento ${eventoId}`);
    // Aqui você poderia navegar para uma página de visualização de questões
    // navigate(`/visualizar-questoes/${eventoId}`);
  };

  return (
    <Layout>
      <div className="meus-eventos-container">
        <div className="meus-eventos-header">
          <FaGamepad className="icon" />
          <h1>Meus Eventos</h1>
        </div>

        <div className="eventos-content">
          <div className="eventos-lista">
            {/* Primeiro evento */}
            <div className="evento-card">
              <div className="evento-card-header">
                <a href="#" className="evento-nome">{eventos[0].nome}</a>
              </div>

              <div className="evento-card-info">
                <div className="info-item">
                  <BsBuilding className="icon" />
                  <span>ID da Sala</span>
                  <span>{eventos[0].idSala}</span>
                </div>
                <div className="info-item">
                  <BsQuestionCircle className="icon" />
                  <span>Quantidade</span>
                  <span>{eventos[0].questoes} Questões</span>
                </div>
                <div className="info-item">
                  <BsLock className="icon" />
                  <span>Tipo de sala</span>
                  <span>{eventos[0].tipoSala}</span>
                </div>
                <div className="info-item">
                  <BsPeople className="icon" />
                  <span>Usuários</span>
                  <span>{eventos[0].usuarios}/{eventos[0].maxUsuarios} Pessoas</span>
                </div>
                <button 
                  className={`toggle-btn ${expandedEvent === 1 ? 'open' : ''}`}
                  onClick={() => toggleEvent(1)}
                >
                  {expandedEvent === 1 ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>

              {expandedEvent === 1 && (
                <div className="evento-card-expanded dropdown-content">
                  <div className="evento-form-group">
                    <label>Nome:</label>
                    <input 
                      type="text" 
                      value={eventos[0].nome} 
                      onChange={(e) => handleNomeChange(1, e.target.value)}
                    />
                  </div>

                  <div className="evento-form-group">
                    <label>Tipo de Sala:</label>
                    <select 
                      value={eventos[0].tipoSala}
                      onChange={(e) => handleTipoSalaChange(1, e.target.value)}
                    >
                      <option value="Privada">Privada</option>
                      <option value="Pública">Pública</option>
                    </select>
                  </div>

                  <div className="evento-form-group">
                    <label>Senha:</label>
                    <input 
                      type="password" 
                      value={eventos[0].senha} 
                      onChange={(e) => handleSenhaChange(1, e.target.value)}
                    />
                  </div>

                  <div className="evento-form-group">
                    <label>Limite de Usuários:</label>
                    <div className="limite-usuarios">
                      <button className="minus" onClick={() => decrementarLimite(1)}>
                        <FaMinus />
                      </button>
                      <span>{limiteUsuarios}</span>
                      <button className="plus" onClick={() => incrementarLimite(1)}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>

                  <div className="evento-form-group">
                    <label>Insígnia:</label>
                    <div className="insignia-upload">
                      <p>Arquivo PNG de 24x24</p>
                      <p>Arraste o arquivo até aqui</p>
                      <p>Ou <span style={{ color: "#6325CE" }}>Escolha seus arquivos</span></p>
                    </div>
                  </div>

                  <div className="evento-form-group">
                    <label>Sobre as Questões</label>
                    <div className="botoes-questao">
                      <button 
                        className="btn-adicionar-questao"
                        onClick={() => handleAdicionarQuestao(1)}
                      >
                        <FaPlus /> Adicionar Questão
                      </button>
                      <button 
                        className="btn-visualizar-questoes"
                        onClick={() => handleVisualizarQuestoes(1)}
                      >
                        <FaEye /> Visualizar Questões
                      </button>
                    </div>
                  </div>

                  <div className="evento-form-group">
                    <label>Mensagem de Boas Vindas:</label>
                    <textarea 
                      placeholder="Digite uma mensagem de boas vindas para seus usuários..."
                      value={eventos[0].mensagemBoasVindas}
                      onChange={(e) => handleMensagemChange(1, e.target.value)}
                    ></textarea>
                  </div>

                  <button 
                    className="btn-salvar"
                    onClick={() => handleSalvar(1)}
                  >
                    Salvar
                  </button>
                </div>
              )}
            </div>

            {/* Segundo evento */}
            <div className="evento-card">
              <div className="evento-card-header">
                <a href="#" className="evento-nome">{eventos[1].nome}</a>
              </div>

              <div className="evento-card-info">
                <div className="info-item">
                  <BsBuilding className="icon" />
                  <span>ID da Sala</span>
                  <span>{eventos[1].idSala}</span>
                </div>
                <div className="info-item">
                  <BsQuestionCircle className="icon" />
                  <span>Quantidade</span>
                  <span>{eventos[1].questoes} Questões</span>
                </div>
                <div className="info-item">
                  <BsLock className="icon" />
                  <span>Tipo de sala</span>
                  <span>{eventos[1].tipoSala}</span>
                </div>
                <div className="info-item">
                  <BsPeople className="icon" />
                  <span>Usuários</span>
                  <span>{eventos[1].usuarios}/{eventos[1].maxUsuarios} Pessoas</span>
                </div>
                <button 
                  className={`toggle-btn ${expandedEvent === 2 ? 'open' : ''}`}
                  onClick={() => toggleEvent(2)}
                >
                  {expandedEvent === 2 ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>

              {expandedEvent === 2 && (
                <div className="evento-card-expanded dropdown-content">
                  <div className="evento-form-group">
                    <label>Nome:</label>
                    <input 
                      type="text" 
                      value={eventos[1].nome}
                      onChange={(e) => handleNomeChange(2, e.target.value)}
                    />
                  </div>

                  <div className="evento-form-group">
                    <label>Tipo de Sala:</label>
                    <select
                      value={eventos[1].tipoSala}
                      onChange={(e) => handleTipoSalaChange(2, e.target.value)}
                    >
                      <option value="Privada">Privada</option>
                      <option value="Pública">Pública</option>
                    </select>
                  </div>

                  <div className="evento-form-group">
                    <label>Senha:</label>
                    <input 
                      type="password" 
                      value={eventos[1].senha}
                      onChange={(e) => handleSenhaChange(2, e.target.value)}
                    />
                  </div>

                  <div className="evento-form-group">
                    <label>Limite de Usuários:</label>
                    <div className="limite-usuarios">
                      <button 
                        className="minus"
                        onClick={() => decrementarLimite(2)}
                      >
                        <FaMinus />
                      </button>
                      <span>{limiteUsuarios2}</span>
                      <button 
                        className="plus"
                        onClick={() => incrementarLimite(2)}
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>

                  <div className="evento-form-group">
                    <label>Insígnia:</label>
                    <div className="insignia-upload">
                      <p>Arquivo PNG de 24x24</p>
                      <p>Arraste o arquivo até aqui</p>
                      <p>Ou <span style={{ color: "#9747FF" }}>Escolha seus arquivos</span></p>
                    </div>
                  </div>

                  <div className="evento-form-group">
                    <label>Sobre as Questões</label>
                    <div className="botoes-questao">
                      <button 
                        className="btn-adicionar-questao"
                        onClick={() => handleAdicionarQuestao(2)}
                      >
                        <FaPlus /> Adicionar Questão
                      </button>
                      <button 
                        className="btn-visualizar-questoes"
                        onClick={() => handleVisualizarQuestoes(2)}
                      >
                        <FaEye /> Visualizar Questões
                      </button>
                    </div>
                  </div>

                  <div className="evento-form-group">
                    <label>Mensagem de Boas Vindas:</label>
                    <textarea 
                      placeholder="Digite uma mensagem de boas vindas para seus usuários..."
                      value={eventos[1].mensagemBoasVindas}
                      onChange={(e) => handleMensagemChange(2, e.target.value)}
                    ></textarea>
                  </div>

                  <button 
                    className="btn-salvar"
                    onClick={() => handleSalvar(2)}
                  >
                    Salvar
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="estatisticas">
            <div className="estatistica-card">
              <div className="nuvens-fixas-container">
                <NuvensFixas />
              </div>
              <div className="estatistica-circulo rosa">
                <div className="numero">54</div>
                <div className="texto">Total de Usuários</div>
              </div>
            </div>

            <div className="estatistica-card">
              <div className="nuvens-fixas-container">
                <NuvensFixas />
              </div>
              <div className="estatistica-circulo verde">
                <div className="numero">2</div>
                <div className="texto">Finalizados</div>
                <FaPen className="icone" />
              </div>
            </div>
          </div>
        </div>

        <div className="botoes-acao">
          <button className="btn-criar" onClick={handleCriar}>
            <FaPlus /> Criar
          </button>
          <button className="btn-voltar" onClick={handleVoltar}>
            Voltar aos Eventos
          </button>
        </div>
      </div>
    </Layout>
  );
}
