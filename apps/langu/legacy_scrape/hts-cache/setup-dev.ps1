Write-Host "Setting up Blackstone Monorepo..."

npm install

$folders = Get-ChildItem -Directory .\apps\,.\packages\
foreach ($dir in $folders) {
    if (Test-Path "$dir\package.json") {
        Push-Location $dir
        npm install
        Pop-Location
    }
}

Write-Host "Run the following to start dev servers for each app:"
$apps = Get-ChildItem -Directory .\apps\
foreach ($dir in $apps) {
    if (Test-Path "$dir\package.json") {
        Write-Host "cd $dir; npm run dev"
    }
}