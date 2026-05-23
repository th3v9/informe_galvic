import MarkdownSection from './MarkdownSection'
import content from '../../docs_galvic/05_responsabilidades_galvic.md?raw'

function Responsabilidades() {
  return (
    <MarkdownSection
      id="responsabilidades"
      title="05. Responsabilidades"
      content={content}
    />
  )
}

export default Responsabilidades
