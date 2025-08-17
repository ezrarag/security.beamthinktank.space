import type { Metadata } from 'next'
import './globals.css'

// Using system fonts instead of Google Fonts to avoid build issues
const systemFonts = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'

export const metadata: Metadata = {
  title: 'BEAM Security & Protective Services Guild',
  description: 'Community safety, private security certification, and disaster response training through local protective service nodes.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: systemFonts }}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
