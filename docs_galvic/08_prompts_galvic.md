# 08 - Bitacora de uso de IA (prompts, correcciones y reflexion)

## Herramienta utilizada
- Herramienta: Asistente IA en VS Code (GitHub Copilot Chat).
- Uso: apoyo para estructurar investigacion, redaccion inicial y consistencia entre secciones Markdown y componentes React.

## Registro de prompts relevantes

### Prompt 1 - Definicion de caso
**Prompt usado:**
"Elige un caso real de ciberseguridad con abundante evidencia publica y que permita analisis penal informatico, datos personales y comparacion regulatoria para Chile."

**Seccion objetivo:** plan general del informe.

**Resultado aceptado:** seleccion de caso Equifax 2017 por alcance, disponibilidad de fuentes y pertinencia legal.

**Correccion realizada:** se restringio el alcance a hechos verificables y se evito incluir cifras contradictorias entre fuentes.

### Prompt 2 - Marco normativo
**Prompt usado:**
"Propone un marco normativo minimo de 4 normas para analizar legalmente Equifax desde Chile, justificando aplicabilidad concreta."

**Seccion objetivo:** `02_marco_galvic.md`.

**Resultado aceptado:** combinacion de Ley 21.459, Ley 19.628, Convenio de Budapest, GDPR y CCPA como comparados.

**Correccion realizada:** se reforzo que marco chileno es prioritario por exigencia de rubrica y que normas externas son de contraste.

### Prompt 3 - Tipificacion penal
**Prompt usado:**
"Mapea acciones tecnicas del ataque Equifax a tipos de la Ley 21.459 con articulos y explicacion juridica simple."

**Seccion objetivo:** `03_delitos_galvic.md`.

**Resultado aceptado:** tabla accion -> tipo penal -> articulo.

**Correccion realizada:** se agrego advertencia metodologica sobre necesidad de prueba pericial y cadena de custodia.

### Prompt 4 - Datos personales y ARCO
**Prompt usado:**
"Analiza el incidente desde Ley 19.628: clasifica datos comprometidos, riesgos y aplicacion de derechos ARCO en escenario chileno."

**Seccion objetivo:** `06_datos_galvic.md`.

**Resultado aceptado:** estructura de clasificacion de datos, riesgos y medidas de cumplimiento.

**Correccion realizada:** se acoto lenguaje para no sobregeneralizar la categoria de dato sensible.

### Prompt 5 - Conclusiones accionables
**Prompt usado:**
"Genera conclusiones y recomendaciones por horizonte temporal (corto, mediano, largo) para un informe academico de seguridad y legislacion."

**Seccion objetivo:** `07_conclusiones_galvic.md`.

**Resultado aceptado:** recomendaciones priorizadas con foco en gobernanza y diligencia.

**Correccion realizada:** se adapto tono academico y se alineo a rubrica (analisis legal primero, presentacion despues).

## Reflexion final sobre uso de IA
La IA fue util para acelerar la estructura del informe y mantener coherencia entre secciones tecnicas y legales. Sin embargo, la calidad final dependio de validar el contenido, corregir generalizaciones y ajustar el texto a la rubrica. La herramienta aporta velocidad; el criterio juridico y la responsabilidad academica siguen siendo del estudiante.