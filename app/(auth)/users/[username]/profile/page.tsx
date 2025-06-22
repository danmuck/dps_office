import { Container, Paper, Box, Typography, Button } from "@mui/material";
import DynamicTabs, { TabItem } from "@/app/components/DynamicTabs";
import UserCard from "@/app/components/users/UserCard";
import type { User } from "@/app/types/user";
import { apiFetch, UnauthorizedError } from "@/app/utils/fetch_api";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

interface ProfilePageProps {
	params: { username: string };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
	const { username } = await params;
	const c = await cookies();
	const id = c.get("sub")?.value || "unknown";
	console.log("ProfilePage cookies:", id, username);
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
				<Box flexDirection={"column"} display="flex" alignItems="left">
					<Box sx={{ width: "100%", maxWidth: 600 }}>
						<Button
							variant="text"
							href={`/users/${user.username}/settings`}
						>
							<Typography
								variant="h5"
								component="h2"
								gutterBottom
							>
								Settings
							</Typography>
						</Button>
						<Typography variant="body1" sx={{ mb: 2 }}>
							Here you can view and manage your profile
							information.
						</Typography>
					</Box>
					<UserCard user={user} />
				</Box>
			),
		},
		{
			id: "daily",
			label: "Daily",
			content: <Box>Daily Message Board Component Goes Here</Box>,
		},
		{
			id: "random",
			label: "Random",
			content: <Box>Random Message Board Component Goes Here</Box>,
		},
	];

	// 3) Render
	return (
		<Container maxWidth="lg" sx={{ py: 4 }}>
			<Paper elevation={24} sx={{ p: 3 }}>
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
