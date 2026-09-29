// ================================================================
// Cyndy Consultancy — Study Abroad Service Directory DATA
// Structured from Master_Study_Abroad_Service_Directory.pdf
// ================================================================

const FLAG_MAP = {
  "UK": "gb",
  "UK / Commonwealth": "gb",
  "Europe": "eu",
  "Australia": "au",
  "Germany": "de",
  "USA": "us",
  "Canada": "ca",
  "Ireland": "ie",
  "Malaysia": "my",
  "Hungary": "hu",
  "Sweden": "se",
  "Türkiye": "tr",
  "China": "cn",
  "Japan": "jp",
  "France": "fr",
  "Romania": "ro",
  "Brazil": "br",
  "Africa / Partner Universities": "un",
  "New Zealand": "nz",
  "Poland": "pl",
  "Austria": "at",
  "Italy": "it",
  "Finland": "fi",
  "Portugal": "pt",
  "Netherlands": "nl",
  "Spain": "es",
  "Belgium": "be",
  "Norway": "no",
  "Denmark": "dk",
  "Czech Republic": "cz",
  "Lithuania": "lt",
  "Latvia": "lv",
  "Estonia": "ee",
  "Cyprus / Northern Cyprus": "cy",
  "South Korea": "kr",
  "India": "in",
  "UAE": "ae",
  "Kazakhstan": "kz",
  "Global": "globe",
  "Canada / USA": "ca",
  "USA / Canada": "us"
};

// Service-type to CSS class mapping
function serviceClass(type) {
  const t = type.toLowerCase();
  if (t.includes("full scholarship")) return "scholarship";
  if (t.includes("admission + scholarship") || t.includes("admission +")) return "admission";
  if (t.includes("full application")) return "application";
  if (t.includes("consultation")) return "consultation";
  if (t.includes("sop") || t.includes("cv only")) return "document";
  if (t.includes("document")) return "document";
  if (t.includes("visa")) return "visa";
  if (t.includes("interview")) return "interview";
  if (t.includes("post-admission") || t.includes("post admission")) return "post";
  if (t.includes("full package")) return "package";
  if (t.includes("research")) return "research";
  if (t.includes("credential")) return "credential";
  if (t.includes("cas") || t.includes("i-20")) return "document";
  if (t.includes("financial")) return "document";
  return "application";
}

// Degree level to CSS class
function levelClass(level) {
  const l = level.toLowerCase();
  if (l === "master's" || l === "master's / professional" || l === "postgraduate") return "masters";
  if (l === "ug") return "ug";
  if (l === "pre-ug" || l === "pre-master's") return "other";
  return "both";
}

// ---- CATEGORIES ----

