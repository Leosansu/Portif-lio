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
            ? "rgba(0,0,0,0.1)" // quase sem penumbra
            : "rgba(0,0,0,0.6)" // penumbra escura
        }}
      ></div>
      <header>
        <nav>
         <motion.a href="#home" className="btn-home" whileHover={{ scale: 1.1, backgroundColor: "#f7e9b0", color: "#a67c52" }} whileTap={{ scale: 0.95 }}>Home</motion.a>
         <motion.a href="#sobre" className="btn-sobre" whileHover={{ scale: 1.1, backgroundColor: "#f7e9b0", color: "#a67c52" }} whileTap={{ scale: 0.95 }}>Sobre</motion.a>
         <motion.a href="#projetos" className="btn-projetos" whileHover={{ scale: 1.1, backgroundColor: "#f7e9b0", color: "#a67c52" }} whileTap={{ scale: 0.95 }}>Projetos</motion.a>
         <motion.a href="#contatos" className="btn-contatos" whileHover={{ scale: 1.1, backgroundColor: "#f7e9b0", color: "#a67c52" }} whileTap={{ scale: 0.95 }}>Contatos</motion.a>         
        </nav>
      </header>
      <div>
        <img src="/abajur.png" alt="Abajur de mesa" className="abajur-img"
          style={{ filter: luzAcesa ? "brightness(1)" : "brightness(0.3)" }} />
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
      </div>
      <div>
        <button
          className="botao-abajur-img"
          onClick={() => setLuzAcesa(!luzAcesa)}
          style={{
            background: "transparent",
            border: "none",
            padding: 0
          }}
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
      </div>
    </>
  )
}

export default App
