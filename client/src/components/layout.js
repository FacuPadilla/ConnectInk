import './globals.css'
import { Providers } from './redux/provider'
import Nav from '@/components/nav/Nav'

export const metadata = {
  title: 'ConnectInk',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body class='bg-secondary-900 text-gray-300'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
