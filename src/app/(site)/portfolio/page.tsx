import CardBox from "@/components/Home/porfolio/cardbox";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import { Metadata } from "next";
import Trans from "@/components/i18n/Trans";
export const metadata: Metadata = {
  title: "Portfolio | mehmetk",
};

const page = () => {
  return (
    <>
      <HeroSub title={<Trans tr="Portfolyo" en="Portfolio" />} description="" />
      <div className="-my-52 py-52 bg-AliceBlue">
        <CardBox />
      </div>
    </>
  );
};

export default page;
