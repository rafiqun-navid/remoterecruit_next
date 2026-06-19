'use client'


import Icon from "../Icon_Component";
import socials from "@/data/socials.json";
import PackageCard from "../PackageCard";
import packages from "@/data/service_packages.json";

export default function Footer_Section() {
    return (
        <div
            className="relative w-full bg-no-repeat flex flex-col justify-end mt-60"
            style={{
                backgroundImage: "url('/Footer_Background.svg')",
                backgroundSize: "100% 100%",
                aspectRatio: "1440 / 569"
            }}
        >

            {/* section 1*/}
            <div className="absolute w-[72.22vw] top-3  left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between items-center z-10  ">
                <h1 className="heading-2">Help Is One Click Away</h1>

                <div className="w-full flex justify-center items-center gap-[1.7vw] my-[1vw] mt-10">
                    {packages.map((pkg, idx) => (
                        <PackageCard
                            key={idx}
                            price={pkg.price}
                            badgeTitle={pkg.badgeTitle}
                            features={pkg.features}
                            paidpackage={pkg.paidPackage}
                        />
                    ))}
                </div>


            </div>



            {/* section 2*/}

            <div className="responsive-box flex justify-between items-start mb-[6vw]"
            >
                <img src="/logo.svg" className="w-[12.8vw] h-[5.139vw] max-w-[184.32px] max-h-[74px] cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

                <div className="flex gap-[0.83vw]">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-[2.78vw] h-[2.78vw] max-w-[32px] max-h-[32px] p-[min(0.75vw,8px)] rounded-full border border-white/20 flex items-center justify-center bg-brand-footer-icon-bg hover:bg-white/10 text-white hover:border-white transition-all cursor-pointer"
                        >
                            <Icon name={social.name as any} size="100%" />
                        </a>
                    ))}
                </div>

            </div>


            {/* //section 3 */}
            <div className=" w-full flex justify-center items-center py-[20px] border-t-[1px] border-brand-white-translucent">
                <img src="/RR_logo.svg" className="h-[2.22vw] w-[2.78vw] max-h-[32px] max-w-[40px]" />
            </div>
        </div>
    );
}