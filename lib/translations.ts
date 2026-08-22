// ============================================================
// Oder360 — Translations Dictionary
// EN (English) + AR (Arabic — Gulf/Modern Standard)
// Matches Dubai-style bilingual website conventions
// ============================================================

export type Lang = 'en' | 'ar'

export interface Translations {
  // Navigation
  nav: {
    home: string
    services: string
    portfolio: string
    expertise: string
    about: string
    letsConnect: string
    letsConnectTooltip: string
    switchToLight: string
    switchToDark: string
    messageSuccess: string
  }

  // Hero
  hero: {
    titleLine1: string
    titleLine2: string
    titleLine3: string
    subtitle: string
    subtitleItalic: string
    workflowStrategy: string
    workflowSystems: string
    workflowExecution: string
    description: string
    ctaStart: string
    ctaExplore: string
    statYearsLabel: string
    statProjectsLabel: string
    statSuccessLabel: string
    cardTag: string
    cardMsg: string
  }

  // About
  about: {
    sectionTitle: string
    p1: string
    p2: string
    p3: string
    highlight1Title: string
    highlight1Text: string
    highlight2Title: string
    highlight2Text: string
    highlight3Title: string
    highlight3Text: string
    profileRole: string
    credential1: string
    credential2: string
    credential3: string
    location: string
  }

  // Services
  services: {
    sectionTitle: string
    sectionSubtitle: string
    items: {
      title: string
      description: string
      features: string[]
    }[]
  }

  // Expertise
  expertise: {
    sectionTitle: string
    sectionSubtitle: string
    items: {
      title: string
      description: string
    }[]
  }

  // Stats
  stats: {
    labels: string[]
  }

  // Contact
  contact: {
    sectionTitle: string
    description: string
    phone: string
    email: string
    location: string
    namePlaceholder: string
    emailPlaceholder: string
    phonePlaceholder: string
    messagePlaceholder: string
    sendButton: string
    sendingButton: string
    successMessage: string
    errorMessage: string
    errorRetry: string
  }

  // Footer
  footer: {
    tagline: string
    servicesHeading: string
    companyHeading: string
    link_staffMgmt: string
    link_financialMgmt: string
    link_menuEng: string
    link_preOpening: string
    link_about: string
    link_portfolio: string
    link_contact: string
    link_privacy: string
    copyright: string
  }

  // MultiStep Modal
  modal: {
    closeLabel: string
    step1Question: string
    step1Placeholder: string
    step1Btn: string
    step2Question: (name: string) => string
    step2OptionA: string
    step2OptionB: string
    step3Question: string
    step4Question: string
    step4Subtitle: string
    step4Placeholder: string
    step4Btn: string
    step4StartersLabel: string
    step5Question: string
    step5OptionCall: string
    step5OptionEmail: string
    step6QuestionCall: string
    step6QuestionEmail: string
    step6PlaceholderPhone: string
    step6PlaceholderEmail: string
    submitBtn: string
    submittingBtn: string
    successLabel: string
    successHeadline: (name: string) => string
    successSub: string
    successStat1: string
    successStat2: string
    successStat3: string
    successNextLabel: string
    successStep1Title: string
    successStep1Sub: string
    successStep2Title: string
    successStep2Sub: string
    successStep3Title: string
    successStep3Sub: string
    successLinkedIn: string
    successExplore: string
    discussionStarters: { label: string; text: string }[]
  }
}

