"use client";

import Hero_Section from "@/components/sections/Hero_Section";
import Footer_Section from "@/components/sections/Footer_Section";
import Body_Section_one from "@/components/sections/Body_Section_one";
import Body_Section_two from "@/components/sections/Body_section_Two";
import Body_Section_three from "@/components/sections/Body_section_Three";
import Pricing_Section_Mobile from "@/components/sections/Pricing_Section_Mobile";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero_Section />
      <Body_Section_one />
      <Body_Section_two />
      <Body_Section_three />
      <Pricing_Section_Mobile />
      <Footer_Section />
    </div>
  );
}
