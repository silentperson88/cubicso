import React from "react";
import BlogList from "@/components/Blog/BlogList";
import ProjectsSection from "@/components/SharedComponents/ProjectsSection";
import PolicySection from "@/components/SharedComponents/PolicySection";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Insights | Cubicso",
};

const Page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Insights" },
  ];
  return (
    <>
      <HeroSub
        title="Insights"
        description=""
        breadcrumbLinks={breadcrumbLinks}  
      />
      <PolicySection />
      <ProjectsSection />
      <BlogList />
    </>
  );
};

export default Page;
