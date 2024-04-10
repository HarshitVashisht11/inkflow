import React from 'react'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
const Canvas = () => {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
    <Tldraw inferDarkMode/>
    </div>
  )
}

export default Canvas