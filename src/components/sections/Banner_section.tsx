"use client"

import Banner_background from "../Banner_background";
import Icon from "../Icon_Component";

export default function Banner_section() {
    return (
        <Banner_background>
            <div className="w-full aspect-[1440/610] relative " >
                <div className="responsive-box h-full flex">
                    <div className="w-1/2"></div>
                    <div className="w-1/2  flex flex-col items-start justify-center gap-2 pl-4">
                        <p className=" text-[#4572CB]  text-[16px] font-semibold">Are you ready ?</p>
                        <h1 className="text-[#000000]  text-[44px] font-semibold leading-[56px]">Help is only a few clicks away!</h1>
                        <p className="w-[350px] text-[#767784] text-[18px] leading-[33px] font-normal">Click Below to get set up super quickly and find help now!</p>
                        <button className="h-[61px] w-[180px] bg-[#52b3da23] rounded-full mt-3 flex justify-items-start items-center gap-2 pl-[10px]">
                            <div className="w-[46px] h-[46px] bg-[#52B4DA] rounded-full flex justify-center items-center">
                                <Icon name="arrow" />
                            </div>
                            <p className="text-[#1E3E85] text-[16px] font-medium ">Get Started</p>
                        </button>
                    </div>
                </div>
            </div>
        </Banner_background>

    );
}