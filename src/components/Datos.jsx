import MarkdownSection from './MarkdownSection'
import content from '../../docs_galvic/06_datos_galvic.md?raw'

function Datos() {
  return (
    <MarkdownSection
      id="datos"
      title="06. Datos Personales"
      content={content}
      eyebrow="Proteccion y riesgo"
      badge="Datos sensibles"
      intro="Describe que informacion se vio comprometida, por que importa juridicamente y que efectos concretos puede tener sobre las personas afectadas."
      highlights={['Datos de identidad', 'Riesgo de fraude', 'Derechos ARCO', 'Impacto patrimonial']}
      calloutTitle="Enfoque del apartado"
      calloutItems={[
        'Conecta la naturaleza de los datos con la necesidad de resguardo.',
        'Explica el daño potencial en privacidad y patrimonio.',
        'Aterriza la discusión a la realidad chilena.',
      ]}
    />
  )
}

export default Datos
