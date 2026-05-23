import MarkdownSection from './MarkdownSection'
import content from '../../docs_galvic/01_resumen_galvic.md?raw'

function Resumen() {
  return <MarkdownSection id="resumen" title="01. Resumen" content={content} />
}

export default Resumen