const CATEGORIES = [
  {
    id: "scholarships",
    title: "Fully Funded Scholarships",
    icon: "🎓",
    iconBg: "linear-gradient(135deg,rgba(108,99,255,.2),rgba(167,139,250,.2))",
    items: [
      { country:"UK", level:"Master's", name:"Chevening Scholarship", deadline:"Annual (Aug 4 – Oct 6)", service:"Full Scholarship Package", notes:"Government / fully funded scholarship application", price:"[Insert Price]" },
      { country:"UK / Commonwealth", level:"Master's", name:"Commonwealth Master's Scholarships", deadline:"Annual (Sep 8 – Oct 20)", service:"Full Scholarship Package", notes:"Commonwealth funding; eligibility varies by country", price:"[Insert Price]" },
      { country:"UK / Commonwealth", level:"Master's", name:"Commonwealth Shared Scholarships", deadline:"Annual (Nov – Dec)", service:"Full Scholarship Package", notes:"Participating UK courses/universities", price:"[Insert Price]" },
      { country:"Europe", level:"Master's", name:"Erasmus Mundus Joint Masters Scholarships", deadline:"Annual (Oct – Jan 15)", service:"Full Scholarship Package", notes:"Programme-specific consortium applications", price:"[Insert Price]" },
      { country:"Australia", level:"Master's", name:"Australia Awards Scholarships", deadline:"Annual (Feb 1 – April 30)", service:"Full Scholarship Package", notes:"Country eligibility and priority fields apply", price:"[Insert Price]" },
      { country:"Germany", level:"Master's", name:"DAAD Scholarships", deadline:"Annual (Sep – Nov)", service:"Full Scholarship Package", notes:"Multiple DAAD funding schemes", price:"[Insert Price]" },
      { country:"Germany", level:"Master's", name:"DAAD Helmut-Schmidt Programme", deadline:"Annual (June 1 – July 31)", service:"Full Scholarship Package", notes:"Public policy / governance related Master's routes", price:"[Insert Price]" },
      { country:"Germany", level:"Master's", name:"DAAD EPOS", deadline:"Annual (Aug 31 – Nov 30)", service:"Full Scholarship Package", notes:"Global Health / governance related Master's routes", price:"[Insert Price]" },
      { country:"USA", level:"Master's", name:"Fulbright Foreign Student Program", deadline:"Annual (Feb – Oct)", service:"Full Scholarship Package", notes:"Country-specific process", price:"[Insert Price]" },
      { country:"Canada", level:"Master's / Professional", name:"McCall MacBain Scholarship – McGill University", deadline:"Annual (June – Sep 24)", service:"Full Scholarship Package", notes:"Scholarship plus eligible McGill graduate/professional admission", price:"[Insert Price]" },
      { country:"Ireland", level:"Master's", name:"Ireland Fellows Programme", deadline:"Annual (July – Sep 28)", service:"Full Scholarship Package", notes:"Country/programme eligibility applies", price:"[Insert Price]" },
      { country:"Malaysia", level:"Master's", name:"Malaysian Technical Cooperation Programme (MTCP) Scholarship", deadline:"Annual (May – June)", service:"Full Scholarship Package", notes:"Eligible postgraduate programmes", price:"[Insert Price]" },
      { country:"Hungary", level:"UG / Master's", name:"Stipendium Hungaricum", deadline:"Annual (Nov 15 – Jan 15)", service:"Full Scholarship Package", notes:"Sending-partner and programme rules apply", price:"[Insert Price]" },
      { country:"Sweden", level:"Master's", name:"Swedish Institute Scholarship for Global Professionals (SI)", deadline:"Annual (Feb 10 – Feb 26)", service:"Full Scholarship Package", notes:"Eligible countries/programmes and work/leadership criteria", price:"[Insert Price]" },
      { country:"Türkiye", level:"UG / Master's", name:"Türkiye Scholarships / Türkiye Bursları", deadline:"Annual (Jan 10 – Feb 20)", service:"Full Scholarship Package", notes:"Government scholarship and university placement route", price:"[Insert Price]" },
      { country:"China", level:"UG / Master's", name:"Chinese Government Scholarship (CSC)", deadline:"Annual (Dec – March)", service:"Full Scholarship Package", notes:"Embassy, university and CSC routes", price:"[Insert Price]" },
      { country:"China", level:"UG / Master's", name:"CSC Type A Scholarship Route", deadline:"Annual (Jan – March)", service:"Full Scholarship Package", notes:"Bilateral/dispatching-authority route where applicable", price:"[Insert Price]" },
      { country:"China", level:"UG / Master's", name:"CSC Type B / Chinese University Program Route", deadline:"Annual (Dec – March)", service:"Full Scholarship Package", notes:"University-linked CSC application route", price:"[Insert Price]" },
      { country:"Japan", level:"UG / Master's", name:"MEXT Scholarship", deadline:"Annual (Embassy: May / Uni: Dec)", service:"Full Scholarship Package", notes:"Embassy and university recommendation routes", price:"[Insert Price]" },
      { country:"France", level:"Master's", name:"Eiffel Excellence Scholarship", deadline:"Annual (Sep – Jan 10)", service:"Full Scholarship Package", notes:"Institution-led nomination route", price:"[Insert Price]" },
      { country:"Romania", level:"UG / Master's", name:"Romanian Government Scholarship", deadline:"Annual (Dec 15 – March 16)", service:"Full Scholarship Package", notes:"Government scholarship; programme/language conditions vary", price:"[Insert Price]" },
      { country:"Romania", level:"UG / Master's", name:"Transilvania Academica Scholarship", deadline:"Annual (Feb 15 – April 27)", service:"Full Scholarship Package", notes:"Transilvania University scholarship route", price:"[Insert Price]" },
      { country:"Brazil", level:"Master's", name:"GCUB-MOB International Mobility Program", deadline:"Annual (May 10 – July 14)", service:"Full Scholarship Package", notes:"Brazilian university mobility/scholarship route", price:"[Insert Price]" },
    ]
  },
  {
    id: "uni-scholarships",
    title: "University Merit & Admission Scholarships",
    icon: "🏅",
    iconBg: "linear-gradient(135deg,rgba(251,113,133,.2),rgba(244,114,182,.2))",
    items: [
      { country:"Africa / Partner Universities", level:"UG / Master's", name:"Mastercard Foundation Scholars Program", deadline:"Annual (Sep – Jan)", service:"Admission + Scholarship", notes:"Partner-university opportunities; institution-specific", price:"[Insert Price]" },
      { country:"UK", level:"UG / Master's", name:"GREAT Scholarships / UK University Scholarship Routes", deadline:"Annual (Feb – May)", service:"Admission + Scholarship", notes:"Availability varies by university, country and cycle", price:"[Insert Price]" },
      { country:"UK", level:"UG / Master's", name:"Vice-Chancellor / Chancellor Scholarships", deadline:"Cycle Specific (Jan – May)", service:"Admission + Scholarship", notes:"University-specific merit awards", price:"[Insert Price]" },
      { country:"UK", level:"UG / Master's", name:"International Excellence / Global Excellence Scholarships", deadline:"Cycle Specific (Feb – June)", service:"Admission + Scholarship", notes:"University-specific partial/full awards", price:"[Insert Price]" },
      { country:"USA", level:"UG / Master's", name:"University Merit Scholarships", deadline:"Fall: Dec 1 | Spring: Oct 1", service:"Admission + Scholarship", notes:"Institution-specific merit funding", price:"[Insert Price]" },
      { country:"USA", level:"Master's", name:"Graduate Teaching Assistantships (TA/GTA)", deadline:"Fall: Dec 15 | Spring: Oct 15", service:"Admission + Scholarship", notes:"Department funding; duties/criteria vary", price:"[Insert Price]" },
      { country:"USA", level:"Master's", name:"Graduate Research Assistantships (RA/GRA)", deadline:"Fall: Dec 15 | Spring: Oct 15", service:"Admission + Scholarship", notes:"Research/department funding; faculty fit may matter", price:"[Insert Price]" },
      { country:"USA", level:"Master's", name:"Graduate Assistantships (GA)", deadline:"Fall: Dec 15 | Spring: Oct 15", service:"Admission + Scholarship", notes:"Department or administrative assistantships", price:"[Insert Price]" },
      { country:"USA", level:"Master's", name:"Tuition Waivers / Fellowships", deadline:"Fall: Dec 15 | Spring: Oct 15", service:"Admission + Scholarship", notes:"Institution and department specific", price:"[Insert Price]" },
      { country:"Canada", level:"UG", name:"Entrance Scholarships", deadline:"Fall: Feb 1 | Winter: Oct 1", service:"Admission + Scholarship", notes:"Automatic or application-based", price:"[Insert Price]" },
      { country:"Canada", level:"Master's", name:"Graduate Funding / Fellowships", deadline:"Annual (Dec 1 – Jan 15)", service:"Admission + Scholarship", notes:"Department, supervisor or university funding", price:"[Insert Price]" },
      { country:"Ireland", level:"UG / Master's", name:"University Merit / International Scholarships", deadline:"Cycle Specific (Jan – May)", service:"Admission + Scholarship", notes:"Institution-specific", price:"[Insert Price]" },
      { country:"Australia", level:"UG / Master's", name:"International Merit Scholarships", deadline:"Cycle Specific (Nov – March)", service:"Admission + Scholarship", notes:"Institution-specific", price:"[Insert Price]" },
      { country:"New Zealand", level:"UG / Master's", name:"International Student Scholarships", deadline:"Cycle Specific (Nov – March)", service:"Admission + Scholarship", notes:"Institution-specific", price:"[Insert Price]" },
      { country:"Europe", level:"UG / Master's", name:"University Merit Scholarships / Tuition Waivers", deadline:"Cycle Specific (Jan – April)", service:"Admission + Scholarship", notes:"Institution-specific", price:"[Insert Price]" },
    ]
  },
  {
    id: "direct-admission",
    title: "Direct University Applications",
    icon: "🏛️",
    iconBg: "linear-gradient(135deg,rgba(56,189,248,.2),rgba(45,212,191,.2))",
    items: [
      // USA
      { country:"USA", level:"UG / Master's", name:"Albertus Magnus College", deadline:"Fall: Aug 1 | Spring: Dec 1", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      { country:"USA", level:"UG / Master's", name:"Barry University", deadline:"Fall: July 1 | Spring: Nov 1", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      // Canada
      { country:"Canada", level:"UG / Postgraduate", name:"Humber Polytechnic / Humber College", deadline:"Fall: Feb 1 | Winter: Oct 1", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      // UK
      { country:"UK", level:"UG / Master's", name:"University of Glasgow", deadline:"Fall: June 30 | Winter: Oct 31", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      { country:"UK", level:"UG / Master's", name:"University of Roehampton", deadline:"Rolling (Intake Specific)", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      // Ireland
      { country:"Ireland", level:"UG / Master's", name:"National College of Ireland", deadline:"Fall: July 15 | Spring: Nov 30", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      // Poland
      { country:"Poland", level:"UG / Master's", name:"Poznań University of Economics and Business", deadline:"Summer: July 15 | Winter: Dec 15", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      { country:"Poland", level:"UG / Master's", name:"University of Warsaw", deadline:"Summer: July 10 | Winter: Dec 10", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Poland", level:"UG / Master's", name:"Warsaw University of Technology", deadline:"Summer: July 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Poland", level:"UG / Master's", name:"Jagiellonian University", deadline:"Summer: July 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Poland", level:"UG / Master's", name:"Wrocław University of Science and Technology", deadline:"Summer: July 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Poland", level:"UG / Master's", name:"University of Wrocław", deadline:"Summer: June 30", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Poland", level:"UG / Master's", name:"AGH University of Krakow", deadline:"Summer: July 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Poland", level:"UG / Master's", name:"Łódź University of Technology", deadline:"Summer: July 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Poland", level:"UG / Master's", name:"University of Łódź", deadline:"Summer: July 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Poland", level:"UG / Master's", name:"Gdańsk University of Technology", deadline:"Summer: July 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Poland", level:"UG / Master's", name:"Vistula University", deadline:"Summer: Aug 31 | Winter: Jan 31", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      // Hungary
      { country:"Hungary", level:"UG / Master's", name:"University of Miskolc", deadline:"Summer: April 30", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      // Austria
      { country:"Austria", level:"Master's", name:"Central European University", deadline:"Scholarship: Feb 1 | Self-Fund: Apr 15", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      // Italy
      { country:"Italy", level:"UG / Master's", name:"Sapienza University of Rome", deadline:"Pre-eval: Nov – April 30", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Messina", deadline:"Pre-eval: Dec – March 31", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Pisa", deadline:"Pre-eval: Dec – Feb 28", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Camerino", deadline:"Pre-eval: Jan – March 31", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Cassino and Southern Lazio", deadline:"Pre-eval: Jan – April 30", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Genoa", deadline:"Pre-eval: Dec – March 29", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Palermo", deadline:"Pre-eval: Jan – April 30", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Pavia", deadline:"Pre-eval: Nov – March 15", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Padua (Università di Padova)", deadline:"Pre-eval: Nov 2 – Feb 2", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Eastern Piedmont (UniUPO)", deadline:"Pre-eval: Jan – April 30", service:"Full Application", notes:"Direct admission; scholarship screening where available", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Bologna", deadline:"Intake Specific (Feb – April)", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Turin", deadline:"Pre-eval: Jan – April 30", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Milan", deadline:"Intake Specific (Jan – April)", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Milano-Bicocca", deadline:"Pre-eval: Jan – May 20", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Florence", deadline:"Pre-eval: Jan – April 30", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Siena", deadline:"Pre-eval: Nov – April 30", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Parma", deadline:"Pre-eval: Jan – April 30", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Ferrara", deadline:"Pre-eval: Jan – April 30", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Trento", deadline:"Pre-eval: Dec – March 8", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Trieste", deadline:"Pre-eval: Jan – April 30", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Verona", deadline:"Pre-eval: Dec – April 30", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"Ca' Foscari University of Venice", deadline:"Pre-eval: Dec – May 2", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Naples Federico II", deadline:"Pre-eval: Jan – March 31", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Bari Aldo Moro", deadline:"Pre-eval: Jan – April 30", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Calabria", deadline:"Pre-eval: Jan – May 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Salerno", deadline:"Pre-eval: Jan – April 30", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Catania", deadline:"Pre-eval: Jan – April 30", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Brescia", deadline:"Pre-eval: Jan – March 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Bergamo", deadline:"Pre-eval: Feb – April 30", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"Politecnico di Milano", deadline:"Call 1: Sep – Nov | Call 2: Jan – Mar", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"Politecnico di Torino", deadline:"Call 1: Dec – Feb | Call 2: Mar – Apr", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Modena and Reggio Emilia", deadline:"Pre-eval: Jan – April 30", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Macerata", deadline:"Pre-eval: Nov – March 31", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of Perugia", deadline:"Pre-eval: Jan – April 30", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"University of L'Aquila", deadline:"Pre-eval: Jan – April 30", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      // Finland
      { country:"Finland", level:"UG / Master's", name:"University of Helsinki", deadline:"Joint App: Jan 8 – Jan 22", service:"Full Application", notes:"Direct admission + tuition scholarship/waiver screening where available", price:"[Insert Price]" },
      { country:"Finland", level:"UG / Master's", name:"Aalto University", deadline:"Joint App: Jan 8 – Jan 22", service:"Full Application", notes:"Direct admission + tuition scholarship/waiver screening where available", price:"[Insert Price]" },
      { country:"Finland", level:"UG / Master's", name:"University of Turku", deadline:"Joint App: Jan 8 – Jan 22", service:"Full Application", notes:"Direct admission + tuition scholarship/waiver screening where available", price:"[Insert Price]" },
      { country:"Finland", level:"UG / Master's", name:"Tampere University", deadline:"Joint App: Jan 8 – Jan 22", service:"Full Application", notes:"Direct admission + tuition scholarship/waiver screening where available", price:"[Insert Price]" },
      { country:"Finland", level:"UG / Master's", name:"University of Oulu", deadline:"Joint App: Jan 8 – Jan 22", service:"Full Application", notes:"Direct admission + tuition scholarship/waiver screening where available", price:"[Insert Price]" },
      { country:"Finland", level:"UG / Master's", name:"University of Eastern Finland", deadline:"Joint App: Jan 8 – Jan 22", service:"Full Application", notes:"Direct admission + tuition scholarship/waiver screening where available", price:"[Insert Price]" },
      { country:"Finland", level:"UG / Master's", name:"University of Jyväskylä", deadline:"Joint App: Jan 8 – Jan 22", service:"Full Application", notes:"Direct admission + tuition scholarship/waiver screening where available", price:"[Insert Price]" },
      { country:"Finland", level:"UG / Master's", name:"LUT University", deadline:"Joint App: Jan 8 – Jan 22", service:"Full Application", notes:"Direct admission + tuition scholarship/waiver screening where available", price:"[Insert Price]" },
      { country:"Finland", level:"UG / Master's", name:"Åbo Akademi University", deadline:"Joint App: Jan 8 – Jan 22", service:"Full Application", notes:"Direct admission + tuition scholarship/waiver screening where available", price:"[Insert Price]" },
      { country:"Finland", level:"UG / Master's", name:"Hanken School of Economics", deadline:"Joint App: Jan 8 – Jan 22", service:"Full Application", notes:"Direct admission + tuition scholarship/waiver screening where available", price:"[Insert Price]" },
      { country:"Finland", level:"UG / Master's", name:"University of Vaasa", deadline:"Joint App: Jan 8 – Jan 22", service:"Full Application", notes:"Direct admission + tuition scholarship/waiver screening where available", price:"[Insert Price]" },
      { country:"Finland", level:"UG / Master's", name:"Metropolia University of Applied Sciences", deadline:"Joint App: Jan 8 – Jan 22", service:"Full Application", notes:"Direct admission + tuition scholarship/waiver screening where available", price:"[Insert Price]" },
      { country:"Finland", level:"UG / Master's", name:"Tampere University of Applied Sciences", deadline:"Joint App: Jan 8 – Jan 22", service:"Full Application", notes:"Direct admission + tuition scholarship/waiver screening where available", price:"[Insert Price]" },
      { country:"Finland", level:"UG / Master's", name:"Turku University of Applied Sciences", deadline:"Joint App: Jan 8 – Jan 22", service:"Full Application", notes:"Direct admission + tuition scholarship/waiver screening where available", price:"[Insert Price]" },
      { country:"Finland", level:"UG / Master's", name:"Haaga-Helia University of Applied Sciences", deadline:"Joint App: Jan 8 – Jan 22", service:"Full Application", notes:"Direct admission + tuition scholarship/waiver screening where available", price:"[Insert Price]" },
      { country:"Finland", level:"UG / Master's", name:"LAB University of Applied Sciences", deadline:"Joint App: Jan 8 – Jan 22", service:"Full Application", notes:"Direct admission + tuition scholarship/waiver screening where available", price:"[Insert Price]" },
      { country:"Finland", level:"UG / Master's", name:"Arcada University of Applied Sciences", deadline:"Joint App: Jan 8 – Jan 22", service:"Full Application", notes:"Direct admission + tuition scholarship/waiver screening where available", price:"[Insert Price]" },
      // Portugal
      { country:"Portugal", level:"UG / Master's", name:"University of Porto", deadline:"Phase 1: Jan – Feb | Phase 2: Mar – May", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Portugal", level:"UG / Master's", name:"University of Lisbon", deadline:"Phase 1: Jan – Feb | Phase 2: Mar – May", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Portugal", level:"UG / Master's", name:"NOVA University Lisbon", deadline:"Phase 1: Jan – Feb | Phase 2: Mar – May", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Portugal", level:"UG / Master's", name:"University of Coimbra", deadline:"Phase 1: Jan – Feb | Phase 2: Mar – May", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Portugal", level:"UG / Master's", name:"University of Minho", deadline:"Phase 1: Jan – Feb | Phase 2: Mar – May", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Portugal", level:"UG / Master's", name:"University of Aveiro", deadline:"Phase 1: Jan – Feb | Phase 2: Mar – May", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Portugal", level:"UG / Master's", name:"ISCTE – University Institute of Lisbon", deadline:"Phase 1: Jan – Feb | Phase 2: Mar – May", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      // Germany
      { country:"Germany", level:"UG / Master's", name:"Technical University of Munich", deadline:"Winter: May 15 – July 15 | Summer: Nov 15 – Jan 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Germany", level:"UG / Master's", name:"RWTH Aachen University", deadline:"Winter: May 15 – July 15 | Summer: Nov 15 – Jan 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Germany", level:"UG / Master's", name:"University of Bonn", deadline:"Winter: May 15 – July 15 | Summer: Nov 15 – Jan 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Germany", level:"UG / Master's", name:"University of Cologne", deadline:"Winter: May 15 – July 15 | Summer: Nov 15 – Jan 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Germany", level:"UG / Master's", name:"University of Hamburg", deadline:"Winter: May 15 – July 15 | Summer: Nov 15 – Jan 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Germany", level:"UG / Master's", name:"University of Freiburg", deadline:"Winter: May 15 – July 15 | Summer: Nov 15 – Jan 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Germany", level:"UG / Master's", name:"University of Göttingen", deadline:"Winter: May 15 – July 15 | Summer: Nov 15 – Jan 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Germany", level:"UG / Master's", name:"University of Passau", deadline:"Winter: May 15 – July 15 | Summer: Nov 15 – Jan 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
      { country:"Germany", level:"UG / Master's", name:"University of Potsdam", deadline:"Winter: May 15 – July 15 | Summer: Nov 15 – Jan 15", service:"Full Application", notes:"Direct admission & scholarship guidance", price:"[Insert Price]" },
    ]
  },
  {
    id: "pathways",
    title: "Pathway Programmes",
    icon: "🛤️",
    iconBg: "linear-gradient(135deg,rgba(251,191,36,.2),rgba(251,113,133,.2))",
    items: [
      { country:"Global", level:"Pre-UG", name:"Foundation / Year Zero", deadline:"Intake Specific (Sep / Jan / May)", service:"Full Application", notes:"Academic pathway into bachelor's", price:"[Insert Price]" },
      { country:"Global", level:"UG", name:"International Year One", deadline:"Intake Specific (Sep / Jan / May)", service:"Full Application", notes:"Pathway into undergraduate study", price:"[Insert Price]" },
      { country:"Global", level:"Pre-Master's", name:"Pre-Master's Programme", deadline:"Intake Specific (Sep / Jan / May)", service:"Full Application", notes:"Academic/English preparation route", price:"[Insert Price]" },
      { country:"Global", level:"UG", name:"Top-Up Degree", deadline:"Intake Specific (Sep / Jan / May)", service:"Full Application", notes:"Often for HND/diploma holders; credit assessment applies", price:"[Insert Price]" },
      { country:"Global", level:"UG / Master's", name:"English-Language / Conditional Admission Pathway", deadline:"Intake Specific (Sep / Jan / May)", service:"Full Application", notes:"Language pathway where institution permits", price:"[Insert Price]" },
      { country:"Global", level:"UG", name:"Transfer Admission", deadline:"Intake Specific (Sep / Jan / May)", service:"Full Application", notes:"Credit transfer assessment", price:"[Insert Price]" },
      { country:"Global", level:"Postgraduate", name:"Graduate Certificate / PG Diploma", deadline:"Intake Specific (Sep / Jan / May)", service:"Full Application", notes:"Career-focused postgraduate route", price:"[Insert Price]" },
    ]
  },
  {
    id: "france-specific",
    title: "France-Specific Services",
    icon: "🇫🇷",
    iconBg: "linear-gradient(135deg,rgba(56,189,248,.2),rgba(108,99,255,.2))",
    items: [
      { country:"France", level:"UG / Master's", name:"Études en France Application", deadline:"Annual (Nov 1 – Dec 15 / Jan 15)", service:"Full Application", notes:"Campus France / Études en France file and programme application support", price:"[Insert Price]" },
      { country:"France", level:"UG / Master's", name:"Campus France Interview Preparation", deadline:"Post-Submission", service:"Interview Prep", notes:"Application/interview preparation", price:"[Insert Price]" },
      { country:"France", level:"UG / Master's", name:"France Student Visa Support", deadline:"Post-Admission", service:"Visa Support", notes:"Post-admission visa-document guidance", price:"[Insert Price]" },
    ]
  },
  {
    id: "consulting",
    title: "Consultation & Matching",
    icon: "💡",
    iconBg: "linear-gradient(135deg,rgba(45,212,191,.2),rgba(56,189,248,.2))",
    items: [
      { country:"Global", level:"UG / Master's", name:"University & Course Shortlisting", deadline:"Year-Round / Anytime", service:"Consultation", notes:"Profile, budget and destination matching", price:"[Insert Price]" },
      { country:"Global", level:"UG / Master's", name:"Scholarship Matching & Eligibility Audit", deadline:"Year-Round / Anytime", service:"Consultation", notes:"Identify suitable funding opportunities", price:"[Insert Price]" },
    ]
  },
  {
    id: "documents",
    title: "Document Services",
    icon: "📝",
    iconBg: "linear-gradient(135deg,rgba(251,191,36,.2),rgba(251,113,133,.2))",
    items: [
      { country:"Global", level:"UG / Master's", name:"SOP / Personal Statement Drafting & Editing", deadline:"Year-Round / Anytime", service:"SOP/CV Only", notes:"Programme-specific statement support", price:"[Insert Price]" },
      { country:"Global", level:"UG / Master's", name:"Academic / Professional CV Preparation", deadline:"Year-Round / Anytime", service:"SOP/CV Only", notes:"CV/resume preparation", price:"[Insert Price]" },
      { country:"Global", level:"UG / Master's", name:"Scholarship Essay Support", deadline:"Year-Round / Anytime", service:"Document Service", notes:"Scholarship-specific essay development/editing", price:"[Insert Price]" },
      { country:"Global", level:"UG / Master's", name:"Motivation Letter Support", deadline:"Year-Round / Anytime", service:"Document Service", notes:"Admission/scholarship motivation letter", price:"[Insert Price]" },
      { country:"Global", level:"UG / Master's", name:"Recommendation Letter Guidance", deadline:"Year-Round / Anytime", service:"Document Service", notes:"Recommender guidance and editing support", price:"[Insert Price]" },
      { country:"Global", level:"Master's", name:"Research Proposal Support", deadline:"Year-Round / Anytime", service:"Research Support", notes:"Research-focused applications", price:"[Insert Price]" },
      { country:"Global", level:"Master's", name:"Supervisor Search & Outreach Support", deadline:"Year-Round / Anytime", service:"Research Support", notes:"Faculty identification and outreach materials", price:"[Insert Price]" },
      { country:"Global", level:"UG / Master's", name:"Transcript / Academic Document Processing Guidance", deadline:"Year-Round / Anytime", service:"Document Support", notes:"Transcript and document submission", price:"[Insert Price]" },
      { country:"Global", level:"UG / Master's", name:"Certified Translation / Document Legalisation Guidance", deadline:"As Required", service:"Document Support", notes:"Where required by institution/country", price:"[Insert Price]" },
    ]
  },
  {
    id: "credentials",
    title: "Credential Evaluation",
    icon: "📋",
    iconBg: "linear-gradient(135deg,rgba(251,191,36,.2),rgba(45,212,191,.2))",
    items: [
      { country:"Canada / USA", level:"UG / Master's", name:"WES Credential Evaluation Support", deadline:"Year-Round / Anytime", service:"Credential Evaluation", notes:"Account, document and submission guidance", price:"[Insert Price]" },
      { country:"Canada", level:"UG / Master's", name:"ICES Credential Evaluation Support", deadline:"Year-Round / Anytime", service:"Credential Evaluation", notes:"Credential evaluation guidance", price:"[Insert Price]" },
      { country:"USA / Canada", level:"UG / Master's", name:"Other Credential Evaluation Support", deadline:"As Required", service:"Credential Evaluation", notes:"Institution-approved evaluator guidance", price:"[Insert Price]" },
    ]
  },
  {
    id: "post-offer",
    title: "Post-Offer & Visa Support",
    icon: "✈️",
    iconBg: "linear-gradient(135deg,rgba(244,114,182,.2),rgba(167,139,250,.2))",
    items: [
      { country:"UK", level:"UG / Master's", name:"CAS Support", deadline:"Post-Offer", service:"CAS Support", notes:"Deposit/document/CAS readiness", price:"[Insert Price]" },
      { country:"USA", level:"UG / Master's", name:"I-20 Support", deadline:"Post-Admission", service:"I-20 Support", notes:"Financial and university document guidance", price:"[Insert Price]" },
      { country:"Global", level:"UG / Master's", name:"Proof of Funds Guidance", deadline:"Post-Offer", service:"Financial Documentation", notes:"Country/institution-specific guidance", price:"[Insert Price]" },
      { country:"UK", level:"UG / Master's", name:"UK Student Visa Guidance", deadline:"Post-CAS", service:"Visa Only", notes:"Application/document support", price:"[Insert Price]" },
      { country:"Canada", level:"UG / Master's", name:"Canada Study Permit Guidance", deadline:"Post-Admission", service:"Visa Only", notes:"Application/document support", price:"[Insert Price]" },
      { country:"USA", level:"UG / Master's", name:"F-1 Visa Guidance & Interview Preparation", deadline:"Post-I-20", service:"Visa Only", notes:"DS-160/document/interview preparation", price:"[Insert Price]" },
      { country:"Australia", level:"UG / Master's", name:"Australia Student Visa Guidance", deadline:"Post-Admission", service:"Visa Only", notes:"Application/document support", price:"[Insert Price]" },
      { country:"Ireland", level:"UG / Master's", name:"Ireland Student Visa Guidance", deadline:"Post-Admission", service:"Visa Only", notes:"Application/document support", price:"[Insert Price]" },
      { country:"Europe", level:"UG / Master's", name:"European Student Visa Guidance", deadline:"Post-Admission", service:"Visa Only", notes:"Country-specific application support", price:"[Insert Price]" },
    ]
  },
  {
    id: "interview",
    title: "Interview Preparation",
    icon: "🎤",
    iconBg: "linear-gradient(135deg,rgba(167,139,250,.2),rgba(108,99,255,.2))",
    items: [
      { country:"Global", level:"UG / Master's", name:"Scholarship Interview Preparation", deadline:"After Shortlisting", service:"Interview Prep", notes:"Mock interviews and response preparation", price:"[Insert Price]" },
      { country:"Global", level:"UG / Master's", name:"Admission Interview Preparation", deadline:"As Required", service:"Interview Prep", notes:"Programme-specific interview support", price:"[Insert Price]" },
    ]
  },
  {
    id: "post-admission",
    title: "Post-Admission Services",
    icon: "🌍",
    iconBg: "linear-gradient(135deg,rgba(45,212,191,.2),rgba(56,189,248,.2))",
    items: [
      { country:"Global", level:"UG / Master's", name:"Pre-Departure Guidance", deadline:"After Visa", service:"Post-Admission", notes:"Travel/enrolment preparation", price:"[Insert Price]" },
      { country:"Global", level:"UG / Master's", name:"Deferral / Reapplication Support", deadline:"As Required", service:"Post-Admission", notes:"Deferral, reapplication and application-strengthening support", price:"[Insert Price]" },
    ]
  },
  {
    id: "country-packages",
    title: "Country Direct Admission Packages",
    icon: "📦",
    iconBg: "linear-gradient(135deg,rgba(108,99,255,.2),rgba(244,114,182,.2))",
    items: [
      { country:"UK", level:"UG / Master's", name:"UK Direct Admission Service", deadline:"Intake Specific (Sep / Jan)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Canada", level:"UG / Master's", name:"Canada Direct Admission Service", deadline:"Intake Specific (Sep / Jan)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"USA", level:"UG / Master's", name:"USA Direct Admission Service", deadline:"Intake Specific (Sep / Jan)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Ireland", level:"UG / Master's", name:"Ireland Direct Admission Service", deadline:"Intake Specific (Sep / Jan)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Australia", level:"UG / Master's", name:"Australia Direct Admission Service", deadline:"Intake Specific (Feb / July)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"New Zealand", level:"UG / Master's", name:"New Zealand Direct Admission Service", deadline:"Intake Specific (Feb / July)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Italy", level:"UG / Master's", name:"Italy Direct Admission Service", deadline:"Intake Specific (Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Finland", level:"UG / Master's", name:"Finland Direct Admission Service", deadline:"Intake Specific (Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Poland", level:"UG / Master's", name:"Poland Direct Admission Service", deadline:"Intake Specific (Oct / Feb)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Portugal", level:"UG / Master's", name:"Portugal Direct Admission Service", deadline:"Intake Specific (Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Germany", level:"UG / Master's", name:"Germany Direct Admission Service", deadline:"Intake Specific (Oct / April)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"France", level:"UG / Master's", name:"France Direct Admission Service", deadline:"Intake Specific (Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Hungary", level:"UG / Master's", name:"Hungary Direct Admission Service", deadline:"Intake Specific (Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Romania", level:"UG / Master's", name:"Romania Direct Admission Service", deadline:"Intake Specific (Oct)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Sweden", level:"UG / Master's", name:"Sweden Direct Admission Service", deadline:"Intake Specific (Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Netherlands", level:"UG / Master's", name:"Netherlands Direct Admission Service", deadline:"Intake Specific (Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Belgium", level:"UG / Master's", name:"Belgium Direct Admission Service", deadline:"Intake Specific (Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Norway", level:"UG / Master's", name:"Norway Direct Admission Service", deadline:"Intake Specific (Aug)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Denmark", level:"UG / Master's", name:"Denmark Direct Admission Service", deadline:"Intake Specific (Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Austria", level:"UG / Master's", name:"Austria Direct Admission Service", deadline:"Intake Specific (Oct)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Czech Republic", level:"UG / Master's", name:"Czech Republic Direct Admission Service", deadline:"Intake Specific (Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Lithuania", level:"UG / Master's", name:"Lithuania Direct Admission Service", deadline:"Intake Specific (Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Latvia", level:"UG / Master's", name:"Latvia Direct Admission Service", deadline:"Intake Specific (Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Estonia", level:"UG / Master's", name:"Estonia Direct Admission Service", deadline:"Intake Specific (Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Spain", level:"UG / Master's", name:"Spain Direct Admission Service", deadline:"Intake Specific (Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Cyprus / Northern Cyprus", level:"UG / Master's", name:"Cyprus / Northern Cyprus Direct Admission Service", deadline:"Intake Specific (Sep / Feb)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"China", level:"UG / Master's", name:"China Direct Admission Service", deadline:"Intake Specific (Sep / March)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Malaysia", level:"UG / Master's", name:"Malaysia Direct Admission Service", deadline:"Intake Specific (Sep / Feb)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Türkiye", level:"UG / Master's", name:"Türkiye Direct Admission Service", deadline:"Intake Specific (Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Japan", level:"UG / Master's", name:"Japan Direct Admission Service", deadline:"Intake Specific (April / Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"South Korea", level:"UG / Master's", name:"South Korea Direct Admission Service", deadline:"Intake Specific (March / Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"India", level:"UG / Master's", name:"India Direct Admission Service", deadline:"Intake Specific (July / Aug)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"UAE", level:"UG / Master's", name:"UAE Direct Admission Service", deadline:"Intake Specific (Sep / Jan)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
      { country:"Kazakhstan", level:"UG / Master's", name:"Kazakhstan Direct Admission Service", deadline:"Intake Specific (Sep)", service:"Full Package", notes:"University selection, application, scholarship screening and offer follow-up", price:"[Insert Price]" },
    ]
  },
];
