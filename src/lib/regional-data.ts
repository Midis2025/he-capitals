export interface RegionalSection {
  heading: string;
  eyebrow?: string;
  intro?: string;
  paragraphs?: string[];
  callout?: string;
  bullets?: string[];
  closing?: string;
}

export interface RegionalExpertise {
  title: string;
  subtitle?: string;
  description?: string;
  highlights: string[];
  sectors: string[];
  officeName: string;
  phone: string;
  telHref: string;
}

export interface RegionalPageData {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  ctaText?: string;
  sections: RegionalSection[];
  expertise: RegionalExpertise;
  formServiceValue: string;
}

export const REGIONAL_PAGES_DATA: Record<string, RegionalPageData> = {
  "investor-relations-new-york": {
    slug: "investor-relations-new-york",
    metaTitle: "Expert Investor Relations New York | HE Capital Markets",
    metaDescription:
      "Ideally located in the capital of North American finance, our New York based team have access to a host of institutional investors, high net worth individuals and hedge fund managers.",
    eyebrow: "NORTH AMERICA",
    title: "Investor Relations New York",
    subtitle: "STRATEGIC COMMUNICATIONS IN NORTH AMERICA",
    heroDescription:
      "Ideally located in the capital of North American finance, our New York based team have access to a host of institutional investors, high net worth individuals and hedge fund managers around the world just waiting to be educated on your company.",
    heroImage: "/images/ny-hero-skyline.jpg",
    heroImageAlt: "Manhattan New York financial district skyline",
    ctaText: "Connect With New York",
    sections: [
      {
        heading: "LEVERAGING OPPORTUNITY FOR CLIENTS",
        eyebrow: "STRATEGIC ADVISORY",
        paragraphs: [
          "HE Capital has worked with listed companies of all sizes, across a number of constantly evolving sectors. Enhancing corporate profiles, raising reputations, and stimulating the key source of business growth investment we have an ingrained understanding of the opportunities and challenges our clients face.",
          "Always up to date with changes in the financial sector too, we identify, target and reach out to the right opportunities. From the moment you make contact with us, you are tapping into a wealth of knowledge and experience in stock-brokering, investor relations, public relations, and digital and social media campaigns.",
          "Connecting you with your most important audience, your goals become ours — and our New York team will be dedicated to achieving them.",
        ],
        callout:
          "With a strategic, multi-platform approach, we reinforce your most crucial investment relationships, establish your company with carefully positioned media posts, and grow your audience with creative, targeted campaigns across the digital communications sphere.",
      },
      {
        heading: "HIGH IMPACT MESSAGES FOR LISTED COMPANIES",
        eyebrow: "COMMUNICATIONS FRAMEWORK",
        intro:
          "Ideally located in the capital of North American finance, our New York based team have access to a host of institutional investors, high net worth individuals and hedge fund managers around the world just waiting to be educated on your company:",
        bullets: [
          "Our first crucial step is to assess your profile as it stands, and establish what is required to achieve your ambitions",
          "Building trust with key networks, our investor relations programmes begin to inspire your most important contacts",
          "Simultaneously enhancing your reputation across the sector, we apply effective public relations across the most relevant media",
          "Strategising your digital presence, we can begin to reach a targeted audience with your message",
          "Any surprises internally or elsewhere in the sector will be handled professionally and proactively by our crisis management expertise",
          "Regularly looking for ideal opportunities to put you face to face with investors, we'll work with your corporate calendar at all times",
        ],
        closing:
          "HE Capital will update you on a regular basis, with detailed reports and phone calls. Always here to discuss progress and implement your ideas, we will be your new partner in securing capital.",
      },
      {
        heading: "INSPIRING YOUR AUDIENCE WORLDWIDE",
        eyebrow: "REGIONAL EXPERTISE",
        intro:
          "Every company we work with receives an original strategy, and effective communications management. To realise your potential today, call our New York office to speak to a member of our team.",
        bullets: [
          "With other offices in Canada and Europe, we are ideally placed to expand your network of investors",
          "With a comprehensive background in stock-brokering our team have an extensive knowledge of the capital markets",
        ],
        closing:
          "HE Capital partners primarily with listed companies in North America and Europe but also reaches out to those in Asia, Australia and South America.",
      },
    ],
    expertise: {
      title: "New York Market Focus",
      subtitle: "North American Finance Network",
      description:
        "Direct access to institutional investors, high-net-worth individuals, and hedge fund managers across the North American capital markets.",
      highlights: [
        "Institutional Investors & Hedge Funds",
        "High-Net-Worth Individual Networks",
        "Stock-Brokering & Capital Markets Experience",
        "Multi-Platform Strategic Communications",
      ],
      sectors: [
        "Cannabis",
        "Mining",
        "Oil & Gas",
        "Pharmaceuticals",
        "Technology",
        "Blockchain",
      ],
      officeName: "New York",
      phone: "+1 718-578-4120",
      telHref: "tel:+17185784120",
    },
    formServiceValue: "Investor Relations - New York",
  },

  "investor-relations-frankfurt": {
    slug: "investor-relations-frankfurt",
    metaTitle: "Investor Relations Company In Frankfurt | HE Capital Markets",
    metaDescription:
      "Our Frankfurt team provide a comprehensive programme of investor relations, public relations and digital and social media designed to attract investment.",
    eyebrow: "CENTRAL EUROPE",
    title: "Investor Relations Frankfurt",
    subtitle: "YOUR COMPANY AT THE CORE OF EUROPEAN CAPITAL",
    heroDescription:
      "The experience, expertise and utilisation of high-spec technology allows us to strengthen trust, boost growth, and attract investment in central Europe. Our global clients partner with us to get results, and we are dedicated to delivering from day one.",
    heroImage: "/images/frankfurt-hero-skyline.jpg",
    heroImageAlt: "Frankfurt financial district and banking skyline",
    ctaText: "Connect With Frankfurt",
    sections: [
      {
        heading: "SPECIALISING IN MULTIPLE SECTORS",
        eyebrow: "CENTRAL EUROPEAN MARKETS",
        paragraphs: [
          "The experience, expertise and utilisation of high-spec technology allows us to strengthen trust, boost growth, and attract investment in central Europe. Our global clients partner with us to get results, and we are dedicated to delivering from day one.",
          "With a combination of strategy, foresight and creativity we help capital market companies to communicate effectively with key investors, and reach new opportunistic audiences worldwide. Along with our London office, our Frankfurt team can put your company front and centre in several growing European sectors for investment, including Cannabis.",
          "And with progressive sectors come essential, modern management and consultancy techniques and we are experts in the art of inspiring communication.",
        ],
        callout:
          "Combining effective and transparent investor relations methods with proactive public relations and advanced digital and social media communications, we raise your profile in every essential area, inspiring existing investors and new audiences alike along the way.",
      },
      {
        heading: "ORIGINAL STRATEGIES FOR EVERY CLIENT",
        eyebrow: "COMMUNICATIONS MANAGEMENT",
        intro:
          "As each company we partner with is different, our first job is to understand your goals, position, and profile both internally and within the sector as a whole. Then, we set about ensuring that no opportunity to enhance your profile is missed:",
        bullets: [
          "With clear, concise and open communication, our investor relations experts will help to inspire trust in your company at all levels",
          "Identifying the ideal publications and media institutions to get you noticed, we can implement a public relations campaign that generates intrigue",
          "Utilising digital and social platforms we will target the right people with key messages that make investors want to learn more",
          "Constantly analysing performance with analytics, we will continuously evolve your campaign for maximum impact",
          "Any news or events from your company or sector will be handled professionally and proactively, minimising damage to reputation",
          "We will consistently identify equity financing opportunities for you at sector specific roadshows, events and expos",
        ],
        closing:
          "With your HE Capital team never further away than a phone call, we'll keep you updated with weekly reports and regular telephone calls to discuss progress and answer any questions you have for us.",
      },
      {
        heading: "ENHANCING YOUR PROFILE ACROSS EUROPE",
        eyebrow: "REGIONAL SECTORS",
        intro:
          "HE Capital are a global agency, with locations across North America and Canada, as well as our European offices in London and here in Frankfurt. To realise the potential in your company, get in touch with one of our expert advisers today.",
        bullets: [
          "We specialise in investment for Cannabis, Tech, Blockchain, Mining, Oil & Gas, and Pharmaceuticals companies",
          "Whether your company are involved in products, manufacturing, equipment, or any aspect of the sector we can help",
        ],
        closing:
          "Along with our London office, our Frankfurt team can put your company front and centre in several growing European sectors for investment.",
      },
    ],
    expertise: {
      title: "Frankfurt Market Focus",
      subtitle: "Central European Capital Hub",
      description:
        "Driving growth and capital access across continental Europe, working in synergy with our London office across European growth sectors.",
      highlights: [
        "Central European Investor Networks",
        "Synergy with London Office",
        "Multi-Sector Investment Expertise",
        "High-Spec Communications & Analytics",
      ],
      sectors: [
        "Cannabis",
        "Technology",
        "Blockchain",
        "Mining",
        "Oil & Gas",
        "Pharmaceuticals",
      ],
      officeName: "Frankfurt",
      phone: "+1 270-7769-191",
      telHref: "tel:+12707769191",
    },
    formServiceValue: "Investor Relations - Frankfurt",
  },

  "investor-relations-london": {
    slug: "investor-relations-london",
    metaTitle: "Investor Relations Company In London | HE Capital Markets",
    metaDescription:
      "Our UK-based team have their experienced ears to the ground right now, finding the best ways to build market value before anybody else.",
    eyebrow: "UNITED KINGDOM",
    title: "Investor Relations London",
    subtitle: "AT THE HEART OF EUROPEAN INVESTMENT",
    heroDescription:
      "Our UK-based team have their experienced ears to the ground right now, finding the best ways to build market value before anybody else. With access to the most notable financial centres and forums in London, we build your presence in this key location while enhancing your reputation across sector media and digital platforms.",
    heroImage: "/images/ir-hero-london.jpg",
    heroImageAlt: "City of London financial district and modern architecture",
    ctaText: "Connect With London",
    sections: [
      {
        heading: "YOUR PARTNER IN RAISING CAPITAL",
        eyebrow: "STRATEGIC CONSULTATION",
        paragraphs: [
          "Our UK-based team have their experienced ears to the ground right now, finding the best ways to build market value before anybody else. When we partner with companies, we perform strategic consultation and financial marketing, develop brand positioning and publish targeted industry communications for each client.",
          "We dedicate ourselves to changing the way institutional investors, hedge fund managers and high-net-worth individuals perceive our clients and engage with their company.",
          "With access to the most notable financial centres and forums in London, we can build your presence in this key location while enhancing your reputation across sector media and digital platforms.",
        ],
        callout:
          "We show investors the opportunity in your company while educating you on the profile of the targeted individuals, companies and institutions we've identified. From this connection, we continuously nurture the interest generated across your sector.",
      },
      {
        heading: "LONDON INVESTOR RELATIONS SPECIALISTS",
        eyebrow: "SPECIALIST SECTOR OUTREACH",
        intro:
          "We have already helped many companies in the growing European cannabis market to attract the capital they need to grow. Also specialising in mining, oil and gas, pharmaceuticals, tech and blockchain, HE Capital secure investment worldwide:",
        bullets: [
          "Careful and transparent investor relations programmes prove to your investors that your company is forward-thinking and dedicated to earning their trust",
          "With key media contacts close at hand, public relations campaigns make you a relevant, notable and ultimately unforgettable opportunity",
          "Securing your presence across digital and social platforms, all of your external communications will be designed to achieve maximum impact",
          "With strategic equity financing, we will put you face-to-face with a network of people ready to engage with your company",
          "With your sector inevitably evolving, we'll deal with any crisis news of regulatory change in a timely, articulate manner",
          "Everything we do is tailored to your company, your goals and increasing your value",
        ],
        closing:
          "Throughout our partnership with you, we'll be in touch on a regular basis with phone calls, emails and and the information you need to be sure that we're managing your profile professionally, progressively and exceptionally.",
      },
      {
        heading: "ENHANCING VALUE FROM THE UK CAPITAL",
        eyebrow: "CAPITAL SECURED",
        intro:
          "HE Capital also has offices in New York, Vancouver, Toronto and Frankfurt. We partner primarily with listed companies in North America and Europe but also reach out to those in Asia, Australia and South America.",
        bullets: [
          "Throughout each specialist sector, we have a London network of incredible potential for all our clients",
          "With extensive experience in London stock brokering, we know how to secure capital for all our clients",
        ],
        closing:
          "To realise the potential in your company and build market value from London, speak to our UK-based team today.",
      },
    ],
    expertise: {
      title: "London Market Focus",
      subtitle: "UK Capital & Specialist Sectors",
      description:
        "Unmatched expertise in London stock brokering, connecting clients with notable financial centres, institutional investors, and European growth markets.",
      highlights: [
        "London Stock Brokering Experience",
        "European Cannabis Market Leadership",
        "Notable Financial Centres & Forums Access",
        "Direct Institutional & Private Equity Outreach",
      ],
      sectors: [
        "Cannabis",
        "Mining",
        "Oil & Gas",
        "Pharmaceuticals",
        "Technology",
        "Blockchain",
      ],
      officeName: "London",
      phone: "+44 207 096 0125",
      telHref: "tel:+442070960125",
    },
    formServiceValue: "Investor Relations - London",
  },

  "investor-relations-vancouver": {
    slug: "investor-relations-vancouver",
    metaTitle: "Specialist Investor Relations Vancouver | HE Capital Markets",
    metaDescription:
      "HE Capital is a full service investor relations specialist, providing communications programmes and consultancy for listed companied from our offices in Vancouver.",
    eyebrow: "WESTERN CANADA",
    title: "Investor Relations Vancouver",
    subtitle: "CAPITAL KNOW HOW IN WESTERN CANADA",
    heroDescription:
      "Wholeheartedly passionate about investor relations, we believe that every company keen to make a difference needs regular, transparent and strategic communications strategies to succeed. Our Vancouver based team provide a full service investor relations consultancy for companies around the world, including those with Canadian listings specifically.",
    heroImage: "/images/vancouver-hero-skyline.jpg",
    heroImageAlt: "Vancouver waterfront and coastal mountain skyline",
    ctaText: "Connect With Vancouver",
    sections: [
      {
        heading: "DRIVING VALUE BY BUILDING TRUST",
        eyebrow: "CANADIAN CAPITAL MARKETS",
        paragraphs: [
          "Wholeheartedly passionate about investor relations, we believe that every company keen to make a difference needs regular, transparent and strategic communications strategies to succeed. Our Vancouver based team provide a full service investor relations consultancy for companies around the world, including those with Canadian listings specifically.",
          "We specialise in a number of progressive, growing sectors, reinforcing crucial relationships by rejuvenating communications strategies and promoting value.",
          "When combined with our comprehensive suite of modern communications services, we deliver strategic corporate messages, with high impact, to key targets across a range of media and digital platforms.",
        ],
        callout:
          "Working towards your goals and aware of your responsibilities and principles, we ensure a proactive and meticulously managed communications solution for your company. With the utmost in professionalism and expertise combined, we'll be dedicated to inspiring investment.",
      },
      {
        heading: "VANCOUVER INVESTOR RELATIONS EXPERTS",
        eyebrow: "PROGRESSIVE SECTOR STRATEGIES",
        intro:
          "Just like your company, the strategy we develop will be original, eye-catching, and unforgettable. Identifying the right high net worth individuals to target, we'll drive your brand and corporate message into the minds of investors worldwide:",
        bullets: [
          "A thorough audit of your communications and internal goals will show us where you are in your sector right now",
          "Professional investor relations strategies will enhance your appeal and help to secure your most crucial sources of capital",
          "Creative and strategic public relations messages, published across relevant channels, will make your name prominent in the right places",
          "A comprehensive digital and social media campaign will be targeted at key individuals and potentially reach an entire new audience",
          "With crisis management always close at hand we'll guide any unforeseen events towards a positive outcome in the eyes of investors",
          "If equity financing opportunities appear, we'll place you right in front of crucial targets for investment",
        ],
        closing:
          "You'll never be further than a phone call away from your progress at any time. We'll call you regularly and provide detailed reports that show you your campaign, and its growing positive impact on your company.",
      },
      {
        heading: "TAILORED STRATEGIES FOR ENHANCING VALUE",
        eyebrow: "CANADIAN LISTINGS FOCUS",
        intro:
          "You can also find HE Capital in Toronto, New York, and London and Frankfurt in Europe. We have a global presence, to give our clients the worldwide appeal they need to grow.",
        bullets: [
          "HE Capital specialise in a number of sectors, including Cannabis, Mining, and Oil & Gas",
          "With extensive knowledge of the Canadian markets, we have a network of investor opportunities at hand for each client",
        ],
        closing:
          "Our Vancouver based team provide a full service investor relations consultancy for companies around the world, including those with Canadian listings specifically.",
      },
    ],
    expertise: {
      title: "Vancouver Market Focus",
      subtitle: "Western Canada & Canadian Listings",
      description:
        "Specialist investor relations consultancy and capital knowledge for Canadian listings (TSX, TSXV, CSE) and natural resource leaders.",
      highlights: [
        "Canadian Listings Consultancy",
        "Resource & Growth Sectors (Mining, Oil & Gas, Cannabis)",
        "High-Net-Worth Investor Targeting",
        "Transparent, Full-Service Communications",
      ],
      sectors: [
        "Cannabis",
        "Mining",
        "Oil & Gas",
        "Technology",
        "Pharmaceuticals",
        "Blockchain",
      ],
      officeName: "Vancouver",
      phone: "+1 604-288-2651",
      telHref: "tel:+16042882651",
    },
    formServiceValue: "Investor Relations - Vancouver",
  },
};
