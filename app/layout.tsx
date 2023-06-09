import './globals.css'

export const metadata = {
  title: 'Pavaverse Dao',
  description: 'Generated by Muhammad Irtaza',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
