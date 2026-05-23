function MarkdownSection({ id, title, content }) {
  return (
    <section id={id} className="report-section" aria-labelledby={`${id}-title`}>
      <header className="section-header">
        <h2 id={`${id}-title`}>{title}</h2>
      </header>
      <pre className="markdown-content">{content}</pre>
    </section>
  )
}

export default MarkdownSection
