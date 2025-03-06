import NavBar from '@/components/Navbar'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My App',
  description: 'My app description',
  keywords: 'เรียน Next.js, React, Tailwind CSS',
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
export default layout