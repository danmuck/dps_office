import UserMetricsModule from "./@users/page";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full flex flex-col gap-4 p-4">
			{children}
			<header className="text-2xl font-bold">Dashboard</header>

			<main className="h-full w-full overflow-auto grid grid-cols-3 gap-8 border rounded-lg border-pink-600">
				<div className="col-span-1 space-y-4 p-4 border rounded-lg border-yellow-800">
					{/* <UserMetricsModule /> */}
				</div>

				<div className="col-span-2 space-y-4 p-4 border rounded-lg border-blue-800">
					<UserMetricsModule />
				</div>
			</main>
		</div>
	);
}
