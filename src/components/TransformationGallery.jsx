export default function TransformationGallery() {

  const images = [
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    "https://images.unsplash.com/photo-1554284126-aa88f22d8b74",
    "https://images.unsplash.com/photo-1594737625785-c0a86c24b5c9",
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    "https://images.unsplash.com/photo-1579758629938-03607ccdbaba",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
  ]

  return (
    <section className="py-24 bg-black text-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Transformation Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="rounded-lg hover:scale-105 transition duration-300"
            />
          ))}

        </div>

      </div>

    </section>
  )
}