const en: Translations = {
  nav: {
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    expertise: 'Expertise',
    about: 'About',
    letsConnect: "Let's Connect 🧑‍🍳",
    letsConnectTooltip: "Let's connect to setup your business model",
    switchToLight: 'Switch to light mode',
    switchToDark: 'Switch to dark mode',
    messageSuccess: 'Message sent. We will contact you shortly.',
  },

  hero: {
    titleLine1: 'Transform Your',
    titleLine2: 'F&B Concept Into a',
    titleLine3: 'Profitable Business',
    subtitle:
      'We help investors, entrepreneurs, and food brands launch and grow restaurants, food trucks, specialty cafés, kiosks, and franchise concepts',
    subtitleItalic: '"from concept development to profitable operations."',
    workflowStrategy: 'Strategy',
    workflowSystems: 'Systems',
    workflowExecution: 'Execution',
    description:
      'Backed by strong financial, accounting, and compliance expertise to reduce risk, control costs, and ensure sustainable growth.',
    ctaStart: 'Start Your Model',
    ctaExplore: 'Explore Services',
    statYearsLabel: 'Years Experience',
    statProjectsLabel: 'Projects Delivered',
    statSuccessLabel: 'Client Success',
    cardTag: 'Concept to Reality',
    cardMsg: 'Scale Your Vision',
  },

  about: {
    sectionTitle: 'About Oder360',
    p1: 'Oder360 is a leading F&B operations consultancy founded by Abdul Rasheed, an experienced Restaurant professional with 12 years of significant experience in Restaurant Operations. Extensive knowledge in leading and managing operations and cost control across the UAE and Oman.',
    p2: 'Throughout my journey, I have worked on several Restaurant Openings, renovation projects, and staffing restructuring, developing and maintaining full operation concerning Pre-Opening Multi-store management, brand-new concept development, brand design, kitchen layout and design, interior design conceptualization, menu development, hiring, training, P&L analysis, and support, monitoring financial performance, assist finance manager in review and preparation of budgets, finding new locations and negotiate with landlords, Set up the appropriate supply chains for the fresh ingredients and assets.',
    p3: 'Cooking is one of my passion. The recipes I make are incredible, and they reflect my personal tastes. I have worked with different types of F&B Industry: Out Door Catering, Italian Restaurants, Buffet Restaurant, Fine Dining Restaurant, Latino Bar, Sports Recreational Bar, Asian Foods, All Day Dining, and Burger and Pizza are my favorite QSR Concepts.',
    highlight1Title: 'Proven Results:',
    highlight1Text: 'Consistent history of increasing profitability up to 21% and reducing operational costs by 15%',
    highlight2Title: 'Multi-Concept Expertise:',
    highlight2Text: 'Successfully managed 15+ brands across various F&B segments',
    highlight3Title: 'Franchise Development:',
    highlight3Text: 'Expert in international brand expansion and market adaptation for the UAE market',
    profileRole: 'Founder & CEO',
    credential1: 'Bachelor of Arts in Hotel Management',
    credential2: '12 Years Restaurant Operations Experience',
    credential3: 'Multi-Concept F&B Specialist',
    location: 'Abu Dhabi, UAE',
  },

  services: {
    sectionTitle: 'Our Services',
    sectionSubtitle: 'End-to-end solutions for your F&B business in the UAE',
    items: [
      {
        title: 'Staff Management',
        description: 'Comprehensive workforce solutions including recruitment, training, scheduling, performance management, and team optimization for multi-location operations.',
        features: ['Team Building & Training', 'Performance Management', 'Staff Scheduling & Optimization', 'Cross-functional Training Programs'],
      },
      {
        title: 'Financial Management',
        description: 'Expert financial oversight including P&L management, budgeting, cost control, vendor negotiations, and cash flow optimization to maximize profitability.',
        features: ['P&L Analysis & Reporting', 'Budgeting & Forecasting', 'Cost Control & Optimization', 'Vendor Negotiations'],
      },
      {
        title: 'Menu Engineering',
        description: 'Strategic menu design and optimization to maximize profitability, enhance customer experience, and drive sales through data-driven menu engineering.',
        features: ['Menu Design & Development', 'Profitability Analysis', 'Localization & Adaptation', 'Digital Menu Platforms'],
      },
      {
        title: 'Pre-Opening Operations',
        description: 'Complete turnkey solutions for new restaurant launches including feasibility studies, concept development, brand positioning, and operational setup.',
        features: ['Feasibility Studies', 'Concept Development', 'Brand Positioning', 'SOP Development'],
      },
      {
        title: 'Franchise Development',
        description: 'Expert support for franchise expansion including market analysis, brand adaptation, operational setup, and multi-location management strategies.',
        features: ['Market Feasibility', 'Brand Adaptation', 'Multi-Location Management', 'Franchise Operations'],
      },
      {
        title: 'Business Optimization',
        description: 'Continuous improvement strategies to enhance operational efficiency, reduce costs, increase profitability, and scale your business effectively.',
        features: ['Process Optimization', 'Efficiency Improvements', 'Revenue Growth Strategies', 'Performance Analytics'],
      },
    ],
  },

  expertise: {
    sectionTitle: 'My Expertise',
    sectionSubtitle: 'Comprehensive F&B operations expertise from concept to establishment',
    items: [
      { title: 'Menu Creation', description: 'Development of innovative menus that balance customer appeal with profitability' },
      { title: 'Cost & Budget Management', description: 'Expert financial oversight and budget preparation to maximize profitability' },
      { title: 'Brand Conceptualization', description: 'From concept to establishment - complete brand design and development' },
      { title: 'P&L Analysis', description: 'Comprehensive profit and loss analysis to identify growth opportunities' },
      { title: 'Secret Recipe Development', description: 'Specialized in sauce recipes and pizza base development for Italian-style cuisine' },
      { title: 'Pre-Opening Operations', description: 'Complete setup from kitchen layout to supply chain establishment' },
    ],
  },

  stats: {
    labels: ['Years Experience', 'Projects Completed', 'Countries Served', '% Dedication'],
  },

  contact: {
    sectionTitle: "Let's Work Together",
    description: "Ready to transform your F&B operations? Get in touch with us to discuss how Oder360 can help elevate your business in the UAE market.",
    phone: '+971 54 745 4416',
    email: 'contact@oder360.com',
    location: 'Abu Dhabi, UAE',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    phonePlaceholder: 'Your Phone Number',
    messagePlaceholder: 'Tell us about your project',
    sendButton: 'Send Message',
    sendingButton: 'Sending...',
    successMessage: "Thank you! Your message has been sent. We'll get back to you soon.",
    errorMessage: 'Failed to send message. Please try again.',
    errorRetry: 'Failed to send message. Please try again later.',
  },

  footer: {
    tagline: 'Transforming F&B operations into excellence across the UAE and beyond.',
    servicesHeading: 'Services',
    companyHeading: 'Company',
    link_staffMgmt: 'Staff Management',
    link_financialMgmt: 'Financial Management',
    link_menuEng: 'Menu Engineering',
    link_preOpening: 'Pre-Opening Operations',
    link_about: 'About Us',
    link_portfolio: 'Portfolio',
    link_contact: 'Contact',
    link_privacy: 'Privacy Policy',
    copyright: `© ${new Date().getFullYear()} Oder360. All rights reserved.`,
  },

  modal: {
    closeLabel: 'Close modal',
    step1Question: 'May I have your name? *',
    step1Placeholder: 'Type your answer here...',
    step1Btn: 'OK ✓',
    step2Question: (name) => `Nice to meet you, ${name}! How old is your Business?`,
    step2OptionA: 'Less than 5 years',
    step2OptionB: 'More than 5 years',
    step3Question: 'Which service would you like to know more about...',
    step4Question: 'Please share more details about your inquiry. *',
    step4Subtitle: 'You can share the website of your company, or share the service you need for your business idea. (Ctrl+Enter to proceed)',
    step4Placeholder: 'Type your answer here...',
    step4Btn: 'OK ✓',
    step4StartersLabel: 'Not sure what to write? Select a structured discussion starter below:',
    step5Question: 'What is the best way to contact you? *',
    step5OptionCall: 'Call me',
    step5OptionEmail: 'Email me',
    step6QuestionCall: 'Of course. What is your phone number? *',
    step6QuestionEmail: 'Great. What is your email address? *',
    step6PlaceholderPhone: '+971 50 123 4567',
    step6PlaceholderEmail: 'name@example.com',
    submitBtn: 'Submit 🎉',
    submittingBtn: 'Submitting...',
    successLabel: "You're inside the 360°",
    successHeadline: (name) => `Welcome, ${name}.`,
    successSub: 'Your inquiry is with us. Our team will reach out within 24 hours to begin your operational journey.',
    successStat1: 'F&B Brands Served',
    successStat2: 'Revenue Optimised',
    successStat3: 'Client Retention',
    successNextLabel: 'What happens next',
    successStep1Title: 'Review',
    successStep1Sub: 'We analyse your inquiry within 24h',
    successStep2Title: 'Discovery Call',
    successStep2Sub: 'A tailored strategy session with our team',
    successStep3Title: 'Your Roadmap',
    successStep3Sub: 'A custom operational plan built for your business',
    successLinkedIn: 'Follow on LinkedIn',
    successExplore: 'Explore our work',
    discussionStarters: [
      { label: 'Full Operational Review', text: 'We operate a [concept type] restaurant in [Emirate] with [number] outlet(s).\nWe are currently facing challenges in [margin control / labor efficiency / inventory management / SOP consistency].\nWe would like to request a full operational audit and improvement roadmap.' },
      { label: 'Improve Profitability', text: 'Our restaurant generates approximately [monthly revenue range].\nWe are experiencing pressure on margins due to food cost, labor, or overhead inefficiencies.\nWe need structured financial oversight, P&L clarity, and cost optimization support.' },
      { label: 'Pre-Opening Support', text: 'We are planning to launch a [concept type] restaurant in the UAE.\nWe require support with feasibility assessment, SOP development, compliance readiness, and structured pre-opening execution.' },
      { label: 'Menu Optimization', text: 'We would like to improve our menu profitability and pricing strategy.\nWe need margin analysis, sales mix insights, and contribution mapping to increase average check and overall revenue performance.' },
      { label: 'Workforce Optimization', text: 'We are looking to optimize manpower structure, KPI tracking, and staff productivity.\nOur goal is to reduce labor cost while maintaining service consistency across [number] outlet(s).' },
      { label: 'Franchise Development', text: 'We are preparing for multi-location expansion and require structured franchise systems, operating manuals, and performance control frameworks to scale sustainably.' },
      { label: 'Strategic Assessment', text: 'We are facing operational challenges but would prefer a structured diagnostic assessment to identify key improvement areas and define a clear action roadmap.' },
    ],
  },
}

