"use client";

import TextPanel from "../Textpanel";

interface TwoColumnSectionProps {
  imageSrc: string;
  imageAlt?: string;
  label: string;
  title: string;
  description: string;
  /** If true, image appears before the text (flex‑row‑reverse). */
  reverse?: boolean;
}

export default function TwoColumnSection({
  imageSrc,
  imageAlt = "",
  label,
  title,
  description,
  reverse = false,
}: TwoColumnSectionProps) {
  return (
    <div
      className={`w-full pt-30 responsive-box flex items-center justify-between gap-20 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <TextPanel label={label} title={title} description={description} />
      <img src={imageSrc} className="h-[451px] w-[454px]" alt={imageAlt} />
    </div>
  );
}
