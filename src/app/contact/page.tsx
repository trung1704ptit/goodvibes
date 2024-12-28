"use client";

import React from "react";

import dynamic from "next/dynamic";

const ContactUsForm = dynamic(() => import("../../components/AppForm"), {
  ssr: false,
});

export default function ContactUs() {
  return <ContactUsForm />;
}
