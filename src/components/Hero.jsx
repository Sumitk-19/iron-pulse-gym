import siteData from "@/data/siteData";

export default function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${siteData.hero.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="bg-black/60 backdrop-blur-sm p-10 rounded-xl">
        <h1 className="text-5xl font-bold mb-4">
          {siteData.hero.title}
        </h1>

        <p className="mb-6">
          {siteData.hero.subtitle}
        </p>

        <button className="bg-red-600 hover:bg-red-700 hover:scale-105 transition px-8 py-3 rounded-lg font-semibold shadow-lg">
          {siteData.hero.buttonText}
        </button>
      </div>
    </section>
  );
}