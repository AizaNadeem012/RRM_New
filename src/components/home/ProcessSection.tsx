import { ClipboardCheck, Target, Hammer, BadgeCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Assessment",
    description: "We evaluate your property and understand your exact cleaning requirements.",
  },
  {
    icon: Target,
    step: "02",
    title: "Planning",
    description: "We craft a personalized cleaning plan with clear, upfront pricing.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Execution",
    description: "Our skilled cleaners deliver premium-quality results with modern equipment.",
  },
  {
    icon: BadgeCheck,
    step: "04",
    title: "Quality Check",
    description: "We review every detail to ensure everything is spotless and perfect.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#E10600] font-semibold text-sm tracking-wider uppercase">
            How We Work
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4 text-foreground">
            Our Premium 4-Step Cleaning Process
          </h2>

          <p className="text-muted-foreground text-lg">
            A seamless, transparent, and professional workflow built around your comfort.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg 
                         transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl backdrop-blur-sm"
            >
              {/* Line Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[2px] bg-[#E10600]/40" />
              )}

              {/* Step Number */}
              <div className="text-6xl font-extrabold text-muted mb-6 opacity-20">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 mb-6 rounded-xl bg-[#E10600]/10 
                              flex items-center justify-center border border-[#E10600]/40">
                <step.icon className="h-7 w-7 text-[#E10600]" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
