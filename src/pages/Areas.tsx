import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Star, CheckCircle, Calendar, Clock, Shield, Award, Users, Building, Waves, Factory, Home, Store } from "lucide-react";

const areas = [
  { 
    name: "Warrington", 
    postcode: "WA1-WA5", 
    popular: true,
    icon: Building,
    description: "Historic market town with beautiful Georgian architecture and modern commercial centers",
    features: ["Commercial properties", "Historic buildings", "Town center cleaning"],
    gradient: "from-blue-400 to-blue-600"
  },
  { 
    name: "Liverpool", 
    postcode: "L1-L36", 
    popular: true,
    icon: Waves,
    description: "Vibrant port city with iconic waterfront, cultural attractions and diverse property types",
    features: ["Waterfront properties", "Commercial buildings", "Heritage sites"],
    gradient: "from-teal-400 to-teal-600"
  },
  { 
    name: "Manchester", 
    postcode: "M1-M90", 
    popular: true,
    icon: Building,
    description: "Dynamic city center with modern commercial districts and innovative architectural developments",
    features: ["Office buildings", "Retail spaces", "Industrial properties"],
    gradient: "from-purple-400 to-purple-600"
  },
  { 
    name: "Chester", 
    postcode: "CH1-L35", 
    popular: true,
    icon: Home,
    description: "Medieval city with ancient walls, Tudor architecture and heritage buildings requiring specialist care",
    features: ["Historic buildings", "Conservation areas", "Heritage sites"],
    gradient: "from-amber-400 to-amber-600"
  },
  { 
    name: "Preston", 
    postcode: "PR1-L36", 
    popular: true,
    icon: Building,
    description: "Administrative center with mix of modern office buildings and traditional Lancashire architecture",
    features: ["Office complexes", "Public buildings", "Modern commercial spaces"],
    gradient: "from-indigo-400 to-indigo-600"
  },
  { 
    name: "Blackpool", 
    postcode: "FY1-L37", 
    popular: true,
    icon: Waves,
    description: "Coastal resort town with iconic tower, promenade and unique seaside property cleaning challenges",
    features: ["Seaside properties", "Hotels", "Entertainment venues"],
    gradient: "from-pink-400 to-pink-600"
  },
  { 
    name: "Wigan", 
    postcode: "WN1-WN8", 
    popular: true,
    icon: Factory,
    description: "Industrial town with manufacturing heritage and specialized cleaning needs for commercial properties",
    features: ["Industrial facilities", "Warehouses", "Manufacturing plants"],
    gradient: "from-gray-400 to-gray-600"
  },
  { 
    name: "Bolton", 
    postcode: "BL1-L58", 
    popular: true,
    icon: Home,
    description: "Historic town with mix of Victorian architecture, modern developments and traditional mill buildings",
    features: ["Mill conversions", "Victorian buildings", "Mixed residential/commercial"],
    gradient: "from-green-400 to-green-600"
  },
  { 
    name: "St Helens", 
    postcode: "WA9-WA11", 
    popular: true,
    icon: Store,
    description: "Former industrial town with modern retail parks and growing residential developments",
    features: ["Retail parks", "New housing estates", "Commercial centers"],
    gradient: "from-red-400 to-red-600"
  },
  { 
    name: "Widnes", 
    postcode: "WA8", 
    popular: false,
    icon: Home,
    description: "Market town with medieval street pattern and traditional Lancashire buildings",
    features: ["Market town buildings", "Historic properties", "Town center locations"],
    gradient: "from-orange-400 to-orange-600"
  },
  { 
    name: "Leigh", 
    postcode: "WN7", 
    popular: false,
    icon: Factory,
    description: "Industrial town with coal mining heritage and modern commercial developments",
    features: ["Industrial estates", "Converted buildings", "Modern business parks"],
    gradient: "from-cyan-400 to-cyan-600"
  },
  { 
    name: "Lymm", 
    postcode: "WA13", 
    popular: false,
    icon: Home,
    description: "Village with rural character, canal heritage and mix of residential and agricultural buildings",
    features: ["Rural properties", "Farm buildings", "Canal-side locations"],
    gradient: "from-emerald-400 to-emerald-600"
  },
  { 
    name: "Prescot", 
    postcode: "L34-L35", 
    popular: false,
    icon: Building,
    description: "Former mining town with Victorian center and modern business parks",
    features: ["Business parks", "Victorian architecture", "Commercial estates"],
    gradient: "from-violet-400 to-violet-600"
  },
  { 
    name: "Ormskirk", 
    postcode: "L39-L40", 
    popular: false,
    icon: Factory,
    description: "Industrial town with cotton mill heritage and modern industrial estates",
    features: ["Industrial heritage sites", "Modern factories", "Converted mill buildings"],
    gradient: "from-rose-400 to-rose-600"
  },
  { 
    name: "Rainhill", 
    postcode: "L35", 
    popular: false,
    icon: Home,
    description: "Small town with rural character and surrounding agricultural land",
    features: ["Rural properties", "Farm buildings", "Agricultural facilities"],
    gradient: "from-lime-400 to-lime-600"
  },
];

export default function Areas() {
  const popularAreas = areas.filter(a => a.popular);
  const otherAreas = areas.filter(a => !a.popular);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm uppercase tracking-wider mb-4">
              <MapPin className="h-4 w-4" />
              Service Areas
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Serving North West UK
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Professional external cleaning services across the North West. 
              From historic city centers to coastal towns, we bring our expertise to properties of all types.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="tel:07845463877" className="flex items-center gap-2 justify-center">
                  <Phone className="h-5 w-5" /> Call 07845 463877
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Areas Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Most Requested Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These are the areas where we provide our expert external cleaning services most frequently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {popularAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.name}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-200"
                >
                  <div className={`h-32 bg-gradient-to-br ${area.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white">{area.name}</h3>
                      <p className="text-white/80 text-sm">{area.postcode}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-600 mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {area.features.map((feature, index) => (
                        <span key={index} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                          <CheckCircle className="h-3 w-3" />
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Button size="sm" asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link to={`/contact?area=${area.name.toLowerCase().replace(' ', '-')}`}>Get Quote</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Areas Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Service Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're proud to serve communities across the entire North West region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {areas.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.name}
                  className="group flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${area.gradient} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
                      <span className="text-sm text-gray-500">({area.postcode})</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{area.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {area.features.map((feature, index) => (
                        <span key={index} className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                          <CheckCircle className="h-3 w-3" />
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Button size="sm" variant="outline" asChild className="w-full border-blue-300 text-blue-600 hover:bg-blue-50">
                      <Link to={`/contact?area=${area.name.toLowerCase().replace(' ', '-')}`}>Get Quote</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See Your Area?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              We're always expanding our service area. Contact us to check if we can provide 
              our professional external cleaning services in your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="tel:07845463877" className="flex items-center gap-2 justify-center">
                  <Phone className="h-5 w-5" /> Call 07845 463877
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl">
                <Link to="/contact">Check Your Area</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}