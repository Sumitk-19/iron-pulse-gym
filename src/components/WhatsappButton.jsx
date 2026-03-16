import { FaWhatsapp } from "react-icons/fa";
import siteData from "@/data/siteData";

export default function WhatsappButton() {
  return (
    <a
      href={`https://wa.me/${siteData.contact.phone}`}
      className="fixed bottom-24 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center"
    >
      <FaWhatsapp size={26} />
    </a>
  );
}