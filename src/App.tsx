import { motion } from 'framer-motion'
import { useState } from "react";
import './App.css'

function App() {
  const [luzAcesa, setLuzAcesa] = useState(false);

  return (
    <>
      <div
        className="penumbra-overlay"
        style={{
          background: luzAcesa
            ? "rgba(0,0,0,0.35)" // luz acesa: ambiente ainda escuro fora do foco
            : "rgba(0,0,0,0.6)"  // luz apagada: ambiente bem escuro
        }}
      ></div>
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        {/* Luz direcional */}
        <div
          className="luz-direcional"
          style={{
            opacity: luzAcesa ? 1 : 0
            // Removido o transition para efeito instantâneo
          }}
        />
        <img src="/abajur.png" alt="Abajur de mesa" className="abajur-img" />
        <button
          className="botao-abajur-img"
          onClick={() => setLuzAcesa(!luzAcesa)}
          style={{ background: "transparent", border: "none", padding: 0 }}
        >
          <img
            src="/botao_abajur.png"
            alt="Botão do abajur"
            style={{
              filter: !luzAcesa
                ? "drop-shadow(0 0 8px #ffe066) drop-shadow(0 0 4px #fffacd)"
                : "none",
              transform: "rotate(-40deg)"
            }}
          />
        </button>

        <div className="caderno"
          style={{ filter: luzAcesa ? "brightness(1)" : "brightness(0.3)" }}>
          <img src="/espiralRecortado.jpg" alt="Espiral do caderno" className="espiral-img"
            style={{ filter: luzAcesa ? "brightness(1)" : "brightness(0.9)" }} /> {/* menos escuro */}
          <h1 style={{ filter: luzAcesa ? "brightness(1)" : "brightness(0.3)" }}>
            Olá! Meu nome é Leonam Santorum
          </h1>
          <p style={{ filter: luzAcesa ? "brightness(1)" : "brightness(0.3)" }}>
            Sou desenvolvedor Full Stack.
          </p>
        </div>
        <nav className="marcadores-horizontal">
          <a href="#sobre" className="marcador-horizontal">Sobre</a>
          <a href="#projetos" className="marcador-horizontal">Projetos</a>
          <a href="#contatos" className="marcador-horizontal">Contatos</a>
        </nav>
      </div>
    </>
  )
}

export default App
