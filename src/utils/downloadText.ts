export interface DownloadOptions {
    fileName: string
    content: string
    mimeType?: string
}

export function downloadText({ fileName, content, mimeType = 'text/plain;charset=utf-8' }: DownloadOptions): void {
    if (!fileName || !content) return

    const blob = new Blob([content], { type: mimeType })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    link.click()

    URL.revokeObjectURL(url)
}