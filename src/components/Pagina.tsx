import React from 'react';

type PaginaProps = { children?: React.ReactNode };

const Pagina = React.forwardRef<HTMLDivElement, PaginaProps>(
  ({ children }, ref) => (
    <div className="pagina" ref={ref}>
      <div className="pagina-conteudo">{children}</div>
    </div>
  )
);

Pagina.displayName = 'Pagina';
export default Pagina;
