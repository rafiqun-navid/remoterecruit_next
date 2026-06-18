
'use client'

import TextPanel from "../Textpanel";

export default function Body_Section_one() {
    return (
        <div
            className=" w-full pt-30 responsive-box flex  items-center justify-start gap-20"
        >
            <TextPanel label="Global Reach" title="The First Fully Global Job Board, Anywhere, Ever " description=" RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.
           "/>

            <img src="/sec1.svg" className="h-[451px] w-[454px] " alt="" />
        </div>
    );
}