import siteData from "@/data/siteData"

export default function Reviews() {
  return (
    <section className="py-24 bg-black text-white text-center">

      <h2 className="text-4xl font-bold mb-14">
        Member Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

        {siteData.reviews.map((review) => (

          <div
            key={review.name}
            className="bg-white/5 border border-white/10 p-8 rounded-xl hover:scale-105 transition duration-300 shadow-lg"
          >

            <p className="text-gray-300 mb-4">
              "{review.text}"
            </p>

            <h4 className="text-red-400 font-semibold">
              {review.name}
            </h4>

          </div>

        ))}

      </div>

    </section>
  )
}