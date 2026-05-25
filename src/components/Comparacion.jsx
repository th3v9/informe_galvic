import MarkdownSection from './MarkdownSection'
import content from '../../docs_galvic/04_comparacion_galvic.md?raw'

function Comparacion() {
  return (
    <MarkdownSection
      id="comparacion"
      title="04. Comparacion de Marcos"
      content={content}
      eyebrow="Lectura comparada"
      badge="Chile, EE. UU. y UE"
      intro="Cruza los principales marcos para mostrar como cambian los estandares de control, diligencia y proteccion segun la jurisdiccion."
      highlights={['Chile', 'Unión Europea', 'Estados Unidos', 'Estándares tecnicos']}
      calloutTitle="Como leer esta seccion"
      calloutItems={[
        'No busca elegir una sola norma, sino mostrar la combinacion util para el caso.',
        'Sirve para comparar exigencias de proteccion y respuesta.',
        'Ordena el analisis de manera visual y argumentativa.',
      ]}
    />
  )
}

export default Comparacion
