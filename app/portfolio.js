// Public copy is grounded in PROFILE.md and its owner-confirmed updates.
export const navigation = [
    ['about', 'About'], ['experience', 'Experience'], ['research', 'Research'],
    ['software', 'Software'], ['education', 'Education'], ['contact', 'Contact'],
];

export const profile = {
    name: 'Abdus Saboor',
    introduction: 'I’m a software engineer completing an M.S. in Machine Learning at the American University of Sharjah. After building enterprise software at Cognizant, I’m bringing that engineering foundation to applied ML research and working systems.',
    location: 'Based in the UAE',
    availability: 'Open to full-time ML / AI roles after Fall 2026, in the UAE or remotely.',
    email: 'abdussaboor@gaffari.com',
    phone: '+971 529178807',
    links: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gaffari98/' },
        { label: 'GitHub', href: 'https://github.com/abdussaboor98' },
        { label: 'X', href: 'https://x.com/abdussaboor98' },
    ],
};

export const experience = [
    {
        organization: 'American University of Sharjah', role: 'Graduate Teaching Assistant',
        dates: 'Spring 2025 · Fall 2025 · Spring 2026', context: 'Sharjah, UAE · Completed',
        summary: 'Supported students through labs and grading for Programming in C Lab and Digital Systems Lab.',
        tags: ['C programming', 'Digital systems', 'Lab instruction'],
    },
    {
        organization: 'Cognizant', role: 'Full-stack developer',
        dates: 'December 2019–July 2024', context: 'Hyderabad / Chennai, India · Final role: Senior Software Engineer',
        summary: 'Modernized merchandising data systems for a US retail chain, supporting item, store, and vendor information across large-scale operations.',
        details: [
            'Built Spring Boot services, Spring Batch pipelines, and Kafka-based microservices to process millions of records within SLA constraints.',
            'Developed reusable frameworks, shared libraries, and automation utilities adopted across projects.',
            'Worked across design, implementation, testing, code reviews, and production issue resolution.',
        ],
        progression: [
            ['Programmer Analyst Trainee', 'Dec 2019–Dec 2020'],
            ['Junior Software Engineer', 'Dec 2020–Jan 2022'],
            ['Software Engineer', 'Jan 2022–Mar 2024'],
            ['Senior Software Engineer', 'Apr–Jul 2024'],
        ],
        tags: ['Java', 'Spring Boot', 'Spring Batch', 'Kafka', 'Microservices'],
    },
    {
        organization: 'idealabs', role: 'Intern', dates: 'August 2018–May 2019',
        context: 'Greater Hyderabad Area, India',
    },
];

