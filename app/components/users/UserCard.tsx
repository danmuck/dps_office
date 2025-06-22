import React from "react";
import Link from "next/link";
import type { User } from "@/app/types/user";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { Button, CardMedia } from "@mui/material";

interface UserCardProps {
	user: User;
	noScroll?: boolean;
}

const UserCard: React.FC<UserCardProps> = ({ user, noScroll = true }) => (
	<Card
		sx={{
			maxWidth: 300,
			width: "100%",
			...(noScroll ? { height: "100%" } : { aspectRatio: "4/3" }),
			display: "flex",
			flexDirection: "column",
		}}
		color="text.secondary"
	>
		<CardMedia
			component="img"
			image={user.avatar || "banner.svg"}
			alt={`${user.username}'s banner image`}
			sx={{
				objectFit: "contain",
			}}
		/>
		<CardHeader title={user.username} sx={{ color: "text.secondary" }} />
		<CardActionArea sx={{ color: "text.secondary", flexGrow: 0, p: 2 }}>
			<Button
				size="small"
				component={Link}
				href={`/users/${user.username}/profile`}
				sx={{ flexShrink: 0, color: "text.secondary" }}
			>
				Settings
			</Button>
			<Button
				size="small"
				sx={{ flexShrink: 0, color: "text.secondary" }}
				component={Link}
				href={`/users/${user.username}/${user._id}/banish`}
			>
				Banish
			</Button>
		</CardActionArea>
		<CardContent
			sx={{
				flexGrow: 1,
				overflow: noScroll ? "visible" : "auto",
				color: "text.secondary",
				display: "flex-col",
			}}
		>
			{/* <Typography variant="body2">
				<strong>ID:</strong> {user._id}
			</Typography> */}
			{/* <Typography variant="body2">
				<strong>Email:</strong> {user.email}
			</Typography> */}
			{user.bio && (
				<Typography variant="body2" sx={{ mt: 1 }}>
					<strong>Bio:</strong> {user.bio}
				</Typography>
			)}
			{/* <Typography variant="body2" sx={{ mt: 1 }}>
				<strong>Joined:</strong>{" "}
				{new Date(user.joined).toLocaleDateString()}
			</Typography> */}
		</CardContent>
		<CardActions sx={{ flexWrap: "wrap", gap: 1 }}>
			<Chip label={user.roles.join(", ")} size="small" />
			{user.isActive !== undefined && (
				<Chip
					label={user.isActive ? "Active" : "Inactive"}
					size="small"
					color={user.isActive ? "success" : "default"}
				/>
			)}
		</CardActions>
	</Card>
);

export default UserCard;
