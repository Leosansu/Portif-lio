
import { useState } from 'react'
import './App.css'

import PgPrincipal from './pg/PgPrincipal'

function App() {
  const [luzAcesa, setLuzAcesa] = useState(false)

  return (
    <>
      {/* agora a página principal é delegada ao componente PgPrincipal */}
      <PgPrincipal luzAcesa={luzAcesa} setLuzAcesa={setLuzAcesa} />
    </>
  )
}

export default App
