"use client";

import React, { useState } from "react";
import type { User } from "@/app/api/types/user";
import { clientFetch } from "../../utils.client";
import ToggledFormInput from "../ToggledFormInput";

interface UserEditFormProps {
  initialUser: User;
}

export default function ModifyUser({ initialUser }: UserEditFormProps) {

  // form state is only populated once you enable editing
  const [form, setForm] = useState({
    email: "",
    bio: "",
    avatarURL: "",
    roles: ""
  });

  // which fields are editable?
  const [editMode, setEditMode] = useState({
    email: false,
    bio: false,
    avatarURL: false,
    roles: false
  });

  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  function toggleField(field: keyof typeof form) {
    setEditMode((prev) => {
      const nowOn = !prev[field];
      // seed only if turning on AND value is still empty
      if (nowOn && form[field] === "") {
        setForm((f) => ({
          ...f,
          [field]: (initialUser as any)[field] ?? "",
        }));
      }
      return { ...prev, [field]: nowOn };
    });
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      await clientFetch<User>("users", initialUser._id, "PUT", form);
      setEditMode({ email: false, bio: false, avatarURL: false, roles: false });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="max-w-md w-full bg-black p-8 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-white">Edit Profile</h2>
        {error && <p className="text-red-600">{error}</p>}

        {/** --- Email --- **/}
        <div className="mt-4">
        <ToggledFormInput
            name="email"
            label="Email"
            initialValue={initialUser.email}
            value={form.email}
            editMode={editMode.email}
            onToggle={() => toggleField("email")}
            onChange={handleChange}
            />
        </div>

        {/** --- Bio --- **/}
        <ToggledFormInput
            name="bio"
            label="Bio"
            initialValue={initialUser.bio}
            value={form.bio}
            editMode={editMode.bio}
            onToggle={() => toggleField("bio")}
            onChange={handleChange}
            textarea
            rows={4}
            />

        {/** --- Avatar URL --- **/}
        <ToggledFormInput
            name="avatarURL"
            label="Avatar URL"
            initialValue={initialUser.avatar}
            value={form.avatarURL}
            editMode={editMode.avatarURL}
            onToggle={() => toggleField("avatarURL")}
            onChange={handleChange}
            />

        {/** --- Save --- **/}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </form>
  );
}