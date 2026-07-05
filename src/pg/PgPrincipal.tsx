import React from 'react'
import Abajur from '../components/Abajur'
import Caderno from '../components/Caderno'
import Mesa from '../components/Mesa'

/*Objetivo : esse app deve conter uma mesa, um abajur e um caderno, contendo incialmente 3 páginas.
-A pg principal dev conter uma introdução do que se trata o caderno.Compõe a cena (mesa + abajur + caderno)

*/
export default function PgPrincipal({
  luzAcesa,
  setLuzAcesa
}: {
  luzAcesa: boolean
  setLuzAcesa: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <>
      <Mesa />

      <div
        className="penumbra-overlay"
        style={{
          background: luzAcesa ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.6)'
        }}
      />

      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <div className="luz-direcional" style={{ opacity: luzAcesa ? 1 : 0 }} />

        <Abajur luzAcesa={luzAcesa} setLuzAcesa={setLuzAcesa} />

        <Caderno luzAcesa={luzAcesa} />
      </div>
    </>
  )
}
