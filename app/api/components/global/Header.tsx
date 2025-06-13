import Link from "next/link";
import React from "react";

const GlobalHeader: React.FC = () => {
    return (
        <header className="flex items-center justify-between p-2 bg-blue-600 text-white">
            <h1 className="text-xl font-bold">dps_office</h1>
            <nav>
                <ul className="flex space-x-4">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/registry" className="hover:underline">Registry</Link>
                    <Link href="/dashboard" className="hover:underline">Dashboard</Link>
                </ul>
            </nav>

            <div className="flex items-center space-x-4 border-red border-2 rounded-lg p-2">
                <Link href="/users" className="hover:underline">Users</Link>
                <Link href="/users/new" className="hover:underline">New User</Link>
            </div>

            <div className="flex items-center space-x-4">
                <a href="/login" className="hover:underline">Login</a>
                <a href="/register" className="hover:underline">Register</a>
            </div>
        </header>
    );
}
export default GlobalHeader;