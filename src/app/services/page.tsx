import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";

const HRPage = () => {
  return (
    <div className="container flex flex-wrap mx-auto max-w-7xl my-10">
      {/* Left Section */}
      <div className="flex-1 min-w-[300px] bg-slate-50 p-8 rounded">
        <h1 className="text-xl font-medium mb-4">ONE STOP HR SOLUTIONS COMPANY</h1>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Global Knowledge and Local Expertise</h1>
        <p className="text-md">Human Resources and Payroll</p>
      </div>

      {/* Right Section */}
      <div className="flex-1 min-w-[300px] p-10 font-medium">
        <ul className="space-y-4">
          <li className="flex items-center">
            <CheckCircleOutlined className="text-green-500 mr-2" />
            Present in 8 countries, to serve countries with global hiring demands
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
              {["hiring", "employment", "payroll", "compliance", "offboarding"].map((item) => (
                <li key={item} className="flex items-center">
                  <CheckCircleOutlined className="text-green-500 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <p className="mt-6">
          Our mission is to find the right people to grow your business, anywhere in the world.
        </p>
      </div>
    </div>
  );
};

export default HRPage;
