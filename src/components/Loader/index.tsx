"use client";

import React from "react";
import { Spin } from "antd";

const Loader = () => {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-60 text-white">
      <Spin size="default" tip="Loading..." />
    </div>
  );
};

export default Loader;
