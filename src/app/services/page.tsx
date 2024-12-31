"use client";
import React, { useEffect, useState } from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import FeaturesSection from "@/components/Features";
import { Button } from "antd";
import Link from "next/link";
import { routes } from "@/utils/constants";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  // To trigger the fade-in effect when the component is mounted
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-[rgba(23,162,183,0.3)]">
      <div className="container flex flex-wrap mx-auto max-w-7xl p-24">
        {/* Left Section */}
        <div
          className={`flex-1 min-w-[300px] p-8 rounded transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-1000 ease-out`}
        >
          <h1 className="text-xl font-medium mb-4">
            ONE STOP HR SOLUTIONS COMPANY
          </h1>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Global Knowledge and Local Expertise
          </h1>
          <p className="text-md mb-4">Human Resources and Payroll</p>
          <Link href={routes.contact}>
            <Button
              size="large"
              type="primary"
              className="w-[200px] shadow-none"
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Right Section */}
        <div
          className={`flex-1 min-w-[300px] p-10 font-medium transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } transition-all duration-1000 ease-out`}
        >
          <ul className="space-y-4">
            <li className="flex items-center">
              <CheckCircleOutlined className="text-green-500 mr-2" />
              Present in 8 countries, to serve countries with global hiring
              demands
            </li>
            <li className="flex items-center">
              <CheckCircleOutlined className="text-green-500 mr-2" />
              Providing placement of general to highly skilled employees
            </li>
            <li>
              <div className="flex items-center">
                <CheckCircleOutlined className="text-green-500 mr-2" />
                Advising client on their needs from the aspects of:
              </div>
              <ul className="pl-8 space-y-2 mt-2">
                {[
                  "hiring",
                  "employment",
                  "payroll",
                  "compliance",
                  "offboarding",
                ].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircleOutlined className="text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <p className="mt-6 fade-in-up">
            Our mission is to find the right people to grow your business,
            anywhere in the world.
          </p>
        </div>
      </div>
      <FeaturesSection />
    </div>
  );
};

export default Services;
