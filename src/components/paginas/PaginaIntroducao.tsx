import Pagina from '../Pagina';

export default function PaginaIntroducao() {
  return (
    <Pagina>
      <h1>Olá, sou Leonam Santorum</h1>
      <p>Desenvolvedor Full Stack</p>
      <p className="intro">Este caderno é meu portfólio. Aqui você encontra:</p>
      <ul>
        <li><strong>Sobre</strong> — quem sou e minhas tecnologias</li>
        <li><strong>Projetos</strong> — o que já construí</li>
        <li><strong>Contatos</strong> — onde me encontrar</li>
      </ul>
    </Pagina>
  );
}
