import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Phone, CheckCircle, MapPin, Star, Clock, Shield, 
  Users, Award, ArrowRight 
} from "lucide-react";
import { locations, services, Location, Service } from "@/data/seoPages";

function findLocation(slug: string): Location | undefined {
  return locations.find(l => l.slug === slug);
}

function findService(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

function getRelatedPages(currentLoc: Location, currentService: Service) {
  const sameServiceDiffLocation = locations
    .filter(l => l.slug !== currentLoc.slug)
    .slice(0, 4)
    .map(l => ({
      title: `${currentService.name} in ${l.name}`,
      url: `/${l.slug}/${currentService.slug}`,
    }));

  const sameLocationDiffService = services
    .filter(s => s.slug !== currentService.slug)
    .slice(0, 4)
    .map(s => ({
      title: `${s.name} in ${currentLoc.name}`,
      url: `/${currentLoc.slug}/${s.slug}`,
    }));

  return { sameServiceDiffLocation, sameLocationDiffService };
}

export default function LocationServicePage() {
  const { location: locSlug, service: serviceSlug } = useParams();

  const location = findLocation(locSlug || "");
  const service = findService(serviceSlug || "");

  if (!location || !service) {
    return <Navigate to="/404" replace />;
  }

  const canonicalUrl = `https://rrmcleaning.co.uk/${location.slug}/${service.slug}`;
  const pageTitle = `${service.name} in ${location.name} | R.R.M External Cleaning`;
  const metaDescription = `Professional ${service.name.toLowerCase()} services in ${location.name} (${location.postcode}). 15+ years experience, 5000+ happy customers. Call 07845 463877 for a free quote.`;

  const { sameServiceDiffLocation, sameLocationDiffService } = getRelatedPages(location, service);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "R.R.M External Cleaning Specialist",
    "description": `${service.name} services in ${location.name}`,
    "telephone": "07845463877",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9 Noon Court",
      "addressLocality": "Newton-le-Willows",
      "addressRegion": "North West",
      "postalCode": location.postcode,
      "addressCountry": "UK"
    },
    "areaServed": {
      "@type": "Place",
      "name": location.name
    },
    "serviceType": service.name,
    "priceRange": "££"
  };

  return (
    <Layout>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                {location.name} • {location.postcode}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-shadow">
              {service.name} Specialist in {location.name}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              The best local {service.name.toLowerCase()} for homes and businesses 
              in {location.name} and surrounding areas ({location.postcode}).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <a href="tel:07845463877" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call 07845 463877
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Award className="h-8 w-8 text-primary mb-2" />
              <span className="text-2xl font-bold text-foreground">15+</span>
              <span className="text-sm text-muted-foreground">Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-primary mb-2" />
              <span className="text-2xl font-bold text-foreground">5000+</span>
              <span className="text-sm text-muted-foreground">Happy Customers</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-8 w-8 text-primary mb-2" />
              <span className="text-2xl font-bold text-foreground">Fast</span>
              <span className="text-sm text-muted-foreground">Response Time</span>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-primary mb-2" />
              <span className="text-2xl font-bold text-foreground">Insured</span>
              <span className="text-sm text-muted-foreground">Fully Covered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Professional {service.name} Services in {location.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {service.fullDesc}
              </p>
              <p className="text-muted-foreground mb-8">
                Serving {location.name} ({location.postcode}) and surrounding areas, 
                R.R.M External Cleaning Specialist brings over 15 years of experience 
                to every job. We're local experts who understand the specific challenges 
                properties in this area face.
              </p>

              <div className="space-y-4 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" asChild>
                <a href="tel:07845463877" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Get Your Free Quote in {location.name}
                </a>
              </Button>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border card-shadow">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Benefits of Our {service.name}
              </h3>
              <div className="space-y-4">
                {service.benefits.map((benefit) => (
                  <div 
                    key={benefit} 
                    className="flex items-center gap-3 p-4 rounded-lg bg-muted/50"
                  >
                    <Star className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-xl bg-primary/10 border border-primary/20">
                <h4 className="font-bold text-foreground mb-2">
                  Why Choose R.R.M in {location.name}?
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Local team with knowledge of {location.name} area</li>
                  <li>✓ Fast response times across {location.postcode}</li>
                  <li>✓ Eco-friendly cleaning solutions</li>
                  <li>✓ Fully insured and guaranteed work</li>
                  <li>✓ Competitive local pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services in Same Location */}
      <section className="py-16 md:py-20 section-gradient">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Other Services We Offer in {location.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sameLocationDiffService.map((page) => (
              <Link
                key={page.url}
                to={page.url}
                className="flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors group"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {page.title}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Same Service in Other Locations */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            {service.name} in Other Areas
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sameServiceDiffLocation.map((page) => (
              <Link
                key={page.url}
                to={page.url}
                className="flex items-center justify-between p-4 rounded-lg bg-card border border-border hover:border-primary transition-colors group"
              >
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {page.title}
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/areas">View All Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
            Ready for Professional {service.name} in {location.name}?
          </h2>
          <p className="text-secondary-foreground/70 mb-6 max-w-lg mx-auto">
            Contact R.R.M External Cleaning Specialist today for a free, no-obligation 
            quote. We're the local {service.name.toLowerCase()} experts in {location.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="tel:07845463877" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call 07845 463877
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              <Link to="/contact">Request Quote Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
