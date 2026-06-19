import React from "react";
import Icon from "./Icon_Component";
import Button from "./Button";


interface Feature {
    text: string;
    included: boolean;
}

interface PackageCardProps {
    price: string;
    badgeTitle: string;
    features: Feature[];
    paidpackage: boolean;
    onCtaClick?: () => void;
}

export default function PackageCard({
    price,
    badgeTitle,
    features,
    paidpackage,
    onCtaClick,
}: PackageCardProps) {
    return (
        <div className="w-[34.72vw] h-[23.82vw] max-w-[500px] max-h-[343px] min-w-[320px] bg-white rounded-[clamp(16px,1.94vw,28px)] p-[clamp(20px,2.22vw,32px)] shadow-[0_12px_30px_-12px_rgba(20,20,20,0.2)] flex flex-col">
            {/* Top */}
            <div className=" flex-1 flex gap-[clamp(16px,1.87vw,27px)] justify-center">
                {/* Top-left */}
                <div className={` ${paidpackage ? "relative" : ""} h-full w-[clamp(100px,11.11vw,160px)] bg-brand-blue-soft rounded-[clamp(12px,1.11vw,16px)] flex flex-col items-center justify-center`}>
                    {paidpackage && <div className="absolute bg-brand-cyan-soft -top-[clamp(16px,1.52vw,22px)] w-[clamp(90px,10.13vw,146px)] h-[clamp(32px,3.05vw,44px)] rounded-full shadow-[0_4px_10px_-4px_rgba(20,20,20,0.2)] flex items-center justify-start p-[clamp(6px,0.55vw,8px)] gap-[clamp(4px,0.55vw,8px)]">
                        <div className="flex items-center justify-center w-[clamp(24px,2.5vw,36px)] h-[clamp(24px,2.5vw,36px)] flex-shrink-0 bg-white rounded-full shadow-md">
                            <Icon name={"dime"} size={25} className="w-[clamp(12px,1.11vw,16px)] h-[clamp(12px,1.11vw,16px)]" />
                        </div>
                        <h3 className="font-semibold text-[clamp(12px,1.11vw,16px)] text-brand-blue">Premium</h3>
                    </div>}
                    <h1 className={`font-semibold text-[clamp(20px,2.22vw,32px)] ${paidpackage ? "text-transparent bg-clip-text bg-gradient-to-br from-brand-blue-gradient-start to-brand-blue-gradient-end" : "text-brand-cyan"}`} >{price}</h1>
                    <h2 className=" font-medium text-[clamp(14px,1.38vw,20px)] text-brand-gray-text" >{badgeTitle}</h2>
                </div>
                {/* Top-right */}
                <div className="h-full flex-1  rounded-[clamp(12px,1.11vw,16px)] flex flex-col justify-evenly ">
                    {features.map((feature: Feature, index: number) => (
                        <div key={index} className="flex items-center gap-[clamp(4px,0.55vw,8px)]">
                            <Icon name={feature.included ? "tick" : "cross"} size={16} className="w-[clamp(12px,1.11vw,16px)] h-[clamp(12px,1.11vw,16px)]" />
                            <span className={`text-[clamp(12px,1.11vw,16px)] ${feature.included ? "text-brand-black" : "text-brand-gray-feature"}`}>{feature.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            {/* CTA */}
            <Button title="Get Started" variant={paidpackage ? "primary" : "secondary"} className={`h-[clamp(48px,5vw,72px)] rounded-[clamp(16px,1.66vw,24px)] font-medium text-[clamp(14px,1.38vw,20px)] mt-[clamp(16px,1.94vw,28px)] bg-gradient-to-br from-brand-blue-gradient-start to-brand-blue-gradient-end  `} />
        </div>
    );
}