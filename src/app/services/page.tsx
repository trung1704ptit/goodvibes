"use client";

import React from "react";
import HeroBanner, { IHeroBannerProps } from "@/components/HeroBanner";

const heroData: IHeroBannerProps = {
  title: "Services",
  breadcrumb: [
    { label: "GoodVibes", url: "/" },
    { label: "Services", url: "/services" },
  ],
  backgroundImage: "#f1f2f6",
};

const Services = () => {
  return (
    <div>
      <HeroBanner data={heroData} />
      <ServiceSection />
    </div>
  );
};

const services = [
  {
    title: "IT Consulting",
    description:
      "Good Vibes IT Solutions helps optimize IT infrastructure and streamline operations to ensure your systems are efficient and aligned with your business goals.",
    image: "/it-consulting.jpg",
  },
  {
    title: "Web Development",
    description:
      "We create responsive, high-performance websites that are user-friendly, fast, and scalable at Good Vibes IT Solutions, tailored to your business needs.",
    image: "/web-development.jpg",
  },
  {
    title: "Application Development",
    description:
      "Good Vibes IT Solutions provides end-to-end app development, building robust and scalable web and mobile applications tailored to your business.",
    image: "/application-development.jpg",
  },
  {
    title: "Mobile App Development",
    description:
      "At Good Vibes IT Solutions, we develop feature-rich mobile apps designed for an intuitive user experience, engaging users and driving business growth.",
    image: "/mobile-app.jpg",
  },
  {
    title: "Cloud Integration and Migrations",
    description:
      "Good Vibes IT Solutions helps businesses migrate to the cloud and integrate cost-effective cloud solutions for improved efficiency and flexibility.",
    image: "/cloud.jpg",
  },
  {
    title: "Content Management",
    description:
      "We provide content management systems (CMS) to help you create, organize, and publish content efficiently, ensuring your site is always up-to-date.",
    image: "/cms.jpg",
  },
  {
    title: "Training and Support",
    description:
      "Good Vibes IT Solutions offers training and ongoing support to ensure your team can effectively use and maintain IT solutions.",
    image: "/training.jpg",
  },
  {
    title: "IT Procurement Services",
    description:
      "We help businesses source the best technology solutions, managing the entire procurement process to provide the right tools at the right price.",
    image: "/procurement.jpg",
  },
  {
    title: "Manage Production Support",
    description:
      "Good Vibes IT Solutions offers 24/7 production support to monitor, troubleshoot, and resolve issues, ensuring smooth operations and minimal downtime.",
    image: "/monitoring.jpg",
  },
];

const ServiceSection = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-20 fade-in-up">
        <p className="text-center text-xl mb-12 md:max-w-[70%] m-auto">
          At Good Vibes IT Solutions, we specialize in providing comprehensive
          IT solutions designed to drive your business forward. Our expertise
          lies in delivering innovative, tailored services that meet your unique
          needs. Whether you are a startup, SMB, or an enterprise, we are
          committed to enabling your success through technology.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-[#f1f1f1] rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 h-[450px] flex flex-col"
            >
              <div className="relative w-full flex-1">
                <img
                  src={service.image}
                  alt={service.title}
                  height={270}
                  className="h-[270px] w-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
