import {
	clientFetch,
	Response,
	UnauthorizedError,
} from "@/app/utils/fetch_client";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { redirect } from "next/navigation";

type LoginResponse = Response<{
	username: string;
}>;

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

		const response: LoginResponse = await clientFetch("users/auth/login", {
			method: "POST",
			body: {
				username,
				password,
			},
		});
		if (response.error) {
			throw new UnauthorizedError(response.error);
		}
		redirect(`/users/${username}/profile`);
	}

	return (
		<Container maxWidth="sm" sx={{ pt: 8 }}>
			<Typography variant="h4" component="h1" gutterBottom>
				Login
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
				<Button type="submit" variant="contained">
					Login
				</Button>
			</Box>
		</Container>
	);
}
