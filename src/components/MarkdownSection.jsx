import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function MarkdownSection({
  id,
  title,
  content,
  eyebrow,
  badge,
  intro,
  highlights = [],
  calloutTitle,
  calloutItems = [],
}) {
  return (
    <section id={id} className={`report-section report-section--${id}`} aria-labelledby={`${id}-title`}>
      <header className={`section-header section-header--${id}`}>
        <div>
          {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
          <h2 id={`${id}-title`}>{title}</h2>
        </div>
        {badge ? <div className="section-pill">{badge}</div> : null}
      </header>

      {(intro || highlights.length > 0 || calloutItems.length > 0) && (
        <div className="section-surface">
          <div className="section-intro">
            {intro ? <p className="section-lead">{intro}</p> : null}
            {highlights.length > 0 ? (
              <div className="section-highlights" aria-label={`Aspectos clave de ${title}`}>
                {highlights.map((item) => (
                  <span key={item} className="section-highlight-chip">
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          {calloutItems.length > 0 ? (
            <aside className="section-callout" aria-label={calloutTitle || title}>
              {calloutTitle ? <h3>{calloutTitle}</h3> : null}
              <ul>
                {calloutItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </aside>
          ) : null}
        </div>
      )}

      <div className="markdown-frame">
        <div className="markdown-prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
            h1: ({ node, ...props }) => <h3 className="markdown-heading markdown-heading--1" {...props} />,
            h2: ({ node, ...props }) => <h4 className="markdown-heading markdown-heading--2" {...props} />,
            h3: ({ node, ...props }) => <h5 className="markdown-heading markdown-heading--3" {...props} />,
            p: ({ node, ...props }) => <p className="markdown-paragraph" {...props} />,
            ul: ({ node, ...props }) => <ul className="markdown-list" {...props} />,
            ol: ({ node, ...props }) => <ol className="markdown-list markdown-list--ordered" {...props} />,
            li: ({ node, ...props }) => <li className="markdown-list-item" {...props} />,
            blockquote: ({ node, ...props }) => <blockquote className="markdown-quote" {...props} />,
            strong: ({ node, ...props }) => <strong className="markdown-strong" {...props} />,
            em: ({ node, ...props }) => <em className="markdown-emphasis" {...props} />,
            table: ({ node, ...props }) => <table className="markdown-table" {...props} />,
            thead: ({ node, ...props }) => <thead className="markdown-table-head" {...props} />,
            tbody: ({ node, ...props }) => <tbody className="markdown-table-body" {...props} />,
          }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  )
}

export default MarkdownSection
