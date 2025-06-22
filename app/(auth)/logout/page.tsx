import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { apiFetch } from "@/app/utils/fetch_api";
import { Container, Box, Typography, Button } from "@mui/material";

export default function LogoutPage() {
	async function logoutAction() {
		"use server";

		const res = await apiFetch<{}>("auth", "logout", "POST");
		if (!res) console.warn("LogoutPage: failed to log out");
		(await cookies()).delete("jwt");
		(await cookies()).delete("username");
		redirect("/");
	}

	return (
		<Container maxWidth="sm" sx={{ pt: 8 }}>
			<Typography variant="h4" component="h1" gutterBottom>
				Logout
			</Typography>
			<Typography variant="body1" color="textSecondary" gutterBottom>
				Are you sure you want to log out?
			</Typography>
			<form action={logoutAction}>
				<Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
					<Button type="submit" variant="contained" color="error">
						Log out
					</Button>
				</Box>
			</form>
		</Container>
	);
}
