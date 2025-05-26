import React, { useState } from "react";
import "../styles/tela-meus-eventos.css"; // Ensure this CSS is the modified one
import Layout from "../componentes/layout";
import NuvensFixas from "../componentes/nuvem-fixa";
// Added FaEyeSlash, FaUpload, FaPen, FaCheck (optional)
import { FaGamepad, FaPlus, FaMinus, FaEye, FaEyeSlash, FaPen, FaChevronDown, FaChevronUp, FaArrowLeft, FaUpload, FaCheck } from "react-icons/fa";
import { BsBuilding, BsLock, BsPeople, BsQuestionCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function TelaMeusEventos() {
  const navigate = useNavigate();
  const [expandedEvent, setExpandedEvent] = useState(null);
  // Removed individual limiteUsuarios states, use state within eventos array
  // const [limiteUsuarios, setLimiteUsuarios] = useState(20);
  // const [limiteUsuarios2, setLimiteUsuarios2] = useState(43);

  // Use a more dynamic approach for events
  const [eventos, setEventos] = useState([
    {
      id: 1,
      nome: "Maratona CaisTech",
      idSala: "OF777",
      questoes: 6,
      tipoSala: "Privada",
      usuarios: 14,
      maxUsuarios: 20, // Keep maxUsuarios here
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
      maxUsuarios: 43, // Keep maxUsuarios here
      senha: "**************",
      mensagemBoasVindas: ""
    }
    // Add more events dynamically if needed
  ]);

  // State for password visibility, keyed by event ID
  const [showPassword, setShowPassword] = useState({});

  const togglePasswordVisibility = (eventId) => {
    setShowPassword(prev => ({ ...prev, [eventId]: !prev[eventId] }));
  };

  const toggleEvent = (eventId) => {
    setExpandedEvent(prevExpanded => prevExpanded === eventId ? null : eventId);
  };

  // Generic function to update event field
  const updateEventField = (eventoId, field, value) => {
    setEventos(prevEventos =>
      prevEventos.map(evento =>
        evento.id === eventoId ? { ...evento, [field]: value } : evento
      )
    );
  };

  // Simplified handlers using the generic function
  const handleNomeChange = (eventoId, novoNome) => updateEventField(eventoId, 'nome', novoNome);
  const handleTipoSalaChange = (eventoId, novoTipo) => updateEventField(eventoId, 'tipoSala', novoTipo);
  const handleSenhaChange = (eventoId, novaSenha) => updateEventField(eventoId, 'senha', novaSenha);
  const handleMensagemChange = (eventoId, novaMensagem) => updateEventField(eventoId, 'mensagemBoasVindas', novaMensagem);

  // Handlers for limiteUsuarios
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
    console.log("Salvando evento:", evento); // Replace alert with console log or API call
    alert(`Evento ${evento?.nome || eventoId} salvo com sucesso!`); // Keep alert for now
    setExpandedEvent(null); // Collapse on save
  };

  const handleCriar = () => {
    alert("Criando novo evento...");
    // navigate("/criar-evento");
  };

  const handleVoltar = () => {
    navigate("/eventos"); // Assuming this is the correct route
  };

  const handleAdicionarQuestao = (eventoId) => {
    alert(`Adicionando questão ao evento ${eventoId}`);
    // navigate(`/adicionar-questao/${eventoId}`);
  };

  const handleVisualizarQuestoes = (eventoId) => {
    alert(`Visualizando questões do evento ${eventoId}`);
    // navigate(`/visualizar-questoes/${eventoId}`);
  };

  // Example dynamic data for stats - replace with actual data source
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
                {/* Wrapper for header, info, and toggle button */}
                <div className="evento-card-header-wrapper" onClick={() => toggleEvent(evento.id)}>
                  <div className="evento-card-header">
                    <a href="#" onClick={(e) => e.preventDefault()} className="evento-nome">{evento.nome}</a>
                  </div>

                  <div className="evento-card-info">
                    <div className="info-item">
                      <BsBuilding className="icon" />
                      {/* <span>ID da Sala</span> */}
                      <span>{evento.idSala}</span>
                    </div>
                    <div className="info-item">
                      <BsQuestionCircle className="icon" />
                      {/* <span>Quantidade</span> */}
                      <span>{evento.questoes} Questões</span>
                    </div>
                    <div className="info-item">
                      <BsLock className="icon" />
                      {/* <span>Tipo de sala</span> */}
                      <span>{evento.tipoSala}</span>
                    </div>
                    <div className="info-item">
                      <BsPeople className="icon" />
                      {/* <span>Usuários</span> */}
                      <span>{evento.usuarios}/{evento.maxUsuarios} Pessoas</span>
                    </div>
                  </div>
                  <button
                    className={`toggle-btn ${expandedEvent === evento.id ? 'open' : ''}`}
                    // Prevent wrapper click if button itself is clicked
                    onClick={(e) => { e.stopPropagation(); toggleEvent(evento.id); }}
                  >
                    {expandedEvent === evento.id ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div> {/* End wrapper */}


                {expandedEvent === evento.id && (
                  <div className="evento-card-expanded dropdown-content">
                    {/* Column 1 */}
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
                      <div className="password-input-wrapper"> {/* Wrapper */}
                        <input
                          type={showPassword[evento.id] ? "text" : "password"} // Toggle type
                          value={evento.senha}
                          onChange={(e) => handleSenhaChange(evento.id, e.target.value)}
                        />
                        <span className="eye-icon" onClick={(e) => {e.stopPropagation(); togglePasswordVisibility(evento.id)}}> {/* Icon */}
                          {showPassword[evento.id] ? <FaEyeSlash /> : <FaEye />}
                        </span>
                      </div>
                    </div>

                    {/* Column 2 */}
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
                         <FaUpload className="upload-icon" /> {/* Added Icon */}
                        <p>Arquivo PNG de 24x24</p>
                        <p>Arraste o arquivo até aqui</p>
                        {/* Use CSS variable for color if defined */}
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

                    {/* Spanning both columns */}
                    <div className="evento-form-group full-width"> {/* Added full-width class */}
                      <label>Mensagem de Boas Vindas:</label>
                      <textarea
                        placeholder="Digite uma mensagem de boas vindas para seus usuários..."
                        value={evento.mensagemBoasVindas}
                        onChange={(e) => handleMensagemChange(evento.id, e.target.value)}
                      ></textarea>
                    </div>

                    {/* Positioned by CSS grid properties */}
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
          </div> {/* End eventos-lista */}

          <div className="estatisticas">
            <div className="estatistica-card">
              <div className="nuvens-fixas-container">
                <NuvensFixas />
              </div>
              <div className="estatistica-circulo rosa">
                 {/* <BsPeople className="icone-interno" /> Optional */}
                <div className="numero">{totalUsuarios}</div>
                <div className="texto">Total de Usuários</div>
              </div>
            </div>

            <div className="estatistica-card">
              <div className="nuvens-fixas-container">
                <NuvensFixas />
              </div>
              <div className="estatistica-circulo verde">
                 {/* <FaCheck className="icone-interno" /> Optional */}
                <div className="numero">{finalizados}</div>
                <div className="texto">Finalizados</div>
                {/* Added Pencil Icon - CSS needed for positioning */}
                <FaPen className="icone-lapis" />
              </div>
            </div>
          </div> {/* End estatisticas */}
        </div> {/* End eventos-content */}

        {/* Position these buttons relative to eventos-content or container */}
        <div className="botoes-acao">
          <button className="btn-criar" onClick={handleCriar}>
            <FaPlus /> Criar
          </button>
          <button className="btn-voltar" onClick={handleVoltar}>
            <FaArrowLeft /> Voltar aos Eventos
          </button>
        </div>

      </div> {/* End meus-eventos-container */}
    </Layout>
  );
}

