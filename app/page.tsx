'use client';
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-start justify-center">
      <title>Home</title>
      <h1 className={`w-full p-2 bg-red-600 text-center text-xl text-black rounded-md`}>[ -- UNDER CONSTRUCTION -- ]</h1>
      <div className="w-full p-8">
        <Image src="/full_logo.svg" 
          alt="danmuck" 
          width={264} 
          height={264} 
          className="flex flex-1 w-full bg-white rounded-full shadow-lg" 
        />
      </div>
      
      <div className="flex flex-col items-center justify-center w-full bg-black border border-red-800 rounded-lg shadow-lg">
        <h2>Coming soon... </h2>
        <ol className="list-decimal list-inside">
          <li>Profile</li>
          <li>Posts</li>
          <li>Comments</li>
          <li>Notifications</li>
          <li>Search</li>
          <li>Settings</li>
          <li>Admin Panel</li>
          <li>API Documentation</li>
          <li>Deployment</li>
          <li>Security Enhancements</li>
          <li>Analytics Dashboard</li>
          <li>Admin Dashboard</li>
          <li>Spam Detection</li>
          <li>Data Backup and Recovery</li>
          <li>Logging and Monitoring</li>
        </ol>
      </div>

    </div>
  );
}
