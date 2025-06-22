"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import {
	Container,
	Grid,
	Box,
	Typography,
	List,
	ListItem,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
export default function Home() {
	return (
		<Container
			maxWidth="lg"
			sx={{
				py: 4,
				color: "text.secondary",
				backgroundColor: "primary.light",
				borderRadius: 2,
			}}
		>
			<Typography
				variant="h5"
				align="center"
				gutterBottom
				sx={{
					backgroundColor: "error.main",
					color: "text.secondary",
					p: 2,
					borderRadius: 1,
				}}
			>
				[ -- UNDER CONSTRUCTION -- ]
			</Typography>

			<Grid container spacing={4} sx={{ py: 4 }}>
				<Grid size={{ md: 6, xs: 6 }}>
					<Typography variant="body1">
						Welcome to my daily productivity suite (dps)! This is a
						personal project designed to help manage daily tasks,
						track progress, and enhance productivity.
					</Typography>
					<Typography variant="body1">
						This aims to serve as both my personal portfolio, as
						well as my daily task manager and simply a sandbox where
						I can develop around ideas that I am passionate about.
					</Typography>
				</Grid>
				<Grid size={{ md: 6, xs: 0 }} sx={{ textAlign: "center" }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							gap: 2,
							mt: 2,
							rounded: 50,
							boxShadow: 3,
						}}
					>
						<Image
							src="/full_logo.svg"
							alt="danmuck"
							width={256}
							height={256}
							className="rounded-full shadow-lg"
						/>
						<Button
							component="a"
							href="https://github.com/danmuck"
							target="_blank"
						>
							<GitHubIcon
								fontSize="large"
								sx={{ fontSize: 40 }}
							/>
						</Button>
						<Button
							component="a"
							href="https://www.linkedin.com/in/danmuck/"
							target="_blank"
						>
							<LinkedInIcon
								fontSize="large"
								sx={{ fontSize: 40 }}
							/>
						</Button>
					</Box>
				</Grid>
			</Grid>

			<Box sx={{ py: 2 }}>
				<Typography variant="h5" gutterBottom>
					Education
				</Typography>
				<List>
					<ListItem>
						SUNY at Buffalo, School of Engineering and Applied
						Science
					</ListItem>
					<ListItem>Corning Community College</ListItem>
				</List>
			</Box>
			<Box sx={{ py: 2 }}>
				<Typography variant="h5" gutterBottom>
					Skills
				</Typography>
				<List>
					<ListItem>
						Arsenal: Golang C Python Rust TypeScript
					</ListItem>
					<ListItem>
						Tooling: UNIX/MacOS Docker Git MongoDB Postgres Agile
					</ListItem>
					<ListItem>
						Frameworks: Node.js / React / Next.js / Go-Gin / Django
					</ListItem>
					<ListItem>
						Networking: HTTP TCP/UDP WebRTC Websockets
					</ListItem>
				</List>
			</Box>
		</Container>
	);
}
