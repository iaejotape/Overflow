import Layout from '../componentes/layout';

export default function TestePagina() {
  return (
    // O que tiver aqui dentro já tem uma div pai chamada ".principal"
    <Layout> 
      <h1>Bem-vindo à Plataforma Overflow!</h1>
      <p>Isso aqui vai dentro da div .principal</p>
    </Layout>
  );
}
