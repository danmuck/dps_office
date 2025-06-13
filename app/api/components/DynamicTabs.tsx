"use client";
import React, { useState, useEffect } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  initialTabs: TabItem[];
}

export default function DynamicTabs({ initialTabs }: TabsProps) {
  const [tabs, setTabs] = useState<TabItem[]>(initialTabs);
  const [activeId, setActiveId] = useState<string>(
    initialTabs[0]?.id ?? ""
  );

  // if tabs change and activeId no longer exists, reset to first
  useEffect(() => {
    if (!tabs.find((t) => t.id === activeId) && tabs.length > 0) {
      setActiveId(tabs[0].id);
    }
  }, [tabs, activeId]);

  return (
    <div>
      {/* Tab Buttons */}
      <div className="flex border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveId(tab.id)}
            className={`px-4 py-2 -mb-px ${
              tab.id === activeId
                ? "border-b-2 border-blue-600 font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Panel */}
      <div className="p-4">
        {tabs.map(
          (tab) =>
            tab.id === activeId && (
              <div key={tab.id}>{tab.content}</div>
            )
        )}
      </div>

      {/* todo: expose a way to add a tab */}
      <div className="mt-4">
        <button
          onClick={() => {
            const newId = prompt("Tab ID (unique)");
            const newLabel = prompt("Tab Label");
            if (newId && newLabel) {
              setTabs([
                ...tabs,
                {
                  id: newId,
                  label: newLabel,
                  content: <p>This is the "{newLabel}" tab.</p>,
                },
              ]);
              setActiveId(newId);
            }
          }}
          className="text-sm text-blue-600 hover:underline"
        >
          + Add Tab
        </button>
      </div>
    </div>
  );
}