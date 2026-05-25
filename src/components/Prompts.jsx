import MarkdownSection from './MarkdownSection'
import content from '../../docs_galvic/08_prompts_galvic.md?raw'

function Prompts() {
  return (
    <MarkdownSection
      id="prompts"
      title="08. Prompts"
      content={content}
      eyebrow="Bitacora IA"
      badge="Prompts y trazabilidad"
      intro="Registra el uso de inteligencia artificial como parte del proceso de trabajo, dejando evidencia de apoyo y trazabilidad de las decisiones."
      highlights={['Uso de IA', 'Trazabilidad', 'Apoyo de redacción', 'Control de versiones']}
      calloutTitle="Valor del registro"
      calloutItems={[
        'Muestra transparencia en el proceso de elaboración.',
        'Sirve como evidencia de apoyo en la entrega.',
        'Da orden al uso de herramientas generativas.',
      ]}
    />
  )
}

export default Prompts
