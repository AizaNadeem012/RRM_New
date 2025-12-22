import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Instagram, Search, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "All Services" },
  { href: "/areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-xl transition-all duration-300 border-b border-gray-200",
        scrolled ? "bg-[#4A1E7A]/90 shadow-lg" : "bg-[#4A1E7A]/70"
      )}
    >
      <div className="container mx-auto px-4">

        {/* TOP BAR — PURE WHITE (hidden on mobile) */}
        <div className="hidden md:flex justify-between items-center py-2 bg-white text-gray-700 rounded-b-xl shadow-sm px-4">
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-[#6A2FA3]">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#6A2FA3]">
              <Instagram size={18} />
            </a>
          </div>

          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#6A2FA3]"
            />
            <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          </div>
        </div>

        {/* MAIN NAVBAR */}
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.webp"
              alt="R.R.M Logo"
              className="h-16 md:h-20 w-auto object-contain drop-shadow-lg"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all",
                  location.pathname === link.href
                    ? "text-[#D6B7FF] bg-[#6A2FA3]/20"
                    : "text-gray-200 hover:text-[#D6B7FF] hover:bg-[#6A2FA3]/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              className="bg-gradient-to-r from-[#6A2FA3] to-[#8B45CC] text-white hover:scale-105 transition-transform shadow-lg"
              asChild
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>

            <a
              href="https://share.google/QUZ3caSgzonO6nfct"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-gray-700 px-3 py-2 rounded-lg shadow hover:scale-105 transition-transform"
            >
              <img src="/google-logo.png" alt="Google" className="h-5 w-5 object-contain" />
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400" />
                ))}
              </div>
            </a>
          </div>

          {/* MOBILE GOOGLE REVIEWS (visible next to hamburger) */}
          <a
            href="https://share.google/QUZ3caSgzonO6nfct"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 lg:hidden text-gray-700 bg-white px-2 py-1 rounded-lg shadow"
          >
            <img src="/google-logo.png" alt="Google" className="h-4 w-4 object-contain" />
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="text-yellow-400" />
            ))}
          </a>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all",
            isOpen ? "max-h-[600px] py-4" : "max-h-0"
          )}
        >
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 text-gray-700 border border-gray-300"
            />
            <Search className="absolute left-3 top-2.5 text-gray-600" size={18} />
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-gray-200 rounded-md hover:bg-[#6A2FA3]/20 hover:text-[#D6B7FF]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Buttons inside dropdown */}
          <div className="flex flex-col gap-2 mt-4 px-4">
            <Button
              className="w-full bg-gradient-to-r from-[#6A2FA3] to-[#8B45CC] text-white shadow-lg"
              asChild
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>

            <a
              href="https://share.google/QUZ3caSgzonO6nfct"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-white text-gray-700 px-3 py-2 rounded-lg shadow hover:scale-105 transition-transform"
            >
              <img src="/google-logo.png" alt="Google" className="h-5 w-5 object-contain" />
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400" />
                ))}
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
