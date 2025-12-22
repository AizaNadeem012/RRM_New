import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Leaf, Award, Heart, Phone, Star, Shield, Clock, Droplets, Zap, Wrench, Calendar, ChevronRight, Quote, Instagram, Facebook, Twitter, Truck, MapPin, TrendingUp, Globe, Building, Home, Sparkles, Recycle } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We never compromise on quality. Every job is completed to highest professional standards with meticulous attention to detail.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We listen, adapt, and deliver results that exceed expectations, building lasting relationships.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "We use environmentally responsible products and methods to protect your property and our planet, ensuring a sustainable future.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Our experienced, friendly team treats every property with care and respect, maintaining professionalism at all times.",
  },
];

const features = [
  "Over 15 years of industry experience",
  "Fully insured and certified professionals",
  "Bespoke services tailored to your needs",
  "Eco-friendly cleaning solutions",
  "Fast response times across North West UK",
  "Competitive and transparent pricing",
  "100% satisfaction guarantee",
  "State-of-the-art equipment",
];

const process = [
  {
    icon: Phone,
    title: "Initial Consultation",
    description: "We begin with a thorough consultation to understand your specific needs and assess scope of work required.",
  },
  {
    icon: Calendar,
    title: "Customized Planning",
    description: "Our team develops a tailored cleaning plan with detailed timelines, methods, and products specific to your property.",
  },
  {
    icon: Wrench,
    title: "Expert Execution",
    description: "Our certified professionals execute the plan using specialized equipment and eco-friendly solutions with minimal disruption.",
  },
  {
    icon: CheckCircle,
    title: "Quality Inspection",
    description: "We conduct a thorough post-cleaning inspection to ensure every aspect meets our high standards and your expectations.",
  },
];

const team = [
  {
    name: "Robert Mitchell",
    position: "Founder & CEO",
    bio: "With over 20 years in the industry, Robert founded R.R.M with a vision to provide exceptional external cleaning services.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Sarah Thompson",
    position: "Operations Manager",
    bio: "Sarah ensures all operations run smoothly, maintaining our high standards across every project we undertake.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Michael Chen",
    position: "Technical Director",
    bio: "Michael brings technical expertise and innovation to our cleaning methods, ensuring we use the most effective techniques.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Emily Wilson",
    position: "Customer Relations",
    bio: "Emily is dedicated to ensuring our clients have the best experience possible from initial contact to project completion.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
  },
];

