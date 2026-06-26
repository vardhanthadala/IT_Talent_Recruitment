"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RoleDetails } from "@/data/what-we-do";
import {
    FiCode, FiActivity, FiCheckCircle, FiTool, FiMonitor, FiLayout,
    FiTerminal, FiServer, FiShield, FiLock, FiPieChart, FiBarChart2, FiGlobe, FiHeadphones, FiDatabase, FiLayers, FiCpu
} from "react-icons/fi";
import { FaAws, FaMicrosoft, FaJava, FaWindows, FaFileExcel } from "react-icons/fa";
import {
    SiReact, SiVuedotjs, SiAngular, SiTypescript, SiTailwindcss,
    SiNodedotjs, SiPython, SiPostgresql, SiMongodb, SiDjango, SiSpringboot,
    SiFigma, SiJenkins, SiDocker, SiKubernetes, SiTerraform, SiAnsible,
    SiGooglecloud, SiLinux, SiTensorflow, SiPytorch, SiJira, SiDatadog,
    SiSwift, SiKotlin, SiGithub, SiSelenium, SiCypress,
    SiNextdotjs, SiGraphql, SiFlutter, SiFramer, SiSketch, SiInvision,
    SiGo, SiRubyonrails, SiPostman, SiApachejmeter, SiGatling, SiK6, SiJunit5, SiAppium,
    SiApple
} from "react-icons/si";

const TECH_ICON_MAP: Record<string, { icon?: any, color: string, slug?: string }> = {
    // Cloud & DevOps
    "AWS": { icon: FaAws, color: "#232F3E" },
    "Microsoft Azure": { icon: FaMicrosoft, color: "#0078D4" },
    "Google Cloud": { icon: SiGooglecloud, color: "#4285F4" },
    "Kubernetes": { icon: SiKubernetes, color: "#326CE5" },
    "Linux": { icon: SiLinux, color: "#FCC624" },
    "Linux (RHEL/Ubuntu)": { icon: SiLinux, color: "#FCC624" },
    "Docker": { icon: SiDocker, color: "#2496ED" },
    "Terraform": { icon: SiTerraform, color: "#844FBA" },
    "Ansible": { icon: SiAnsible, color: "#EE0000" },
    "Jenkins": { icon: SiJenkins, color: "#D24939" },
    "GitLab CI": { icon: SiGithub, color: "#FCA121" },

    // Frontend
    "React": { icon: SiReact, color: "#61DAFB" },
    "Next.js": { icon: SiNextdotjs, color: "#000000" },
    "React Native": { icon: SiReact, color: "#61DAFB" },
    "Vue.js": { icon: SiVuedotjs, color: "#4FC08D" },
    "Angular": { icon: SiAngular, color: "#DD0031" },
    "TypeScript": { icon: SiTypescript, color: "#3178C6" },
    "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
    "MERN Stack": { icon: SiReact, color: "#61DAFB" },
    "MEAN Stack": { icon: SiAngular, color: "#DD0031" },
    "Flutter": { icon: SiFlutter, color: "#02569B" },

    // Backend & Languages
    "Node.js": { icon: SiNodedotjs, color: "#339933" },
    "Python": { icon: SiPython, color: "#3776AB" },
    "Java": { icon: FaJava, color: "#007396" },
    "Go": { icon: SiGo, color: "#00ADD8" },
    "Ruby on Rails": { icon: SiRubyonrails, color: "#CC0000" },
    "Django": { icon: SiDjango, color: "#092E20" },
    "Spring Boot": { icon: SiSpringboot, color: "#6DB33F" },
    "GraphQL": { icon: SiGraphql, color: "#E10098" },
    "Swift": { icon: SiSwift, color: "#F05138" },
    "Kotlin": { icon: SiKotlin, color: "#7F52FF" },
    "Objective-C": { icon: SiApple, color: "#000000" },

    // Database
    "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
    "MongoDB": { icon: SiMongodb, color: "#47A248" },
    "SQL": { icon: SiPostgresql, color: "#4169E1" },

    // AI & Data
    "TensorFlow": { icon: SiTensorflow, color: "#FF6F00" },
    "PyTorch": { icon: SiPytorch, color: "#EE4C2C" },
    "Datadog": { icon: SiDatadog, color: "#632CA6" },

    // Design
    "Figma": { icon: SiFigma, color: "#F24E1E" },
    "Framer": { icon: SiFramer, color: "#0055FF" },
    "Sketch": { icon: SiSketch, color: "#F7B500" },
    "InVision": { icon: SiInvision, color: "#FF3366" },
    "Adobe XD": { slug: "adobexd", color: "#FF61F6" },
    "Illustrator": { slug: "adobeillustrator", color: "#FF9A00" },

    // Testing & Tools
    "Jira": { icon: SiJira, color: "#0052CC" },
    "Selenium": { icon: SiSelenium, color: "#43B02A" },
    "Cypress": { icon: SiCypress, color: "#17202C" },
    "TestRail": { icon: SiJira, color: "#0052CC" },
    "Appium": { icon: SiAppium, color: "#660066" },
    "JUnit": { icon: SiJunit5, color: "#25A162" },
    "Postman": { icon: SiPostman, color: "#FF6C37" },
    "JMeter": { icon: SiApachejmeter, color: "#D22128" },
    "Gatling": { icon: SiGatling, color: "#FF9900" },
    "k6": { icon: SiK6, color: "#7D64FF" },
    "Playwright": { slug: "playwright", color: "#2EAD33" },
    "TestNG": { slug: "testng", color: "#E03D3D" },
    "Bugzilla": { slug: "bugzilla", color: "#DB181B" },
    "BrowserStack": { slug: "browserstack", color: "#0073B2" },
    "LoadRunner": { slug: "microfocus", color: "#00A3DF" }
};

