"use client";

import React from "react";

import dynamic from "next/dynamic";

const DynamicForm = dynamic(() => import("../components/AppForm"), {
  ssr: false,
});

export default function Home() {
  return <DynamicForm />;
}
