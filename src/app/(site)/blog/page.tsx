import React from "react";
import BlogList from "@/components/Blog/BlogList";
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
      <BlogList />
    </>
  );
};

export default Page;
