"use client";

import React from "react";
import { Switch } from "@headlessui/react";

interface ToggledFormInputProps {
  /** the form key, e.g. "bio" or "email" */
  name: string;
  /** Label text for the field */
  label: string;
  /** initial value from the server */
  initialValue?: string;
  /** current local value (controlled) */
  value: string;
  /** whether this field is in edit mode */
  editMode: boolean;
  /** flip the edit mode on/off */
  onToggle: () => void;
  /** update local value */
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  /** true for a textarea (multi-line), false for a single-line input */
  textarea?: boolean;
  /** rows for the textarea */
  rows?: number;
}

export default function ToggledFormInput({
  name,
  label,
  initialValue = "",
  value,
  editMode,
  onToggle,
  onChange,
  textarea = false,
  rows = 3,
}: ToggledFormInputProps) {
  // placeholder only shows when not editing
  const placeholder = !editMode ? initialValue : "";

  // shared classes
  const baseClasses = `
    mt-1 block w-full border rounded p-2
    focus:outline-none focus:ring focus:border-blue-300
  `;

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <label htmlFor={name} className="block text-sm font-medium text-gray-200">
          {label}
        </label>
        <Switch
          checked={editMode}
          onChange={onToggle}
          className={`${
            editMode ? "bg-blue-600" : "bg-gray-500"
          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
        >
          <span
            className={`${
              editMode ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
      </div>

      {textarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder || "—"}
          value={value}
          onChange={onChange}
          disabled={!editMode}
          rows={rows}
          className={`
            ${baseClasses}
            ${editMode ? "bg-white text-black resize-y" : "bg-gray-900 text-gray-400 resize-none"}
          `}
        />
      ) : (
        <input
          id={name}
          name={name}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={!editMode}
          className={`
            ${baseClasses}
            ${editMode ? "bg-white text-black" : "bg-gray-900 text-gray-400"}
          `}
        />
      )}
    </div>
  );
}