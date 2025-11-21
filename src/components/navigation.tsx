"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Sun, Moon, Menu } from 'lucide-react'

const Navigation: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const stored = localStorage.getItem('theme')
    if (stored) setIsDark(stored === 'dark')
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setIsDark(true)
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    if (isDark) root.classList.add('dark')
    else root.classList.remove('dark')
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {}
  }, [isDark])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 bg-background/80 backdrop-blur-md rounded-2xl border border-border px-6 shadow-sm">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold shadow-sm">
              IF
            </div>
            <Link href={'/'} className="text-lg font-semibold text-foreground dark:text-white">InkFlow</Link>
          </div>

          {/* Center nav - hidden on mobile */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link href={'#features'} className="text-sm font-medium text-muted-foreground dark:text-gray-200 hover:text-emerald-500 transition-colors">Features</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle theme"
              onClick={() => setIsDark((s) => !s)}
              className="p-2 rounded-md hover:bg-secondary/80 text-muted-foreground dark:text-gray-200 transition-colors"
            >
              {isDark ? (
                <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <Sun className="w-5 h-5 text-amber-500" />
              )}
            </button>

            <Link href={'/sign-in'}>
              <Button variant="ghost" className="hidden sm:inline-flex hover:bg-emerald-500/10 hover:text-emerald-500">Sign In</Button>
            </Link>

            <Link href={'/sign-up'}>
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-200">
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