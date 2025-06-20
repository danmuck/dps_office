import React from "react";
import RouteRegistry from "../../api/components/dev/RouteRegistry";
import { Container, Paper, Box, Typography } from "@mui/material";

const RegistryLandingPage: React.FC = async () => {
	// a little delay just to feel something
	await new Promise((resolve) => setTimeout(resolve, 100));
	return (
		<Container maxWidth="md" sx={{ py: 4 }}>
			<Paper elevation={2} sx={{ p: 3 }}>
				<Typography variant="h5" gutterBottom>
					Available Routes
				</Typography>
				<Box sx={{ mt: 2 }}>
					<RouteRegistry />
				</Box>
			</Paper>
		</Container>
	);
};
export default RegistryLandingPage;
