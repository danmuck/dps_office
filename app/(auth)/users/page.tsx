import React from "react";
import UserCard from "@/app/components/users/UserCard";
import type { User } from "@/app/types/user";
import { apiFetch, UnauthorizedError } from "@/app/utils/fetch_api";
import { redirect } from "next/navigation";
import { Container, Typography, Grid } from "@mui/material";
export const dynamic = "force-dynamic";
export default async function UsersPage() {
	let users = [] as User[];
	try {
		// Fetch users from the API
		users = await apiFetch<User[]>("users", "", "GET", undefined, {
			cache: "force-cache",
		});
	} catch (err) {
		if (err instanceof UnauthorizedError) {
			// If unauthorized, redirect to login
			redirect("/");
		}
		throw err;
	}

	return (
		<Container maxWidth="lg" sx={{ py: 4, color: "text.primary" }}>
			<Typography variant="h4" component="h1" gutterBottom>
				Users
			</Typography>

			<Grid container spacing={2} color={"text.secondary"}>
				{users.map((user) => (
					<Grid key={user._id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
						<UserCard user={user} />
					</Grid>
				))}
			</Grid>

			<Typography variant="caption" color="text.primary" sx={{ mt: 2 }}>
				Last fetched: {new Date().toLocaleTimeString()}
			</Typography>
		</Container>
	);
}
