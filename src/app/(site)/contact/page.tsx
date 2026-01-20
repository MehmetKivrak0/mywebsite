import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Trans from "@/components/i18n/Trans";
export const metadata: Metadata = {
    title: "Contact | Sustainable",
};

const page = () => {
  return (
    <>
      <HeroSub
        title={<Trans tr="İletişim" en="Contact" />}
        description=""

      />
      <ContactInfo />
      <ContactForm />
      <Location />
    </>
  );
};

export default page;
