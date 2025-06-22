"use client";
import React from "react";
import { Container, Box, Paper, Typography, Button } from "@mui/material";

export default function ErrorBoundary({ error }: { error: Error }) {
	console.error("ErrorBoundary caught an error:", error);
	return (
		<Container
			component="main"
			sx={{
				height: "50vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				bgcolor: "error.main",
				borderRadius: 4,
			}}
		>
			<Paper elevation={18} sx={{ p: 4, textAlign: "center" }}>
				<Typography variant="h4" color="error" gutterBottom>
					[ {error.message} ]
				</Typography>
				<Typography variant="body1" sx={{ mb: 3 }}>
					Oops... stay in your own lane!
				</Typography>
				<Button
					// href="/"
					variant="contained"
					color="primary"
					onClick={() => window.location.reload()}
				>
					Home
				</Button>
			</Paper>
		</Container>
	);
}
