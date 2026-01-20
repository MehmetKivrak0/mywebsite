import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";
import Counter from '@/components/Home/Counter';
import WorkGrow from '@/components/Home/work-grow';
import BuildAmazing from '@/components/Home/Build-Amazing';
import Trans from '@/components/i18n/Trans';
export const metadata: Metadata = {
    title: "About | Sustainable",
};

const page = () => {
  return (
    <>
        <HeroSub
            title={<Trans tr="Hakkımda" en="About" />}
            description=""
        />
        <Counter/>
        <WorkGrow/>
        <BuildAmazing isSpace={false} />
    </>
  )
}

export default page