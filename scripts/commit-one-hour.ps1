param(
  [Parameter(Mandatory = $true)]
  [string]$Message,

  [string[]]$Paths = @('.'),

  [switch]$Push
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

$changes = git status --short
if (-not $changes) {
  Write-Host 'No hay cambios para commitear.'
  exit 0
}

git add -- @Paths

git commit -m $Message

if ($Push) {
  git push origin main
}
