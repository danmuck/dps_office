import React from "react";
import { ListItem as MUIListItem, ListItemText } from "@mui/material";

interface ListItemProps {
	children: React.ReactNode;
	className?: string;
}

const ListItem: React.FC<ListItemProps> = ({ children, className }) => {
	return (
		<MUIListItem
			className={className}
			sx={{
				p: 1,
				m: 1,
				ml: 2,
				border: "2px solid",
				borderColor: "grey.400",
				borderRadius: 1,
				color: "text.secondary",
			}}
		>
			<ListItemText primary={children} />
		</MUIListItem>
	);
};
export default ListItem;
