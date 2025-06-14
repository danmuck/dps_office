"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import type { User } from "@/app/api/types/user";
import { clientFetch } from "../../utils.client";

interface UserEditFormProps {
  initialUser: User;
}

export default function ModifyUser({ initialUser }: UserEditFormProps) {
  const router = useRouter();
  const [form, setForm] = useState({
    email: initialUser.email,
    bio: initialUser.bio || "",
    avatarURL: initialUser.avatar || "",
  });
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      // PUT /users/:id
      await clientFetch<User>(
        "users",
        initialUser._id, // note: this is routed by ID on the server
        "PUT",
        form
      );
      // redirect back to profile by username for frontend
      router.push(`/users/${encodeURIComponent(initialUser.username)}/profile`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 m-2 space-y-6 bg-white rounded-lg shadow">
        <div className="min-h-screen flex items-center justify-center bg-gray-600 rounded-lg">
            <div className="max-w-md w-full bg-black p-8 rounded-lg shadow-lg">
                <h1 className="text-white-500 text-3xl font-extrabold text-center mb-6">Settings</h1>
                <h2 className="text-xl font-semibold">Edit Profile</h2>
                {error && <p className="text-red-600">{error}</p>}

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                    </label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border rounded p-2 
                    focus:outline-none focus:ring focus:border-blue-300"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                    Bio
                    </label>
                    <textarea
                    id="bio"
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <div>
                    <label htmlFor="avatarURL" className="block text-sm font-medium text-gray-700">
                    Avatar URL
                    </label>
                    <input
                    id="avatarURL"
                    name="avatarURL"
                    type="url"
                    value={form.avatarURL}
                    onChange={handleChange}
                    className="mt-1 block w-full border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                    type="submit"
                    disabled={saving}
                    className="w-1/2 py-2 px-4 bg-white text-black rounded hover:bg-green-700 disabled:opacity-50"
                    >
                    {saving ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </div>
        </div>
    </form>
  );
}
