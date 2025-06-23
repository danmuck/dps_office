import Link from "next/link";
import { Container, Paper, Typography, Box, Button } from "@mui/material";

export default async function UserLandingPage({
	params,
}: {
	params: { username: string };
}) {
	const { username } = await params;
	return (
		<Container maxWidth="sm" sx={{ py: 4 }}>
			<Paper elevation={3} sx={{ p: 3 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					User Page: {username}
				</Typography>
				<Typography variant="body1" gutterBottom>
					This is the landing page towards the user’s profile.
				</Typography>
				<Box sx={{ mt: 2 }}>
					<Button
						component={Link}
						href={`/users/${username}/profile`}
						variant="contained"
					>
						Go to Profile
					</Button>
				</Box>
			</Paper>
		</Container>
	);
}
