"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { API_BASE } from "@/app/api/types/constants";
import { apiFetch } from "@/app/api/utils";

/*
*    New User Page
*
*    This is the sign up page for creating a new user.
*    It allows users to enter their name, email, password, and confirm password.
*    On submission, it sends a POST request to the backend API to create the user.
*     If successful, it redirects to the users list page.
*    If there is an error, it displays the error message.
*    This page is a client component that uses React hooks for state management.
* 
*/
export default function NewUserPage() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  // prepare the form submission handler
  // this function will be called when the form is submitted
  // it will prevent the default form submission behavior
  // and instead send a POST request to the backend API
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const res = await fetch(
      `${API_BASE}/users/${encodeURIComponent(username)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, email, password, confirm: confirmPassword }),
      }
    );

    if (!res.ok) {
      const payload = await res.json().catch(() => ({}));
      setError((payload as any).error || `Error: ${res.status}`);
      return;
    }

    router.push("/users");
  }

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Create New User</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <label className="block">
          <span className="text-sm font-medium">Name</span>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border rounded p-2"
            placeholder="Full name"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border rounded p-2"
            placeholder="you@example.com"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Password</span>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border rounded p-2"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium">Confirm Password</span>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full border rounded p-2"
          />
        </label>

        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white font-medium py-2 rounded"
        >
          Create User
        </button>

        {error && <p className="text-red-600 mt-2">{error}</p>}
      </form>
    </div>
  );
}