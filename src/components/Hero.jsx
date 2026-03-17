"use client"

import { useEffect } from "react"
import { animate } from "animejs"
import siteData from "@/data/siteData"

export default function Hero() {

  useEffect(() => {
    animate(".hero-content", {
      opacity: [0, 1],
      translateY: [60, 0],
      duration: 1200,
      easing: "easeOutExpo"
    })
  }, [])

  return (
    <section
      className="h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${siteData.hero.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="bg-black/60 backdrop-blur-sm p-10 rounded-xl hero-content">

        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          {siteData.hero.title}
        </h1>

        <p className="mb-6 text-gray-200">
          {siteData.hero.subtitle}
        </p>

        <button className="bg-primary hover:scale-105 transition px-8 py-3 rounded-lg font-semibold shadow-lg shadow-red-500/30">
          {siteData.hero.buttonText}
        </button>

      </div>
    </section>
  )
}