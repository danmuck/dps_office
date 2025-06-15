"use client";

import React from "react";
import { Switch } from "@headlessui/react";

interface ToggledSelectorFormInputProps {
  /** name of the form field to send with the selected values */
  name: string;
  /** Display label */
  label: string;
  /** Editable or locked */
  editMode: boolean;
  /** Toggle edit mode on/off */
  onToggle: () => void;
  /** List of all possible items. Strings starting with '+' are default-on and locked */
  options: string[];
  /** Current selected items */
  value: string[];
  /** Handle selection changes */
  onChange: (newValues: string[]) => void;
}

export default function ToggledSelectorFormInput({
  name,
  label,
  editMode,
  onToggle,
  options,
  value,
  onChange,
}: ToggledSelectorFormInputProps) {
  function toggleValue(item: string) {
    if (!editMode) return;
    const cleanItem = item.replace(/^\+/, "");
    const isDefault = item.startsWith("+");
    if (isDefault) return;
  
    const updated = value.includes(cleanItem)
      ? value.filter((v) => v !== cleanItem)
      : [...value, cleanItem];
  
    const defaults = options
      .filter((opt) => opt.startsWith("+"))
      .map((opt) => opt.replace(/^\+/, ""));
  
    const merged = Array.from(new Set([...updated, ...defaults]));
  
    onChange(merged);
  }

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-200">{label}</label>
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

      <fieldset className={`mt-3 space-y-2 ${!editMode ? "opacity-50" : ""}`}>
        {options.map((item) => {
          const isDefault = item.startsWith("+");
          const clean = item.replace(/^\+/, "");
          const selected = value.includes(clean);
          return (
            <label key={clean} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name={name}
                value={clean}
                checked={selected || isDefault}
                disabled={isDefault || !editMode}
                onChange={() => toggleValue(item)}
                className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-white">{clean}</span>
            </label>
          );
        })}
      </fieldset>
    </div>
  );
}