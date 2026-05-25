# 01 - Resumen ejecutivo del caso Equifax (2017)

# Que paso

Entre mayo y julio de 2017, Equifax sufrio un incidente de ciberseguridad que permitio a atacantes acceder de forma no autorizada a sistemas internos y exfiltrar bases de datos con informacion personal de gran volumen. El vector tecnico mas citado fue la explotacion de una vulnerabilidad conocida en Apache Struts, para la cual ya existia parche. La falta de gestion oportuna de parches, controles de deteccion y segmentacion efectiva permitio persistencia del atacante y movimiento lateral.

# Alcance y actores

- Organizacion afectada: Equifax Inc. (empresa de reportes y puntaje crediticio).
- Sujetos de datos impactados: consumidores de EE. UU., Reino Unido y Canada; el numero reportado supera 140 millones de personas.
- Actores tecnicos internos relevantes: CISO, area de TI, area de cumplimiento, area legal y proveedores de infraestructura.
- Actores externos: atacantes, reguladores, tribunales, proveedores de monitoreo de credito, y potenciales terceros que pudieron recibir datos filtrados.

# Que informacion se comprometio

Segun reportes publicos del caso, entre los datos comprometidos se incluyen:

- Nombre completo.
- Direccion.
- Fecha de nacimiento.
- Numero de seguridad social (o identificadores equivalentes).
- En algunos casos, numeros de licencia de conducir.
- En un subconjunto, datos de tarjetas de credito.

En un analisis aplicado a Chile, muchos de estos antecedentes califican como datos personales segun Ley 19.628, y algunos pueden considerarse sensibles o de alto riesgo por su impacto potencial en fraude, suplantacion y afectacion patrimonial.

# Impactos principales

- Riesgo de fraude financiero y suplantacion de identidad a gran escala.
- Danio reputacional y perdida de confianza en la empresa.
- Costos de respuesta, litigio y compensacion.
- Intervencion regulatoria en multiples jurisdicciones.

# Enfoque legal del informe

Este informe aplica un enfoque de derecho comparado con prioridad en marco chileno, conforme a la rubrica:

1. Marco normativo nacional e internacional aplicable.
2. Tipificacion penal de conductas observables bajo Ley 21.459 (Chile).
3. Comparacion de marcos regulatorios por industria/jurisdiccion.
4. Identificacion de actores y responsabilidades legales (penal, civil, administrativa).
5. Tratamiento de datos personales segun Ley 19.628 y derechos ARCO.

# Hallazgo central

El caso revela una falla integral de gobierno de ciberseguridad: no fue solo una brecha tecnica, sino una deficiencia de cumplimiento continuo, gestion de riesgo y deber de diligencia organizacional. Desde una optica chilena, si hechos equivalentes ocurrieran en Chile, el analisis combina delitos informaticos (Ley 21.459), obligaciones sobre datos personales (Ley 19.628) y eventuales consecuencias civiles y administrativas para empresa y personas con deberes de cuidado.

# Recomendaciones ejecutivas anticipadas

- Programa formal de gestion de vulnerabilidades con SLA obligatorios.
- Segmentacion de red y minimo privilegio en servicios criticos.
- Monitoreo continuo (SIEM/EDR) y respuesta temprana.
- Trazabilidad de decisiones de riesgo en comites de seguridad.
- Integracion legal-tecnica para cumplimiento y notificacion.
- Pruebas periodicas (red team, tabletop, auditoria de terceros).

Este resumen se desarrolla en detalle en las secciones siguientes del informe.
