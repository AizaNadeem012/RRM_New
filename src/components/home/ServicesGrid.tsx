import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Droplets, 
  Home, 
  Sparkles, 
  Wrench, 
  Building2, 
  PaintBucket,
  Sun,
  Warehouse,
  Eraser,
  TreeDeciduous,
  Layers,
  Square
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Building2, name: "Commercial Cleaning", slug: "commercial-cleaning" },
  { icon: Sparkles, name: "Window Cleaning", slug: "window-cleaning" },
  { icon: Droplets, name: "Pressure Washing", slug: "pressure-washing" },
  { icon: Home, name: "Roof Cleaning", slug: "roof-cleaning" },
  { icon: Wrench, name: "Gutter Cleaning & Repair", slug: "gutter-cleaning" },
  { icon: PaintBucket, name: "Render Cleaning", slug: "render-cleaning" },
  { icon: Sun, name: "Conservatory Cleaning", slug: "conservatory-cleaning" },
  { icon: Warehouse, name: "Soffits & Fascias", slug: "soffits-fascias" },
  { icon: Eraser, name: "Graffiti Removal", slug: "graffiti-removal" },
  { icon: TreeDeciduous, name: "Driveway & Patio", slug: "driveway-patio" },
  { icon: Layers, name: "Cladding Cleaning", slug: "cladding-cleaning" },
  { icon: Square, name: "uPVC Cleaning", slug: "upvc-cleaning" },
];

export function ServicesGrid() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#2C1053] to-[#3A0CA3] overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-[-10%] w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-0 right-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[150px] animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-purple-300 font-semibold uppercase tracking-wider text-sm">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-4 drop-shadow-lg">
            Complete External Cleaning Solutions
          </h2>
          <p className="text-gray-200/70 text-lg md:text-xl">
            From pressure washing to roof restoration, we provide comprehensive exterior cleaning services for both residential and commercial properties.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/services#${service.slug}`}
                className="group relative flex flex-col items-center text-center p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center mb-4 text-white shadow-md group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-white font-semibold text-lg md:text-xl group-hover:text-pink-400 transition-colors">
                  {service.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-pink-500 text-white hover:bg-pink-500 hover:text-white hover:scale-105 transition-all"
            asChild
          >
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
