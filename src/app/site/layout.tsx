import React from 'react'
import { ConvexClientProvider } from '@/providers/convex-client-provider'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <main className="h-full">
        {children}
      </main>
  )
}

export default layout