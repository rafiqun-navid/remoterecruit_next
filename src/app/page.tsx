"use client";

import Hero_Section from "@/components/sections/Hero_Section";
import Footer_Section from "@/components/sections/Footer_Section";
import Body_Section from "@/components/sections/Body_Section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero_Section />
      <Body_Section />
      <Footer_Section />
    </div>
  );
}
