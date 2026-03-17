"use client"

import useScrollAnimation from "@/hooks/useScrollAnimation"
import siteData from "@/data/siteData"

export default function Reviews() {

  useScrollAnimation(".review-card")

  return (
    <section className="py-24 bg-secondary text-white text-center">

      <h2 className="text-4xl font-bold mb-14">
        Member Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

        {siteData.reviews.map((review) => (
          <div
            key={review.name}
            className="review-card opacity-0 bg-white/5 border border-white/10 p-8 rounded-xl hover:scale-105 transition duration-300 shadow-lg"
          >

            <p className="text-gray-300 mb-4">
              "{review.text}"
            </p>

            <h4 className="text-primary font-semibold">
              {review.name}
            </h4>

          </div>
        ))}

      </div>
    </section>
  )
}