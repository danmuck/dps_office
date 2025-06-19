// app/(auth)/register/page.tsx
import { redirect } from "next/navigation";
import {
	apiFetch,
	apiRequest,
	setCookiesFromResponseHeaders,
	UnauthorizedError,
} from "@/app/api/utils.server";

export const metadata = { title: "Register" };

export default function RegisterPage() {
	// This function runs on the server whenever the form is submitted.
	async function handleRegister(formData: FormData) {
		"use server";
		const username = formData.get("username")?.toString() ?? "";
		const email = formData.get("email")?.toString() ?? "";
		const password = formData.get("password")?.toString() ?? "";
		const confirm = formData.get("confirm")?.toString() ?? "";

		if (password !== confirm) {
			throw new Error("!passwords do not match");
		}

		try {
			const res = await apiRequest("auth", "register", "POST", {
				username,
				email,
				password,
				confirm,
			});

			await setCookiesFromResponseHeaders(res.headers, [
				"jwt",
				"username",
			]);

			const { username: user } = await res.json();
			// Success! Redirect to profile:
			redirect(`/users/${username}/profile`);
		} catch (err) {
			if (err instanceof UnauthorizedError) {
				redirect("/");
			}
			// Re-throw to show an error
			throw err;
		}
	}

	return (
		<div className="pt-32 flex items-center justify-center">
			<div className="max-w-md w-full bg-black p-8 border border-white rounded-lg">
				<h1 className="text-2xl font-bold mb-4">Register</h1>
				{/* Notice: action is our server function */}
				<form action={handleRegister} className="space-y-4">
					<label className="block">
						<span>Username</span>
						<input
							type="text"
							name="username"
							required
							className="mt-1 w-full"
						/>
					</label>
					<label className="block">
						<span>Email</span>
						<input
							type="email"
							name="email"
							required
							className="mt-1 w-full"
						/>
					</label>
					<label className="block">
						<span>Password</span>
						<input
							type="password"
							name="password"
							required
							className="mt-1 w-full"
						/>
					</label>
					<label className="block">
						<span>Confirm Password</span>
						<input
							type="password"
							name="confirm"
							required
							className="mt-1 w-full"
						/>
					</label>
					<button
						type="submit"
						className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
					>
						Register
					</button>
				</form>
			</div>
		</div>
	);
}
