import React from "react";
import UserCard from "@/app/api/components/users/UserCard";
import type { User, } from "@/app/api/types/user";
import { API_BASE } from "@/app/api/types/constants";
import { redirect } from "next/navigation";
import { apiFetch } from "@/app/api/utils";



export default async function UsersPage() {
  // fetch from backend API (golang/gin:dps_http)
  // const res = await fetch(`${API_BASE}/users`, {
  //   cache: "no-store",  
  //   credentials: "include", // include cookies for session management
  // });
  // console.log("fetching users from", `${API_BASE}/users`);
  // if (res.status !== 200  ) {
  //   console.log("failed to fetch users:", res.status, res.statusText);
  //   redirect("/"); // redirect to home page on error
  // }

  // const users: User[] = await res.json();
  // console.log("fetched users:", res.status, res.statusText, users);

  const users = await apiFetch<User[]>("users", "", "GET");
  
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