import MarkdownSection from './MarkdownSection'
import content from '../../docs_galvic/05_responsabilidades_galvic.md?raw'

function Responsabilidades() {
  return (
    <MarkdownSection
      id="responsabilidades"
      title="05. Responsabilidades"
      content={content}
      eyebrow="Actores y deberes"
      badge="Responsabilidad legal"
      intro="Ordena las obligaciones que recaen sobre empresa, administradores, terceros y autoridades cuando un incidente compromete datos y sistemas."
      highlights={['Deber de cuidado', 'Gobernanza', 'Mitigacion', 'Rendicion de cuentas']}
      calloutTitle="Lectura operativa"
      calloutItems={[
        'Permite separar responsabilidades internas y externas.',
        'Ayuda a identificar omisiones de control y supervisión.',
        'Refuerza la idea de que prevenir vale mas que reaccionar tarde.',
      ]}
    />
  )
}

export default Responsabilidades
