import React from "react";

const GlobalFooter: React.FC = () => {
    return (
        <footer className="w-full flex flex-col p-2 row-start-3 gap-[24px] items-center justify-center bg-gray-100">
            <div className="
                flex items-center 
                gap-8 p-4 m-0 
                rounded-full border-1 border-black
            ">
                <p className="text-gray-600">
                    Next.js // React // Typescript
                </p>
            </div>
            <p className="text-xs text-gray-600">© {new Date().getFullYear()} danmuck</p>
        </footer>
    );
}
export default GlobalFooter;