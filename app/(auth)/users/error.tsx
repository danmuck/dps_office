"use client";
import React from "react";

export default function ErrorBoundary({ error }: { error: Error }) {
    console.error("ErrorBoundary caught an error:", error);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-red-600"> { error.message }</h1>
      <p className="mt-4 text-gray-700">Sorry, something went wrong. Please try again later.</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Reload Page
      </button>
    </div>
  );
}