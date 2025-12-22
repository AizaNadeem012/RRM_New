import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Droplets, Home, Sparkles, Wrench, Building2, PaintBucket,
  Sun, Warehouse, Eraser, TreeDeciduous, Layers, Square,
  Phone, CheckCircle
} from "lucide-react";

const services = [
  {
    id: "commercial-cleaning",
    icon: Building2,
    name: "Commercial Cleaning",
    description: "Comprehensive exterior cleaning for businesses, offices, retail spaces, and industrial properties.",
    features: ["Building Exteriors", "Car Parks", "Signage Cleaning", "Regular Maintenance Contracts"],
  },
  {
    id: "window-cleaning",
    icon: Sparkles,
    name: "Window Cleaning",
    description: "Crystal-clear windows for homes and businesses using pure water technology.",
    features: ["Streak-Free Finish", "Pure Water System", "High-Level Access", "Frames & Sills Included"],
  },
  {
    id: "pressure-washing",
    icon: Droplets,
    name: "Pressure Washing Services",
    description: "High-powered cleaning to remove dirt, grime, algae, and stains from any surface.",
    features: ["Variable Pressure Control", "Hot & Cold Water", "Surface Protection", "Eco-Friendly Detergents"],
  },
  {
    id: "roof-cleaning",
    icon: Home,
    name: "Roof Cleaning Services",
    description: "Safe and effective roof cleaning to remove moss, algae, and lichen damage.",
    features: ["Moss Removal", "Biocide Treatment", "Extend Roof Lifespan", "Prevent Water Damage"],
  },
  {
    id: "gutter-cleaning",
    icon: Wrench,
    name: "Gutter Cleaning & Repair",
    description: "Clear blocked gutters and downpipes to prevent water damage to your property.",
    features: ["Full System Clearance", "Downpipe Flushing", "Minor Repairs", "Before/After Photos"],
  },
  {
    id: "render-cleaning",
    icon: PaintBucket,
    name: "Render Cleaning",
    description: "Specialist cleaning for rendered walls to restore their original appearance.",
    features: ["All Render Types", "Algae & Mould Removal", "Protective Treatments", "Color Restoration"],
  },
  {
    id: "conservatory-cleaning",
    icon: Sun,
    name: "Conservatory Cleaning",
    description: "Complete conservatory cleaning inside and out for maximum light and appearance.",
    features: ["Roof Panels", "Glass & Frames", "Gutters", "Internal Cleaning Available"],
  },
  {
    id: "soffits-fascias",
    icon: Warehouse,
    name: "Soffits & Fascias Cleaning",
    description: "Restore the appearance of your roofline with professional cleaning.",
    features: ["uPVC Restoration", "Stain Removal", "Bird Dropping Removal", "Long-Lasting Results"],
  },
  {
    id: "graffiti-removal",
    icon: Eraser,
    name: "Graffiti Removal",
    description: "Quick and effective graffiti removal from all surfaces.",
    features: ["Rapid Response", "All Surface Types", "Anti-Graffiti Coatings", "Substrate Safe"],
  },
  {
    id: "driveway-patio",
    icon: TreeDeciduous,
    name: "Driveway & Patio Restoration",
    description: "Transform your outdoor spaces with deep cleaning and re-sanding services.",
    features: ["Block Paving", "Natural Stone", "Concrete", "Sealing Available"],
  },
  {
    id: "cladding-cleaning",
    icon: Layers,
    name: "Cladding Cleaning",
    description: "Professional cleaning for all types of building cladding.",
    features: ["Metal Cladding", "Composite Panels", "Curtain Walling", "Height Access"],
  },
  {
    id: "upvc-cleaning",
    icon: Square,
    name: "uPVC Cleaning",
    description: "Restore faded and discolored uPVC to like-new condition.",
    features: ["Windows & Doors", "Fascias & Soffits", "Conservatories", "Color Restoration"],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6 text-shadow">
              Complete External Cleaning Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80">
              From residential properties to commercial buildings, we offer a comprehensive 
              range of professional cleaning services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {service.name}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild>
                    <Link to="/contact">Get Quote for {service.name}</Link>
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-primary/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-secondary-foreground/70 mb-6 max-w-lg mx-auto">
            Contact us to discuss your specific requirements. We offer bespoke cleaning 
            packages for any property type.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:07845463877" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call 07845 463877
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
