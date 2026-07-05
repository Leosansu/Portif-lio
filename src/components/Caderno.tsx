import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MarcadorSobre from './marcadores/MarcadorSobre';
import MarcadorProjetos from './marcadores/MarcadorProjetos';
import MarcadorContatos from './marcadores/MarcadorContatos';
import PaginaSobre from './paginas/PaginaSobre';
import PaginaProjetos from './paginas/PaginaProjetos';
import PaginaContatos from './paginas/PaginaContatos';

const paginas = [PaginaSobre, PaginaProjetos, PaginaContatos];

const variantesPagina = {
  entrada: (d: number) => ({ rotateY: d > 0 ? 90 : -90, opacity: 0 }),
  centro: { rotateY: 0, opacity: 1 },
  saida:  (d: number) => ({ rotateY: d > 0 ? -90 : 90, opacity: 0 }),
};

export default function Caderno({ luzAcesa }: { luzAcesa: boolean }) {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [direcao, setDirecao] = useState(1);

  const virarPara = (indice: number) => {
    if (indice === paginaAtual) return;
    setDirecao(indice > paginaAtual ? 1 : -1);
    setPaginaAtual(indice);
  };

  const PaginaAtual = paginas[paginaAtual];

  return (
    <div
      className="caderno-outer"
      style={{ filter: luzAcesa ? 'brightness(1)' : 'brightness(0.3)' }}
    >
      <MarcadorSobre    onClick={() => virarPara(0)} />
      <MarcadorProjetos onClick={() => virarPara(1)} />
      <MarcadorContatos onClick={() => virarPara(2)} />

      <div className="caderno-inner">
        <img
          src="/espiralRecortado.jpg"
          alt="Espiral do caderno"
          className="espiral-img"
          style={{ filter: luzAcesa ? 'brightness(1)' : 'brightness(1.6)' }}
        />

        <div className="caderno-perspectiva">
          <AnimatePresence mode="wait" custom={direcao}>
            <motion.div
              key={paginaAtual}
              custom={direcao}
              variants={variantesPagina}
              initial="entrada"
              animate="centro"
              exit="saida"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ perspective: 1200, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
            >
              <PaginaAtual />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
