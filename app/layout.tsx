import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import CartProvider from './components/Provider'
import ShoppingCartModel from './components/ShoppingCartModel'

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Commerce',
  description: 'Shop with us!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning={true}>
        <CartProvider>
        <Navbar />
        <ShoppingCartModel />
        {children}
        </CartProvider>
        </body>
    </html>
  )
}
