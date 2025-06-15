import React from "react";
import Image from 'next/image'

const GlobalFooter: React.FC = () => {
    return (
        <footer className="
            w-full flex flex-col p-2 row-start-3 
            gap-[2px] 
            items-center justify-center 
            bg-black
        ">
            <div className="
                flex items-center 
                gap-8 p-2 m-0 

            ">
                {/* <p className="text-gray-600">
                    TEST TEXT FOR FOOTER AREA ONE
                </p>
                <p className="text-gray-600">
                    TEST TEXT FOR FOOTER AREA TWO
                </p>
                <p className="text-gray-600">
                    TEST TEXT FOR FOOTER AREA THREE
                </p> */}
            </div>

            <div className=" flex flex-row items-center gap-2 m-0">
                <h5 className="text-sm font-bold text-gray-500">frontend:</h5>
                <p className="text-sm text-gray-600">
                    Next.js // React // Typescript // Tailwind CSS
                </p>
            </div>
            <div className=" flex flex-row items-center gap-2 m-0 pb-2">
                <h5 className="text-sm font-bold text-gray-500">backend:</h5>
                <p className="text-sm text-gray-600">
                    Golang // Gin // MongoDB
                </p>
            </div>

            <p className="w-screen flex items-center justify-center text-xs text-gray-600 bg-white p-2">
                {new Date().getFullYear()}
                <Image src="/full_logo.svg" alt="danmuck" width={96} height={96} className="inline-block ml-2" />
            </p>
        </footer>
    );
}
export default GlobalFooter;