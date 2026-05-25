import MarkdownSection from './MarkdownSection'
import content from '../../docs_galvic/03_delitos_galvic.md?raw'

function Delitos() {
  return (
    <MarkdownSection
      id="delitos"
      title="03. Delitos Informaticos"
      content={content}
      eyebrow="Tipificacion penal"
      badge="Conductas y tipos"
      intro="Descompone los hechos tecnicos del incidente en conductas que pueden traducirse a delitos informaticos y escenarios de responsabilidad penal."
      highlights={['Acceso ilegitimo', 'Exfiltracion de datos', 'Alteracion de sistemas']}
      calloutTitle="Puntos de atencion"
      calloutItems={[
        'Relaciona cada conducta con un tipo penal posible.',
        'Distingue entre acceso, manipulacion y divulgacion.',
        'Permite conectar tecnica y derecho sin perder trazabilidad.',
      ]}
    />
  )
}

export default Delitos
