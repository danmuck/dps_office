"use client";
import React, { useState, useEffect } from "react";
import { Tabs, Tab, Box, Button } from "@mui/material";

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
	const [activeId, setActiveId] = useState<string>(initialTabs[0]?.id ?? "");

	// if tabs change and activeId no longer exists, reset to first
	useEffect(() => {
		if (!tabs.find((t) => t.id === activeId) && tabs.length > 0) {
			setActiveId(tabs[0].id);
		}
	}, [tabs, activeId]);

	return (
		<Box>
			{/* Tab List */}
			<Tabs
				value={activeId}
				onChange={(_, newValue) => setActiveId(newValue)}
				variant="scrollable"
				scrollButtons="auto"
			>
				{tabs.map((tab) => (
					<Tab key={tab.id} label={tab.label} value={tab.id} />
				))}
			</Tabs>

			{/* Active Panel */}
			<Box sx={{ p: 2 }}>
				{tabs.map(
					(tab) =>
						tab.id === activeId && (
							<Box key={tab.id}>{tab.content}</Box>
						)
				)}
			</Box>

			{/* + Add Tab */}
			<Box sx={{ mt: 2 }}>
				<Button
					variant="text"
					color="primary"
					onClick={() => {
						const newId = prompt("Tab ID (unique)");
						const newLabel = prompt("Tab Label");
						if (newId && newLabel) {
							setTabs((prev) => [
								...prev,
								{
									id: newId,
									label: newLabel,
									content: (
										<p>
											This is the &quot{newLabel}&quot
											tab.
										</p>
									),
								},
							]);
							setActiveId(newId);
						}
					}}
				>
					+ Add Tab
				</Button>
			</Box>
		</Box>
	);
}
