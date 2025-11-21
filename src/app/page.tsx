
import Navigation from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, GraduationCap, User, Zap, Globe, Layers, MousePointer2 } from 'lucide-react'
import RotatingWords from '@/components/rotating-words'
import { GitHubStars } from '@/components/github-stars'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-emerald-500/30">
      <Navigation />
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30 dark:opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-emerald-500/20 via-emerald-500/10 to-transparent blur-[120px] -z-10" />
      </div>

      <main className="relative z-10 pt-32 pb-16 px-4 md:px-6 flex flex-col items-center justify-center text-center max-w-6xl mx-auto">
        
        {/* Pill Label */}
        <div className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-border bg-card py-1 pr-4 pl-3 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="overflow-hidden rounded">
            <svg width="16" height="16" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
              <rect fill="#FB651E" x="0" y="0" width="256" height="256"></rect>
              <path d="M119.373653,144.745813 L75.43296,62.4315733 L95.5144533,62.4315733 L121.36192,114.52416 C121.759575,115.452022 122.2235,116.413008 122.753707,117.407147 C123.283914,118.401285 123.747838,119.428546 124.145493,120.48896 C124.410597,120.886615 124.609422,121.251127 124.741973,121.582507 C124.874525,121.913886 125.007075,122.212123 125.139627,122.477227 C125.802386,123.802744 126.39886,125.095105 126.929067,126.354347 C127.459274,127.613589 127.923198,128.773399 128.320853,129.833813 C129.381268,127.580433 130.541078,125.1614 131.80032,122.57664 C133.059562,119.99188 134.351922,117.307747 135.67744,114.52416 L161.92256,62.4315733 L180.612267,62.4315733 L136.27392,145.739947 L136.27392,198.826667 L119.373653,198.826667 L119.373653,144.745813 Z" fill="#FFFFFF"></path>
            </svg>
          </div>
          <span className="text-sm font-medium text-muted-foreground">Not backed by Y Combinator</span>
        </div>

        {/* Hero Heading */}
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 leading-tight">
          Your all-in-one <br className="hidden md:block" />
          creative platform <br className="hidden md:block" />
          <RotatingWords className="font-serif italic font-normal text-emerald-500" />
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 leading-relaxed">
          Brainstorming, wireframing, and planning is already challenging enough.
          Avoid further complications by ditching outdated tools.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20 animate-in fade-in slide-in-from-bottom-16 duration-1000">
          <Link href="/sign-up">
            <Button size="lg" className="w-full sm:w-auto gap-2 bg-emerald-500 hover:bg-emerald-600 text-white border-none h-14 px-10 text-base font-semibold shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-200">
              Get Started <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-10 text-base font-semibold border-2 hover:bg-emerald-500/5 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-200">
              Sign In
            </Button>
          </Link>
        </div>


      </main>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 bg-muted/30 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-emerald-500/10 via-emerald-500/5 to-transparent blur-[100px] -z-0" />
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium mb-4">
              Features
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why InkFlow?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to bring your ideas to life, all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Lightning Fast</h3>
              <p className="text-muted-foreground leading-relaxed">
                Experience real-time collaboration with zero latency. Your ideas flow as fast as you think.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Infinite Canvas</h3>
              <p className="text-muted-foreground leading-relaxed">
                Never run out of space. Our infinite canvas lets your creativity expand in every direction.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <MousePointer2 className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Real-time Collab</h3>
              <p className="text-muted-foreground leading-relaxed">
                Work together with your team in real-time. See cursors, comments, and changes instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold shadow-sm">IF</div>
                <span className="text-lg font-semibold text-foreground">InkFlow</span>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                Your all-in-one creative platform for design, brainstorming, and collaboration.
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-12">
              <div>
                <h4 className="font-semibold text-foreground mb-3">Links</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="#features" className="hover:text-emerald-500 transition-colors hover:underline">Features</Link></li>
                  <li><Link href="https://github.com/HarshitVashisht11/inkflow" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors hover:underline flex items-center gap-1">
                    GitHub
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 InkFlow. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                href="https://github.com/HarshitVashisht11/inkflow" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-emerald-500 transition-colors group"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-muted text-xs font-medium group-hover:bg-emerald-500/10 transition-colors">
                  <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <GitHubStars />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 left-0 right-0 h-[400px] pointer-events-none z-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-gradient-to-t from-emerald-500/30 via-emerald-500/10 to-transparent blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-t from-blue-500/20 via-blue-500/10 to-transparent blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>
    </div>
  )
}