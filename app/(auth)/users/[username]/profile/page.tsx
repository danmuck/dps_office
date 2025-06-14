import DynamicTabs, { TabItem } from "@/app/api/components/DynamicTabs";
import UserCard from "@/app/api/components/users/UserCard";
import type { User } from "@/app/api/types/user";
import { API_BASE } from "@/app/api/types/constants";
import { redirect } from "next/navigation";
import { log } from "console";
import { apiFetch } from "@/app/api/utils";


interface ProfilePageProps {
  params: { username: string };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = await params;

  // fetch user data from backend API (golang/gin:dps_http)
  // const res = await fetch(
  //   `${API_BASE}/users/${encodeURIComponent(username)}`, { 
  //     cache: "no-store",
  //     credentials: "include", 
  //   } // always fresh
    
  // );
  // if (!res.ok) {

  //   console.warn("ProfilePage: failed to fetch user:", res.status, res.statusText);    
  //   redirect("/"); // redirect to home page on error
  //   // throw new Error(`ProfilePage: failed to load user: ${res.status} ${res.statusText}`);
  // }
  // const user: User = await res.json();
  // if (!user) {
  //   throw new Error("ProfilePage: user not found");
  // }
  const user = await apiFetch<User>("users", username, "GET");
  // prepare tabs for DynamicTabs component
  // note: DynamicTabs is a client component that will hydrate for interactivity
  const tabs: TabItem[] = [
    {
      id: "info",
      label: "Info",
      content: (
        <div className="space-y-2">
          <UserCard user={user} />
        </div>
      ),
    },
    {
      id: "daily",
      label: "Daily",
      content: <div>Daily Message Board Component Goes Here</div>,
    },
    {
      id: "random",
      label: "Random",
      content: <div>Random Message Board Component Goes Here</div>,
    },
  ];

  // 3) Render
  return (
    <div className="p-4 m-4 border rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        {user.username}&apos;s Profile
      </h1>
      <DynamicTabs initialTabs={tabs} />
    </div>
  );
}