import type { User } from "@/app/api/types/user";
import ModifyUser from "@/app/api/components/users/ModifyUser";
import { apiFetch } from "@/app/api/utils.server";

interface PageProps {
  params: { username: string };
}

export default async function ModifyUserPage({ params }: PageProps) {
  const { username } = await params;
  const user: User = await apiFetch<User>("users", username, "GET");
  return <ModifyUser initialUser={user} />;
}