"use client"
import { useEffect, useState } from 'react'

export const GitHubStars = () => {
  const [stars, setStars] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://api.github.com/repos/HarshitVashisht11/inkflow')
      .then(res => res.json())
      .then(data => setStars(data.stargazers_count))
      .catch(() => setStars(null))
  }, [])

  if (stars === null) return <span>...</span>
  return <span>{stars}</span>
}
