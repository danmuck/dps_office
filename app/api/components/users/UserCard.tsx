import React from "react";
import Link from "next/link";
import type { User } from "@/app/api/types/user";


interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <div className="
    p-4 m-4 
    border rounded-lg 
    bg-white shadow
    max-w-sm w-full max-h-sm aspect-[4/3]
">
    <h2 className="text-xl font-semibold mb-2 text-gray-800">
        <Link href={`/users/${user.username}/profile`} className=" hover:underline">
            {user.username}
        </Link>
    </h2>
    <hr className="mb-4 text-gray-800" />
    <div className="space-y-2 text-gray-700">
      <p><strong>ID:</strong> {user._id}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Roles:</strong> {user.roles.join(", ")}</p>
        <p><strong>Joined:</strong> {new Date(user.joined).toLocaleDateString()}</p>
        {user.bio && <p><strong>Bio:</strong> {user.bio}</p>}
        {/* {user.avatar && (
          <Image 
            src={user.avatar}
            alt={`${user.username}'s avatar`}
            width={50}
            height={50}
            className="rounded-full">
            </Image>
        )} */}
        {user.isActive !== undefined && (
          <p>
            <strong>Status:</strong> {user.isActive ? "Active" : "Inactive"}
          </p>
        )}
        {user.lastActive && (
          <p>
            <strong>Last Active:</strong> {new Date(user.lastActive).toLocaleString()}
          </p>
        )}
    </div>
  </div>
);

export default UserCard;
