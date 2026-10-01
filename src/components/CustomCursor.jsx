import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: -100, y: -100 })
  const target = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    document.body.classList.add('custom-cursor-active')
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMouseMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
    }

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15
      pos.current.y += (target.current.y - pos.current.y) * 0.15
      ring.style.left = `${pos.current.x}px`
      ring.style.top = `${pos.current.y}px`
      requestAnimationFrame(animate)
    }

    const onMouseEnter = () => {
      dot.classList.add('hovering')
      ring.classList.add('hovering')
    }

    const onMouseLeave = () => {
      dot.classList.remove('hovering')
      ring.classList.remove('hovering')
    }

    document.addEventListener('mousemove', onMouseMove)
    const raf = requestAnimationFrame(animate)

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .magnetic-btn, .ghost-btn, .glass-card, .skill-tag, .project-card-3d')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter)
      el.addEventListener('mouseleave', onMouseLeave)
    })

    // Re-observe when DOM changes
    const mutationObserver = new MutationObserver(() => {
      const newElements = document.querySelectorAll('a, button, input, textarea, .magnetic-btn, .ghost-btn, .glass-card, .skill-tag, .project-card-3d')
      newElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
        el.addEventListener('mouseenter', onMouseEnter)
        el.addEventListener('mouseleave', onMouseLeave)
      })
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
      document.body.classList.remove('custom-cursor-active')
      mutationObserver.disconnect()
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  )
}
