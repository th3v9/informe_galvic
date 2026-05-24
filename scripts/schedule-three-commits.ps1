param(
  [Parameter(Mandatory = $true)]
  [string[]]$Messages,

  [int]$InitialDelayMinutes = 0,
  [int]$IntervalMinutes = 60,
  [switch]$Push
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

if ($Messages.Count -ne 3) {
  throw 'Debes pasar exactamente 3 mensajes de commit.'
}

$scriptPath = Join-Path $PSScriptRoot 'commit-one-hour.ps1'
$now = Get-Date

for ($index = 0; $index -lt 3; $index++) {
  $taskName = "InformeGalvic-Commit-$($index + 1)"
  $runAt = $now.AddMinutes($InitialDelayMinutes + ($IntervalMinutes * $index))
  $message = $Messages[$index].Replace('"', '\"')

  $argument = @(
    '-NoProfile',
    '-ExecutionPolicy', 'Bypass',
    '-File', ('"{0}"' -f $scriptPath),
    '-Message', ('"{0}"' -f $message),
    '-Push'
  )

  if (-not $Push) {
    $argument = $argument | Where-Object { $_ -ne '-Push' }
  }

  $action = New-ScheduledTaskAction -Execute 'powershell.exe' -Argument ($argument -join ' ')
  $trigger = New-ScheduledTaskTrigger -Once -At $runAt
  Register-ScheduledTask -TaskName $taskName -Action $action -Trigger $trigger -Description 'Commit horario para informe galvic' -Force | Out-Null
  Write-Host "Tarea creada: $taskName -> $runAt"
}
