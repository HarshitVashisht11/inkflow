"use client"
import React, { useEffect, useState } from 'react'

type Props = {
  className?: string
}

const RotatingWords: React.FC<Props> = ({ className = '' }) => {
  const words = ['collaborative', 'design', 'brainstorming', 'planning', 'prototyping']
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const word = words[currentWordIndex % words.length]
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(word.substring(0, currentText.length - 1))
        setTypingSpeed(50)
      } else {
        setCurrentText(word.substring(0, currentText.length + 1))
        setTypingSpeed(150)
      }

      if (!isDeleting && currentText === word) {
        // Word completed, wait before deleting
        setTypingSpeed(2000)
        setIsDeleting(true)
      } else if (isDeleting && currentText === '') {
        // Deletion completed, move to next word
        setIsDeleting(false)
        setCurrentWordIndex((prev) => prev + 1)
        setTypingSpeed(150)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, typingSpeed, words])

  return (
    <span className={`${className} inline-flex items-center`}>
      {currentText}
      <span className="ml-1 w-[2px] h-[1em] bg-emerald-500 animate-pulse" />
    </span>
  )
}

export default RotatingWords
