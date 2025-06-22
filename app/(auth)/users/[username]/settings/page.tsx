import type { User } from "@/app/types/user";
import ModifyUser from "@/app/components/users/ModifyUser";
import { apiFetch, UnauthorizedError } from "@/app/utils/fetch_api";
import { redirect } from "next/navigation";
import { Container, Paper, Box, Typography } from "@mui/material";

interface PageProps {
	params: { username: string };
}

export default async function ModifyUserPage({ params }: PageProps) {
	const { username } = await params;
	let user = {} as User;
	try {
		// Fetch users from the API
		user = await apiFetch<User>("users/r", username, "GET");
	} catch (err) {
		if (err instanceof UnauthorizedError) {
			// If unauthorized, redirect to login
			redirect("/");
		}
		throw err;
	}
	return (
		<Container maxWidth="md" sx={{ py: 4 }}>
			<Paper elevation={3} sx={{ p: 4 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					Settings
				</Typography>
				<Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
					<Box sx={{ width: "100%", maxWidth: 600 }}>
						<ModifyUser initialUser={user} />
					</Box>
				</Box>
			</Paper>
		</Container>
	);
}
