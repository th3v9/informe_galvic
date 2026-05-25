# Informe U02 - Analisis legal de ciberseguridad

Proyecto para la Evaluacion Sumativa N.2 de TI3034.

## Caso trabajado

- Brecha de datos Equifax (2017)

## Estructura del proyecto

- `docs_galvic/`: contenido del informe en 8 archivos Markdown.
- `src/components/`: componentes React que renderizan cada archivo `.md`.
- `src/App.jsx`: estructura principal del sitio y navegacion por secciones.

## Archivos de contenido

1. `01_resumen_galvic.md`
2. `02_marco_galvic.md`
3. `03_delitos_galvic.md`
4. `04_comparacion_galvic.md`
5. `05_responsabilidades_galvic.md`
6. `06_datos_galvic.md`
7. `07_conclusiones_galvic.md`
8. `08_prompts_galvic.md`

## Ejecutar en local

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
npm run preview
```

## Despliegue en GitHub Pages

El proyecto ya incluye un workflow para publicar automaticamente en GitHub Pages al hacer push en `main`.

1. En GitHub, abre `Settings` > `Pages`.
2. En `Build and deployment`, selecciona `GitHub Actions`.
3. Sube estos cambios a la rama `main`.
4. Revisa la pestaña `Actions` hasta que termine el despliegue.

El sitio se publica desde la carpeta `dist` generada por `npm run build`.

## Criterios cubiertos en el contenido

- Marco normativo nacional e internacional.
- Tipificacion de delitos informaticos (Ley 21.459).
- Comparacion de marcos regulatorios.
- Responsabilidades legales de actores.
- Tratamiento de datos personales y derechos ARCO (Ley 19.628).
- Bitacora de uso de IA.

## Entrega

- URL de repositorio GitHub publico.
- URL de despliegue en Vercel.
- URL de despliegue en GitHub Pages.
