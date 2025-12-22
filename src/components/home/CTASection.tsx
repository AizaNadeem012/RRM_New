import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#2C1053]">
      
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Ready to Transform Your Property?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200/80 mb-10"
          >
            Get your free, no-obligation quote today. Our friendly team is ready to discuss your cleaning needs and provide a tailored solution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="hero"
              size="xl"
              asChild
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition-transform"
            >
              <a href="tel:07845463877" className="flex items-center gap-2">
                <Phone className="h-5 w-5" /> Call 07845 463877
              </a>
            </Button>

            <Button
              variant="heroOutline"
              size="xl"
              asChild
              className="border-pink-400 text-pink-300 hover:bg-pink-400 hover:text-[#2C1053] transition-all hover:scale-105"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Request Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-gray-300/60 text-sm"
          >
            Free quotes • No obligation • Fast response
          </motion.p>
        </div>
      </div>
    </section>
  );
}
