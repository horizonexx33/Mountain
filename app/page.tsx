
import type { Metadata } from "next";
import Content from "~/components/widgets/Content";
import Hero from "~/components/widgets/Hero";
import Comps from "~/components/widgets/wdtsSlide";
import { SITE } from "~/config";


import {
  callToActionData,
  content2Data,
  contentData,
  faqsData2,
  featuresData,
  heroData,
  pricingData,
  slideInformation,
  socialProofData,
}
from '~/shared/data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {

  return (
    <>
    <Hero data={heroData} />
    <Content {...pricingData} />
    <Comps data={slideInformation}/> 
    
    </>
  )
}


