import UserGrowthGraph from "@/app/components/metrics/UserGrowth";
import { apiFetch } from "@/app/utils/fetch_api";
import React from "react";
import {
	Container,
	Paper,
	Box,
	Typography,
	List,
	ListItem,
} from "@mui/material";

/**
 * RoleCounts type represents a mapping of role names to their respective user counts.
 * It is used to track the number of users assigned to each role in the system.
 * @typedef {Record<string, number>} RoleCounts
 * @property {string} [roleName] - The name of the role.
 * @property {number} [count] - The number of users assigned to that role.
 */
type RoleCounts = Record<string, number>;

/**
 * Point type represents a data point in time with a timestamp and a count.
 * It is used to track user growth over time in the UserMetricsResponse.
 * @typedef {Object} Point
 * @property {string} timestamp - The timestamp of the data point.
 * @property {number} count - The count of users at that timestamp.
 */
type Point = {
	timestamp: string;
	count: number;
};

/**
 * UserMetricsResponse type represents the structure of the response from the user metrics API.
 * It includes total users, role counts, user growth over time, and an optional error message.
 * @typedef {Object} UserMetricsResponse
 * @property {number} total_users - The total number of users in the system.
 * @property {RoleCounts} total_roles - A mapping of role names to their respective user counts.
 * @property {Point[]} users_over_time - An array of data points representing user growth over time.
 * @property {string|null} [error] - An optional error message if the API call fails.
 */
type UserMetricsResponse = {
	total_users: number;
	total_roles: RoleCounts;
	users_over_time: Point[];
	error?: string | null;
};

/**
 * UserMetricsModule
 * Fetches and displays user metrics including total users, roles, and user growth over time.
 * Handles errors gracefully and displays relevant information.
 * @returns {JSX.Element} A React component displaying user metrics.
 */
export default async function UserMetricsModule() {
	let user_metrics: UserMetricsResponse = {
		total_users: 0,
		total_roles: {},
		users_over_time: [],
		error: null,
	};

	try {
		const res = await apiFetch<{
			total_users: number;
			total_roles: Record<string, number>;
			users_over_time: Point[];
		}>("metrics", "users", "GET");

		user_metrics.total_users = res.total_users;
		user_metrics.total_roles = res.total_roles;
		user_metrics.users_over_time = res.users_over_time;
		console.log("User metrics fetched:", res);
	} catch (err) {
		console.error("Error fetching user metrics:", err);
		user_metrics.error = "Failed to fetch user metrics.";
	}

	return (
		<Container maxWidth="md" sx={{ py: 4 }}>
			<Paper elevation={2} sx={{ p: 3, color: "text.secondary" }}>
				<Typography variant="h5" component="h2" gutterBottom>
					User Metrics
				</Typography>
				{user_metrics.error ? (
					<Typography color="error" variant="body2" gutterBottom>
						{user_metrics.error}
					</Typography>
				) : (
					<>
						<Box sx={{ mb: 2 }}>
							<UserGrowthGraph
								data={user_metrics.users_over_time}
							/>
						</Box>
						<Box sx={{ mt: 2, color: "text.secondary" }}>
							<Typography variant="body2">
								Total users: {user_metrics.total_users}
							</Typography>
							<List dense>
								{Object.entries(user_metrics.total_roles).map(
									([role, count]) => (
										<ListItem
											key={role}
											sx={{ py: 0, px: 0 }}
										>
											<Typography
												variant="body2"
												component="span"
												sx={{ fontWeight: "medium" }}
											>
												{role}
											</Typography>
											{`: ${count}`}
										</ListItem>
									)
								)}
							</List>
						</Box>
					</>
				)}
			</Paper>
		</Container>
	);
}
