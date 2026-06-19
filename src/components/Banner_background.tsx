"use client"




export default function Banner_background({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative h-[600px] w-full bg-cover overflow-hidden md:h-auto md:aspect-[1440/610] bg-center md:bg-[100%_100%] bg-no-repeat" style={{ backgroundImage: 'url("/banner_bg2.png")' }} >
            <div className="relative z-10 w-full h-full">
                <img src="/screen.png" alt="Dashboard preview" className="absolute bottom-0  w-[70%] md:w-[50%]  max-w-[900px] min-w-[400px] h-auto object-contain" />
                {children}
            </div>
        </div>
    );
}