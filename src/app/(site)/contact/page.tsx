import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import Trans from "@/components/i18n/Trans";
import ContactForm from "@/components/Contact/Form";
export const metadata: Metadata = {
    title: "Contact | mehmetk",
};

const page = () => {
  return (
    <>
      <HeroSub
        title={<Trans tr="İletişim" en="Contact" />}
        description=""

      />
      <ContactForm />
    </>
  );
};

export default page;
