import { MapPin, Zap, ThumbsUp, Shield, Leaf, Clock } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Local Knowledge",
    description:
      "Deep understanding of North West properties and their unique cleaning requirements.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description:
      "Quick quotes and flexible scheduling designed around your busy lifestyle.",
  },
  {
    icon: ThumbsUp,
    title: "Consistent Quality",
    description:
      "Every clean completed to the highest professional standards — no compromise.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "Complete peace of mind with full insurance for all services we provide.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Safe, environmentally friendly cleaning products for your home and family.",
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description:
      "Always punctual, always professional, always delivering the results you expect.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <span className="text-[#E10600] font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mt-3 mb-6 leading-tight">
              The R.R.M Difference
            </h2>

            <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
              With over 15 years of hands-on experience in professional exterior
              cleaning, we've built a reputation rooted in reliability, 
              excellence, and customer trust. Here's what makes us stand out
              for North West homeowners and businesses.
            </p>

            {/* List */}
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#E10600]/10 border border-[#E10600]/30 flex items-center justify-center transition duration-300 group-hover:scale-110 group-hover:bg-[#E10600]/15">
                    <reason.icon className="h-6 w-6 text-[#E10600]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side – Stats Block */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-xl">
              <div className="text-center p-10">
                <div className="text-7xl md:text-8xl font-extrabold text-[#E10600] mb-4 drop-shadow-sm">
                  15+
                </div>
                <div className="text-2xl font-semibold text-foreground">
                  Years of Excellence
                </div>
                <p className="text-muted-foreground mt-3 text-sm md:text-base">
                  Proudly trusted by thousands across the North West
                </p>
              </div>
            </div>

            {/* Soft glows */}
            <div className="absolute -top-5 -right-5 w-28 h-28 bg-[#E10600]/20 rounded-full blur-2xl opacity-70" />
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-[#E10600]/10 rounded-full blur-3xl opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
