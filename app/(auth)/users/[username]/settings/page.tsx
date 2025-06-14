import type { User } from "@/app/api/types/user";
import ModifyUser from "@/app/api/components/users/ModifyUser";
import { apiFetch } from "@/app/api/utils.server";

interface PageProps {
  params: { username: string };
}

export default async function ModifyUserPage({ params }: PageProps) {
  const { username } = await params;
  const user: User = await apiFetch<User>("users", username, "GET");
  return( 
    <>
    <div className="pt-32 flex items-center justify-center">
      <div className="max-w-md w-full bg-black p-8 border border-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <ModifyUser initialUser={user} />
      </div>
    </div>
    </>
  )
}