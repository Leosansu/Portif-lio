import React from 'react';

//Arquivo Pagina é responsável por definir quais tipos de props receberá suas respctivas children

type PaginaProps = { children?: React.ReactNode };

export default function Pagina({ children }: PaginaProps) {
  return (
    <div className="pagina">
      <div className="pagina-conteudo">{children}</div>
    </div>
  );
}
