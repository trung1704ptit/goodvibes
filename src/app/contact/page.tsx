import React from "react";

import ContactUsForm from "../../components/ContactForm";
import HeroBanner, { IHeroBannerProps } from "@/components/HeroBanner";

const heroData: IHeroBannerProps = {
  title: "Contact Us",
  breadcrumb: [
    { label: "GoodVibes", url: "/" },
    { label: "Contact Us", url: "/contact" },
  ],
  backgroundImage: "#f1f2f6",
};

export default function ContactUs() {
  return (
    <>
      <HeroBanner data={heroData} />
      <ContactUsForm />
    </>
  );
}
