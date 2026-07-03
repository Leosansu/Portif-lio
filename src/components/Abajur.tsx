import React from 'react';
import BotaoAbajur from './BotaoAbajur';

export default function Abajur({
  luzAcesa,
  setLuzAcesa
}: {
  luzAcesa: boolean;
  setLuzAcesa: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="abajur-wrapper">
      <img
        src="/abajur.png"
        alt="Abajur de mesa"
        className="abajur-img"
        style={{ filter: luzAcesa ? 'brightness(1)' : 'brightness(0.5)' }}
      />
      <BotaoAbajur luzAcesa={luzAcesa} onClick={() => setLuzAcesa(!luzAcesa)} />
    </div>
  );
}