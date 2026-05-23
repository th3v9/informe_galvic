import Resumen from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusiones from './components/Conclusiones'
import Prompts from './components/Prompts'
import './App.css'

function App() {
  return (
    <div className="layout">
      <header className="hero-panel">
        <p className="eyebrow">TI3034 - Fundamentos de Seguridad de la Informacion</p>
        <h1>Informe Legal de Ciberseguridad</h1>
        <p className="subtitle">
          Caso elegido: Brecha de datos Equifax (2017) | Sufijo del proyecto:
          <strong> galvic</strong>
        </p>
      </header>

      <nav className="toc" aria-label="Tabla de contenidos">
        <a href="#resumen">01 Resumen</a>
        <a href="#marco">02 Marco</a>
        <a href="#delitos">03 Delitos</a>
        <a href="#comparacion">04 Comparacion</a>
        <a href="#responsabilidades">05 Responsabilidades</a>
        <a href="#datos">06 Datos</a>
        <a href="#conclusiones">07 Conclusiones</a>
        <a href="#prompts">08 Prompts</a>
      </nav>

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
    </div>
  )
}

export default App
