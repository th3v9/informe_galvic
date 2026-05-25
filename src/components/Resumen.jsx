import MarkdownSection from './MarkdownSection'
import content from '../../docs_galvic/01_resumen_galvic.md?raw'

function Resumen() {
  return (
    <MarkdownSection
      id="resumen"
      title="01. Resumen"
      content={content}
      eyebrow="Lectura ejecutiva"
      badge="Contexto del caso"
      intro="Presenta la brecha de forma sintetica, para entender rapidamente el alcance del incidente y la dimension juridica del informe."
      highlights={['Brecha de seguridad', 'Exfiltracion masiva', 'Impacto regulatorio']}
      calloutTitle="Lo esencial"
      calloutItems={[
        'Ubica el caso antes de entrar en el analisis juridico.',
        'Resume los actores, el dano y la respuesta general.',
        'Sirve como puerta de entrada al resto del informe.',
      ]}
    />
  )
}

export default Resumen
