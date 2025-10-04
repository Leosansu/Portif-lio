import React from 'react';

type BotaoAbajurProps = {
  luzAcesa: boolean;
  onClick: () => void;
};

export default function BotaoAbajur({ luzAcesa, onClick }: BotaoAbajurProps) {
  return (
    <button
      className="botao-abajur-img"
      onClick={onClick}
      style={{ background: 'transparent', border: 'none', padding: 0 }}
      aria-label={luzAcesa ? 'Desligar luz' : 'Ligar luz'}
      aria-pressed={luzAcesa}
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
  );
}