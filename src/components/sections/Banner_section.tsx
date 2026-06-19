"use client"

import Banner_background from "../Banner_background";
import banner_data from "../../Data/banner_text.json"
import Icon from "../Icon_Component";

export default function Banner_section() {
    return (
        <Banner_background >
            <div className="responsive-box h-full flex flex-col md:flex-row relative z-10 pt-10 md:pt-0">
                <div className="w-full md:w-1/2 h-[45%] md:h-full flex items-end justify-center md:justify-start order-2 md:order-1 relative">

                </div>
                <div className="w-full md:w-1/2 h-[55%] md:h-full flex flex-col justify-center items-center md:items-start text-center md:text-left order-1 md:order-2 pb-10 md:pb-0">
                    <div className="flex flex-col gap-[clamp(24px,2.5vw,36px)]">
                        <div className="flex flex-col gap-[clamp(6px,0.69vw,10px)]">
                            <p className="text-brand-blue-accent banner-label text-start">{banner_data.label}</p>
                            <h1 className="text-brand-black banner-heading text-start">{banner_data.title}</h1>
                            <p className="w-[clamp(250px,24.3vw,350px)] text-brand-gray-muted banner-paragraph text-start">{banner_data.description}</p>
                        </div>
                        <button className="h-[clamp(48px,4.24vw,61px)] w-[clamp(140px,12.5vw,180px)] bg-brand-cyan-medium/10 rounded-full mt-4 flex justify-items-start items-center gap-[clamp(4px,0.55vw,8px)] pl-[clamp(6px,0.69vw,10px)] hover:-translate-y-[2px] transition-all hover:shadow-[0_8px_20px_-6px_rgba(45,191,223,0.5)]">
                            <div className="w-[clamp(32px,3.19vw,46px)] h-[clamp(32px,3.19vw,46px)] bg-brand-cyan rounded-full flex justify-center items-center">
                                <Icon name="arrow" />
                            </div>
                            <p className="text-brand-blue banner-btn-text">Get Started</p>
                        </button>
                    </div>
                </div>
            </div>
        </Banner_background>



    );
}