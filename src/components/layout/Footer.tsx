import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  "Pressure Washing",
  "Roof Cleaning",
  "Gutter Cleaning",
  "Driveway Restoration",
  "Window Cleaning",
  "Render Cleaning",
];

const areas = [
  "Warrington",
  "Liverpool",
  "Manchester",
  "Wigan",
  "St Helens",
  "Widnes",
];

export function Footer() {
  return (
    <footer className="bg-[#562396] text-white relative overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-white/0 pointer-events-none" />

      <div className="container mx-auto px-4 py-14 md:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14">

          {/* Company Info */}
          <div>
            <div className="mb-5">
              <span className="text-3xl font-extrabold tracking-wide text-white">
                R.R.M
              </span>
              <p className="text-sm text-white/70 mt-1">
                External Cleaning Specialist
              </p>
            </div>

            <p className="text-sm text-white/80 leading-relaxed mb-5">
              Professional external cleaning services across North West UK.
              Delivering quality, reliability, and customer satisfaction.
            </p>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href="tel:07845463877"
                className="flex items-center gap-2 hover:text-[#E10600] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#E10600]" />
                07845 463877
              </a>

              <a
                href="mailto:info@rrmcleaning.co.uk"
                className="flex items-center gap-2 hover:text-[#E10600] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#E10600]" />
                info@rrmcleaning.co.uk
              </a>

              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#E10600] mt-0.5" />
                <span className="text-white/80">
                  9 Noon Court, Newton-le-Willows
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-5 text-white/90">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "All Services", to: "/services" },
                { label: "Gallery", to: "/gallery" },
                { label: "Contact", to: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/70 hover:text-[#E10600] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="font-semibold text-lg mb-5 text-white/90">
              Popular Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-white/70 hover:text-[#E10600] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas & Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-5 text-white/90">
              Service Areas
            </h4>
            <ul className="space-y-2 mb-6">
              {areas.map((area) => (
                <li key={area}>
                  <Link
                    to="/areas"
                    className="text-sm text-white/70 hover:text-[#E10600] transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-white/90">
              <Clock className="h-4 w-4 text-[#E10600]" />
              Business Hours
            </h4>

            <p className="text-sm text-white/75 leading-relaxed">
              Mon - Fri: 8:00 AM - 6:00 PM <br />
              Sat: 9:00 AM - 4:00 PM <br />
              Sun: Closed
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} R.R.M External Cleaning Specialist. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-[#E10600] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#E10600] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
