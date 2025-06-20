"use client";
import React from "react";
import { Container, Box, Paper, Typography, Button } from "@mui/material";

export default function ErrorBoundary({ error }: { error: Error }) {
	console.error("ErrorBoundary caught an error:", error);
	return (
		<Container
			component="main"
			sx={{
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				bgcolor: "grey.100",
			}}
		>
			<Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
				<Typography variant="h4" color="error" gutterBottom>
					{error.message}
				</Typography>
				<Typography variant="body1" sx={{ mb: 3 }}>
					Sorry, something went wrong. Please try again later.
				</Typography>
				<Button
					variant="contained"
					color="primary"
					onClick={() => window.location.reload()}
				>
					Reload Page
				</Button>
			</Paper>
		</Container>
	);
}