const ar: Translations = {
  nav: {
    home: 'الرئيسية',
    services: 'الخدمات',
    portfolio: 'أعمالنا',
    expertise: 'خبراتنا',
    about: 'من نحن',
    letsConnect: 'تواصل معنا 🧑‍🍳',
    letsConnectTooltip: 'تواصل معنا لإعداد نموذج عملك',
    switchToLight: 'التبديل إلى الوضع الفاتح',
    switchToDark: 'التبديل إلى الوضع الداكن',
    messageSuccess: 'تم إرسال رسالتك. سنتواصل معك قريباً.',
  },

  hero: {
    titleLine1: 'حوّل مفهومك',
    titleLine2: 'في قطاع المأكولات والمشروبات إلى',
    titleLine3: 'مشروع مربح',
    subtitle:
      'نساعد المستثمرين وأصحاب المشاريع والعلامات الغذائية على إطلاق وتنمية المطاعم وعربات الطعام والمقاهي المتخصصة والأكشاك ومفاهيم الامتياز التجاري',
    subtitleItalic: '"من تطوير الفكرة إلى عمليات مربحة."',
    workflowStrategy: 'الاستراتيجية',
    workflowSystems: 'الأنظمة',
    workflowExecution: 'التنفيذ',
    description:
      'مدعوم بخبرة قوية في المجالات المالية والمحاسبية والامتثال للحد من المخاطر والتحكم في التكاليف وضمان النمو المستدام.',
    ctaStart: 'ابدأ نموذجك',
    ctaExplore: 'استعرض الخدمات',
    statYearsLabel: 'سنة خبرة',
    statProjectsLabel: 'مشروع منجز',
    statSuccessLabel: 'نجاح العملاء',
    cardTag: 'من الفكرة إلى الواقع',
    cardMsg: 'وسّع نطاق رؤيتك',
  },

  about: {
    sectionTitle: 'عن أودر360',
    p1: 'أودر360 هي شركة استشارية رائدة في عمليات المأكولات والمشروبات، أسسها عبد الرشيد، وهو متخصص في صناعة المطاعم بخبرة 12 عاماً في إدارة العمليات، مع معرفة واسعة في قيادة وإدارة العمليات والتحكم في التكاليف في الإمارات وعُمان.',
    p2: 'على مدار مسيرتي المهنية، عملت في عدة مشاريع افتتاح مطاعم وتجديدات وإعادة هيكلة للكوادر البشرية، وطوّرت عمليات متكاملة تشمل الإدارة المتعددة للفروع، وتطوير مفاهيم جديدة، وتصميم العلامات التجارية، ومخططات المطابخ، وتطوير القوائم، والتوظيف والتدريب وتحليل الأرباح والخسائر.',
    p3: 'الطهي أحد شغفي. الوصفات التي أبتكرها رائعة وتعكس أذواقي الشخصية. عملت في مختلف قطاعات الأغذية والمشروبات: التموين الخارجي، المطاعم الإيطالية، مطاعم البوفيه، المطاعم الفاخرة، والأفضل لديّ هي مفاهيم البرغر والبيتزا.',
    highlight1Title: 'نتائج موثّقة:',
    highlight1Text: 'سجل متسق من زيادة الربحية حتى 21% وخفض التكاليف التشغيلية بنسبة 15%',
    highlight2Title: 'خبرة متعددة المفاهيم:',
    highlight2Text: 'إدارة ناجحة لأكثر من 15 علامة تجارية في مختلف قطاعات المأكولات والمشروبات',
    highlight3Title: 'تطوير الامتياز التجاري:',
    highlight3Text: 'خبرة في توسع العلامات الدولية وتكييفها مع السوق الإماراتي',
    profileRole: 'المؤسس والرئيس التنفيذي',
    credential1: 'بكالوريوس في إدارة الفنادق',
    credential2: '12 عاماً من الخبرة في إدارة المطاعم',
    credential3: 'متخصص في مفاهيم المأكولات والمشروبات المتعددة',
    location: 'أبوظبي، الإمارات العربية المتحدة',
  },

  services: {
    sectionTitle: 'خدماتنا',
    sectionSubtitle: 'حلول متكاملة لمشروعك في قطاع المأكولات والمشروبات بالإمارات',
    items: [
      {
        title: 'إدارة الكوادر البشرية',
        description: 'حلول شاملة للقوى العاملة تشمل التوظيف والتدريب والجدولة وإدارة الأداء وتحسين الفرق لعمليات متعددة الفروع.',
        features: ['بناء الفريق والتدريب', 'إدارة الأداء', 'جدولة الموظفين وتحسينها', 'برامج تدريب متعددة الوظائف'],
      },
      {
        title: 'الإدارة المالية',
        description: 'إشراف مالي متخصص يشمل إدارة الأرباح والخسائر والميزانيات والتحكم في التكاليف والتفاوض مع الموردين وتحسين التدفق النقدي.',
        features: ['تحليل وتقارير الأرباح والخسائر', 'إعداد الميزانيات والتوقعات', 'التحكم في التكاليف وتحسينها', 'التفاوض مع الموردين'],
      },
      {
        title: 'هندسة القوائم',
        description: 'تصميم وتحسين القوائم بشكل استراتيجي لزيادة الربحية وتحسين تجربة العملاء ودفع المبيعات عبر هندسة القوائم المبنية على البيانات.',
        features: ['تصميم وتطوير القوائم', 'تحليل الربحية', 'التوطين والتكييف', 'منصات القوائم الرقمية'],
      },
      {
        title: 'عمليات ما قبل الافتتاح',
        description: 'حلول متكاملة لإطلاق مطاعم جديدة تشمل دراسات الجدوى وتطوير المفهوم وتحديد موقع العلامة التجارية والإعداد التشغيلي.',
        features: ['دراسات الجدوى', 'تطوير المفهوم', 'تحديد موقع العلامة التجارية', 'تطوير الإجراءات التشغيلية'],
      },
      {
        title: 'تطوير الامتياز التجاري',
        description: 'دعم متخصص لتوسع الامتياز التجاري يشمل تحليل السوق وتكييف العلامة التجارية والإعداد التشغيلي واستراتيجيات الإدارة متعددة المواقع.',
        features: ['جدوى السوق', 'تكييف العلامة التجارية', 'إدارة متعددة المواقع', 'عمليات الامتياز'],
      },
      {
        title: 'تحسين الأعمال',
        description: 'استراتيجيات تحسين مستمر لرفع الكفاءة التشغيلية وخفض التكاليف وزيادة الربحية وتوسيع نطاق عملك بفاعلية.',
        features: ['تحسين العمليات', 'تحسينات الكفاءة', 'استراتيجيات نمو الإيرادات', 'تحليلات الأداء'],
      },
    ],
  },

  expertise: {
    sectionTitle: 'خبراتي',
    sectionSubtitle: 'خبرة شاملة في عمليات المأكولات والمشروبات من الفكرة إلى التأسيس',
    items: [
      { title: 'إبداع القوائم', description: 'تطوير قوائم مبتكرة تجمع بين جاذبية العملاء والربحية' },
      { title: 'إدارة التكاليف والميزانيات', description: 'إشراف مالي متخصص وإعداد الميزانيات لتعظيم الربحية' },
      { title: 'تصور العلامة التجارية', description: 'من الفكرة إلى التأسيس - تصميم وتطوير متكامل للعلامة التجارية' },
      { title: 'تحليل الأرباح والخسائر', description: 'تحليل شامل للأرباح والخسائر لتحديد فرص النمو' },
      { title: 'تطوير الوصفات السرية', description: 'متخصص في وصفات الصلصات وتطوير عجينة البيتزا للمطبخ الإيطالي' },
      { title: 'عمليات ما قبل الافتتاح', description: 'إعداد متكامل من تخطيط المطبخ إلى إنشاء سلسلة التوريد' },
    ],
  },

  stats: {
    labels: ['سنة خبرة', 'مشروع مكتمل', 'دول خُدمت', '% تفانٍ واخلاص'],
  },

  contact: {
    sectionTitle: 'لنعمل معاً',
    description: 'هل أنت مستعد لتحويل عمليات مطعمك؟ تواصل معنا لمناقشة كيف يمكن لأودر360 تطوير أعمالك في السوق الإماراتي.',
    phone: '+971 54 745 4416',
    email: 'contact@oder360.com',
    location: 'أبوظبي، الإمارات العربية المتحدة',
    namePlaceholder: 'اسمك الكريم',
    emailPlaceholder: 'بريدك الإلكتروني',
    phonePlaceholder: 'رقم هاتفك',
    messagePlaceholder: 'أخبرنا عن مشروعك',
    sendButton: 'إرسال الرسالة',
    sendingButton: 'جارٍ الإرسال...',
    successMessage: 'شكراً! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.',
    errorMessage: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
    errorRetry: 'فشل إرسال الرسالة. يرجى المحاولة لاحقاً.',
  },

  footer: {
    tagline: 'نحوّل عمليات المأكولات والمشروبات إلى تميّز حقيقي في الإمارات وخارجها.',
    servicesHeading: 'الخدمات',
    companyHeading: 'الشركة',
    link_staffMgmt: 'إدارة الكوادر',
    link_financialMgmt: 'الإدارة المالية',
    link_menuEng: 'هندسة القوائم',
    link_preOpening: 'عمليات ما قبل الافتتاح',
    link_about: 'من نحن',
    link_portfolio: 'أعمالنا',
    link_contact: 'تواصل معنا',
    link_privacy: 'سياسة الخصوصية',
    copyright: `© ${new Date().getFullYear()} أودر360. جميع الحقوق محفوظة.`,
  },

  modal: {
    closeLabel: 'إغلاق النافذة',
    step1Question: 'ما اسمك الكريم؟ *',
    step1Placeholder: 'اكتب إجابتك هنا...',
    step1Btn: 'حسناً ✓',
    step2Question: (name) => `يسعدنا لقاؤك، ${name}! كم عمر مشروعك التجاري؟`,
    step2OptionA: 'أقل من 5 سنوات',
    step2OptionB: 'أكثر من 5 سنوات',
    step3Question: 'ما الخدمة التي تودّ معرفة المزيد عنها؟',
    step4Question: 'يرجى مشاركة تفاصيل استفساركم. *',
    step4Subtitle: 'يمكنك مشاركة موقع شركتك أو الخدمة التي تحتاجها لفكرة عملك. (Ctrl+Enter للمتابعة)',
    step4Placeholder: 'اكتب إجابتك هنا...',
    step4Btn: 'حسناً ✓',
    step4StartersLabel: 'لست متأكداً مما تكتب؟ اختر نقطة بداية هيكلية:',
    step5Question: 'ما أفضل طريقة للتواصل معك؟ *',
    step5OptionCall: 'اتصل بي',
    step5OptionEmail: 'راسلني بالبريد',
    step6QuestionCall: 'بالتأكيد. ما رقم هاتفك؟ *',
    step6QuestionEmail: 'رائع. ما عنوان بريدك الإلكتروني؟ *',
    step6PlaceholderPhone: '+971 50 123 4567',
    step6PlaceholderEmail: 'name@example.com',
    submitBtn: 'إرسال 🎉',
    submittingBtn: 'جارٍ الإرسال...',
    successLabel: 'أنت الآن ضمن منظومة 360°',
    successHeadline: (name) => `أهلاً وسهلاً، ${name}.`,
    successSub: 'استفساركم وصلنا. سيتواصل فريقنا معك خلال 24 ساعة لبدء رحلتك التشغيلية.',
    successStat1: 'علامة تجارية خُدمت',
    successStat2: 'إيرادات تم تحسينها',
    successStat3: 'نسبة استبقاء العملاء',
    successNextLabel: 'ماذا يحدث بعد ذلك',
    successStep1Title: 'المراجعة',
    successStep1Sub: 'نحلل استفساركم خلال 24 ساعة',
    successStep2Title: 'مكالمة الاستكشاف',
    successStep2Sub: 'جلسة استراتيجية مخصصة مع فريقنا',
    successStep3Title: 'خارطة طريقك',
    successStep3Sub: 'خطة تشغيلية مخصصة لمشروعك',
    successLinkedIn: 'تابعنا على لينكدإن',
    successExplore: 'استعرض أعمالنا',
    discussionStarters: [
      { label: 'مراجعة تشغيلية شاملة', text: 'نقوم بتشغيل مطعم [نوع المفهوم] في [الإمارة] مع [عدد] فرع.\nنواجه تحديات في [ضبط الهوامش / كفاءة العمالة / إدارة المخزون / اتساق الإجراءات].\nنطلب إجراء تدقيق تشغيلي كامل وخارطة طريق للتحسين.' },
      { label: 'تحسين الربحية', text: 'يحقق مطعمنا إيرادات شهرية تقريبية [النطاق].\nنواجه ضغطاً على الهوامش بسبب تكاليف الطعام أو العمالة أو أوجه القصور في النفقات العامة.\nنحتاج إلى رقابة مالية منظمة ووضوح في الأرباح والخسائر ودعم تحسين التكاليف.' },
      { label: 'دعم ما قبل الافتتاح', text: 'نخطط لإطلاق مطعم [نوع المفهوم] في الإمارات.\nنحتاج إلى دعم في تقييم الجدوى وتطوير الإجراءات والامتثال التنظيمي والتنفيذ المنظم قبل الافتتاح.' },
      { label: 'تحسين القائمة', text: 'نود تحسين ربحية قائمتنا واستراتيجية التسعير.\nنحتاج إلى تحليل الهوامش ورؤى مزيج المبيعات وخرائط المساهمة لزيادة متوسط الشيك والأداء الإجمالي للإيرادات.' },
      { label: 'تحسين القوى العاملة', text: 'نسعى إلى تحسين هيكل القوى العاملة وتتبع مؤشرات الأداء وإنتاجية الموظفين.\nهدفنا تقليل تكلفة العمالة مع الحفاظ على اتساق الخدمة في [عدد] فرع.' },
      { label: 'تطوير الامتياز التجاري', text: 'نستعد للتوسع في مواقع متعددة ونحتاج إلى أنظمة امتياز منظمة وأدلة تشغيل وأطر للتحكم في الأداء للتوسع باستدامة.' },
      { label: 'تقييم استراتيجي', text: 'نواجه تحديات تشغيلية ونفضل تقييماً تشخيصياً منظماً لتحديد مجالات التحسين الرئيسية ووضع خارطة طريق واضحة للإجراءات.' },
    ],
  },
}

export const translations: Record<Lang, Translations> = { en, ar }
