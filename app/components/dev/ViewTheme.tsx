import { Box, Grid, Typography } from "@mui/material";
import React from "react";
export const dynamic = "force-dynamic";

const basic = [
	{ alias: "background.default", desc: "Background - Default" },
	{ alias: "background.paper", desc: "Background - Paper" },

	{ alias: "text.primary", desc: "Text - Primary" },
	{ alias: "text.secondary", desc: "Text - Secondary" },
];
const primaries = [
	{ alias: "primary.main", desc: "Primary - Main" },
	{ alias: "primary.dark", desc: "Primary - Dark" },
	{ alias: "primary.light", desc: "Primary - Light" },
	{ alias: "primary.contrastText", desc: "Primary - Contrast Text" },
];
const secondaries = [
	{ alias: "secondary.main", desc: "Secondary - Main" },
	{ alias: "secondary.dark", desc: "Secondary - Dark" },
	{ alias: "secondary.light", desc: "Secondary - Light" },
	{ alias: "secondary.contrastText", desc: "Secondary - Contrast Text" },
];
const errors = [
	{ alias: "error.main", desc: "Error - Main" },
	{ alias: "error.dark", desc: "Error - Dark" },
	{ alias: "error.light", desc: "Error - Light" },
	{ alias: "error.contrastText", desc: "Error - Contrast Text" },
];
const warnings = [
	{ alias: "warning.main", desc: "Warning - Main" },
	{ alias: "warning.dark", desc: "Warning - Dark" },
	{ alias: "warning.light", desc: "Warning - Light" },
	{ alias: "warning.contrastText", desc: "Warning - Contrast Text" },
];
const infos = [
	{ alias: "info.main", desc: "Info - Main" },
	{ alias: "info.dark", desc: "Info - Dark" },
	{ alias: "info.light", desc: "Info - Light" },
	{ alias: "info.contrastText", desc: "Info - Contrast Text" },
];
const successes = [
	{ alias: "success.main", desc: "Success - Main" },
	{ alias: "success.dark", desc: "Success - Dark" },
	{ alias: "success.light", desc: "Success - Light" },
	{ alias: "success.contrastText", desc: "Success - Contrast Text" },
];

const getSwatch = (alias: string, desc: string) => (
	<Grid
		size={{
			xs: 12,
			sm: 12,
			md: 12,
			lg: 6,
			xl: 3,
		}}
	>
		<Box
			sx={{
				backgroundColor: alias,
				padding: 1,
				borderWidth: 4,
				borderStyle: "solid",
				borderColor: "background.paper",
				color:
					alias === "text.primary" || alias === "primary.main"
						? "background.paper"
						: "text.primary",
			}}
		>
			<Typography variant="h6">{desc} </Typography>
			<Typography variant="body1">[ {alias} ]</Typography>
		</Box>
	</Grid>
);
const swatchSection = (
	title: string,
	colors: { alias: string; desc: string }[]
) => (
	<>
		<Grid container spacing={0}>
			{colors.map((color) => (
				<React.Fragment key={color.alias}>
					{getSwatch(color.alias, color.desc)}
				</React.Fragment>
			))}
		</Grid>
	</>
);

const ThemeSwatches: React.FC = () => (
	<>
		<Typography variant="h2" gutterBottom>
			Theme Swatches
		</Typography>
		{swatchSection("Basic", basic)}
		{swatchSection("Primaries", primaries)}
		{swatchSection("Secondaries", secondaries)}
		{swatchSection("Errors", errors)}
		{swatchSection("Warnings", warnings)}
		{swatchSection("Infos", infos)}
		{swatchSection("Successes", successes)}
	</>
);

export default ThemeSwatches;
