import React from "react";
import UserCard from "@/app/api/components/users/UserCard";
import type { User } from "@/app/api/types/user";
import { apiFetch, UnauthorizedError } from "@/app/api/utils.server";
import { redirect } from "next/navigation";

export default async function UsersPage() {
	let users = [] as User[];
	try {
		// Fetch users from the API
		users = await apiFetch<User[]>("users", "", "GET");
	} catch (err) {
		if (err instanceof UnauthorizedError) {
			// If unauthorized, redirect to login
			redirect("/");
		}
		throw err;
	}

	return (
		<main className="p-4 flex flex-col gap-8 items-center sm:items-start">
			<h1 className="text-2xl font-bold">Users</h1>
			<ul className="space-y-2 w-full flex flex-wrap">
				{users.map((user) => (
					<UserCard key={user._id} user={user} />
				))}
			</ul>
			<p className="mt-4 text-sm text-gray-500">
				Last fetched: {new Date().toLocaleTimeString()}
			</p>
		</main>
	);
}
