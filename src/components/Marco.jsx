import MarkdownSection from './MarkdownSection'
import content from '../../docs_galvic/02_marco_galvic.md?raw'

function Marco() {
  return (
    <MarkdownSection
      id="marco"
      title="02. Marco Normativo"
      content={content}
      eyebrow="Marco comparado"
      badge="Chile + internacional"
      intro="Esta seccion ordena el caso Equifax como una lectura juridica de tres capas: tipificacion penal, resguardo de datos personales y cooperacion regulatoria internacional."
      highlights={['Ley 21.459', 'Ley 19.628', 'Convenio de Budapest', 'GDPR / CCPA / FTC']}
      calloutTitle="Lectura guiada"
      calloutItems={[
        'El texto chileno se usa como base para evaluar deberes de resguardo y sancion.',
        'Los marcos externos sirven para comparar diligencia, accountability y respuesta al incidente.',
        'La combinacion de normas permite conectar hechos tecnicos con consecuencias juridicas.',
      ]}
    />
  )
}

export default Marco
