"use client"

import React, { useEffect, useState } from 'react'

type Props = {
  className?: string
}

const RotatingWords: React.FC<Props> = ({ className = '' }) => {
  const words = ['collaborative', 'design', 'brainstorming', 'planning', 'prototyping']
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <span key={index} className={`inline-block ${className} transition-opacity duration-500 animate-in fade-in`}>
      {words[index]}
    </span>
  )
}

export default RotatingWords
