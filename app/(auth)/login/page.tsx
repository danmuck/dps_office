import { apiRequest } from "@/app/api/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default function LoginPage() {
  async function loginAction(formData: FormData) {
    "use server";

    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const res = await apiRequest("auth", "login", "POST", { username, password });

    const sc = res.headers.get("set-cookie");
    if (sc) {
      const raw = sc.split(";")[0];      // "jwt=XYZ"
      const [, token] = raw.split("=");
      const cooks = await cookies();
      cooks.set({
        name: "jwt",
        value: token,
        path: "/",
        httpOnly: true,
      });
    }

    const { username: user } = await res.json();

    // redirect to their profile
    redirect(`/users/${encodeURIComponent(user)}/profile`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600">
      <div className="max-w-md w-full bg-black p-8 rounded-lg shadow-lg">
        <h1 className="text-white-500 text-3xl font-extrabold text-center mb-6">Login</h1>
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
              className="w-[1/2] flex justify-center py-2 px-4 border-6 border-white text-sm font-medium rounded-full text-black bg-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-white-500"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
