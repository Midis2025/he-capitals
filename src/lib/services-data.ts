export interface ServiceBullet {
  title?: string;
  text: string;
}

export interface ServiceSection {
  eyebrow: string;
  heading: string;
  paragraphs?: string[];
  intro?: string;
  bullets?: (string | ServiceBullet)[];
  closing?: string;
}

export interface ValuePillar {
  iconName: "target" | "users" | "trendingUp";
  title: string;
  description: string;
}

export interface ServicePageData {
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  ctaText: string;
  formServiceValue: string;
  sections: ServiceSection[];
  valueProposition?: {
    heading: string;
    pillars: ValuePillar[];
  };
}

export const SERVICES_DATA: Record<string, ServicePageData> = {
  "investor-relations": {
    slug: "investor-relations",
    title: "Investor Relations",
    eyebrow: "OUR SERVICES",
    subtitle: "STRATEGIC MANAGEMENT AND COMMUNICATION",
    heroDescription:
      "By partnering with our Investor Relations team, you will have instant and consistent access to our extensive experience in controlling the flow of information between your public company, and the market.",
    heroImage: "/images/ir-hero-skyscrapers.jpg",
    heroImageAlt: "City of London Financial District Architecture",
    ctaText: "Discuss Your Goals",
    formServiceValue: "Investor Relations",
    sections: [
      {
        eyebrow: "INVESTOR RELATIONS",
        heading: "REINVENTING THE WAY YOU SECURE INVESTMENT",
        paragraphs: [
          "By partnering with our Investor Relations team, you will have instant and consistent access to our extensive experience in controlling the flow of information between your public company, and the market. With your goals at the very forefront of everything we do, we will undertake a detailed analysis of your where you stand today, and identify the right way for you to move forward and secure further investment. HE Capital will deliver management, strategy, and implement impactful, informative communications designed to appeal to your investors. Building trust, and ensuring their goals become aligned with yours, we'll secure you the highest value possible.",
          "We combine traditional and innovative communication strategies with securing positive relationships in both the media and the financial sector. Continuously looking for new and further opportunities, we excel in exceeding investor relations expectations.",
        ],
      },
      {
        eyebrow: "OUR APPROACH",
        heading: "EXPERIENCE AND EXPERTISE IN ENHANCING VALUE",
        intro:
          "With extensive contacts including institutional investors, venture capitalists, fund managers and hedge fund managers, with HE Capital we open you up to an entire network of influential individuals and companies ready to invest right now:",
        bullets: [
          "Simply put, we will identify the most ideal opportunities for your company and proactively help people to discover the opportunity of investing in you.",
          "Developing key messages and nurturing essential relationships we will make communication between you and investors completely transparent.",
          "Working with your own management calendar, we will find the most opportune exhibitions, road shows and meetings for you to engage investors.",
          "Auditing every aspect of how your company is perceived, and making the right adjustments, we'll achieve your ideal value proposition.",
          "Also regularly engrossed in industry news and how it is reflected in the media, we'll be on hand to deal with any unanticipated changes in the market.",
          "Consistently adapting your strategy to react positively to every event, we will ensure you remain credible, prominent and attractive to investors and high net worth individuals.",
        ],
        closing:
          "Ultimately, we will enhance your presence across all of your communications, your face-to-face interactions with investors including expanding your network and potentially increasing your value with every message.",
      },
      {
        eyebrow: "ONGOING ENGAGEMENT",
        heading: "KEEPING YOU IN TOUCH WITH YOUR STRATEGY",
        bullets: [
          "We provide weekly reports to every client",
          "We're always available to update you",
        ],
        paragraphs: [
          "The final, and key part of everything we do is keeping you informed and up to date with progress. Along with our weekly reports process, you're welcome to call us at any time to discuss your Investor Relations service. Use the contact form here to get in touch.",
        ],
      },
    ],
    valueProposition: {
      heading: "Investor Relations That Build Lasting Value",
      pillars: [
        {
          iconName: "target",
          title: "Strategic Communication",
          description: "Clear, compelling messaging that builds a strong investment case.",
        },
        {
          iconName: "users",
          title: "Investor Engagement",
          description: "Proactive outreach and relationship management with key investors.",
        },
        {
          iconName: "trendingUp",
          title: "Market Confidence",
          description: "Enhancing visibility, credibility and long-term shareholder value.",
        },
      ],
    },
  },

  "public-relations": {
    slug: "public-relations",
    title: "Public Relations",
    eyebrow: "OUR SERVICES",
    subtitle: "ENHANCING YOUR BRAND IN A GLOBAL MARKET",
    heroDescription:
      "With an astute level of media knowledge and intuition, our Public Relations experts know how to tell a story. More to the point, they know how tell yours, and ensure it engages the right people, at the most opportune times.",
    heroImage: "/images/pr-hero-communications.jpg",
    heroImageAlt: "International Executive Media & Communications Suite",
    ctaText: "Discuss Your Goals",
    formServiceValue: "Public Relations",
    sections: [
      {
        eyebrow: "PUBLIC RELATIONS",
        heading: "DEFINING THE IDEAL WAY TO REACH YOUR GOALS",
        paragraphs: [
          "With an astute level of media knowledge and intuition, our Public Relations experts know how to tell a story. More to the point, they know how tell yours, and ensure it engages the right people, at the most opportune times. With our accomplished strategists behind your communications campaigns, your messages will be delivered with impact, across the platforms and publications most important to securing interest and investment. Everything we do is carefully tailored to enhancing your brand and reputation and, ultimately, increasing your value in the market. With HE Capital, you only need one strategy to elevate your status and secure new capital.",
          "With an audit of your communications strategy, and analysis of your market position, we will construct the original, engaging stories that inspire your audience. Like you we think differently, and we think big, delivering positive Public Relations campaigns across multiple platforms.",
        ],
      },
      {
        eyebrow: "OUR APPROACH",
        heading: "NURTURING THE RIGHT RELATIONSHIPS",
        intro:
          "This multi-platform approach is essential to every client we work with, but knowing the right media and creating the right messages is unique to everyone. Thankfully though, this is where our expertise comes in:",
        bullets: [
          "Understanding your ambitions and deciphering your position as it stands, our strategy is focused entirely on delivering your goals.",
          "We then get to work on articulating the precise, high-impact, easy-to-understand messages that will elevate your status.",
          "Engaging our media contacts and utilising the most beneficial platforms, we'll take your brand straight to the heart of the right people.",
          "Running entire campaigns proactively and strategically, we will continuously make sure that your company is prominent across multiple forms of 24/7 media.",
          "Developing ongoing relationships within the industry, we will identify new opportunities and emerging platforms for your campaign to thrive.",
          "Managing any unforeseen events that could impact your reputation, we will respond effectively to ensure minimum disruption.",
          "Consistently adapting your strategy to meet the ever-changing demands of the media and market, your message will never be lost amongst the masses.",
          "Identifying the right award programs and presentation platforms for your company, we'll even put you face-to-face with potential investors.",
        ],
        closing:
          "Every company has a story to tell, and we are dedicated to telling it. With a carefully developed and creatively delivered Public Relations campaign, we can ensure that everything you do is known, celebrated, and considered worthy of investment by the right high net worth individuals.",
      },
      {
        eyebrow: "ONGOING ENGAGEMENT",
        heading: "TRANSPARENT COMMUNICATION AT ALL TIMES",
        bullets: [
          "You will never be out of the loop throughout your campaign",
          "We provide weekly progress reports and regularly communicate with every client",
        ],
        paragraphs: [
          "Primarily, get in touch with us to discuss how our Public Relations expertise can help you to attract essential investment. As we also specialise in Investor Relations and Digital & Social Media, we may be able to show you the incredible impact of an even more comprehensive service.",
        ],
      },
    ],
    valueProposition: {
      heading: "Public Relations That Command Market Authority",
      pillars: [
        {
          iconName: "target",
          title: "Media Relations",
          description: "Securing high-impact coverage across tier-one financial and trade publications worldwide.",
        },
        {
          iconName: "users",
          title: "Narrative Framing",
          description: "Articulating company milestones and corporate vision with clarity and conviction.",
        },
        {
          iconName: "trendingUp",
          title: "Reputation Leadership",
          description: "Safeguarding brand equity and enhancing credibility across global capital markets.",
        },
      ],
    },
  },

  "digital-social-media": {
    slug: "digital-social-media",
    title: "Digital & Social Media",
    eyebrow: "OUR SERVICES",
    subtitle: "INNOVATIVE MULTIPLATFORM COMMUNICATIONS",
    heroDescription:
      "There's no doubt, in the here and now of communications, that digital and social media is absolutely crucial to achieving success. With so many emerging platforms and a constantly evolving digital ecosphere, up-to-date knowledge of the online communications landscape is equally important.",
    heroImage: "/images/digital-hero-network.jpg",
    heroImageAlt: "Modern Global Financial Digital Analytics and Media Network",
    ctaText: "Discuss Your Goals",
    formServiceValue: "Digital & Social Media",
    sections: [
      {
        eyebrow: "DIGITAL & SOCIAL MEDIA",
        heading: "POSITIONING YOUR COMPANY IDEALLY ONLINE",
        paragraphs: [
          "There's no doubt, in the here and now of communications, that digital and social media is absolutely crucial to achieving success. With so many emerging platforms and a constantly evolving digital ecosphere, up-to-date knowledge of the online communications landscape is equally important. At HE Capital, we know how to merge key business objectives with essential digital platforms, resulting in campaigns professionally underpinned with high-impact messages to which your audience will respond positively. By combining creative communications with technical proficiency and analytical expertise, we'll turn the raw data into the right messages to elevate your brand across multiple platforms and media.",
          "A digital and social media campaign by HE Capital will be completely original to your company and your goals. By defining the right platforms for you and identifying the people likeliest to respond positively to your campaign, we'll give you the digital presence you need for investment.",
        ],
      },
      {
        eyebrow: "OUR APPROACH",
        heading: "GLOBAL DIGITAL AND SOCIAL MEDIA SPECIALISTS",
        intro:
          "Understanding the ever-evolving digital and social media landscape is difficult, especially when your focus is primarily on achieving goals, meeting objectives and expanding. However, that's exactly where our campaigns come to the fore:",
        bullets: [
          "At the very beginning, we will conduct a thorough audit of your current digital presence, highlighting strengths and areas for improvement.",
          "Using data, strategy and your own goals, we will then establish where you are most likely to engage potential investors online.",
          "Adding our own experience of the market and a little creativity, we will develop memorable, impactful messages to lead your campaign.",
          "Having identified the ideal platforms and times for engagement, we'll then get to work on building trust and enhancing engagement with your company.",
          "Continuously developing your strategy to respond to the ever-changing digital landscape, we'll adapt your campaign to ensure optimum impact.",
          "Coordinating your campaign with data, you'll come to recognise the right way to run digital campaigns that maximise lead opportunities.",
        ],
        closing:
          "Digital and social media are essential for tapping into the global network of investment and opportunity, and engaging key high net worth individuals. A campaign created and managed by HE Capital will draw on years of experience in generating genuine interest in our clients.",
      },
      {
        eyebrow: "ONGOING ENGAGEMENT",
        heading: "UNIQUE MESSAGES FOR EVERY CLIENT",
        bullets: [
          "We'll fully communicate the key campaign messages we deliver",
          "Weekly reports and calls will ensure you know your progress at all times",
        ],
        paragraphs: [
          "To get started, simply complete the contact form on this page, and one of our team will be in touch to discuss your goals. Our own strategy is to maximise your ROI, and every decision we make will be driven towards achieving the best result for you.",
        ],
      },
    ],
    valueProposition: {
      heading: "Digital Media That Drives Market Engagement",
      pillars: [
        {
          iconName: "target",
          title: "Multi-Channel Reach",
          description: "Orchestrating targeted campaigns across LinkedIn, X, and specialized financial networks.",
        },
        {
          iconName: "users",
          title: "Content Strategy",
          description: "Developing visually compelling, institutional-grade editorial and multimedia assets.",
        },
        {
          iconName: "trendingUp",
          title: "Audience Growth",
          description: "Expanding shareholder and stakeholder awareness through measurable digital outreach.",
        },
      ],
    },
  },

  "capital-market-advisory": {
    slug: "capital-market-advisory",
    title: "Capital Market Advisory",
    eyebrow: "OUR SERVICES",
    subtitle: "Expert insight and guidance",
    heroDescription:
      "Whether you are at the helm of a private or public company, our capital, financial and strategic advisory services can immeasurably assist you in effectively originating, negotiating and executing a wide range of investment banking transactions.",
    heroImage: "/images/cma-hero-banking.jpg",
    heroImageAlt: "Soaring Investment Banking and Capital Markets Architecture",
    ctaText: "Discuss Your Goals",
    formServiceValue: "Capital Markets Advisory",
    sections: [
      {
        eyebrow: "CAPITAL MARKET ADVISORY",
        heading: "The solution to your investment puzzle",
        paragraphs: [
          "Whether you are at the helm of a private or public company, our capital, financial and strategic advisory services can immeasurably assist you in effectively originating, negotiating and executing a wide range of investment banking transactions. We can help you with identifying, acquiring or disposing of income-producing assets and managing your debt and equity placement requirements, among many other pursuits you may follow in your investment journey. We also offer guidance on raising capital, achieving strategic valuations and overseeing mergers and acquisitions. Our in-depth insight into the world's capital markets enables you to make the right steps and optimise your investments' returns.",
          "Tapping into our understanding of your global capital needs and the occupational and financial markets, we can help you to achieve the most lucrative long-term outcomes, whatever your investment objectives. We help private companies to raise their capital and establish their reputation through investor relations strategies and planning, community outreach media relations and corporate communications.",
        ],
      },
      {
        eyebrow: "OUR APPROACH",
        heading: "Secure the investment you need",
        intro:
          "We weave our expertise on investment sales, financing and acquisitions into a single advisory package, allowing you to receive – and quickly act on – best-in-class guidance on the following matters:",
        bullets: [
          "Mergers, acquisitions and divestitures. Determine whether to purchase another company, combine it with yours or sell part of a company to another party.",
          "Initial public offerings (IPOs) and short-form prospectus offerings. We can help you to undertake an initial offering of your securities or discern your eligibility for a short-term prospectus.",
          "Private placements of equity and debt securities. From offering to sale, the exchange will be made between your organisation and selected investors.",
          "Private placements of hybrid securities. Our advisors can investigate where hybrids combining debt and equity characteristics may be the wiser securities for you to place privately.",
          "Restructurings and refinancing. In restructuring your assets, you can trim your financial losses and, in this way, ease tensions between debt and equity holders.",
          "Where the reorganisation's aggregate transaction value would surpass £1 billion, we can help you to achieve the most cost-effective result.",
        ],
        closing:
          "We combine our advanced knowledge of the world's markets with financial discipline while reaching out to active capital players, bringing your strategic plans to fruition in the process. We understand how a bespoke investor relations strategy can enhance company strengths while nurturing shortcomings.",
      },
      {
        eyebrow: "ONGOING ENGAGEMENT",
        heading: "Various capital finance solutions in one place",
        bullets: [
          "We offer solutions across various geographic regions.",
          "We have experts based across a range of countries.",
        ],
        paragraphs: [
          "To enquire about more of the possibilities with our capital markets advice service or, if you are already utilising this service, discuss the progress we have made with your portfolio, please get in touch with us. You can easily reach out to us by using the contact form on our website.",
        ],
      },
    ],
    valueProposition: {
      heading: "Capital Advisory That Unlocks Growth",
      pillars: [
        {
          iconName: "target",
          title: "Strategic Positioning",
          description: "Structuring compelling market propositions aligned with institutional investor expectations.",
        },
        {
          iconName: "users",
          title: "Transaction Execution",
          description: "Guiding companies through equity financing, mergers, and capital restructuring.",
        },
        {
          iconName: "trendingUp",
          title: "Global Distribution",
          description: "Connecting management teams with qualified international institutional capital partners.",
        },
      ],
    },
  },
};
