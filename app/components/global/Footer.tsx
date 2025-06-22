import React from "react";
import Image from "next/image";
import { Box, Typography, Divider } from "@mui/material";

const GlobalFooter: React.FC = () => {
	return (
		<Box
			component="footer"
			sx={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				bgcolor: "black",
				color: "grey.300",
				py: 2,
			}}
		>
			<Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 1 }}>
				<Typography variant="subtitle2" color="grey.500">
					frontend:
				</Typography>
				<Typography variant="body2">
					Next.js // React // Typescript // Tailwind CSS
				</Typography>
			</Box>
			<Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 1 }}>
				<Typography variant="subtitle2" color="grey.500">
					backend:
				</Typography>
				<Typography variant="body2">
					Golang // Gin // MongoDB
				</Typography>
			</Box>
			<Divider sx={{ width: "100%", bgcolor: "grey.700", my: 1 }} />
			<Box
				sx={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					bgcolor: "common.white",
					py: 1,
				}}
			>
				<Typography variant="caption" color="text.secondary">
					{new Date().getFullYear()}
				</Typography>
				<Box component="span" sx={{ ml: 1 }}>
					<Image
						src="/full_logo.svg"
						alt="danmuck"
						width={96}
						height={96}
					/>
				</Box>
			</Box>
		</Box>
	);
};
export default GlobalFooter;
