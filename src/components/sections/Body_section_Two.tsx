'use client'

import TwoColumnSection from "./TwoColumnSection";

export default function Body_Section_Two() {
  return (
    <TwoColumnSection
      label="Actually Fee Free"
      title="Fee-Free Forever"
      description="We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved."
      imageSrc="/sec2.svg"
      imageAlt="Fee-Free"
      reverse={true}
    />
  );
}