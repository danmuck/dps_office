"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@mui/material";
import { Container, Grid, Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MyInfoCard from "./components/MyInfoCard";
export default function Home() {
	return (
		<Container
			maxWidth="lg"
			sx={{
				py: 4,
				borderRadius: 2,
			}}
		>
			<Typography
				variant="h5"
				align="center"
				gutterBottom
				sx={{
					p: 2,
					color: "warning.main",
					backgroundColor: "error.main",
				}}
			>
				[ -- UNDER CONSTRUCTION -- ]
			</Typography>

			<Grid container spacing={4} sx={{ py: 4 }}>
				<Grid size={{ md: 6, xs: 12 }} sx={{ textAlign: "center" }}>
					<MyInfoCard />
				</Grid>
				<Grid size={{ md: 6, xs: 12 }}>
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
			</Grid>

			<Box sx={{ p: 1, m: 1, bgcolor: "warning.main" }}>
				<Typography variant="h5" gutterBottom>
					Projects
				</Typography>
				{/* <List>
					<ListItem>dps_office (frontend)</ListItem>
					<ListItem>dps_http (backend)</ListItem>
					<ListItem>dps_net (udp server)</ListItem>
					<ListItem>dps_files (file server)</ListItem>
					<ListItem>Kademlia DHT</ListItem>
					<ListItem>Raft with KV Store</ListItem>
					<ListItem>
						Learning Management System API (team project)
					</ListItem>
				</List> */}
			</Box>
			<Box sx={{ p: 1, m: 1, bgcolor: "warning.main" }}>
				<Typography variant="h5" gutterBottom>
					Aspirations
				</Typography>
				{/* <List>
					<ListItem>Network Engineering</ListItem>
					<ListItem>
						Client/Server, p2p, Cloud infrastructure
					</ListItem>
					<ListItem>Terminal tooling && clean frontends</ListItem>
					<ListItem>Improve my skills across the stacks</ListItem>
				</List> */}
			</Box>
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
				(TMP)
				<Image
					src="/full_logo.svg"
					alt="danmuck"
					width={128}
					height={128}
					className="rounded-full shadow-lg"
				/>
				<Button
					component="a"
					href="https://github.com/danmuck"
					target="_blank"
				>
					<GitHubIcon fontSize="large" sx={{ fontSize: 40 }} />
				</Button>
				<Button
					component="a"
					href="https://www.linkedin.com/in/danmuck/"
					target="_blank"
				>
					<LinkedInIcon fontSize="large" sx={{ fontSize: 40 }} />
				</Button>
			</Box>
		</Container>
	);
}
