'use client'
import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>{}[]|\\/'
    const fontSize = 20
    let columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(28, 28, 28, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Gold primary rain
      ctx.fillStyle = '#DAA520'
      ctx.font = `${fontSize}px monospace`

      columns = Math.floor(canvas.width / fontSize)
      while (drops.length < columns) drops.push(1)

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Occasional coral/fire highlights
        if (Math.random() > 0.97) {
          ctx.fillStyle = '#FF6F61'
        } else if (Math.random() > 0.95) {
          ctx.fillStyle = '#FF4500'
        } else {
          ctx.fillStyle = '#DAA520'
        }

        ctx.fillText(char, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="matrix-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.07,
      }}
    />
  )
}
