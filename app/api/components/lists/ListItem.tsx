import React from "react";

interface ListItemProps {
    children: React.ReactNode;
    className?: string;
}

const ListItem: React.FC<ListItemProps> = ({ children, className = "" }) => {
    return (
        <li className={`p-2 m-1 ml-4 border-2 rounded-lg text-gray-500 ${className}`}>
            - {children}
        </li>
    );
}
export default ListItem;