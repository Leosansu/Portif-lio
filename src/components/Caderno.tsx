import React from 'react';

export default function Caderno({
  luzAcesa,
  children
}: {
  luzAcesa: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="caderno"
      style={{ filter: luzAcesa ? 'brightness(1)' : 'brightness(0.3)' }}
    >
      <img
        src="/espiralRecortado.jpg"
        alt="Espiral do caderno"
        className="espiral-img"
        style={{ filter: luzAcesa ? 'brightness(1)' : 'brightness(1.6)' }}
      />

      {/* área de conteúdo (texto da página) */}
      <div className="caderno-conteudo" style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </div>

      {/* marcadores laterais — mantêm posicionamento padrão do CSS */}
      <a href="#sobre" className="marcador-sobre">Sobre</a>
      <a href="#projetos" className="marcador-projetos">Projetos</a>
      <a href="#contatos" className="marcador-contatos">Contatos</a>
    </div>
  );
}