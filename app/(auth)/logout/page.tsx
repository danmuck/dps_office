import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { apiFetch } from "@/app/api/utils.server";

export default function LogoutPage() {
  async function logoutAction() {
    "use server";

    const res = await apiFetch<{}>("auth", "logout", "POST");
    if (!res) {
      console.warn("LogoutPage: failed to log out");
    }
    (await cookies()).delete("jwt");
    redirect("/");
  }

  return (
    <div className="pt-32 flex items-center justify-center">
      <div className="max-w-md w-full bg-black p-8 border border-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Logout</h1>
        <p className="text-white-500 text-center mb-6">
          Are you sure you want to log out?
        </p>
        <div className="flex justify-center mt-20">
          <form action={logoutAction}>

            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Log out
            </button>

          </form>
        </div>
      </div>
      </div>
  );
}