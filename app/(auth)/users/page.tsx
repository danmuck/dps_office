import React from "react";
import UserCard from "@/app/api/components/users/UserCard";
import type { User } from "@/app/api/types/user";
import { apiFetch, UnauthorizedError } from "@/app/api/utils.server";
import { redirect } from "next/navigation";
import { Container, Typography, Grid } from "@mui/material";

export default async function UsersPage() {
	let users = [] as User[];
	try {
		// Fetch users from the API
		users = await apiFetch<User[]>("users", "", "GET");
	} catch (err) {
		if (err instanceof UnauthorizedError) {
			// If unauthorized, redirect to login
			redirect("/");
		}
		throw err;
	}

	return (
		<Container maxWidth="lg" sx={{ py: 4 }}>
			<Typography variant="h4" component="h1" gutterBottom>
				Users
			</Typography>

			<Grid container spacing={2}>
				{users.map((user) => (
					<Grid key={user._id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
						<UserCard user={user} />
					</Grid>
				))}
			</Grid>

			<Typography variant="caption" color="text.secondary" sx={{ mt: 2 }}>
				Last fetched: {new Date().toLocaleTimeString()}
			</Typography>
		</Container>
	);
}
