// components/RouteRegistry.tsx
import fs from "fs";
import path from "path";
// import ListItem from "../lists/ListItem";
import { Box, Button, Grid, List, ListItem, Typography } from "@mui/material";

function getRoutePaths(dir: string, parent = ""): string[] {
	const entries = fs.readdirSync(dir, { withFileTypes: true });
	let routes: string[] = [];

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			// If it's a route-group folder (e.g. "(auth)"), recurse but keep the same parent path
			if (entry.name.startsWith("(") && entry.name.endsWith(")")) {
				routes.push(...getRoutePaths(fullPath, parent));
			} else {
				// Normal folder: include its segment
				const newParent = path.join(parent, entry.name);
				routes.push(...getRoutePaths(fullPath, newParent));
			}
		} else if (entry.isFile() && entry.name === "page.tsx") {
			// Build the URL from `parent` (or "/" for root)
			let route = parent || "/";

			// Normalize Windows separators
			route = route.replace(/\\+/g, "/");

			// Convert dynamic segments:
			//   [...slug] → :slug*    and   [id] → :id
			route = route
				.replace(/\[\.\.\.(.+?)\]/g, ":$1*")
				.replace(/\[(.+?)\]/g, ":$1");

			// Ensure a leading slash (so "users" → "/users", but "/" stays "/")
			if (!route.startsWith("/")) {
				route = "/" + route;
			}

			routes.push(route);
		}
	}

	return routes;
}

export default function RouteRegistry() {
	const appDir = path.join(process.cwd(), "app");
	const routes = getRoutePaths(appDir).sort();

	return (
		<Grid container spacing={2} p={2} className="space-y-4">
			<Grid size={6}>Available Routes</Grid>

			{/* .sort((a, b) => a.length - b.length) */}
			{routes.map((route) => {
				const segments = route.split("/").filter(Boolean);

				const isTopLevel = segments.length === 1;
				return (
					<Grid
						size={6}
						key={route}
						color={isTopLevel ? "primary" : "secondary"}
					>
						<Button
							href={route}
							variant={
								isTopLevel ? "contained" : "contained"
								// isTopLevel ? "outlined" : "outlined"
							}
							sx={{
								bgcolor: isTopLevel
									? "info.dark"
									: "success.dark",
							}}
							fullWidth
						>
							{route}
						</Button>
					</Grid>
				);
			})}
		</Grid>
	);
}
