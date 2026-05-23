import MarkdownSection from './MarkdownSection'
import content from '../../docs_galvic/04_comparacion_galvic.md?raw'

function Comparacion() {
  return (
    <MarkdownSection
      id="comparacion"
      title="04. Comparacion de Marcos"
      content={content}
    />
  )
}

export default Comparacion
