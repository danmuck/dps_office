import {
	apiRequest,
	setCookiesFromResponseHeaders,
} from "@/app/api/utils.server";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { redirect } from "next/navigation";

/**
 * LoginPage component handles user login functionality.
 * It provides a form for users to enter their credentials and submit them.
 *
 * @returns {JSX.Element} The rendered LoginPage component.
 */
export default function LoginPage() {
	async function loginAction(formData: FormData) {
		"use server";

		const username = formData.get("username") as string;
		const password = formData.get("password") as string;

		const res = await apiRequest("auth", "login", "POST", {
			username,
			password,
		});

		setCookiesFromResponseHeaders(res.headers, ["jwt", "username"]);

		const { username: user } = await res.json();

		redirect(`/users/${encodeURIComponent(user)}/profile`);
	}

	return (
		<Container maxWidth="sm" sx={{ pt: 8 }}>
			<Typography variant="h4" component="h1" gutterBottom>
				Register
			</Typography>
			<Box
				component="form"
				action={loginAction}
				sx={{ display: "flex", flexDirection: "column", gap: 2 }}
			>
				<TextField label="Username" name="username" required />
				<TextField
					label="Password"
					name="password"
					type="password"
					required
				/>
				<Button type="submit" variant="contained" color="primary">
					Login
				</Button>
			</Box>
		</Container>
	);
}
