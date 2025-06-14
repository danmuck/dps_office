"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { API_BASE } from "@/app/api/types/constants";


export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: "POST",
        credentials: "include", // include cookies for session management
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Register failed: ${res.status}`);
      const { token, username } = await res.json();
      // localStorage.setItem("token", token);
      router.push(`/users/${username}/profile`);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="pt-32 flex items-center justify-center">
      <div className="max-w-md w-full bg-black p-8 border border-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              className="mt-1 block w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="mt-1 block w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Confirm Password</label> 
            <input
              type="password"
              name="confirm"
              value={form.confirm}
              onChange={handleChange}
              className="mt-1 block w-full border rounded p-2"
              required
            />
            </div>
            <div className="flex flex-col items-center mt-4">
              {error && <p className="text-red-600">{error}</p>}
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                Register
              </button>
            </div>
        </form>
      </div>
    </div>
  );
}