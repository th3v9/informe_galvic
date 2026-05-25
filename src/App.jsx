import { useEffect, useState } from 'react'
import Resumen from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusiones from './components/Conclusiones'
import Prompts from './components/Prompts'
import './App.css'

const summaryStats = [
  { label: 'Secciones', value: '8' },
  { label: 'Caso', value: 'Equifax 2017' },
  { label: 'Enfoque', value: 'Marco legal' },
]

const sectionLinks = [
  { id: 'resumen', label: '01 Resumen' },
  { id: 'marco', label: '02 Marco' },
  { id: 'delitos', label: '03 Delitos' },
  { id: 'comparacion', label: '04 Comparacion' },
  { id: 'responsabilidades', label: '05 Responsabilidades' },
  { id: 'datos', label: '06 Datos' },
  { id: 'conclusiones', label: '07 Conclusiones' },
  { id: 'prompts', label: '08 Prompts' },
]

const editorialNotes = [
  {
    title: 'Lectura guiada',
    text: 'La navegación superior permite saltar a cada bloque y seguir el informe sin perder contexto.',
  },
  {
    title: 'Enfoque comparado',
    text: 'Cada sección mezcla la mirada chilena con referencias internacionales para reforzar el análisis.',
  },
  {
    title: 'Documento listo',
    text: 'El contenido se presenta como informe formal, con estructura clara y jerarquía visual consistente.',
  },
]

const accentBars = ['Normativa', 'Responsabilidad', 'Datos', 'Delitos']

const contactLinks = [
  {
    label: 'Perfil de GitHub',
    href: 'https://github.com/th3v9',
    description: 'Contacto y repositorios del autor.',
  },
  {
    label: 'Repositorio del proyecto',
    href: 'https://github.com/th3v9/informe_galvic',
    description: 'Codigo fuente y workflow de despliegue.',
  },
  {
    label: 'Sitio publicado',
    href: 'https://th3v9.github.io/informe_galvic/',
    description: 'Version en linea del informe.',
  },
]

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'auto'
  }

  const savedTheme = window.localStorage.getItem('galvic-theme-mode')
  if (savedTheme === 'dark' || savedTheme === 'light' || savedTheme === 'auto') {
    return savedTheme
  }

  return 'auto'
}

function App() {
  const [themeMode, setThemeMode] = useState(getInitialTheme)
  const [prefersDark, setPrefersDark] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event) => setPrefersDark(event.matches)

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }

    mediaQuery.addListener(handleChange)
    return () => mediaQuery.removeListener(handleChange)
  }, [])

  const effectiveTheme = themeMode === 'auto' ? (prefersDark ? 'dark' : 'light') : themeMode

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = effectiveTheme
    root.style.colorScheme = effectiveTheme
    window.localStorage.setItem('galvic-theme-mode', themeMode)
  }, [effectiveTheme, themeMode])

  const themeOptions = [
    { value: 'light', label: 'Claro' },
    { value: 'dark', label: 'Oscuro' },
    { value: 'auto', label: 'Auto' },
  ]

  const setTheme = (nextTheme) => {
    setThemeMode(nextTheme)
  }

  return (
    <div className="layout">
      <header className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">TI3034 - Fundamentos de Seguridad de la Informacion</p>
          <h1>Informe Legal de Ciberseguridad</h1>
          <p className="subtitle">
            Analisis de la brecha de datos Equifax (2017) con foco en normativa, delitos,
            responsabilidad y tratamiento de datos.
          </p>
          <p className="project-tag">
            Proyecto {" "}
            <strong>galvic</strong>
          </p>

          <div className="hero-actions">
            <a className="hero-action-button" href="https://github.com/th3v9" target="_blank" rel="noreferrer">
              Ver mi GitHub
            </a>
            <div className="theme-switcher" role="group" aria-label="Selector de modo oscuro">
              {themeOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`theme-switch-button${themeMode === option.value ? ' is-active' : ''}`}
                  onClick={() => setTheme(option.value)}
                  aria-pressed={themeMode === option.value}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hero-badges" aria-label="Aspectos destacados">
            {accentBars.map((item) => (
              <span key={item} className="hero-badge">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-aside">
          <div className="hero-stats" aria-label="Resumen del informe">
            {summaryStats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </article>
            ))}
          </div>

          <div className="hero-notes" aria-label="Notas editoriales">
            {editorialNotes.map((note) => (
              <article key={note.title} className="note-card">
                <span className="note-kicker">{note.title}</span>
                <p>{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </header>

      <nav className="toc" aria-label="Tabla de contenidos">
        {sectionLinks.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            {section.label}
          </a>
        ))}
      </nav>

      <section className="intro-strip" aria-label="Resumen editorial">
        {editorialNotes.map((note, index) => (
          <article key={note.title} className="intro-card">
            <span className="intro-number">0{index + 1}</span>
            <div>
              <h2>{note.title}</h2>
              <p>{note.text}</p>
            </div>
          </article>
        ))}
      </section>

      <main className="content-grid">
        <Resumen />
        <Marco />
        <Delitos />
        <Comparacion />
        <Responsabilidades />
        <Datos />
        <Conclusiones />
        <Prompts />
      </main>

      <footer className="footer-panel" aria-label="Enlaces de contacto de GitHub">
        <div className="footer-copy">
          <p className="footer-kicker">Contacto y referencia</p>
          <h2>GitHub del proyecto</h2>
          <p>
            Repositorio, perfil y publicacion oficial del informe.
          </p>
        </div>

        <div className="footer-links">
          {contactLinks.map((link) => (
            <a key={link.href} className="footer-link-card" href={link.href} target="_blank" rel="noreferrer">
              <span className="footer-link-label">{link.label}</span>
              <span className="footer-link-desc">{link.description}</span>
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default App
