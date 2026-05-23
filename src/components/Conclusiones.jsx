import MarkdownSection from './MarkdownSection'
import content from '../../docs_galvic/07_conclusiones_galvic.md?raw'

function Conclusiones() {
  return (
    <MarkdownSection
      id="conclusiones"
      title="07. Conclusiones"
      content={content}
    />
  )
}

export default Conclusiones
