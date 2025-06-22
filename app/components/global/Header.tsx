import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AppBar, Toolbar, Box, Button, ThemeProvider } from "@mui/material";
import ModeSwitch from "../ModeSwitch";

const GlobalHeader: React.FC = async () => {
	const cooks = await cookies();

	const token = cooks.get("jwt")?.value || "";
	const username = cooks.get("username")?.value || "";

	const isLoggedIn = Boolean(token);
	return (
		<AppBar position="static" elevation={1}>
			<Toolbar
				sx={{
					bgcolor: "primary.main",
					color: "secondary.main",
				}}
			>
				{/* logo & title */}
				<Box sx={{ display: "flex", alignItems: "center", mr: 4 }}>
					<Link href="/users/danmuck/profile" passHref>
						<Box
							component="div"
							sx={{
								display: "flex",
								alignItems: "center",
								textDecoration: "none",
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
					<Button
						component={Link}
						href="/about"
						color="inherit"
						sx={{ float: "right" }}
					>
						About
					</Button>

					<Button component={Link} href="/dashboard" color="inherit">
						Dashboard
					</Button>
				</Box>

				{/* administrator navigation */}
				<Box sx={{ flexGrow: 1 }}>
					{username !== "danmuck" ? (
						<></>
					) : (
						<>
							<Button
								component={Link}
								href="/registry"
								color="inherit"
							>
								Registry
							</Button>
							<Button
								component={Link}
								href="/users/new"
								color="inherit"
							>
								[dev]
							</Button>
							<Button
								component={Link}
								href="/users"
								color="inherit"
							>
								Users
							</Button>
						</>
					)}
				</Box>

				{/* user navigation */}
				<Box sx={{ display: "flex", gap: 2, mr: 2 }}>
					{!isLoggedIn ? (
						<></>
					) : (
						<>
							<Button
								component={Link}
								href={"/users/" + username + "/profile"}
								color="inherit"
							>
								Profile
							</Button>
							<Button
								component={Link}
								href={"/users/" + username + "/settings"}
								color="inherit"
							>
								Settings
							</Button>
						</>
					)}
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
