import React from "react";
import { Metadata } from "next";
import PreHeroVideo from "@/components/Home/PreHeroVideo";
import SectorHero from "@/components/Home/SectorHero";
import CoreServicesCards from "@/components/Home/CoreServicesCards";
import CompanySnapshot from "@/components/Home/CompanySnapshot";
import WhyChooseCubicso from "@/components/Home/WhyChooseCubicso";
import PerformanceOutcomes from "@/components/Home/PerformanceOutcomes";
import ClientTestimonials from "@/components/Home/ClientTestimonials";
import OurMotto from "@/components/Home/OurMotto";
import FAQSection from "@/components/Home/FAQSection";
import LatestInsightsNews from "@/components/Home/LatestInsightsNews";
import DeliveryStrengths from "@/components/Home/DeliveryStrengths";
import ExecutionModel from "@/components/Home/ExecutionModel";
import StrategySession from "@/components/Home/StrategySession";
import FinalCtaBanner from "@/components/Home/FinalCtaBanner";

export const metadata: Metadata = {
  title: "Cubicso",
};

export default function Home() {
  return (
    <main>
      <PreHeroVideo />
      <SectorHero />
      <CoreServicesCards />
      <WhyChooseCubicso />
      <PerformanceOutcomes />
      <CompanySnapshot />
      <OurMotto />
      <DeliveryStrengths />
      <ClientTestimonials />
      <LatestInsightsNews />
      <FAQSection />
      <ExecutionModel />
      <StrategySession />
      <FinalCtaBanner />
      
    </main>
  );
}
