import content from '../../docs_galvic/02_marco_galvic.md?raw'

function Marco() {
  const marcoHighlights = [
    'Ley 21.459',
    'Ley 19.628',
    'Convenio de Budapest',
    'GDPR / CCPA / FTC',
  ]

  return (
    <section id="marco" className="report-section report-section--marco" aria-labelledby="marco-title">
      <header className="section-header section-header--marco">
        <div>
          <p className="section-kicker">Marco comparado</p>
          <h2 id="marco-title">02. Marco Normativo</h2>
        </div>
        <div className="section-pill">Chile + internacional</div>
      </header>

      <div className="marco-surface">
        <div className="marco-intro">
          <p className="marco-lead">
            Esta seccion ordena el caso Equifax como una lectura juridica de tres capas: tipificacion penal,
            resguardo de datos personales y cooperacion regulatoria internacional.
          </p>

          <div className="marco-highlights" aria-label="Normas destacadas">
            {marcoHighlights.map((item) => (
              <span key={item} className="marco-highlight-chip">
                {item}
              </span>
            ))}
          </div>
        </div>

        <aside className="marco-callout" aria-label="Lectura guiada del marco">
          <h3>Lectura guiada</h3>
          <ul>
            <li>El texto chileno se usa como base para evaluar deberes de resguardo y sancion.</li>
            <li>Los marcos externos sirven para comparar diligencia, accountability y respuesta al incidente.</li>
            <li>La combinacion de normas permite conectar hechos tecnicos con consecuencias juridicas.</li>
          </ul>
        </aside>
      </div>

      <pre className="markdown-content marco-content">{content}</pre>
    </section>
  )
}

export default Marco
