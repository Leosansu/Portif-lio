import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MarcadorSobre from './marcadores/MarcadorSobre';
import MarcadorProjetos from './marcadores/MarcadorProjetos';
import MarcadorContatos from './marcadores/MarcadorContatos';

const paginas = [
  {
    id: 0,
    conteudo: (
      <>
        <h1>Olá! Meu nome é Leonam Santorum</h1>
        <p>Sou desenvolvedor Full Stack.</p>
        <p className="intro">
          Bem-vindo ao meu portifólio, nesse caderno há um pouco de mim.
        </p>
      </>
    ),
  },
  {
    id: 1,
    conteudo: (
      <>
        <h2>Projetos</h2>
        <p>Em breve...</p>
      </>
    ),
  },
  {
    id: 2,
    conteudo: (
      <>
        <h2>Contatos</h2>
        <p>Em breve...</p>
      </>
    ),
  },
];

/* Variantes da animação de virar página */
const variantesPagina = {
  entrada: (d: number) => ({
    rotateY: d > 0 ? 90 : -90,
    opacity: 0,
  }),
  centro: { rotateY: 0, opacity: 1 },
  saida:  (d: number) => ({
    rotateY: d > 0 ? -90 : 90,
    opacity: 0,
  }),
};

export default function Caderno({ luzAcesa }: { luzAcesa: boolean }) {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [direcao, setDirecao] = useState(1);

  const virarPara = (indice: number) => {
    if (indice === paginaAtual) return;
    setDirecao(indice > paginaAtual ? 1 : -1);
    setPaginaAtual(indice);
  };

  return (
    <div
      className="caderno-outer"
      style={{ filter: luzAcesa ? 'brightness(1)' : 'brightness(0.3)' }}
    >
      {/* Marcadores sempre visíveis */}
      <MarcadorSobre    onClick={() => virarPara(0)} />
      <MarcadorProjetos onClick={() => virarPara(1)} />
      <MarcadorContatos onClick={() => virarPara(2)} />

      <div className="caderno-inner">
        {/* Espiral sobreposta ao livro */}
        <img
          src="/espiralRecortado.jpg"
          alt="Espiral do caderno"
          className="espiral-img"
          style={{ filter: luzAcesa ? 'brightness(1)' : 'brightness(1.6)' }}
        />

        {/* Área de páginas com perspectiva 3D */}
        <div className="caderno-perspectiva">
          <AnimatePresence mode="wait" custom={direcao}>
            <motion.div
              key={paginaAtual}
              className="pagina"
              custom={direcao}
              variants={variantesPagina}
              initial="entrada"
              animate="centro"
              exit="saida"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ perspective: 1200, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
            >
              <div className="pagina-conteudo">
                {paginas[paginaAtual].conteudo}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
