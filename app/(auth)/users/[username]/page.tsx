import Link from "next/link";

export default async function UserLandingPage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = await params;
  return (
    <div className="p-4 m-4 border rounded-lg">
      <h1 className="text-2xl font-bold">User Landing Page: {username}</h1>
      <p>This is the landing page towards the user’s profile.</p>
      <Link href={`/users/${username}/profile`} className="text-blue-500">
        Profile
      </Link>
    </div>
  );
}