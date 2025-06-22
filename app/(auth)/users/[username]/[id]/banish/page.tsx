import { redirect } from "next/navigation";
import { apiFetch } from "@/app/utils/fetch_api";
import { Box, Typography, Button, Container } from "@mui/material";

interface BanishUserPageProps {
	params: { username: string; id: string };
}

export default async function BanishUserPage({ params }: BanishUserPageProps) {
	const { username, id } = await params;

	async function banishUser() {
		"use server";
		await apiFetch(`users`, id, "DELETE");
		redirect(`/users`);
	}

	return (
		<form action={banishUser}>
			<Container maxWidth="sm" sx={{ pt: 8 }}>
				<Typography variant="h5" gutterBottom>
					Banish User (ID: {id})
				</Typography>
				<Typography variant="body1" gutterBottom>
					Are you sure you want to banish <strong>{username}</strong>?
					This action cannot be undone.
				</Typography>
				<Box sx={{ mt: 3, display: "flex", gap: 2 }}>
					<Button type="submit" variant="contained" color="error">
						Yes, Banish
					</Button>
					<Button variant="outlined" href="/users">
						Cancel
					</Button>
				</Box>
			</Container>
		</form>
	);
}
