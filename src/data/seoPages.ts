// 20 Service Areas
export const locations = [
  { name: "Warrington", slug: "warrington", postcode: "WA1-WA5", popular: true },
  { name: "Liverpool", slug: "liverpool", postcode: "L1-L36", popular: true },
  { name: "Manchester", slug: "manchester", postcode: "M1-M90", popular: true },
  { name: "Wigan", slug: "wigan", postcode: "WN1-WN8", popular: true },
  { name: "St Helens", slug: "st-helens", postcode: "WA9-WA11", popular: true },
  { name: "Widnes", slug: "widnes", postcode: "WA8", popular: true },
  { name: "Leigh", slug: "leigh", postcode: "WN7", popular: false },
  { name: "Lymm", slug: "lymm", postcode: "WA13", popular: false },
  { name: "Prescot", slug: "prescot", postcode: "L34-L35", popular: false },
  { name: "Ormskirk", slug: "ormskirk", postcode: "L39-L40", popular: false },
  { name: "Rainhill", slug: "rainhill", postcode: "L35", popular: false },
  { name: "Burtonwood", slug: "burtonwood", postcode: "WA5", popular: false },
  { name: "Huyton", slug: "huyton", postcode: "L36", popular: false },
  { name: "Irlam", slug: "irlam", postcode: "M44", popular: false },
  { name: "Lowton", slug: "lowton", postcode: "WA3", popular: false },
  { name: "Winwick", slug: "winwick", postcode: "WA2", popular: false },
  { name: "Golborne", slug: "golborne", postcode: "WA3", popular: false },
  { name: "Great Sankey", slug: "great-sankey", postcode: "WA5", popular: false },
  { name: "Birchwood", slug: "birchwood", postcode: "WA3", popular: false },
  { name: "Skelmersdale", slug: "skelmersdale", postcode: "WN8", popular: false },
];

