# Flujo de commits horarios

Este flujo sirve para ejecutar tres commits separados con una hora de diferencia en Windows.

## Requisitos
- Tener cambios pendientes en el repositorio.
- Tener Git configurado.
- Tener permisos para crear tareas programadas.

## Opcion 1: crear tareas programadas
Ejecuta desde PowerShell:

```powershell
Set-Location C:\informe_galvic
powershell -ExecutionPolicy Bypass -File .\scripts\schedule-three-commits.ps1 -Messages @(
  'docs: ajuste final 1',
  'docs: ajuste final 2',
  'docs: ajuste final 3'
) -Push
```

Eso crea tres tareas:
- `InformeGalvic-Commit-1`
- `InformeGalvic-Commit-2`
- `InformeGalvic-Commit-3`

Cada una se programa con una diferencia de 60 minutos.

## Opcion 2: ejecutar un commit manualmente
```powershell
Set-Location C:\informe_galvic
powershell -ExecutionPolicy Bypass -File .\scripts\commit-one-hour.ps1 -Message 'docs: ajuste final 1' -Push
```

## Importante
Si no hay cambios pendientes, el script no crea commit y termina sin error.

## Como borrar tareas si ya no las necesitas
```powershell
Unregister-ScheduledTask -TaskName 'InformeGalvic-Commit-1' -Confirm:$false
Unregister-ScheduledTask -TaskName 'InformeGalvic-Commit-2' -Confirm:$false
Unregister-ScheduledTask -TaskName 'InformeGalvic-Commit-3' -Confirm:$false
```
