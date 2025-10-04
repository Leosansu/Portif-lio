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
    <>
      <img src="/abajur.png" alt="Abajur de mesa" className="abajur-img" />
      <BotaoAbajur luzAcesa={luzAcesa} onClick={() => setLuzAcesa(!luzAcesa)} />
    </>
  );
}