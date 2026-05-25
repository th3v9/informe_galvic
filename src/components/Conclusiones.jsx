import MarkdownSection from './MarkdownSection'
import content from '../../docs_galvic/07_conclusiones_galvic.md?raw'

function Conclusiones() {
  return (
    <MarkdownSection
      id="conclusiones"
      title="07. Conclusiones"
      content={content}
      eyebrow="Síntesis final"
      badge="Cierre analítico"
      intro="Convierte el analisis anterior en una lectura final clara: que enseña el caso, que obligaciones deja y por que importa en seguridad de la informacion."
      highlights={['Lecciones', 'Prevención', 'Responsabilidad', 'Mejora continua']}
      calloutTitle="Conclusión práctica"
      calloutItems={[
        'Resume la tesis del informe sin repetirlo todo.',
        'Conecta la dimensión técnica con la jurídica.',
        'Deja una idea final util para evaluación o exposición.',
      ]}
    />
  )
}

export default Conclusiones
