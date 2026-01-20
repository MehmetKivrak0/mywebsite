import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";
import Trans from '@/components/i18n/Trans'
export const metadata: Metadata = {
    title: "Pricing | Sustainable",
};

const page = () => {
  return (
    <>
        <HeroSub
            title={<Trans tr="Fiyatlandırma" en="Pricing" />}
            description=""
        />
    </>
  )
}

export default page