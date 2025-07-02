import UserMetricsModule from "./@users/page";
import { Container, Box, Typography, Grid, Paper } from "@mui/material";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Container maxWidth="xl">
			{children}
			<Typography variant="h4" component="header" gutterBottom>
				Dashboard
			</Typography>

			<Grid
				container
				spacing={4}
				sx={{
					border: "1px solid",
					borderRadius: 1,
					direction: "row",
					justifyContent: "space-between",
					alignItems: "stretch",
				}}
			>
				<Grid size={4}>
					<Box
						sx={{
							gap: 2,
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Paper variant="outlined" sx={{ height: "100%" }}>
							dummy
						</Paper>
						<Paper variant="outlined" sx={{ height: "100%" }}>
							filler
						</Paper>
					</Box>
				</Grid>
				<Grid size={"grow"}>
					<Box
						sx={{
							gap: 2,
							display: "flex",
							flexDirection: "column",
						}}
					>
						<Paper variant="outlined">
							<UserMetricsModule />
						</Paper>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}
