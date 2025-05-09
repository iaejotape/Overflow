import { useState } from "react";
import logo from "../assets/logo_page.svg";
import "../styles/Cadastro.css"
import "../componentes/nuvem.jsx";
import NuvensAnimadas from "../componentes/nuvem.jsx";
function Cadastro() {
    const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!nome || !apelido || !email || !dataNascimento || !sexo || !tipoUsuario || !senha || !confirmarSenha) {
      setErro("Todos os campos são obrigatórios!");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    setErro("");
    alert("Conta criada com sucesso!");
    // Aqui você pode enviar os dados para um backend
  }

  return (
    <div className='main'>
        <NuvensAnimadas/>
    <div className="container">
      <form onSubmit={handleSubmit}>

        <h1 id="titulo">Criar nova conta</h1>
          <div id='nome_apelido'>
            <div id="nome">
              <h3>Nome:</h3>
              <input type="text" placeholder='Digite seu nome...' value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div id="apelido">
              <h3>Apelido:</h3>
              <input type="text" placeholder='Digite seu apelido...' value={apelido} onChange={(e) => setApelido(e.target.value)} />
            </div>
          </div>

        
          <div id='email'>
            <h3>Email:</h3>
            <input type="email" placeholder='Digite seu e-mail...' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>


        <div id='data_sexo'>
            <div id='data'>
              <h3>Data de Nascimento:</h3>
              <input type="date" id="data_input" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
            </div>
            <div id='sexo'>
              <h3>Sexo:</h3>
                <input type="radio" name='sexo' value='Masculino' id="sexo_input" onChange={(e) => setSexo(e.target.value)} />Masculino
                <input type="radio" name='sexo' value='Feminino' id="sexo_input" onChange={(e) => setSexo(e.target.value)} />Feminino
                <input type="radio" name='sexo' value='Outro' id="sexo_input" onChange={(e) => setSexo(e.target.value)}/>Outro
            </div>
          </div>


          <div id="tipo_usuario">
            <h3>Tipo de Usuário:</h3>
            <label>
              <input type="radio" name="tipo_user" value="Estudante" id="tipo_estudante" onChange={(e) => setTipoUsuario(e.target.value)} />Estudante
            </label>
            <label>
              <input type="radio" name="tipo_user" value="Professor" id="tipo_professor" onChange={(e) => setTipoUsuario(e.target.value)} />Professor
            </label>
          </div>


        <div id='senha'>
            <h3>Senha:</h3>
            <input type="password" placeholder='Digite sua senha...' value={senha} onChange={(e) => setSenha(e.target.value)} />
            <h3>Confirmação de senha:</h3>
            <input type="password" placeholder='Confirme sua senha...' value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
            <label>
              <input type="checkbox" value='aceito' />Eu aceito os termos e condições, Política de Privacidade e política de Cookies
            </label>
          </div>

        <div id='botao'>
          {erro && <p className="mensagem-erro">{erro}</p>}
          <button>Criar Conta</button>
        </div>
      </form>
      </div>
      <div className="fundo">
        <div id="logo">
            <img src={logo} alt="imagem overflow" />
        </div>
        <hr/>
        <div id="login">
            <button>Realizar Login</button>
        </div>
      </div>
    </div>
  )
}

export default Cadastro