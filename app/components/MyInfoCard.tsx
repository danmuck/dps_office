import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Button, CardMedia } from "@mui/material";
export const dynamic = "force-dynamic";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const UserCard: React.FC = () => (
	<Card
		sx={{
			height: 256,
			width: 426,
			display: "flex",
			flexDirection: "column",
			position: "relative",
		}}
	>
		<CardMedia
			component="img"
			image={"full_logo.svg"}
			alt={`danmuck's banner image`}
			sx={{
				objectFit: "contain",
				height: "auto",
				// aspectRatio: "4/3",
				width: "56%",
				position: "absolute",
				top: 64,
				left: 18,
				zIndex: 0,
			}}
		/>
		{/* <CardMedia
			component="img"
			image={"dm_logo.svg"}
			alt={`danmuck's banner image`}
			sx={{
				objectFit: "contain",
				height: "auto",
				aspectRatio: "4/3",
				width: "15%",
				position: "absolute",
				top: 96,
				right: 0,
				zIndex: 0,
			}}
		/> */}
		<CardMedia
			component="img"
			image={"banner.svg"}
			alt={`danmuck's banner image`}
			sx={{
				objectFit: "contain",
				position: "absolute",
				bottom: 0,
				right: 0,
				zIndex: 0,
			}}
		/>
		<CardContent
			sx={{
				objectFit: "contain",
				position: "absolute",
				bottom: 0,
				right: 0,
				zIndex: 999,
				padding: 2,

				height: 96,
				width: 256,
				display: "flex",
			}}
		>
			<CardActionArea sx={{ p: 2 }}>
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
				<Button
					component="a"
					href="mailto:admin@danmuck.dev"
					target="_blank"
				>
					<MailOutlineIcon fontSize="large" sx={{ fontSize: 40 }} />
				</Button>
			</CardActionArea>
		</CardContent>
	</Card>
);

export default UserCard;
