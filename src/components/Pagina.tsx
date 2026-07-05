import React from 'react';

type PaginaProps = { children?: React.ReactNode };

export default function Pagina({ children }: PaginaProps) {
  return (
    <div className="pagina">
      <div className="pagina-conteudo">{children}</div>
    </div>
  );
}
