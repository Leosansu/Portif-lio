import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MarcadorSobre from './marcadores/MarcadorSobre';
import MarcadorProjetos from './marcadores/MarcadorProjetos';
import MarcadorContatos from './marcadores/MarcadorContatos';
import PaginaIntroducao from './paginas/PaginaIntroducao';
import PaginaSobre from './paginas/PaginaSobre';
import PaginaProjetos from './paginas/PaginaProjetos';
import PaginaContatos from './paginas/PaginaContatos';

const paginas = [PaginaIntroducao, PaginaSobre, PaginaProjetos, PaginaContatos];

const variantesPagina = {
  entrada: { rotateY: 180 }, // folha começa deitada à direita (mostrando o verso)
  centro:  { rotateY: 0 },   // atravessa a espiral e assenta à esquerda (conteúdo)
};

export default function Caderno({ luzAcesa }: { luzAcesa: boolean }) {
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [paginaAnterior, setPaginaAnterior] = useState<number | null>(null);

  const virarPara = (indice: number) => {
    if (indice === paginaAtual) return;
    setPaginaAnterior(paginaAtual); // mantém o conteúdo antigo visível durante a virada
    setPaginaAtual(indice);
  };

  const PaginaAtual = paginas[paginaAtual];
  const PaginaAnterior = paginaAnterior !== null ? paginas[paginaAnterior] : null;

  return (
    <div
      className="caderno-outer"
      style={{ filter: luzAcesa ? 'brightness(1)' : 'brightness(0.3)' }}
    >
      <MarcadorSobre    onClick={() => virarPara(1)} />
      <MarcadorProjetos onClick={() => virarPara(2)} />
      <MarcadorContatos onClick={() => virarPara(3)} />

      <div className="caderno-inner">
        <img
          src="/espiralRecortado.jpg"
          alt="Espiral do caderno"
          className="espiral-img"
          style={{ filter: luzAcesa ? 'brightness(1)' : 'brightness(1.6)' }}
        />

        <div className="caderno-perspectiva">
          {/* Conteúdo antigo permanece parado à esquerda até a nova folha assentar */}
          {PaginaAnterior && (
            <div className="pagina-estatica">
              <PaginaAnterior />
            </div>
          )}

          <AnimatePresence>
            <motion.div
              key={paginaAtual}
              variants={variantesPagina}
              initial={paginaAnterior !== null ? 'entrada' : false}
              animate="centro"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              onAnimationComplete={() => setPaginaAnterior(null)}
              style={{
                width: '50%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                transformOrigin: 'right center',
                transformStyle: 'preserve-3d',
                zIndex: 2,
              }}
            >
              <div className="pagina-face pagina-face--frente">
                <PaginaAtual />
              </div>
              <div className="pagina-face pagina-face--verso" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
