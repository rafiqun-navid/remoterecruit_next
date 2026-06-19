"use client"

import Banner_background from "../Banner_background";
import Icon from "../Icon_Component";

export default function Banner_section() {
    return (
        <Banner_background>
            <div className="w-full aspect-[1440/610] relative " >
                <div className="responsive-box h-full flex">
                    <div className="w-1/2"></div>
                    <div className="w-1/2 flex items-center justify-center">
                        <div className="flex flex-col gap-[36px]">
                            <div className="flex flex-col gap-[10px]">
                                <p className="text-brand-blue-accent banner-label">Are you ready ?</p>
                                <h1 className="text-brand-black banner-heading">Help is only a few clicks away!</h1>
                                <p className="w-[350px] text-brand-gray-muted banner-paragraph">Click Below to get set up super quickly and find help now!</p>
                            </div>
                            <button className="h-[61px] w-[180px] bg-brand-cyan-medium/10 rounded-full mt-3 flex justify-items-start items-center gap-2 pl-[10px]">
                                <div className="w-[46px] h-[46px] bg-brand-cyan rounded-full flex justify-center items-center">
                                    <Icon name="arrow" />
                                </div>
                                <p className="text-brand-blue banner-btn-text">Get Started</p>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </Banner_background>

    );
}