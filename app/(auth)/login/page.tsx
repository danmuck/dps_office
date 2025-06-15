import { apiRequest, setCookiesFromResponseHeaders } from "@/app/api/utils.server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


/**
 * LoginPage component handles user login functionality.
 * It provides a form for users to enter their credentials and submit them.
 * 
 * @returns {JSX.Element} The rendered LoginPage component.
 */
export default function LoginPage() {
  async function loginAction(formData: FormData) {
    "use server";

    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const res = await apiRequest("auth", "login", "POST", { username, password });

    setCookiesFromResponseHeaders(res.headers, ["jwt", "username"]);

    const { username: user } = await res.json();

    redirect(`/users/${encodeURIComponent(user)}/profile`);
  }

  return (
    <div className="pt-32 flex items-center justify-center">
      <div className="max-w-md w-full bg-black p-8 border border-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form action={loginAction} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white-500">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white-500">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <div className="flex justify-center items-center">

            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Sign In
            </button>

          </div>
        </form>
      </div>
    </div>
  );
}
