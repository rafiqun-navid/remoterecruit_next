"use client"




export default function Banner_background({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative h-150 w-full bg-cover" style={{ backgroundImage: 'url("/banner_bg2.png")' }} >
            <img src="/screen.png" alt="" className="absolute bottom-0 left-0  w-[90vw] md:w-[60vw] max-w-152.5 object-contain z-0" />

            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}