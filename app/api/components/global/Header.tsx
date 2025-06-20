import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AppBar, Toolbar, Box, Button } from "@mui/material";

const GlobalHeader: React.FC = async () => {
	const cooks = await cookies();

	const token = cooks.get("jwt")?.value || "";
	const isLoggedIn = Boolean(token);
	return (
		<AppBar position="static" color="default" elevation={1}>
			<Toolbar sx={{ bgcolor: "common.white", color: "common.black" }}>
				{/* logo & title */}
				<Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
					<Link href="/users/dirtpig/profile" passHref>
						<Box
							component="div"
							sx={{
								display: "flex",
								alignItems: "center",
								textDecoration: "none",
								color: "inherit",
							}}
						>
							<Image
								src="/full_logo.svg"
								alt="danmuck"
								width={128}
								height={128}
							/>
						</Box>
					</Link>
				</Box>

				{/* primary navigation */}
				<Box sx={{ display: "flex", gap: 2, flexGrow: 1 }}>
					<Button component={Link} href="/" color="inherit">
						Home
					</Button>
					<Button component={Link} href="/registry" color="inherit">
						Registry
					</Button>
					<Button component={Link} href="/dashboard" color="inherit">
						Dashboard
					</Button>
				</Box>

				{/* user links */}
				<Box sx={{ display: "flex", gap: 2, mr: 2 }}>
					<Button component={Link} href="/users/new" color="inherit">
						[dev]
					</Button>
					<Button component={Link} href="/users" color="inherit">
						Users
					</Button>
					<Button
						component={Link}
						href="/users/dirtpig/profile"
						color="inherit"
					>
						Profile
					</Button>
					<Button
						component={Link}
						href="/users/dirtpig/settings"
						color="inherit"
					>
						Settings
					</Button>
				</Box>

				{/* auth actions */}
				<Box sx={{ display: "flex", gap: 1 }}>
					{isLoggedIn ? (
						<Button component={Link} href="/logout" color="inherit">
							Logout
						</Button>
					) : (
						<>
							<Button
								component={Link}
								href="/login"
								color="inherit"
							>
								Login
							</Button>
							<Button
								component={Link}
								href="/register"
								color="inherit"
							>
								Register
							</Button>
						</>
					)}
				</Box>
			</Toolbar>
		</AppBar>
	);
};
export default GlobalHeader;
