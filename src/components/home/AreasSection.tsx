import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

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

export function AreasSection() {
  return (
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
            <p className="text-white/80 max-w-xl mx-auto text-lg">
              Offering trusted external cleaning services throughout the North West UK.
              Check your location below.
            </p>
          </div>

          {/* Areas Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-14">
            {popularAreas.map((area) => (
              <Link
                key={area.name}
                to={`/areas#${area.name.toLowerCase().replace(" ", "-")}`}
                className="
                  group p-5 rounded-xl bg-white/10 border border-white/20 
                  backdrop-blur-md shadow-sm flex flex-col items-start
                  hover:shadow-xl hover:-translate-y-1 hover:bg-white/20
                  transition-all duration-300
                "
              >
                <div
                  className="
                    w-12 h-12 flex items-center justify-center rounded-lg 
                    bg-[#E10600]/10 border border-[#E10600]/30 
                    mb-3 transition-all group-hover:bg-[#E10600]/15
                  "
                >
                  <MapPin className="h-6 w-6 text-[#E10600]" />
                </div>

                <div>
                  <span className="font-semibold text-white text-lg group-hover:text-[#E10600] transition-colors">
                    {area.name}
                  </span>
                  <span className="text-xs ml-2 text-white/60">
                    ({area.postcode})
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-white/80 mb-4 text-sm">
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
}