const getTechIconData = (techName: string) => {
    if (TECH_ICON_MAP[techName]) return TECH_ICON_MAP[techName];

    const t = techName.toLowerCase();

    // Custom smart aliases
    if (t === 'go' || t === 'golang') return TECH_ICON_MAP["Go"];
    if (t === 'k6') return TECH_ICON_MAP["k6"];
    if (t.includes('next')) return TECH_ICON_MAP["Next.js"];
    if (t.includes('graph')) return TECH_ICON_MAP["GraphQL"];
    if (t.includes('flutter')) return TECH_ICON_MAP["Flutter"];
    if (t.includes('ruby') || t.includes('rails')) return TECH_ICON_MAP["Ruby on Rails"];
    if (t.includes('framer')) return TECH_ICON_MAP["Framer"];
    if (t.includes('sketch')) return TECH_ICON_MAP["Sketch"];
    if (t.includes('invision')) return TECH_ICON_MAP["InVision"];
    if (t.includes('xd') || t.includes('adobe xd')) return TECH_ICON_MAP["Adobe XD"];
    if (t.includes('illustrator')) return TECH_ICON_MAP["Illustrator"];
    if (t.includes('objective-c') || t.includes('objective c')) return TECH_ICON_MAP["Objective-C"];
    if (t.includes('playwright')) return TECH_ICON_MAP["Playwright"];
    if (t.includes('appium')) return TECH_ICON_MAP["Appium"];
    if (t.includes('junit')) return TECH_ICON_MAP["JUnit"];
    if (t.includes('testng')) return TECH_ICON_MAP["TestNG"];
    if (t.includes('postman')) return TECH_ICON_MAP["Postman"];
    if (t.includes('bugzilla')) return TECH_ICON_MAP["Bugzilla"];
    if (t.includes('browserstack') || t.includes('browser stack')) return TECH_ICON_MAP["BrowserStack"];
    if (t.includes('jmeter')) return TECH_ICON_MAP["JMeter"];
    if (t.includes('gatling')) return TECH_ICON_MAP["Gatling"];
    if (t.includes('loadrunner') || t.includes('load runner')) return TECH_ICON_MAP["LoadRunner"];
    if (t.includes('node')) return TECH_ICON_MAP["Node.js"];
    if (t.includes('react')) return TECH_ICON_MAP["React"];
    if (t.includes('vue')) return TECH_ICON_MAP["Vue.js"];
    if (t.includes('angular')) return TECH_ICON_MAP["Angular"];
    if (t.includes('postgres') || t.includes('sql')) return TECH_ICON_MAP["PostgreSQL"];
    if (t.includes('mongo')) return TECH_ICON_MAP["MongoDB"];
    if (t.includes('azure')) return TECH_ICON_MAP["Microsoft Azure"];
    if (t.includes('aws') || t.includes('amazon')) return TECH_ICON_MAP["AWS"];
    if (t.includes('gcp') || t.includes('google')) return TECH_ICON_MAP["Google Cloud"];
    if (t.includes('k8s') || t.includes('kube')) return TECH_ICON_MAP["Kubernetes"];
    if (t.includes('linux') || t.includes('ubuntu') || t.includes('rhel')) return TECH_ICON_MAP["Linux"];
    if (t.includes('spring')) return TECH_ICON_MAP["Spring Boot"];
    if (t.includes('macos') || t === 'mac' || t.includes('ios') || t.includes('apple')) return TECH_ICON_MAP["Objective-C"];
    if (t.includes('android')) return TECH_ICON_MAP["Kotlin"];
    if (t.includes('git')) return TECH_ICON_MAP["GitLab CI"];
    if (t.includes('testrail') || t.includes('zephyr')) return TECH_ICON_MAP["TestRail"];

    // Massive Fallback Catchers using exact SimpleIcons CDN slugs!
    if (t.includes('windows') || t.includes('active directory')) return { icon: FaWindows, color: "#0078D4" };
    if (t.includes('excel')) return { icon: FaFileExcel, color: "#217346" };
    if (t.includes('tableau')) return { slug: "tableau", color: "#E97627" };
    if (t.includes('power bi')) return { slug: "powerbi", color: "#F2C811" };
    if (t.includes('looker')) return { slug: "looker", color: "#4285F4" };
    if (t.includes('qlik')) return { slug: "qlik", color: "#009845" };
    if (t.includes('ssas') || t.includes('dax') || t.includes('ssis')) return { slug: "microsoftsqlserver", color: "#CC292B" };
    if (t.includes('spark')) return { slug: "apachespark", color: "#E25A1C" };
    if (t.includes('hadoop')) return { slug: "apachehadoop", color: "#FFFE38" };
    if (t.includes('kafka')) return { slug: "apachekafka", color: "#231F20" };
    if (t.includes('airflow')) return { slug: "apacheairflow", color: "#017CEE" };
    if (t.includes('snowflake')) return { slug: "snowflake", color: "#29B5E8" };
    if (t.includes('databricks')) return { slug: "databricks", color: "#FF3621" };
    
    // IT Training & Clinical Specifics
    if (t.includes('sas')) return { icon: FiDatabase, color: "#0078D4" };
    if (t.includes('cdisc')) return { icon: FiCheckCircle, color: "#1679A7" };
    if (t.includes('sdtm')) return { icon: FiLayers, color: "#00A3DF" };
    if (t.includes('adam')) return { icon: FiPieChart, color: "#2EAD33" };
    
    if (t.includes('tidyverse') || t.includes('pharmaverse')) return { icon: FiLayers, color: "#276DC3" };
    if (t.includes('ggplot2')) return { icon: FiBarChart2, color: "#276DC3" };
    if (t.includes('shiny')) return { icon: FiMonitor, color: "#276DC3" };
    if (t.includes('r markdown')) return { slug: "markdown", color: "#000000" };
    if (t.includes('nlp') || t.includes('machine learning')) return { icon: FiCpu, color: "#FF6F00" };
    if (t.includes('ehr') || t.includes('epidemiology') || t.includes('survival') || t.includes('propensity') || t.includes('causal')) return { icon: FiActivity, color: "#47A248" };
    if (t.includes('nca') || t.includes('differential') || t.includes('pharmacokinetics') || t.includes('pharmacodynamics')) return { icon: FiActivity, color: "#E97627" };

    if (t === 'r') return { slug: "r", color: "#276DC3" };
    if (t.includes('jupyter')) return { slug: "jupyter", color: "#F37626" };
    if (t.includes('pandas')) return { slug: "pandas", color: "#150458" };
    if (t.includes('scikit')) return { slug: "scikitlearn", color: "#F7931E" };
    if (t.includes('cuda')) return { slug: "nvidia", color: "#76B900" };
    if (t.includes('hugging')) return { slug: "huggingface", color: "#FFD21E" };
    if (t.includes('burp')) return { slug: "burpsuite", color: "#EA6D00" };
    if (t.includes('owasp') || t.includes('zap')) return { slug: "owasp", color: "#000000" };
    if (t.includes('nmap')) return { slug: "nmap", color: "#2B2B2B" };
    if (t.includes('metasploit')) return { slug: "metasploit", color: "#000000" };
    if (t.includes('wireshark')) return { slug: "wireshark", color: "#1679A7" };
    if (t.includes('nessus')) return { slug: "tenable", color: "#005571" };
    if (t.includes('cisco')) return { slug: "cisco", color: "#1BA0D7" };
    if (t.includes('juniper')) return { slug: "junipernetworks", color: "#71B73D" };
    if (t.includes('bgp') || t.includes('ospf') || t.includes('vpn') || t.includes('firewall')) return { icon: FiGlobe, color: "#005073" };
    if (t.includes('cloudformation')) return { slug: "amazoncloudwatch", color: "#FF4F8B" };
    if (t.includes('vmware')) return { slug: "vmware", color: "#607078" };
    if (t.includes('apache')) return { slug: "apache", color: "#D22128" };
    if (t.includes('nginx')) return { slug: "nginx", color: "#009639" };
    if (t.includes('bash')) return { slug: "gnubash", color: "#4EAA25" };
    if (t.includes('powershell')) return { slug: "powershell", color: "#5391FE" };
    if (t.includes('zendesk')) return { slug: "zendesk", color: "#03363D" };
    if (t.includes('servicenow')) return { slug: "servicenow", color: "#81B5A1" };
    if (t.includes('office 365')) return { slug: "microsoftoffice", color: "#D83B01" };
    if (t.includes('remote desktop')) return { icon: FaWindows, color: "#0078D4" };
    if (t.includes('new relic')) return { slug: "newrelic", color: "#1CE783" };

    // Substring fuzzy match
    for (const [key, data] of Object.entries(TECH_ICON_MAP)) {
        if (t.includes(key.toLowerCase())) {
            return data;
        }
    }

    return { icon: FiCode, color: "#94a3b8" }; // Elegant slate fallback
};

