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

export default function Home() {
	return (
		<Container maxWidth="lg" sx={{ py: 4 }}>
			<Typography
				variant="h5"
				align="center"
				gutterBottom
				sx={{
					backgroundColor: "error.main",
					color: "common.black",
					p: 2,
					borderRadius: 1,
				}}
			>
				[ -- UNDER CONSTRUCTION -- ]
			</Typography>

			<Grid container spacing={4} sx={{ py: 4 }}>
				<Grid size={{ md: 12, xs: 6 }}>
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
				<Grid size={{ md: 12, xs: 6 }} sx={{ textAlign: "center" }}>
					<Box sx={{ mt: 2 }}>
						<Image
							src="/full_logo.svg"
							alt="danmuck"
							width={256}
							height={256}
							className="rounded-full shadow-lg"
						/>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							gap: 2,
							mt: 2,
						}}
					>
						<Button
							component="a"
							href="https://github.com/danmuck"
							target="_blank"
						>
							<Image
								src="/github-mark.svg"
								alt="GitHub Logo"
								width={32}
								height={32}
								className="rounded-full shadow-lg"
							/>
						</Button>
						<Button
							component="a"
							href="https://www.linkedin.com/in/danmuck/"
							target="_blank"
							variant="contained"
							color="primary"
						>
							in
						</Button>
					</Box>
				</Grid>
			</Grid>

			<Box sx={{ py: 2 }}>
				<Typography variant="h5" gutterBottom>
					Projects
				</Typography>
				<List>
					<ListItem>dps_office (frontend)</ListItem>
					<ListItem>dps_http (backend)</ListItem>
					<ListItem>dps_net (udp server)</ListItem>
					<ListItem>dps_files (file server)</ListItem>
					<ListItem>Kademlia DHT</ListItem>
					<ListItem>Raft with KV Store</ListItem>
					<ListItem>
						Learning Management System API (team project)
					</ListItem>
				</List>
			</Box>
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
			<Box sx={{ py: 2 }}>
				<Typography variant="h5" gutterBottom>
					Aspirations
				</Typography>
				<List>
					<ListItem>Network Engineering</ListItem>
					<ListItem>
						Client/Server, p2p, Cloud infrastructure
					</ListItem>
					<ListItem>Terminal tooling && clean frontends</ListItem>
					<ListItem>Improve my skills across the stacks</ListItem>
				</List>
			</Box>

			<Box
				sx={{
					mt: 4,
					p: 3,
					backgroundColor: "grey.900",
					borderRadius: 1,
				}}
			>
				<Typography variant="h6" color="common.white" gutterBottom>
					Coming soon...
				</Typography>
				<List sx={{ listStyleType: "decimal", pl: 4 }}>
					{[
						"Profile",
						"Posts",
						"Comments",
						"Notifications",
						"Search",
						"Settings",
						"Admin Panel",
						"API Documentation",
						"Deployment",
						"Security Enhancements",
						"Analytics Dashboard",
						"Admin Dashboard",
						"Spam Detection",
						"Data Backup and Recovery",
						"Logging and Monitoring",
					].map((item) => (
						<ListItem key={item}>{item}</ListItem>
					))}
				</List>
			</Box>
		</Container>
	);
}
