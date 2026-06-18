
'use client'

import Button from "../Button"


export default function Header() {
    return (
        <div className="h-[108px] py-[29px] px-[58px] max-w-[1440px] w-full mx-auto flex justify-between items-center">
            <div className="flex gap-[121px]">
                <img src="/Logo.svg" alt="Logo" />
            </div>
            <div className="flex gap-[38px]">
                <Button variant="none" title="Sign in" className="" />
                <Button
                    title="sign up"
                    className="!h-[44px] !w-[92px] !rounded-[16px]"

                />
            </div>
        </div>
    )
}