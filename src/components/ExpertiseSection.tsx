"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES_DATA = [
  {
    title: "Digital transformation",
    heading: "Digital transformation",
    description:
      "Accelerate your business with comprehensive digital transformation services tailored for modern enterprises. We help you navigate the digital landscape to improve efficiency, agility, and customer experience.",
    cards: [
      {
        title: "Digital strategy",
        description:
          "Align your technology initiatives with business goals to drive sustainable growth and competitive advantage.",
      },
      {
        title: "Legacy modernization",
        description:
          "Upgrade outdated systems to improve performance, security, and scalability while reducing maintenance costs.",
      },
      {
        title: "Cloud migration",
        description:
          "Move your infrastructure to the cloud for better agility and cost-efficiency with zero downtime.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        wide: true,
      },
      {
        title: "Process automation",
        description:
          "Streamline operations using RPA and intelligent workflows to eliminate manual, repetitive tasks.",
      },
      {
        title: "Change management",
        description:
          "Ensure smooth adoption of new technologies across your organization with structured transition plans.",
      },
    ],
  },
  {
    title: "Artificial intelligence",
    heading: "Artificial intelligence",
    description:
      "Leverage the power of AI and machine learning to unlock new opportunities and automate complex tasks. Our AI solutions help you extract insights from data and create intelligent applications.",
    cards: [
      {
        title: "Machine learning",
        description:
          "Build predictive models that learn from data to improve decision making and forecast trends.",
      },
      {
        title: "Computer vision",
        description:
          "Extract meaningful information from digital images and videos to automate visual inspection and recognition.",
      },
      {
        title: "Generative AI",
        description:
          "Create novel content, designs, and solutions using cutting-edge Large Language Models and stable diffusion.",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
        wide: true,
      },
      {
        title: "NLP solutions",
        description:
          "Process and analyze large amounts of natural language data for sentiment analysis and chatbots.",
      },
      {
        title: "AI consulting",
        description:
          "Strategic guidance on implementing AI effectively in your business while managing risks and ethics.",
      },
    ],
  },
  {
    title: "Data & BI",
    heading: "Data & BI",
    description:
      "Transform raw data into actionable insights with our comprehensive Business Intelligence solutions. Build robust pipelines and intuitive dashboards that empower data-driven decisions at every level.",
    cards: [
      {
        title: "Data engineering",
        description:
          "Build robust pipelines to collect, store, and process massive datasets from disparate sources in real-time.",
      },
      {
        title: "Data warehousing",
        description:
          "Centralize your data into a single source of truth across the enterprise for reliable reporting.",
      },
      {
        title: "Business intelligence",
        description:
          "Develop interactive dashboards and reports that empower executives and managers to make data-driven decisions.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        wide: true,
      },
      {
        title: "Advanced analytics",
        description:
          "Uncover hidden patterns and correlations in your business data using statistical modeling and data mining.",
      },
      {
        title: "Data governance",
        description:
          "Ensure data quality, security, and compliance across your organization with robust governance frameworks.",
      },
    ],
  },
  {
    title: "Application services",
    heading: "Application services",
    description:
      "Our software development company delivers corporate and consumer applications based on our profound understanding of technologies and the markets they operate in. With our professional mindset, we look beyond technology to offer viable solutions for your particular business context.",
    cards: [
      {
        title: "Mobile application",
        description:
          "We build powerful and scalable native and cross-platform mobile applications tailored to your business needs.",
      },
      {
        title: "Web application",
        description:
          "We engineer robust, high-performance web applications that provide seamless user experiences across all devices.",
      },
      {
        title: "Software product engineering",
        description:
          "From MVP development to post-release support, we help our customers bring their products to market faster and with no pitfalls on the way.",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        wide: true,
      },
      {
        title: "Enterprise app integration",
        description:
          "We integrate enterprise systems to create interconnected ecosystems for seamless enterprise management.",
      },
      {
        title: "QA & testing",
        description:
          "We make application testing a part of the software delivery cycle as well as offering it as a standalone service.",
      },
    ],
  },
  {
    title: "Technology advisory",
    heading: "Technology advisory",
    description:
      "Navigate the complex technology landscape with expert guidance tailored to your specific business needs. We help you make informed decisions about technology investments and architectural direction.",
    cards: [
      {
        title: "IT strategy",
        description:
          "Develop a comprehensive IT roadmap aligned with your long-term business objectives and market conditions.",
      },
      {
        title: "Architecture consulting",
        description:
          "Design scalable, resilient, and secure system architectures that can adapt to changing business requirements.",
      },
      {
        title: "Digital readiness",
        description:
          "Assess your organization's capability to adopt new digital technologies and identify areas for improvement.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
        wide: true,
      },
      {
        title: "Security consulting",
        description:
          "Identify vulnerabilities and implement robust cybersecurity frameworks to protect your sensitive data.",
      },
      {
        title: "Vendor selection",
        description:
          "Objective evaluation and selection of the right technology partners, platforms, and third-party tools.",
      },
    ],
  },
  {
    title: "Managed IT services",
    heading: "Managed IT services",
    description:
      "Focus on your core business while we handle the day-to-day management and support of your IT infrastructure. Get reliable, scalable, and secure operations backed by SLAs.",
    cards: [
      {
        title: "IT support",
        description:
          "24/7 technical support for your employees and systems to ensure maximum uptime and productivity.",
      },
      {
        title: "Infrastructure management",
        description:
          "Proactive monitoring and maintenance of your on-premise servers, networks, and communication devices.",
      },
      {
        title: "Cloud managed services",
        description:
          "Optimization, security, and ongoing management of your AWS, Azure, or Google Cloud environments.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        wide: true,
      },
      {
        title: "Managed security",
        description:
          "Continuous threat monitoring, firewall management, and incident response from our dedicated SOC.",
      },
      {
        title: "Backup & disaster recovery",
        description:
          "Ensure business continuity with robust data protection, automated backups, and rapid recovery solutions.",
      },
    ],
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(3);
  const activeService = SERVICES_DATA[activeIndex];

  return (
    <section className="relative w-full bg-white border-b border-[#e5e5e5]">
      {/* Explicit Top Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#e5e5e5] z-20" />
      <div
        className="
          grid
          min-h-screen
          min-[2560px]:min-h-0
          w-full
          min-[2560px]:max-w-[1400px]
          min-[2560px]:mx-auto

          grid-cols-1
          xl:grid-cols-[44%_56%]
        "
      >
        {/* LEFT PANEL */}
        <div
          className="
            xl:sticky
            xl:top-0
            xl:self-start
            xl:z-10

            relative
            border-[#e5e5e5]

            xl:border-r

            px-5
            sm:px-8
            md:px-10
            lg:px-14
            xl:px-16
            2xl:px-24

            pt-12
            sm:pt-16
            lg:pt-20

            pb-8
            xl:pb-20
          "
        >
          {/* HEADING */}
          <div className="xl:max-w-[520px]">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="
                text-[#757575]
                font-black
                tracking-[-0.06em]
                leading-[0.82]

                text-[2.5rem]
                sm:text-[3.5rem]
                md:text-[4.5rem]
                lg:text-[5rem]
                xl:text-[5.5rem]
                2xl:text-[6rem]
              "
            >
              Our
              <br />
              services
            </motion.h2>
          </div>

          {/* MOBILE/TABLET TABS */}
          <div
            className="
              mt-10
              xl:hidden
              overflow-x-auto
              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            "
          >
            <div
              className="
                flex
                min-w-max
                items-center
                gap-8
                border-b
                border-[#d8d8d8]
              "
            >
              {SERVICES_DATA.map((service, index) => (
                <motion.button
                  key={service.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setActiveIndex(index)}
                  className={clsx(
                    `
                      relative
                      whitespace-nowrap
                      pb-6
                      text-[1.1rem]
                      sm:text-[1.3rem]
                      font-semibold
                      transition-all
                      duration-300
                    `,
                    index === activeIndex
                      ? "text-black"
                      : "text-[#555555] hover:text-black"
                  )}
                >
                  {service.title}

                  {index === activeIndex && (
                    <motion.span
                      layoutId="activeTabMobile"
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[4px]
                        w-full
                        bg-gradient-to-r
                        from-[#ff00d4]
                        to-[#0066ff]
                      "
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* DESKTOP SIDEBAR */}
          <div
            className="
              mt-16
              hidden
              xl:block
            "
          >
            <div className="max-w-[520px]">
              {SERVICES_DATA.map((service, index) => (
                <motion.button
                  key={service.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveIndex(index)}
                  className="
                    group
                    relative
                    flex
                    w-full
                    items-center
                    border-t
                    border-[#d7d7d7]
                    py-7
                    text-left
                    transition-all
                    duration-300
                  "
                >
                  <span
                    className={clsx(
                      `
                        text-[1.1rem]
                        2xl:text-[1.3rem]
                        font-semibold
                        transition-all
                        duration-300
                      `,
                      index === activeIndex
                        ? "text-black"
                        : "text-[#5c5c5c] group-hover:text-black"
                    )}
                  >
                    {service.title}
                  </span>

                  {index === activeIndex && (
                    <motion.span
                      layoutId="activeTabDesktop"
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[4px]
                        w-full
                        bg-gradient-to-r
                        from-[#ff00d4]
                        to-[#0066ff]
                      "
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div
          className="
            px-5
            sm:px-8
            md:px-10
            lg:px-14
            xl:px-12
            2xl:px-16

            pt-10
            sm:pt-14
            lg:pt-16

            pb-16
            lg:pb-24
          "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col h-full"
            >
              {/* TOP CONTENT */}
              <div className="max-w-[900px]">
                <h3
                  className="
                    text-black
                    font-bold
                    tracking-[-0.04em]
                    leading-none

                    text-[2rem]
                    sm:text-[2.5rem]
                    lg:text-[3rem]
                  "
                >
                  {activeService.heading}
                </h3>

                <p
                  className="
                    mt-6
                    max-w-[860px]
                    text-[#555555]
                    leading-[1.7]

                    text-[1rem]
                    sm:text-[1.1rem]
                    lg:text-[1.25rem]
                  "
                >
                  {activeService.description}
                </p>
              </div>

              {/* CARDS GRID */}
              <div
                className="
                  mt-12
                  sm:mt-14
                  lg:mt-16

                  grid
                  grid-cols-1
                  md:grid-cols-2

                  gap-4
                  lg:gap-6
                  min-[1440px]:gap-[32px]
                  min-[1440px]:max-w-[646px]
                "
              >
                {activeService.cards.map((card) => (
                  <article
                    key={card.title}
                    className={clsx(
                      `
                        group
                        relative
                        overflow-hidden

                        border
                        border-[#d0d0d0]

                        bg-transparent

                        min-h-[160px]
                        sm:min-h-[170px]
                        lg:min-h-[220px]
                        min-[1440px]:min-h-0

                        transition-all
                        duration-500

                        hover:bg-white/40
                      `,
                      card.wide
                        ? `
                          md:col-span-2

                          grid
                          md:grid-cols-[40%_60%]
                          min-[1440px]:grid-cols-[252px_394px]
                          min-[1440px]:h-[190px]
                        `
                        : `
                          min-[1440px]:h-[220px]
                        `
                    )}
                  >
                    {/* IMAGE */}
                    {card.image && (
                      <div className="relative h-[260px] md:h-full border-b md:border-b-0 md:border-r border-[#d0d0d0] min-[1440px]:w-[252px]">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    {/* CONTENT */}
                    <div
                      className="
                        relative
                        flex
                        h-full
                        flex-col

                        p-5
                        sm:p-6
                        lg:p-7
                        min-[1440px]:p-6
                      "
                    >
                      <h4
                        className="
                          max-w-[90%]

                          text-black
                          font-bold
                          tracking-[-0.03em]
                          leading-[1.1]

                          text-[1.1rem]
                          sm:text-[1.3rem]
                          lg:text-[1.6rem]
                          min-[1440px]:text-[1.3rem]
                        "
                      >
                        {card.title}
                      </h4>

                      <p
                        className="
                          mt-6
                          min-[1440px]:mt-2

                          pr-12
                          sm:pr-16

                          text-[#555555]

                          leading-[1.7]
                          min-[1440px]:leading-[1.4]

                          text-[0.8rem]
                          sm:text-[0.85rem]
                          lg:text-[0.95rem]
                          min-[1440px]:text-[0.85rem]
                        "
                      >
                        {card.description}
                      </p>

                      {/* ARROW BOX */}
                      <Link
                        href={`/services/${activeService.title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                        className="
                          absolute
                          bottom-0
                          right-0

                          flex
                          items-center
                          justify-center

                          border-l
                          border-t
                          border-[#d0d0d0]

                          h-[54px]
                          w-[54px]

                          sm:h-[64px]
                          sm:w-[64px]
                          
                          min-[1440px]:h-[70px]
                          min-[1440px]:w-[70px]

                          overflow-hidden
                        "
                      >
                        <GoArrowUpRight
                          className="
                            absolute
                            text-[#F05A28]
                            h-6 w-6 sm:h-8 sm:w-8
                            transition-transform
                            duration-300
                            group-hover:translate-x-[150%]
                            group-hover:-translate-y-[150%]
                          "
                        />
                        <GoArrowUpRight
                          className="
                            absolute
                            text-[#F05A28]
                            h-6 w-6 sm:h-8 sm:w-8
                            transition-transform
                            duration-300
                            -translate-x-[150%]
                            translate-y-[150%]
                            group-hover:translate-x-0
                            group-hover:translate-y-0
                          "
                        />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}