
"use client"



// textpanel props interface
interface TextPanelProps {
    label: string;
    title: string;
    description: string;

}


export default function TextPanel({ label, title, description }: TextPanelProps) {
    return (
        <div className="flex flex-col gap-9 items-start pt-7">
            <div className="py-2 px-6 bg-[#C9EFFF] text-[#1e3e85] rounded-full w-fit font-semibold text-sm">
                <h3>{label}</h3>
            </div>
            <h1 className="text-[40px] font-semibold text-[#000] leading-tight max-w-[550px]">
                {title}
            </h1>
            <p className="text-[19px] text-gray-500 leading-relaxed max-w-[500px]">
                {description}
            </p>
        </div>
    );
}