import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from './components/AuthProvider'
import Navbar from './components/Navbar'
import ThemeProvider from '@/context/ThemeContext'
import { Toaster } from 'react-hot-toast'


export const metadata = {
  title: 'Blog app',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
        <AuthProvider>
          <Navbar/>
        {children}
        </AuthProvider>
        </ThemeProvider>
        <Toaster/>
        </body>
    </html>
  )
}
