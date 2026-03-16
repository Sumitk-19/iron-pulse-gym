import siteData from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-14 pb-24">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-white text-xl mb-2">
          {siteData.businessName}
        </h3>

        <p>
          © {new Date().getFullYear()} {siteData.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}