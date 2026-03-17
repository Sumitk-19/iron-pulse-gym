"use client"

import { useEffect } from "react"
import { animate } from "animejs"

export default function useScrollAnimation(selector) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {

            animate(entry.target, {
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 800,
              easing: "easeOutQuad"
            })

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [selector])
}