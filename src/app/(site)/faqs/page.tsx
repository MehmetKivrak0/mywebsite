import FaqQuestion from "@/components/Home/faq";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import { Metadata } from "next";
import Trans from "@/components/i18n/Trans";
export const metadata: Metadata = {
  title: "FAQ | Sustainable",
};

const page = () => {
  return (
    <>
      <HeroSub title={<Trans tr="SSS" en="FAQs" />} description="" />
      <FaqQuestion />
    </>
  );
};

export default page;
