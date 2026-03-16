import siteData from "@/data/siteData";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-md text-white z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="text-xl font-bold text-red-500">
          {siteData.businessName}
        </h1>

        <div className="flex gap-6">
          <a href="#plans">Plans</a>
          <a href="#trainers">Trainers</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}