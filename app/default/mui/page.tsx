import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import ProTip from "../../components/ProTip";
import Copyright from "../../components/Copyright";
import { List, ListItem } from "@mui/material";

export default function Home() {
	return (
		<Container maxWidth="lg">
			<Box
				sx={{
					my: 4,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Typography variant="h4" component="h1" sx={{ mb: 2 }}>
					Material UI - Next.js App Router example in TypeScript
				</Typography>
				<Link href="/mui/about" component={NextLink}>
					Go to the about page
				</Link>
				<ProTip />
				<Copyright />
			</Box>
			<Box
				sx={{
					mt: 4,
					p: 3,
					borderRadius: 1,
				}}
			>
				<Typography variant="h6" gutterBottom>
					Coming soon...
				</Typography>
				<List sx={{ listStyleType: "decimal", pl: 4 }}>
					{[
						"Profile",
						"Posts",
						"Comments",
						"Notifications",
						"Search",
						"Settings",
						"Admin Panel",
						"API Documentation",
						"Deployment",
						"Security Enhancements",
						"Analytics Dashboard",
						"Admin Dashboard",
						"Spam Detection",
						"Data Backup and Recovery",
						"Logging and Monitoring",
					].map((item) => (
						<ListItem key={item}>{item}</ListItem>
					))}
				</List>
			</Box>
		</Container>
	);
}
