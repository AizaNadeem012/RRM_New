import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Instagram, Search } from "lucide-react";
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

        {/* TOP BAR — PURE WHITE */}
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

          {/* LOGO — BIGGER NOW */}
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

          {/* QUOTE BUTTON */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              className="bg-gradient-to-r from-[#6A2FA3] to-[#8B45CC] text-white hover:scale-105 transition-transform shadow-lg"
              asChild
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

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
            isOpen ? "max-h-[500px] py-4" : "max-h-0"
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

          <Button
            className="w-full mt-4 bg-gradient-to-r from-[#6A2FA3] to-[#8B45CC] text-white shadow-lg"
            asChild
          >
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
