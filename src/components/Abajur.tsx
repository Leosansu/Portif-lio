import React from 'react';

export default function Abajur({
  luzAcesa,
  setLuzAcesa
}: {
  luzAcesa: boolean;
  setLuzAcesa: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <img src="/abajur.png" alt="Abajur de mesa" className="abajur-img" />
      <button
        className="botao-abajur-img"
        onClick={() => setLuzAcesa(!luzAcesa)}
        style={{ background: 'transparent', border: 'none', padding: 0 }}
        aria-label={luzAcesa ? 'Desligar luz' : 'Ligar luz'}
      >
        <img
          src="/botao_abajur.png"
          alt="Botão do abajur"
          style={{
            filter: !luzAcesa
              ? 'drop-shadow(0 0 8px #ffe066) drop-shadow(0 0 4px #fffacd)'
              : 'none',
            transform: 'rotate(-40deg)'
          }}
        />
      </button>
    </>
  );
}