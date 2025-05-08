import logo from "../assets/logo_page.svg";
import "../styles/Cadastro.css"
function Cadastro() {
  return (
    <div className='container'>
    <div className="cadastro">
      <form>

        <h1>Criar nova conta</h1>
        <div id='nome_apelido'>
            <div id="nome">
                <h3>Nome:</h3>
                <input type="text" placeholder='Digite seu nome...'/>
            </div>
            <div id="apelido">
                <h3>Apelido:</h3>
                <input type="text" placeholder='Digite seu apelido...' />
            </div>
        </div>
        <div id='email'>
            <h3>Email:</h3>
            <input type="email" placeholder='Digite seu e-mail...' />
        </div>
        <div id='data_sexo'>
            <div id='data'>
                <h3>Data de Nascimento:</h3>
                <input type="date" value= "data" id="data_input" />
            </div>
            <div id='sexo'>
                <h3>Sexo:</h3>
                <input type="radio" name='sexo' value='Masculino' id="sexo_input"/>Masculino
                <input type="radio" name='sexo' value='Feminino'id="sexo_input"/>Feminino
                <input type="radio" name='sexo' value='Outro'id="sexo_input"/>Outro
            </div>
        </div>
        <div id="tipo_usuario">
            <h3>Tipo de Usuario:</h3>
            <input type="radio" name="tipo_user" value="Estudante" id="tipo_estudante"/>Estudante
            <input type="radio" name="tipo_user" value="Professor" id="tipo_professor"/>Professor
        </div>
        <div id='senha'>
            <h3>Senha:</h3>
            <input type="password" placeholder='Digite sua senha...' />
            <h3>Confirmação de senha:</h3>
            <input type="password" placeholder='Confirme sua senha...' />
            <input type="checkbox" value='aceito'/>Eu aceito os termos e condições, Política de Privacidade e política de Cookies
        </div>
        <div id='botao'>
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