export const projects = [
    {
        id: 'tacit', group: 'research', title: 'TACIT — Background music removal',
        summary: 'A two-stream audio model that removes background music while preserving speech and environmental sounds. Our team combined temporal convolution and attention-based modeling to explore more selective audio separation.',
        tags: ['TCN', 'Conformer', 'Audio separation', 'Model evaluation'],
        status: 'Accepted at ICCAI 2026 · Awaiting publication',
        contribution: 'Main coauthor · Collaborative research',
        links: [{ label: 'View code', href: 'https://github.com/abdussaboor98/tacit_bg_music_removal' }],
    },
    {
        id: 'tinyml', group: 'research', title: 'TinyML — Target-speaker keyword spotting',
        summary: 'Recognizing whether an enrolled speaker said “yes,” even when another voice overlaps. Our team explored local microphone processing and inference on an Arduino under tight memory and latency constraints.',
        tags: ['TinyML', 'Arduino', 'Keyword spotting', 'Speaker conditioning', 'Embedded inference'],
        status: 'Academic team project · Unpublished', contribution: 'Main coauthor',
    },
    {
        id: 'sign-language', group: 'research', title: 'Jisr — Arabic sign-language recognition',
        summary: 'An Android application that recognizes isolated Arabic signs using skeletal landmarks and a temporal model. Our team connected gesture recognition with on-device inference and an interface for recording or uploading signs.',
        tags: ['MediaPipe', 'TCN', 'TFLite', 'Flutter / Kotlin', 'Mobile inference'],
        status: 'Academic team project · Unpublished', contribution: 'Main coauthor',
        links: [{ label: 'View app screens', href: '/images/jisr-home.webp' }],
    },
    {
        id: 'fog-computing', group: 'research', title: 'Collaborative fault tolerance',
        summary: 'A simulation study of container migration between independently managed fog-computing nodes. Our team combined gossip, reverse auctions, and trust scoring to explore how nodes could cooperate during faults.',
        tags: ['iFogSim2', 'Fog computing', 'Gossip protocols', 'Reverse auctions', 'Simulation'],
        status: 'Academic team project · Unpublished', contribution: 'Main coauthor',
    },
    {
        id: 'insurance-fraud', group: 'research', title: 'Insurance fraud detection',
        summary: 'Investigating synthetic data for imbalanced automobile insurance fraud classification. Our team evaluated TVAE-generated samples with XGBoost and Random Forest, comparing this approach with conventional resampling methods.',
        tags: ['TVAE', 'XGBoost', 'Random Forest', 'Synthetic data', 'Class balancing'],
        status: 'Academic team project · Unpublished', contribution: 'Main coauthor',
    },
    {
        id: 'flight-delay', group: 'research', title: 'Flight departure delay prediction',
        summary: 'A machine learning study of on-time and delayed departures at Dubai Airport. Our team combined flight, weather, and airport activity data, then explored preprocessing, class balancing, and model tuning.',
        tags: ['Classification', 'Data preprocessing', 'Class balancing', 'Model tuning'],
        status: 'Academic team project · Unpublished', contribution: 'Main coauthor',
    },
    {
        id: 'circuit-sizing', group: 'research', title: 'Analog circuit sizing',
        summary: 'Exploring analog circuit sizing through offline trajectory modeling with a Decision Transformer and DDPG-generated demonstrations in AnalogGym. I had a limited role in this collaborative investigation of transformer-based design automation.',
        tags: ['Decision Transformer', 'DDPG', 'AnalogGym', 'Offline trajectory modeling'],
        status: 'Academic team project · Unpublished', contribution: 'Contributing coauthor · Limited role',
    },
    {
        id: 'tweetapp', group: 'software', title: 'TweetApp',
        summary: 'A Twitter-style application for sharing posts and following a live feed. Built during full-stack engineering training, it connects a React interface and Redux state management with Kafka and WebSockets.',
        tags: ['Java / Spring Boot', 'React / Redux', 'Kafka', 'WebSockets', 'MySQL', 'AWS'],
        status: 'Full-stack engineering training',
    },
    {
        id: 'healthcare-records', group: 'software', title: 'Healthcare Records',
        summary: 'A training application for uploading patient and physician information and retrieving records by patient ID. It brings together a Spring Boot backend, an Angular interface, and a MySQL database.',
        tags: ['Java', 'Spring Boot', 'Angular 8', 'MySQL', 'Full-stack development'],
        status: 'Training project',
    },
    {
        id: 'stock-market', group: 'software', title: 'Stock Market Charts',
        summary: 'A portal for uploading daily stock prices from Excel and comparing companies or time periods. Built during training with a Java backend, an Angular interface, and persistent price data.',
        tags: ['Java', 'Spring Boot', 'Angular 8', 'MySQL', 'Data import', 'Data comparison'],
        status: 'Training project',
    },
    {
        id: 'blockchain', group: 'software', title: 'Blockchain identity verification',
        summary: 'An undergraduate prototype exploring identity checks for an immigration scenario using Ethereum records. The project connects a web interface with a Python gate-control interface; it was not an operational deployment.',
        tags: ['Ethereum', 'Solidity', 'Python', 'HTML / CSS', 'JavaScript', 'DApp development'],
        status: 'Undergraduate final project',
    },
];

export const education = [
    {
        degree: 'M.S. in Machine Learning', institution: 'American University of Sharjah',
        dates: 'Fall 2024–present', note: 'Expected graduation: Fall 2026',
        description: 'My ongoing master’s thesis explores securing federated learning using machine learning and blockchain.',
    },
    {
        degree: 'B.E. in Information Technology', institution: 'Deccan College of Engineering & Technology, Osmania University',
        dates: '2015–2019',
    },
];
