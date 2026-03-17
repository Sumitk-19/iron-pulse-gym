"use client"

import useScrollAnimation from "@/hooks/useScrollAnimation"
import siteData from "@/data/siteData"

export default function Trainers() {

  useScrollAnimation(".trainer-card")

  return (
    <section id="trainers"className="py-24 bg-secondary text-white text-center">

      <h2 className="text-4xl font-bold mb-14">
        Our Trainers
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

        {siteData.trainers.map((trainer) => (
          <div
            key={trainer.name}
            className="trainer-card opacity-0 bg-white/5 border border-white/10 p-8 rounded-xl hover:scale-105 hover:-translate-y-2 transition duration-300 shadow-lg"
          >

            <img
              src={trainer.img}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />

            <h3 className="text-lg font-semibold">
              {trainer.name}
            </h3>

            <p className="text-gray-400">
              {trainer.role}
            </p>

          </div>
        ))}

      </div>
    </section>
  )
}