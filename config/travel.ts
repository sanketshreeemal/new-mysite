/**
 * Data layer for the Travel Journey component.
 * Single source of truth for the travel page.
 *
 * To add a new stop: append an entry to `travelStops`.
 * The page renders all stops dynamically — no hardcoded layout.
 */

export interface TravelStop {
  /** Unique slug (kebab-case) */
  id: string;
  /** City or location name */
  city: string;
  /** Country name */
  country: string;
  /** Flag emoji */
  flag: string;
  /** Optional human-readable date — "Jun 2024", "Summer 2023", etc. */
  date?: string;
  /** Path to hero image (relative to /public) */
  image: string;
  /** Emoji representing the vibe / activity of the stop */
  activity: string;
  /** Accessible label for the activity emoji */
  activityLabel: string;
  /** Short story or narrative snippet about the stay */
  description?: string;
  /** Key highlights or favorite spots */
  highlights?: string[];
  /** Geographic coordinates string (e.g. "12.9716° N, 77.5946° E") */
  coordinates?: string;
}

export const travelStops: TravelStop[] = [
  {
    id: "tioman",
    city: "Tioman Island",
    country: "Malaysia",
    flag: "🇲🇾",
    image: "/images/travel/tioman.jpg",
    activity: "🤿",
    activityLabel: "Scuba Diving",
    description: "Crystal-clear waters, vibrant coral reefs, and tranquil island vibes in the South China Sea.",
    highlights: ["Coral reef dive sites", "Sunset beach walks", "Secluded bays"],
    coordinates: "2.7904° N, 104.1654° E",
  },
  {
    id: "singapore",
    city: "Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    image: "/images/travel/singapore.jpg",
    activity: "🏙️",
    activityLabel: "City Exploring",
    description: "A futuristic skyline seamlessly blended with lush tropical gardens and world-class street food.",
    highlights: ["Gardens by the Bay", "Hawker center feasts", "Marina skyline"],
    coordinates: "1.3521° N, 103.8198° E",
  },
  {
    id: "warsaw",
    city: "Warsaw",
    country: "Poland",
    flag: "🇵🇱",
    image: "/images/travel/warsaw.jpg",
    activity: "🚶",
    activityLabel: "Walking the Old Town",
    description: "A resilient city blending meticulously restored history with vibrant modern urban life.",
    highlights: ["Old Town Market Place", "Vistula River boulevards", "Fryderyk Chopin museum"],
    coordinates: "52.2297° N, 21.0122° E",
  },
  {
    id: "krakow",
    city: "Kraków",
    country: "Poland",
    flag: "🇵🇱",
    image: "/images/travel/krakow.jpg",
    activity: "🏰",
    activityLabel: "Historic Sites",
    description: "Cobblestone streets, royal castle towers, and century-old cafes steeped in rich medieval history.",
    highlights: ["Wawel Royal Castle", "Main Square (Rynek Główny)", "Kazimierz district"],
    coordinates: "50.0647° N, 19.9450° E",
  },
  {
    id: "budapest",
    city: "Budapest",
    country: "Hungary",
    flag: "🇭🇺",
    image: "/images/travel/budapest.jpg",
    activity: "♨️",
    activityLabel: "Thermal Baths",
    description: "The Pearl of the Danube with grand architecture, historic thermal baths, and legendary ruin bars.",
    highlights: ["Széchenyi Thermal Baths", "Parliament illumination", "Fisherman's Bastion"],
    coordinates: "47.4979° N, 19.0402° E",
  },
  {
    id: "prague",
    city: "Prague",
    country: "Czech Republic",
    flag: "🇨🇿",
    image: "/images/travel/prague.jpg",
    activity: "🍺",
    activityLabel: "Beer & Culture",
    description: "The City of a Hundred Spires — gothic bridges, red rooftop views, and bohemian atmosphere.",
    highlights: ["Charles Bridge at dawn", "Prague Castle", "Historic breweries"],
    coordinates: "50.0755° N, 14.4378° E",
  },
  {
    id: "frankfurt",
    city: "Frankfurt",
    country: "Germany",
    flag: "🇩🇪",
    image: "/images/travel/frankfurt.jpg",
    activity: "🏙️",
    activityLabel: "Skyline & Culture",
    description: "A dynamic contrast of modern financial skyscrapers and charming traditional timber-framed Römerberg buildings.",
    highlights: ["Römerberg Square", "Main River promenade", "Museums Riverbank"],
    coordinates: "50.1109° N, 8.6821° E",
  },
  {
    id: "cologne",
    city: "Cologne",
    country: "Germany",
    flag: "🇩🇪",
    image: "/images/travel/cologne.jpg",
    activity: "⛪",
    activityLabel: "Gothic Architecture",
    description: "Home to the awe-inspiring twin-spired Cologne Cathedral and vibrant Rhine-side culture.",
    highlights: ["Cologne Cathedral", "Hohenzollern Bridge", "Belgian Quarter"],
    coordinates: "50.9375° N, 6.9603° E",
  },
  {
    id: "barcelona",
    city: "Barcelona",
    country: "Spain",
    flag: "🇪🇸",
    image: "/images/travel/barcelona.jpg",
    activity: "🏖️",
    activityLabel: "Architecture & Coast",
    description: "Gaudí's surreal architectural masterpieces meet Mediterranean sea breezes and lively tapas culture.",
    highlights: ["Sagrada Família", "Park Güell", "Gothic Quarter alleys"],
    coordinates: "41.3879° N, 2.1699° E",
  },
  {
    id: "pamplona",
    city: "Pamplona",
    country: "Spain",
    flag: "🇪🇸",
    image: "/images/travel/pamplona.jpg",
    activity: "🐂",
    activityLabel: "Historic Citadel",
    description: "Famous for the historic running of the bulls, rich Basque gastronomy, and ancient city ramparts.",
    highlights: ["Plaza del Castillo", "Citadel Park", "Calle Estafeta"],
    coordinates: "42.8125° N, 1.6458° W",
  },
  {
    id: "san-sebastian",
    city: "San Sebastián",
    country: "Spain",
    flag: "🇪🇸",
    image: "/images/travel/san-sebastian.jpg",
    activity: "🍷",
    activityLabel: "Pintxos & Beaches",
    description: "A coastal paradise famed for La Concha bay and world-renowned pintxos bar hopping in the Old Town.",
    highlights: ["La Concha Beach", "Parte Vieja pintxos", "Monte Igueldo view"],
    coordinates: "43.3183° N, 1.9812° W",
  },
  {
    id: "vienna",
    city: "Vienna",
    country: "Austria",
    flag: "🇦🇹",
    image: "/images/travel/vienna.jpg",
    activity: "🎻",
    activityLabel: "Imperial Palaces",
    description: "Grand imperial palaces, classical music history, and elegant century-old coffeehouse culture.",
    highlights: ["Schönbrunn Palace", "St. Stephen's Cathedral", "Traditional coffeehouses"],
    coordinates: "48.2082° N, 16.3738° E",
  },
  {
    id: "bratislava",
    city: "Bratislava",
    country: "Slovakia",
    flag: "🇸🇰",
    image: "/images/travel/bratislava.jpg",
    activity: "🏰",
    activityLabel: "Danube Castle",
    description: "A charming capital dominated by Bratislava Castle overlooking the Danube and pedestrian-only Old Town.",
    highlights: ["Bratislava Castle", "Most SNP UFO tower", "Old Town hall square"],
    coordinates: "48.1486° N, 17.1077° E",
  },
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    image: "/images/travel/london.jpg",
    activity: "🎡",
    activityLabel: "Global Metropolis",
    description: "Iconic landmarks, world-class theatre in the West End, expansive Royal Parks, and endless neighborhood discoveries.",
    highlights: ["Thames river walk", "Covent Garden & West End", "Hyde Park strolling"],
    coordinates: "51.5074° N, 0.1278° W",
  },
  {
    id: "bali",
    city: "Bali",
    country: "Indonesia",
    flag: "🇮🇩",
    image: "/images/travel/bali.jpg",
    activity: "🌴",
    activityLabel: "Island Life",
    description: "Lush emerald rice terraces, sacred sea temples, world-class surfing, and serene tropical atmosphere.",
    highlights: ["Ubud rice terraces", "Uluwatu cliff sunset", "Beachside retreats"],
    coordinates: "8.3405° S, 115.0920° E",
  },
];
