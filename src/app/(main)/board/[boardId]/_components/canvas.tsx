import dynamic from "next/dynamic";
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

export default function Canvas({ boardId }: { boardId: string }) {
  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw persistenceKey={`board-${boardId}`}/>
    </div>
  )
}