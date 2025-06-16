"use client";

import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	CartesianGrid,
} from "recharts";

/**
 * Point type represents a data point in time with a timestamp and a count.
 * @typedef {Object} Point
 * @property {string} timestamp - The timestamp of the data point.
 * @property {number} count - The count of users at that timestamp.
 */
type Point = {
	timestamp: string;
	count: number;
};

interface UserGrowthGraphProps {
	data: Point[];
}

export default function UserGrowthGraph({ data }: UserGrowthGraphProps) {
	return (
		<div className="w-full h-64 p-8 pt-4 bg-gray-900 rounded-lg shadow">
			<h3 className="text-white text-sm font-semibold">
				User Growth {data.length}
			</h3>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={data}
					margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray="5 5" stroke="#444" />
					<XAxis
						dataKey="timestamp"
						stroke="#ccc"
						tick={{ fontSize: 12 }}
					/>
					<YAxis
						stroke="#ccc"
						tick={{ fontSize: 12 }}
						allowDecimals={false}
					/>
					<Tooltip
						contentStyle={{
							backgroundColor: "#1f2937",
							borderColor: "#4b5563",
						}}
						labelStyle={{ color: "#fff" }}
						itemStyle={{ color: "#fff" }}
					/>
					<Line
						type="monotone"
						dataKey="count"
						stroke="#8884d8"
						strokeWidth={2}
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
