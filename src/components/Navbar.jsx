"use client"

import { useEffect, useState } from "react"
import siteData from "@/data/siteData"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { name: "Home", id: "" },
    { name: "Plans", id: "plans" },
    { name: "Trainers", id: "trainers" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-black/90 backdrop-blur-md py-3 shadow-lg shadow-black/30"
          : "bg-black/70 backdrop-blur-md py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <h1
          className={`font-bold text-primary transition-all duration-300 ${
            scrolled ? "text-xl" : "text-2xl"
          }`}
        >
          {siteData.businessName}
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.id ? `#${link.id}` : "#"}
              className={`px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105
              ${
                active === link.id
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-300 hover:bg-primary/20 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#contact"
            className="ml-2 bg-primary text-white px-5 py-2 rounded-lg font-semibold shadow-lg shadow-red-500/30 hover:scale-105 hover:bg-red-600 transition"
          >
            Join Now
          </a>

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-md px-6 overflow-hidden transition-all duration-300
        ${menuOpen ? "max-h-[500px] py-6" : "max-h-0"}`}
      >

        <div className="flex flex-col gap-4 text-center">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.id ? `#${link.id}` : "#"}
              onClick={() => setMenuOpen(false)}
              className={`py-3 rounded-lg transition-all duration-300
              ${
                active === link.id
                  ? "bg-primary text-white"
                  : "text-gray-300 hover:bg-primary/20 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* CTA Button Mobile */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-primary text-white py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            Join Now
          </a>

        </div>

      </div>
    </nav>
  )
}