export interface Deliverable {
    title: string;
    description: string;
}

export interface RoleDetails {
    id: string;
    title: string;
    category: string;
    shortDescription: string;
    fullDescription: string;
    heroImage: string;
    technologies: string[];
    deliverables: Deliverable[];
}

export const rolesData: Record<string, RoleDetails> = {
    // DEVELOPMENT
    "frontend-developers": {
        id: "frontend-developers",
        title: "Frontend Developers",
        category: "Development",
        shortDescription: "Crafting beautiful, responsive, and intuitive user interfaces.",
        fullDescription: "Our frontend developers specialize in building engaging and highly responsive user interfaces. They bridge the gap between design and technology, ensuring that your application looks stunning and functions flawlessly across all devices and browsers.",
        heroImage: "/images/heroes/dev.jpg",
        technologies: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
        deliverables: [
            { title: "Pixel-Perfect UI", description: "Translating UX design wireframes into high-quality, precise code. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Performance Optimization", description: "Optimizing components for maximum performance across web-capable devices and browsers. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Component Libraries", description: "Building robust, reusable code and component libraries for future use and scale. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Cross-Functional Collaboration", description: "Collaborating seamlessly with backend developers and web designers to improve usability. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Responsive Design", description: "Ensuring applications look flawless on any screen size or orientation. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Accessibility Compliance", description: "Developing interfaces that are fully accessible to all users following WCAG guidelines. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "backend-engineers": {
        id: "backend-engineers",
        title: "Backend Engineers",
        category: "Development",
        shortDescription: "Architecting robust, scalable, and secure server-side applications.",
        fullDescription: "Backend engineers form the backbone of your digital products. We provide experts who design, build, and maintain the server-side logic, databases, and APIs that power your frontend applications, ensuring high performance and data security.",
        heroImage: "/images/heroes/dev.jpg",
        technologies: ["Node.js", "Python", "Java", "Go", "Ruby on Rails", "PostgreSQL", "MongoDB"],
        deliverables: [
            { title: "API Development", description: "Developing highly scalable server-side logic and RESTful/GraphQL APIs. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Database Architecture", description: "Designing, integrating, and managing robust database schemas. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "High Performance", description: "Ensuring exceptional performance and responsiveness to requests from the front-end. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Security Implementation", description: "Implementing strict security, authentication, and data protection measures. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "System Integration", description: "Connecting third-party services and legacy systems into cohesive workflows. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Server Optimization", description: "Tuning server configurations to handle high traffic and intense computational loads. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "full-stack-developers": {
        id: "full-stack-developers",
        title: "Full Stack Developers",
        category: "Development",
        shortDescription: "End-to-end development experts bridging frontend and backend.",
        fullDescription: "Our full stack developers are versatile experts capable of handling both client-side and server-side development. They bring a holistic understanding of the tech stack, enabling rapid prototyping, seamless integration, and efficient feature delivery.",
        heroImage: "/images/heroes/dev.jpg",
        technologies: ["MERN Stack", "MEAN Stack", "Next.js", "Django", "Spring Boot", "GraphQL"],
        deliverables: [
            { title: "End-to-End Solutions", description: "Designing engaging user interactions alongside robust server architectures. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Database Management", description: "Developing functional databases, schemas, and efficient server operations. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Cross-Platform Optimization", description: "Ensuring deep cross-platform optimization for mobile and web environments. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Full Lifecycle Ownership", description: "Seeing through complex projects from initial conception to finished product. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Rapid Prototyping", description: "Quickly spinning up MVPs to validate business ideas and technical feasibility. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "API Integration", description: "Seamlessly bridging frontend interfaces with powerful backend systems. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "mobile-app-devs": {
        id: "mobile-app-devs",
        title: "Mobile App Developers",
        category: "Development",
        shortDescription: "Building native and cross-platform mobile experiences.",
        fullDescription: "In a mobile-first world, having a powerful app is crucial. We provide mobile app developers skilled in both native (iOS/Android) and cross-platform frameworks to build fast, secure, and user-friendly applications for your customers.",
        heroImage: "/images/heroes/dev.jpg",
        technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Objective-C", "Java"],
        deliverables: [
            { title: "Native Mobile APIs", description: "Developing robust application programming interfaces (APIs) to support mobile functionality. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Modern Best Practices", description: "Applying the latest terminology, concepts, and best practices for modern mobile apps. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Web-to-Mobile Adaptation", description: "Strategically adapting existing web applications into seamless mobile experiences. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Continuous Innovation", description: "Working closely with colleagues to constantly innovate app functionality and design. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "App Store Deployment", description: "Managing the complex submission processes for both Apple App Store and Google Play. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Offline Functionality", description: "Engineering resilient apps that function reliably even under poor network conditions. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "ui-ux-designers": {
        id: "ui-ux-designers",
        title: "UI/UX Designers",
        category: "Development",
        shortDescription: "Designing intuitive, user-centric digital experiences.",
        fullDescription: "Our UI/UX designers create products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability, and function.",
        heroImage: "/images/heroes/dev.jpg",
        technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Framer", "Illustrator"],
        deliverables: [
            { title: "User Research", description: "Gathering and evaluating complex user requirements in collaboration with engineers. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Design Architecture", description: "Illustrating structural design ideas using storyboards, process flows, and sitemaps. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Interface Design", description: "Designing beautiful graphic user interface elements, menus, tabs, and widgets. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Interactive Prototypes", description: "Developing high-fidelity UI mockups and prototypes that clearly illustrate site function. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Usability Testing", description: "Conducting user tests to identify friction points and validate design decisions. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Brand Alignment", description: "Ensuring all digital interfaces consistently reflect the core brand identity. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },

    // TESTING & QA
    "automation-engineers": {
        id: "automation-engineers",
        title: "Automation Engineers",
        category: "Testing & QA",
        shortDescription: "Accelerating release cycles with automated testing frameworks.",
        fullDescription: "Automation engineers design, build, and maintain automated testing frameworks to ensure software quality at scale. By replacing manual processes with scripts, they significantly reduce testing time and increase deployment confidence.",
        heroImage: "/images/heroes/dev.jpg",
        technologies: ["Selenium", "Cypress", "Playwright", "Appium", "JUnit", "TestNG"],
        deliverables: [
            { title: "Automated Scripts", description: "Designing, writing, and executing complex test automation scripts. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Framework Development", description: "Building and utilizing advanced test automation frameworks from scratch. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Defect Investigation", description: "Deeply investigating problems and edge cases discovered during automated testing. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Solution Engineering", description: "Collaborating closely with developers to find immediate solutions to failing tests. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "CI/CD Integration", description: "Wiring automated tests directly into deployment pipelines for continuous validation. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Regression Suites", description: "Maintaining vast suites of regression tests to ensure old bugs do not return. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "manual-qa-testers": {
        id: "manual-qa-testers",
        title: "Manual QA Testers",
        category: "Testing & QA",
        shortDescription: "Meticulous human verification of software quality.",
        fullDescription: "While automation is powerful, human intuition is irreplaceable. Our manual QA testers explore your applications like real users, identifying usability flaws, edge cases, and visual bugs that automated scripts might miss.",
        heroImage: "/images/heroes/dev.jpg",
        technologies: ["Jira", "TestRail", "Zephyr", "Postman", "Bugzilla", "BrowserStack"],
        deliverables: [
            { title: "Specification Review", description: "Meticulously reviewing and analyzing technical system specifications. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Test Execution", description: "Executing detailed test scripts and comprehensively reviewing outcomes. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Issue Documentation", description: "Accurately reporting, tracking, and documenting obscure technical issues. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Post-Release Testing", description: "Conducting thorough post-release and post-implementation functional testing. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Exploratory Testing", description: "Going off-script to find unusual bugs through creative user simulation. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Usability Audits", description: "Providing critical human feedback on the intuitiveness of the user interface. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "performance-testers": {
        id: "performance-testers",
        title: "Performance Testers",
        category: "Testing & QA",
        shortDescription: "Ensuring your systems handle high traffic gracefully.",
        fullDescription: "Performance testers evaluate the speed, responsiveness, and stability of your systems under a workload. They simulate thousands of users to identify bottlenecks, memory leaks, and scaling limits before your customers do.",
        heroImage: "/images/heroes/dev.jpg",
        technologies: ["JMeter", "Gatling", "LoadRunner", "k6", "New Relic", "Datadog"],
        deliverables: [
            { title: "Scenario Scripting", description: "Creating highly accurate test scripts based on identified real-world usage scenarios. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Load & Stress Testing", description: "Executing intense load, stress, endurance, and extreme spike tests. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Bottleneck Analysis", description: "Deeply analyzing test results to pinpoint application and database bottlenecks. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Optimization Strategy", description: "Collaborating directly with developers to architect system performance improvements. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Capacity Planning", description: "Predicting future infrastructure needs based on current scaling limits. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Memory Leak Detection", description: "Monitoring long-running instances to catch slow resource degradation. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "security-analysts": {
        id: "security-analysts",
        title: "Security Analysts",
        category: "Testing & QA",
        shortDescription: "Safeguarding applications against vulnerabilities and threats.",
        fullDescription: "Security analysts are the first line of defense against cyber threats. They conduct penetration testing, vulnerability assessments, and code reviews to ensure your applications and data remain secure against malicious attacks.",
        heroImage: "/images/heroes/security.jpg",
        technologies: ["Burp Suite", "OWASP ZAP", "Nmap", "Metasploit", "Wireshark", "Nessus"],
        deliverables: [
            { title: "Vulnerability Assessments", description: "Performing rigorous vulnerability assessments and ethical penetration testing. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Traffic Monitoring", description: "Constantly monitoring network traffic for unusual security events and alerts. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Security Policies", description: "Developing, implementing, and enforcing stringent security protocols. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Incident Response", description: "Responding immediately and decisively to critical security-related incidents. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Code Auditing", description: "Reviewing source code to catch security flaws before they reach production. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Compliance Verification", description: "Ensuring systems meet strict industry standards like SOC2, HIPAA, and GDPR. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "sdet-professionals": {
        id: "sdet-professionals",
        title: "SDET Professionals",
        category: "Testing & QA",
        shortDescription: "Software Development Engineers in Test bridging dev and QA.",
        fullDescription: "SDETs are highly skilled developers whose primary focus is testing. They write code to test code, build CI/CD pipelines, and create complex testing architectures that integrate seamlessly into the development lifecycle.",
        heroImage: "/images/heroes/dev.jpg",
        technologies: ["Java", "Python", "Docker", "Jenkins", "Kubernetes", "GitLab CI"],
        deliverables: [
            { title: "Framework Architecture", description: "Building and maintaining sophisticated, code-heavy automated testing frameworks. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Design Participation", description: "Actively participating in early architectural design discussions to ensure testability. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Pipeline Integration", description: "Creating and managing continuous integration and deployment testing pipelines. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Mock Services", description: "Writing complex database queries and engineering mock services for isolated testing. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Performance Engineering", description: "Embedding performance checks directly into the daily development workflow. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Code Quality Metrics", description: "Establishing automated thresholds for code coverage and static analysis. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },

    // OPERATIONS
    "devops-engineers": {
        id: "devops-engineers",
        title: "DevOps Engineers",
        category: "Operations",
        shortDescription: "Streamlining development and operations with CI/CD.",
        fullDescription: "DevOps engineers break down the silos between development and operations. They automate the software delivery process, manage cloud infrastructure, and ensure rapid, reliable deployments through continuous integration and delivery.",
        heroImage: "/images/heroes/cloud.jpg",
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Ansible"],
        deliverables: [
            { title: "CI/CD Pipelines", description: "Architecting and maintaining flawless Continuous Integration and Delivery pipelines. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Infrastructure as Code", description: "Managing expansive cloud infrastructure programmatically using IaC tools. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "System Reliability", description: "Monitoring overall system performance, uptime, and reliability metrics. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Process Automation", description: "Aggressively automating repetitive tasks and manual operational processes. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Containerization", description: "Packaging applications into secure, scalable containers using Docker and Kubernetes. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Disaster Recovery", description: "Implementing robust backup and automated failover strategies. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "cloud-architects": {
        id: "cloud-architects",
        title: "Cloud Architects",
        category: "Operations",
        shortDescription: "Designing scalable, secure, and resilient cloud infrastructure.",
        fullDescription: "Cloud Architects design the overarching structure of your cloud environments. They ensure that your systems on AWS, Azure, or GCP are highly available, cost-effective, secure, and capable of scaling with your business needs.",
        heroImage: "/images/heroes/cloud.jpg",
        technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "CloudFormation", "Linux"],
        deliverables: [
            { title: "Cloud Architecture", description: "Designing incredibly robust, scalable, and resilient cloud-native architectures. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Legacy Migration", description: "Safely orchestrating the migration of heavy legacy applications into the cloud. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Cost Optimization", description: "Analyzing and drastically optimizing cloud resource utilization and monthly costs. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Security Compliance", description: "Ensuring top-tier cloud security and adherence to strict compliance standards. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Multi-Cloud Strategy", description: "Designing systems that span across AWS, Azure, and GCP for ultimate redundancy. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Scalability Planning", description: "Ensuring infrastructure can seamlessly handle exponential user growth. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "system-administrators": {
        id: "system-administrators",
        title: "System Administrators",
        category: "Operations",
        shortDescription: "Maintaining the health and performance of IT systems.",
        fullDescription: "System Administrators keep the lights on. They install, upgrade, and monitor software and hardware, maintain operating systems, business applications, and security tools to ensure smooth day-to-day business operations.",
        heroImage: "/images/heroes/support.jpg",
        technologies: ["Linux (RHEL/Ubuntu)", "Windows Server", "Active Directory", "Bash/PowerShell", "VMware", "Apache/Nginx"],
        deliverables: [
            { title: "Hardware & Software", description: "Installing and configuring critical software, hardware, and physical networks. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "System Troubleshooting", description: "Vigilantly monitoring system performance and troubleshooting deep technical issues. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "IT Infrastructure", description: "Ensuring absolute security and maximum efficiency of the entire IT infrastructure. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Access Management", description: "Strictly managing user accounts, permissions, security roles, and passwords. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Patch Management", description: "Keeping all operating systems and critical software perfectly up to date. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Backup Operations", description: "Managing daily data backups to prevent catastrophic data loss. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "network-engineers": {
        id: "network-engineers",
        title: "Network Engineers",
        category: "Operations",
        shortDescription: "Designing and managing complex enterprise networks.",
        fullDescription: "Network engineers are responsible for designing, implementing, monitoring and managing the local and wide area networks of an organization to ensure maximum uptime for users. They configure routers, switches, and firewalls.",
        heroImage: "/images/heroes/cloud.jpg",
        technologies: ["Cisco", "Juniper", "BGP/OSPF", "VPN", "Firewalls (Palo Alto/Fortinet)", "Wireshark"],
        deliverables: [
            { title: "Network Design", description: "Designing and deploying new network solutions to dramatically improve efficiency. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Equipment Support", description: "Installing, configuring, and supporting core routers, proxy servers, and switches. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Security Routing", description: "Configuring advanced firewalls, routing, and switching for ultimate security. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Performance Monitoring", description: "Maximizing network performance through constant, ongoing monitoring. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "VPN Architecture", description: "Building secure tunnels for remote workers and distributed branch offices. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Bandwidth Optimization", description: "Managing QoS rules to ensure critical applications always have bandwidth. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "it-support-specialists": {
        id: "it-support-specialists",
        title: "IT Support Specialists",
        category: "Operations",
        shortDescription: "Providing critical technical assistance and issue resolution.",
        fullDescription: "IT Support Specialists provide help and advice to people and organizations using computer software or equipment. They serve as the first point of contact for technical assistance, ensuring your team remains productive.",
        heroImage: "/images/heroes/support.jpg",
        technologies: ["Zendesk", "Jira Service Desk", "ServiceNow", "Office 365", "Google Workspace", "Remote Desktop"],
        deliverables: [
            { title: "Device Configuration", description: "Installing and configuring user hardware, systems, networks, and peripherals. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "System Maintenance", description: "Routinely monitoring and maintaining user computer systems and local networks. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Ticket Resolution", description: "Responding rapidly and effectively to incoming service issues and IT requests. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Technical Assistance", description: "Providing patient, expert technical support across the entire organization. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "SaaS Management", description: "Administering accounts for Google Workspace, Office 365, and internal tools. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Hardware Procurement", description: "Managing the lifecycle of employee laptops, phones, and desk equipment. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },

    // AI & DATA
    "data-scientists": {
        id: "data-scientists",
        title: "Data Scientists",
        category: "AI & Data",
        shortDescription: "Extracting actionable insights from complex datasets.",
        fullDescription: "Data Scientists utilize their skills in statistics and machine learning to analyze large, complex datasets. They build predictive models and algorithms that help businesses make informed, data-driven decisions and uncover hidden trends.",
        heroImage: "/images/heroes/data.jpg",
        technologies: ["Python", "R", "Jupyter", "Pandas", "Scikit-Learn", "SQL"],
        deliverables: [
            { title: "Data Sourcing", description: "Identifying incredibly valuable data sources and automating vast collection processes. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Data Preprocessing", description: "Undertaking rigorous preprocessing of messy structured and unstructured data. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Pattern Discovery", description: "Deeply analyzing massive amounts of information to discover hidden market trends. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Predictive Modeling", description: "Building highly accurate predictive models and complex machine-learning algorithms. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "A/B Testing", description: "Designing and executing statistically rigorous experiments to test hypotheses. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Business Strategy", description: "Presenting findings in a way that directly shapes high-level company strategy. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "machine-learning-engineers": {
        id: "machine-learning-engineers",
        title: "Machine Learning Engineers",
        category: "AI & Data",
        shortDescription: "Building scalable AI models and intelligent systems.",
        fullDescription: "Machine Learning Engineers take the models created by data scientists and deploy them into production. They build scalable, highly performant systems capable of handling real-time AI processing, natural language processing, and computer vision.",
        heroImage: "/images/heroes/ai.png",
        technologies: ["TensorFlow", "PyTorch", "CUDA", "Hugging Face", "AWS SageMaker", "Python"],
        deliverables: [
            { title: "AI System Design", description: "Architecting and developing cutting-edge machine learning and deep learning systems. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Experimentation", description: "Running rigorous machine learning tests, hyperparameter tuning, and experiments. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Algorithm Implementation", description: "Implementing highly appropriate, perfectly optimized ML algorithms for scale. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Model Deployment", description: "Seamlessly deploying models to production and monitoring their live performance. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "NLP & Vision", description: "Integrating advanced capabilities like computer vision and natural language processing. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "MLOps Pipelines", description: "Building the infrastructure to continuously retrain and deploy updated models. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "data-analysts": {
        id: "data-analysts",
        title: "Data Analysts",
        category: "AI & Data",
        shortDescription: "Transforming raw data into clear, visual business intelligence.",
        fullDescription: "Data Analysts translate numbers into plain English. They collect, process, and perform statistical analyses on data. Their reports and visualizations help stakeholders understand performance metrics and guide business strategy.",
        heroImage: "/images/heroes/data.jpg",
        technologies: ["Excel", "Tableau", "Power BI", "SQL", "Google Analytics", "Looker"],
        deliverables: [
            { title: "Statistical Analysis", description: "Interpreting complex data and analyzing results using proven statistical techniques. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Data Strategy", description: "Developing and implementing highly efficient data collection systems and strategies. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Data Acquisition", description: "Securely acquiring vital data from varied primary or secondary data sources. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Trend Interpretation", description: "Identifying, analyzing, and clearly interpreting trends in complex data sets. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Visual Dashboards", description: "Building highly intuitive dashboards in tools like Tableau or Power BI. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Executive Reporting", description: "Translating technical data findings into clear, actionable reports for leadership. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "data-engineers": {
        id: "data-engineers",
        title: "Data Engineers",
        category: "AI & Data",
        shortDescription: "Building the infrastructure for massive data pipelines.",
        fullDescription: "Data Engineers are the builders of the data world. They construct, test, and maintain highly scalable data management systems and pipelines (ETL). They ensure that data flows smoothly from source to destination for analysts and scientists to use.",
        heroImage: "/images/heroes/data.jpg",
        technologies: ["Apache Spark", "Hadoop", "Kafka", "Airflow", "Snowflake", "Databricks"],
        deliverables: [
            { title: "Pipeline Architecture", description: "Creating and maintaining optimal, highly resilient data pipeline architecture. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Complex Datasets", description: "Assembling incredibly large, complex data sets that perfectly meet business requirements. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Process Improvement", description: "Constantly identifying, designing, and implementing internal data process improvements. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "ETL Infrastructure", description: "Building the robust infrastructure required for optimal extraction, transformation, and loading. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Data Warehousing", description: "Structuring data lakes and warehouses like Snowflake for optimal query speeds. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Streaming Data", description: "Engineering real-time data streaming pipelines using Kafka or Spark. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "bi-developers": {
        id: "bi-developers",
        title: "BI Developers",
        category: "AI & Data",
        shortDescription: "Engineering dashboards and reports for business intelligence.",
        fullDescription: "Business Intelligence (BI) Developers create and manage BI and analytics solutions that turn data into knowledge. They specialize in data warehousing, designing dashboards, and creating reports that empower executives to make informed decisions.",
        heroImage: "/images/heroes/data.jpg",
        technologies: ["Power BI", "Tableau", "QlikView", "SSAS", "SSIS", "DAX"],
        deliverables: [
            { title: "BI Solutions", description: "Designing, developing, and maintaining enterprise-grade business intelligence solutions. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Custom Queries", description: "Crafting and executing highly complex queries upon request for custom data. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Data Visualization", description: "Presenting vital information beautifully through advanced reports and visualization. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Technical Translation", description: "Seamlessly translating broad business needs into exact technical specifications. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "OLAP Cubes", description: "Building multi-dimensional data models for lightning-fast business reporting. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Self-Service BI", description: "Empowering non-technical users to build their own reports safely and accurately. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    
    // IT TRAINING
    "clinical-sas-training": {
        id: "clinical-sas-training",
        title: "Clinical SAS Training",
        category: "IT Training",
        shortDescription: "Master the Legacy Standard for clinical trial data.",
        fullDescription: "Master the Legacy Standard. Take clinical trial data from raw format to FDA-submission ready. Learn essential Base/Advanced SAS, macro programming, and how to build compliant SDTM and ADaM datasets.",
        heroImage: "/images/IT-training.jpg",
        technologies: ["Base SAS", "Advanced SAS", "SAS Macros", "SDTM", "ADaM", "CDISC"],
        deliverables: [
            { title: "Raw Data Transformation", description: "Learn to process raw clinical trial data into standardized formats efficiently. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "FDA Compliance", description: "Master the creation of FDA-submission ready datasets using industry standards. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Macro Programming", description: "Develop advanced skills in SAS macro programming to automate complex tasks. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "SDTM Datasets", description: "Build fully compliant Study Data Tabulation Model (SDTM) datasets from scratch. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "ADaM Datasets", description: "Construct Analysis Data Model (ADaM) datasets to support statistical analysis. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Quality Control", description: "Implement rigorous quality control checks to ensure data integrity and accuracy. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "r-for-clinical-trials": {
        id: "r-for-clinical-trials",
        title: "R for Clinical Trials",
        category: "IT Training",
        shortDescription: "The Future of Clinical Reporting with open-source tools.",
        fullDescription: "The Future of Clinical Reporting. Transition into open-source clinical programming. Master the pharmaverse ecosystem and use the Tidyverse to design publication-grade Tables, Listings, and Figures (TLFs) accepted by regulatory bodies.",
        heroImage: "/images/IT-training.jpg",
        technologies: ["R", "Tidyverse", "Pharmaverse", "ggplot2", "Shiny", "R Markdown"],
        deliverables: [
            { title: "Open-Source Transition", description: "Seamlessly transition your clinical reporting workflows into open-source R. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Pharmaverse Mastery", description: "Navigate and leverage the pharmaverse ecosystem for clinical trial analysis. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Data Wrangling", description: "Utilize the Tidyverse for efficient and reproducible data manipulation. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Publication-Grade TLFs", description: "Design regulatory-accepted Tables, Listings, and Figures using R. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Automated Reporting", description: "Streamline the generation of clinical reports using advanced R tools. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Regulatory Acceptance", description: "Ensure all outputs meet the strict standards required by regulatory bodies. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "python-for-clinical-data-science": {
        id: "python-for-clinical-data-science",
        title: "Python for Clinical Data Science",
        category: "IT Training",
        shortDescription: "Next-Gen Automation & Analytics bridging data and AI.",
        fullDescription: "Next-Gen Automation & Analytics. Bridge the gap between clinical data and AI. Learn to handle massive health data pipelines, parse unstructured clinical notes with NLP, and leverage Pandas and Machine Learning for modern drug discovery.",
        heroImage: "/images/IT-training.jpg",
        technologies: ["Python", "Pandas", "NLP", "Machine Learning", "Scikit-learn", "PyTorch"],
        deliverables: [
            { title: "AI Integration", description: "Bridge the gap between traditional clinical data management and modern AI. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Data Pipelines", description: "Build and handle massive health data pipelines for comprehensive analytics. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "NLP Processing", description: "Parse and analyze unstructured clinical notes using Natural Language Processing. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Advanced Analytics", description: "Leverage Pandas and other Python libraries for deep data exploration. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Machine Learning", description: "Apply predictive machine learning models to accelerate modern drug discovery. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Automation", description: "Automate repetitive data science tasks to increase efficiency and accuracy. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "r-for-real-world-evidence": {
        id: "r-for-real-world-evidence",
        title: "R for Real-World Evidence (RWE)",
        category: "IT Training",
        shortDescription: "Unlock Observational Data for real-world impact.",
        fullDescription: "Unlock Observational Data. Shift from traditional trials to real-world impact. Learn how to wrangle messy electronic health records (EHR) and insurance claims datasets using R, applying advanced epidemiological statistics to track post-market drug safety and efficacy.",
        heroImage: "/images/IT-training.jpg",
        technologies: ["R", "Epidemiology", "EHR Analysis", "Survival Analysis", "Propensity Scoring", "Causal Inference"],
        deliverables: [
            { title: "EHR Wrangling", description: "Learn to efficiently clean and structure messy electronic health records (EHR). We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Claims Data Analysis", description: "Process and analyze complex insurance claims datasets for actionable insights. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Epidemiological Statistics", description: "Apply advanced epidemiological methods to assess real-world data. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Drug Safety Tracking", description: "Monitor and evaluate post-market drug safety using observational data. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Efficacy Assessment", description: "Determine the real-world effectiveness of treatments outside clinical trials. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Impact Shift", description: "Successfully shift focus from controlled trials to real-world population impact. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    },
    "pk-pd-modeling-pharmacometrics": {
        id: "pk-pd-modeling-pharmacometrics",
        title: "PK/PD Modeling & Pharmacometrics",
        category: "IT Training",
        shortDescription: "Drive precision medicine with advanced modeling.",
        fullDescription: "Drive precision medicine. Master Non-Compartmental Analysis (NCA), compartmental differential equations, and population exposure-response simulations using advanced R and Python libraries.",
        heroImage: "/images/IT-training.jpg",
        technologies: ["R", "Python", "NCA", "Differential Equations", "Pharmacokinetics", "Pharmacodynamics"],
        deliverables: [
            { title: "NCA Mastery", description: "Perform accurate Non-Compartmental Analysis (NCA) on complex datasets. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Differential Equations", description: "Formulate and solve compartmental differential equations for drug modeling. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Population Simulations", description: "Conduct population exposure-response simulations to predict outcomes. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Precision Medicine", description: "Leverage advanced modeling techniques to drive precision medicine initiatives. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Cross-Language Tools", description: "Utilize both R and Python libraries to maximize modeling capabilities. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." },
            { title: "Advanced Pharmacometrics", description: "Develop a deep understanding of pharmacokinetics and pharmacodynamics principles. We leverage industry-leading best practices to ensure seamless execution and robust scalability. Our proactive approach guarantees long-term success, minimizing risks while maximizing your overall return on investment." }
        ]
    }
};
