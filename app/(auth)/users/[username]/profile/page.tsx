import DynamicTabs, { TabItem } from "@/app/api/components/DynamicTabs";
import UserCard from "@/app/api/components/users/UserCard";
import type { User } from "@/app/api/types/user";
import { API_BASE } from "@/app/api/types/constants";


interface ProfilePageProps {
  params: { username: string };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { username } = await params;

  // fetch user data from backend API (golang/gin:dps_http)
  const res = await fetch(
    `${API_BASE}/users/${encodeURIComponent(username)}`,
    { cache: "no-store" } // always fresh
  );
  if (!res.ok) {
    throw new Error(`failed to load user: ${res.status}`);
  }
  const user: User = await res.json();
  if (!user) {
    throw new Error("user not found");
  }
  // prepare tabs for DynamicTabs component
  // note: DynamicTabs is a client component that will hydrate for interactivity
  //       so we can pass the tabs as a prop
  //       and it will handle the state and rendering
  //       this is useful for dynamic content like message boards
  //       where we want to fetch data on the client side
  //       but still keep the initial render on the server side
  //       this way we can avoid hydration errors and still have a good user experience
  //       we can also use the initialTabs prop to set the initial state of the tabs
  //       and then let the client component handle the rest
  //       this is a good pattern for dynamic content that needs to be interactive
  //       and we can also add more tabs later if needed
  //       this is a good way to keep the server and client components separate
  //       and still have a good user experience
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
      {/* DynamicTabs is a client component, it will hydrate for interactivity */}
      <DynamicTabs initialTabs={tabs} />
    </div>
  );
}