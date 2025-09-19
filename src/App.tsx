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
            ? "rgba(0,0,0,0.35)"
            : "rgba(0,0,0,0.6)"
        }}
      ></div>

      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
        <div className="luz-direcional" style={{ opacity: luzAcesa ? 1 : 0 }} />

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

        <div className="caderno" style={{ filter: luzAcesa ? "brightness(1)" : "brightness(0.3)" }}>
          <img src="/espiralRecortado.jpg" 
               alt="Espiral do caderno" 
               className="espiral-img"
               style={{ filter: luzAcesa ? "brightness(1)" : "brightness(1.6)" }} />
          <h1 style={{ filter: luzAcesa ? "brightness(1)" : "brightness(1.6)" }}>
            Olá! Meu nome é Leonam Santorum
          </h1>
          <p style={{ filter: luzAcesa ? "brightness(1)" : "brightness(0.3)" }}>
            Sou desenvolvedor Full Stack.
          </p>

          <p className="intro" style={{ filter: luzAcesa ? "brightness(1)" : "brightness(0.3)" }}>
            Bem-vindo ao meu portifólio, nesse caderno há <br />um pouco de mim.
          </p>
          
          {/* Marcadores (cada um posicionado individualmente) */}
          <a href="#sobre" className="marcador-sobre">Sobre</a>
          <a href="#projetos" className="marcador-projetos">Projetos</a>
          <a href="#contatos" className="marcador-contatos">Contatos</a>
        </div>

        {/* removido: nav .marcadores-horizontal duplicado */}
      </div>
    </>
  )
}

export default App
