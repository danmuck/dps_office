"use client";
import React from "react";
import { Container, Box, CircularProgress, Typography } from "@mui/material";

export default function Loading() {
	return (
		<Container
			component="main"
			sx={{
				height: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Box sx={{ textAlign: "center" }}>
				<CircularProgress size={64} />
				<Typography variant="body1" sx={{ mt: 2 }}>
					Ein Moment...
				</Typography>
			</Box>
		</Container>
	);
}
