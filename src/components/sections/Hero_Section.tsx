"use client";
import Header from "./Header_Component";
import Hero_title from "./Hero_title";

export default function Hero_Section() {
    return (
        <div
            className="relative w-full bg-no-repeat overflow-hidden flex flex-col text-white select-none"
            style={{
                backgroundImage: "url('/Background.svg')",
                backgroundSize: "100% 100%",
                aspectRatio: "4320 / 2112"
            }}
        >
            <Header />
            <Hero_title />


        </div>
    );
}