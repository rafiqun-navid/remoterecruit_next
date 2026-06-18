'use client'

import TextPanel from "../Textpanel";

export default function Body_Section_two() {
    return (
        <div
            className=" w-full pt-30 responsive-box flex  items-center justify-start gap-20"
        >
            <img src="/sec2.svg" className="h-[451px] w-[454px] " alt="" />
            <TextPanel label="Actually Fee Free" title="Fee-Free Forever" description=" We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved." />
        </div>
    );
}