// 12 Core Services
export const services = [
  {
    slug: "commercial-cleaning",
    name: "Commercial Cleaning",
    shortDesc: "Professional exterior cleaning for businesses and commercial properties",
    fullDesc: "Comprehensive exterior cleaning services for businesses, offices, retail spaces, and industrial properties. We understand the importance of maintaining a professional appearance for your business.",
    features: ["Building Exteriors", "Car Parks & Forecourts", "Signage Cleaning", "Regular Maintenance Contracts", "Out-of-Hours Service", "Health & Safety Compliant"],
    benefits: ["Enhanced Business Image", "Increased Property Value", "Healthier Work Environment", "Reduced Maintenance Costs"],
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    shortDesc: "Crystal-clear windows using pure water technology",
    fullDesc: "Professional window cleaning using the latest pure water technology for streak-free, spotless results. We clean windows at all heights for both residential and commercial properties.",
    features: ["Pure Water System", "Streak-Free Finish", "High-Level Access", "Frames & Sills Included", "Internal Cleaning", "Regular Schedules"],
    benefits: ["Maximum Natural Light", "Improved Curb Appeal", "Extended Window Life", "Professional Appearance"],
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    shortDesc: "High-powered cleaning for all exterior surfaces",
    fullDesc: "Expert pressure washing services to remove ingrained dirt, grime, algae, moss, and stains from driveways, patios, walls, and more. We use variable pressure control to suit every surface.",
    features: ["Variable Pressure Control", "Hot & Cold Water Options", "Surface-Safe Cleaning", "Eco-Friendly Detergents", "Oil & Grease Removal", "All Surface Types"],
    benefits: ["Restored Appearance", "Slip Hazard Prevention", "Increased Property Value", "Long-Lasting Results"],
  },
  {
    slug: "roof-cleaning",
    name: "Roof Cleaning",
    shortDesc: "Safe moss and algae removal from all roof types",
    fullDesc: "Professional roof cleaning to safely remove moss, algae, lichen, and debris. We extend the life of your roof while restoring its original appearance using gentle, effective methods.",
    features: ["Moss & Algae Removal", "Biocide Treatment", "Soft Wash Technology", "All Roof Types", "Gutter Clearance", "Protective Coating"],
    benefits: ["Extended Roof Lifespan", "Prevent Water Damage", "Improved Energy Efficiency", "Enhanced Curb Appeal"],
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning & Repair",
    shortDesc: "Complete gutter maintenance and repair services",
    fullDesc: "Keep your gutters flowing freely with our professional gutter cleaning and repair service. We clear blockages, flush downpipes, and carry out minor repairs to prevent costly water damage.",
    features: ["Full System Clearance", "Downpipe Flushing", "Minor Repairs", "Before/After Photos", "CCTV Inspection", "Regular Maintenance Plans"],
    benefits: ["Prevent Water Damage", "Avoid Foundation Issues", "Stop Damp Problems", "Extend Gutter Life"],
  },
  {
    slug: "render-cleaning",
    name: "Render Cleaning",
    shortDesc: "Specialist cleaning for all render types",
    fullDesc: "Expert render cleaning to remove algae, mould, and atmospheric staining from rendered walls. We restore the original colour and apply protective treatments for lasting results.",
    features: ["All Render Types", "Soft Wash System", "Biocide Treatments", "Colour Restoration", "Protective Sealants", "K-Rend Specialists"],
    benefits: ["Restored Original Colour", "Protection Against Regrowth", "Enhanced Property Value", "Long-Lasting Clean"],
  },
  {
    slug: "conservatory-cleaning",
    name: "Conservatory Cleaning",
    shortDesc: "Complete conservatory cleaning inside and out",
    fullDesc: "Full conservatory cleaning service including roof panels, glass, frames, and gutters. We remove green algae, bird droppings, and dirt to restore maximum light and appearance.",
    features: ["Roof Panel Cleaning", "Glass & Frame Cleaning", "Gutter Clearance", "Internal Cleaning", "Algae Removal", "uPVC Restoration"],
    benefits: ["Maximum Light Entry", "Improved Appearance", "Extended Life", "Year-Round Enjoyment"],
  },
  {
    slug: "soffits-fascias-cleaning",
    name: "Soffits & Fascias Cleaning",
    shortDesc: "Roofline cleaning and restoration",
    fullDesc: "Professional cleaning of soffits, fascias, and bargeboards to restore your roofline to like-new condition. We remove dirt, algae, and bird droppings safely and effectively.",
    features: ["uPVC Restoration", "Stain Removal", "Bird Dropping Removal", "Algae Treatment", "Gentle Cleaning", "All Heights"],
    benefits: ["Improved Curb Appeal", "Extended Material Life", "Prevented Damage", "Consistent Appearance"],
  },
  {
    slug: "graffiti-removal",
    name: "Graffiti Removal",
    shortDesc: "Fast and effective graffiti removal",
    fullDesc: "Rapid response graffiti removal service for all surfaces. We use specialist techniques and products to safely remove graffiti without damaging the underlying substrate.",
    features: ["Rapid Response", "All Surface Types", "Anti-Graffiti Coatings", "Substrate Safe", "24/7 Availability", "Commercial Contracts"],
    benefits: ["Fast Removal", "Surface Protection", "Deter Repeat Vandalism", "Maintained Property Value"],
  },
  {
    slug: "driveway-patio-cleaning",
    name: "Driveway & Patio Cleaning",
    shortDesc: "Transform your outdoor spaces",
    fullDesc: "Expert driveway and patio cleaning to remove years of dirt, moss, algae, and weeds. We restore block paving, natural stone, concrete, and more to their original condition.",
    features: ["Block Paving", "Natural Stone", "Concrete & Tarmac", "Re-Sanding Service", "Weed Removal", "Sealing Available"],
    benefits: ["Transformed Appearance", "Improved Safety", "Increased Property Value", "Long-Lasting Results"],
  },
  {
    slug: "cladding-cleaning",
    name: "Cladding Cleaning",
    shortDesc: "Professional building cladding maintenance",
    fullDesc: "Specialist cleaning for all types of building cladding including metal, composite panels, and curtain walling. We have the equipment and expertise for buildings of any height.",
    features: ["Metal Cladding", "Composite Panels", "Curtain Walling", "Height Access Equipment", "Warranty Safe", "Regular Contracts"],
    benefits: ["Professional Appearance", "Extended Cladding Life", "Warranty Compliance", "Consistent Clean"],
  },
  {
    slug: "upvc-cleaning",
    name: "uPVC Cleaning",
    shortDesc: "Restore faded uPVC to like-new condition",
    fullDesc: "Professional uPVC cleaning and restoration service for windows, doors, fascias, soffits, and conservatories. We remove staining and restore the original colour and finish.",
    features: ["Windows & Doors", "Fascias & Soffits", "Conservatories", "Colour Restoration", "Protective Treatment", "All Colours"],
    benefits: ["Restored Appearance", "No Need to Replace", "UV Protection", "Long-Lasting Results"],
  },
];

// Generate 100 SEO page combinations (5 services x 20 locations)
export const seoPageCombinations = [
  // Pressure Washing - All 20 locations
  ...locations.map(loc => ({ location: loc, service: services[2] })),
  // Driveway & Patio Cleaning - All 20 locations
  ...locations.map(loc => ({ location: loc, service: services[9] })),
  // Roof Cleaning - All 20 locations
  ...locations.map(loc => ({ location: loc, service: services[3] })),
  // Gutter Cleaning - All 20 locations
  ...locations.map(loc => ({ location: loc, service: services[4] })),
  // Window Cleaning - All 20 locations
  ...locations.map(loc => ({ location: loc, service: services[1] })),
];

export type Location = typeof locations[0];
export type Service = typeof services[0];
