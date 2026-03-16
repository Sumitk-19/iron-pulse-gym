import siteData from "@/data/siteData"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-gray-100">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">

        {/* Left Side - Contact Info */}

        <div className="text-black">

          <h2 className="text-3xl font-bold mb-6">
            {siteData.businessName}
          </h2>

          <div className="space-y-4 text-gray-700">

            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              {siteData.contact.address}
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-500" />
              {siteData.contact.phone}
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              {siteData.contact.email}
            </p>

          </div>

          {/* Google Maps Preview */}

          <div className="mt-8 rounded-xl overflow-hidden shadow-lg">

            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                siteData.contact.address
              )}&output=embed`}
              width="100%"
              height="250"
              loading="lazy"
              className="border-0"
            ></iframe>

          </div>

        </div>

        {/* Right Side - Contact Form */}

        <form 
  action="https://formsubmit.co/ironpulse@gmail.com" 
  method="POST"
  className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-5"
>

<input type="hidden" name="_captcha" value="false" />

<input name="name" placeholder="Name" className="p-4 border rounded-lg text-black" />

<input name="email" type="email" placeholder="Email" className="p-4 border rounded-lg text-black" />

<input name="phone" placeholder="Phone" className="p-4 border rounded-lg text-black" />

<textarea name="message" placeholder="Message" rows="4" className="p-4 border rounded-lg text-black"></textarea>

<button className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg">
Send Message
</button>

</form>

      </div>

    </section>
  )
}