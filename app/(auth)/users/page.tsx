import UserCard from "@/app/api/components/users/UserCard";
import type { User, } from "@/app/api/types/user";
import { API_BASE } from "@/app/api/types/constants";

export default async function UsersPage() {
  // fetch from backend API (golang/gin:dps_http)
  const res = await fetch(`${API_BASE}/users`, {
    next: { revalidate: 60 },  // revalidate every minute
    // cache: "no-store",         // always get fresh data on the server
  });

  if (!res.ok) {
    throw new Error(`failed to load users: ${res.status}`);
  }

  const users: User[] = await res.json();

  return (
    <main className="p-4 flex flex-col gap-8 items-center sm:items-start">
      <h1 className="text-2xl font-bold">Users</h1>
      <ul className="space-y-2 w-full flex flex-wrap">
        {users.map((user) => (
          <UserCard key={user._id} user={user}  />
        ))}
      </ul>
      <p className="mt-4 text-sm text-gray-500">
        Last fetched: {new Date().toLocaleTimeString()}
      </p>
    </main>
  );
}