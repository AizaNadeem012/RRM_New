import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="text-8xl md:text-9xl font-extrabold text-primary/20 mb-4">
              404
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved. 
              Let us help you find what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/" className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:07845463877" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
