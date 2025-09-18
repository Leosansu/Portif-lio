import { motion } from 'framer-motion'
import './App.css'

function App() {
  return (
    <>
      <header>
        <nav>
         <motion.a href="#home" className="btn-home" whileHover={{ scale: 1.1, backgroundColor: "#f7e9b0", color: "#a67c52" }} whileTap={{ scale: 0.95 }}>Home</motion.a>
         <motion.a href="#sobre" className="btn-sobre" whileHover={{ scale: 1.1, backgroundColor: "#f7e9b0", color: "#a67c52" }} whileTap={{ scale: 0.95 }}>Sobre</motion.a>
         <motion.a href="#projetos" className="btn-projetos" whileHover={{ scale: 1.1, backgroundColor: "#f7e9b0", color: "#a67c52" }} whileTap={{ scale: 0.95 }}>Projetos</motion.a>
         <motion.a href="#contatos" className="btn-contatos" whileHover={{ scale: 1.1, backgroundColor: "#f7e9b0", color: "#a67c52" }} whileTap={{ scale: 0.95 }}>Contatos</motion.a>         
        </nav>
      </header>
      <div>
        <img src="/abajur.png" alt="Abajur de mesa" className="abajur-img" />
        <div className="caderno">
          <img src="/espiralRecortado.jpg" alt="Espiral do caderno" className="espiral-img" />
          <h1>Olá! Meu nome é Leonam Santorum</h1>
          <p>Sou desenvolvedor Full Stack.</p>
        </div>
      </div>
    </>
  )
}

export default App
