import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/header/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flowbite Admin | Dashboard',
  description: 'Admin Dashboard Template built with Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}</body>
    </html>
  )
}
