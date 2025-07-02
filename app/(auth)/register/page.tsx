import { redirect } from "next/navigation";
import {
	apiRequest,
	setCookiesFromResponseHeaders,
	UnauthorizedError,
} from "@/app/utils/fetch_api";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function RegisterPage() {
	async function handleRegister(formData: FormData) {
		"use server";
		const username = formData.get("username")?.toString() ?? "";
		const email = formData.get("email")?.toString() ?? "";
		const password = formData.get("password")?.toString() ?? "";
		const confirm = formData.get("confirm")?.toString() ?? "";

		if (password !== confirm) {
			throw new Error("Passwords do not match");
		}
		try {
			const res = await apiRequest("auth", "register", "POST", {
				username,
				email,
				password,
				confirm,
			});
			await setCookiesFromResponseHeaders(res.headers, [
				"jwt",
				"username",
			]);
			const { username: user } = await res.json();
			redirect(`/users/${encodeURIComponent(user)}/profile`);
		} catch (err) {
			if (err instanceof UnauthorizedError) {
				redirect("/");
			}
			throw err;
		}
	}

	return (
		<Container maxWidth="sm" sx={{ pt: 8 }}>
			<Typography variant="h4" component="h1" gutterBottom>
				Register
			</Typography>
			<Box
				component="form"
				action={handleRegister}
				sx={{ display: "flex", flexDirection: "column", gap: 2 }}
			>
				<TextField label="Username" name="username" required />
				<TextField label="Email" name="email" type="email" required />
				<TextField
					label="Password"
					name="password"
					type="password"
					required
				/>
				<TextField
					label="Confirm Password"
					name="confirm"
					type="password"
					required
				/>
				<Button type="submit" variant="contained">
					Register
				</Button>
			</Box>
		</Container>
	);
}
