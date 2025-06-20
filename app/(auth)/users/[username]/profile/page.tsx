import { Container, Paper, Box, Typography } from "@mui/material";
import DynamicTabs, { TabItem } from "@/app/api/components/DynamicTabs";
import UserCard from "@/app/api/components/users/UserCard";
import type { User } from "@/app/api/types/user";
import { apiFetch, UnauthorizedError } from "@/app/api/utils.server";
import { redirect } from "next/navigation";

interface ProfilePageProps {
	params: { username: string };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
	const { username } = await params;
	let user = {} as User;
	try {
		// Fetch users from the API
		user = await apiFetch<User>("users", username, "GET");
	} catch (err) {
		if (err instanceof UnauthorizedError) {
			// If unauthorized, redirect to login
			redirect("/");
		}
		throw err;
	}
	// prepare tabs for DynamicTabs component
	// note: DynamicTabs is a client component that will hydrate for interactivity
	const tabs: TabItem[] = [
		{
			id: "info",
			label: "Info",
			content: (
				<div className="space-y-2">
					<UserCard user={user} />
				</div>
			),
		},
		{
			id: "daily",
			label: "Daily",
			content: <div>Daily Message Board Component Goes Here</div>,
		},
		{
			id: "random",
			label: "Random",
			content: <div>Random Message Board Component Goes Here</div>,
		},
	];

	// 3) Render
	return (
		<Container maxWidth="md" sx={{ py: 4 }}>
			<Paper elevation={3} sx={{ p: 3 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					Profile: {user.username}
				</Typography>
				<Box sx={{ mt: 2 }}>
					<DynamicTabs initialTabs={tabs} />
				</Box>
			</Paper>
		</Container>
	);
}
