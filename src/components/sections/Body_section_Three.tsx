
'use client'

import TextPanel from "../Textpanel";

export default function Body_Section_three() {
    return (
        <div
            className=" w-full pt-30 responsive-box flex  items-center justify-start gap-20"
        >
            <TextPanel label="Custom Profile" title="Showcase Your Talents " description=" Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates." />

            <img src="/sec3.svg" className="h-[451px] w-[454px] " alt="" />
        </div>
    );
}