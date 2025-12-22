import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: MapPin, value: "20+", label: "Service Areas" },
  { icon: Users, value: "5000+", label: "Happy Customers" },
  { icon: Award, value: "15+", label: "Years Experience" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#4A1E7A] via-[#5A25A0] to-[#1A0F2F]">
      
      {/* Elegant Soft Purple Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[450px] h-[450px] bg-[#8B5CF6]/40 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-[#D946EF]/30 rounded-full blur-[160px]" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 text-center">

        {/* Elegant Purple Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-white/20 text-purple-200 font-medium mb-6 shadow-md backdrop-blur-xl"
        >
          Trusted Across North West UK
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
        >
          Premium External Cleaning Solutions
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-purple-100/90 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Professional pressure washing, roof cleaning & exterior restoration—
          trusted by thousands across the United Kingdom.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button
            size="xl"
            asChild
            className="bg-gradient-to-r from-[#6A2FA3] to-[#8B45CC] text-white shadow-purple-900/40 shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
          >
            <a href="tel:07845463877" className="flex items-center gap-2">
              <Phone className="h-5 w-5" /> Call 07845 463877
            </a>
          </Button>

          <Button
            size="xl"
            asChild
            className="border border-purple-300 text-purple-200 hover:bg-purple-300 hover:text-[#1A1A2E] transition-all hover:scale-105"
          >
            <Link to="/contact">Request Free Quote</Link>
          </Button>
        </motion.div>

        {/* Stats — Elegant Glass Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.2 }}
              className="text-center bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl py-6 shadow-lg hover:shadow-purple-900/30 transition-all"
            >
              <div className="flex justify-center mb-2">
                <stat.icon className="h-9 w-9 md:h-11 md:w-11 text-purple-200" />
              </div>
              <div className="text-2xl md:text-4xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-purple-100/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-purple-200/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-purple-100/70 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
