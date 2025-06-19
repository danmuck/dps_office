import type { User } from "@/app/api/types/user";
import ModifyUser from "@/app/api/components/users/ModifyUser";
import { apiFetch, UnauthorizedError } from "@/app/api/utils.server";
import { redirect } from "next/navigation";

interface PageProps {
	params: { username: string };
}

export default async function ModifyUserPage({ params }: PageProps) {
	const { username } = await params;
	let user = {} as User;
	try {
		// Fetch users from the API
		user = await apiFetch<User>("users", username, "GET");
	} catch (err) {
		if (err instanceof UnauthorizedError) {
			// If unauthorized, redirect to login
			redirect("/");
		}
		throw err;
	}
	return (
		<>
			<div className=" flex items-center justify-center">
				<div className="max-w-lg w-full bg-black p-8 m-8 border border-white rounded-lg shadow-lg">
					<h1 className="text-2xl font-bold mb-4">Settings</h1>
					<ModifyUser initialUser={user} />
				</div>
			</div>
		</>
	);
}
