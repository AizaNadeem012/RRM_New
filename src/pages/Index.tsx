import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CTASection } from "@/components/home/CTASection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Zap, ThumbsUp, Shield, Leaf, Clock } from "lucide-react";

// AreasSection (added directly since not imported)
const popularAreas = [
  { name: "Warrington", postcode: "WA" },
  { name: "Liverpool", postcode: "L" },
  { name: "Manchester", postcode: "M" },
  { name: "Wigan", postcode: "WN" },
  { name: "St Helens", postcode: "WA" },
  { name: "Widnes", postcode: "WA" },
  { name: "Leigh", postcode: "WN" },
  { name: "Prescot", postcode: "L" },
];

export const AreasSection = () => (
  <section className="py-20 md:py-28 bg-[#562396] relative overflow-hidden">
    {/* Soft background glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E10600]/10 rounded-full blur-3xl opacity-40 pointer-events-none" />

    <div className="container mx-auto px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#E10600] font-semibold text-sm uppercase tracking-wider">
            Coverage
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5">
            Areas We Serve
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            Offering trusted external cleaning services throughout the North West UK. Check your location below.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-14">
          {popularAreas.map((area) => (
            <Link
              key={area.name}
              to={`/areas#${area.name.toLowerCase().replace(" ", "-")}`}
              className="group p-5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md shadow-sm flex flex-col items-start hover:shadow-xl hover:-translate-y-1 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#E10600]/10 border border-[#E10600]/30 mb-3 transition-all group-hover:bg-[#E10600]/15">
                <MapPin className="h-6 w-6 text-[#E10600]" />
              </div>

              <div>
                <span className="font-semibold text-white text-lg group-hover:text-[#E10600] transition-colors">
                  {area.name}
                </span>
                <span className="text-xs ml-2 text-white/50">({area.postcode})</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-white/70 mb-4 text-sm">
            Can't find your area? Don’t worry — we probably cover it!
          </p>
          <Button
            size="lg"
            className="bg-[#E10600] text-white hover:bg-[#c20500] rounded-xl px-8 py-6 text-md"
            asChild
          >
            <Link to="/areas">View All Service Areas</Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

// WhyChooseUs Section (added directly)
const reasons = [
  { icon: MapPin, title: "Local Knowledge", description: "Deep understanding of North West properties." },
  { icon: Zap, title: "Fast Response", description: "Quick quotes and flexible scheduling." },
  { icon: ThumbsUp, title: "Consistent Quality", description: "Every job completed to high standards." },
  { icon: Shield, title: "Fully Insured", description: "Peace of mind with full insurance." },
  { icon: Leaf, title: "Eco-Friendly", description: "Environmentally responsible products and methods." },
  { icon: Clock, title: "Reliable Service", description: "Always on time and professional." },
];

export const WhyChooseUs = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
          The R.R.M Difference
        </h2>
        <p className="text-muted-foreground">
          Trusted by homeowners and businesses across North West UK. Here's why.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason) => (
          <div key={reason.title} className="flex gap-4 p-6 rounded-xl shadow hover:shadow-xl transition">
            <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
              <reason.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{reason.title}</h3>
              <p className="text-muted-foreground text-sm">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesGrid />
      <ProcessSection />
      <AreasSection />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
};

export default Index;
