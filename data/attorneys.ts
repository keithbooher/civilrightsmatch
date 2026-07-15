export interface Attorney {
  id: string;
  slug: string;
  name: string;
  firm: string;
  city: string;
  state: string; // slug like "texas"
  stateDisplay: string;
  phone: string;
  email: string;
  website: string;
  bio: string;
  specialties: string[];
  featured: boolean;
  freeConsultation: boolean;
  contingency: boolean;
  rating: number;
  reviewCount: number;
}

export const attorneys: Attorney[] = [
  // California
  {
    id: "atty-001",
    slug: "marcus-chen-los-angeles",
    name: "Marcus Chen",
    firm: "Chen Civil Rights Law Group",
    city: "Los Angeles",
    state: "california",
    stateDisplay: "California",
    phone: "(213) 555-0142",
    email: "mchen@chencrlaw.com",
    website: "https://chencrlaw.com",
    bio: "Marcus Chen has spent over 15 years fighting for victims of police misconduct and civil rights violations in Southern California. A former public defender, he brings deep knowledge of criminal procedure and constitutional law to every case. His firm has recovered over $12 million in settlements and verdicts for clients whose rights were violated by law enforcement.",
    specialties: ["Police Brutality", "Wrongful Arrest", "§1983 Claims", "Excessive Force"],
    featured: true,
    freeConsultation: true,
    contingency: true,
    rating: 4.9,
    reviewCount: 87,
  },
  {
    id: "atty-002",
    slug: "diana-reyes-san-francisco",
    name: "Diana Reyes",
    firm: "Reyes & Associates",
    city: "San Francisco",
    state: "california",
    stateDisplay: "California",
    phone: "(415) 555-0278",
    email: "dreyes@reyeslaw.com",
    website: "https://reyeslaw.com",
    bio: "Diana Reyes is a passionate civil rights advocate based in the Bay Area. She has successfully litigated cases involving unlawful searches, racial profiling, and First Amendment violations. Diana works exclusively on contingency, meaning her clients pay nothing unless she wins.",
    specialties: ["Unlawful Search & Seizure", "Racial Profiling", "First Amendment", "False Imprisonment"],
    featured: false,
    freeConsultation: true,
    contingency: true,
    rating: 4.7,
    reviewCount: 52,
  },
  {
    id: "atty-003",
    slug: "james-okafor-oakland",
    name: "James Okafor",
    firm: "Okafor Law Firm",
    city: "Oakland",
    state: "california",
    stateDisplay: "California",
    phone: "(510) 555-0391",
    email: "jokafor@okaforlaw.com",
    website: "https://okaforlaw.com",
    bio: "James Okafor is an Oakland-based civil rights attorney with a focus on systemic police reform litigation. He has brought class action suits against municipal police departments and has been recognized by the ACLU for his dedication to civil liberties. James is a member of the National Police Accountability Project.",
    specialties: ["§1983 Claims", "Wrongful Death", "Police Brutality", "Civil Rights Class Actions"],
    featured: true,
    freeConsultation: true,
    contingency: true,
    rating: 4.8,
    reviewCount: 61,
  },
  // Texas
  {
    id: "atty-004",
    slug: "sarah-whitfield-houston",
    name: "Sarah Whitfield",
    firm: "Whitfield Civil Rights Law",
    city: "Houston",
    state: "texas",
    stateDisplay: "Texas",
    phone: "(713) 555-0557",
    email: "swhitfield@whitfieldcrl.com",
    website: "https://whitfieldcrl.com",
    bio: "Sarah Whitfield has represented clients in Houston and across Texas for over 12 years in cases involving police misconduct, excessive force, and wrongful arrest. She is a graduate of the University of Texas School of Law and clerked for a federal judge before entering private practice. Her firm handles cases at the state and federal level.",
    specialties: ["Excessive Force", "Wrongful Arrest", "§1983 Claims", "False Imprisonment"],
    featured: true,
    freeConsultation: true,
    contingency: true,
    rating: 4.8,
    reviewCount: 74,
  },
  {
    id: "atty-005",
    slug: "roberto-garza-dallas",
    name: "Roberto Garza",
    firm: "Garza & Partners LLP",
    city: "Dallas",
    state: "texas",
    stateDisplay: "Texas",
    phone: "(214) 555-0634",
    email: "rgarza@garzapartners.com",
    website: "https://garzapartners.com",
    bio: "Roberto Garza is a bilingual civil rights attorney serving the Dallas-Fort Worth metroplex. He has extensive experience in cases involving racial profiling, unlawful traffic stops, and excessive force. Roberto is fluent in Spanish and serves both English and Spanish-speaking clients throughout North Texas.",
    specialties: ["Racial Profiling", "Traffic Stop Violations", "Excessive Force", "Unlawful Search & Seizure"],
    featured: false,
    freeConsultation: true,
    contingency: true,
    rating: 4.6,
    reviewCount: 38,
  },
  // New York
  {
    id: "atty-006",
    slug: "patricia-hayes-new-york",
    name: "Patricia Hayes",
    firm: "Hayes Civil Liberties Group",
    city: "New York",
    state: "new-york",
    stateDisplay: "New York",
    phone: "(212) 555-0712",
    email: "phayes@hayescivlib.com",
    website: "https://hayescivlib.com",
    bio: "Patricia Hayes is a nationally recognized civil rights litigator with offices in Manhattan. She has argued cases before the Second Circuit Court of Appeals and has achieved landmark rulings on police accountability. Patricia is a frequent commentator on civil rights issues and has been featured in The New York Times and on NPR.",
    specialties: ["§1983 Claims", "Police Brutality", "First Amendment", "Wrongful Death", "Racial Profiling"],
    featured: true,
    freeConsultation: false,
    contingency: true,
    rating: 5.0,
    reviewCount: 112,
  },
  {
    id: "atty-007",
    slug: "david-kim-brooklyn",
    name: "David Kim",
    firm: "Kim & Stern PLLC",
    city: "Brooklyn",
    state: "new-york",
    stateDisplay: "New York",
    phone: "(718) 555-0823",
    email: "dkim@kimsternatty.com",
    website: "https://kimsternatty.com",
    bio: "David Kim represents individuals in Brooklyn and throughout New York City who have experienced police misconduct, wrongful arrest, and civil rights abuses. He focuses on cases involving the NYPD and has a strong track record of successful outcomes both at trial and through negotiated settlements.",
    specialties: ["Wrongful Arrest", "Police Misconduct", "False Imprisonment", "Excessive Force"],
    featured: false,
    freeConsultation: true,
    contingency: true,
    rating: 4.7,
    reviewCount: 45,
  },
  // Florida
  {
    id: "atty-008",
    slug: "angela-thomas-miami",
    name: "Angela Thomas",
    firm: "Thomas Law & Civil Rights",
    city: "Miami",
    state: "florida",
    stateDisplay: "Florida",
    phone: "(305) 555-0941",
    email: "athomas@thomascivlrights.com",
    website: "https://thomascivlrights.com",
    bio: "Angela Thomas is a Miami-based civil rights attorney with deep roots in South Florida's diverse community. She handles cases involving police brutality, civil rights violations under 42 U.S.C. § 1983, and wrongful death claims against law enforcement. Angela is known for her fierce advocacy and compassionate client service.",
    specialties: ["Police Brutality", "§1983 Claims", "Wrongful Death", "Civil Rights Violations"],
    featured: true,
    freeConsultation: true,
    contingency: true,
    rating: 4.9,
    reviewCount: 68,
  },
  {
    id: "atty-009",
    slug: "michael-brown-orlando",
    name: "Michael Brown",
    firm: "Brown Civil Rights Attorneys",
    city: "Orlando",
    state: "florida",
    stateDisplay: "Florida",
    phone: "(407) 555-1024",
    email: "mbrown@browncra.com",
    website: "https://browncra.com",
    bio: "Michael Brown has been defending the civil rights of Central Florida residents for over a decade. He takes on cases involving unlawful detention, excessive force, and First Amendment violations. His firm offers free initial consultations and works on contingency for qualified civil rights matters.",
    specialties: ["Unlawful Detention", "Excessive Force", "First Amendment", "Wrongful Arrest"],
    featured: false,
    freeConsultation: true,
    contingency: true,
    rating: 4.5,
    reviewCount: 29,
  },
  // Illinois
  {
    id: "atty-010",
    slug: "lisa-washington-chicago",
    name: "Lisa Washington",
    firm: "Washington & Monroe Civil Rights",
    city: "Chicago",
    state: "illinois",
    stateDisplay: "Illinois",
    phone: "(312) 555-1156",
    email: "lwashington@wmcrlaw.com",
    website: "https://wmcrlaw.com",
    bio: "Lisa Washington is a veteran civil rights litigator based in Chicago with over 18 years of experience. She has represented victims of police torture, wrongful conviction, and systemic civil rights abuses at both the trial and appellate levels. Lisa is a member of the National Lawyers Guild and has been named a Super Lawyer for the past six years.",
    specialties: ["Police Brutality", "Wrongful Conviction", "§1983 Claims", "Excessive Force", "Wrongful Death"],
    featured: true,
    freeConsultation: true,
    contingency: true,
    rating: 5.0,
    reviewCount: 93,
  },
  {
    id: "atty-011",
    slug: "carlos-mendez-chicago",
    name: "Carlos Mendez",
    firm: "Mendez Law Office",
    city: "Chicago",
    state: "illinois",
    stateDisplay: "Illinois",
    phone: "(312) 555-1267",
    email: "cmendez@mendezlaw.com",
    website: "https://mendezlaw.com",
    bio: "Carlos Mendez focuses on civil rights cases in Chicago's Latino communities and across Cook County. He handles police misconduct claims, unlawful search cases, and discrimination matters. Carlos is bilingual in English and Spanish and has a reputation for tireless advocacy on behalf of his clients.",
    specialties: ["Police Misconduct", "Unlawful Search & Seizure", "Racial Profiling", "Discrimination"],
    featured: false,
    freeConsultation: true,
    contingency: false,
    rating: 4.6,
    reviewCount: 33,
  },
  // Georgia
  {
    id: "atty-012",
    slug: "jennifer-scott-atlanta",
    name: "Jennifer Scott",
    firm: "Scott Civil Rights Law",
    city: "Atlanta",
    state: "georgia",
    stateDisplay: "Georgia",
    phone: "(404) 555-1389",
    email: "jscott@scottcrllaw.com",
    website: "https://scottcrllaw.com",
    bio: "Jennifer Scott is Atlanta's premier civil rights attorney with a focus on police accountability and constitutional law. She has litigated high-profile cases against the Atlanta Police Department and Fulton County Sheriff's Office. Jennifer serves on the board of the Georgia ACLU and is a sought-after speaker on civil rights topics.",
    specialties: ["Police Accountability", "§1983 Claims", "Wrongful Arrest", "Constitutional Rights"],
    featured: true,
    freeConsultation: true,
    contingency: true,
    rating: 4.8,
    reviewCount: 56,
  },
  {
    id: "atty-013",
    slug: "derrick-johnson-savannah",
    name: "Derrick Johnson",
    firm: "Johnson & Reed Civil Rights",
    city: "Savannah",
    state: "georgia",
    stateDisplay: "Georgia",
    phone: "(912) 555-1472",
    email: "djohnson@jrcivilrights.com",
    website: "https://jrcivilrights.com",
    bio: "Derrick Johnson serves clients throughout Coastal Georgia in civil rights matters involving police misconduct, excessive force, and wrongful arrest. He has over a decade of experience in federal civil rights litigation and is committed to achieving justice for those who have been wronged by law enforcement.",
    specialties: ["Excessive Force", "Wrongful Arrest", "Police Misconduct", "False Imprisonment"],
    featured: false,
    freeConsultation: true,
    contingency: true,
    rating: 4.4,
    reviewCount: 21,
  },
  {
    id: "atty-014",
    slug: "rachel-kim-san-diego",
    name: "Rachel Kim",
    firm: "Kim Civil Rights & Justice",
    city: "San Diego",
    state: "california",
    stateDisplay: "California",
    phone: "(619) 555-1583",
    email: "rkim@kimcivlrights.com",
    website: "https://kimcivlrights.com",
    bio: "Rachel Kim represents victims of police misconduct, civil rights violations, and government abuse throughout San Diego County. She is a graduate of Harvard Law School and has clerked for a federal district judge. Rachel brings exceptional legal skills and unwavering dedication to every client she serves.",
    specialties: ["Police Misconduct", "§1983 Claims", "Wrongful Death", "Civil Rights Violations"],
    featured: false,
    freeConsultation: false,
    contingency: true,
    rating: 4.7,
    reviewCount: 40,
  },
  {
    id: "atty-015",
    slug: "thomas-walker-houston",
    name: "Thomas Walker",
    firm: "Walker & Associates",
    city: "Houston",
    state: "texas",
    stateDisplay: "Texas",
    phone: "(832) 555-1694",
    email: "twalker@walkerassoc.com",
    website: "https://walkerassoc.com",
    bio: "Thomas Walker is a seasoned civil rights attorney in Houston with over 20 years of experience representing victims of police brutality and civil rights abuses. He has recovered millions of dollars for his clients and is known throughout Harris County for his aggressive litigation style and deep commitment to justice.",
    specialties: ["Police Brutality", "Wrongful Death", "Excessive Force", "§1983 Claims"],
    featured: false,
    freeConsultation: true,
    contingency: true,
    rating: 4.5,
    reviewCount: 48,
  },
];

export function getAttorneysByState(stateSlug: string): Attorney[] {
  return attorneys.filter((a) => a.state === stateSlug);
}

export function getAttorneysByStateAndCity(stateSlug: string, citySlug: string): Attorney[] {
  return attorneys.filter(
    (a) =>
      a.state === stateSlug &&
      a.city.toLowerCase().replace(/\s+/g, "-") === citySlug
  );
}

export function getAttorneyBySlug(slug: string): Attorney | undefined {
  return attorneys.find((a) => a.slug === slug);
}

export function getCitiesByState(stateSlug: string): string[] {
  const stateAttorneys = getAttorneysByState(stateSlug);
  const cities = [...new Set(stateAttorneys.map((a) => a.city))];
  return cities.sort();
}

export function cityToSlug(city: string): string {
  return city.toLowerCase().replace(/\s+/g, "-");
}

export function slugToCity(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