const testimonials = [
  {
    name: "James Harrison",
    position: "Homeowner, Manchester",
    content: "I've used R.R.M for both my driveway and roof cleaning, and the results have been outstanding each time. Professional, reliable, and exceptional quality.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Laura Bennett",
    position: "Business Owner, Liverpool",
    content: "Our commercial property has never looked better. The team was efficient, thorough, and transformed our building's exterior. Highly recommend their services!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "David Thompson",
    position: "Property Manager, Chester",
    content: "As a property manager, I need reliable contractors. R.R.M has consistently delivered excellent results on multiple properties we manage.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
];

const certifications = [
  {
    name: "British Cleaning Council",
    icon: Shield,
    description: "Certified member of the UK's leading cleaning industry association",
  },
  {
    name: "Eco-Friendly Cleaning",
    icon: Leaf,
    description: "Recognized for sustainable and environmentally responsible cleaning practices",
  },
  {
    name: "Health & Safety Compliant",
    icon: Award,
    description: "Fully compliant with all UK health and safety regulations",
  },
  {
    name: "Quality Assured",
    icon: CheckCircle,
    description: "ISO 9001:2015 certified quality management systems",
  },
];

const stats = [
  { number: "5000+", label: "Happy Customers" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Customer Satisfaction" },
  { number: "24/7", label: "Emergency Service" },
];

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Comprehensive external cleaning solutions for homeowners in the North West UK, including driveways, patios, roofing, and exterior walls.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    icon: Building,
    title: "Commercial Services",
    description: "Specialized cleaning solutions for businesses across the North West, including retail spaces, office buildings, and commercial properties.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
  {
    icon: Sparkles,
    title: "Specialist Treatments",
    description: "Advanced cleaning techniques for stubborn stains, graffiti removal, and restoration of heritage properties throughout the North West region.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  },
];

const equipment = [
  {
    name: "High-Pressure Jet Washers",
    description: "Industrial-grade equipment capable of removing even the most stubborn dirt and grime from North West properties.",
  },
  {
    name: "Steam Cleaning Systems",
    description: "Eco-friendly steam technology that sanitizes surfaces without harsh chemicals, perfect for the UK climate.",
  },
  {
    name: "Water Recycling Units",
    description: "Advanced systems that minimize water usage while maximizing cleaning efficiency, meeting UK environmental standards.",
  },
  {
    name: "Specialized Access Equipment",
    description: "Safe and efficient equipment for reaching difficult areas without risking damage to historic North West buildings.",
  },
];

const awards = [
  {
    name: "North West Business Excellence Award",
    year: "2022",
    category: "Service Excellence",
  },
  {
    name: "Green Business Certification",
    year: "2021",
    category: "Environmental Impact",
  },
  {
    name: "Customer Choice Award",
    year: "2020, 2021, 2022",
    category: "Best Cleaning Service",
  },
];

const community = [
  {
    title: "Local School Initiatives",
    description: "We provide free cleaning services for local schools across the North West, creating safe and clean environments for children to learn and play.",
    icon: Heart,
  },
  {
    title: "Community Clean-Up Days",
    description: "Our team regularly participates in community clean-up events throughout the North West, helping to maintain the beauty of our local neighborhoods.",
    icon: Recycle,
  },
  {
    title: "Charity Partnerships",
    description: "We partner with local charities across the North West, offering our services at reduced rates to support their important work in the community.",
    icon: Users,
  },
];

const northWestLocations = [
  { name: "Manchester", description: "Vibrant city center with commercial and residential properties" },
  { name: "Liverpool", description: "Historic port city with diverse property types" },
  { name: "Chester", description: "Medieval city with heritage buildings requiring specialist care" },
  { name: "Preston", description: "Administrative center with mix of modern and traditional buildings" },
  { name: "Blackpool", description: "Coastal resort town with unique cleaning challenges" },
  { name: "Warrington", description: "Growing town with expanding commercial districts" },
  { name: "Wigan", description: "Industrial town with specialized cleaning needs" },
  { name: "Bolton", description: "Historic town with mix of residential and commercial properties" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#562396]/90 via-[#7b4dd8]/90 to-[#a87df2]/90 z-0"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687644-c7171b42498a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6 drop-shadow-lg">
              Your Trusted External Cleaning Partner
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              R.R.M External Cleaning Specialist has been transforming properties across 
              North West UK for over 15 years. Our commitment to quality, trust, 
              and customer satisfaction sets us apart.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-accent hover:bg-primary/90 text-white px-8 py-5 rounded-xl">
                <a href="tel:07845463877" className="flex items-center gap-2 justify-center">
                  <Phone className="h-5 w-5" /> Call 07845 463877
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/30 text-white hover:bg-white/10 px-8 py-5 rounded-xl">
                <Link to="/contact">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/5 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-16 -right-16 w-96 h-96 rounded-full bg-white/10 blur-2xl animate-pulse"></div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-b from-[#562396] to-[#7b4dd8] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-extrabold mb-2">{stat.number}</div>
                <div className="text-sm uppercase tracking-wider opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground">
                Built on Quality & Trust
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded with a simple mission – to provide exceptional external cleaning 
                services that homeowners and businesses can rely on. What started as a 
                passion for restoring properties has grown into one of the North West's 
                most trusted cleaning specialists.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Today, we've helped over 5,000 customers transform their properties. 
                From domestic driveways to commercial roofing systems, our team brings 
                the same dedication and attention to detail to every project.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-foreground/90">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://breezerspressurewashing.com/wp-content/uploads/2024/07/431672137_122130362204149414_81297643938295537_n-e1721031011899-1024x931.jpg" 
                alt="Professional cleaning team at work" 
                className="aspect-[4/5] rounded-3xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg max-w-xs">
                <div className="text-3xl font-extrabold text-primary mb-1">
                  5000+
                </div>
                <div className="text-sm font-semibold text-foreground">
                  Happy Customers
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
              Comprehensive Cleaning Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer a wide range of specialized cleaning services designed to meet the unique 
              needs of both residential and commercial properties throughout the North West.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-white/80">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg">
              Our systematic approach ensures consistent, high-quality results for every project, 
              regardless of size or complexity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <step.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 text-sm font-bold text-primary bg-white px-2 rounded-full">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Equipment Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Technology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-foreground">
                State-of-the-Art Equipment
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We invest in the latest cleaning technology to ensure superior results while 
                minimizing environmental impact. Our equipment is regularly maintained and 
                updated to meet industry standards.
              </p>
              <div className="space-y-6">
                {equipment.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://www.britclean.co.uk/blog/wp-content/uploads/2022/06/Pressure-Washer-In-The-Summer-624x416.jpg" 
                alt="Professional cleaning equipment" 
                className="rounded-3xl object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="font-bold text-foreground">99.9% Efficiency</span>
                </div>
                <p className="text-sm text-muted-foreground">Our advanced equipment delivers superior cleaning results in less time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

   

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-white/95 to-white/90">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
              What Drives Us
            </h2>
            <p className="text-muted-foreground text-lg">
              At R.R.M, our principles guide every action. Excellence, sustainability, 
              and professionalism define our approach to cleaning services.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div 
                key={value.title}
                className="p-6 rounded-2xl bg-white shadow-lg border border-gray-100 text-center hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Recognition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
              Awards & Accolades
            </h2>
            <p className="text-muted-foreground text-lg">
              We're proud to be recognized by industry leaders for our commitment to excellence 
              and innovation in external cleaning services throughout the North West.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{award.name}</h3>
                <p className="text-sm text-primary mb-1">{award.year}</p>
                <p className="text-sm text-muted-foreground">{award.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Here's what our satisfied customers have to say 
              about our services across the North West.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Community
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
              Giving Back To Our Community
            </h2>
            <p className="text-muted-foreground text-lg">
              We believe in being more than just a business – we're proud members of the 
              North West community and are committed to making a positive impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {community.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <img 
              src="https://cleaningbusinesstoday.com/wp-content/uploads/2021/12/AdobeStock_220495590-scaled.jpeg" 
              alt="Community involvement" 
              className="rounded-3xl object-cover shadow-xl mx-auto max-w-4xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Service Area
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
              Serving The North West
            </h2>
            <p className="text-muted-foreground text-lg">
              We're proud to serve communities across the North West region with our professional 
              external cleaning services.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Map_of_the_North_West_with_districts_shaded_and_municipalities_numbered_%282016%29.svg/1280px-Map_of_the_North_West_with_districts_shaded_and_municipalities_numbered_%282016%29.svg.png" 
                  alt="Map of North West UK service area" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Areas We Cover</h3>
              <div className="grid grid-cols-2 gap-4">
                {northWestLocations.map((location, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{location.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-4">
                {northWestLocations.slice(0, 4).map((location, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <h4 className="font-bold text-primary mb-2">{location.name}</h4>
                    <p className="text-sm text-muted-foreground">{location.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-6 mb-6">
                Don't see your area listed? Contact us to check if we can provide our services 
                in your location. We're always expanding our service area to reach more customers throughout the North West.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/contact">Check Your Area</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Certifications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-foreground">
              Our Credentials
            </h2>
            <p className="text-muted-foreground text-lg">
              We're proud to be recognized by leading industry organizations for our 
              commitment to quality, safety, and environmental responsibility.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert) => (
              <div key={cert.name} className="text-center p-6 rounded-2xl bg-white shadow-lg border border-gray-100">
                <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <cert.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-[#562396] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#562396]/90 via-[#7b4dd8]/90 to-[#a87df2]/90 z-0"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687644-c7171b42498a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="text-white/80 mb-8 text-lg max-w-lg mx-auto">
            Get in touch today for a free, no-obligation quote on any of our services 
            throughout the North West.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-primary/90 text-white px-8 py-5 rounded-xl">
              <a href="tel:07845463877" className="flex items-center gap-2 justify-center">
                <Phone className="h-5 w-5" /> Call 07845 463877
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white/30 text-white hover:bg-white/10 px-8 py-5 rounded-xl">
              <Link to="/contact">Request Quote</Link>
            </Button>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
      </section>
    </Layout>
  );
}