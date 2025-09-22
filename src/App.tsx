import { motion } from 'framer-motion'
import { useState } from "react";
import './App.css'
import Abajur from './components/Abajur'
import Caderno from './components/Caderno'
import Mesa from './components/Mesa'

function App() {
  const [luzAcesa, setLuzAcesa] = useState(false);

  return (
    <>
      <Mesa />
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

        <Abajur luzAcesa={luzAcesa} setLuzAcesa={setLuzAcesa} />

        <Caderno luzAcesa={luzAcesa}>
          <h1 style={{ filter: luzAcesa ? "brightness(1)" : "brightness(1.6)" }}>
            Olá! Meu nome é Leonam Santorum
          </h1>
          <p style={{ filter: luzAcesa ? "brightness(1)" : "brightness(0.3)" }}>
            Sou desenvolvedor Full Stack.
          </p>
          <p className="intro" style={{ filter: luzAcesa ? "brightness(1)" : "brightness(0.3)" }}>
            Bem-vindo ao meu portifólio, nesse caderno há <br />um pouco de mim.
          </p>
        </Caderno>

        {/* removido: nav .marcadores-horizontal duplicado */}
      </div>
    </>
  )
}

export default App
