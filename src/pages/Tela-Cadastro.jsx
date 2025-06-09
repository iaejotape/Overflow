import { useState } from "react";
import logo from "../assets/logo_page.svg";
import style from "../styles/Tela-Cadastro.module.css";
import NuvensAnimadas from "../componentes/nuvem.jsx";
import { useNavigate } from "react-router-dom";

function Cadastro() {
    const navigate = useNavigate();
    const handleClickLogin = () =>{
    navigate("/");
  }
  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");
  const [camposInvalidos, setCamposInvalidos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const invalidos = [];
    if (!nome) invalidos.push('nome');
    if (!apelido) invalidos.push('apelido');
    if (!email) invalidos.push('email');
    if (!dataNascimento) invalidos.push('dataNascimento');
    if (!sexo) invalidos.push('sexo');
    if (!tipoUsuario) invalidos.push('tipoUsuario');
    if (!senha) invalidos.push('senha');
    if (!confirmarSenha) invalidos.push('confirmarSenha');

    setCamposInvalidos(invalidos);

    if (invalidos.length > 0) {
      setErro("Todos os campos são obrigatórios!");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      setCamposInvalidos(['senha', 'confirmarSenha']);
      return;
    }

    setErro("");
    alert("Conta criada com sucesso!");
  }

  const isCampoInvalido = (campo) => camposInvalidos.includes(campo);

  return (
    <div className={style.main_cadastro}>
      <NuvensAnimadas />
      <div className={style.container_cadastro}>
        <form onSubmit={handleSubmit} className={style.form_cadastro}>
          <h1 className={style.titulo_cadastro}>Criar nova conta</h1>

          <div className={style.nome_apelido}>
            <div className={style.nome_cadastro}>
              <h3>Nome:
                {isCampoInvalido('nome') && <span style={{ color: 'red', fontSize: '1rem' }}> * </span>}
              </h3>
              <input 
                className={`${style.inputPadrao} ${isCampoInvalido('nome') ? style.erroCampo : ''}`}
                type="text"
                placeholder="Digite seu nome..."
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className={style.apelido}>
              <h3>Apelido:
                {isCampoInvalido('apelido') && <span style={{ color: 'red', fontSize: '1rem' }}> * </span>}
              </h3>
              <input 
                className={`${style.inputPadrao} ${isCampoInvalido('apelido') ? style.erroCampo : ''}`}
                type="text"
                placeholder="Digite seu apelido..."
                value={apelido}
                onChange={(e) => setApelido(e.target.value)}
              />
            </div>
          </div>

          <div className={style.email_cadastro}>
            <h3>Email:
              {isCampoInvalido('email') && <span style={{ color: 'red', fontSize: '1rem' }}> * </span>}
            </h3>
            <input 
              className={`${style.inputPadrao} ${isCampoInvalido('email') ? style.erroCampo : ''}`}
              type="email"
              placeholder="Digite seu e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={style.data_sexo}>
          <div className={style.data_cadastro}>
            <h3>Data de Nascimento:
              {isCampoInvalido('dataNascimento') && <span style={{ color: 'red', fontSize: '1rem' }}> * </span>}
            </h3>
            <input
              type="date"
              className={`${style.data_input} ${isCampoInvalido('dataNascimento') ? style.erroCampo : ''}`}
              value={dataNascimento}
              onChange={(e) => setDataNascimento(e.target.value)}
            />
          </div>
          <div className={style.sexo_cadastro}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              Sexo:
              {isCampoInvalido('sexo') && <span style={{ color: 'red', fontSize: '0.8rem' }}>Selecione uma opção</span>}
            </h3>
            <label>
              <input 
                type="radio" 
                name="sexo" 
                value="Masculino" 
                onChange={(e) => setSexo(e.target.value)} 
              /> Masculino
            </label>
            <label>
              <input 
                type="radio" 
                name="sexo" 
                value="Feminino" 
                onChange={(e) => setSexo(e.target.value)} 
              /> Feminino
            </label>
            <label>
              <input 
                type="radio" 
                name="sexo" 
                value="Outro" 
                onChange={(e) => setSexo(e.target.value)} 
              /> Outro
            </label>
          </div>
        </div>

        <div className={style.tipo_usuario}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            Tipo de Usuário:
            {isCampoInvalido('tipoUsuario') && <span style={{ color: 'red', fontSize: '0.8rem' }}>Selecione uma opção</span>}
          </h3>
          <label>
            <input 
              type="radio" 
              name="tipo_user" 
              value="Estudante" 
              onChange={(e) => setTipoUsuario(e.target.value)} 
            /> Estudante
          </label>
          <label>
            <input 
              type="radio" 
              name="tipo_user" 
              value="Professor" 
              onChange={(e) => setTipoUsuario(e.target.value)} 
            /> Professor
          </label>
        </div>

          <div className={style.senha_cadastro}>
            <h3>Senha:
              {isCampoInvalido('senha') && <span style={{ color: 'red', fontSize: '1rem' }}> * </span>}
            </h3>
            <input 
              className={`${style.inputPadrao} ${isCampoInvalido('senha') ? style.erroCampo : ''}`}
              type="password"
              placeholder="Digite sua senha..."
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <h3>Confirmação de senha:
              {isCampoInvalido('confirmarSenha') && <span style={{ color: 'red', fontSize: '1rem' }}> * </span>}
            </h3>
            <input 
              className={`${style.inputPadrao} ${isCampoInvalido('confirmarSenha') ? style.erroCampo : ''}`}
              type="password"
              placeholder="Confirme sua senha..."
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
            <label>
              <input type="checkbox" value="aceito" />
              Eu aceito os termos e condições, Política de Privacidade e política de Cookies
            </label>
          </div>

          <div className={style.botao_cadastro}>
            {erro && <p className={style["mensagem-erro"]}>{erro}</p>}
            <button className={style.button} type="submit">Criar Conta</button>
          </div>
        </form>
      </div>

      <div className={style.fundo}>
        <div className={style.logo}>
          <img src={logo} alt="imagem overflow" />
        </div>
        <hr className={style.hr}/>
        <div className={style.login}>
          <button onClick={handleClickLogin}>Realizar Login</button>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;