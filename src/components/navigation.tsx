"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-border/40' 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold shadow-md shadow-emerald-500/20">
              IF
            </div>
            <Link href={'/'} className="text-xl font-bold tracking-tight text-foreground hover:text-emerald-500 transition-colors">InkFlow</Link>
          </div>

          {/* Center nav - hidden on mobile */}
          <nav className="hidden md:flex md:items-center md:gap-8">
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link href={'/dashboard'}>
              <Button variant="ghost" className="hidden sm:inline-flex hover:bg-emerald-500/10 hover:text-emerald-500 font-medium">Sign In</Button>
            </Link>

            <Link href={'/dashboard'}>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-200 rounded-full px-6">
                Get Started
              </Button>
            </Link>

            {/* Mobile menu icon (placeholder) */}
            <button className="md:hidden p-2 rounded-md hover:bg-white/5 text-muted-foreground">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navigation
