# Script Khởi chạy Local Web Server cho Discrete Math Hub
param(
    [int]$Port = 8080
)

$HostIP = "localhost"
$Url = "http://${HostIP}:${Port}/"
$CurrentDir = $PSScriptRoot

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  DISCRETE MATH HUB - WEB HỌC TOÁN RỜI RẠC CHUYÊN SÂU" -ForegroundColor Yellow
Write-Host "  Giáo trình: GS. Nguyễn Hữu Anh - NXB Lao động Xã hội" -ForegroundColor White
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "Dang khoi tao server tai: $Url" -ForegroundColor Green
Write-Host "Thu muc goc: $CurrentDir" -ForegroundColor Gray

# MIME Types mapping
$MimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".ico"  = "image/x-icon"
}

$Listener = New-Object System.Net.HttpListener
$Listener.Prefixes.Add($Url)

try {
    $Listener.Start()
} catch {
    Write-Host "Khong the mo cong $Port. Dang thu mo truc tiep index.html..." -ForegroundColor Red
    Start-Process "$CurrentDir\index.html"
    exit
}

Write-Host "Server dang chay! Mo trinh duyet tu dong..." -ForegroundColor Green
Start-Process $Url

Write-Host "Nhan [Ctrl+C] de dung server.`n" -ForegroundColor Yellow

while ($Listener.IsListening) {
    try {
        $Context = $Listener.GetContext()
        $Request = $Context.Request
        $Response = $Context.Response

        $LocalPath = $Request.Url.LocalPath
        if ($LocalPath -eq "/" -or $LocalPath -eq "") {
            $LocalPath = "/index.html"
        }

        # Convert URL path to file system path
        $FilePath = Join-Path $CurrentDir ($LocalPath.TrimStart("/").Replace("/", "\"))

        if (Test-Path $FilePath -PathType Leaf) {
            $Ext = [System.IO.Path]::GetExtension($FilePath).ToLower()
            $ContentType = $MimeTypes[$Ext]
            if (-not $ContentType) { $ContentType = "application/octet-stream" }

            $Bytes = [System.IO.File]::ReadAllBytes($FilePath)
            $Response.ContentType = $ContentType
            $Response.ContentLength64 = $Bytes.Length
            $Response.AddHeader("Access-Control-Allow-Origin", "*")
            $Response.OutputStream.Write($Bytes, 0, $Bytes.Length)
            $Response.StatusCode = 200
        } else {
            $NotFoundMsg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $Response.StatusCode = 404
            $Response.ContentType = "text/plain"
            $Response.OutputStream.Write($NotFoundMsg, 0, $NotFoundMsg.Length)
        }
        $Response.Close()
    } catch {
        # Listener stopped or interrupted
        break
    }
}

$Listener.Stop()
$Listener.Close()
Write-Host "`nServer da dong thanh cong!" -ForegroundColor Gray
