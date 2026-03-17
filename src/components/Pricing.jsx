"use client"

import useScrollAnimation from "@/hooks/useScrollAnimation"
import siteData from "@/data/siteData"

export default function Pricing() {

  useScrollAnimation(".pricing-card")

  return (
    <section id="plans"className="py-24 bg-secondary text-white text-center">

      <h2 className="text-4xl font-bold mb-14">
        Membership Plans
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

        {siteData.plans.map((plan) => (
          <div
            key={plan.name}
            className="pricing-card opacity-0 bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-xl hover:scale-105 hover:-translate-y-2 transition duration-300 shadow-lg"
          >

            <h3 className="text-lg mb-2">
              {plan.name}
            </h3>

            <p className="text-3xl text-primary font-bold mb-2">
              {plan.price}
            </p>

            <p className="text-gray-400">
              {plan.features}
            </p>

          </div>
        ))}

      </div>
    </section>
  )
}