const DEFAULT_ROTATING_WORDS = ["powers us", "drives us", "scales us", "elevates us"];
const TRAINING_ROTATING_WORDS = ["from our experts", "in our courses", "for your career", "through training"];

export default function TechStack({ role }: { role: RoleDetails }) {
    const isITTraining = role?.category === "IT Training";
    const rotatingWords = isITTraining ? TRAINING_ROTATING_WORDS : DEFAULT_ROTATING_WORDS;
    const prefixText = isITTraining ? "Technologies you learn" : "The stack that";
    
    const [wordIndex, setWordIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 2500);
        return () => clearInterval(interval);
    }, [rotatingWords.length]);

    // Duplicate the technologies array 4 times to ensure seamless infinite scrolling
    const marqueeItems = [...role.technologies, ...role.technologies, ...role.technologies, ...role.technologies];

    return (
        <section className="h-[426px] flex flex-col justify-center bg-white text-neutral-900 border-t border-gray-200 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full mb-10 md:mb-16"
            >
                <h2 className="text-3xl md:text-[48px] lg:text-[56px] font-[family-name:var(--font-poppins-custom)] font-bold text-[#0f172a] tracking-[-0.02em] leading-[1.1] flex flex-wrap items-center gap-x-2 md:gap-x-4">
                    {prefixText}
                    <div className="relative inline-block h-[1.2em] w-[200px] md:w-[360px] lg:w-[460px] overflow-hidden">
                        <AnimatePresence>
                            <motion.span
                                key={wordIndex}
                                initial={{ y: 40, opacity: 0, rotateX: -90 }}
                                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                exit={{ y: -40, opacity: 0, rotateX: 90 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute font-normal italic text-blue-600 left-0 top-0 whitespace-nowrap origin-center"
                            >
                                {rotatingWords[wordIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="w-full relative"
            >
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        ease: "linear",
                        duration: 25,
                        repeat: Infinity,
                    }}
                    className="flex items-center gap-16 md:gap-32 w-max px-4 sm:px-6 lg:px-8"
                >
                    {marqueeItems.map((techName, idx) => {
                        const iconData = getTechIconData(techName);
                        const Icon = iconData.icon;
                        const iconColor = iconData.color;
                        return (
                            <div key={idx} className="flex-shrink-0 mx-8 md:mx-16 flex items-center group">
                                <div
                                    className="flex items-center gap-4 cursor-pointer transition-all duration-300"
                                >
                                    {iconData.slug ? (
                                        <img
                                            src={`https://cdn.simpleicons.org/${iconData.slug}/${iconData.color.replace('#', '')}`}
                                            alt={techName}
                                            className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110"
                                        />
                                    ) : (
                                        <Icon
                                            className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110"
                                            style={{ color: iconColor }}
                                        />
                                    )}
                                    <span
                                        className="text-[1.5rem] md:text-[2rem] font-light tracking-wide transition-colors duration-300 whitespace-nowrap"
                                        style={{ color: iconColor }}
                                    >
                                        {techName}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
}
