import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import Image from 'next/image'

const linkHover = "hover:text-red-600";

const GlobalHeader: React.FC = async () => {
    const cooks = await cookies();
    
    const token = cooks.get("jwt")?.value || "";
    const isLoggedIn = Boolean(token);
    return (
        <header className="flex items-center justify-between mt-8 ml-8 p-2  bg-white text-black shadow-sm rounded-s-4xl">
            <h1 className="text-xl font-bold">
                <Link href="/users/dirtpig/profile" className = { linkHover }>
                    <Image src="/full_logo.svg" alt="danmuck" width={144} height={144} className="inline-block ml-2" />
                </Link>
            </h1>
            <div className="ml-auto flex items-center space-x-6 pr-24">
                <nav>
                    <ul className="flex items-center space-x-4 border-red border-3 rounded-lg p-2">
                        <Link href="/" className = { linkHover }>Home</Link>
                        <Link href="/registry" className = { linkHover }>Registry</Link>
                        <Link href="/dashboard" className = { linkHover }>Dashboard</Link>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4 border-red border-3 rounded-lg p-2">
                    <Link href="/users/new" className = { linkHover }>[dev]</Link>
                    <Link href="/users" className = { linkHover }>Users</Link>
                    <Link href="/users/dirtpig/profile" className = { linkHover }>Profile</Link>
                    <Link href="/users/dirtpig/settings" className = { linkHover }>Settings</Link>
                </div>

                <div className="flex items-center space-x-4 border-red border-3 rounded-lg p-2">
                    {isLoggedIn
                    ? 
                    <Link href="/logout"  className={linkHover}>Logout</Link>
                    : (
                        <>
                        <Link href="/login"    className={linkHover}>Login</Link>
                        <Link href="/register" className={linkHover}>Register</Link>
                        </>
                    )
                    }
                </div>
            </div>

        </header>
    );
}
export default GlobalHeader;