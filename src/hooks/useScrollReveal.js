import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0
            setTimeout(() => {
              entry.target.classList.add('revealed')
            }, parseInt(delay))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    // Observe all current reveal elements
    const observeElements = () => {
      const elements = document.querySelectorAll(
        '.reveal-up:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed), .reveal-scale:not(.revealed)'
      )
      elements.forEach((el) => observer.observe(el))
    }

    observeElements()

    // Watch for new elements added to the DOM (e.g. after loading screen)
    const mutation = new MutationObserver(() => {
      observeElements()
    })

    mutation.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutation.disconnect()
    }
  }, [])
}
