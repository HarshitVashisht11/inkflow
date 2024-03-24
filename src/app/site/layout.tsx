import React from 'react'
import { ConvexClientProvider } from '@/providers/convex-client-provider'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConvexClientProvider>
      <main className="h-full">
        {children}
      </main>
    </ConvexClientProvider>
  )
}

export default layout