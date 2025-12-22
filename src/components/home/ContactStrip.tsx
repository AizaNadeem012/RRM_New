import { Phone, Mail } from "lucide-react";

export function ContactStrip() {
  return (
    <div className="bg-[#E10600] text-white py-3">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <div className="flex items-center gap-2 text-sm">
          <Phone className="h-4 w-4" />
          <a href="tel:07845463877">07845 463877</a>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Mail className="h-4 w-4" />
          <a href="mailto:info@rrmcleaning.co.uk">info@rrmcleaning.co.uk</a>
        </div>
      </div>
    </div>
  );
}
 

